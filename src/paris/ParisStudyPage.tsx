import { MotionConfig } from 'motion/react';
import { Navbar } from '@/components/organisms/Navbar';
import { StudyHero } from './components/organisms/StudyHero';
import { CityContext } from './components/organisms/CityContext';
import { ServicesIntro } from './components/organisms/ServicesIntro';
import { RegulationTimeline } from './components/organisms/RegulationTimeline';
import { MeasuresToolkit } from './components/organisms/MeasuresToolkit';
import { DataStory } from './components/organisms/DataStory';
import { ImpactsSection } from './components/organisms/ImpactsSection';
import { Verdict } from './components/organisms/Verdict';
import { StudyFooter } from './components/organisms/StudyFooter';
import styles from './ParisStudyPage.module.css';

export function ParisStudyPage() {
  return (
    <>
      <Navbar />
      <MotionConfig reducedMotion="user">
        <main className={styles.page}>
          <StudyHero />
          <CityContext />
          <ServicesIntro />
          <RegulationTimeline />
          <MeasuresToolkit />
          <DataStory />
          <ImpactsSection />
          <Verdict />
          <StudyFooter />
        </main>
      </MotionConfig>
    </>
  );
}

export default ParisStudyPage;
