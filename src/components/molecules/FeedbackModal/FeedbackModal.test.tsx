import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { FeedbackModal } from './FeedbackModal';

describe('FeedbackModal', () => {
  const defaultProps = {
    open: true,
    onClose: vi.fn(),
    message: 'Test message',
    onMessageChange: vi.fn(),
    onSend: vi.fn().mockResolvedValue(true),
    isLoading: false,
    error: null,
    success: false,
    onResetStatus: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders modal title when open', () => {
    render(<FeedbackModal {...defaultProps} />);
    expect(
      screen.getByText('I appreciate your time and input')
    ).toBeInTheDocument();
  });

  it('renders send email button', () => {
    render(<FeedbackModal {...defaultProps} />);
    expect(screen.getByText('Send email')).toBeInTheDocument();
  });

  it('renders close button', () => {
    render(<FeedbackModal {...defaultProps} />);
    const closeButtons = screen.getAllByRole('button', { name: 'Close' });
    expect(closeButtons.length).toBeGreaterThan(0);
  });

  it('calls onSend when send button is clicked', async () => {
    render(<FeedbackModal {...defaultProps} />);
    const sendButton = screen.getByText('Send email').closest('button');
    if (sendButton) {
      fireEvent.click(sendButton);
      expect(defaultProps.onSend).toHaveBeenCalled();
    }
  });

  it('calls onClose when close button is clicked', () => {
    render(<FeedbackModal {...defaultProps} />);
    const closeButtons = screen.getAllByRole('button', { name: 'Close' });
    fireEvent.click(closeButtons[closeButtons.length - 1]);
    expect(defaultProps.onClose).toHaveBeenCalled();
  });

  it('does not render when closed', () => {
    render(<FeedbackModal {...defaultProps} open={false} />);
    expect(
      screen.queryByText('I appreciate your time and input')
    ).not.toBeInTheDocument();
  });

  it('disables send button when message is empty', () => {
    render(<FeedbackModal {...defaultProps} message="" />);
    const sendButton = screen.getByText('Send email').closest('button');
    expect(sendButton).toBeDisabled();
  });

  it('shows loading state when isLoading is true', () => {
    render(<FeedbackModal {...defaultProps} isLoading={true} />);
    expect(screen.getByText('Sending...')).toBeInTheDocument();
  });

  it('shows error message when error is provided', () => {
    render(<FeedbackModal {...defaultProps} error="Failed to send" />);
    expect(screen.getByText('Failed to send')).toBeInTheDocument();
  });

  it('shows success message when success is true', () => {
    render(<FeedbackModal {...defaultProps} success={true} />);
    expect(screen.getByText('Message Sent!')).toBeInTheDocument();
  });
});
