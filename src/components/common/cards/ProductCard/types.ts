import type { Product } from '../../../../types/product';

export type ProductCardProps = {
  product: Product;
  onClickProduct?: () => void;
  onClickBook?: () => void;
  width?: string | number;
  height?: string | number;
  className?: string;
  cardStyles?: React.CSSProperties;
};
