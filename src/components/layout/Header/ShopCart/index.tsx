import { Badge } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import styles from './styles.module.css';
import type { Props } from './types';
import type { RootState } from '../../../../store';

const ShoppCart = ({
  onClick,
  showBadge = true,
  iconClassName,
  iconStyle,
  active = false,
}: Props) => {
  const cartItems = useSelector((state: RootState) => state.booking.cartItems);
  const totalCount = cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0);

  const icon = (
    <HeartOutlined
      className={`${styles.cartIcon} ${iconClassName || ''} ${active ? styles.activeHeart : ''}`}
      style={iconStyle}
      onClick={onClick}
    />
  );

  if (!showBadge) return icon;

  return (
    <Badge count={totalCount} overflowCount={99} className={styles.badge}>
      {icon}
    </Badge>
  );
};

export default ShoppCart;
