import { Tooltip } from 'antd';
import styles from './IconButton.module.css';

interface IconButtonProps {
  src: string;
  alt: string;
  tooltip: string;
  href: string;
  size?: number;
}

export function IconButton({
  src,
  alt,
  tooltip,
  href,
  size = 30,
}: IconButtonProps) {
  return (
    <Tooltip title={tooltip} placement="bottom">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        <img
          src={src}
          alt={alt}
          className={styles.icon}
          style={{ width: size, height: size }}
        />
      </a>
    </Tooltip>
  );
}
