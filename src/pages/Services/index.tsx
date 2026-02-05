import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('services.title')}</h1>
      <p>{t('services.description')}</p>
    </div>
  );
};

export default Services;
