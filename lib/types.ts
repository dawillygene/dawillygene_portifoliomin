// Company and Profile Management Types

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  email: string;
  phone?: string;
  image?: string;
  bio?: string;
  skills: string[];
  social?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  link?: string;
  github?: string;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
  features: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Testimonial {
  id: string;
  author: string;
  company?: string;
  content: string;
  image?: string;
  rating: number;
  createdAt: string;
  updatedAt: string;
}

export interface CompanyInfo {
  name: string;
  founder: string;
  tagline: string;
  description: string;
  established: number;
  email: string;
  phone?: string;
  address?: string;
  website?: string;
  logo?: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

export interface PageContent {
  id: string;
  section: string; // e.g., 'hero', 'about', 'services', 'projects'
  title?: string;
  content: string;
  image?: string;
  order: number;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}
