import AppDrawer from '../../../common/Drawer';
import type { ShopCartDrawerProps } from './types';

const ShopCartDrawer = ({ open, onClose }: ShopCartDrawerProps) => {
  return (
    <AppDrawer title="" side="right" open={open} onClose={onClose}>
      <p>Product 1</p>
      <p>Product 2</p>
    </AppDrawer>
  );
};

export default ShopCartDrawer;
