import { Tooltip } from 'antd';
import styles from './SocialIcon.module.css';

interface SocialIconProps {
  src: string;
  alt: string;
  tooltip: string;
  href?: string;
  onClick?: () => void;
  size?: number;
}

export function SocialIcon({
  src,
  alt,
  tooltip,
  href,
  onClick,
  size = 40,
}: SocialIconProps) {
  const imgElement = (
    <img
      src={src}
      alt={alt}
      className={styles.icon}
      style={{ width: size, height: size }}
    />
  );

  const content = href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={styles.link}
    >
      {imgElement}
    </a>
  ) : (
    <button onClick={onClick} className={styles.button} type="button">
      {imgElement}
    </button>
  );

  return (
    <Tooltip title={tooltip} placement="bottom">
      {content}
    </Tooltip>
  );
}
