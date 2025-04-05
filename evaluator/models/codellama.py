from transformers import AutoTokenizer
import transformers
import torch


def get_model_name(params):
    return f"meta-llama/CodeLlama-{params}b-Instruct-hf"


class CodeLlama:
    def __init__(self, params):
        model = get_model_name(params)

        self.tokenizer = AutoTokenizer.from_pretrained(model)
        self.pipeline = transformers.pipeline(
            "text-generation",
            model=model,
            torch_dtype=torch.float16,
            device_map="auto",
        )

    def generate(self, prompt):
        sequences = self.pipeline(
            prompt,
            do_sample=True,
            top_k=10,
            temperature=0.1,
            top_p=0.95,
            num_return_sequences=1,
            eos_token_id=self.tokenizer.eos_token_id,
            max_length=200,
        )
        return sequences[0]["generated_text"]
