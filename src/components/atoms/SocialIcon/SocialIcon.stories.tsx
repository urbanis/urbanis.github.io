import type { Meta, StoryObj } from '@storybook/react';
import { SocialIcon } from './SocialIcon';

const meta: Meta<typeof SocialIcon> = {
  title: 'Atoms/SocialIcon',
  component: SocialIcon,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'range', min: 20, max: 60, step: 5 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SocialIcon>;

export const LinkedIn: Story = {
  args: {
    src: '/assets/icons/linkedin-blanco.svg',
    alt: 'LinkedIn',
    tooltip: 'LinkedIn page',
    href: 'https://www.linkedin.com/in/nisleida',
    size: 40,
  },
};

export const GitHub: Story = {
  args: {
    src: '/assets/icons/github-blanco.svg',
    alt: 'GitHub',
    tooltip: 'GitHub Repositories',
    href: 'https://github.com/urbanis',
    size: 40,
  },
};

export const Certification: Story = {
  args: {
    src: '/assets/icons/certification-blanco.svg',
    alt: 'Certification',
    tooltip: 'Check my Certification',
    size: 40,
  },
};
