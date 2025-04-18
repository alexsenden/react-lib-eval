import pandas as pd
import os

GENERATED_DIR = "generated"
RESULTS_FILE_NAME = "results.csv"

NUM_TASKS = 250.0
TASKS_PER_LIB = 50

metrics = [
    "bleu",
    "meteor",
    "rouge1f",
    "rouge1p",
    "rouge1r",
    "rouge2f",
    "rouge2p",
    "rouge2r",
]

models = ["Llama-3", "DeepSeek"]


def clear_zeros(df):
    return df[df["bleu"] != 0]


def process_single_trial_by_lib(csv_path):
    df = pd.read_csv(csv_path)
    df = clear_zeros(df)

    # Group by 'library' and compute mean and std
    grouped = df.groupby("library")[metrics].agg(["mean", "std"])
    summary = pd.DataFrame(index=grouped.index)

    for metric in metrics:
        summary[metric] = (
            grouped[(metric, "mean")].map("{:.2f}".format)
            + " ± "
            + grouped[(metric, "std")].map("{:.2f}".format)
        )

    print(csv_path)
    print(summary)
    print("\n\n")


def process_whole_single_trial(csv_path):
    df = pd.read_csv(csv_path)
    df = clear_zeros(df)

    # Group by 'library' and compute mean and std
    stats = df[metrics].agg(["mean", "std"])

    summary = {
        metric: f"{stats.loc['mean', metric]:.2f} ± {stats.loc['std', metric]:.2f}"
        for metric in metrics
    }

    print(csv_path)
    for metric, value in summary.items():
        print(f"{metric}: {value}")
    print("\n\n")


def get_failure_rate_whole_file(csv_path):
    df = pd.read_csv(csv_path)
    df = clear_zeros(df)
    print(csv_path)
    print(f"{len(df) * 100 / NUM_TASKS}%")
    print("\n\n")


def get_failure_rate_by_lib(csv_path):
    df = pd.read_csv(csv_path)
    df = clear_zeros(df)
    print(csv_path)
    print(f'{df["library"].value_counts()* 100 / TASKS_PER_LIB}%')
    print("\n\n")


def main():
    dirs = os.listdir(GENERATED_DIR)
    dirs.sort()

    for dir in dirs:
        csv_path = f"{GENERATED_DIR}/{dir}/{RESULTS_FILE_NAME}"
        if (
            os.path.isfile(csv_path)
            and "both" in csv_path
            and (any([model in csv_path for model in models]))
        ):
            # RQ4
            get_failure_rate_by_lib(csv_path)
            process_single_trial_by_lib(csv_path)

            # RQ3
            # get_failure_rate_whole_file(csv_path)
            # process_whole_single_trial(csv_path)


main()
