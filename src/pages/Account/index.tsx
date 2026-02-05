import { useTranslation } from 'react-i18next';

const Account = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('account.title')}</h1>
      <p>{t('account.description')}</p>
    </div>
  );
};

export default Account;
