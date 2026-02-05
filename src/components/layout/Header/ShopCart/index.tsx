import { Badge } from 'antd';
import { ShoppingOutlined } from '@ant-design/icons';
import styles from './styles.module.css';
import type { ShopCartIconProps } from './types';

const ShoppCart = ({ count, onClick }: ShopCartIconProps) => {
  return (
    <Badge count={count} overflowCount={99} className={styles.badge}>
      <ShoppingOutlined className={styles.cartIcon} onClick={onClick} />
    </Badge>
  );
};

export default ShoppCart;
