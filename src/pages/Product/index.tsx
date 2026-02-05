import { useTranslation } from 'react-i18next';

const Product = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('product.title')}</h1>
      <p>{t('product.description')}</p>
    </div>
  );
};

export default Product;
