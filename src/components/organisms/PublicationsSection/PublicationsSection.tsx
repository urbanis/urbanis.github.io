import { useLang } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import styles from './PublicationsSection.module.css';

const PUBLICATIONS = [
  {
    title: 'Gender Criteria in Planning Bike Sharing Stations: Lessons from a Spatiotemporal Analysis of Women\'s Nighttime Cycling in Buenos Aires',
    year: 2024,
    authors: 'Morales, N.',
    venue: 'Dual M.Sc. Thesis · TU Berlin & Universidad de Buenos Aires',
    thumbnail: '/assets/documents/master-thesis.jpg',
    url: '/assets/documents/thesis-master.pdf',
    descriptionKey: 'masterThesis' as const,
  },
  {
    title: 'Impacto en la movilidad urbana en la centralidad de Lanús ante una reapertura en el marco de la COVID-19',
    year: 2020,
    authors: 'Morales, N. & Silvera, S.',
    venue: 'Mobilitas IV, Vol. 5, pp. 107–120 · CETAM',
    thumbnail: '/assets/documents/mobilitas.jpg',
    url: '/assets/documents/Mobilitas-IV-2020.pdf',
    descriptionKey: 'cetam' as const,
  },
  {
    title: 'Micro Atributos que Favorecen los Viajes a Pie en Adultos Mayores. Caso de Estudio: Casco de Chacao',
    year: 2018,
    authors: 'Morales, N.',
    venue: 'B.Sc. Thesis · Universidad Simón Bolívar, Venezuela',
    thumbnail: '/assets/documents/bachelor-thesis.jpg',
    url: '/assets/documents/thesis-bachelor.pdf',
    descriptionKey: 'bachelorThesis' as const,
  },
];

export function PublicationsSection() {
  const { lang } = useLang();
  const t = translations[lang].publications;

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{t.title}</h2>
      <p className={styles.subtitle}>{t.subtitle}</p>

      <div className={styles.grid}>
        {PUBLICATIONS.map((pub) => (
          <a
            key={pub.url}
            href={pub.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <div className={styles.thumbnailWrap}>
              <img
                src={pub.thumbnail}
                alt={pub.title}
                className={styles.thumbnail}
              />
              <span className={styles.yearBadge}>{pub.year}</span>
            </div>

            <div className={styles.body}>
              <p className={styles.venue}>{pub.venue}</p>
              <h3 className={styles.cardTitle}>{pub.title}</h3>
              <p className={styles.authors}>{pub.authors}</p>
              <p className={styles.description}>{t.descriptions[pub.descriptionKey]}</p>
              <span className={styles.readLink}><span>{t.read}</span></span>
            </div>
          </a>
        ))}
      </div>

    </section>
  );
}
