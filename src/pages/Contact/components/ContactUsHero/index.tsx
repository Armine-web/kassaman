import styles from './styles.module.css';
import { useTranslation } from 'react-i18next';
import contactHero from '../../../../assets/img/contact/contact-hero.png';
import { contactLogo } from '../../../../assets/img/contact';
import useScrollReveal from '../../../../hooks/useScrollReveal';

function ContactUsHero() {
  useScrollReveal();
  const { t } = useTranslation();

  return (
    <>
      <div className={`${styles.contactUsHero} scrollReveal`} style={{ backgroundImage: `url(${contactHero})` }}>
        <div className={styles.contactUsHeroContent}>
          <p>{t('contact.contactUsHero')}</p>
        </div>
        <div className='scrollReveal'>
          <div className={styles.contactLogo} > 
          <img src={contactLogo} alt="logo" />
        </div>
        </div>
        
      </div>
    </>
  );
}

export default ContactUsHero;
