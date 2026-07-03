import { motion } from 'motion/react';
import { Eyebrow } from '../../atoms/Eyebrow';
import { SourceTag } from '../../atoms/SourceTag';
import { OperatorsTimeline } from '../../molecules/OperatorsTimeline';
import { services } from '../../../data/services';
import styles from './ServicesIntro.module.css';

export function ServicesIntro() {
  return (
    <section className={styles.section} aria-labelledby="services-h">
      <div className={styles.intro}>
        <Eyebrow>The new services</Eyebrow>
        <h2 id="services-h" className={styles.h}>
          Three shared modes, but the scooter is the protagonist.
        </h2>
      </div>
      <div className={styles.grid}>
        {services.map((s, i) => (
          <motion.article
            key={s.name}
            className={`${styles.card} ${s.name === 'Scooter' ? styles.lead : ''}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            {s.image && (
              <div className={styles.cardMedia}>
                <img
                  className={styles.cardImage}
                  src={s.image}
                  alt={s.imageAlt}
                  loading="lazy"
                />
              </div>
            )}
            <div className={styles.cardBody}>
              <p className={styles.cardYear}>{s.year}</p>
              <h3 className={styles.cardName}>{s.name}</h3>
              <p className={styles.cardOperator}>{s.operator}</p>
              <p className={styles.cardMetric}>{s.metric}</p>
              <p className={styles.cardBlurb}>{s.blurb}</p>
              {s.source && (
                <SourceTag>
                  {s.sourceUrl ? (
                    <a
                      className={styles.sourceLink}
                      href={s.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {s.source}
                    </a>
                  ) : (
                    s.source
                  )}
                </SourceTag>
              )}
            </div>
          </motion.article>
        ))}
      </div>

      <div className={styles.bridge}>
        <p className={styles.bridgeLede}>
          And the operators piled in. From Vélib&rsquo; in 2007, the free-floating
          market exploded across 2018&ndash;2019, with a dozen scooter brands
          arriving at once, before the city&rsquo;s 2020 tender cut the field to
          three.
        </p>
        <OperatorsTimeline />
        <p className={styles.bridgeCaption}>
          L&rsquo;arrivée des opérateurs en free-floating: the field swelled through
          2018&ndash;2019, then the 2020 tender left only Lime, Tier and Dott.
        </p>
        <SourceTag>Own illustration</SourceTag>
      </div>
    </section>
  );
}
