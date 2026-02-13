import type { LineProps } from './types';
import styles from './styles.module.css';

export const Line = ({ thin, className, style }: LineProps) => {
  return <div className={`${thin ? styles.lineThin : styles.line} ${className ?? ''}`} style={style} />;
};
