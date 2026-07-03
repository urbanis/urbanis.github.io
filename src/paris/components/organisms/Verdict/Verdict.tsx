import { motion } from 'motion/react';
import { Eyebrow } from '../../atoms/Eyebrow';
import styles from './Verdict.module.css';

export function Verdict() {
  return (
    <section className={styles.section} aria-labelledby="verdict-h">
      <div className={styles.inner}>
        <Eyebrow>The verdict</Eyebrow>
        <h2 id="verdict-h" className={styles.h}>
          Pioneer to most-restricted, and then to a public vote.
        </h2>
        <p className={styles.body}>
          The data suggests the policy largely held: scooters stayed under the
          cap, kept out of the banned zones, and, for roughly three in four, parked
          where they should. Paris went from the first European city to open the
          market to one of the most tightly governed, and the operators&rsquo;
          technology broadly kept pace. On 2 April 2023, the city handed the
          decision to its residents.
        </p>
        <motion.blockquote
          className={styles.quote}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
        >
          Perhaps the lesson from Paris is less about banning scooters than
          learning to adapt to them, and to make decisions based on data rather
          than headlines. Regulation and integration, more than prohibition, may be
          how a city moves beyond its dependence on the car.
        </motion.blockquote>
      </div>
    </section>
  );
}
