import styles from './SourceTag.module.css';

export function SourceTag({ children }: { children: React.ReactNode }) {
  return <p className={styles.source}>Source: {children}</p>;
}
