from rouge_score import rouge_scorer

scorer = rouge_scorer.RougeScorer(["rouge1", "rouge2", "rougeL"], use_stemmer=True)


def calculate_rouge(gt, generated):
    return scorer.score(generated, gt)
