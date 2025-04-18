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

set -x

export HF_HOME=~/projects/def-cjhuofw-ab/sendena/hf-cache

module load cuda/12.4.1 arch/avx2 gcc/13.2.0 python/3.11.11 nodejs/22.11.0

source ~/env/env_llm/bin/activate

# pip install -r requirements.txt

llms=(
    "codellama-7b"
    "codellama-13b"
)

for llm in "${llms[@]}"; do
    echo "Starting ${llm} with both stories and implementation at: `date`"
    python main.py --model=$llm --allowStories=true --allowImpl=true --trialName=$llm-both 
    echo "${llm} with both stories and implementation finished with exit code $? at: `date`"

    echo "Starting ${llm} with just stories at: `date`"
    python main.py --model=$llm --allowStories=true --allowImpl=false --trialName=$llm-stories  
    echo "${llm} with just stories finished with exit code $? at: `date`"

    echo "Starting ${llm} with just implementation at: `date`"
    python main.py --model=$llm --allowStories=false --allowImpl=true --trialName=$llm-impl  
    echo "${llm} with just implementation finished with exit code $? at: `date`"

    echo "Starting ${llm} with neither stories nor implementation at: `date`"
    python main.py --model=$llm --allowStories=false --allowImpl=false --trialName=$llm-neither  
    echo "${llm} with neither stories nor implementation finished with exit code $? at: `date`"
done
