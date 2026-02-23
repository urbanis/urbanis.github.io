import { Layout } from 'antd';
import { Header } from '@/components/organisms/Header';
import { AboutSection } from '@/components/organisms/AboutSection';
import { PortfolioGrid } from '@/components/organisms/PortfolioGrid';
import { Footer } from '@/components/organisms/Footer';
import { CertificationModal } from '@/components/molecules/CertificationModal';
import { FeedbackModal } from '@/components/molecules/FeedbackModal';
import { useModal, useEmailForm } from '@/hooks';
import { personalInfo } from '@/data/personalInfo';
import { socialLinks, certificationData } from '@/data/socialLinks';
import { projects } from '@/data/projects';
import styles from './MainLayout.module.css';

const { Content } = Layout;

export function MainLayout() {
  const certificationModal = useModal();
  const feedbackModal = useModal();
  const emailForm = useEmailForm();

  return (
    <Layout className={styles.layout}>
      <Header
        personalInfo={personalInfo}
        socialLinks={socialLinks}
        onCertificationClick={certificationModal.open}
      />
      <Content className={styles.content}>
        <AboutSection bio={personalInfo.bio} />
        <PortfolioGrid projects={projects} />
      </Content>
      <Footer
        name={personalInfo.name}
        email={personalInfo.email}
        onContactClick={feedbackModal.open}
      />

      <CertificationModal
        open={certificationModal.isOpen}
        onClose={certificationModal.close}
        imageUrl={certificationData.image}
        credlyUrl={certificationData.credlyUrl}
      />

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
    </Layout>
  );
}

export default MainLayout;
