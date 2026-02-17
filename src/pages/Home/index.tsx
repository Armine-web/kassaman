import FeaturedCategories from './components/FeaturedCategories/index';
import FeaturedCollections from './components/FeaturedCollections';
import Bestsellers from './components/Bestsellers/index';
import Philosophy from './components/Philosophy';
import Advantages from './components/Advantages';
import HomeBanner from './components/HomeBanner';
import styles from './styles.module.css';

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
      </div>
    </>
  );
};

export default Home;
