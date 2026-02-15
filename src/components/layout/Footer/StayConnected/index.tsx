import BaseButton from '../../../common/buttons/BaseButton';
import { TwitterOutlined, InstagramOutlined, YoutubeOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { Space } from 'antd';
import type { StayConnectedProps } from './types';
import { formatPhone } from './utils';
import styles from './styles.module.css';

const StayConnected = ({ socialLinks, contactInfo, onOpenModal }: StayConnectedProps) => {
  const { t } = useTranslation();

  // const CustomFacebookIcon = () => <span className={styles.facebookIcon}>f</span>;

  // const getIconComponent = (iconName: string) => {
  //   if (iconName === 'TwitterOutlined') return <TwitterOutlined />;
  //   if (iconName === 'FacebookOutlined') return <CustomFacebookIcon />;
  //   if (iconName === 'InstagramOutlined') return <InstagramOutlined />;
  //   if (iconName === 'YoutubeOutlined') return <YoutubeOutlined style={{ fontSize: '33px' }} />;
  //   return null;
  // };

  const getIconComponent = (iconName: string) => {
    const style = { fontSize: 'inherit' };

    switch (iconName) {
      case 'TwitterOutlined': return <TwitterOutlined style={style} />;
      case 'InstagramOutlined': return <InstagramOutlined style={style} />;
      case 'YoutubeOutlined': return <YoutubeOutlined style={style} />;
      case 'FacebookOutlined': return <span className={styles.facebookIcon}>f</span>;
      default: return null;
    }
  };

  return (
    <div className={styles.stayConnected}>
      <h1 className={styles.stayConnectedTitle}>{t('footer.stayConnected')}</h1>
      <p className={styles.description}>
        {t('footer.getInsiderInfo')}
        <br />
        {t('footer.offersEvents')}
      </p>
      <BaseButton size="small" className={styles.signUpButton} onClick={onOpenModal}>
        {t('footer.signUpForEmail')}
      </BaseButton>
      <h2 className={styles.contactTitle}>{t('footer.contactUs')}</h2>
      <div className={styles.contactInfo}>
        <p className={styles.phone}>{formatPhone(contactInfo.phone)}</p>
        <a href={`mailto:${contactInfo.email}`} className={styles.email}>
          {contactInfo.email}
        </a>
      </div>
      {/* <div className={styles.socialLinks}>
        {socialLinks.map((social, index: number) => (
          <a
            key={index}
            href={social.href}
            className={styles.socialLink}
            aria-label={t(social.label)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {getIconComponent(social.icon)}
          </a>
        ))}
      </div> */}
      <div className={styles.socialContainer}>
  <Space size={15} className={styles.socialLinks}>
    {socialLinks.map((link, index) => {
      const brandClass = styles[link.icon] || '';
      
      return ( // <--- 1. Ուղղված է 'returne'-ը 'return'-ի
        <a
          key={index}
          href={link.href}
          // 2. Ուղղված է className-ի սինտաքսը
          className={`${styles.socialLink} ${brandClass}`}
          aria-label={link.label}
          target="_blank"
          rel="noopener noreferrer"
        >
          {getIconComponent(link.icon)} 
        </a>
      ); // <--- 3. Փակագծերը դասավորված են ճիշտ
    })}
  </Space>
</div>
    </div>
  );
};

export default StayConnected;
