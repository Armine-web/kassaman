import { useState, useEffect, useMemo } from 'react';
import { Row, Col, Pagination, ConfigProvider, Skeleton, Empty } from 'antd';
import { motion, AnimatePresence } from 'framer-motion';
import { CatalogCard } from '../CatalogCard';
import { fadeInUp, staggerContainer } from '../../../../animation';
import { MOCK_PRODUCTS } from '../../../../mock/mockProducts';
import styles from './styles.module.css';

const ITEMS_PER_PAGE = 8;

export function CatalogGrid({
  sortBy = 'newest',
  category,
}: {
  sortBy?: string;
  category?: string;
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setCurrentPage(1);
  }, [category]);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [category, sortBy, currentPage]);

  const filteredProducts = useMemo(() => {
    let result = Array.isArray(MOCK_PRODUCTS) ? MOCK_PRODUCTS : [];

    if (category && category !== 'all' && category !== 'undefined') {
      result = result.filter(p => p.category?.toLowerCase() === category.toLowerCase());
    }

    if (sortBy === 'price_asc') return [...result].sort((a, b) => a.price - b.price);
    if (sortBy === 'price_desc') return [...result].sort((a, b) => b.price - a.price);

    return result;
  }, [category, sortBy]);

  const currentItems = useMemo(() => {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(offset, offset + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  return (
    <div className={styles.gridWrapper}>
      <ConfigProvider theme={{ token: { colorPrimary: '#c5a059' } }}>
        <AnimatePresence mode="wait">
          {loading ? (
            <Row gutter={[24, 40]} key="loader">
              {Array.from({ length: 4 }).map((_, i) => (
                <Col key={`skel-${i}`} xs={24} sm={12} md={8} lg={6}>
                  <div className={styles.skeletonCard}>
                    <Skeleton.Image active style={{ width: '100%', height: '280px' }} />
                    <Skeleton active paragraph={{ rows: 2 }} style={{ marginTop: '20px' }} />
                  </div>
                </Col>
              ))}
            </Row>
          ) : filteredProducts.length === 0 ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} key="empty">
              <Empty
                description="No products found in this category"
                style={{ margin: '100px 0' }}
              />
            </motion.div>
          ) : (
            <motion.div
              key="content"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <Row gutter={[24, 40]}>
                {currentItems.map((product, index) => (
                  <Col key={`${product.id}-${index}`} xs={24} sm={12} md={8} lg={6}>
                    <motion.div variants={fadeInUp}>
                      <CatalogCard product={product} />
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </motion.div>
          )}
        </AnimatePresence>

        {filteredProducts.length > ITEMS_PER_PAGE && (
          <div style={{ marginTop: 80, display: 'flex', justifyContent: 'center' }}>
            <Pagination
              current={currentPage}
              pageSize={ITEMS_PER_PAGE}
              total={filteredProducts.length}
              onChange={page => {
                setCurrentPage(page);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              showSizeChanger={false}
            />
          </div>
        )}
      </ConfigProvider>
    </div>
  );
}
