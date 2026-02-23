import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProjectCard } from './ProjectCard';
import type { Project } from '@/types';

const mockProject: Project = {
  id: 'test',
  title: 'Test Project',
  description: 'Test description',
  image: '/test.jpg',
  imageAlt: 'Test',
  tags: ['#React', '#TypeScript'],
  links: [
    { type: 'github', url: 'https://github.com/test' },
    { type: 'linkedin', url: 'https://linkedin.com/test' },
  ],
};

describe('ProjectCard', () => {
  it('renders project title', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
  });

  it('renders project description', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });

  it('renders project image with alt text', () => {
    render(<ProjectCard project={mockProject} />);
    const img = screen.getByAltText('Test');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/test.jpg');
  });

  it('renders all tech tags', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('#React')).toBeInTheDocument();
    expect(screen.getByText('#TypeScript')).toBeInTheDocument();
  });

  it('renders all project links', () => {
    render(<ProjectCard project={mockProject} />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(2);
  });
});
