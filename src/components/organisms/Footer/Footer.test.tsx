import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Footer } from './Footer';

describe('Footer', () => {
  it('renders the footer', () => {
    render(<MemoryRouter><Footer /></MemoryRouter>);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
