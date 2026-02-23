import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ContactForm } from './ContactForm';

describe('ContactForm', () => {
  it('renders textarea with placeholder', () => {
    render(<ContactForm value="" onChange={() => {}} />);
    expect(
      screen.getByPlaceholderText(
        'Any message, thoughts, ideas, improvement or feedback is welcome...'
      )
    ).toBeInTheDocument();
  });

  it('renders with custom placeholder', () => {
    render(
      <ContactForm
        value=""
        onChange={() => {}}
        placeholder="Custom placeholder"
      />
    );
    expect(screen.getByPlaceholderText('Custom placeholder')).toBeInTheDocument();
  });

  it('displays the value', () => {
    render(<ContactForm value="Test message" onChange={() => {}} />);
    expect(screen.getByDisplayValue('Test message')).toBeInTheDocument();
  });

  it('calls onChange when text is entered', () => {
    const handleChange = vi.fn();
    render(<ContactForm value="" onChange={handleChange} />);
    const textarea = screen.getByRole('textbox');
    fireEvent.change(textarea, { target: { value: 'New message' } });
    expect(handleChange).toHaveBeenCalledWith('New message');
  });
});
