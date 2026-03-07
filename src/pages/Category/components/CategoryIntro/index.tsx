import { Breadcrumb } from 'antd';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import type { MasterIntroProps } from './types';
import { MASTER_IMAGES, MASTER_ANIMATIONS, itemVariants } from './const';

import styles from './styles.module.css';

export const CategoryIntro = ({}: MasterIntroProps) => {
  const { t } = useTranslation();
  return (
    <section className={styles.heroWrapper}>
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className={styles.breadcrumbWrapper}
      >
        <Breadcrumb
          className={styles.breadcrumb}
          items={[
            { title: <a href="/">{t('common.home') || 'Home'}</a> },
            { title: t('common.category') || 'Category' },
          ]}
        />
      </motion.div>
      <div className={styles.compositionContainer}>
        <motion.div
          className={styles.sideFrameLeft}
          variants={MASTER_ANIMATIONS.reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img src={MASTER_IMAGES.left} alt="Jewelry Detail" />
        </motion.div>

        <motion.div
          className={styles.centerFrame}
          variants={MASTER_ANIMATIONS.zoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img src={MASTER_IMAGES.main} alt="Main Collection" />
        </motion.div>

        <motion.div
          className={styles.sideFrameRight}
          variants={MASTER_ANIMATIONS.reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img src={MASTER_IMAGES.right} alt="Craftsmanship Mood" />
        </motion.div>
      </div>

      <div className={styles.goldLineIndicator} />
    </section>
  );
};
