import { useTranslation } from 'react-i18next';

const Checkout = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('checkout.title')}</h1>
      <p>{t('checkout.description')}</p>
    </div>
  );
};

export default Checkout;
