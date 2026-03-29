import { motion } from 'framer-motion';

import { useTranslation } from 'react-i18next';
import { EnvironmentOutlined, ArrowRightOutlined } from '@ant-design/icons';

import { BOUTIQUE_IMAGES, BOUTIQUE_MAP_URL } from './const';
import { getVisitContent } from './utils';
import { fadeInUp, staggerContainer, imageScaleReveal } from '../../../animation.ts';
import styles from './styles.module.css';

const VisitBoutique = () => {
  const { t } = useTranslation();
  const { title, subtitle, description, buttonText } = getVisitContent(t);

  return (
    <section className={styles.visitSection}>
      <div className="backgroundOverlay" />

      <div className="container">
        <motion.div
          className={styles.contentWrapper}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <div className={styles.imageSide}>
            <motion.div className={styles.mainImageWrapper} variants={imageScaleReveal}>
              <img
                src={BOUTIQUE_IMAGES.main}
                alt="Kassaman Boutique Main"
                className={styles.image}
              />
            </motion.div>

            <motion.div className={styles.secondaryImageWrapper} variants={imageScaleReveal}>
              <img
                src={BOUTIQUE_IMAGES.secondary}
                alt="Kassaman Boutique Interior"
                className={styles.image}
              />
            </motion.div>
          </div>

          <div className={styles.textSide}>
            <motion.div variants={fadeInUp}>
              <h1 className={styles.title}>{title}</h1>
              <motion.span variants={fadeInUp} className={styles.subtitle}>
                {subtitle}
              </motion.span>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <p className={styles.description}>{description}</p>
            </motion.div>

            <motion.a
              href={BOUTIQUE_MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapButton}
              variants={fadeInUp}
              whileTap={{ scale: 0.95 }}
            >
              <EnvironmentOutlined />
              {buttonText}

              <ArrowRightOutlined className={styles.arrowIcon} />
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          className={styles.dividerWrapper}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className={styles.diamond} />
          <div className={styles.luxuryLine} />
        </motion.div>
      </div>
    </section>
  );
};

export default VisitBoutique;
