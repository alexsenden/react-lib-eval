from nltk.translate.meteor_score import meteor_score

from .tokenizer import tokenize_code


def calculate_meteor(gt, generated):
    # Tokenize the sentences
    gt_tokens = tokenize_code(gt)
    generated_tokens = tokenize_code(generated)

    # Calculate METEOR score
    return meteor_score([gt_tokens], generated_tokens)
