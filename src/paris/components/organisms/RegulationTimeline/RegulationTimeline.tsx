import { motion } from 'motion/react';
import { Eyebrow } from '../../atoms/Eyebrow';
import { SourceTag } from '../../atoms/SourceTag';
import { timeline } from '../../../data/timeline';
import styles from './RegulationTimeline.module.css';

export function RegulationTimeline() {
  return (
    <section className={styles.section} aria-labelledby="timeline-h">
      <div className={styles.intro}>
        <Eyebrow>The regulation timeline</Eyebrow>
        <h2 id="timeline-h" className={styles.h}>
          From open free-for-all to a tightly governed market.
        </h2>
      </div>

      <ol className={styles.track}>
        {timeline.map((t) => (
          <motion.li
            key={t.year + t.title}
            className={styles.entry}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.dot} aria-hidden="true" />
            <p className={styles.year}>{t.year}</p>
            <div className={styles.body}>
              <div className={styles.head}>
                <h3 className={styles.title}>{t.title}</h3>
                <span className={`${styles.badge} ${styles[t.kind]}`}>{t.kind}</span>
              </div>
              <p className={styles.actor}>{t.actor}</p>
              <p className={styles.desc}>{t.description}</p>
              {t.photo && !t.photoB && (
                <img
                  className={styles.photo}
                  src={t.photo}
                  alt={t.photoAlt}
                  loading="lazy"
                />
              )}
              {t.photo && t.photoB && (
                <div className={styles.duality}>
                  <figure className={styles.dualPanel}>
                    <img
                      className={styles.dualImg}
                      src={t.photo}
                      alt={t.photoAlt}
                      loading="lazy"
                    />
                    <figcaption>
                      {t.photoUrl ? (
                        <a
                          className={`${styles.dualCaption} ${styles.against}`}
                          href={t.photoUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {t.photoCaption} ↗
                        </a>
                      ) : (
                        <span className={`${styles.dualCaption} ${styles.against}`}>
                          {t.photoCaption}
                        </span>
                      )}
                    </figcaption>
                  </figure>
                  <figure className={styles.dualPanel}>
                    <img
                      className={styles.dualImg}
                      src={t.photoB}
                      alt={t.photoBAlt}
                      loading="lazy"
                    />
                    <figcaption>
                      {t.photoBUrl ? (
                        <a
                          className={`${styles.dualCaption} ${styles.forOp}`}
                          href={t.photoBUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {t.photoBCaption} ↗
                        </a>
                      ) : (
                        <span className={`${styles.dualCaption} ${styles.forOp}`}>
                          {t.photoBCaption}
                        </span>
                      )}
                    </figcaption>
                  </figure>
                </div>
              )}
              {t.source && (
                <SourceTag>
                  {t.sourceUrl ? (
                    <a
                      className={styles.sourceLink}
                      href={t.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t.source}
                    </a>
                  ) : (
                    t.source
                  )}
                </SourceTag>
              )}
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
