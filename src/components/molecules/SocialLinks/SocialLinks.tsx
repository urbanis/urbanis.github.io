import { Space } from 'antd';
import { SocialIcon } from '@/components/atoms/SocialIcon';
import type { SocialLink } from '@/types';

interface SocialLinksProps {
  links: SocialLink[];
  onCertificationClick?: () => void;
}

export function SocialLinks({ links, onCertificationClick }: SocialLinksProps) {
  return (
    <Space size={8}>
      {links.map((link) => (
        <SocialIcon
          key={link.platform}
          src={link.icon}
          alt={link.platform}
          tooltip={link.tooltip}
          href={link.platform === 'certification' ? undefined : link.url}
          onClick={
            link.platform === 'certification' ? onCertificationClick : undefined
          }
        />
      ))}
    </Space>
  );
}
