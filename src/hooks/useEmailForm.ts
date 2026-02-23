import { useState, useCallback } from 'react';
import { sendEmail } from '@/utils/email';

export interface UseEmailFormResult {
  message: string;
  setMessage: (value: string) => void;
  sendEmailAsync: () => Promise<boolean>;
  isLoading: boolean;
  error: string | null;
  success: boolean;
  resetForm: () => void;
  resetStatus: () => void;
}

export function useEmailForm(): UseEmailFormResult {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const sendEmailAsync = useCallback(async (): Promise<boolean> => {
    if (!message.trim()) {
      setError('Please enter a message');
      return false;
    }

    setIsLoading(true);
    setError(null);
    setSuccess(false);

    const result = await sendEmail({ message });

    setIsLoading(false);

    if (result.success) {
      setSuccess(true);
      setMessage('');
      return true;
    } else {
      setError(result.error || 'Failed to send email');
      return false;
    }
  }, [message]);

  const resetForm = useCallback(() => {
    setMessage('');
    setError(null);
    setSuccess(false);
  }, []);

  const resetStatus = useCallback(() => {
    setError(null);
    setSuccess(false);
  }, []);

  return {
    message,
    setMessage,
    sendEmailAsync,
    isLoading,
    error,
    success,
    resetForm,
    resetStatus,
  };
}
