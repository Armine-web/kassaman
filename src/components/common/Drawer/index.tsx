import { Drawer } from 'antd';
import type { AppDrawerProps } from './types';

const AppDrawer = ({
  side = 'right',
  title = '',
  open,
  onClose,
  className,
  children,
  backgroundColor,
  closeIconColor,
}: AppDrawerProps) => {
  return (
    <Drawer
      placement={side}
      title={title}
      onClose={onClose}
      open={open}
      style={{ backgroundColor }}
      className={className}
    >
      <style>
        {closeIconColor &&
          `
          .ant-drawer-close svg {
            color: ${closeIconColor};
          }
        `}
      </style>
      {children}
    </Drawer>
  );
};

export default AppDrawer;
