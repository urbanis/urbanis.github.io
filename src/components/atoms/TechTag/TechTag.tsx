import { Tag } from 'antd';

interface TechTagProps {
  label: string;
}

export function TechTag({ label }: TechTagProps) {
  return (
    <Tag
      style={{
        color: '#6c757d',
        backgroundColor: 'transparent',
        border: 'none',
        padding: 0,
        fontSize: '0.875rem',
      }}
    >
      {label}
    </Tag>
  );
}
