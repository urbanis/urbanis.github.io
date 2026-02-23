import type { SocialLink } from '@/types';

export const socialLinks: SocialLink[] = [
  {
    platform: 'linkedin',
    url: 'https://www.linkedin.com/in/nisleida',
    icon: '/assets/icons/linkedin-blanco.svg',
    tooltip: 'LinkedIn page',
  },
  {
    platform: 'github',
    url: 'https://github.com/urbanis',
    icon: '/assets/icons/github-blanco.svg',
    tooltip: 'Github Repositories',
  },
  {
    platform: 'resume',
    url: 'https://drive.google.com/drive/folders/1jdqdqmKNqgfNW6E45_2Jxd6dMipYq6ip?usp=drive_link',
    icon: '/assets/icons/resume-blanco.svg',
    tooltip: 'Download my Resume',
  },
  {
    platform: 'certification',
    url: '#',
    icon: '/assets/icons/certification-blanco.svg',
    tooltip: 'Check my Certification',
  },
];

export const certificationData = {
  image: '/assets/images/ArcGIS Pro Associate 2101.jpg',
  credlyUrl:
    'https://www.credly.com/badges/3c252c8c-c64a-4d37-80c4-daa228fd821b/public_url',
};
