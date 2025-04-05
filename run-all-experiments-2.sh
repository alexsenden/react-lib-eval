#!/bin/bash

#SBATCH --nodes=1
#SBATCH --ntasks-per-node=1
#SBATCH --cpus-per-task=2
#SBATCH --gpus-per-node=2
#SBATCH --mem=100G
#SBATCH --time=2-00:00
#SBATCH --partition=livi
#SBATCH --mail-user=sendena@myumanitoba.ca
#SBATCH --mail-type=ALL

export HF_HOME=~/projects/def-cjhuofw-ab/sendena/hf-cache

llms=(
    "codellama-7b",
    "codellama-13b",
)

module load cuda/12.4.1 arch/avx2 gcc/13.2.0 python/3.11.11

source ~/env/env_llm/bin/activate

pip install -r requirements.txt

for llm in "${llm_list[@]}"; do
    echo "Starting ${llm} with both stories and implementation at: `date`"
    python main.py --model=$llm --allowStories=True --allowImpl=True --trialName=$llm-both 
    echo "${llm} with both stories and implementation finished with exit code $? at: `date`"

    echo "Starting ${llm} with just stories at: `date`"
    python main.py --model=$llm --allowStories=True --allowImpl=False --trialName=$llm-stories  
    echo "${llm} with just stories finished with exit code $? at: `date`"

    echo "Starting ${llm} with just implementation at: `date`"
    python main.py --model=$llm --allowStories=False --allowImpl=True --trialName=$llm-impl  
    echo "${llm} with just implementation finished with exit code $? at: `date`"

    echo "Starting ${llm} with neither stories nor implementation at: `date`"
    python main.py --model=$llm --allowStories=False --allowImpl=False --trialName=$llm-neither  
    echo "${llm} with neither stories nor implementation finished with exit code $? at: `date`"
done
