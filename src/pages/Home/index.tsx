import FeaturedCategories from './components/FeaturedCategories/index';
import FeaturedCollections from '../../components/common/FeaturedCollections';
import Bestsellers from './components/Bestsellers/index';
import Philosophy from './components/Philosophy';
import Advantages from './components/Advantages';
import HomeBanner from './components/HomeBanner';
import styles from './styles.module.css';
import VisitBoutique from '../About/VisitBoutique';

const Home = () => {
  return (
    <>
      <HomeBanner />
      <FeaturedCategories />
      <FeaturedCollections />
      <div className={styles.paddingSmoth}>
        <Bestsellers />
      </div>
      <div className="container">
        <Philosophy />
        <Advantages />
        <VisitBoutique />
      </div>
    </>
  );
};

export default Home;
