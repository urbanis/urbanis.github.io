import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { Navbar } from './Navbar';

const renderNavbar = () =>
  render(
    <MemoryRouter>
      <LanguageProvider>
        <Navbar />
      </LanguageProvider>
    </MemoryRouter>
  );

describe('Navbar', () => {
  it('renders a nav element', () => {
    const { container } = renderNavbar();
    expect(container.querySelector('nav')).toBeInTheDocument();
  });

  it('renders the logo name', () => {
    renderNavbar();
    expect(screen.getByText('Nisleida Morales')).toBeInTheDocument();
  });

  it('renders section links', () => {
    renderNavbar();
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Portfolio' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Journal' })).toBeInTheDocument();
  });

  it('Portfolio link points to /portfolio', () => {
    renderNavbar();
    expect(screen.getByRole('link', { name: 'Portfolio' })).toHaveAttribute('href', '/portfolio');
  });

  it('renders hamburger button', () => {
    renderNavbar();
    expect(screen.getByRole('button', { name: /toggle menu/i })).toBeInTheDocument();
  });
});
