# authors: Matej Grozdanić
# date: 2025-05-27
# description: This code is the main entry point for the FastAPI application.
# license: MIT license

# from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
# from beanie import init_beanie
# from motor.motor_asyncio import AsyncIOMotorClient

from .config.config import settings
from .routers.api import api_router
# from .auth.auth import get_hashed_password
# from .models.users import User, Admin

''' TODO: make database connection within Docker container or production and use environment variables for configuration
@asynccontextmanager
async def lifespan(app: FastAPI):
    # --------------------
    # SETUP MONGODB
    # --------------------
    app.state.client = AsyncIOMotorClient(
        settings.MONGO_HOST,
        settings.MONGO_PORT,
        username=settings.MONGO_USER,
        password=settings.MONGO_PASSWORD,
    )
    await init_beanie(
        database=app.state.client[settings.MONGO_DB], document_models=[User]
    )
    # --------------------
    # CREATE ADMIN(SUPERUSER)
    # --------------------
    admin = await Admin.find_one({"login_email": settings.FIRST_SUPERUSER})
    if not admin:
        admin = Admin(
            login_email=settings.FIRST_SUPERUSER,
            hashed_password=get_hashed_password(settings.FIRST_SUPERUSER_PASSWORD),
        )
        await admin.create()

    # --------------------
    # CREATE FIRST USER
    # --------------------
    user = await User.find_one({"login_email": settings.USER_LOGIN_EMAIL})
    if not user:
        user = User(    
            login_email=settings.USER_LOGIN_EMAIL,
            hashed_password=get_hashed_password(settings.USER_PASSWORD),
            first_name=settings.USER_FIRST_NAME,
            last_name=settings.USER_LAST_NAME,
            date_of_birth=settings.USER_DATE_OF_BIRTH,
            phone_number=settings.USER_PHONE_NUMBER,
            email=settings.USER_EMAIL,
            location=settings.USER_LOCATION,
            education=settings.USER_EDUCATION,
        )
        await user.create()
        print(f"User created with UUID: {user.uuid}")

    # yield app
    yield
'''

app = FastAPI(
    title=settings.PROJECT_NAME,
    openapi_url=f"{settings.API_V1_STR}/openapi.json",
    # lifespan=lifespan,
)

''' Set all CORS enabled origins '''
if settings.BACKEND_CORS_ORIGINS:
    app.add_middleware(
        CORSMiddleware,
        allow_origins=[
            # See https://github.com/pydantic/pydantic/issues/7186
            # for reason of using rstrip
            str(origin).rstrip("/")
            for origin in settings.BACKEND_CORS_ORIGINS
        ],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )


app.include_router(api_router, prefix=settings.API_V1_STR)
