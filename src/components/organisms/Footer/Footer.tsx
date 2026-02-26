import { Layout, Button, Typography } from 'antd';
import { motion } from 'motion/react';
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
        <motion.div
          style={{ display: 'inline-block' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >
          <Button
            ghost
            onClick={onContactClick}
            className={styles.contactButton}
          >
            Reach me out!
          </Button>
        </motion.div>
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
