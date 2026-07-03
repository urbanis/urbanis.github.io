import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { TimeMapApp } from '@/components/organisms/TimeMapSection/TimeMapApp';
import { Navbar } from '@/components/organisms/Navbar';
import { useLang } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import { TypewriterHeading } from '@/components/atoms/TypewriterHeading';
import styles from './TimelinePage.module.css';

export default function TimelinePage() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { lang } = useLang();
  const t = translations[lang].career;

  return (
    <>
      <Navbar />
      <div className={styles.page}>
        <div className={styles.header}>
          <TypewriterHeading title={t.title} subtitle={t.subtitle} />
        </div>

        <motion.div
          ref={ref}
          className={styles.mapContainer}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6 }}
        >
          <TimeMapApp height="100%" />
        </motion.div>
      </div>
    </>
  );
}
