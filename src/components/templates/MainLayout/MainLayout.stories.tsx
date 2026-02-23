import type { Meta, StoryObj } from '@storybook/react';
import { MainLayout } from './MainLayout';

const meta: Meta<typeof MainLayout> = {
  title: 'Templates/MainLayout',
  component: MainLayout,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof MainLayout>;

export const Default: Story = {};
