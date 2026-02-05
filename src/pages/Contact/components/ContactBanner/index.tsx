import { useTranslation } from 'react-i18next';
import { contactBannerImage} from '../../../../assets/img/contact';
import styles from './styles.module.css';

const ContactBanner = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.contactPage}>
      <div className={styles.contactImage}>
        <img src={contactBannerImage} alt="contact-banner" />
      </div>
      <div className={styles.contactContent}>
        <h1>{t('contact.title')}</h1>
        <p>{t('contact.description')}</p>
      </div>
    </div>
  );
};

export default ContactBanner;
