import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import { getBlogPosts, getSocialPosts } from '../../api/blog';
import type { BlogPost, SocialItem } from '../../types/blog';

import EditorialHero from './components/EditorialHero';
import SocialVideoGrid from './components/SocialVideoGrid';
import EditorsPick from './components/EditorsPick';
import FeaturedGrid from './components/FeaturedGrid';
import BlogGrid from './components/BlogGrid';
import BlogPagination from './components/BlogPagination';
import BlogSkeleton from './components/BlogSkeleton';
import BlogPostView from './components/BlogPostView';
import NewsletterSection from './components/NewsletterSection';

import styles from './styles.module.css';

export default function Blog(): JSX.Element {
  const { slug } = useParams<{ slug?: string }>();
  const { t } = useTranslation();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [socialItems, setSocialItems] = useState<SocialItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  const FEATURE_COUNT = 7;

  const gridPool = posts.slice(FEATURE_COUNT);

  const totalForPagination = gridPool.length;
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedPosts = gridPool.slice(startIndex, startIndex + pageSize);

  useEffect(() => {
    if (currentPage > Math.ceil(totalForPagination / pageSize) && totalForPagination > 0) {
      setCurrentPage(1);
    }
  }, [totalForPagination]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [blogData, socialData] = await Promise.all([getBlogPosts(), getSocialPosts()]);

        setPosts(blogData);
        setSocialItems(socialData);
      } catch (error) {
        console.error('Failed to fetch data', error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const currentPost = slug ? posts.find(p => p.slug === slug) : undefined;

  if (loading) return <BlogSkeleton />;

  if (!loading && slug && !currentPost) {
    return <div className={styles.error}>{t('blogPage.article_not_found')}</div>;
  }

  return (
    <main className={styles.container}>
      <AnimatePresence mode="wait">
        {slug && currentPost ? (
          <motion.div
            key="post-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <BlogPostView post={currentPost} allPosts={posts} />
          </motion.div>
        ) : (
          <motion.div
            key="blog-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <header className={`${styles.masthead} scrollReveal`}>
              <div className={styles.mastheadRule} />
              <div className={styles.mastheadInner}>
                <span className={styles.kicker}>{t('blogPage.featured_edition')}</span>
                <h1 className={styles.mastheadTitle}>{t('blog.title')}</h1>
                <p className={styles.mastheadLead}>{t('blog.description')}</p>
              </div>
              <div className={styles.mastheadRule} />
            </header>

            <div className={styles.contentSection}>
              {posts.length > 0 && <EditorialHero post={posts[0]} />}
              {socialItems.length > 0 && <SocialVideoGrid items={socialItems} />}

              {posts.length > 1 && <EditorsPick posts={posts.slice(1, 4)} />}

              {posts.length > 4 && (
                <div className={styles.featuredGridWrapper}>
                  <FeaturedGrid posts={posts.slice(4, 7)} />
                </div>
              )}

              <div id="latest-stories" className={styles.remainingGrid}>
                <header className={styles.gridHeader}>
                  <h2 className={styles.sectionTitle}>{t('blogPage.latest_stories')}</h2>
                  <div className={styles.divider} />
                </header>

                <BlogGrid key={`grid-page-${currentPage}`} posts={paginatedPosts} />

                {totalForPagination > 0 && (
                  <div className={styles.paginationWrapper}>
                    <BlogPagination
                      current={currentPage}
                      pageSize={pageSize}
                      total={totalForPagination}
                      onChange={page => {
                        setCurrentPage(page);

                        const section = document.getElementById('latest-stories');
                        if (section) {
                          const offset = section.offsetTop - 100;
                          window.scrollTo({ top: offset, behavior: 'smooth' });
                        }
                      }}
                    />
                  </div>
                )}
              </div>

              <NewsletterSection />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
