# author: Matej Grozdanić
# license: MIT license
# date: 2025-05-12
# description: This code is a users models for database. It uses Pydantic for ORM.

from uuid import UUID

from beanie import PydanticObjectId
from pydantic import BaseModel, EmailStr, Field


class User(BaseModel):
    """
    Shared User properties. Visible only by admins and self.
    """

    login_email: EmailStr | None = None
    is_active: bool | None = None
    is_superuser: bool | None = None
    provider: str | None = None


class UserInfo(BaseModel):
    """
    User properties returned by API. Contains public user information.
    """

    first_name: str | None = None
    middle_name: str | None = None
    last_name: str | None = None
    picture: str | None = None
    phone: str | None = None
    email: EmailStr | None = None
    location: str | None = None
    education: str | None = None
    experience: list | None = None
    projects: list
    skills: list
    company: list
    networks: list
    hobbies: list
    articles: list


class UserBase(BaseModel):
    """
    Shared User properties. Visible by anyone.
    """

    first_name: str | None = None
    last_name: str | None = None
    picture: str | None = None


class PrivateUserBase(UserBase):
    """
    Shared User properties. Visible only by admins and self.
    """

    email: EmailStr | None = None
    is_active: bool | None = None
    is_superuser: bool | None = None
    provider: str | None = None


class UserUpdate(UserBase):
    """
    User properties to receive via API on update.
    """

    password: str | None = None
    email: EmailStr | None = None
    is_active: bool | None = None
    is_superuser: bool | None = None


class User(PrivateUserBase):
    """
    User properties returned by API. Contains private
    user information such as email, is_active, auth provider.

    Should only be returned to admins or self.
    """

    id: PydanticObjectId = Field()
    uuid: UUID
