import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { Product } from '../../../../types/product';
import { HeroBanners } from './const';
import AppearingText from '../../../../components/common/AppearingText';
import { Line } from '../../../../components/common/AppearingLines';
import MainButton from '../../../../components/common/MainButton';
import { setSelectedProduct } from '../../../../store/slices/bookingSlice';
import styles from './styles.module.css';

const HomeBanner = () => {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % HeroBanners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSelectProduct = (product: Product) => {
    dispatch(setSelectedProduct(product));
    navigate('/booking');
  };

 const handleByProduct = (product: Product) => {
    dispatch(setSelectedProduct(product));
    navigate('/checkout');
  };

  return (
    <div className={styles.bannerWrapper}>
      {HeroBanners.map((banner, index) => (
        <div
          key={index}
          className={`${styles.banner} ${index === current ? styles.active : ''}`}
          style={{ backgroundImage: `url(${banner.image})` }}
          aria-label={t(banner.alt)}
        >
          {index === current && (
            <>
              <AppearingText text={t(banner.text)} />
              <Line thin />
              <Line />
              <div className={styles.buttons}>
                <MainButton text={t(banner.cta.shop)} 
                onClick={() => handleByProduct(banner.product!)} />

                {banner.product && (
                  <MainButton
                    text={t(banner.cta.book)}
                    onClick={() => handleSelectProduct(banner.product!)}
                  />
                )}
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default HomeBanner;
