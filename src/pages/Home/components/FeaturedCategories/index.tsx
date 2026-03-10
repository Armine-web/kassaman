import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useCategories } from '../../../../hooks/useCategories';
import useScrollReveal from '../../../../hooks/useScrollReveal';
import styles from './styles.module.css';
import VisualCard from '../../../../components/common/cards/VisualCard';
import { Line } from '../../../../components/common/AppearingLines';
import MainButton from '../../../../components/common/MainButton';
import AppearingText from '../../../../components/common/AppearingText';

const FeaturedCategories = () => {
  useScrollReveal();
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
        <>
          <h2 className={`${styles.featureCategories} scrollReveal`}>
            {t('home.featuredCategories.title')
              .split('\n')
              .map((line, index) => (
                <p key={index} className={index === 1 ? styles.secondLine : ''}>
                  {line}
                </p>
              ))}
          </h2>
          <div className={`${styles.featureCategoriesWrapper} scrollReveal`}>
            <div className={`${styles.featuredCategoriesLines} scrollReveal myCustomScrollReveal`}>
              <Line thin className={styles.featuredCategoriesLineThin} />
              <Line className={styles.featuredCategoriesLine} />
              <AppearingText
                text={t('home.featuredCategories.text')}
                className={styles.featuredCategoriestext}
              />
            </div>

            <div className={`${styles.featureCategoriesCardWrapper} scrollReveal`}>
              <div className={styles.categoryList}>
                {categories?.map((category, index) => (
                  <VisualCard
                    className={`${styles.featureCategoriesCard} scrollReveal`}
                    style={{ transitionDelay: `${index * 0.5}s` }}
                    key={category.id}
                    width={300}
                    image={{ src: category.image, alt: category.slug }}
                    hoverEffect={true}
                    onClick={() => navigate(`/catalog/${category.slug}`)}
                  >
                    <div className={styles.featuredCategoriesInner}>
                      <MainButton
                        text={t(`categories.${category.slug}.title`)}
                        route={`/catalog/${category.slug}`}
                        className={`${styles.featuredCategoriesButton} scrollReveal`}
                        style={{ transitionDelay: `${index * 0.8}s` }}
                      />
                    </div>
                  </VisualCard>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};
export default FeaturedCategories;
