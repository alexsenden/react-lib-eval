import torch

from transformers import AutoTokenizer, AutoModelForCausalLM

MODEL = "deepseek-ai/DeepSeek-Coder-V2-Lite-Instruct"


class DeepSeekCoderV2:
    def __init__(self):
        self.tokenizer = AutoTokenizer.from_pretrained(MODEL, trust_remote_code=True)
        self.model = AutoModelForCausalLM.from_pretrained(
            MODEL,
            device_map="auto",
            torch_dtype=torch.float16,
            _attn_implementation="eager",
            trust_remote_code=True,
        )
        self.model.eval()

    def generate(self, prompt):

        messages = [
            {
                "role": "user",
                "content": prompt,
            }
        ]
        inputs = self.tokenizer.apply_chat_template(
            messages, add_generation_prompt=True, return_tensors="pt"
        ).to(self.model.device)

        outputs = self.model.generate(
            inputs,
            max_new_tokens=512,
            do_sample=False,
            top_k=50,
            top_p=0.95,
            num_return_sequences=1,
            eos_token_id=self.tokenizer.eos_token_id,
        )

        return self.tokenizer.decode(
            outputs[0][len(inputs[0]) :], skip_special_tokens=True
        )
