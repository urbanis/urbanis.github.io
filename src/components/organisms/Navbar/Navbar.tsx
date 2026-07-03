import { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLang, type Lang } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import styles from './Navbar.module.css';

export function Navbar() {
  const [activeId, setActiveId] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang } = useLang();
  const t = translations[lang].nav;
  const location = useLocation();
  const isHome = location.pathname === '/';
  const href = (id: string) => isHome ? `#${id}` : `/#${id}`;

  const SECTIONS = useMemo(() => [
    { id: 'about', label: t.about },
  ], [t.about]);

  useEffect(() => {
    const allIds = ['hero', ...SECTIONS.map((s) => s.id)];
    const observers: IntersectionObserver[] = [];

    allIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { threshold: 0.5 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [lang, SECTIONS]);

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <a href={href('hero')} className={styles.logo}>
          <span className={styles.logoName}>Nisleida Morales</span>
          <span className={styles.logoSub}>Portfolio</span>
        </a>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {SECTIONS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={href(id)}
                className={`${styles.link} ${activeId === id ? styles.active : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <Link to="/portfolio" className={styles.link} onClick={() => setMenuOpen(false)}>
              {t.portfolio}
            </Link>
          </li>
          <li>
            <Link to="/journal" className={styles.link} onClick={() => setMenuOpen(false)}>
              {t.blog}
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={styles.cvBtnMenu}
              onClick={() => setMenuOpen(false)}
            >
              <span>{translations[lang].contact.heading}</span>
            </Link>
          </li>
        </ul>

        {/* Contact + Language group */}
        <div className={styles.rightGroup}>
          <Link to="/contact" className={styles.cvBtn}>
            <span>{translations[lang].contact.heading}</span>
          </Link>
          <select
            className={styles.langSelect}
            value={lang}
            onChange={(e) => setLang(e.target.value as Lang)}
            aria-label="Select language"
          >
            <option value="en">EN</option>
            <option value="es">ES</option>
            <option value="de">DE</option>
          </select>
        </div>

        <button
          className={styles.burger}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
