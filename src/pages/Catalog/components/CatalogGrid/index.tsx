import { useState, useEffect, useMemo } from 'react';
import { Row, Col, Pagination, ConfigProvider, Skeleton } from 'antd';
import { CatalogCard } from '../CatalogCard';
import { useTranslation } from 'react-i18next';
import type { CatalogGridProps } from './types';

import { MOCK_PRODUCTS } from '../../../../mock/mockProducts';
import styles from './styles.module.css';

const ITEMS_PER_PAGE = 12;

export function CatalogGrid({ sortBy = 'newest', category }: CatalogGridProps) {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, [category, sortBy]);

  const handlePageChange = async (page: number) => {
    setLoading(true);
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    await new Promise(r => setTimeout(r, 600));
    setLoading(false);
  };

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = MOCK_PRODUCTS;
    if (category) {
      filtered = MOCK_PRODUCTS.filter(
        product => product.category?.toLowerCase() === category.toLowerCase(),
      );
    }

    switch (sortBy) {
      case 'price_asc':
        return [...filtered].sort((a, b) => a.price - b.price);
      case 'price_desc':
        return [...filtered].sort((a, b) => b.price - a.price);
      case 'popular':
        return [...filtered].sort((a, b) => Number(b.id) - Number(a.id));
      case 'newest':
      default:
        return [...filtered].sort((a, b) => Number(b.id) - Number(a.id));
    }
  }, [category, sortBy]);

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;

    return filteredAndSortedProducts.slice(start, end).map(item => ({
      id: String(item.id),
      nameKey: item.nameKey,

      price: item.price,
      currency: (item.currency as 'USD' | 'AMD' | 'EUR') || 'AMD',
      image: item.image,
      inStock: item.inStock ?? true,
      isNew: item.isNew || false,
    }));
  }, [filteredAndSortedProducts, currentPage]);

  const totalPages = Math.ceil(filteredAndSortedProducts.length / ITEMS_PER_PAGE);

  if (!loading && filteredAndSortedProducts.length === 0) {
    return (
      <div className={styles.emptyState}>
        <h3>No products found</h3>
        <p>Try selecting a different category</p>
      </div>
    );
  }

  return (
    <div className={styles.gridWrapper}>
      <div className={styles.gridBackground}>
        <div className={styles.bgOrnament1} />
        <div className={styles.bgOrnament2} />
      </div>

      <Row gutter={[24, 40]} className={styles.gridRow}>
        {loading
          ? Array.from({ length: 8 }).map((_, index) => (
              <Col key={`skel-${index}`} xs={24} sm={12} md={8} lg={6} xl={6}>
                <SkeletonCard />
              </Col>
            ))
          : paginatedProducts.map(product => (
              <Col key={product.id} xs={24} sm={12} md={8} lg={6} xl={6}>
                <CatalogCard product={product} />
              </Col>
            ))}
      </Row>

      {totalPages > 1 && (
        <div className={styles.paginationSection}>
          <div className={styles.paginationWrapper}>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: '#c5a059',
                  colorText: '#8c8c8c',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 14,
                },
              }}
            >
              <Pagination
                current={currentPage}
                total={filteredAndSortedProducts.length}
                pageSize={ITEMS_PER_PAGE}
                onChange={handlePageChange}
                showSizeChanger={false}
                hideOnSinglePage
                className={styles.customPagination}
              />
            </ConfigProvider>
          </div>

          <div className={styles.pageIndicator}>
            {t('common.page')} {currentPage} {t('common.of')} {totalPages}
          </div>
        </div>
      )}

      <div className={styles.gridEndDecoration}>
        <div className={styles.endLine} />
        <div className={styles.endText}>{t('common.timelessElegance', 'Timeless Elegance')}</div>
      </div>
    </div>
  );
}

function SkeletonCard() {
  return (
    <div className={styles.skeletonCard}>
      <Skeleton.Image active className={styles.skeletonImage} />
      <div className={styles.skeletonContent}>
        <Skeleton active title={{ width: '80%' }} paragraph={{ rows: 1, width: '60%' }} />
      </div>
    </div>
  );
}
