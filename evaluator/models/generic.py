import torch

from transformers import (
    AutoTokenizer,
    AutoModelForCausalLM,
    StoppingCriteria,
    StoppingCriteriaList,
)


class StopStringCriteria(StoppingCriteria):
    def __init__(self, stop_string, tokenizer):
        self.stop_string = stop_string
        self.tokenizer = tokenizer

    def __call__(self, input_ids: torch.LongTensor, scores: torch.FloatTensor) -> bool:
        # Decode the generated text
        decoded_text = self.tokenizer.decode(input_ids[0], skip_special_tokens=True)
        return self.stop_string in decoded_text


class Generic:
    def __init__(self, model_name):
        self.model_name = model_name
        self.tokenizer = AutoTokenizer.from_pretrained(
            model_name, trust_remote_code=True
        )
        self.model = AutoModelForCausalLM.from_pretrained(
            model_name,
            device_map="auto",
            torch_dtype=torch.float16,
            _attn_implementation="eager",
            trust_remote_code=True,
        )
        self.model.eval()
        self.stop_criteria = StoppingCriteriaList(
            [
                StopStringCriteria("```\n\n", self.tokenizer),
                StopStringCriteria(";\n```", self.tokenizer),
            ]
        )

    def generate(self, prompt):
        messages = [
            {
                "role": "system",
                "content": """You are a frontend software developer using JavaScript and React. 

In your code, Use div elements with the style prop's `display: flex` and `flexDirection` parameters to control layout.
Only write .jsx code. Do not use css or tailwind css. Do not use in-line styles except for `display: flex` and `flexDirection` parameters on the div component.
Only use components from the library that I provide you and basic HTML components.
Use as few components as necessary, and pass as few props as necessary. That means no additional props for styling.
Assume any necessary provider wrappers are already present higher in the component hierarchy (i.e. ThemeProvider, ToastProvider, etc.).""",
            },
            {
                "role": "user",
                "content": prompt,
            },
        ]
        inputs = self.tokenizer.apply_chat_template(
            messages, add_generation_prompt=True, return_tensors="pt"
        ).to(self.model.device)

        outputs = self.model.generate(
            inputs,
            max_new_tokens=1024,
            do_sample=True,
            top_k=50,
            top_p=0.95,
            num_return_sequences=1,
            eos_token_id=self.tokenizer.eos_token_id,
            pad_token_id=self.tokenizer.eos_token_id,
            stopping_criteria=StoppingCriteriaList([self.stop_criteria]),
        )
        return self.tokenizer.decode(
            outputs[0][len(inputs[0]) :], skip_special_tokens=True
        )
