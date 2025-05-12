# author: Matej Grozdanić
# license: MIT license
# date: 2025-05-12
# description: This code is a router for application. It uses APIRouter.

from fastapi import APIRouter

from . import login, users

api_router = APIRouter()
api_router.include_router(login.router, prefix="/admin", tags=["admin"])
api_router.include_router(login.router, prefix="/login", tags=["login"])
api_router.include_router(users.router, prefix="/users", tags=["users"])


@api_router.get("/")
async def root():
    return {"message": "Backend API for FARM-docker operational !"}
