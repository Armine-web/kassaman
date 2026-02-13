import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useCategories } from '../../../../hooks/useCategories';
import useScrollReveal from '../../../../hooks/useScrollReveal';
import styles from './styles.module.css';
import VisualCard from '../../../../components/common/cards/VisualCard';
import { Line } from '../../../../components/common/AppearingLines';
import MainButton from '../../../../components/common/MainButton';

const FeaturedCategories = () => {
  useScrollReveal();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { data: categories, isLoading, isError } = useCategories();

  return (
    <section className={styles.categories}>
      <h2 className={`${styles.homeCategories} scrollReveal`}>
        {t('home.featuredCategories.title')
          .split('\n')
          .map((line, index) => (
            <p key={index} className={index === 1 ? styles.secondLine : ''}>
              {line}
            </p>
          ))}
      </h2>
      {isError ? (
        <div className="errorMessage">{t(`errors.failedToLoad`)}</div>
      ) : isLoading ? (
        <div className="loading">Loading Categories...</div>
      ) : (
        <div className={styles.categoryList}>
          {categories?.map((category, index) => (
            <VisualCard
              className={`${styles.homeCategoriesCard} scrollReveal`}
              style={{ transitionDelay: `${index * 0.5}s` }}
              key={category.id}
              width={300}
              image={{ src: category.image, alt: category.slug }}
              hoverEffect={true}
              onClick={() => navigate(`/catalog/${category.slug}`)}
            >
              <div
                className={styles.featuredCategoriesInner}
              >
                <Line
                  thin
                  className={`${styles.featuredCategoriesLineThin} scrollReveal myCustomScrollReveal`}
                  style={{ transitionDelay: `${index * .8}s` }}
                />
                <Line
                  className={`${styles.featuredCategoriesLine} scrollReveal myCustomScrollReveal`}
                  style={{ transitionDelay: `${index * .8}s` }}
                />
                <MainButton
                  text={t(`${category.slug}`)}
                  route={`/catalog/${category.slug}`}
                  className={`${styles.featuredCategoriesButton} scrollReveal`}
                  style={{ transitionDelay: `${index * .8}s` }}
                />
              </div>
            </VisualCard>
          ))}
        </div>
      )}
    </section>
  );
};
export default FeaturedCategories;
