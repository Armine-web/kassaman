import { useTranslation } from 'react-i18next';

const Category = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('category.title')}</h1>
      <p>{t('category.description')}</p>
    </div>
  );
};

export default Category;
