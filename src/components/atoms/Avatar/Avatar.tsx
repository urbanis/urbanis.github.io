import { Avatar as AntAvatar } from 'antd';

interface AvatarProps {
  src: string;
  alt: string;
  size?: number;
}

export function Avatar({ src, alt, size = 150 }: AvatarProps) {
  return <AntAvatar src={src} alt={alt} size={size} />;
}
