import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.css';
import { HeroBanners } from './const';
import AppearingText from '../../../../components/common/AppearingText';
import { Line } from '../../../../components/common/AppearingLines';
import MainButton from '../../../../components/common/MainButton';

const HomeBanner = () => {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % HeroBanners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
                <MainButton text={t(banner.cta.shop)} route="/catalog" />
                <MainButton text={t(banner.cta.book)} route="/booking" />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default HomeBanner;
