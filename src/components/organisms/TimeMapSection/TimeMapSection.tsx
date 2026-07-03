import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { useLang } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import { TypewriterHeading } from '@/components/atoms/TypewriterHeading';
import { TimeMapApp } from './TimeMapApp';
import styles from './TimeMapSection.module.css';

export function TimeMapSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { lang } = useLang();
  const t = translations[lang].career;

  return (
    <div ref={ref} className={styles.wrapper}>
      <TypewriterHeading title={t.title} subtitle={t.subtitle} />

      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.6 }}
      >
        <TimeMapApp />
      </motion.div>
    </div>
  );
}
