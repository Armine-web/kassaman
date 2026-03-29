import { motion } from 'framer-motion';
import { HERO_ASSETS } from './const';
import AppearingText from '../../../../components/common/AppearingText';
import { staggerContainer } from '../../../../animation.ts';
import styles from './styles.module.css';

const verticalImageReveal = {
  hidden: { clipPath: 'inset(0 0 100% 0)', scale: 1.1, opacity: 0.8 },
  visible: {
    clipPath: 'inset(0 0 0% 0)',
    scale: 1,
    opacity: 1,
    transition: { duration: 2, ease: [0.19, 1, 0.22, 1] as const },
  },
};

export default function ServiceHero() {
  return (
    <motion.header
      className={styles.fullWidthHero}
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className={styles.imageOverlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2, delay: 0.5 }}
      />

      <motion.img
        src={HERO_ASSETS.banner}
        alt="Kassaman Services"
        className={styles.bannerImage}
        variants={verticalImageReveal}
      />

      <div className={styles.textOverlay}>
        <AppearingText text="service.hero.kicker" className={styles.kickerText} />
        <AppearingText text="service.hero.title" className={styles.mainTitle} />
        <AppearingText text="service.hero.subtitle" className={styles.subtitleText} />
        <div className={styles.goldLine} />
      </div>
    </motion.header>
  );
}
