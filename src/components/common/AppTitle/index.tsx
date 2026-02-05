import type { AppTitleProps } from './types';
import styles from './styles.module.css';

const AppTitle = ({
  as,
  variant = 'cardTitle',
  inline = false,
  children,
  className,
}: AppTitleProps) => {
  const Component =
    as ??
    (variant === 'pageTitle' ? 'h1' : variant === 'sectionTitle' ? 'h2' : inline ? 'span' : 'div');
  return <Component className={`${styles[variant]} ${className ?? ''}`}>{children}</Component>;
};
export default AppTitle;
