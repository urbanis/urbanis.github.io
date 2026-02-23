import type { Meta, StoryObj } from '@storybook/react';
import { SocialLinks } from './SocialLinks';
import { socialLinks } from '@/data/socialLinks';

const meta: Meta<typeof SocialLinks> = {
  title: 'Molecules/SocialLinks',
  component: SocialLinks,
  tags: ['autodocs'],
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export default meta;
type Story = StoryObj<typeof SocialLinks>;

export const Default: Story = {
  args: {
    links: socialLinks,
  },
};

export const WithCertificationHandler: Story = {
  args: {
    links: socialLinks,
    onCertificationClick: () => alert('Certification clicked!'),
  },
};
