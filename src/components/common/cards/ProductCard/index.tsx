import { useTranslation } from 'react-i18next';
import { Card } from 'antd';
import type { ProductCardProps } from './types';
import BaseCard from '../BaseCard/index';
import styles from './styles.module.css';
import { getProductMaterialsAndStones, getProductText } from '../../../../i18n/utils/product';
import { truncateText } from './utils';

const { Meta } = Card;

const ProductCard = ({ product, width, height, onClickProduct }: ProductCardProps) => {
  const { t } = useTranslation();

  const name = getProductText(product.nameKey, 'name');

  return (
    <BaseCard
      width={width}
      height={height}
      image={{ src: product.images[0], alt: t(`products.${product.nameKey}.name`) }}
      onImageClick={onClickProduct}
    >
      <div className={styles.topRow}>
        <div onClick={onClickProduct}>
          <Meta
            title={
              <span onClick={onClickProduct} className={styles.clickableTitle}>
                {truncateText(name, 24)}
              </span>
            }
          />
        </div>
        <Meta description={getProductMaterialsAndStones(product.nameKey)} />

        <div className={styles.price}>
          {product.price} {product.currency}
        </div>
      </div>
    </BaseCard>
  );
};

export default ProductCard;
