import { motion, useScroll, useTransform } from 'framer-motion';
import { HERO_IMAGES } from './const';
import { fadeInUp } from '../../../animation';
import styles from './styles.module.css';

const HeroSection = () => {
  const { scrollY } = useScroll();

  const yMove = useTransform(scrollY, [0, 500], ['0%', '15%']);

  const panels = [
    { url: HERO_IMAGES.hero1, title: 'Heritage' },
    { url: HERO_IMAGES.hero2, title: 'Craftsmanship' },
    { url: HERO_IMAGES.hero3, title: 'Design' },
  ];

  return (
    <section className={styles.hero}>
      <div className={styles.triptych}>
        {panels.map((panel, i) => (
          <motion.div
            key={i}
            className={styles.panel}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
          >
            <motion.div
              className={styles.bgImage}
              style={{
                backgroundImage: `url(${panel.url})`,
                y: yMove,
              }}
            />
            <div className={styles.panelContent}>
              <span className={styles.panelNumber}>0{i + 1}</span>
              <h3 className={styles.panelTitle}>{panel.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      <div className={styles.mainOverlay}>
        <motion.h1
          className={styles.mainTitle}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          ABOUT US
        </motion.h1>
      </div>
    </section>
  );
};

export default HeroSection;
