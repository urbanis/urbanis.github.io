import { Tag } from 'antd';

interface TechTagProps {
  label: string;
}

export function TechTag({ label }: TechTagProps) {
  return (
    <Tag
      style={{
        color: '#38bdf8',
        backgroundColor: 'rgba(56,189,248,0.08)',
        border: '1px solid rgba(56,189,248,0.2)',
        borderRadius: '4px',
        padding: '2px 8px',
        fontSize: '0.8rem',
      }}
    >
      {label}
    </Tag>
  );
}
