// import { useTranslation } from 'react-i18next';

import styles from './styles.module.css';
import HeroSection from './HeroSection';
import { useSmoothScroll } from './utils';
import OurBrand from './OurBrand';
const About = () => {
  // const { t } = useTranslation();

  useSmoothScroll();

  return (
    <div className={styles.wrapper}>
      <div className={styles.backgroundOverlay} />
      <HeroSection />
      <OurBrand />
    </div>
  );
};
export default About;
