import styles from './StudyFooter.module.css';

export function StudyFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.title}>
          Restrictions around New Micromobility: lessons from Mobility Data from Paris
        </p>
        <p className={styles.meta}>
          Master in Urban &amp; Regional Planning · Urbanization &amp; Mobility ·
          TU Berlin · 2023
        </p>
        <p className={styles.meta}>
          Author: Nisleida Morales · Supervisor: Prof. Dr. Dirk Heinrichs
        </p>
        <p className={styles.sources}>
          Data: Lime GBFS feed via the French Ministry of Transport open-data
          portal. Figures: author&rsquo;s own illustrations. Context sources: Apur,
          NACTO, ITDP, Mobility Data.
        </p>
      </div>
    </footer>
  );
}
