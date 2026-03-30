import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Row, Col } from 'antd';
import { MOCK_PRODUCTS } from '../../mock/mockProducts';
import { ProductGallery } from './components/ProductGallery';
import { ProductInfo } from './components/ProductInfo';
import { SimilarProducts } from './components/SimilarProducts';
import { addToCart, setSelectedProduct, toggleCart } from '../../store/slices/bookingSlice';
import styles from './styles.module.css';
import ShoppCart from '../../components/layout/Header/ShopCart';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store';

const Product = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const product = MOCK_PRODUCTS.find(p => p.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  const similar = MOCK_PRODUCTS.filter(
    p => p.category === product.category && p.id !== product.id,
  ).slice(0, 8);

  const handleSelectProduct = () => {
    dispatch(setSelectedProduct(product));
    navigate('/booking');
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(addToCart(product));
    dispatch(toggleCart(true));
  };
  const cartItems = useSelector((state: RootState) => state.booking.cartItems);
  const isInCart = cartItems.some(item => item.id === product.id);

  return (
    <section className={styles.productPage}>
      <div className="container">
        <Row gutter={[32, 32]}>
          <Col xs={24} md={9}>
            <ShoppCart
              onClick={handleAddToCart}
              showBadge={false}
              iconClassName={styles.cartIcon}
              active={isInCart}
            />

            <ProductGallery images={product.images} nameKey={product.nameKey} key={product.id} />
          </Col>

          <Col xs={24} md={15}>
            <ProductInfo product={product} onSelect={handleSelectProduct} />
          </Col>
        </Row>

        <SimilarProducts products={similar} />
      </div>
    </section>
  );
};

export default Product;
