import { Layout, Row, Col, Typography } from 'antd';
import { Avatar } from '@/components/atoms/Avatar';
import { SocialLinks } from '@/components/molecules/SocialLinks';
import type { PersonalInfo, SocialLink } from '@/types';
import styles from './Header.module.css';

const { Text, Link } = Typography;

interface HeaderProps {
  personalInfo: PersonalInfo;
  socialLinks: SocialLink[];
  onCertificationClick: () => void;
}

export function Header({
  personalInfo,
  socialLinks,
  onCertificationClick,
}: HeaderProps) {
  return (
    <Layout.Header className={styles.header}>
      <div className={styles.container}>
        <Row gutter={[16, 16]} align="middle">
          <Col xs={24} sm={4} md={4} className={styles.avatarCol}>
            <Avatar
              src={personalInfo.avatar}
              alt={personalInfo.name}
              size={150}
            />
          </Col>
          <Col xs={24} sm={12} md={12}>
            <div className={styles.headerTitle}>{personalInfo.name}</div>
            <Text strong className={styles.headerText}>
              {personalInfo.title}
            </Text>
            <div className={styles.headerContent}>
              {personalInfo.education.join(' | ')}
              <br />
              <Link
                href={`mailto:${personalInfo.email}`}
                className={styles.emailLink}
              >
                {personalInfo.email}
              </Link>
            </div>
          </Col>
          <Col xs={24} sm={8} md={8} className={styles.socialCol}>
            <SocialLinks
              links={socialLinks}
              onCertificationClick={onCertificationClick}
            />
          </Col>
        </Row>
      </div>
    </Layout.Header>
  );
}
