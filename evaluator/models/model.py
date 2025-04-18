from .testmodel import TestModel
from .generic import Generic


class Model:
    def __init__(self, model_name):
        self.model = None

        match model_name:
            case "test":
                self.model = TestModel()
            case _:
                self.model = Generic(model_name)

    def generate(self, prompt):
        return self.model.generate(prompt)
