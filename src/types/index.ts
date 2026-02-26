import type React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  links: ProjectLink[];
}

export interface ProjectLink {
  type: 'github' | 'linkedin' | 'arcgis';
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
  years: number;
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
