import { useState } from 'react';
import { FileTextOutlined, SafetyCertificateOutlined, CheckCircleOutlined, MailOutlined, CheckOutlined } from '@ant-design/icons';
import { useLang } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import styles from './CVSection.module.css';

interface CVSectionProps {
  onCertificationClick: () => void;
}

export function CVSection({ onCertificationClick }: CVSectionProps) {
  const [copied, setCopied] = useState(false);
  const { lang } = useLang();
  const t = translations[lang].credentials;

  const copyEmail = () => {
    navigator.clipboard.writeText('nisle.morales@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{t.title}</h2>

      <div className={styles.inner}>

        <div className={styles.block}>
          <p className={styles.label}>{t.cv}</p>
          <a
            href={
              lang === 'en' ? '/assets/documents/Nisleida_Morales_english.pdf'
              : lang === 'es' ? '/assets/documents/Nisleida_Morales_espanol.pdf'
              : '/assets/documents/Nisleida_Morales_deutsch.pdf'
            }
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnSecondary}
          >
            <FileTextOutlined /> {t.viewCv}
          </a>
        </div>

        <div className={styles.divider} />

        <div className={styles.block}>
          <p className={styles.label}>{t.certification}</p>
          <button className={styles.btnSecondary} onClick={onCertificationClick}>
            <SafetyCertificateOutlined /> ArcGIS Pro Associate
          </button>
        </div>

        <div className={styles.divider} />

        <div className={styles.block}>
          <p className={styles.label}>{t.email}</p>
          <button className={styles.btnSecondary} onClick={copyEmail} title="Copy email">
            {copied ? <CheckOutlined /> : <MailOutlined />}
            {copied ? 'Copied!' : 'nisle.morales@gmail.com'}
          </button>
        </div>

        <div className={styles.divider} />

        <div className={styles.block}>
          <p className={styles.label}>{t.workAuth}</p>
          <span className={styles.badge}>
            <CheckCircleOutlined /> {t.blueCard}
          </span>
        </div>

      </div>
    </section>
  );
}
