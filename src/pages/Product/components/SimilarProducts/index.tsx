import { useState, useEffect, useRef } from 'react';
import { Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { getProductText } from '../../../../i18n/utils/product';
import type { Props } from './types';
import useScrollReveal from '../../../../hooks/useScrollReveal';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.css';

export const SimilarProducts = ({ products }: Props) => {
  const { t } = useTranslation();
  useScrollReveal();
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollButtons = () => {
    const el = scrollRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  useEffect(() => {
    updateScrollButtons();

    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener('scroll', updateScrollButtons);
    window.addEventListener('resize', updateScrollButtons);

    return () => {
      el.removeEventListener('scroll', updateScrollButtons);
      window.removeEventListener('resize', updateScrollButtons);
    };
  }, [products]);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === 'left' ? -600 : 600,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.similarWrapper}>
      <div className={styles.header}>
        <h2 className="scrollReveal"> {t('product.similarProducts.title')}</h2>

        <div className={styles.arrows}>
          {canScrollLeft && (
            <Button
              className={styles.arrowButton}
              icon={<LeftOutlined />}
              onClick={() => scroll('left')}
            />
          )}

          {canScrollRight && (
            <Button
              className={styles.arrowButton}
              icon={<RightOutlined />}
              onClick={() => scroll('right')}
            />
          )}
        </div>
      </div>

      <div ref={scrollRef} className={styles.similarGrid}>
        {products.map(p => (
          <div
            key={p.id}
            className={`${styles.similarItem} scrollReveal`}
            onClick={() => navigate(`/product/${p.id}`)}
          >
            <div className={styles.similarImageWrapper}>
              <img
                src={p.images[0]}
                alt={getProductText(p.nameKey, 'name')}
                className={styles.image}
              />
            </div>

            <p>{getProductText(p.nameKey, 'name')}</p>
            {p.price && (
              <p className={styles.price}>
                {p.price} {p.currency}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
