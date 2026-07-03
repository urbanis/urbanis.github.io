import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SankeySection } from './SankeySection';

describe('SankeySection', () => {
  it('renders the section title', () => {
    render(<SankeySection />);
    expect(screen.getByText('How I Work')).toBeInTheDocument();
  });

  it('renders the sankey diagram', () => {
    const { container } = render(<SankeySection />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('renders specific skills, broad skills, and industries', () => {
    render(<SankeySection />);
    expect(screen.getByText('Site Assessment')).toBeInTheDocument();
    expect(screen.getByText('Data Analyst')).toBeInTheDocument();
    expect(screen.getByText('Geospatial')).toBeInTheDocument();
  });

  it('highlights node on hover', async () => {
    render(<SankeySection />);
    const group = screen.getByText('Engineering').closest('g');
    if (!group) throw new Error('Engineering node not found');
    await userEvent.hover(group);
    expect(screen.getByText('Engineering')).toBeInTheDocument();
  });
});
