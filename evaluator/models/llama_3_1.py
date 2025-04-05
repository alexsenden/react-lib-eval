import transformers
import torch

MODEL = "meta-llama/Llama-3.1-8B"


class Llama3_1:
    def __init__(self):
        self.pipeline = pipeline = transformers.pipeline(
            "text-generation",
            model=MODEL,
            model_kwargs={"torch_dtype": torch.bfloat16},
            device_map="auto",
        )

    def generate(self, prompt):
        return self.pipeline(prompt)
