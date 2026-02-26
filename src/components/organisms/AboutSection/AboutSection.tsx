import { useRef } from 'react';
import { Typography } from 'antd';
import { motion, useInView } from 'motion/react';
import type { ExperienceStat } from '@/types';
import styles from './AboutSection.module.css';

const { Paragraph, Title } = Typography;

interface AboutSectionProps {
  bio: string;
  stats: ExperienceStat[];
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function AboutSection({ bio, stats }: AboutSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <div ref={containerRef} className={styles.container}>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Paragraph className={styles.bio}>{bio}</Paragraph>
      </motion.div>

      <div className={styles.statsGrid}>
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className={styles.statCard}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.55, delay: 0.2 + i * 0.15 }}
            whileHover={{
              y: -5,
              boxShadow:
                '0 16px 32px rgba(56,189,248,0.15), 0 0 0 1px rgba(56,189,248,0.25)',
              borderColor: 'rgba(56,189,248,0.3)',
            }}
          >
            <span className={styles.statIcon}>{stat.icon}</span>
            <span className={styles.statYears}>{stat.years} yrs</span>
            <span className={styles.statLabel}>{stat.label}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ duration: 0.55, delay: 0.75 }}
      >
        <Title level={2} className={styles.title}>
          Geoportfolio
        </Title>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ duration: 0.55, delay: 0.85 }}
      >
        <Paragraph className={styles.subtitle}>
          Here you can find some public projects and blog&apos;s articles that I
          have been working on.
        </Paragraph>
      </motion.div>
    </div>
  );
}
