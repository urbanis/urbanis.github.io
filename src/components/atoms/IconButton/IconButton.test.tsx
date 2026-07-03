import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { IconButton } from './IconButton';

describe('IconButton', () => {
  it('renders with correct alt text', () => {
    render(
      <IconButton
        src="/test.svg"
        alt="Test Icon"
        tooltip="Test Tooltip"
        href="https://example.com"
      />
    );
    expect(screen.getByAltText('Test Icon')).toBeInTheDocument();
  });

  it('renders link with correct href', () => {
    render(
      <IconButton
        src="/test.svg"
        alt="Test Icon"
        tooltip="Test Tooltip"
        href="https://example.com"
      />
    );
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://example.com');
  });

  it('opens link in new tab', () => {
    render(
      <IconButton
        src="/test.svg"
        alt="Test Icon"
        tooltip="Test Tooltip"
        href="https://example.com"
      />
    );
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('applies custom size', () => {
    render(
      <IconButton
        src="/test.svg"
        alt="Test Icon"
        tooltip="Test Tooltip"
        href="https://example.com"
        size={40}
      />
    );
    const img = screen.getByAltText('Test Icon');
    expect(img).toHaveStyle({ width: '40px', height: '40px' });
  });
});
