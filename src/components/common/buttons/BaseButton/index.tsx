import type { BaseButtonProps } from './types';
import styles from './styles.module.css';

const BaseButton = ({
  label,
  onClick,
  children,
  variant = 'link',
  className = '',
  ...rest
}: BaseButtonProps) => {
  const buttonClasses = [styles.baseButton, styles[variant], className].join(' ');

  return (
    <button className={buttonClasses} onClick={onClick} {...rest}>
      {children ?? label}
    </button>
  );
};
export default BaseButton;
