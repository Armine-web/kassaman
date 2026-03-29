import { getProductText, getProductMaterialsAndStones } from '../../../../i18n/utils/product';
import type { Props } from './types';
import MainButton from '../../../../components/common/MainButton';
import { Line } from '../../../../components/common/AppearingLines';
import useScrollReveal from '../../../../hooks/useScrollReveal';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSelectedProduct } from '../../../../store/slices/bookingSlice';
import styles from './styles.module.css';

export const ProductInfo = ({ product }: Props) => {
  useScrollReveal();
  const { t } = useTranslation();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBook = () => {
    dispatch(setSelectedProduct(product));
    navigate('/booking');
  };
  return (
    <div className={styles.info}>
      <h1 className="scrollReveal">{getProductText(product.nameKey, 'name')}</h1>
      <div className={styles.productDetailLineWrapper}>
        <Line thin className={`${styles.productDetailLine} `} />
        <Line className={`${styles.productDetailLine} `} />
      </div>

      <p className="scrollReveal">{getProductText(product.nameKey, 'description')}</p>

      {product.price && (
        <p className={`${styles.price} scrollReveal`}>
          {product.price} {product.currency}
        </p>
      )}

      <p className="scrollReveal">
        <strong>{t('product.availability')}</strong>{' '}
        {product.inStock ? t('product.inStock') : t('product.outOfStock')}
      </p>

      <p className="scrollReveal">
        <strong>{t('product.materialsAndStones')}</strong>{' '}
        {getProductMaterialsAndStones(product.nameKey)}
      </p>

      {product.sku && (
        <p className="scrollReveal">
          <strong>{t('product.sku')}</strong> {product.sku}
        </p>
      )}

      {product.weight && (
        <p className="scrollReveal">
          <strong>{t('product.weight')}</strong> {product.weight}
        </p>
      )}

      {product.size && (
        <p className="scrollReveal">
          <strong>{t('product.size')}</strong> {product.size}
        </p>
      )}
      <div className={`${styles.productDetailBtn} scrollReveal`}>
        <div className="backgroundMainButton">
          <div className="borderMainButton">
            <div className="borderThinMainButton">
              <MainButton
                onClick={handleBook}
                disabled={!product.inStock}
                text={t('booking.book')}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.productDetailLineWrapper}>
        <Line thin className={`${styles.productDetailLine} scrollReveal`} />
        <Line className={`${styles.productDetailLine} scrollReveal`} />
      </div>
    </div>
  );
};
