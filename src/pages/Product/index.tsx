import { useParams } from 'react-router-dom';
import { MOCK_PRODUCTS } from '../../mock/mockProducts';
import { ProductGallery } from './components/ProductGallery';
import { ProductInfo } from './components/ProductInfo';
import { SimilarProducts } from './components/SimilarProducts';
import { Row, Col } from 'antd';
import styles from './styles.module.css';

const Product = () => {
  const { id } = useParams<{ id: string }>();
  const product = MOCK_PRODUCTS.find(p => p.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  const similar = MOCK_PRODUCTS.filter(
    p => p.category === product.category && p.id !== product.id,
  ).slice(0, 8);

  return (
    <section className={styles.productPage}>
      <div className="container">
        <Row gutter={[32, 32]}>
          <Col xs={24} md={9}>
            <ProductGallery images={product.images} nameKey={product.nameKey} />
          </Col>

          <Col xs={24} md={15}>
            <ProductInfo product={product} />
          </Col>
        </Row>
        <SimilarProducts products={similar} />
      </div>
    </section>
  );
};

export default Product;
