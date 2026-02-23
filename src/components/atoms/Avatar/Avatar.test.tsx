import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Avatar } from './Avatar';

describe('Avatar', () => {
  it('renders with correct alt text', () => {
    render(<Avatar src="/test.jpg" alt="Test User" />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('alt', 'Test User');
  });

  it('renders with correct src', () => {
    render(<Avatar src="/test.jpg" alt="Test User" />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', '/test.jpg');
  });

  it('renders with default size', () => {
    render(<Avatar src="/test.jpg" alt="Test User" />);
    const avatar = screen.getByRole('img').closest('.ant-avatar');
    expect(avatar).toHaveStyle({ width: '150px', height: '150px' });
  });

  it('renders with custom size', () => {
    render(<Avatar src="/test.jpg" alt="Test User" size={100} />);
    const avatar = screen.getByRole('img').closest('.ant-avatar');
    expect(avatar).toHaveStyle({ width: '100px', height: '100px' });
  });
});
