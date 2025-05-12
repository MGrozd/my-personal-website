# author: Matej Grozdanić
# license: MIT license
# date: 2025-05-12
# description: This code is a models for database. It uses Beanie Documents for ORM.
 
from typing import List, Annotated, Optional
from uuid import UUID, uuid4

from beanie import Document, Indexed
from pydantic import BaseModel, EmailStr, Field

# ---------------------
# DATABASE MODELS
# ---------------------
class WorkExperience(Document):
    position: str
    company: str
    start_date: str
    end_date: Optional[str] = None
    description: Optional[str] = None
    location: Optional[str] = None
    is_current: bool = False
    technologies: List[str] = []
    achievements: List[str] = []
    certifications: List[str] = []
    responsibilities: List[str] = []
    skills: List[str] = []
    languages: List[str] = []
    projects: List[str] = []
    refernces: List[str] = []
    awards: List[str] = []
    publications: List[str] = []


class Project(Document):
    name: str
    description: str
    start_date: str
    end_date: Optional[str] = None
    url: Optional[str] = None
    technologies: List[str] = []
    team_size: Optional[int] = None
    role: Optional[str] = None
    contributors: List[str] = []
    responsibilities: List[str] = []
    achievements: List[str] = []
    skills: List[str] = []
    languages: List[str] = []
    certifications: List[str] = []
    references: List[str] = []
    awards: List[str] = []
    publications: List[str] = []
    is_current: bool = False
    is_active: bool = True
    is_completed: bool = False
    is_public: bool = True
    is_open_source: bool = False


class Education(Document):
    institution: str
    degree: str
    field_of_study: Optional[str] = None
    start_date: str
    end_date: Optional[str] = None
    description: Optional[str] = None
    location: Optional[str] = None
    is_current: bool = False
    is_active: bool = True


class Skill(Document):
    name: str
    description: Optional[str] = None
    category: Optional[str] = None
    level: Optional[str] = None
    years_of_experience: Optional[int] = None
    certifications: List[str] = []
    references: List[str] = []
    awards: List[str] = []
    publications: List[str] = []


class Company(Document):
    name: str
    description: Optional[str] = None
    location: Optional[str] = None
    website: Optional[str] = None
    industry: Optional[str] = None
    size: Optional[int] = None
    founded: Optional[int] = None
    logo_path: Optional[str] = None
    is_active: bool = True


class Media(Document):
    name: str
    description: Optional[str] = None
    url: Optional[str] = None
    is_active: bool = True


class Hobby(Document):
    name: str
    description: Optional[str] = None
    is_active: bool = True
    is_favorite: bool = False


class Article(Document):
    title: str
    description: Optional[str] = None
    content: str
    is_active: bool = True
    is_favorite: bool = False


class User(Document):
    uuid: Annotated[UUID, Field(default_factory=uuid4), Indexed(unique=True)]
    login_email: Annotated[EmailStr, Indexed(unique=True)]
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

"""
Company Profile
---------------------
This is a simplified version of the company profile. It contains only the most important information about the company.
It is used to display the company profile in the frontend.

export interface CompanyProfile {
  company: UserCompany
  employees: User[]
  projects: UserProject[]
  skills: UserSkill[]
  social_media: UserSocialMedia
}

export interface CompanyData {
  company: UserCompany
  employees: User[]
  projects: UserProject[]
  skills: UserSkill[]
  social_media: UserSocialMedia
  reviews: string[]
  ratings: number[]
  awards: string[]
  news: string[]
  events: string[]
  partnerships: string[]
  clients: string[]
  competitors: string[]
  products: string[]
  services: string[]
  locations: string[]
  branches: string[]
  subsidiaries: string[]
  suppliers: string[]
  customers: string[]
  investors: string[]
  funding: string[]
  acquisitions: string[]
  mergers: string[]
  joint_ventures: string[]
  spin_offs: string[] 
  divestitures: string[]
  rebranding: string[]
  certifications: string[]
  licenses: string[]
  patents: string[]
  trademarks: string[]
}
"""