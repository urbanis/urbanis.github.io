import { Link } from 'react-router-dom';
import { useLang } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import styles from './Footer.module.css';

interface FooterProps {
  minimal?: boolean;
  /** Show the coffee mug block. Only used on the contact page. */
  showCoffee?: boolean;
}

const UI = {
  en: { eyebrow: 'a planner who codes,', line: 'powered by coffee' },
  es: { eyebrow: 'una urbanista que programa,', line: 'con café' },
  de: { eyebrow: 'eine Planerin, die codet,', line: 'mit Kaffee' },
};

function CoffeeMug({ lang }: { lang: string }) {
  const ui = UI[lang as keyof typeof UI] ?? UI.en;
  return (
    <div className={styles.mugWrap}>
      <p className={styles.mugEyebrow}>{ui.eyebrow}</p>
      <svg viewBox="0 0 160 170" className={styles.mug} aria-hidden="true">
        <defs>
          <clipPath id="footerCoffeeClip">
            <path d="M30 58 L37 140 Q42 150 80 150 Q118 150 123 140 L130 58 Z" />
          </clipPath>
        </defs>
        <path d="M30 58 L37 140 Q42 150 80 150 Q118 150 123 140 L130 58 Z" fill="rgba(195,220,235,0.06)" />
        <g clipPath="url(#footerCoffeeClip)">
          <rect x="26" y="52" width="108" height="102" fill="#468cb4" opacity="0.4" />
          <g className={styles.coverRise}>
            <path
              className={styles.coverWave}
              d="M-30 44 L-30 148 C0 153 30 143 60 148 C90 153 120 143 150 148 C165 150 175 148 190 148 L190 44 Z"
              fill="#000a1a"
            />
          </g>
        </g>
        <path d="M30 58 L37 140 Q42 150 80 150 Q118 150 123 140 L130 58 Z" fill="none" stroke="#c3dceb" strokeWidth="2" strokeLinejoin="round" />
        <rect x="26" y="48" width="108" height="14" rx="5" fill="#c3dceb" />
        <path d="M128 76 C155 76 155 116 128 128" fill="none" stroke="#c3dceb" strokeWidth="8" strokeLinecap="round" />
        <path d="M128 76 C147 76 147 116 128 128" fill="none" stroke="#000a1a" strokeWidth="3.5" strokeLinecap="round" />
        <path className={`${styles.steam} ${styles.s1}`} d="M58 42 C55 34 61 26 58 18" fill="none" stroke="#8E9AAF" strokeWidth="2" strokeLinecap="round" />
        <path className={`${styles.steam} ${styles.s2}`} d="M80 40 C77 30 83 20 80 10" fill="none" stroke="#8E9AAF" strokeWidth="2" strokeLinecap="round" />
        <path className={`${styles.steam} ${styles.s3}`} d="M102 42 C99 34 105 26 102 18" fill="none" stroke="#8E9AAF" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <p className={styles.mugLine}>{ui.line}</p>
    </div>
  );
}

export function Footer({ minimal = false, showCoffee = false }: FooterProps) {
  const { lang } = useLang();
  const t = translations[lang].footer;
  const nav = translations[lang].nav;

  if (minimal) {
    return (
      <footer className={styles.footer}>
        <div className={styles.inner}>
          <div className={styles.left}>
            {showCoffee && <CoffeeMug lang={lang} />}
            <Link to="/" className={styles.cta}>← Portfolio</Link>
          </div>
          <div className={styles.columns}>
            <div className={styles.col}>
              <span className={styles.colHeading}>{t.navigate}</span>
              <a href="/#about" className={styles.colLink}>{nav.about}</a>
              <Link to="/portfolio" className={styles.colLink}>{nav.portfolio}</Link>
              <Link to="/journal" className={styles.colLink}>{nav.blog}</Link>
              <Link to="/contact" className={styles.colLink}>{translations[lang].contact.title}</Link>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <span>{t.copyright} © {new Date().getFullYear()}</span>
        </div>
      </footer>
    );
  }

  // Minimalist footer: brand + inline nav + copyright.
  return (
    <footer className={styles.footer}>
      <div className={styles.minimalRow}>
        <span className={styles.brand}>Nisleida Morales</span>
        <nav className={styles.minimalNav}>
          <a href="/#about" className={styles.minimalLink}>{nav.about}</a>
          <Link to="/portfolio" className={styles.minimalLink}>{nav.portfolio}</Link>
          <Link to="/journal" className={styles.minimalLink}>{nav.blog}</Link>
          <Link to="/contact" className={styles.minimalLink}>{translations[lang].contact.title}</Link>
        </nav>
      </div>

      <div className={styles.bottom}>
        <span>{t.copyright} © {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
