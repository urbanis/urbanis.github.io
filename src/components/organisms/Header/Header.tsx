import { Fragment } from 'react';
import { Layout, Row, Col, Typography } from 'antd';
import { Avatar } from '@/components/atoms/Avatar';
import { SocialLinks } from '@/components/molecules/SocialLinks';
import type { PersonalInfo, SocialLink } from '@/types';
import styles from './Header.module.css';

const { Link } = Typography;

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
            <div className={styles.avatarWrapper}>
              <Avatar
                src={personalInfo.avatar}
                alt={personalInfo.name}
                size={150}
              />
            </div>
          </Col>
          <Col xs={24} sm={12} md={12}>
            <div className={styles.headerTitle}>{personalInfo.name}</div>
            <div className={styles.roleWrapper}>
              <span className={styles.pulseDot} />
              <span className={styles.roleText}>{personalInfo.title}</span>
            </div>
            <div className={styles.headerContent}>
              <div className={styles.educationLine}>
                {personalInfo.education.map((edu, i) => (
                  <Fragment key={edu}>
                    <span className={styles.educationItem}>{edu}</span>
                    {i < personalInfo.education.length - 1 && (
                      <span className={styles.educationSep}>·</span>
                    )}
                  </Fragment>
                ))}
              </div>
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
