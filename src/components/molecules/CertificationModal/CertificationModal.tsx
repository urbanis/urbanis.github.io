import { Modal, Button } from 'antd';

interface CertificationModalProps {
  open: boolean;
  onClose: () => void;
  imageUrl: string;
  credlyUrl: string;
}

export function CertificationModal({
  open,
  onClose,
  imageUrl,
  credlyUrl,
}: CertificationModalProps) {
  return (
    <Modal
      title="Certification Image"
      open={open}
      onCancel={onClose}
      centered
      width={800}
      footer={
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            type="primary"
            href={credlyUrl}
            target="_blank"
            style={{ backgroundColor: '#0C355E' }}
          >
            See on Credly
          </Button>
        </div>
      }
    >
      <img
        src={imageUrl}
        alt="ArcGIS Pro Associate Certification"
        style={{ width: '100%' }}
      />
    </Modal>
  );
}
