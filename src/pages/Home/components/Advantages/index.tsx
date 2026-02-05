import { useTranslation } from 'react-i18next';
import { Row, Col } from 'antd';
import type { AdvantageItem } from './types';
import {
  SafetyCertificateOutlined,
  FormatPainterOutlined,
  SyncOutlined,
  InboxOutlined,
} from '@ant-design/icons';
import styles from './styles.module.css';

const Advantages = () => {
  const { t } = useTranslation();

  const ADVANTAGES: AdvantageItem[] = [
    {
      icon: <SafetyCertificateOutlined />,
      title: t('home.advantages.materials.title'),
    },
    {
      icon: <FormatPainterOutlined />,
      title: t('home.advantages.cleaning.title'),
    },
    {
      icon: <SyncOutlined />,
      title: t('home.advantages.resizing.title'),
    },
    {
      icon: <InboxOutlined />,
      title: t('home.advantages.delivery.title'),
    },
  ];

  return (
    <section className={styles.advantages}>
      <div className="container">
        <Row gutter={[32, 64]} justify="center">
          {ADVANTAGES.map((item, index) => (
            <Col xs={24} sm={12} lg={6} key={index}>
              <div className={styles.advantageItem}>
                <div className={styles.icon}>{item.icon}</div>
                <h3 className={styles.title}>{item.title}</h3>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Advantages;
