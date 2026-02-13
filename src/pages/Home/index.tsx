import FeaturedCategories from './components/FeaturedCategories/index';
import FeaturedCollections from './components/FeaturedCollections';
import Bestsellers from './components/Bestsellers/index';
import Philosophy from './components/Philosophy';
import Advantages from './components/Advantages';
import styles from './styles.module.css';
import HomeBanner from './components/HomeBanner';


const Home = () => {
  return (
    <>
      <HomeBanner />
      <div className="container">
        <div className={styles.homeContent}>
          <FeaturedCategories />
          <FeaturedCollections />
          <Bestsellers />
          <Philosophy />
        </div>
      </div>
      <Advantages />
    </>
  );
};

export default Home;
