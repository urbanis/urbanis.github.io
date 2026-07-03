import { useState } from 'react';
import type { Project } from '@/types';
import { useLang } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import styles from './PortfolioStack.module.css';

interface PortfolioStackProps {
  projects: Project[];
}

type FilterKey = 'all' | 'mobility' | 'behavior' | 'urban' | 'product' | 'research' | 'pipeline';

const PROJECT_TAGS: Record<string, FilterKey[]> = {
  'gtfs-explorer':  ['mobility', 'product'],
  'paris-policy':   ['mobility', 'research'],
  'paris-scooters': ['mobility', 'pipeline'],
  'coordinate-club':['behavior', 'product', 'research'],
  'my-journey':     ['behavior', 'research'],
  'street-generator':['urban', 'product'],
  'nordelta':       ['urban', 'research'],
};

const ORDER = ['gtfs-explorer', 'paris-policy', 'coordinate-club', 'my-journey', 'street-generator', 'nordelta'];

function ProjectCard({ project, t }: { project: Project; t: { descriptions: Record<string, string>; inProgress: string; view: string } }) {
  const primaryLink = project.links[0]?.url;
  return (
    <article
      className={styles.card}
      onClick={() => primaryLink && window.open(primaryLink, '_blank', 'noopener,noreferrer')}
      style={{ cursor: primaryLink ? 'pointer' : 'default' }}
    >
      <div className={styles.imageArea}>
        {project.image
          ? <img src={project.image} alt={project.imageAlt} className={styles.image} />
          : <div className={styles.imageFallback} />
        }
      </div>
      <div className={styles.content}>
        <div className={styles.textBlock}>
          <h3 className={styles.title}>
            {project.title}
            {project.inProgress && <span className={styles.inProgress}>{t.inProgress}</span>}
          </h3>
          <p className={styles.description}>{t.descriptions[project.id] ?? project.description}</p>
        </div>
        <div className={styles.footer}>
          <div className={styles.tagList}>
            {project.tags.slice(0, 3).map((tag, i) => (
              <div key={tag}>
                {i > 0 && <div className={styles.tagDivider} />}
                <span className={styles.tag}>{tag}</span>
              </div>
            ))}
          </div>
          {primaryLink ? (
            <a href={primaryLink} target="_blank" rel="noopener noreferrer" className={styles.arrow} aria-label={`Open ${project.title}`}><span>{t.view}</span></a>
          ) : (
            <span className={styles.arrowDisabled}><span style={{ display: 'inline-block', transform: 'skewX(12deg)' }}>{t.view}</span></span>
          )}
        </div>
      </div>
    </article>
  );
}

export function PortfolioStack({ projects }: PortfolioStackProps) {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all');
  const { lang } = useLang();
  const t = translations[lang].portfolio;

  const areaFilters: { key: FilterKey; label: string }[] = [
    { key: 'all',      label: 'All' },
    { key: 'mobility', label: t.groups.mobility },
    { key: 'behavior', label: t.groups.behavior },
    { key: 'urban',    label: t.groups.urban },
  ];

  const typeFilters: { key: FilterKey; label: string }[] = [
    { key: 'product',  label: 'Product' },
    { key: 'research', label: 'Research' },
    { key: 'pipeline', label: 'Pipeline' },
  ];

  const orderedProjects = ORDER
    .map(id => projects.find(p => p.id === id))
    .filter(Boolean) as Project[];

  const visibleProjects = activeFilter === 'all'
    ? orderedProjects
    : orderedProjects.filter(p => PROJECT_TAGS[p.id]?.includes(activeFilter));

  return (
    <div className={styles.wrapper}>
      <div className={styles.filterBar}>
        {areaFilters.map(({ key, label }) => (
          <button
            key={key}
            className={`${styles.filterBtn} ${activeFilter === key ? styles.filterBtnActive : ''}`}
            onClick={() => setActiveFilter(key)}
          >
            <span>{label}</span>
          </button>
        ))}
        <div className={styles.filterDivider} />
        {typeFilters.map(({ key, label }) => (
          <button
            key={key}
            className={`${styles.filterBtn} ${activeFilter === key ? styles.filterBtnActive : ''}`}
            onClick={() => setActiveFilter(key)}
          >
            <span>{label}</span>
          </button>
        ))}
      </div>

      <div className={styles.groups}>
        {visibleProjects.length > 0 ? (
          <div className={styles.grid}>
            {visibleProjects.map(project => (
              <ProjectCard key={project.id} project={project} t={t} />
            ))}
          </div>
        ) : (
          <p className={styles.empty}>No projects match the selected filter.</p>
        )}
      </div>
    </div>
  );
}
