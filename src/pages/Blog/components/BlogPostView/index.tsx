import { Typography, Row, Col, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import type { Props } from './types';
import { formatDate, getRelatedPosts } from '../../utils';
import BlogCard from '../BlogCard';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './styles.module.css';

const { Title, Paragraph, Text } = Typography;

export default function BlogPostView({ post, allPosts }: Props): JSX.Element {
  const { t } = useTranslation();
  const relatedPosts = getRelatedPosts(allPosts, post.slug);

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <article className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroBg} style={{ backgroundImage: `url(${post.coverImage})` }} />
        <img src={post.coverImage} alt={t(post.titleKey)} className={styles.cover} />
        <div className={styles.heroShade} />
        <div className={styles.heroMeta}>
          <Text className={styles.kicker}>{t('blogPage.featured')}</Text>
          <Title className={styles.title} level={1}>
            {t(post.titleKey)}
          </Title>

          <Space className={styles.metaRow} separator={<span className={styles.dot}>•</span>}>
            <Text className={styles.date}>{formatDate(post.date)}</Text>

            {post.author && <Text className={styles.author}>{post.author}</Text>}

            {typeof post.readingTime === 'number' && (
              <Text className={styles.time}>
                {post.readingTime} {t('blogPage.min')}
              </Text>
            )}
          </Space>
        </div>
      </header>

      <main className={styles.body}>
        <Paragraph className={styles.content} style={{ whiteSpace: 'pre-line' }}>
          {t(post.contentKey)}
        </Paragraph>
      </main>

      {relatedPosts.length > 0 && (
        <footer className={styles.related}>
          <Title level={3} className={styles.relatedTitle}>
            {t('blogPage.related_articles')}
          </Title>
          <Row gutter={[24, 32]}>
            {relatedPosts.map(rp => (
              <Col key={rp.id} xs={24} sm={12} lg={8}>
                <BlogCard post={rp} />
              </Col>
            ))}
          </Row>
        </footer>
      )}
    </article>
  );
}
