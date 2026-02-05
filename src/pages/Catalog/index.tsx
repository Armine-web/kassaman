import { useTranslation } from 'react-i18next';

const Catalog = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('catalog.title')}</h1>
      <p>{t('catalog.description')}</p>
    </div>
  );
};

export default Catalog;
