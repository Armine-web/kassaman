import VideoBanner from './components/VideoBanner';
import FeaturedCategories from './components/FeaturedCategories/index';
import FeaturedCollections from './components/FeaturedCollections';
import Bestsellers from './components/Bestsellers/index';
import Philosophy from './components/Philosophy';
import Advantages from './components/Advantages';
import styles from './styles.module.css';


const Home = () => {
  return (
    <>
      <VideoBanner />
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
