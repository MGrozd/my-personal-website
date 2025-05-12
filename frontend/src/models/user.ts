// author: MatejGrozdanić
// date: 2023-10-01
// description: This code defines a TypeScript interface for a User object, which includes properties such as uuid, email, password, first_name, last_name, provider, picture, is_active, and is_superuser. The interface is used to define the structure of user data in a TypeScript application.

export interface User {
  uuid: string
  email: string
  password?: string
  first_name?: string
  last_name?: string
  provider?: string
  picture?: string
  is_active?: boolean
  is_superuser?: boolean
}

export interface UserProfile {
  first_name: string
  middle_name: string
  last_name: string
  date_of_birth: string
  picture_path: string
  phone_number: string
  email: string
  location: string
  education: string
  work_experience: string
}

export interface UserExperience {
  position: string
  company: string
  start_date: string
  end_date: string
  description: string
  location: string
  is_current: boolean
  technologies: string[]
  responsibilities: string[]
  achievements: string[]
  skills: string[]
  languages: string[]
  certifications: string[]
  projects: string[]
  references: string[]
  awards: string[]
  publications: string[]
}

export interface UserProject {
  name: string
  description: string
  start_date: string
  end_date: string
  url: string
  technologies: string[]
  team_size: number
  role: string
  contributors: string[]
  responsibilities: string[]
  achievements: string[]
  skills: string[]
  languages: string[]
  certifications: string[]
  references: string[]
  awards: string[]
  publications: string[]
  is_current: boolean
  is_active: boolean
  is_completed: boolean
  is_public: boolean
  is_open_source: boolean
}

export interface UserEducation {
  institution: string
  degree: string
  field_of_study: string
  start_date: string
  end_date: string
  description: string
  location: string
  is_current: boolean
  is_active: boolean
}

export interface UserSkill {
  name: string
  description: string
  category: string
  level: string
  years_of_experience: number
  certifications: string[]
  references: string[]
  awards: string[]
  publications: string[]
}

export interface UserCompany {
  name: string
  description: string
  location: string
  website: string
  industry: string
  size: number
  founded: number
  logo: string
  is_active: boolean
}

export interface UserMedia {
  name: string
  description: string
  url: string
  is_active: boolean
}

export interface UserHobby {
  name: string
  description: string
  is_active: boolean
  is_favorite: boolean
}

export interface UserArticle {
  title: string
  description: string
  content: string
  is_active: boolean
  is_favorite: boolean
}

export interface UserInfo{
  user: User
  profile: UserProfile
  experience: UserExperience[]
  projects: UserProject[]
  skills: UserSkill[]
  education: UserEducation[]
  social_media: UserMedia[]
  company: UserCompany[]
}
