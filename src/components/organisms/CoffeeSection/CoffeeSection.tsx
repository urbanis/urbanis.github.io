import { useRef, useState, useEffect } from 'react';
import { useInView } from 'motion/react';
import { useLang } from '@/contexts/LanguageContext';
import styles from './CoffeeSection.module.css';

type BubblePos = { side: 'left' | 'right'; y: number };

const UI = {
  en: { eyebrow: 'Powered by', line: 'coffee and data', bubble: 'Coffee?' },
  es: { eyebrow: 'Impulsada por', line: 'café y datos', bubble: '¿Cafecito?' },
  de: { eyebrow: 'Angetrieben von', line: 'Kaffee und Daten', bubble: 'Kaffee?' },
};

export function CoffeeSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.4 });
  const [animKey, setAnimKey] = useState(0);
  const [bubblePos, setBubblePos] = useState<BubblePos>({ side: 'right', y: 50 });
  const { lang } = useLang();
  const t = UI[lang];

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const side = e.clientX < rect.left + rect.width / 2 ? 'left' : 'right';
    const y = Math.max(10, Math.min(90, ((e.clientY - rect.top) / rect.height) * 100));
    setBubblePos({ side, y });
  };

  useEffect(() => {
    if (!isInView) return;
    const raf = requestAnimationFrame(() => setAnimKey((k) => k + 1));
    return () => cancelAnimationFrame(raf);
  }, [isInView]);

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.inner}>

        <p className={styles.eyebrow}>{t.eyebrow}</p>

        <a href="mailto:nisle.morales@gmail.com" className={styles.cupWrap} aria-label="Send me an email" onMouseMove={handleMouseMove}>
          <span
            className={`${styles.bubble} ${bubblePos.side === 'left' ? styles.bubbleLeft : ''}`}
            style={{ top: `${bubblePos.y}%` }}
          >{t.bubble}</span>
          <svg viewBox="0 0 160 170" className={styles.svg} aria-hidden="true">
            <defs>
              <clipPath id="coffeeClip">
                <path d="M30 58 L37 140 Q42 150 80 150 Q118 150 123 140 L130 58 Z" />
              </clipPath>
            </defs>

            {/* Cup interior */}
            <path
              d="M30 58 L37 140 Q42 150 80 150 Q118 150 123 140 L130 58 Z"
              fill="#FDFBF2"
            />

            <g clipPath="url(#coffeeClip)" key={animKey}>
              {/* Coffee */}
              <rect x="26" y="52" width="108" height="102" fill="#000a1a" />
              {/* Cover rises (translateY) — wavy path inside oscillates (translateX) */}
              <g className={styles.coverRise}>
                {/*
                  Wave centred at y=148, amplitude ±5px (subtle).
                  Path extends well past cup edges so the slosh never shows a hard edge.
                */}
                <path
                  className={styles.coverWave}
                  d="M-30 44 L-30 148 C0 153 30 143 60 148 C90 153 120 143 150 148 C165 150 175 148 190 148 L190 44 Z"
                  fill="#FDFBF2"
                />
              </g>
            </g>

            {/* Cup outline */}
            <path
              d="M30 58 L37 140 Q42 150 80 150 Q118 150 123 140 L130 58 Z"
              fill="none"
              stroke="#000814"
              strokeWidth="2"
              strokeLinejoin="round"
            />

            {/* Rim */}
            <rect x="26" y="48" width="108" height="14" rx="5" fill="#000814" />

            {/* Handle outer */}
            <path
              d="M128 76 C155 76 155 116 128 128"
              fill="none"
              stroke="#000814"
              strokeWidth="8"
              strokeLinecap="round"
            />
            {/* Handle inner cutout */}
            <path
              d="M128 76 C147 76 147 116 128 128"
              fill="none"
              stroke="#FDFBF2"
              strokeWidth="3.5"
              strokeLinecap="round"
            />

            {/* Steam */}
            <path key={`s1-${animKey}`} className={`${styles.steam} ${styles.s1}`}
              d="M58 42 C55 34 61 26 58 18"
              fill="none" stroke="#8E9AAF" strokeWidth="2" strokeLinecap="round"
            />
            <path key={`s2-${animKey}`} className={`${styles.steam} ${styles.s2}`}
              d="M80 40 C77 30 83 20 80 10"
              fill="none" stroke="#8E9AAF" strokeWidth="2" strokeLinecap="round"
            />
            <path key={`s3-${animKey}`} className={`${styles.steam} ${styles.s3}`}
              d="M102 42 C99 34 105 26 102 18"
              fill="none" stroke="#8E9AAF" strokeWidth="2" strokeLinecap="round"
            />
          </svg>
        </a>

        <p className={styles.lineBottom}>{t.line}</p>

      </div>
    </section>
  );
}
