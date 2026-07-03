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
    platform: 'certification',
    url: '#',
    icon: '/assets/icons/certification-blanco.svg',
    tooltip: 'Check my Certification',
  },
];

export const certificationData = {
  image: '/assets/images/ArcGIS%20Pro%20Associate%202101.jpg',
  credlyUrl:
    'https://www.credly.com/badges/3c252c8c-c64a-4d37-80c4-daa228fd821b/public_url',
};

export const cesiumCertificationData = {
  image: '/assets/images/cesium.png',
  verifyUrl: 'https://verified.sertifier.com/en/verify/80226163514986/',
};
