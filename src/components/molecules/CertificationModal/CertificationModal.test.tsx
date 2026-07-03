import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { CertificationModal } from './CertificationModal';

describe('CertificationModal', () => {
  const defaultProps = {
    open: true,
    onClose: vi.fn(),
    imageUrl: '/test-cert.jpg',
    credlyUrl: 'https://credly.com/test',
  };

  it('renders modal title when open', () => {
    render(<CertificationModal {...defaultProps} />);
    expect(screen.getByText('Certification Image')).toBeInTheDocument();
  });

  it('renders certification image', () => {
    render(<CertificationModal {...defaultProps} />);
    const img = screen.getByAltText('ArcGIS Pro Associate Certification');
    expect(img).toHaveAttribute('src', '/test-cert.jpg');
  });

  it('renders Credly link button', () => {
    render(<CertificationModal {...defaultProps} />);
    const button = screen.getByRole('link', { name: 'See on Credly' });
    expect(button).toHaveAttribute('href', 'https://credly.com/test');
    expect(button).toHaveAttribute('target', '_blank');
  });

  it('calls onClose when close button is clicked', () => {
    render(<CertificationModal {...defaultProps} />);
    const closeButton = screen.getByRole('button', { name: 'Close' });
    fireEvent.click(closeButton);
    expect(defaultProps.onClose).toHaveBeenCalled();
  });

  it('does not render when closed', () => {
    render(<CertificationModal {...defaultProps} open={false} />);
    expect(screen.queryByText('Certification Image')).not.toBeInTheDocument();
  });
});
