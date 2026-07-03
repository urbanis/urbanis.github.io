import { motion } from 'motion/react';
import { operatorsTimeline, operatorLegend } from '../../../data/operators';
import styles from './OperatorsTimeline.module.css';

export function OperatorsTimeline() {
  return (
    <figure className={styles.wrap}>
      <figcaption className={styles.legend}>
        {operatorLegend.map((l) => (
          <span key={l.mode} className={styles.legendItem}>
            <span className={`${styles.swatch} ${styles[l.mode]}`} aria-hidden="true" />
            {l.label}
          </span>
        ))}
      </figcaption>

      <div className={styles.scroller}>
        <div className={styles.track}>
          <div className={styles.axis} aria-hidden="true" />
          {operatorsTimeline.map((col, i) => (
            <motion.div
              key={col.year}
              className={styles.col}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
            >
              <span className={styles.year}>{col.year}</span>
              <span className={styles.dot} aria-hidden="true" />
              <ul className={styles.chips}>
                {col.operators.map((op) => (
                  <li
                    key={op.name}
                    className={`${styles.chip} ${styles[op.mode]}`}
                  >
                    {op.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </figure>
  );
}
