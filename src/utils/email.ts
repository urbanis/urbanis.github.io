import emailjs from '@emailjs/browser';

// EmailJS configuration - set these in your .env file
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export interface EmailParams {
  message: string;
  from_name?: string;
}

export interface SendEmailResult {
  success: boolean;
  error?: string;
}

export async function sendEmail(params: EmailParams): Promise<SendEmailResult> {
  // Check if EmailJS is configured
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    // Fallback to mailto if not configured
    const mailtoUrl = prepareMailtoUrl(
      'nisleida.morales@gmail.com',
      'Feedback',
      params.message
    );
    window.location.href = mailtoUrl;
    return { success: true };
  }

  try {
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        message: params.message,
        from_name: params.from_name || 'Portfolio Visitor',
      },
      PUBLIC_KEY
    );
    return { success: true };
  } catch (error) {
    console.error('EmailJS error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to send email',
    };
  }
}

export function prepareMailtoUrl(
  email: string,
  subject: string,
  body: string
): string {
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);
  return `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;
}
