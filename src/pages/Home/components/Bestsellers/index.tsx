import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../../../hooks/useProducts';
import { SwiperSlide } from 'swiper/react';
import ProductCard from '../../../../components/common/cards/ProductCard';
import Carousel from '../../../../components/common/Carousel';
import AppTitle from '../../../../components/common/AppTitle';
import { ErrorMessage } from '../../../../components/common/ErrorMessage';
import styles from './styles.module.css';

const Bestsellers = () => {
  const navigate = useNavigate();

  const { data: products, isLoading, isError } = useProducts();

  return (
    <section className={styles.bestsellers}>
      <AppTitle as={'h2'} variant={'sectionTitle'} className={styles.title}>
        Bestsellers
      </AppTitle>
      {isError ? (
        <ErrorMessage />
      ) : isLoading ? (
        <div className="loading">Loading Bestsellers...</div>
      ) : (
        <Carousel>
          {products?.map(product => (
            <SwiperSlide key={product.id}>
              <ProductCard
                product={product}
                width={330}
                onClickProduct={() => navigate(`/product/${product.id}`)}
                onClickBook={() => navigate(`/booking`)}
              />
            </SwiperSlide>
          ))}
        </Carousel>
      )}
    </section>
  );
};

export default Bestsellers;
