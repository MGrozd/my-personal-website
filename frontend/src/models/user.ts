// author: MatejGrozdanić
// date: 2025-05-13
// description: This code defines a TypeScript interface for a User object, which includes properties such as uuid, email, password, first_name, last_name, provider, picture, is_active, and is_superuser. The interface is used to define the structure of user data in a TypeScript application.

// Supporting interfaces
export interface WorkExperience {
  job_title: string;
  company_name: string;
  start_date: string; // ISO format date
  end_date?: string;
  description?: string;
}

export interface Project {
  project_name: string;
  description?: string;
  start_date: string;
  end_date?: string;
  technologies_used: string[];
}

export interface Education {
  degree: string;
  institution: string;
  start_date: string;
  end_date?: string;
  description?: string;
}

export interface Skill {
  skill_name: string;
  proficiency?: string;
}

export interface Company {
  company_name: string;
  location?: string;
  website?: string;
}

export interface Media {
  media_type: string;
  media_url: string;
  description?: string;
}

export interface Hobby {
  hobby_name: string;
  description?: string;
}

export interface Article {
  title: string;
  content: string;
  publish_date: string; // ISO format date
  author: string;
  link?: string;
}

// User interface
export interface User {
  uuid: string; // UUID format
  login_email: string;
  hashed_password?: string;
  is_active: boolean;

  first_name?: string;
  middle_name?: string;
  last_name?: string;
  date_of_birth?: string; // Consider using ISO string (YYYY-MM-DD)
  picture_path?: string;
  phone_number?: string;
  email?: string;
  location?: string;
  education?: string;

  work_experience: WorkExperience[];
  projects: Project[];
  educations: Education[];
  skills: Skill[];
  companies: Company[];
  media: Media[];
  hobbies: Hobby[];
  articles: Article[];
}

