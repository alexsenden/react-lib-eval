import os

PROMPT_DIR = "benchmark/problems"
TEMPLATE_FILE = f"benchmark/template.txt"


class Prompt:
    def __init__(self, library, generated_path):
        self.template = self.get_template()
        self.library = library
        self.generated_path = generated_path
        self.files = [os.path.splitext(f)[0] for f in os.listdir(PROMPT_DIR)]
        self.total_prompts = len(self.files)

    def get_template(self):
        with open(TEMPLATE_FILE, "r") as f:
            return f.read()

    def process_prompt(self, prompt, retrieval):
        template = self.template
        template = template.replace("{{PROMPT}}", prompt)
        template = template.replace("{{RETRIEVAL}}", retrieval)
        return template

    def get_next(self):
        if len(self.files) <= 0:
            return None

        filename = self.files.pop(0)
        with open(f"{PROMPT_DIR}/{filename}.problem", "r") as problem:
            return problem.read(), filename

    def has_next(self):
        return len(self.files) > 0

    def get_total_prompts(self):
        return self.total_prompts
