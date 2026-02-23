import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ConfigProvider } from 'antd';
import { MainLayout } from './MainLayout';
import { portfolioTheme } from '@/styles/theme';

describe('MainLayout', () => {
  const renderWithTheme = () =>
    render(
      <ConfigProvider theme={portfolioTheme}>
        <MainLayout />
      </ConfigProvider>
    );

  it('renders the header with name', () => {
    renderWithTheme();
    expect(screen.getByText('Nisleida Morales')).toBeInTheDocument();
  });

  it('renders the about section with bio', () => {
    renderWithTheme();
    expect(screen.getByText(/My name is Nisleida/)).toBeInTheDocument();
  });

  it('renders the portfolio section title', () => {
    renderWithTheme();
    expect(screen.getByText('Geoportfolio')).toBeInTheDocument();
  });

  it('renders all project cards', () => {
    renderWithTheme();
    expect(
      screen.getByText('Urban growth in Nordelta, Buenos Aires')
    ).toBeInTheDocument();
    expect(
      screen.getByText('GBFS - Scooter Sharing Analysis in Paris')
    ).toBeInTheDocument();
  });

  it('renders the footer with contact button', () => {
    renderWithTheme();
    expect(
      screen.getByRole('button', { name: 'Reach me out!' })
    ).toBeInTheDocument();
  });
});
