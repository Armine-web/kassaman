import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import { fadeInUp, staggerContainer, imageScaleReveal } from '../../animation';
import { NOT_FOUND_TRANSLATIONS, ROUTES, ASSETS } from './const';
import styles from './styles.module.css';

export default function NotFound() {
  const { t } = useTranslation();

  const handleBackNavigation = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.main
      className={styles.container}
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.img
        src={ASSETS.BG_IMAGE}
        alt=""
        className={styles.backgroundImage}
        variants={imageScaleReveal}
      />

      <div className={styles.overlay} />

      <motion.div className={styles.content} variants={fadeInUp}>
        <p className={styles.errorCode}>{t(NOT_FOUND_TRANSLATIONS.codeLabel)}</p>

        <h1 className={styles.subtitle}>{t(NOT_FOUND_TRANSLATIONS.subtitle)}</h1>

        <div className={styles.linkGroup}>
          <Link to={ROUTES.HOME} className={styles.navLink} onClick={handleBackNavigation}>
            {t(NOT_FOUND_TRANSLATIONS.homeLink)}
          </Link>

          <Link to={ROUTES.CATALOG} className={styles.navLink} onClick={handleBackNavigation}>
            {t(NOT_FOUND_TRANSLATIONS.catalogLink)}
          </Link>
        </div>
      </motion.div>
    </motion.main>
  );
}
