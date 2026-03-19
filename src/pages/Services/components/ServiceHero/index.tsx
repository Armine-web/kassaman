import { HERO_ASSETS } from './const';
import AppearingText from '../../../../components/common/AppearingText';
import styles from './styles.module.css';

export default function ServiceHero() {
  return (
    <header className={styles.fullWidthHero}>
      <div className={styles.imageOverlay} />
      <img src={HERO_ASSETS.banner} alt="Kassaman Services" className={styles.bannerImage} />

      <div className={styles.textOverlay}>
        <AppearingText text="service.hero.kicker" className={styles.kickerText} />
        <AppearingText text="service.hero.title" className={styles.mainTitle} />

        <AppearingText text="service.hero.subtitle" className={styles.subtitleText} />

        <div className={styles.goldLine} />
      </div>
    </header>
  );
}
