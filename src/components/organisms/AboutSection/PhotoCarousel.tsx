import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import styles from './AboutSection.module.css';

const PHOTOS: { src: string; alt: string; fit?: 'cover' | 'contain' }[] = [
  { src: '/assets/images/bsas-bike.jpg', alt: 'Cycling under the jacarandas in Buenos Aires' },
  // { src: '/assets/images/doodle-laptop.png', alt: 'Illustration of Nisleida Morales with a laptop', fit: 'contain' },
  { src: '/assets/images/expo.jpg', alt: 'Presenting at a mobility expo' },
  { src: '/assets/images/berlin-bike.png', alt: 'Cycling by the Victory Column in Berlin' },
];

const INTERVAL = 4000;

export function PhotoCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((next: number) => {
    setIndex((next + PHOTOS.length) % PHOTOS.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((p) => (p + 1) % PHOTOS.length), INTERVAL);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div
      className={styles.carousel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={styles.carouselViewport}>
        <AnimatePresence initial={false}>
          <motion.img
            key={PHOTOS[index].src}
            src={PHOTOS[index].src}
            alt={PHOTOS[index].alt}
            className={styles.carouselImage}
            style={{ objectFit: PHOTOS[index].fit ?? 'cover' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
          />
        </AnimatePresence>
      </div>

      <button
        type="button"
        className={`${styles.carouselArrow} ${styles.carouselPrev}`}
        onClick={() => go(index - 1)}
        aria-label="Previous photo"
      >
        ‹
      </button>
      <button
        type="button"
        className={`${styles.carouselArrow} ${styles.carouselNext}`}
        onClick={() => go(index + 1)}
        aria-label="Next photo"
      >
        ›
      </button>

      <div className={styles.carouselDots}>
        {PHOTOS.map((p, i) => (
          <button
            key={p.src}
            type="button"
            className={`${styles.carouselDot} ${i === index ? styles.carouselDotActive : ''}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to photo ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
