import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SankeyDiagram } from './SankeyDiagram';

describe('SankeyDiagram', () => {
  it('renders an svg element', () => {
    const { container } = render(<SankeyDiagram activeId={null} onHover={() => {}} />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('renders specific skill labels', () => {
    render(<SankeyDiagram activeId={null} onHover={() => {}} />);
    expect(screen.getByText('Site Assessment')).toBeInTheDocument();
    expect(screen.getByText('Esri')).toBeInTheDocument();
    expect(screen.getByText('n8n Automations')).toBeInTheDocument();
  });

  it('renders broad skill labels', () => {
    render(<SankeyDiagram activeId={null} onHover={() => {}} />);
    expect(screen.getByText('Data Analyst')).toBeInTheDocument();
    expect(screen.getByText('Communication & Design')).toBeInTheDocument();
    expect(screen.getByText('Engineering')).toBeInTheDocument();
  });

  it('renders industry labels', () => {
    render(<SankeyDiagram activeId={null} onHover={() => {}} />);
    expect(screen.getByText('Urban Planning & Mobility')).toBeInTheDocument();
    expect(screen.getByText('Geospatial')).toBeInTheDocument();
    expect(screen.getByText('Product & Tech')).toBeInTheDocument();
  });

  it('calls onHover with node id on mouse enter', async () => {
    const onHover = vi.fn();
    render(<SankeyDiagram activeId={null} onHover={onHover} />);
    const group = screen.getByText('Data Analyst').closest('g');
    if (!group) throw new Error('Data Analyst node not found');
    await userEvent.hover(group);
    expect(onHover).toHaveBeenCalledWith('data-analyst');
  });

  it('calls onHover with null on mouse leave', async () => {
    const onHover = vi.fn();
    render(<SankeyDiagram activeId={null} onHover={onHover} />);
    const group = screen.getByText('Data Analyst').closest('g');
    if (!group) throw new Error('Data Analyst node not found');
    await userEvent.hover(group);
    await userEvent.unhover(group);
    expect(onHover).toHaveBeenLastCalledWith(null);
  });
});
