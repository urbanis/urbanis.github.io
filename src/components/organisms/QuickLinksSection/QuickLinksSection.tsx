import { Link } from 'react-router-dom';
import { useLang } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import styles from './QuickLinksSection.module.css';

export function QuickLinksSection() {
  const { lang } = useLang();
  const t = translations[lang];

  const cvHref =
    lang === 'en' ? '/assets/documents/Nisleida_Morales_english.pdf'
    : lang === 'es' ? '/assets/documents/Nisleida_Morales_espanol.pdf'
    : '/assets/documents/Nisleida_Morales_deutsch.pdf';

  return (
    <section className={styles.section}>
      <div className={styles.grid}>

        <Link to="/portfolio" className={styles.card}>
          <div className={styles.icon}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
            </svg>
          </div>
          <h3 className={styles.cardTitle}>{t.portfolio.title}</h3>
          <p className={styles.cardSub}>Projects · Publications · Certification</p>
          <span className={styles.arrow}>→</span>
        </Link>

        <a href={cvHref} target="_blank" rel="noopener noreferrer" className={styles.card}>
          <div className={styles.icon}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
            </svg>
          </div>
          <h3 className={styles.cardTitle}>{t.credentials.cv}</h3>
          <p className={styles.cardSub}>{t.credentials.viewCv}</p>
          <span className={styles.arrow}>↗</span>
        </a>

        <Link to="/blog" className={styles.card}>
          <div className={styles.icon}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
            </svg>
          </div>
          <h3 className={styles.cardTitle}>{t.nav.blog}</h3>
          <p className={styles.cardSub}>Thoughts on urban data & mobility</p>
          <span className={styles.arrow}>→</span>
        </Link>

      </div>
    </section>
  );
}
