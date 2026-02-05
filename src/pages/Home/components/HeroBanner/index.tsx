import { useTranslation } from 'react-i18next';
import type { SliderBannerItem } from '../../../../components/common/banners/SliderBanner/types';
import SliderBanner from '../../../../components/common/banners/SliderBanner';
import styles from './styles.module.css';


const HeroBanner = () => {
  const { t } = useTranslation();

  const banners = t('home.heroBanners', {
    returnObjects: true,
    defaultValue: [],
  }) as SliderBannerItem[];

  return (
    <div className={styles.sliderBanner}><SliderBanner banners={banners} />;</div>
  )
};

export default HeroBanner;
