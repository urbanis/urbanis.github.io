import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';
import type { PersonalInfo, SocialLink } from '@/types';

const mockPersonalInfo: PersonalInfo = {
  name: 'Test Name',
  title: 'Test Title',
  education: ['Degree 1', 'Degree 2'],
  email: 'test@example.com',
  avatar: '/test-avatar.jpg',
  bio: 'Test bio',
};

const mockSocialLinks: SocialLink[] = [
  {
    platform: 'linkedin',
    url: 'https://linkedin.com',
    icon: '/linkedin.svg',
    tooltip: 'LinkedIn',
  },
];

describe('Header', () => {
  it('renders the name', () => {
    render(
      <Header
        personalInfo={mockPersonalInfo}
        socialLinks={mockSocialLinks}
        onCertificationClick={vi.fn()}
      />
    );
    expect(screen.getByText('Test Name')).toBeInTheDocument();
  });

  it('renders the title', () => {
    render(
      <Header
        personalInfo={mockPersonalInfo}
        socialLinks={mockSocialLinks}
        onCertificationClick={vi.fn()}
      />
    );
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders the education', () => {
    render(
      <Header
        personalInfo={mockPersonalInfo}
        socialLinks={mockSocialLinks}
        onCertificationClick={vi.fn()}
      />
    );
    expect(screen.getByText('Degree 1 | Degree 2')).toBeInTheDocument();
  });

  it('renders the email link', () => {
    render(
      <Header
        personalInfo={mockPersonalInfo}
        socialLinks={mockSocialLinks}
        onCertificationClick={vi.fn()}
      />
    );
    expect(screen.getByText('test@example.com')).toBeInTheDocument();
  });

  it('renders the avatar', () => {
    render(
      <Header
        personalInfo={mockPersonalInfo}
        socialLinks={mockSocialLinks}
        onCertificationClick={vi.fn()}
      />
    );
    expect(screen.getByAltText('Test Name')).toBeInTheDocument();
  });
});
