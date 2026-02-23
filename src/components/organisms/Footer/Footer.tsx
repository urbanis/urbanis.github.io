import { Layout, Button, Typography } from 'antd';
import styles from './Footer.module.css';

const { Link } = Typography;

interface FooterProps {
  name: string;
  email: string;
  onContactClick: () => void;
}

export function Footer({ name, email, onContactClick }: FooterProps) {
  return (
    <Layout.Footer className={styles.footer}>
      <div className={styles.buttonContainer}>
        <Button
          type="primary"
          onClick={onContactClick}
          className={styles.contactButton}
        >
          Reach me out!
        </Button>
      </div>
      <div className={styles.info}>
        <span>{name} - </span>
        <Link href={`mailto:${email}`} className={styles.emailLink}>
          {email}
        </Link>
      </div>
    </Layout.Footer>
  );
}
