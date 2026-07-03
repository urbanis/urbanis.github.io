import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { SocialIcon } from './SocialIcon';

describe('SocialIcon', () => {
  it('renders with correct alt text', () => {
    render(
      <SocialIcon src="/test.svg" alt="Test Icon" tooltip="Test Tooltip" />
    );
    expect(screen.getByAltText('Test Icon')).toBeInTheDocument();
  });

  it('renders as a link when href is provided', () => {
    render(
      <SocialIcon
        src="/test.svg"
        alt="Test Icon"
        tooltip="Test Tooltip"
        href="https://example.com"
      />
    );
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://example.com');
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('renders as a button when no href is provided', () => {
    render(
      <SocialIcon src="/test.svg" alt="Test Icon" tooltip="Test Tooltip" />
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(
      <SocialIcon
        src="/test.svg"
        alt="Test Icon"
        tooltip="Test Tooltip"
        onClick={handleClick}
      />
    );
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies custom size', () => {
    render(
      <SocialIcon
        src="/test.svg"
        alt="Test Icon"
        tooltip="Test Tooltip"
        size={60}
      />
    );
    const img = screen.getByAltText('Test Icon');
    expect(img).toHaveStyle({ width: '60px', height: '60px' });
  });
});
