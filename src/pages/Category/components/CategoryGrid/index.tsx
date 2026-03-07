import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { CatalogCard } from './../../../Catalog/components/CatalogCard';
import { GRID_CONTAINER_ANIMATION, CARD_ANIMATION } from './const';
import type { ProductGridProps } from './types';
import styles from './styles.module.css';

export const CategoryGrid = ({ products = [] }: ProductGridProps) => {
  const [visibleCount, setVisibleCount] = useState(4);
  const { t } = useTranslation();
  const showMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  const visibleProducts = products.slice(0, visibleCount);
  const isFullyLoaded = visibleCount >= products.length;

  return (
    <div className={styles.wrapper}>
      <motion.div
        className={styles.gridContainer}
        variants={GRID_CONTAINER_ANIMATION}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <AnimatePresence mode="popLayout">
          {visibleProducts.map((product, index) => (
            <motion.div
              key={`${product.id}-${index}`}
              variants={CARD_ANIMATION}
              layout
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <CatalogCard product={product} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <div className={styles.buttonWrapper}>
        {!isFullyLoaded && products.length > 0 ? (
          <button className={styles.viewMoreBtn} onClick={showMore} type="button">
            <span className={styles.btnText}>{t('common.viewMore')}</span>
            <span className={styles.plusIcon}>+</span>
          </button>
        ) : (
          products.length > 4 && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={styles.allLoadedText}
            >
              {t('common.allLoaded')}
            </motion.span>
          )
        )}
      </div>
    </div>
  );
};
