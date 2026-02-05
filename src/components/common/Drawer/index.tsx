import { Drawer } from 'antd';
import type { AppDrawerProps } from './types';

const AppDrawer = ({
  side = 'right',
  title = '',
  open,
  onClose,
  className,
  children,
}: AppDrawerProps) => {
  return (
    <Drawer placement={side} title={title} onClose={onClose} open={open} className={className}>
      {children}
    </Drawer>
  );
};

export default AppDrawer;
