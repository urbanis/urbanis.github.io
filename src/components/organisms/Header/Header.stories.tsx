import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';
import { personalInfo } from '@/data/personalInfo';
import { socialLinks } from '@/data/socialLinks';

const meta: Meta<typeof Header> = {
  title: 'Organisms/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    personalInfo,
    socialLinks,
    onCertificationClick: () => alert('Certification clicked!'),
  },
};
