import { Skeleton } from 'antd';
import BaseCard from '../BaseCard/index';
import styles from '../PromoCardSkeleton/styles.module.css';

type VisualCardSkeletonProps = {
  width?: string | number;
  height?: string | number;
  className?: string;
};

const VisualCardSkeleton = ({ width = 290, height = 365, className }: VisualCardSkeletonProps) => {
  return (
    <BaseCard
      width={width}
      height={height}
      className={`${styles.promoCard} ${styles.cardSkeleton} ${className ?? ''}`}
      imageNode={
        <Skeleton.Image active style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      }
    >
      <div className={`underlineEffect`}>
        <Skeleton.Input active size="small" />
      </div>
    </BaseCard>
  );
};
export default VisualCardSkeleton;
