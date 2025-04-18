from .codellama import CodeLlama
from .deepseek_coder_v2 import DeepSeekCoderV2
from .llama_3_1 import Llama3_1
from .testmodel import TestModel
from .generic import Generic


class Model:
    def __init__(self, model_name):
        self.model = None

        match model_name:
            case "codellama-7b":
                self.model = CodeLlama(7)
            case "codellama-13b":
                self.model = CodeLlama(13)
            case "llama-3.1-8b":
                self.model = Llama3_1()
            case "deepseek-coder-v2":
                self.model = DeepSeekCoderV2()
            case "test":
                self.model = TestModel()
            case _:
                self.model = Generic(model_name)

    def generate(self, prompt):
        return self.model.generate(prompt)
