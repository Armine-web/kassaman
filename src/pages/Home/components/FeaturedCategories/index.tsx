import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useCategories } from '../../../../hooks/useCategories';
import AppTitle from '../../../../components/common/AppTitle';
import styles from './styles.module.css';
import VisualCard from '../../../../components/common/cards/VisualCard';

const FeaturedCategories = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { data: categories, isLoading, isError } = useCategories();

  return (
    <section className={styles.categories}>
      {isError ? (
        <div className="errorMessage">{t(`errors.failedToLoad`)}</div>
      ) : isLoading ? (
        <div className="loading">Loading Categories...</div>
      ) : (
        <div className={styles.categoryList}>
          {categories?.map(category => (
            <VisualCard
              key={category.id}
              width={300}
              image={{ src: category.image, alt: category.slug }}
              hoverEffect={true}
              onClick={() => navigate(`/catalog/${category.slug}`)}
            >
              <AppTitle variant="cardTitle" inline={true} className={styles.cardTitle}>
                {t(`categories.${category.slug}.title`)}
              </AppTitle>
            </VisualCard>
          ))}
        </div>
      )}
    </section>
  );
};
export default FeaturedCategories;
