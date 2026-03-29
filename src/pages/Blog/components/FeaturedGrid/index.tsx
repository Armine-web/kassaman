import { Row, Col } from 'antd';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import type { FeaturedGridProps } from './types';
import { fadeInUp, staggerContainer } from '../../../../animation.ts';
import styles from './styles.module.css';

export default function FeaturedGrid({ posts }: FeaturedGridProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <section className={styles.gridSection}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <header className={styles.header}>
          <h3 className={styles.picksTitle}>{t('blogPage.bestsellers')}</h3>
          <div className={styles.line} />
        </header>
        <Row gutter={[40, 40]}>
          <Col xs={24} lg={16}>
            <motion.div className={styles.largeCard} variants={fadeInUp}>
              <Link to={`/blog/${posts[0]?.slug}`}>
                <div className={styles.imgWrapper}>
                  <img src={posts[0]?.coverImage} alt="" className={styles.image} />
                  <div className={styles.overlay} />
                  <div className={styles.cardContent}>
                    <span className={styles.category}>
                      {t(`blogPage.category.${posts[0]?.category || 'general'}`)}
                    </span>
                    <h3 className={styles.cardTitle}>{t(posts[0]?.titleKey)}</h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          </Col>

          <Col xs={24} lg={8}>
            <div className={styles.sideColumn}>
              {posts.slice(1, 3).map(post => (
                <motion.div key={post.id} className={styles.smallCard} variants={fadeInUp}>
                  <Link to={`/blog/${post.slug}`}>
                    <div className={styles.smallImgWrapper}>
                      <img src={post.coverImage} alt="" className={styles.image} />
                    </div>
                    <div className={styles.smallContent}>
                      <span className={styles.category}>
                        {t(`blogPage.category.${post.category || 'general'}`)}
                      </span>

                      <h4 className={styles.smallTitle}>{t(post.titleKey)}</h4>
                      <span className={styles.date}>{post.date}</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </Col>
        </Row>
      </motion.div>
    </section>
  );
}
