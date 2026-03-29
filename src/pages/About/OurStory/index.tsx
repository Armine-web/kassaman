import { motion } from 'framer-motion';
import { Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';

import { STORY_ASSETS } from './const';
import { getOurStoryContent } from './utils';
import { fadeInUp, imageReveal, stagger } from '../../../animation.ts';
import styles from './styles.module.css';

const OurStory = () => {
  const { t } = useTranslation();
  const { title, description } = getOurStoryContent(t);

  return (
    <section className={styles.storySection}>
      <motion.div
        className={styles.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <Row gutter={[40, 40]} align="middle" justify="center">
          <Col xs={24} xl={{ span: 7, order: 1 }} lg={24} order={2}>
            <motion.div className={styles.sideImageFrame} variants={imageReveal}>
              <img
                src={STORY_ASSETS.leftImage}
                alt={STORY_ASSETS.altLeft}
                className={styles.image}
              />
            </motion.div>
          </Col>

          <Col xs={24} xl={{ span: 10, order: 2 }} lg={24} order={1}>
            <motion.div className={styles.textCenterWrapper} variants={stagger}>
              <motion.div variants={fadeInUp}>
                <h1 className={styles.mainTitle}>{title}</h1>
                <div className={styles.goldDividerCenter} />
              </motion.div>

              {Array.isArray(description) &&
                description.map((text: string, index: number) => (
                  <motion.div key={index} variants={fadeInUp}>
                    <p className={styles.descriptionCenter}>{text}</p>
                  </motion.div>
                ))}
            </motion.div>
          </Col>

          <Col xs={24} xl={{ span: 7, order: 3 }} lg={24} order={3}>
            <motion.div className={styles.sideImageFrame} variants={imageReveal}>
              <img
                src={STORY_ASSETS.rightImage}
                alt={STORY_ASSETS.altRight}
                className={styles.image}
              />
            </motion.div>
          </Col>
        </Row>
      </motion.div>
    </section>
  );
};

export default OurStory;
