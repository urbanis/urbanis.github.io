import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AboutSection } from './AboutSection';

const mockStats = [
  { icon: null, years: '5-Year', label: "Bachelor's in Urban Planning" },
];

describe('AboutSection', () => {
  it('renders the section title', () => {
    render(<AboutSection stats={[]} />);
    expect(screen.getByText('About Me')).toBeInTheDocument();
  });

  it('renders stat labels from translations', () => {
    render(<AboutSection stats={mockStats} />);
    // Label comes from translations (EN), not from stat.label prop
    expect(screen.getByText('Location Intelligence & technology stack development')).toBeInTheDocument();
  });

  it('does not render Geoportfolio title', () => {
    render(<AboutSection stats={[]} />);
    expect(screen.queryByText('Geoportfolio')).not.toBeInTheDocument();
  });
});
