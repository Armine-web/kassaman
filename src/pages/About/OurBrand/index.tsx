import { motion } from 'framer-motion';
import { Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';

import { STORY_ASSETS } from './const';
import { stagger } from '../types';
import { fadeInUp, imageReveal } from '../../../animation';
import { getOurBrandContent } from './utils';
import styles from './styles.module.css';

const OurBrand = () => {
  const { t } = useTranslation();
  const { title, description } = getOurBrandContent(t);

  return (
    <section className={styles.storySection}>
      <motion.div
        className={styles.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <Row gutter={[80, 40]} align="middle">
          <Col xs={24} lg={11}>
            <motion.div
              className={styles.imageFrame}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={imageReveal}
            >
              <div className={styles.borderLayer} />
              <img src={STORY_ASSETS.image} alt="Kassaman Heritage" className={styles.image} />
            </motion.div>
          </Col>

          <Col xs={24} lg={13}>
            <motion.div
              className={styles.textWrapper}
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp}>
                <h2 className={styles.mainTitle}>{title}</h2>
                <div className={styles.divider} />
              </motion.div>

              {Array.isArray(description) &&
                description.map((text, index) => (
                  <motion.div key={index} variants={fadeInUp}>
                    <p className={styles.description}>{text}</p>
                  </motion.div>
                ))}
            </motion.div>
          </Col>
        </Row>
      </motion.div>
    </section>
  );
};

export default OurBrand;
