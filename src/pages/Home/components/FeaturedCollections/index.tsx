import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import { useTranslation } from 'react-i18next';
import { useCollections } from '../../../../hooks/useCollections';
import { Col, Row } from 'antd';
import VisualCard from '../../../../components/common/cards/VisualCard';
import CardContent from '../../../../components/common/cards/CardContent';
import AppTitle from '../../../../components/common/AppTitle';

const FeaturedCollections = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { data: collections, isLoading, isError } = useCollections();

  return (
    <section className={styles.collections}>
      <AppTitle as={'h2'} variant={'sectionTitle'} className={styles.title}>
        High Jewelry
      </AppTitle>
      <div className={styles.collectionList}>
        <Row gutter={[30, 30]}>
          {collections?.map(collection => (
            <Col key={collection.id} span={24} lg={12}>
              <VisualCard
                className={styles.ratio}
                image={{ src: collection.image, alt: collection.slug }}
                onClick={() => navigate(`/collections/${collection.slug}`)}
                hoverEffect={false}
              >
                <CardContent
                  title={t(collection.titleKey)}
                  description={collection.subtitleKey ? t(collection.subtitleKey) : undefined}
                  buttonText="View the collection"
                  animate={true}
                />
              </VisualCard>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};
export default FeaturedCollections;
