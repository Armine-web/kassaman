export type ShopCartIconProps = {
  count?: number;
  onClick?: (e: React.MouseEvent<HTMLSpanElement>) => void;
};

export type Props = ShopCartIconProps & {
  showBadge?: boolean;
  iconStyle?: React.CSSProperties;
  active?: boolean;
  iconClassName?: string;
};
