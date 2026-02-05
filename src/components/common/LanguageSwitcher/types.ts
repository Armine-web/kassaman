export type LanguageSwitcherProps = {
  currentLang: string;
  onChange: (lang: string) => void;
  className?: string;
};

export type LanguageItem = {
  key: string;
  label: string;
  icon: string;
};
