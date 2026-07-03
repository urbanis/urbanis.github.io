import { motion } from 'motion/react';
import type { Finding } from '../../../data/types';
import { Eyebrow } from '../../atoms/Eyebrow';
import { SourceTag } from '../../atoms/SourceTag';
import { ParisMap } from '../ParisMap';
import { StatBig } from '../StatBig';
import styles from './FindingScrolly.module.css';

export function FindingScrolly({ finding }: { finding: Finding }) {
  return (
    <section className={styles.finding} aria-labelledby={`f-${finding.id}`}>
      <div className={styles.sticky}>
        <figure className={styles.figureWrap}>
          {finding.map ? (
            <ParisMap mode={finding.map} />
          ) : (
            <img
              className={styles.img}
              src={finding.figure}
              alt={finding.figureAlt}
              loading="lazy"
            />
          )}
          <figcaption>
            <SourceTag>{finding.figureSource}</SourceTag>
          </figcaption>
        </figure>
      </div>

      <div className={styles.steps}>
        <Eyebrow>{finding.kicker}</Eyebrow>
        <h2 id={`f-${finding.id}`} className={styles.headline}>
          {finding.headline}
        </h2>
        {finding.steps.map((step, i) => (
          <motion.p
            key={i}
            className={styles.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            {step}
          </motion.p>
        ))}
        <div className={styles.stat}>
          <StatBig stat={finding.stat} />
        </div>
      </div>
    </section>
  );
}
