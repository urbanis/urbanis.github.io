import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ddLat, ddLng, type City, type CityEntry } from './cityData';
import styles from './AboutSection.module.css';

const KIND_ORDER: CityEntry['kind'][] = ['Education', 'Experience'];

interface CityModalProps {
  city: City | null;
  onClose: () => void;
}

export function CityModal({ city, onClose }: CityModalProps) {
  useEffect(() => {
    if (!city) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [city, onClose]);

  return (
    <AnimatePresence>
      {city && (
        <motion.div
          className={styles.modalBackdrop}
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className={styles.modalCard}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label={`${city.name} details`}
          >
            <button type="button" className={styles.modalClose} onClick={onClose} aria-label="Close">
              ×
            </button>

            <h3 className={styles.modalCity}>{city.name}</h3>
            <p className={styles.modalCoord}>
              {ddLat(city.lat)} · {ddLng(city.lng)}
            </p>

            <div className={styles.modalList}>
              {KIND_ORDER.map((kind) => {
                const items = city.entries.filter((e) => e.kind === kind);
                if (items.length === 0) return null;
                return (
                  <div key={kind} className={styles.modalGroup}>
                    <p className={styles.modalKind}>{kind}</p>
                    {items.map((entry, i) => (
                      <div key={i} className={styles.modalEntry}>
                        <p className={styles.modalTitle}>{entry.title}</p>
                        <p className={styles.modalOrg}>{entry.org}</p>
                        {entry.period && <p className={styles.modalPeriod}>{entry.period}</p>}
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
