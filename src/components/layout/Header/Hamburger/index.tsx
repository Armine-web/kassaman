import type { HamburgerProps } from './types';
import { Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import styles from './styles.module.css';

const Hamburger = ({ onClick }: HamburgerProps) => {
  return (
    <Button type="text" className={styles.hamburger} icon={<MenuOutlined />} onClick={onClick} />
  );
};

export default Hamburger;
