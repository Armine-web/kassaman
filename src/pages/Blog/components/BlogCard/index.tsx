import { Card, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import type { Props } from './types';
import { formatDate } from '../../utils';
import styles from './styles.module.css';

export default function BlogCard({ post }: Props): JSX.Element {
  const { t } = useTranslation();

  return (
    <Link to={`/blog/${post.slug}`} className={styles.link}>
      <Card
        hoverable
        className={styles.card}
        variant="borderless"
        cover={
          <div className={styles.coverWrap}>
            <img src={post.coverImage} alt={t(post.titleKey)} className={styles.cover} />
          </div>
        }
      >
        <div className={styles.content}>
          <div className={styles.meta}>
            <span className={styles.date}>{formatDate(post.date)}</span>
            {post.author && <span className={styles.dot}>•</span>}
            {post.author && <span className={styles.author}>{post.author}</span>}
          </div>

          <Typography.Title level={4} className={styles.title}>
            {t(post.titleKey)}
          </Typography.Title>

          <Typography.Paragraph className={styles.preview} ellipsis={{ rows: 3 }}>
            {t(post.previewKey)}
          </Typography.Paragraph>

          <div className={styles.footer}>
            <span className={styles.readMore}>
              <span className={styles.readMoreText}>
                {t('blogPage.read_more')}
                <span className={styles.arrow}>→</span>
              </span>
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
