import type { Meta, StoryObj } from '@storybook/react';
import { CertificationModal } from './CertificationModal';
import { certificationData } from '@/data/socialLinks';

const meta: Meta<typeof CertificationModal> = {
  title: 'Molecules/CertificationModal',
  component: CertificationModal,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CertificationModal>;

export const Open: Story = {
  args: {
    open: true,
    onClose: () => {},
    imageUrl: certificationData.image,
    credlyUrl: certificationData.credlyUrl,
  },
};

export const Closed: Story = {
  args: {
    open: false,
    onClose: () => {},
    imageUrl: certificationData.image,
    credlyUrl: certificationData.credlyUrl,
  },
};
