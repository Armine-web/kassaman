import styles from './styles.module.css';
import HeroSection from './HeroSection';
import { useSmoothScroll } from './utils';
import OurBrand from './OurBrand';
import OurStory from './OurStory';
import WorkshopSection from './WorkshopSection';
import CertificatesSection from './CertificatesSection';
import VisitBoutique from './VisitBoutique';
const About = () => {
  useSmoothScroll();

  return (
    
    <div className={styles.wrapper}>
      <div className={styles.backgroundOverlay} />
      <HeroSection />
      <OurBrand />
      <OurStory />
      <WorkshopSection />
      <CertificatesSection />
      <VisitBoutique />
    </div>
    
  );
};
export default About;
