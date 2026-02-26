import { useRef } from 'react';
import { Row, Col } from 'antd';
import { motion, useInView } from 'motion/react';
import { ProjectCard } from '@/components/molecules/ProjectCard';
import type { Project } from '@/types';
import styles from './PortfolioGrid.module.css';

interface PortfolioGridProps {
  projects: Project[];
}

export function PortfolioGrid({ projects }: PortfolioGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.05 });

  return (
    <div ref={containerRef} className={styles.container}>
      <Row gutter={[24, 24]}>
        {projects.map((project, i) => (
          <Col key={project.id} xs={24} sm={12} md={8}>
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ height: '100%' }}
            >
              <ProjectCard project={project} />
            </motion.div>
          </Col>
        ))}
      </Row>
    </div>
  );
}
