import { Typography } from 'antd';
import styles from './AboutSection.module.css';

const { Paragraph, Title } = Typography;

interface AboutSectionProps {
  bio: string;
}

export function AboutSection({ bio }: AboutSectionProps) {
  return (
    <div className={styles.container}>
      <Paragraph className={styles.bio}>{bio}</Paragraph>
      <Title level={2} className={styles.title}>
        Geoportfolio
      </Title>
      <Paragraph className={styles.subtitle}>
        Here you can find some public projects and blog's articles that I have
        been working on.
      </Paragraph>
    </div>
  );
}
