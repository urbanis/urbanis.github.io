import { Navbar } from '@/components/organisms/Navbar';
import { PortfolioStack } from '@/components/organisms/PortfolioStack';
import { PublicationsSection } from '@/components/organisms/PublicationsSection/PublicationsSection';
import { Footer } from '@/components/organisms/Footer';
import { projects } from '@/data/projects';
import { certificationData, cesiumCertificationData } from '@/data/socialLinks';
import blogStyles from './BlogPage.module.css';
import styles from './PortfolioPage.module.css';

export default function PortfolioPage() {

  return (
    <>
      <Navbar />
      <header className={blogStyles.pageHeader}>
        <div className={blogStyles.pageHeaderInner}>
          <h1 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', margin: '0 0 8px' }}>Portfolio</h1>
          <p style={{ fontSize: '0.95rem', color: '#94a3b8', margin: 0 }}>
            <a href="#projects" style={{ color: 'inherit', textDecoration: 'none' }} onMouseOver={e => (e.currentTarget.style.color = '#0096C7')} onMouseOut={e => (e.currentTarget.style.color = 'inherit')}>Projects</a>
            {' · '}
            <a href="#publications" style={{ color: 'inherit', textDecoration: 'none' }} onMouseOver={e => (e.currentTarget.style.color = '#0096C7')} onMouseOut={e => (e.currentTarget.style.color = 'inherit')}>Publications</a>
            {' · '}
            <a href="#certification" style={{ color: 'inherit', textDecoration: 'none' }} onMouseOver={e => (e.currentTarget.style.color = '#0096C7')} onMouseOut={e => (e.currentTarget.style.color = 'inherit')}>Certification</a>
          </p>
        </div>
      </header>
      <div id="projects"><PortfolioStack projects={projects.filter((p) => !p.hidden)} /></div>
      <div id="publications"><PublicationsSection /></div>
      <section id="certification" className={styles.certSection}>
        <h2 className={styles.certTitle}>Certifications</h2>
        <div className={styles.certGrid}>
          <a
            href={certificationData.credlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.certCard}
          >
            <img
              src={certificationData.image}
              alt="ArcGIS Pro Associate Certification"
              className={styles.certImage}
            />
            <div className={styles.certInfo}>
              <p className={styles.certName}>ArcGIS Pro Associate</p>
              <p className={styles.certSub}>Esri · Verify on Credly ↗</p>
            </div>
          </a>
          <a
            href={cesiumCertificationData.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.certCard}
          >
            <img
              src={cesiumCertificationData.image}
              alt="Cesium Certified Developer"
              className={styles.certImage}
            />
            <div className={styles.certInfo}>
              <p className={styles.certName}>Cesium Certified Developer</p>
              <p className={styles.certSub}>Cesium · Verify ↗</p>
            </div>
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}
