# author: Matej Grozdanić
# date: 2025-05-29
# license: MIT license
# description: This is Dockerfile for production

FROM python:3.12-slim

ENV PYTHONUNBUFFERED=true

WORKDIR /app

### install poetry 1.8.2
ENV POETRY_HOME="/opt/poetry"
ENV PATH="$POETRY_HOME/bin:$PATH"
RUN apt-get update && apt-get install -y curl && \
    curl -sSL https://install.python-poetry.org | python3 - --version 1.8.2 && \
    poetry config virtualenvs.in-project true

### install dependencies and project
ADD pyproject.toml README.md ./
ADD app /app/app
RUN poetry install --no-interaction --no-ansi

### add executables to path
ENV PATH="/app/.venv/bin:$PATH"

### default cmd: run uvicorn
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]