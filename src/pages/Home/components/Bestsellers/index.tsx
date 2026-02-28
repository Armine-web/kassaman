import { useState, useEffect, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import useScrollReveal from '../../../../hooks/useScrollReveal';
import { useProducts } from '../../../../hooks/useProducts';
import ProductCard from '../../../../components/common/cards/ProductCard';
import AppTitle from '../../../../components/common/AppTitle';
import { ErrorMessage } from '../../../../components/common/ErrorMessage';
import { GAP, ITEM_WIDTH, VISIBLE_ITEMS } from './const';
import styles from './styles.module.css';

const revealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const Bestsellers = () => {
  useScrollReveal();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { data: products, isLoading, isError } = useProducts();
  const [index, setIndex] = useState(0);

  const maxIndex = useMemo(() => {
    if (!products?.length) return 0;
    return Math.max(products.length - VISIBLE_ITEMS, 0);
  }, [products]);

  useEffect(() => {
    setIndex(0);
  }, [products]);

  const handleNext = useCallback(() => {
    setIndex(prev => (prev < maxIndex ? prev + 1 : prev));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setIndex(prev => (prev > 0 ? prev - 1 : prev));
  }, []);

  const slideOffset = index * (ITEM_WIDTH + GAP);

  return (
    <motion.section
      className={styles.bestsellers}
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <AppTitle as="h2" variant="sectionTitle" className={`${styles.title} scrollReveal`}>
        {t('categories.bracelets.title')}
      </AppTitle>

      {isError ? (
        <ErrorMessage />
      ) : isLoading ? (
        <div className="loading">Loading Bestsellers...</div>
      ) : (
        <div className={styles.sliderWrapper}>
          <button
            onClick={handlePrev}
            disabled={index === 0}
            aria-label="Previous products"
            className={styles.arrow}
          >
            <span>&lt;</span>
          </button>

          <div className={styles.viewport}>
            <motion.div
              className={styles.track}
              animate={{ x: -slideOffset }}
              transition={{
                type: 'spring',
                stiffness: 70,
                damping: 20,
              }}
            >
              {products?.map(product => (
                <div key={product.id} className={styles.slide}>
                  <ProductCard
                    product={product}
                    width={ITEM_WIDTH}
                    onClickProduct={() => navigate(`/product/${product.id}`)}
                    onClickBook={() => navigate('/booking')}
                  />
                </div>
              ))}
            </motion.div>
          </div>

          <button
            onClick={handleNext}
            disabled={index === maxIndex}
            aria-label="Next products"
            className={styles.arrow}
          >
            <span>&gt;</span>
          </button>
        </div>
      )}
    </motion.section>
  );
};

export default Bestsellers;
