import { useTranslation } from 'react-i18next';
import { SERVICE_ITEMS } from './const';
import AppearingText from '../../../../components/common/AppearingText';
import styles from './styles.module.css';

export default function ServiceCards() {
  const { t } = useTranslation('');

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.grid}>
        {SERVICE_ITEMS.map((item, index) => (
          <div key={item.id} className={`${styles.card} ${styles[`card_${index}`]}`}>
            <div className={styles.imageWrapper}>
              <img
                src={item.image}
                alt={t(`service.items.${item.id}.title`)}
                className={styles.cardImage}
              />
              <div className={styles.priceOverlay}>{t(`service.items.${item.id}.price`)}</div>
            </div>

            <div className={styles.content}>
              <AppearingText
                text={`service.items.${item.id}.title`}
                className={styles.titleWrapper}
              />
              <p className={styles.description}>{t(`service.items.${item.id}.description`)}</p>
              <div className={styles.goldDivider} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
