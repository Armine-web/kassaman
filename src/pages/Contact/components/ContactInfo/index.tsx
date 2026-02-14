import InfoCard from '../../../../components/common/InfoCard';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.css';
import { mockContactInfo } from '../../../../moc/mockContact';

import {
  PhoneOutlined,
  MailOutlined,
  ClockCircleOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons';

const iconMap = {
  phone: <PhoneOutlined />,
  email: <MailOutlined />,
  location: <EnvironmentOutlined />,
  clock: <ClockCircleOutlined />,
};

const ContactInfo = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className={styles.contactInfoWrapper}>
        {mockContactInfo.map(card => (
          <InfoCard
            key={card.id}
            icon={iconMap[card.icon]}
            title={t(card.titleKey)}
            description={
              <>
                {card.descriptionKey && <p>{t(card.descriptionKey)}</p>}

                {card.links?.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    className={styles.contactInfoLinks}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                  >
                    {t(link.labelKey)} {link.value}
                  </a>
                ))}

                {card.extraTextKey && <p>{t(card.extraTextKey)}</p>}
              </>
            }
          />
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
