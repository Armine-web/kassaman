import type { BaseButtonProps } from './types';
import styles from './styles.module.css';

const BaseButton = ({
  label,
  onClick,
  children,
  variant = 'link',
  className = '',
  underlineColor = 'var(--color-text)',
  ...rest
}: BaseButtonProps) => {
  const buttonClasses = [styles.baseButton, styles[variant], className].join(' ');

   const style = variant === 'link' ? {
    backgroundImage: `linear-gradient(to right, ${underlineColor} 50%, transparent 50%)`
  } : {};

  return (
    <button className={buttonClasses} onClick={onClick} style={style} {...rest}>
      {children ?? label}
    </button>
  );
};
export default BaseButton;
