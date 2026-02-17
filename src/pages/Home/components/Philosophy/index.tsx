import { useTranslation } from 'react-i18next';
import PhilosophyGallery from '../PhilosophyGallery';
import CardContent from '../../../../components/common/cards/CardContent';
import { getImagesDesc } from './utils';
import { GALLERY_IMAGES } from './const';
import styles from './styles.module.css';
import MainButton from '../../../../components/common/MainButton';
import { Line } from '../../../../components/common/AppearingLines';

const Philosophy = () => {
  const { t } = useTranslation();

  const imagesWithDesc = getImagesDesc(GALLERY_IMAGES, t);

  return (
    <section className={styles.philosophy}>
      <div className={styles.container}>
        <PhilosophyGallery images={imagesWithDesc} />
        <div className={styles.contentWrapper}>
          <CardContent
            className={`${styles.content} scrollReveal`}
            descClassName={`${styles.desc} scrollReveal`}
            title={t('home.philosophy.title')}
            description={t('home.philosophy.description')}
          />

          <Line thin className={`${styles.philosophyLine} scrollReveal`} />
          <Line className={`${styles.philosophyLine} scrollReveal`} />

          <div className={` ${styles.philosophyBtnWrapper} scrollReveal backgroundMainButton`}>
            <div className="borderMainButton">
              <div className="borderThinMainButton">
                <MainButton
                  text={t('home.philosophy.cta')}
                  route={'/about'}
                  className={styles.philosophyBtn}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
