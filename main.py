import argparse
import os

from evaluator.chromadb import RagDB
from evaluator.utils.code_loader import CodeLoader
from evaluator.utils.prompt import Prompt
from evaluator.utils.extract_return import extract_return_value
from evaluator.metrics import calculate_bleu, calculate_meteor, calculate_rouge
from evaluator.models.model import Model
from benchmark.generate_from_template import generate_from_template

import nltk

nltk.download("wordnet")

VALID_MODELS = [
    "codellama-7b",
    "codellama-13b",
    "llama-3.1-8b",
    "deepseek-coder-v2",
    "test",
]

VALID_LIBRARIES = [
    "generic",
    # "priceline_pcln-design-system",
    # "themesberg_flowbite-react",
    # "shopify_polaris",
    # "carbon-design-system_carbon",
]

POSTPROCESSOR_SCRIPT = "run-linter.js"

EXTRACT_RETURN_REGEX2 = "return \(\s*<([\s\S]*?)>\s*\)"
EXTRACT_RETURN_REGEX = "\((?:[^()]*|(?R))*\)"


def parse_args():
    parser = argparse.ArgumentParser(description=".")
    parser.add_argument(
        "--model",
        type=str,
        required=True,
        help="The name of the model to be used",
    )
    parser.add_argument(
        "--allowStories",
        type=str,
        default="False",
        help="Allow StorybookJS files in the RAG DB",
    )
    parser.add_argument(
        "--allowImpl",
        type=str,
        default="False",
        help="Allow component implementation files in the RAG DB",
    )
    parser.add_argument(
        "--trialName",
        type=str,
        required=True,
        help="The name of this trial",
    )

    args = parser.parse_args()
    
    
    args.allowStories = args.allowStories.lower() == "true"
    args.allowImpl = args.allowImpl.lower() == "true"

    if not args.model in VALID_MODELS:
        raise ValueError(
            f"Model {args.model} not found in list of acceptable models: [{', '.join(VALID_MODELS)}]"
        )

    return args


def main():
    args = parse_args()
    
    print(args)

    # Craete directory for this trial's output
    output_folder = f"generated/{args.trialName}"
    while os.path.isdir(output_folder):
        output_folder += "_1"
    os.makedirs(output_folder)

    # Load the LLM
    model = Model(args.model)

    for library in VALID_LIBRARIES:
        # Generate the ground truths, format, and delete the raw files
        os.makedirs(f"{output_folder}/gt-raw")
        os.makedirs(f"{output_folder}/gt/{library}")
        generate_from_template(
            library, f"{output_folder}/gt-raw", path_prefix="benchmark/"
        )
        os.system(
            f"cd ./postprocessor/linter; node {POSTPROCESSOR_SCRIPT} inputDir=../../{output_folder}/gt-raw/{library} outputDir=../../{output_folder}/gt/{library}"
        )
        os.system(f"rm -rf {output_folder}/gt-raw")

        # Initialize RAG DB and add library to it
        rag_db = RagDB()
        rag_db.add_dir_to_chromadb(
            f"libraries/{library}",
            allow_stories=args.allowStories,
            allow_impl=args.allowImpl,
        )

        # Create directory for this library's output
        os.makedirs(f"{output_folder}/prediction-raw/{library}")

        prompter = Prompt(library=library, generated_path=output_folder)

        while prompter.has_next():
            # Get the next prompt
            prompt, filename = prompter.get_next()

            # Retrieve relevant code from RAG DB
            retrieval = rag_db.retrieve_relevant_code(prompt)

            # Generate the processed input prompt
            prompt = prompter.process_prompt(prompt, retrieval)
            # print("-------------------------------------------------------------------------")
            # print(f"Prompt: {prompt}")
            # print("-------------------------------------------------------------------------\n\n\n\n\n\n\n")

            # Generate the code using the model
            generated = model.generate(prompt)

            # Write the generated code to the output directory
            with open(
                f"{output_folder}/prediction-raw/{library}/{filename}.jsx", "w"
            ) as file:
                generated = extract_return_value(generated)
                file.write(generated)

        # Run postprocessor on the generated code and delete the raw files
        os.makedirs(f"{output_folder}/prediction/{library}")
        os.system(
            f"cd ./postprocessor/linter;node {POSTPROCESSOR_SCRIPT} inputDir=../../{output_folder}/prediction-raw/{library} outputDir=../../{output_folder}/prediction/{library}"
        )
        # os.system(f"rm -rf {output_folder}/prediction-raw/{library}")

        rag_db.cleanup()

    os.system(f"rm -rf {output_folder}/prediction-raw")

    # Run the evaluator on the generated code
    code_loader = CodeLoader(generated_path=output_folder)

    # Create a file for the results and write the headers
    with open(f"{output_folder}/results.csv", "w") as result_file:
        result_file.write(
            "filename,library,bleu,meteor,rouge1f,rouge1p,rouge1r,rouge2f,rouge2p,rouge2r\n"
        )

        # Iterate through generated code
        while code_loader.has_next():
            gt, prediction, filename, library = code_loader.get_next()

            # Calculate metrics
            bleu = calculate_bleu(gt, prediction)
            meteor = calculate_meteor(gt, prediction)
            rouge = calculate_rouge(gt, prediction)

            rouge1 = rouge.get("rouge1")
            rouge2 = rouge.get("rouge2")

            # Write the results to the CSV file
            result_file.write(
                f"{filename},{library},{bleu},{meteor},{rouge1.fmeasure},{rouge1.precision},{rouge1.recall},{rouge2.fmeasure},{rouge2.precision},{rouge2.recall}\n"
            )


main()
