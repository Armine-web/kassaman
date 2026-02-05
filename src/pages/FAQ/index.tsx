import { useTranslation } from 'react-i18next';

const FAQ = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('faq.title')}</h1>
      <p>{t('faq.description')}</p>
    </div>
  );
};

export default FAQ;
