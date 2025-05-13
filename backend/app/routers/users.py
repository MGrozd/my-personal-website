# author: Matej Grozdanić
# license: MIT license
# date: 2025-05-12
# description: This code is a route for getting users data from a backend API. It uses APIRouter and various HTTP methods to process users data.

from uuid import UUID
from typing import Any

from beanie.exceptions import RevisionIdWasChanged
from fastapi import APIRouter, Body, Depends, HTTPException
from pydantic.networks import EmailStr
from pymongo import errors

from .. import models, schemas
from ..auth.auth import (
    get_current_active_superuser,
    get_current_active_user,
    get_hashed_password,
)

router = APIRouter()

@router.get("/{user_id}", response_model=schemas.User)
async def get_user(user_id: UUID):
    """
    Get User Info

    Parameters
    ----------
    userid : UUID
        the user's UUID

    Returns
    -------
    schemas.User
        User info
    """
    user = await models.User.find_one({"uuid": user_id})
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return user
