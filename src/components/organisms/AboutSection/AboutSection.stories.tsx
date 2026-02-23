import type { Meta, StoryObj } from '@storybook/react';
import { AboutSection } from './AboutSection';
import { personalInfo } from '@/data/personalInfo';

const meta: Meta<typeof AboutSection> = {
  title: 'Organisms/AboutSection',
  component: AboutSection,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AboutSection>;

export const Default: Story = {
  args: {
    bio: personalInfo.bio,
  },
};
