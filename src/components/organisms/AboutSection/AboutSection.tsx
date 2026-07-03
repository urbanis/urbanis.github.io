import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import type { ExperienceStat } from '@/types';
import { useLang } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import { PhotoCarousel } from './PhotoCarousel';
import { CityMaps } from './CityMaps';
import styles from './AboutSection.module.css';

interface AboutSectionProps {
  stats: ExperienceStat[];
}

function parseYears(years: string): { value: number; unit: string } {
  const m = years.match(/^(\d+)([\s\S]*)$/);
  return m ? { value: parseInt(m[1]), unit: m[2] } : { value: 0, unit: years };
}

function AnimatedStat({
  years, label, inView, delay,
}: { years: string; label: string; inView: boolean; delay: number }) {
  const { value, unit } = parseYears(years);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    const duration = 1400 + delay * 150;

    function step(ts: number) {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(value);
    }

    const id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, [value, inView, delay]);

  return (
    <motion.div
      className={styles.statItem}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 + delay * 0.12, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className={styles.statNumber}>
        {count}<span className={styles.statUnit}>{unit}</span>
      </span>
      <span className={styles.statLabel}>{label}</span>
    </motion.div>
  );
}

const CITIES = ['Caracas', 'Buenos Aires', 'Berlin'];

export function AboutSection({ stats }: AboutSectionProps) {
  const { lang } = useLang();
  const t = translations[lang].about;

  // Motion components animate from `initial` to `animate` on mount, so content
  // is always revealed without depending on scroll-into-view.
  return (
    <div id="about">

      {/* ── Block 1: compact intro · text left · framed carousel right ── */}
      <div className={styles.introBlock}>
        <motion.div
          className={styles.introText}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className={styles.sectionTitle}>{t.title}</h2>
          <p className={styles.bioParagraph}>{t.bio}</p>
        </motion.div>

        <motion.div
          className={styles.frame}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <PhotoCarousel />
        </motion.div>
      </div>

      {/* ── Years strip (moved directly below the intro) ── */}
      <div className={styles.statsStrip}>
        {stats.map((stat, i) => (
          <AnimatedStat
            key={i}
            years={stat.years}
            label={t.stats[i]}
            inView
            delay={i}
          />
        ))}
      </div>

      {/* ── Block 2: city panel left · text right ── */}
      <div className={`${styles.bioBlock} ${styles.bioBlockReverse}`}>
        <motion.div
          className={styles.cityPanel}
          initial={{ clipPath: 'inset(0 0 0 100%)' }}
          animate={{ clipPath: 'inset(0 0 0 0%)' }}
          transition={{ duration: 1, delay: 0.2, ease: [0.77, 0, 0.18, 1] }}
        >
          <div className={styles.cityGrid} />
          {CITIES.map((city, i) => (
            <motion.span
              key={city}
              className={styles.cityName}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 + i * 0.18 }}
            >
              {city}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          className={`${styles.bioText} ${styles.bioTextDark}`}
          initial={{ opacity: 0, x: 48 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className={styles.journeyEyebrow}>{t.personalLabel}</p>
          <p className={styles.bioParagraph}>{t.personal}</p>
        </motion.div>
      </div>

      {/* ── City maps (same band height as the years strip) ── */}
      <CityMaps />

    </div>
  );
}
