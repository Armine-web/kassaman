import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Col, Row } from 'antd';
import PhilosophyGallery from '../PhilosophyGallery';
import CardContent from '../../../../components/common/cards/CardContent';
import { getImagesDesc } from './utils';
import { GALLERY_IMAGES } from './const';
import styles from './styles.module.css';

const Philosophy = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const imagesWithDesc = getImagesDesc(GALLERY_IMAGES, t);

  return (
    <section className={styles.philosophy}>
      <div className={styles.container}>
        <Row gutter={[30, 30]} align="middle">
          <Col xs={24} lg={12}>
            <PhilosophyGallery images={imagesWithDesc} />
          </Col>
          <Col xs={24} lg={12}>
            <CardContent
              className={styles.content}
              descClassName={styles.desc}
              title={t('home.philosophy.title')}
              description={t('home.philosophy.description')}
              buttonText={t('home.philosophy.cta')}
              onBtnClick={() => navigate('/about')}
            />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Philosophy;
