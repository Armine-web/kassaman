import { useTranslation } from 'react-i18next';

const Collection = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('collection.title')}</h1>
      <p>{t('collection.description')}</p>
    </div>
  );
};

export default Collection;
