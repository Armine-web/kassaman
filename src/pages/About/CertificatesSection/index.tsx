import { motion } from 'framer-motion';
import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { SafetyCertificateOutlined, SketchOutlined, GlobalOutlined } from '@ant-design/icons';

import { CERTIFICATE_ITEMS } from './const';
import { getCertificatesContent } from './utils';
import { fadeInUp, stagger } from '../../../animation.ts';
import styles from './styles.module.css';

const { Title, Text, Paragraph } = Typography;

const icons = [<SketchOutlined />, <SafetyCertificateOutlined />, <GlobalOutlined />];

const CertificatesSection = () => {
  const { t } = useTranslation();
  const { title, subtitle } = getCertificatesContent(t);

  return (
    <section className={styles.certificatesSection}>
      <div className="backgroundOverlay" />

      <div className="container">
        <motion.div
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h1 className={styles.title}>{title}</h1>
          <Text className={styles.subtitle}>{subtitle}</Text>
        </motion.div>

        <motion.div
          className={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {CERTIFICATE_ITEMS.map((item, index) => (
            <motion.div key={item.id} className={styles.card} variants={fadeInUp}>
              <div className={styles.iconWrapper}>{icons[index]}</div>
              <Title level={4} className={styles.itemTitle}>
                {t(`aboutUs.certificates.items.${item.key}.title`)}
              </Title>
              <Paragraph className={styles.itemDesc}>
                {t(`aboutUs.certificates.items.${item.key}.description`)}
              </Paragraph>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CertificatesSection;
