import { useTranslation } from 'react-i18next';

export const useLang = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return { currentLang: i18n.language, changeLanguage };
};
