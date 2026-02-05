import { Card } from 'antd';
import type { BaseCardProps } from './types';
import styles from './styles.module.css';

const BaseCard = ({
  image,
  imageNode,
  width,
  height,
  onImageClick,
  imageClassName,
  className,
  children,
}: BaseCardProps) => (
  <Card
    className={`${styles.card} ${className ?? ''}`}
    style={{ width: width ?? '100%' }}
    cover={
      <div
        className={styles.imgWrapper}
        onClick={onImageClick}
        style={{ height: height ?? 'auto', aspectRatio: !height ? 'var(--card-aspect-ratio, 3 / 4)' : undefined }}
      >
        {imageNode ?? (
          <img
            className={`${styles.image} ${imageClassName ?? ''}`}
            draggable={false}
            alt={image?.alt ?? 'card image'}
            src={image?.src}
          />
        )}
      </div>
    }
  >
    {children}
  </Card>
);

export default BaseCard;
