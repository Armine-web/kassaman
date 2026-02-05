import { useNavigate } from 'react-router-dom';
import AppTitle from '../../AppTitle';
import type { BaseBannerProps } from './types';
import styles from './styles.module.css';
import BaseButton from '../../buttons/BaseButton';

const BaseBanner = ({ image, title, subtitle, alt, cta, className = '' }: BaseBannerProps) => {
  const navigate = useNavigate();

  const altText = alt ?? subtitle ?? title;

  return (
    <div className={`${styles.banner} ${className}`}>
      <div className={styles.bannerContent}>
        <img src={image} alt={altText} className={styles.image} />
        <div className={`${styles.textContainer} animate-monolith`}>
          <AppTitle variant="pageTitle" className={styles.title}>
            {title}
          </AppTitle>
          {cta && (
            <div className={styles.buttons}>
              {cta.book && (
                <BaseButton
                  label={cta.book}
                  className={styles.buttonBook}
                  variant="shadow"
                  onClick={() => navigate('/booking')}
                />
              )}
              {cta.shop && (
                <BaseButton
                  label={cta.shop}
                  className={styles.buttonShop}
                  variant="shadow"
                  onClick={() => navigate('/catalog')}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default BaseBanner;
