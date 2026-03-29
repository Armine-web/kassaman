import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { imageReveal } from '../../../../animation.ts';
import MainButton from '../../../../components/common/MainButton';
import styles from './styles.module.css';

export function CatalogCard({ product, onClick }: any) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (onClick) {
      onClick(product.id);
    } else {
      navigate(`/product/${product.id}`);
    }
  };

  const nKey = product.nameKey;
  const displayTitle = nKey
    ? t(`products.${nKey}.name`, { defaultValue: product.name })
    : product.name;

  const displayDesc = nKey
    ? t(`products.${nKey}.description`, { defaultValue: product.shortDescription || '' })
    : product.shortDescription || '';

  return (
    <Card
      hoverable
      variant="borderless"
      className={styles.boutiqueCard}
      onClick={handleNavigate}
      cover={
        <div className={styles.imageContainer}>
          {product.isNew && <span className={styles.statusTag}>{t('common.new', 'NEW')}</span>}

          <motion.img
            variants={imageReveal}
            alt={displayTitle}
            src={product.images?.[0]}
            className={styles.productImage}
          />
        </div>
      }
    >
      <div className={styles.detailsBox}>
        <div className={styles.mainInfo}>
          <h3 className={styles.title}>{displayTitle}</h3>
          <p className={styles.price}>{product.price.toLocaleString()} AMD</p>
        </div>

        <div className={styles.revealSection}>
          <p className={styles.description}>{displayDesc}</p>

          <MainButton text="" className={styles.catalogArrowBtn} onClick={handleNavigate} />
        </div>
      </div>
    </Card>
  );
}
