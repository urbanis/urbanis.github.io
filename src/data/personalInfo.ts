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
  title: 'Urban Planner & Geospatial Developer',

  education: [
    'MSc. Urban Planning and Mobility',
    'Building Data-Driven Products for Smarter Cities',
  ],

  email: 'nisleida.morales@gmail.com',
  avatar: '/assets/images/profile_picture.jpg',

  bio: `I design data-driven mobility solutions by connecting urban planning expertise with advanced geospatial and IT tools. With a strong foundation in academic research and hands-on tech projects, I work at the intersection of sustainable transport, location intelligence, and smart city development.

Currently based in Berlin, I'm passionate about transforming mobility systems through innovation, spatial data, and collaborative projects across Europe and Latin America.`,

  stats: [
    { icon: createElement(ReadOutlined), years: 5, label: "Bachelor's in Urban Planning" },
    { icon: createElement(BookOutlined), years: 2, label: 'Dual MSc in Urban Mobility (Buenos Aires & Berlin)' },
    { icon: createElement(ExperimentOutlined), years: 2, label: 'Research in European mobility projects' },
    { icon: createElement(ToolOutlined), years: 5, label: 'Location Intelligence & technology stack development' },
  ],
};
