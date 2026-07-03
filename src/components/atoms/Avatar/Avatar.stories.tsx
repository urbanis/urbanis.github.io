import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Atoms/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'range', min: 50, max: 200, step: 10 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    src: '/assets/images/profile_picture.jpg',
    alt: 'Nisleida Morales',
    size: 150,
  },
};

export const Small: Story = {
  args: {
    src: '/assets/images/profile_picture.jpg',
    alt: 'Nisleida Morales',
    size: 80,
  },
};

export const Large: Story = {
  args: {
    src: '/assets/images/profile_picture.jpg',
    alt: 'Nisleida Morales',
    size: 200,
  },
};
