import { Breadcrumb } from 'antd';
import MainButton from '../../../../components/common/MainButton';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { HEADER_IMAGES, containerVariants, itemVariants } from './const';
import { Line } from '../../../../components/common/AppearingLines';
import AppearingText from '../../../../components/common/AppearingText';
import type { CatalogHeaderProps } from './types';
import styles from './styles.module.css';

export function CatalogHeader({ subtitle, showBreadcrumb = true }: CatalogHeaderProps) {
  const { t } = useTranslation();

  return (
    <div className={styles.parallaxContainer}>
      <motion.header
        className={styles.headerSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        {showBreadcrumb && (
          <motion.div variants={itemVariants} className={styles.breadcrumbWrapper}>
            <Breadcrumb
              className={styles.breadcrumb}
              items={[
                { title: t('common.home') || 'Home' },
                { title: t('common.catalog') || 'Catalog' },
              ]}
            />
          </motion.div>
        )}

        <motion.div className={styles.imageMosaic} variants={containerVariants}>
          {HEADER_IMAGES.slice(0, 6).map(image => (
            <motion.div
              key={image.id}
              className={styles.mosaicItem}
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <img
                src={image.src}
                alt={image.alt || image.title}
                className={styles.showcaseImage}
              />

              <div className={styles.categoryInfo}>
                <div className={styles.buttonWrapper}>
                  <MainButton
                    text={t(`categories.${image.category}.title`, image.title)}
                    route={`/catalog/${image.category}`}
                    // className={styles.mosaicButton}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className={styles.titleGroup}>
          <AppearingText
            text={subtitle ? t(subtitle) : t('common.curatedBy') || 'Handcrafted Luxury'}
            className={styles.upperTitleCustom}
          />

          <div className={styles.titleWrapper}>
            <AppearingText
              text={t('common.headerTitle') || 'The Fine Jewelry Catalog'}
              className={styles.mainTitleCustom}
            />

            <div className={styles.lineBox}>
              <Line thin />

              <div className={styles.thickLineWrapper}>
                <Line />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.header>
    </div>
  );
}
