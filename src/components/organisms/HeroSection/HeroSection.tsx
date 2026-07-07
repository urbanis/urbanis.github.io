import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useLang } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import styles from './HeroSection.module.css';

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const { lang } = useLang();
  const t = translations[lang].hero;
  const roles = t.roles;

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <div className={styles.hero}>

      <div className={styles.photoWrapper}>
        <img src="/assets/images/doodle.png" alt="Illustration of Nisleida Morales on a bicycle" className={styles.photo} />
      </div>

      <div className={styles.content}>
        <p className={styles.eyebrow}>{t.eyebrow}</p>
        <h1 className={styles.name}>Nisleida Morales</h1>

        <div className={styles.roleWrapper}>
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIndex}
              className={styles.role}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.3 }}
            >
              {roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        <div className={styles.actions}>
          <Link to="/portfolio" className={styles.btnPrimary}>
            {t.seeWork}
          </Link>
          <a
            href="https://github.com/urbanis"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnSecondary}
          >
            {t.github}
          </a>
        </div>

      </div>

<div className={styles.bgAccent} aria-hidden="true" />
    </div>
  );
}
