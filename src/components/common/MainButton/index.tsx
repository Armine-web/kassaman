import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import arrow from '../../../assets/img/home/arrow.jpg';
import type { Props } from './types';

const MainButton = ({ text, route, className, style, disabled, onClick }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate(route);
    }
  };

  return (
    <button className={`${styles.mainButton} ${className ?? ''}`} style={style} onClick={handleClick} disabled={disabled}>
      <span className={styles.buttonText}>{text}</span>
      <img src={arrow} alt="Arrow" />
    </button>
  );
};

export default MainButton;
