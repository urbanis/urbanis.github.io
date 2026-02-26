import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { TimeMapApp } from './TimeMapApp';
import styles from './TimeMapSection.module.css';

export function TimeMapSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div ref={ref} className={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.6 }}
      >
        <TimeMapApp />
      </motion.div>
    </div>
  );
}
