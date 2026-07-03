import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { MainLayout } from './MainLayout';
import { portfolioTheme } from '@/styles/theme';

describe('MainLayout', () => {
  const renderWithProviders = () =>
    render(
      <MemoryRouter>
        <LanguageProvider>
          <ConfigProvider theme={portfolioTheme}>
            <MainLayout />
          </ConfigProvider>
        </LanguageProvider>
      </MemoryRouter>
    );

  it('renders the hero with name', () => {
    renderWithProviders();
    expect(screen.getAllByText('Nisleida Morales')[0]).toBeInTheDocument();
  });

  it('renders the about section', () => {
    renderWithProviders();
    expect(screen.getByText(/Solutions Engineer/)).toBeInTheDocument();
  });

  it('renders nav section links', () => {
    renderWithProviders();
    expect(screen.getAllByRole('link', { name: 'About' })[0]).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: 'Portfolio' })[0]).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: 'Journal' })[0]).toBeInTheDocument();
  });
});
