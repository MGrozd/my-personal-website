# Update secrets script
Cross-platform Python script that will work on Linux, macOS, and Windows (as long as Python and the AWS CLI credentials are configured)

## Description

## How to run:

To keep your global Python environment clean, you can create and use a virtual environment just for this script. Here’s how:

1. Create the venv

    ```python3 -m venv .venv```

    This makes a folder named .venv in your project.

2. Activate it

    macOS/Linux (bash, zsh):

    ```source .venv/bin/activate```

    Windows (PowerShell):

    ```.\.venv\Scripts\Activate.ps1```

    Windows (cmd.exe):

    ```.venv\Scripts\activate.bat```

    After activation, your prompt will be prefixed with (.venv).

3. Install dependencies

    ```pip install -r requirements.txt```
pip install boto3 python-dotenv

    That gives you the AWS SDK (boto3) and optional .env parsing.

4. Make it executable:

    ```chmod +x create_secrets.py```

5. Run the script

    ```./create_secrets_aws.py```

6. When you’re done

    ```deactivate```

    That returns you to your normal shell.
