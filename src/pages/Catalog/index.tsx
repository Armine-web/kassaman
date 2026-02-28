import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CatalogHeader } from './components/CatalogHeader';
import { SortBar } from './components/SortBar';
import { CatalogGrid } from './components/CatalogGrid';
import { FilterModal } from './components/FilterModal';
import styles from './styles.module.css';

function Catalog() {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const [totalProducts] = useState(124);

  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [sortBy, setSortBy] = useState<string>('newest');

  const selectedCategory = searchParams.get('category') || undefined;

  const handleSortChange = (value: string) => {
    setSortBy(value);
  };

  useEffect(() => {
    if (selectedCategory) {
      document.title = `${selectedCategory} - Jewelry Catalog`;
    } else {
      document.title = 'Jewelry Catalog';
    }
  }, [selectedCategory]);

  return (
    <div className={styles.pageWrapper}>
      <CatalogHeader />
      <div className={styles.topBar}>
        <div className={styles.topBarContainer}>
          <div className={styles.leftSection}>
            <SortBar onSortChange={handleSortChange} />
            <span className={styles.productCount}>
              {totalProducts} {t('common.pieces')}
            </span>
          </div>

          <FilterModal
            open={isFilterModalOpen}
            onClose={() => setIsFilterModalOpen(false)}
            onOpen={() => setIsFilterModalOpen(true)}
            selectedCategory={selectedCategory}
          />
        </div>
      </div>

      <main className={styles.mainContent}>
        <CatalogGrid sortBy={sortBy} category={selectedCategory} />
      </main>
    </div>
  );
}

export default Catalog;
