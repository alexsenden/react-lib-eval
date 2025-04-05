from nltk.translate.bleu_score import sentence_bleu, SmoothingFunction

from .tokenizer import tokenize_code

smooth = SmoothingFunction().method1


def calculate_bleu(gt, generated):
    # Tokenize the sentences
    gt_tokens = tokenize_code(gt)
    generated_tokens = tokenize_code(generated)

    # Calculate BLEU score
    return sentence_bleu([gt_tokens], generated_tokens, smoothing_function=smooth)
