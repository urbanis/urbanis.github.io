import { Link } from 'react-router-dom';
import { blogPosts, type BlogLang } from '@data/blogPosts';
import { useLang } from '@/contexts/LanguageContext';
import { Navbar } from '@/components/organisms/Navbar';
import { Footer } from '@/components/organisms/Footer';
import { TypewriterHeading } from '@/components/atoms/TypewriterHeading';
import styles from './BlogPage.module.css';

const UI = {
  en: { title: 'Journal', subtitle: 'Thoughts on urban planning, geospatial data and mobility.', readMore: 'Read more' },
  es: { title: 'Journal', subtitle: 'Reflexiones sobre planificación urbana, datos geoespaciales y movilidad.', readMore: 'Leer más' },
  de: { title: 'Journal', subtitle: 'Gedanken zu Stadtplanung, Geodaten und Mobilität.', readMore: 'Mehr lesen' },
};

export default function BlogPage() {
  const { lang } = useLang();
  const ui = UI[lang as BlogLang];
  const sorted = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <Navbar />

      <header className={styles.pageHeader}>
        <div className={styles.pageHeaderInner}>
          <TypewriterHeading title={ui.title} subtitle={ui.subtitle} />
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.grid}>
          {sorted.map((post) => {
            const t = post.translations[lang as BlogLang];
            const dateStr = new Date(post.date).toLocaleDateString(
              lang === 'de' ? 'de-DE' : lang === 'es' ? 'es-ES' : 'en-US',
              { year: 'numeric', month: 'long', day: 'numeric' }
            );

            return (
              <div key={post.slug} className={styles.cardWrapper}>
                <article className={styles.card} onClick={() => window.location.href = `/journal/${post.slug}`} style={{ cursor: 'pointer' }}>
                  {post.image ? (
                    <div className={styles.cardImage}>
                      <img src={post.image} alt={t.title} className={styles.cardImg} />
                    </div>
                  ) : (
                    <div className={styles.cardAccentBar} />
                  )}

                  <div className={styles.cardBody}>
                    <div className={styles.tags}>
                      {post.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className={styles.tag}>{tag.replace('#', '')}</span>
                      ))}
                    </div>

                    <h2 className={styles.cardTitle}>{t.title}</h2>
                    <p className={styles.cardExcerpt}>{t.excerpt}</p>

                    <div className={styles.cardFooter}>
                      <span className={styles.cardDate}>{dateStr}</span>
                      <Link to={`/journal/${post.slug}`} className={styles.readMore}>
                        <span>{ui.readMore} →</span>
                      </Link>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </main>
    <Footer />
    </>
  );
}
