import { useState } from 'react';
import { Typography } from 'antd';
import { SankeyDiagram } from './SankeyDiagram';
import styles from './SankeySection.module.css';

const { Title, Paragraph } = Typography;

export function SankeySection() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Title level={2} className={styles.title}>
          How I Work
        </Title>
        <Paragraph className={styles.subtitle}>
          Hover any node to explore connections
        </Paragraph>

        <div className={styles.diagramWrapper}>
          <SankeyDiagram activeId={activeId} onHover={setActiveId} />
        </div>
      </div>
    </section>
  );
}
