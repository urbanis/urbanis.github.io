import type { Meta, StoryObj } from '@storybook/react';
import { TechTag } from './TechTag';

const meta: Meta<typeof TechTag> = {
  title: 'Atoms/TechTag',
  component: TechTag,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TechTag>;

export const PostGIS: Story = {
  args: {
    label: '#PostGIS',
  },
};

export const React: Story = {
  args: {
    label: '#React',
  },
};

export const DataAnalysis: Story = {
  args: {
    label: '#DataAnalysis',
  },
};
