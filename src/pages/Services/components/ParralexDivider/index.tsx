import { useTranslation } from 'react-i18next';
import styles from './styles.module.css';

const ParallaxDivider = () => {
    const {t} = useTranslation('')
  return (
    <div className={styles.parallaxContainer}>
      <div className={styles.parallaxOverlay}>
        <div className={styles.parallaxContent}>
          <span className={styles.parallaxSubtext}>
            {t('service.parallax.subtitle')}</span>
        </div>
      </div>
    </div>
  );
};

export default ParallaxDivider;
