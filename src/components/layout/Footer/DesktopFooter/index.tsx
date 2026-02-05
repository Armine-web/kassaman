import { Collapse } from 'antd';
import { useTranslation } from 'react-i18next';
import { RightOutlined } from '@ant-design/icons';
import StayConnected from '../StayConnected';
import type { DesktopFooterProps } from './types';
import styles from './styles.module.css';

const DesktopFooter = ({ columns, socialLinks, contactInfo, onOpenModal }: DesktopFooterProps) => {
  const { t } = useTranslation();

  const renderCustomExpandIcon = ({ isActive }: { isActive?: boolean }) => {
    return (
      <RightOutlined
        className={`${styles.expandIcon} ${isActive ? styles.expandIconActive : ''}`}
      />
    );
  };

  const collapseItems = columns.map((column, index) => ({
    key: index.toString(),
    label: t(`footer.columns.${column.title}`),
    children: (
      <ul className={styles.linkList}>
        {column.links.map((link, linkIndex) => (
          <li key={linkIndex} className={styles.linkItem}>
            <a href={link.href} className={styles.link}>
              {t(`footer.columns.${link.label}`)}
            </a>
          </li>
        ))}
      </ul>
    ),
    className: styles.collapsePanel,
  }));

  return (
    <>
      <div className={styles.desktopFooter}>
        {columns.map((column, index) => (
          <div key={index} className={styles.column}>
            <h1 className={styles.columnTitle}>{t(`footer.columns.${column.title}`)}</h1>
            <ul className={styles.linkList}>
              {column.links.map((link, linkIndex) => (
                <li key={linkIndex} className={styles.linkItem}>
                  <a href={link.href} className={styles.link}>
                    {t(`footer.columns.${link.label}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className={styles.stayConnectedWrapper}>
          <StayConnected
            socialLinks={socialLinks}
            contactInfo={contactInfo}
            onOpenModal={onOpenModal}
          />
        </div>
      </div>

      <div className={styles.mobileFooter}>
        <Collapse
          className={styles.collapse}
          bordered={false}
          expandIconPlacement="end"
          expandIcon={renderCustomExpandIcon}
          items={collapseItems}
        />

        <StayConnected
          socialLinks={socialLinks}
          contactInfo={contactInfo}
          onOpenModal={onOpenModal}
        />
      </div>
    </>
  );
};

export default DesktopFooter;
