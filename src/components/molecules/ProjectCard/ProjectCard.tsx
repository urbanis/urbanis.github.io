import { Card, Space } from 'antd';
import { motion } from 'motion/react';
import { TechTag } from '@/components/atoms/TechTag';
import { IconButton } from '@/components/atoms/IconButton';
import type { Project } from '@/types';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

const iconMap: Record<string, string> = {
  github: '/assets/icons/github.svg',
  linkedin: '/assets/icons/linkedin.svg',
  arcgis: '/assets/icons/arcgis.svg',
};

const tooltipMap: Record<string, string> = {
  github: 'GitHub',
  linkedin: 'LinkedIn',
  arcgis: 'ArcGIS Dashboard',
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      style={{ borderRadius: 12, height: '100%' }}
      whileHover={{
        y: -6,
        boxShadow:
          '0 20px 40px rgba(56,189,248,0.15), 0 0 0 1px rgba(56,189,248,0.2)',
      }}
      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
    >
      <Card
        className={styles.card}
        cover={
          <img
            alt={project.imageAlt}
            src={project.image}
            className={styles.image}
          />
        }
      >
        <Card.Meta
          title={project.title}
          description={project.description}
          className={styles.meta}
        />
        <div className={styles.tags}>
          <Space size={[0, 4]} wrap>
            {project.tags.map((tag) => (
              <TechTag key={tag} label={tag} />
            ))}
          </Space>
        </div>
        <div className={styles.links}>
          {project.links.map((link) => (
            <IconButton
              key={link.url}
              src={iconMap[link.type]}
              alt={link.type}
              tooltip={tooltipMap[link.type]}
              href={link.url}
            />
          ))}
        </div>
      </Card>
    </motion.div>
  );
}
