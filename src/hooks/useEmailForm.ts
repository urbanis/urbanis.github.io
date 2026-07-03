import { useState, useCallback } from 'react';
import { sendEmail } from '@/utils/email';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const MESSAGE_MAX = 1500;

export interface UseEmailFormResult {
  name: string;
  setName: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  message: string;
  setMessage: (value: string) => void;
  honeypot: string;
  setHoneypot: (value: string) => void;
  sendEmailAsync: () => Promise<boolean>;
  isLoading: boolean;
  error: string | null;
  success: boolean;
  resetForm: () => void;
  resetStatus: () => void;
}

export function useEmailForm(): UseEmailFormResult {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const sendEmailAsync = useCallback(async (): Promise<boolean> => {
    if (honeypot) return false;

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please fill in all fields');
      return false;
    }

    if (!EMAIL_REGEX.test(email)) {
      setError('Please enter a valid email address');
      return false;
    }

    if (message.length > MESSAGE_MAX) {
      setError(`Message must be ${MESSAGE_MAX} characters or less`);
      return false;
    }

    setIsLoading(true);
    setError(null);
    setSuccess(false);

    const result = await sendEmail({ name, email, message });

    setIsLoading(false);

    if (result.success) {
      setSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
      return true;
    } else {
      setError(result.error || 'Failed to send email');
      return false;
    }
  }, [name, email, message, honeypot]);

  const resetForm = useCallback(() => {
    setName('');
    setEmail('');
    setMessage('');
    setError(null);
    setSuccess(false);
  }, []);

  const resetStatus = useCallback(() => {
    setError(null);
    setSuccess(false);
  }, []);

  return {
    name, setName,
    email, setEmail,
    message, setMessage,
    honeypot, setHoneypot,
    sendEmailAsync,
    isLoading,
    error,
    success,
    resetForm,
    resetStatus,
  };
}
