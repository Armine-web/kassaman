import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import DesktopFooter from './DesktopFooter';
import EmailSignupModal from './EmailSignupModal';
import { FOOTER_COLUMNS, SOCIAL_LINKS, CONTACT_INFO } from './const';
import styles from './styles.module.css';

const Footer = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <DesktopFooter
          columns={FOOTER_COLUMNS}
          socialLinks={SOCIAL_LINKS}
          contactInfo={CONTACT_INFO}
          onOpenModal={() => setIsModalVisible(true)}
        />
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.container}>
          <div className={styles.bottomContent}>
            <p className={styles.copyright}>{t('footer.copyright', { year: currentYear })}</p>
          </div>
        </div>
      </div>

      <EmailSignupModal visible={isModalVisible} onClose={() => setIsModalVisible(false)} />
    </footer>
  );
};

export default Footer;