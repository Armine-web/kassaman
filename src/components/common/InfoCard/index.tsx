import styles from './styles.module.css';
import type { InfoCardProps } from './types';

const InfoCard = ({ icon, title, description, className }: InfoCardProps) => {
  return (
    <div className={`${styles.infoCard} ${className || ''}`}>
      <div className={styles.infoHeader}>
        <div className={styles.infoIcon}>{icon}</div>
        <h3 className={styles.infoTitle}>{title}</h3>
      </div>
      <div className={styles.infoDescription}>{description}</div>
    </div>
  );
};

export default InfoCard;
