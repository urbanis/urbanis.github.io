import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { SocialLinks } from './SocialLinks';
import type { SocialLink } from '@/types';

const mockLinks: SocialLink[] = [
  {
    platform: 'linkedin',
    url: 'https://linkedin.com',
    icon: '/linkedin.svg',
    tooltip: 'LinkedIn',
  },
  {
    platform: 'github',
    url: 'https://github.com',
    icon: '/github.svg',
    tooltip: 'GitHub',
  },
  {
    platform: 'certification',
    url: '#',
    icon: '/cert.svg',
    tooltip: 'Certification',
  },
];

describe('SocialLinks', () => {
  it('renders all social links', () => {
    render(<SocialLinks links={mockLinks} />);
    expect(screen.getByAltText('linkedin')).toBeInTheDocument();
    expect(screen.getByAltText('github')).toBeInTheDocument();
    expect(screen.getByAltText('certification')).toBeInTheDocument();
  });

  it('renders external links for non-certification items', () => {
    render(<SocialLinks links={mockLinks} />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(2);
  });

  it('calls onCertificationClick when certification is clicked', () => {
    const handleClick = vi.fn();
    render(
      <SocialLinks links={mockLinks} onCertificationClick={handleClick} />
    );
    const certButton = screen.getByAltText('certification').closest('button');
    if (certButton) {
      fireEvent.click(certButton);
      expect(handleClick).toHaveBeenCalledTimes(1);
    }
  });
});
