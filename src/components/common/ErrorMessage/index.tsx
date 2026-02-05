import { useTranslation } from 'react-i18next';
import type { ErrorMessageProps } from './types';
import styles from './styles.module.css';

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  const { t } = useTranslation();

  return (
    <div className={styles.errorWrapper}>
      <p className={styles.errorText}>{message ?? t('errors.default')}</p>
    </div>
  );
};
