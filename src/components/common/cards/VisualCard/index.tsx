import { useState } from 'react';
import type { VisualCardProps } from './types';
import BaseCard from '../BaseCard';
import styles from './styles.module.css';

const VisualCard = ({
  image,
  children,
  onClick,
  hoverEffect = false,
  width,
  height,
  className = '',
  imgClassName = '',
  style: _style,
}: VisualCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <BaseCard
      image={image}
      width={width}
      height={height}
      className={`${className}`}
      style={_style}
      onImageClick={onClick}
      imageClassName={`${imgClassName} ${styles.image} ${hoverEffect && isHovered ? styles.zoomed : ''}`}
    >
      <div className={styles.contentWrapper}>
        <div
          onMouseEnter={() => hoverEffect && setIsHovered(true)}
          onMouseLeave={() => hoverEffect && setIsHovered(false)}
          onClick={onClick}
          style={{ width: 'max-content' }}
        >
          {children}
        </div>
      </div>
    </BaseCard>
  );
};

export default VisualCard;
