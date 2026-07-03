import { useState } from 'react';
import { motion } from 'motion/react';
import type { Stat } from '../../../data/types';
import { useCountUp } from '../../../hooks/useCountUp';
import styles from './StatBig.module.css';

export function StatBig({ stat, compact = false }: { stat: Stat; compact?: boolean }) {
  const [active, setActive] = useState(false);
  const value = useCountUp(stat.value, active);

  return (
    <motion.div
      className={`${styles.wrap} ${compact ? styles.compact : ''}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      onViewportEnter={() => setActive(true)}
      transition={{ duration: 0.5 }}
    >
      <span className={styles.number}>
        {stat.prefix}
        {value.toLocaleString('en-US')}
        {stat.suffix}
      </span>
      <span className={styles.label}>{stat.label}</span>
      {stat.source && <span className={styles.source}>{stat.source}</span>}
    </motion.div>
  );
}
