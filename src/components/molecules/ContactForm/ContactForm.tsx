import { Input } from 'antd';

const { TextArea } = Input;

interface ContactFormProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function ContactForm({
  value,
  onChange,
  placeholder = 'Any message, thoughts, ideas, improvement or feedback is welcome...',
}: ContactFormProps) {
  return (
    <TextArea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={4}
    />
  );
}
