import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ContactForm } from './ContactForm';

const meta: Meta<typeof ContactForm> = {
  title: 'Molecules/ContactForm',
  component: ContactForm,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ContactForm>;

const ContactFormWrapper = (args: { placeholder?: string }) => {
  const [value, setValue] = useState('');
  return <ContactForm value={value} onChange={setValue} {...args} />;
};

export const Default: Story = {
  render: () => <ContactFormWrapper />,
};

export const WithCustomPlaceholder: Story = {
  render: () => (
    <ContactFormWrapper placeholder="Write your message here..." />
  ),
};

export const WithPrefilledText: Story = {
  render: () => {
    const [value, setValue] = useState('Hello, I wanted to reach out...');
    return <ContactForm value={value} onChange={setValue} />;
  },
};
