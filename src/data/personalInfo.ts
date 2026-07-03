import { createElement } from 'react';
import {
  ReadOutlined,
  BookOutlined,
  ExperimentOutlined,
  ToolOutlined,
} from '@ant-design/icons';
import type { PersonalInfo } from '@/types';

export const personalInfo: PersonalInfo = {
  name: 'Nisleida Morales',
  title: 'Solutions Engineer & Geospatial Developer',

  education: [
    'MSc. Urban Planning and Mobility',
    'Building Data-Driven Products for Smarter Cities',
  ],

  email: 'nisle.morales@gmail.com',
  avatar: '/assets/images/profile_picture.jpg',

  bio: `Solutions Engineer with 5+ years of experience building data-driven products and location intelligence tools. Comfortable across the full product lifecycle, from UX research and prototyping to roadmap definition and deployment. My background in urban planning and mobility is what sparked my passion for data and design. Understanding cities through spatial data and communicating it is what brought me into tech.`,

  stats: [
    { icon: createElement(ToolOutlined), years: '5+ Years', label: 'Location Intelligence & technology stack development' },
    { icon: createElement(ExperimentOutlined), years: '2+ Years', label: 'Research in European mobility projects' },
    { icon: createElement(BookOutlined), years: '2+ Years', label: 'Dual MSc in Urban Mobility (Buenos Aires & Berlin)' },
    { icon: createElement(ReadOutlined), years: '5-Year', label: "Bachelor's Degree in Urban Planning" },
  ],
};
