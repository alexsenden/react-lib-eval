import argparse

from generate_from_template import DEBUG, LIBRARIES, generate_from_template


def parse_args():
    parser = argparse.ArgumentParser(
        description="Create problem solutions using a given library from ."
    )
    parser.add_argument(
        "--library",
        type=str,
        default="generic",
        help="The library to use for generating the problem solutions. Options are: {}".format(
            LIBRARIES
        ),
    )
    args = parser.parse_args()

    if args.library not in LIBRARIES and args.library != "all":
        raise ValueError(
            "Invalid library: {}. Options are: {}".format(args.library, LIBRARIES)
        )

    return args


def main():
    args = parse_args()

    if args.library == "all":
        for library in LIBRARIES:
            if DEBUG:
                print(f"Generating for library: {library}")
            generate_from_template(library, "ground-truth-raw")
    else:
        generate_from_template(args.library, "ground-truth-raw")


main()
