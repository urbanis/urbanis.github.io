import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { PortfolioStack } from './PortfolioStack';
import type { Project } from '@/types';

// IDs must match entries in the GROUPS constant inside PortfolioStack.
// 'my-journey' is in the 'behavior' group and has no translations.descriptions entry,
// so it falls back to project.description.
const mockProjects: Project[] = [
  {
    id: 'my-journey',
    title: 'Project One',
    description: 'Description one.',
    image: '/p1.png',
    imageAlt: 'Project One image',
    tags: ['#React'],
    links: [{ type: 'github', url: 'https://github.com/one' }],
  },
  {
    id: 'paris-policy',
    title: 'Project Two',
    description: 'Description two.',
    image: '/p2.png',
    imageAlt: 'Project Two image',
    tags: ['#TypeScript'],
    links: [{ type: 'arcgis', url: 'https://arcgis.com/two' }],
  },
];

const renderStack = () =>
  render(
    <MemoryRouter>
      <LanguageProvider>
        <PortfolioStack projects={mockProjects} />
      </LanguageProvider>
    </MemoryRouter>
  );

describe('PortfolioStack', () => {
  it('renders all project titles', () => {
    renderStack();
    expect(screen.getAllByText('Project One').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Project Two').length).toBeGreaterThan(0);
  });

  it('renders translated description for my-journey', () => {
    renderStack();
    // 'my-journey' now has a translations.descriptions entry — translation takes priority over mock description
    expect(screen.getAllByText(/storytelling/i).length).toBeGreaterThan(0);
  });

  it('renders project tags', () => {
    renderStack();
    expect(screen.getAllByText('#React').length).toBeGreaterThan(0);
    expect(screen.getAllByText('#TypeScript').length).toBeGreaterThan(0);
  });

  it('renders link buttons with correct href', () => {
    renderStack();
    const links = screen.getAllByRole('link', { name: /Open Project One/i });
    expect(links[0]).toHaveAttribute('href', 'https://github.com/one');
    expect(links[0]).toHaveAttribute('target', '_blank');
  });
});
