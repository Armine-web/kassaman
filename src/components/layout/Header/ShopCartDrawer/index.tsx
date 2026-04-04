import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import AppDrawer from '../../../common/Drawer';
import type { ShopCartDrawerProps } from './types';
import { Avatar, Flex, Typography, Divider } from 'antd';
import styles from './styles.module.css';
import BaseButton from '../../../common/buttons/BaseButton';
import { moveWishlistToBookings, removeWishlistItem } from '../../../../store/slices/wishlistSlice';
import { useAppDispatch } from '../../../../store/hook';
import type { RootState } from '../../../../store';
import { getProductText } from '../../../../i18n/utils/product';

const { Text } = Typography;

const ShopCartDrawer = ({ open, onClose }: ShopCartDrawerProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const wishlist = useSelector((state: RootState) => state.wishlist.wishlist ?? []);

  return (
    <AppDrawer title="" side="right" open={open} onClose={onClose}>
      {wishlist.length === 0 && <Text>{t('wishlist.empty') || 'Your wishlist is empty.'}</Text>}

      {wishlist.map(item => (
        <div key={item.id}>
          <div className={styles.productMain}>
            <Text className={styles.productTitle}>{getProductText(item.nameKey, 'name')}</Text>
            <Flex align="center" gap="middle" className={styles.firstItem}>
              <Avatar shape="square" src={item.images[0]} className={styles.productAvatar} />
              <Text className={styles.productPrice}>
                {item.price} {item.currency}
              </Text>
            </Flex>

            <Flex gap="middle">
              <BaseButton onClick={() => dispatch(removeWishlistItem(item.id))}>
                {t('account.remove')}
              </BaseButton>
              <BaseButton onClick={() => dispatch(moveWishlistToBookings(item.id))}>
                {t('account.book')}
              </BaseButton>
            </Flex>
          </div>

          <Divider className={styles.cardDivaider} />
        </div>
      ))}
    </AppDrawer>
  );
};

export default ShopCartDrawer;
