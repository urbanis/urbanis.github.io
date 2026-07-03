import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { blogPosts, type BlogLang } from '@data/blogPosts';
import { useLang } from '@/contexts/LanguageContext';
import { Navbar } from '@/components/organisms/Navbar';
import styles from './BlogPostPage.module.css';

const READING_LABEL: Record<BlogLang, string> = {
  en: 'min read',
  es: 'min de lectura',
  de: 'Min. Lesezeit',
};

function renderInline(text: string): React.ReactNode {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith('**') && part.endsWith('**')
      ? <strong key={i}>{part.slice(2, -2)}</strong>
      : part
  );
}

function renderMarkdown(raw: string): React.ReactNode[] {
  const lines = raw.split('\n');
  const nodes: React.ReactNode[] = [];
  let listItems: React.ReactNode[] = [];
  let listType: 'ul' | 'ol' | null = null;
  let galleryImgs: { src: string; alt: string }[] = [];
  let key = 0;

  const flushList = () => {
    if (!listItems.length) return;
    nodes.push(
      listType === 'ul'
        ? <ul key={key++} className={styles.list}>{listItems.map((li, i) => <li key={i}>{li}</li>)}</ul>
        : <ol key={key++} className={styles.list}>{listItems.map((li, i) => <li key={i}>{li}</li>)}</ol>
    );
    listItems = [];
    listType = null;
  };

  const flushGallery = () => {
    if (!galleryImgs.length) return;
    if (galleryImgs.length === 1) {
      nodes.push(<img key={key++} src={galleryImgs[0].src} alt={galleryImgs[0].alt} className={styles.blogImg} />);
    } else {
      nodes.push(
        <div key={key++} className={styles.gallery}>
          {galleryImgs.map((img, i) => (
            <img key={i} src={img.src} alt={img.alt} className={styles.galleryImg} />
          ))}
        </div>
      );
    }
    galleryImgs = [];
  };

  for (const line of lines) {
    const t = line.trim();

    const imgMatch = t.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    if (imgMatch) {
      flushList();
      galleryImgs.push({ src: imgMatch[2], alt: imgMatch[1] });
    } else if (t === '') {
      flushGallery();
      flushList();
    } else if (t.startsWith('## ')) {
      flushGallery();
      flushList();
      nodes.push(<h2 key={key++} className={styles.h2}>{renderInline(t.slice(3))}</h2>);
    } else if (t.startsWith('### ')) {
      flushGallery();
      flushList();
      nodes.push(<h3 key={key++} className={styles.h3}>{renderInline(t.slice(4))}</h3>);
    } else if (t.startsWith('- ') || t.startsWith('* ')) {
      flushGallery();
      if (listType !== 'ul') { flushList(); listType = 'ul'; }
      listItems.push(renderInline(t.slice(2)));
    } else if (/^\d+\.\s/.test(t)) {
      flushGallery();
      if (listType !== 'ol') { flushList(); listType = 'ol'; }
      listItems.push(renderInline(t.replace(/^\d+\.\s*/, '')));
    } else {
      flushGallery();
      flushList();
      nodes.push(<p key={key++} className={styles.p}>{renderInline(t)}</p>);
    }
  }
  flushGallery();
  flushList();
  return nodes;
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const { lang } = useLang();
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);

  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    if (!slug) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true);
    fetch(`/assets/blog/${slug}-${lang}.md`)
      .then((r) => r.ok ? r.text() : Promise.reject())
      .catch(() => fetch(`/assets/blog/${slug}.md`).then((r) => r.text()))
      .then((text) => { setContent(text); setLoading(false); })
      .catch(() => { setContent(''); setLoading(false); });
  }, [slug, lang]);

  if (!post) {
    return (
      <div className={styles.notFound}>
        <p>Article not found.</p>
        <Link to="/journal">← Back to journal</Link>
      </div>
    );
  }

  const bl = lang as BlogLang;
  const t = post.translations[bl];
  const wordCount = content.split(/\s+/).filter(Boolean).length;
  const readingTime = Math.max(1, Math.round(wordCount / 200));
  const dateStr = new Date(post.date).toLocaleDateString(
    bl === 'de' ? 'de-DE' : bl === 'es' ? 'es-ES' : 'en-US',
    { year: 'numeric', month: 'long', day: 'numeric' }
  );

  return (
    <div className={styles.page}>
      <Navbar />

      {/* Hero */}
      {post.image ? (
        <div className={styles.hero}>
          <img src={post.image} alt={t.title} className={styles.heroImg} />
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <div className={styles.heroTags}>
              {post.tags.map((tag) => (
                <span key={tag} className={styles.heroTag}>{tag.replace('#', '')}</span>
              ))}
            </div>
            <h1 className={styles.heroTitle}>{t.title}</h1>
          </div>
        </div>
      ) : (
        <div className={styles.heroDark}>
          <div className={styles.heroContent}>
            <div className={styles.heroTags}>
              {post.tags.map((tag) => (
                <span key={tag} className={styles.heroTagDark}>{tag.replace('#', '')}</span>
              ))}
            </div>
            <h1 className={styles.heroTitle}>{t.title}</h1>
          </div>
        </div>
      )}

      {/* Article */}
      <article className={styles.article}>
        <div className={styles.meta}>
          <Link to="/journal" className={styles.backLink}>← Journal</Link>
          <span className={styles.metaDivider}>|</span>
          <span className={styles.metaDate}>{dateStr}</span>
          <span className={styles.metaDot}>·</span>
          <span className={styles.metaReading}>{readingTime} {READING_LABEL[bl]}</span>
        </div>

        {post.projectUrl && (
          <a
            href={post.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkedinBtn}
          >
            <span>View project →</span>
          </a>
        )}
        {post.linkedinUrl && (
          <a
            href={post.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkedinBtn}
          >
            <span>View on LinkedIn</span>
          </a>
        )}

        <p className={styles.excerpt}>{t.excerpt}</p>

        {loading ? (
          <p className={styles.noContent}>Loading…</p>
        ) : content ? (
          <div className={styles.body}>{renderMarkdown(content)}</div>
        ) : (
          <p className={styles.noContent}>Full article coming soon.</p>
        )}
      </article>
    </div>
  );
}
