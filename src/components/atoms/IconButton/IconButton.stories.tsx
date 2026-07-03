import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';

const meta: Meta<typeof IconButton> = {
  title: 'Atoms/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'range', min: 20, max: 50, step: 5 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const GitHub: Story = {
  args: {
    src: '/assets/icons/github.svg',
    alt: 'GitHub',
    tooltip: 'GitHub',
    href: 'https://github.com/urbanis',
    size: 30,
  },
};

export const LinkedIn: Story = {
  args: {
    src: '/assets/icons/linkedin.svg',
    alt: 'LinkedIn',
    tooltip: 'LinkedIn',
    href: 'https://linkedin.com/in/nisleida',
    size: 30,
  },
};

export const ArcGIS: Story = {
  args: {
    src: '/assets/icons/arcgis.svg',
    alt: 'ArcGIS',
    tooltip: 'ArcGIS Dashboard',
    href: 'https://arcgis.com',
    size: 30,
  },
};
