import { motion } from 'motion/react';
import styles from './StudyHero.module.css';

export function StudyHero() {
  return (
    <header className={styles.hero}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className={styles.kicker}>Paris · 2018&ndash;2023</p>
        <h1 className={styles.title}>
          Paris &amp; the Public Policy of Micromobility
        </h1>
        <p className={styles.subhead}>
          How a city went from free-floating pioneer to Europe&rsquo;s most
          governed scooter market, and whether the policy actually worked.
        </p>
        <p className={styles.meta}>
          A master&rsquo;s research study ·{' '}
          <span className={styles.uni}>Technische Universität Berlin</span> · 2023 ·
          Nisleida Morales
        </p>
      </motion.div>

      <motion.div
        className={styles.media}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          className={styles.image}
          src="/figures/Paris-scooter.jpg"
          alt="Three red Voi e-scooters parked upright on the patterned Trocadéro plaza in front of the Eiffel Tower at dusk."
        />
      </motion.div>

      <div className={styles.scrollCue} aria-hidden="true">
        Scroll ↓
      </div>
    </header>
  );
}
