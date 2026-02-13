import { motion } from 'framer-motion';
import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';

import { WORKSHOP_IMAGES } from './const';
import { getWorkshopContent } from './utils';
import { fadeInUp, imageReveal, stagger } from '../../../animation';
import styles from './styles.module.css';
import type { GalleryItem } from './types';

const { Text } = Typography;

const WorkshopSection = () => {
  const { t } = useTranslation();
  const { title, subtitle, description } = getWorkshopContent(t);

  return (
    <section className={styles.workshopSection}>
      <div className={styles.container}>
       
        <motion.div
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
        >
          <h1 className={styles.title}>{title}</h1>
          {subtitle && <Text className={styles.subtitle}>{subtitle}</Text>}
          {description && <p className={styles.description}>{description}</p>}
        </motion.div>

       
        <motion.div
          className={styles.gridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
        >
          {WORKSHOP_IMAGES.map((item: GalleryItem) => (
            <motion.div
              key={item.id}
              className={styles.gridItem}
              variants={imageReveal}
              data-size={item.size}
            >
              <div className={styles.overlay} />

              <img
                src={item.src}
                alt={item.alt || 'Kassaman Workshop'}
                className={styles.image}
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WorkshopSection;
