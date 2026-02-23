import { Row, Col } from 'antd';
import { ProjectCard } from '@/components/molecules/ProjectCard';
import type { Project } from '@/types';
import styles from './PortfolioGrid.module.css';

interface PortfolioGridProps {
  projects: Project[];
}

export function PortfolioGrid({ projects }: PortfolioGridProps) {
  return (
    <div className={styles.container}>
      <Row gutter={[16, 16]}>
        {projects.map((project) => (
          <Col key={project.id} xs={24} sm={12} md={8}>
            <ProjectCard project={project} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
