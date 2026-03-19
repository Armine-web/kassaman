import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import type { EditorsPicksProps } from './types';
import { fadeInUp, staggerContainer } from '../../../../animation';
import styles from './styles.module.css';

export default function EditorsPicks({ posts }: EditorsPicksProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <section className={styles.picksSection}>
      <motion.div
        className={styles.container}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <header className={styles.header}>
          <h3 className={styles.picksTitle}>{t('blogPage.editors_picks')}</h3>
          <div className={styles.line} />
        </header>

        <div className={styles.grid}>
          {posts.map(post => (
            <motion.div key={post.id} variants={fadeInUp}>
              <Link to={`/blog/${post.slug}`} className={styles.pickCard}>
                <div className={styles.imageWrapper}>
                  <img src={post.coverImage} alt={t(post.titleKey)} className={styles.image} />
                  <div className={styles.badge}>{t('blogPage.pick')}</div>
                </div>

                <div className={styles.content}>
                  <div className={styles.meta}>
                    <span className={styles.category}>
                      {t(`blogPage.category.${post.category || 'general'}`)}
                    </span>
                    <span className={styles.dot}>•</span>
                    <span className={styles.date}>{post.date}</span>
                  </div>
                  <h4 className={styles.postTitle}>{t(post.titleKey)}</h4>
                  <p className={styles.preview}>{t(post.previewKey || post.contentKey)}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
