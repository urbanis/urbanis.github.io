import { motion } from 'motion/react';
import { Eyebrow } from '../../atoms/Eyebrow';
import { SourceTag } from '../../atoms/SourceTag';
import { StatBig } from '../../molecules/StatBig';
import { contextStats, modalSplit } from '../../../data/stats';
import styles from './CityContext.module.css';

export function CityContext() {
  return (
    <section className={styles.section} aria-labelledby="context-h">
      <div className={styles.intro}>
        <Eyebrow>The city</Eyebrow>
        <h2 id="context-h" className={styles.h}>
          A dense, walkable city already at war with the car.
        </h2>
        <p className={styles.lede}>
          Paris packs more than 20,000 people into every square kilometre, five
          times denser than Berlin. Under Mayor Hidalgo&rsquo;s &ldquo;15-minute
          city&rdquo;, the car has been pushed out for two decades. Micromobility
          arrived into that fight.
        </p>
      </div>

      <div className={styles.stats}>
        {contextStats.map((s) => (
          <StatBig key={s.label} stat={s} compact />
        ))}
      </div>

      <div className={styles.modal}>
        <Eyebrow>Modal split</Eyebrow>
        <ul className={styles.bars}>
          {modalSplit.map((m) => (
            <li key={m.mode} className={styles.barRow}>
              <span className={styles.barLabel}>{m.mode}</span>
              <div className={styles.barTrack}>
                <motion.div
                  className={styles.barFill}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${m.pct}%` }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.8 }}
                />
              </div>
              <span className={styles.barPct}>{m.pct}%</span>
            </li>
          ))}
        </ul>
        <SourceTag>
          <a
            className={styles.sourceLink}
            href="https://www.lafabriquedelacite.com/publications/a-pied-ou-a-velo-quand-paris-marche-amsterdam-pedale/"
            target="_blank"
            rel="noreferrer"
          >
            La Fabrique de la Cité
          </a>
        </SourceTag>
      </div>
    </section>
  );
}
