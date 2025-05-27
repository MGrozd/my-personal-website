# author: Matej Grozdanić
# date: 2025-05-13
# description: This code is a schemas for API. It uses Pydantic.
# license: MIT license

from uuid import UUID
from typing import List, Optional
from datetime import date
from uuid import uuid4

# from beanie import PydanticObjectId
from pydantic import BaseModel, EmailStr, Field


# ---------------------
# API SCHEMAS
# ---------------------
class WorkExperience(BaseModel):
    job_title: str
    company_name: str
    start_date: date
    end_date: Optional[date] = None
    description: Optional[str] = None

class Project(BaseModel):
    project_name: str
    description: Optional[str] = None
    start_date: date
    end_date: Optional[date] = None
    technologies_used: List[str] = []

class Education(BaseModel):
    degree: str
    institution: str
    start_date: date
    end_date: Optional[date] = None
    description: Optional[str] = None

class Skill(BaseModel):
    skill_name: str
    proficiency: Optional[str] = None

class Company(BaseModel):
    company_name: str
    location: Optional[str] = None
    website: Optional[str] = None

class Media(BaseModel):
    media_type: str
    media_url: str
    description: Optional[str] = None

class Hobby(BaseModel):
    hobby_name: str
    description: Optional[str] = None

class Article(BaseModel):
    title: str
    content: str
    publish_date: date
    author: str
    link: Optional[str] = None

class User(BaseModel):
    """
    User properties returned by API. Contains public user information.
    """
    uuid: UUID = Field(default_factory=uuid4)
    login_email: EmailStr
    hashed_password: Optional[str] = None
    is_active: bool = True
    is_superuser: bool = False
    first_name: Optional[str] = None
    middle_name: Optional[str] = None
    last_name: Optional[str] = None
    date_of_birth: Optional[str] = None
    picture_path: Optional[str] = None
    phone_number: Optional[str] = None
    email: Optional[EmailStr] = None
    location: Optional[str] = None
    education: Optional[str] = None
    work_experience: List[WorkExperience] = []
    projects: List[Project] = []
    educations: List[Education] = []
    skills: List[Skill] = []
    companies: List[Company] = []
    media: List[Media] = []
    hobbies: List[Hobby] = []
    articles: List[Article] = []

    class Config:
        from_attributes = True # orm_mode = True
