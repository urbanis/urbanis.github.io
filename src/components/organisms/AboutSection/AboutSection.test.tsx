import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AboutSection } from './AboutSection';

describe('AboutSection', () => {
  it('renders the bio text', () => {
    render(<AboutSection bio="Test bio content" />);
    expect(screen.getByText('Test bio content')).toBeInTheDocument();
  });

  it('renders the Geoportfolio title', () => {
    render(<AboutSection bio="Test bio" />);
    expect(screen.getByText('Geoportfolio')).toBeInTheDocument();
  });

  it('renders the subtitle', () => {
    render(<AboutSection bio="Test bio" />);
    expect(
      screen.getByText(
        "Here you can find some public projects and blog's articles that I have been working on."
      )
    ).toBeInTheDocument();
  });
});
