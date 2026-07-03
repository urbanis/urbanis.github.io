import { Navbar } from '@/components/organisms/Navbar';
import { HeroSection } from '@/components/organisms/HeroSection';
import { AboutSection } from '@/components/organisms/AboutSection';
import { Footer } from '@/components/organisms/Footer';
import { SkillsSection } from '@/components/organisms/SkillsSection';
import { FeedbackModal } from '@/components/molecules/FeedbackModal';
import { useModal, useEmailForm } from '@/hooks';
import { personalInfo } from '@/data/personalInfo';
import styles from './MainLayout.module.css';

export function MainLayout() {
  const feedbackModal = useModal();
  const emailForm = useEmailForm();

  return (
    <>
      <Navbar />
      <div className={styles.pageWrapper}>
        <section id="hero" className={styles.section}>
          <HeroSection />
        </section>

        <section id="about" className={`${styles.section} ${styles.sectionAuto}`}>
          <AboutSection stats={personalInfo.stats} />
        </section>

        {/* <section id="skills" className={styles.section}>
          <SankeySection />
        </section> */}

        <section id="skills" className={styles.section}>
          <SkillsSection />
        </section>

        <Footer />
      </div>

      <FeedbackModal
        open={feedbackModal.isOpen}
        onClose={feedbackModal.close}
        message={emailForm.message}
        onMessageChange={emailForm.setMessage}
        onSend={emailForm.sendEmailAsync}
        isLoading={emailForm.isLoading}
        error={emailForm.error}
        success={emailForm.success}
        onResetStatus={emailForm.resetStatus}
      />
    </>
  );
}

export default MainLayout;
