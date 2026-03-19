import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import type { BlogPost } from '../../../../types/blog';
import MainButton from '../../../../components/common/MainButton';
import { fadeInUp, imageReveal, staggerContainer } from '../../../../animation';
import styles from './styles.module.css';

export default function EditorialHero({ post }: { post: BlogPost }): JSX.Element {
  const { t } = useTranslation();

  return (
    <motion.section
      className={styles.hero}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className={styles.cardRow}>
        <motion.div className={styles.collectionsCardContent} variants={fadeInUp}>
          <div className={styles.topGroup}>
            <span className={styles.label}>{t('blogPage.featured')}</span>
            <h2 className={styles.title}>{t(post.titleKey)}</h2>
          </div>

          <div className={styles.middleGroup}>
            <p className={styles.description}>{t(post.contentKey)}</p>
          </div>

          <div className={styles.bottomGroup}>
            <div className={`${styles.shopBtn} backgroundMainButton`}>
              <div className="borderMainButton">
                <div className="borderThinMainButton">
                  <MainButton text={t('blogPage.read_more')} route={`/blog/${post.slug}`} className={styles.blogButton} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className={styles.outsideCol}>
          <motion.div className={styles.imageWrapper} variants={imageReveal}>
            <img src={post.coverImage} alt="" className={styles.mainImage} />
            <div className={styles.collectionBtn}>
              <span className={styles.btnText}>{t('blogPage.new_story')}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
