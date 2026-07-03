import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { HeroSection } from './HeroSection';

const renderHero = () =>
  render(
    <MemoryRouter>
      <LanguageProvider>
        <HeroSection />
      </LanguageProvider>
    </MemoryRouter>
  );

describe('HeroSection', () => {
  it('renders the name', () => {
    renderHero();
    expect(screen.getByText('Nisleida Morales')).toBeInTheDocument();
  });

  it('renders the see my portfolio link', () => {
    renderHero();
    expect(screen.getByRole('link', { name: /see my portfolio/i })).toBeInTheDocument();
  });

  it('see my portfolio link points to /portfolio', () => {
    renderHero();
    expect(screen.getByRole('link', { name: /see my portfolio/i })).toHaveAttribute('href', '/portfolio');
  });
});
