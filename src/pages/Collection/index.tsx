import { useParams } from 'react-router-dom';
import { Image, Spin } from 'antd';
import { useTranslation } from 'react-i18next';

import { MOCK_PRODUCTS } from '../../mock/mockProducts';
import { MOCK_COLLECTIONS } from '../../mock/mockCollections';
import { getProductText } from '../../i18n/utils/product';
import { useDispatch } from 'react-redux';
import { setSelectedProduct } from '../../store/slices/bookingSlice';
import { useNavigate } from 'react-router-dom';
import useScrollReveal from '../../hooks/useScrollReveal';
import styles from './styles.module.css';
import MainButton from '../../components/common/MainButton';
import type { Product } from '../../types/product';
import { Line } from '../../components/common/AppearingLines';

const Collection = () => {
  useScrollReveal();

  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const collection = MOCK_COLLECTIONS.find(c => c.slug === slug);

  if (!slug || !collection) {
    return (
      <div>
        <Spin />
      </div>
    );
  }
  const products = MOCK_PRODUCTS.filter(product => product.collections.includes(slug));
  const handleBook = (product: Product) => {
    dispatch(setSelectedProduct(product));
    navigate('/booking');
  };

  return (
    <section className={`${styles.collection} container`}>
      <div className={styles.page}>
        <div className={styles.lines}>
          <Line thin />
          <Line />
        </div>
        <div className={styles.banner} >
          <Image src={collection.image} preview={false} className={`${styles.bannerImage} scrollReveal`} />

          <div className={`${styles.bannerContent } scrollReveal`}>
            <h1>{t(collection.titleKey)}</h1>
            <p>{t(collection.subtitleKey)}</p>
          </div>
        </div>

        <div className={styles.lines}>
          <Line thin />
          <Line />
        </div>

        <div className={styles.productsGrid}>
          {products.map(product => (
            <div key={product.id} className={`${styles.productCard} scrollReveal`}>
              <Image src={product.images[0]} preview={false} className={styles.productImage} />
              <h3 className={styles.productH3}>{getProductText(product.nameKey, 'name')}</h3>

              <div className={`${styles.productDetailBtn} scrollReveal`}>
                <MainButton
                  onClick={() => handleBook(product)}
                  disabled={!product.inStock}
                  text={'Book this item'}
                  className={styles.myButton}
                />
              </div>
            </div>
          ))}
        </div>
        <div className={styles.lines}>
          <Line thin />
          <Line />
        </div>
      </div>
    </section>
  );
};

export default Collection;
