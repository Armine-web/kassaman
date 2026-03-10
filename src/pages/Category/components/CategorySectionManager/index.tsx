import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { SectionHeader } from '../SectionHeader';
import { getCategories } from './utils';
import type { CategoryItem } from './types';
import styles from './styles.module.css';
import { CategoryGrid } from '../../components/CategoryGrid';

export const CategorySectionManager = () => {
  const { t } = useTranslation();
  const [categories, setCategories] = useState<CategoryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCategories().then(data => {
      setCategories(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className={styles.loader}>{t('common.loading')}</div>;

  return (
    <div className={styles.container}>
      {categories.map(category => (
        <section key={category.id} className={styles.categorySection}>
          <SectionHeader
            title={t(`categories.${category.slug}.title`)}
            subtitle={t(`categories.${category.slug}.subtitle`)}
          />

         
          <div className={styles.gridPlaceholder}>
            <CategoryGrid products={category.products} />
          </div>
        </section>
      ))}
    </div>
  );
};
