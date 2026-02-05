import { useTranslation } from 'react-i18next';

const Blog = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('blog.title')}</h1>
      <p>{t('blog.description')}</p>
    </div>
  );
};

export default Blog;
