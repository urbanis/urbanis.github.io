import { motion } from 'motion/react';
import { SourceTag } from '../../atoms/SourceTag';
import styles from './FigureBreakout.module.css';

interface FigureBreakoutProps {
  src: string;
  alt: string;
  caption?: string;
  source?: string;
}

export function FigureBreakout({ src, alt, caption, source }: FigureBreakoutProps) {
  return (
    <motion.figure
      className={styles.figure}
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <img className={styles.img} src={src} alt={alt} loading="lazy" />
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
      {source && <SourceTag>{source}</SourceTag>}
    </motion.figure>
  );
}
