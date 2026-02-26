import { Tooltip } from 'antd';
import { motion } from 'motion/react';
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
        <motion.img
          src={src}
          alt={alt}
          className={styles.icon}
          style={{ width: size, height: size }}
          whileHover={{ scale: 1.2 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        />
      </a>
    </Tooltip>
  );
}
