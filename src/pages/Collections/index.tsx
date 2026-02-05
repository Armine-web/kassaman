import { useTranslation } from 'react-i18next';

const Collections = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('collections.title')}</h1>
      <p>{t('collections.description')}</p>
    </div>
  );
};

export default Collections;
