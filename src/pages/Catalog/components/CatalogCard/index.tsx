import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getCurrencySymbol, formatProductName } from './utils';
import styles from './styles.module.css';
import type { CatalogCardProps } from './types';

export function CatalogCard({ product, onClick }: CatalogCardProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const nKey = product.nameKey;
  const displayTitle = nKey
    ? t(`products.${nKey}.name`, { defaultValue: product.name || formatProductName(nKey) })
    : product.name;

  const displayDesc = nKey
    ? t(`products.${nKey}.description`, { defaultValue: product.shortDescription || '' })
    : product.shortDescription || '';

  const handleNavigate = () => {
    if (onClick) {
      onClick(product.id);
    } else {
      navigate(`/product/${product.id}`);
    }
  };

  const showNewBadge = product.isNew === true;

  return (
    <Card
      hoverable
      className={styles.boutiqueCard}
      onClick={handleNavigate}
      cover={
        <div className={styles.imageContainer}>
          {showNewBadge && <span className={styles.statusTag}>{t('common.new')}</span>}
          <img alt={displayTitle} src={product.images?.[0]} className={styles.productImage} />
        </div>
      }
    >
      <div className={styles.detailsBox}>
        <h3 className={styles.title}>{displayTitle}</h3>
        <p className={styles.price}>
          {getCurrencySymbol(product.currency)} {product.price.toLocaleString()}
        </p>

        <div className={styles.revealSection}>
          <p className={styles.description}>{displayDesc}</p>
          <div className={styles.arrowWrapper}>
            <div className={styles.arrowCircle}>
              <svg
                className={styles.arrowSvg}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
