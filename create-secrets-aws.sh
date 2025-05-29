#!/bin/bash

#--------------------
# author: Matej Grozdanić
# date: 2025-05-29
# license: MIT license
# description: This script creates the secrets in AWS Secrets Manager for Copilot app
# run: 
#   chmod +x create-secrets-aws.sh
#   ./create-secrets-aws.sh
#--------------------

# Path to your .env.production file
ENV_FILE=".env.production"

# Check if .env.production exists
if [ ! -f "$ENV_FILE" ]; then
  echo "Error: $ENV_FILE not found."
  exit 1
fi

# Extract project_name from the .env.production file
project_name=$(grep '^PROJECT_NAME=' "$ENV_FILE" | cut -d '=' -f2- | tr -d '"')

# Check if project_name was found
if [ -z "$project_name" ]; then
  echo "Error: project_name not found in $ENV_FILE"
  exit 1
fi

# Read and upload other secrets from .env.production
while IFS='=' read -r key value; do
  # Skip comments, empty lines, and the project_name itself
  [[ "$key" =~ ^#.*$ || -z "$key" || "$key" == "PROJECT_NAME" ]] && continue

  # Trim quotes from value if present
  value="${value%\"}"
  value="${value#\"}"

  SECRET_NAME="$project_name/$key"
  SECRET_VALUE="$value"

  echo "Creating secret: $SECRET_NAME"

  aws secretsmanager create-secret \
    --name "$SECRET_NAME" \
    --secret-string "$SECRET_VALUE" \
    --description "Secret for $key used in $project_name app" \
    || echo "Secret $SECRET_NAME already exists, skipping..."

done < "$ENV_FILE"