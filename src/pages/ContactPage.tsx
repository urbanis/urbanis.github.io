import { Navbar } from '@/components/organisms/Navbar';
import { ContactSection } from '@/components/organisms/ContactSection';
import { Footer } from '@/components/organisms/Footer';
import { useLang } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import styles from './BlogPage.module.css';

export default function ContactPage() {
  const { lang } = useLang();
  const t = translations[lang].contact;

  return (
    <>
      <Navbar />
      <div className={styles.page}>
        <header className={styles.pageHeader}>
          <div className={styles.pageHeaderInner}>
            <h1 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>{t.heading}</h1>
          </div>
        </header>
        <ContactSection />
      </div>
      <Footer minimal showCoffee />
    </>
  );
}
