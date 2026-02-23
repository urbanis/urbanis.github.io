import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { FeedbackModal } from './FeedbackModal';

const meta: Meta<typeof FeedbackModal> = {
  title: 'Molecules/FeedbackModal',
  component: FeedbackModal,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FeedbackModal>;

const FeedbackModalWrapper = () => {
  const [message, setMessage] = useState('');
  return (
    <FeedbackModal
      open={true}
      onClose={() => {}}
      message={message}
      onMessageChange={setMessage}
      onSend={async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return true;
      }}
      isLoading={false}
      error={null}
      success={false}
      onResetStatus={() => {}}
    />
  );
};

export const Default: Story = {
  render: () => <FeedbackModalWrapper />,
};

export const Loading: Story = {
  args: {
    open: true,
    onClose: () => {},
    message: 'Sending this message...',
    onMessageChange: () => {},
    onSend: async () => true,
    isLoading: true,
    error: null,
    success: false,
    onResetStatus: () => {},
  },
};

export const WithError: Story = {
  args: {
    open: true,
    onClose: () => {},
    message: 'My message',
    onMessageChange: () => {},
    onSend: async () => false,
    isLoading: false,
    error: 'Failed to send email. Please try again.',
    success: false,
    onResetStatus: () => {},
  },
};

export const Success: Story = {
  args: {
    open: true,
    onClose: () => {},
    message: '',
    onMessageChange: () => {},
    onSend: async () => true,
    isLoading: false,
    error: null,
    success: true,
    onResetStatus: () => {},
  },
};

export const Closed: Story = {
  args: {
    open: false,
    onClose: () => {},
    message: '',
    onMessageChange: () => {},
    onSend: async () => true,
    isLoading: false,
    error: null,
    success: false,
    onResetStatus: () => {},
  },
};
