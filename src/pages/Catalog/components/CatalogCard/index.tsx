import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { imageReveal } from '../../../../animation.ts';
import MainButton from '../../../../components/common/MainButton';
import styles from './styles.module.css';
import ShoppCart from '../../../../components/layout/Header/ShopCart/index.tsx';
import { useAppDispatch } from '../../../../store/hook';
import { toggleWishlist } from '../../../../store/slices/wishlistSlice';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../../store/index.ts';

export function CatalogCard({ product, onClick }: any) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleNavigate = () => {
    if (onClick) {
      onClick(product.id);
    } else {
      navigate(`/product/${product.id}`);
    }
  };

  const wishlistItems = useSelector((state: RootState) => state.wishlist.wishlist ?? []);
  const isInWishlist = wishlistItems.some(item => item.id === product.id);

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
          <div className={styles.cartIconWrapper}>
            <ShoppCart
              key={isInWishlist ? 'in' : 'out'}
              onClick={e => {
                e.stopPropagation();
                dispatch(toggleWishlist(product));
              }}
              showBadge={false}
              iconClassName={`${styles.cartIcon} ${isInWishlist ? styles.isInWishlist : ''}`}
            />
          </div>
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
