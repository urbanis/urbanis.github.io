import type React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  links: ProjectLink[];
  color?: string;
  inProgress?: boolean;
  /** When true, the project is kept in the data but not displayed. */
  hidden?: boolean;
}

export interface ProjectLink {
  type: 'github' | 'linkedin' | 'arcgis' | 'website';
  url: string;
}

export interface SocialLink {
  platform: 'linkedin' | 'github' | 'resume' | 'certification';
  url: string;
  icon: string;
  tooltip: string;
}

export interface ExperienceStat {
  icon: React.ReactNode;
  years: string;
  label: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  education: string[];
  email: string;
  avatar: string;
  bio: string;
  stats: ExperienceStat[];
}
