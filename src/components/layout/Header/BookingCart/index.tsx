import { Badge } from 'antd';
import { ScheduleOutlined } from '@ant-design/icons';
import type { BookingCartIconProps } from './types';
import styles from './styles.module.css';

export const BookingCart = ({ count, onClick }: BookingCartIconProps) => {
  return (
    <Badge count={count} overflowCount={99} className={styles.badge}>
      <ScheduleOutlined className={styles.bookingcarticon} onClick={onClick} />
    </Badge>
  );
};

export default BookingCart;

