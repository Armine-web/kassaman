import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('notFound.title')}</h1>
      <p>{t('notFound.description')}</p>
    </div>
  );
};

export default NotFound;
