import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { PortfolioGrid } from './PortfolioGrid';
import type { Project } from '@/types';

const mockProjects: Project[] = [
  {
    id: 'project1',
    title: 'Project 1',
    description: 'Description 1',
    image: '/img1.jpg',
    imageAlt: 'Project 1',
    tags: ['#Tag1'],
    links: [{ type: 'github', url: 'https://github.com/test1' }],
  },
  {
    id: 'project2',
    title: 'Project 2',
    description: 'Description 2',
    image: '/img2.jpg',
    imageAlt: 'Project 2',
    tags: ['#Tag2'],
    links: [{ type: 'linkedin', url: 'https://linkedin.com/test2' }],
  },
];

describe('PortfolioGrid', () => {
  it('renders all project cards', () => {
    render(<PortfolioGrid projects={mockProjects} />);
    expect(screen.getByText('Project 1')).toBeInTheDocument();
    expect(screen.getByText('Project 2')).toBeInTheDocument();
  });

  it('renders project descriptions', () => {
    render(<PortfolioGrid projects={mockProjects} />);
    expect(screen.getByText('Description 1')).toBeInTheDocument();
    expect(screen.getByText('Description 2')).toBeInTheDocument();
  });

  it('renders empty grid when no projects', () => {
    render(<PortfolioGrid projects={[]} />);
    expect(screen.queryByRole('article')).not.toBeInTheDocument();
  });
});
