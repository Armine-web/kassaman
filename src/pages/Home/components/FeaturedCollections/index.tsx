import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import { useTranslation } from 'react-i18next';
import { useCollections } from '../../../../hooks/useCollections';
import VisualCard from '../../../../components/common/cards/VisualCard';
import CardContent from '../../../../components/common/cards/CardContent';
import AppTitle from '../../../../components/common/AppTitle';
import useScrollReveal from '../../../../hooks/useScrollReveal';
import MainButton from '../../../../components/common/MainButton';
import { Line } from '../../../../components/common/AppearingLines';
import { LAYOUTS } from './const';

const FeaturedCollections = () => {
  useScrollReveal();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { data: collections, isLoading, isError } = useCollections();

  return (
    <section className={styles.collections}>
      {isError ? (
        <div className="errorMessage">{t(`errors.failedToLoad`)}</div>
      ) : isLoading ? (
        <div className="loading">Loading Categories...</div>
      ) : (
        <>
          <AppTitle as="h2" variant="sectionTitle" className={`${styles.title} scrollReveal`}>
            {t('productCollections.heading')}
          </AppTitle>

          <div className={styles.collectionList}>
            {collections?.slice(0, 4).map((collection, index) => {
              return (
                <div key={collection.id} className={styles.wrapper}>
                  <div className={`${styles.outsideCol} scrollReveal`}>
                    <div
                      className={`${styles.cardRow} ${LAYOUTS[index].reverse ? styles.reverse : ''}`}
                    >
                      <div>
                        <CardContent
                          className={styles.collectionsCardContect}
                          title={t(collection.titleKey)}
                          description={
                            collection.subtitleKey ? t(collection.subtitleKey) : undefined
                          }
                          animate={true}
                        />
                        <Line thin className={`${styles.collectonsLine} scrollReveal`} />
                        <Line className={`${styles.collectonsLine} scrollReveal`}/>
                        <div
                          className={`${styles.collectionBtn} ${LAYOUTS[index].reverse ? styles.collectionBtnReverse : ''} scrollReveal backgroundMainButton`}
                        >
                          <div className="borderMainButton">
                            <div className="borderThinMainButton">
                              <MainButton
                                text={t('productCollections.viewCollection')}
                                route={`/collections/${collection.slug}`}
                                className={`${styles.featuredCollectionButton} scrollReveal`}
                                style={{ transitionDelay: `${index * 0.8}s` }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <VisualCard
                        className={styles.ratio}
                        image={{ src: collection.image, alt: collection.slug }}
                        onClick={() => navigate(`/collections/${collection.slug}`)}
                        hoverEffect={false}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </section>
  );
};

export default FeaturedCollections;
