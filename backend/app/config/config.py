import secrets
from typing import Literal

from pydantic import AnyHttpUrl, EmailStr
from pydantic_settings import BaseSettings, SettingsConfigDict

# TODO: separate settings for development,testing and production
class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        # Use top level .env file (one level above ./backend/)
        # used locally for development
        env_file="../../.env",
        env_ignore_empty=True,
        extra="ignore",
    )

    API_V1_STR: str = "/api/v1"
    SECRET_KEY: str = secrets.token_urlsafe(32)
    ENVIRONMENT: Literal["development", "test", "production"] = "development" # TODO: move it into env file it should not be hardcoded
    # 60 minutes * 24 hours * 8 days = 8 days
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 8
    # JSON-formatted list of origins
    BACKEND_CORS_ORIGINS: list[AnyHttpUrl] = []
    PROJECT_NAME: str
    FIRST_SUPERUSER: EmailStr
    FIRST_SUPERUSER_PASSWORD: str

    ''' TODO: make connection with db and auth
    # FIRST USER
    USER_LOGIN_EMAIL: EmailStr
    USER_PASSWORD: str
    USER_FIRST_NAME: str
    USER_LAST_NAME: str
    USER_DATE_OF_BIRTH: str
    USER_PHONE_NUMBER: str
    USER_EMAIL: str
    USER_LOCATION: str
    USER_EDUCATION: str

    # database configurations
    MONGO_HOST: str
    MONGO_PORT: int
    MONGO_USER: str | None = None
    MONGO_PASSWORD: str | None = None
    MONGO_DB: str

    # SSO ID and Secrets
    GOOGLE_CLIENT_ID: str | None = None
    GOOGLE_CLIENT_SECRET: str | None = None
    SSO_CALLBACK_HOSTNAME: str | None = None
    SSO_LOGIN_CALLBACK_URL: str | None = None
    '''


settings = Settings()  # type: ignore
