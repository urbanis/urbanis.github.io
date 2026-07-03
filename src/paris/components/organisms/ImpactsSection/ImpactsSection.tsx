import { Eyebrow } from '../../atoms/Eyebrow';
import { StatBig } from '../../molecules/StatBig';
import { impactStats } from '../../../data/stats';
import styles from './ImpactsSection.module.css';

export function ImpactsSection() {
  return (
    <section className={styles.section} aria-labelledby="impact-h">
      <div className={styles.intro}>
        <Eyebrow>The impact</Eyebrow>
        <h2 id="impact-h" className={styles.h}>
          What the service delivered.
        </h2>
        <p className={styles.lede}>
          Beyond compliance, the numbers point to real upside: heavy use by
          Parisians, thousands of jobs, and a strong safety record. Just 0.01% of
          journeys between 2020 and 2022 resulted in an accident, most of them
          individual falls, while operators steadily improved vehicle durability
          to cut waste.
        </p>
      </div>

      <div className={styles.stats}>
        {impactStats.map((s) => (
          <StatBig key={s.label} stat={s} compact />
        ))}
      </div>
    </section>
  );
}
