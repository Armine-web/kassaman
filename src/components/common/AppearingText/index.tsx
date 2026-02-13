import type { Props } from './types';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.css';

const AppearingText = ({ text, className }: Props) => {
  const { t } = useTranslation();
  return (
    <div className={`${styles.appearingText} ${className || ''}`}>
      <h2>{t(text)}</h2>
    </div>
  );
};

export default AppearingText;
