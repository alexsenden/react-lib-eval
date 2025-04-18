# React-Lib-Eval

This repository contains the code implementation of the paper "React-Lib-Eval: Retrieval-Augmented React Code Generation Within a Design System".

This is a benchmark dataset and evaluation suite for library-oriented React code generation. The libraries used in the original evaluation are listed below, however the benchmark is designed to be adaptable to any design system with little work.

Libraries in Evaluation:
- [IBM Carbon](https://github.com/carbon-design-system/carbon/tree/main)
- [Shopify Polaris](https://github.com/Shopify/polaris)
- [Priceline Design System](https://github.com/priceline/design-system)
- [Shopify Polaris](https://github.com/themesberg/flowbite-react/tree/main)

### Usage:

#### 1) Download Libraries

Library source code must be downloaded and placed in the `libraries` directory, alongside the `generic` default library.

Any missing components from the following list should be copied from `generic` into the target library:

 - Accordion
 - Alert
 - Avatar
 - Badge
 - Button
 - Card
 - Checkbox
 - Input
 - Link
 - List
 - Modal
 - ProgressBar
 - RadioButton
 - Select
 - Spinner
 - Tabs
 - Text
 - TextArea
 - Toast
 - Toggle

#### 2) Install Dependencies

From the project root, install Python dependencies using:

```
pip install -r
```

Then, from the `postprocessor/linter` directory, install NodeJS dependencies using:

```
npm i
```

Note that the postprocessor was designed for Node 22.

#### 3) Running

The program can then be run, which will generate the ground truth solutions and synthetic code segments, using the following command:

```
python main.py --model=<HF_MODEL_ID> --allowStories=<true/false> --allowImpl=<true/false> --trialName=<TRIAL_NAME>
```

### Note for Linux HPC Clusters

To run on linux with an outdated version of sqlite3, you can use the following code snippet to replace the sqlite3 module with pysqlite3:

```
__import__('pysqlite3')
import sys
sys.modules['sqlite3'] = sys.modules.pop('pysqlite3')
```

For me, the file I had to modify was `/home/sendena/env/env_llm/lib/python3.11/site-packages/chromadb/__init__.py` 

Alternatively, creating a google colab folder alongside your python modules will force chromadb to hotswap to a newer sqlite version. 
For me, to do this, the command was:

```mkdir -p /home/sendena/env/env_llm/lib/python3.11/site-packages/google/colab```
