# author: Matej Grozdanić
# license: MIT license
# date: 2025-05-12
# description: This code is a route for admin to administrate application from a backend API. It uses APIRouter and various HTTP methods to process users data.

from typing import Any
from uuid import UUID

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