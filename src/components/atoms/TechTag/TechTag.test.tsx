import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TechTag } from './TechTag';

describe('TechTag', () => {
  it('renders the label text', () => {
    render(<TechTag label="#PostGIS" />);
    expect(screen.getByText('#PostGIS')).toBeInTheDocument();
  });

  it('applies muted text color', () => {
    render(<TechTag label="#React" />);
    const tag = screen.getByText('#React');
    expect(tag).toHaveStyle({ color: '#6c757d' });
  });
});
