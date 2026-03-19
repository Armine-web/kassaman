import { Line } from '../../components/common/AppearingLines';
import FeaturedCollections from '../../components/common/FeaturedCollections';
import styles from './styles.module.css';

const Collections = () => {
  return (
    <section className={styles.collections}>
      <div className={styles.lines}>
        <Line thin />
        <Line />
      </div>
      <FeaturedCollections className={styles.featureCollection} />
      <div className={styles.lines}>
        <Line thin />
        <Line />
      </div>
    </section>
  );
};

export default Collections;
