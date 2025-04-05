import os


class CodeLoader:
    def __init__(self, generated_path):
        self.generated_path = generated_path
        self.libraries = os.listdir(f"{generated_path}/prediction")
        self.update_library()

    def update_library(self):
        self.curr_library = self.libraries.pop(0)
        self.curr_library_files = os.listdir(
            f"{self.generated_path}/prediction/{self.curr_library}"
        )

    def get_next(self):
        if len(self.curr_library_files) <= 0:
            if len(self.libraries) <= 0:
                return None
            self.update_library()

        filename = self.curr_library_files.pop(0)
        with open(
            f"{self.generated_path}/gt/{self.curr_library}/{filename}", "r"
        ) as gt, open(
            f"{self.generated_path}/prediction/{self.curr_library}/{filename}", "r"
        ) as prediction:
            return gt.read(), prediction.read(), filename, self.curr_library

    def has_next(self):
        return len(self.curr_library_files) > 0 or len(self.libraries) > 0
