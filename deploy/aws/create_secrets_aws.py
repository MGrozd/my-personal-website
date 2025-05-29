#!/usr/bin/env python3
"""
author: Matej Grozdanić
date: 2025-05-29
license: MIT license
description: Create or update secrets in AWS SSM for a Copilot app (cross-platform)
"""

import os
from botocore.exceptions import ClientError

# Try to import .env parser; fallback to basic parsing if not installed
try:
    from dotenv import dotenv_values
    load_env = lambda f: dotenv_values(f)
except ImportError:
    def load_env(f):
        data = {}
        with open(f) as fp:
            for line in fp:
                line = line.strip()
                if not line or line.startswith('#'): continue
                if '=' in line:
                    k, v = line.split('=', 1)
                    data[k.strip()] = v.strip().strip('"').strip("'")
        return data

def main():
    env_file = '../../.env.production'
    if not os.path.isfile(env_file):
        print(f"Error: {env_file} not found.")
        return

    config = load_env(env_file)
    project_name = config.get('PROJECT_NAME')
    if not project_name:
        print("Error: PROJECT_NAME not found in .env.production.")
        return

    environment = 'production'
    # boto3 will pick up AWS creds from environment or configured profile
    import boto3
    ssm = boto3.client('ssm', region_name=os.getenv('AWS_REGION', 'eu-central-1'))

    print(f"📦 Uploading secrets to SSM for project: {project_name} (env: {environment})")

    for key, value in config.items():
        if key == 'PROJECT_NAME' or value is None:
            continue
        param_name = f"/copilot/{project_name}/{environment}/{key}"
        try:
            ssm.put_parameter(
                Name=param_name,
                Value=value,
                Type='SecureString',
                Overwrite=True,
                Description=f"Secret for {key} used in {project_name} app"
            )
            print(f"✔ {param_name} uploaded.")
        except ClientError as e:
            print(f"✘ Failed to upload {param_name}: {e}")

    print("✅ All secrets processed.")

if __name__ == '__main__':
    main()
