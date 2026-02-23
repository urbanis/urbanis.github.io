import type { Meta, StoryObj } from '@storybook/react';
import { PortfolioGrid } from './PortfolioGrid';
import { projects } from '@/data/projects';

const meta: Meta<typeof PortfolioGrid> = {
  title: 'Organisms/PortfolioGrid',
  component: PortfolioGrid,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof PortfolioGrid>;

export const Default: Story = {
  args: {
    projects,
  },
};

export const TwoProjects: Story = {
  args: {
    projects: projects.slice(0, 2),
  },
};

export const SingleProject: Story = {
  args: {
    projects: projects.slice(0, 1),
  },
};
