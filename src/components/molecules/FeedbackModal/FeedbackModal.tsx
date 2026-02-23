import { Modal, Button, Space, Alert, Result } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import { ContactForm } from '../ContactForm';

interface FeedbackModalProps {
  open: boolean;
  onClose: () => void;
  message: string;
  onMessageChange: (value: string) => void;
  onSend: () => Promise<boolean>;
  isLoading?: boolean;
  error?: string | null;
  success?: boolean;
  onResetStatus?: () => void;
}

export function FeedbackModal({
  open,
  onClose,
  message,
  onMessageChange,
  onSend,
  isLoading = false,
  error = null,
  success = false,
  onResetStatus,
}: FeedbackModalProps) {
  const handleSend = async () => {
    const sent = await onSend();
    if (sent) {
      // Keep modal open to show success message briefly
      setTimeout(() => {
        onClose();
        onResetStatus?.();
      }, 2000);
    }
  };

  const handleClose = () => {
    onClose();
    onResetStatus?.();
  };

  return (
    <Modal
      title="I appreciate your time and input"
      open={open}
      onCancel={handleClose}
      centered
      footer={
        success ? null : (
          <Space style={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              type="primary"
              onClick={handleSend}
              loading={isLoading}
              icon={<SendOutlined />}
              style={{ backgroundColor: '#0C355E' }}
              disabled={!message.trim()}
            >
              {isLoading ? 'Sending...' : 'Send email'}
            </Button>
            <Button onClick={handleClose} disabled={isLoading}>
              Close
            </Button>
          </Space>
        )
      }
    >
      {success ? (
        <Result
          status="success"
          title="Message Sent!"
          subTitle="Thank you for your feedback. I'll get back to you soon."
        />
      ) : (
        <>
          {error && (
            <Alert
              message="Error"
              description={error}
              type="error"
              showIcon
              style={{ marginBottom: 16 }}
            />
          )}
          <ContactForm value={message} onChange={onMessageChange} />
        </>
      )}
    </Modal>
  );
}
