import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer', () => {
  const defaultProps = {
    name: 'Test Name',
    email: 'test@example.com',
    onContactClick: vi.fn(),
  };

  it('renders the name', () => {
    render(<Footer {...defaultProps} />);
    expect(screen.getByText(/Test Name/)).toBeInTheDocument();
  });

  it('renders the email', () => {
    render(<Footer {...defaultProps} />);
    expect(screen.getByText('test@example.com')).toBeInTheDocument();
  });

  it('renders the contact button', () => {
    render(<Footer {...defaultProps} />);
    expect(
      screen.getByRole('button', { name: 'Reach me out!' })
    ).toBeInTheDocument();
  });

  it('calls onContactClick when button is clicked', () => {
    render(<Footer {...defaultProps} />);
    fireEvent.click(screen.getByRole('button', { name: 'Reach me out!' }));
    expect(defaultProps.onContactClick).toHaveBeenCalled();
  });

  it('renders email as a mailto link', () => {
    render(<Footer {...defaultProps} />);
    const emailLink = screen.getByText('test@example.com');
    expect(emailLink.closest('a')).toHaveAttribute(
      'href',
      'mailto:test@example.com'
    );
  });
});
