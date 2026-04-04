import { Card, Avatar, Typography, Flex, Divider } from 'antd';
import { useAppDispatch, useAppSelector } from '../../../../store/hook';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.css';
import { removeWishlistItem, moveWishlistToBookings } from '../../../../store/slices/wishlistSlice';
import BaseButton from '../../../../components/common/buttons/BaseButton';
import { getProductText } from '../../../../i18n/utils/product';

const { Text } = Typography;

const WishlistItem = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const wishlist = useAppSelector(state => state.wishlist.wishlist);

  return (
    <section className="">
      <div className={styles.accountSection}>
        <div className={styles.accountWrapper}>
          <Card title={t('account.wishlist')} className={styles.accountCard}>
            {wishlist.length > 0 ? (
              wishlist.map((item, index) => (
                <>
                  <div key={item.id} className={styles.productItem}>
                    <Flex align="start" vertical gap="middle">
                      <p className={styles.itemTitle}>{getProductText(item.nameKey, 'name')}</p>
                      <Avatar shape="square" src={item.images[0]} className={styles.productAvatar} />
                    </Flex>
                    <Flex gap="middle" vertical>
                      <div>
                        {' '}
                        <strong>{t('product.availability')}</strong>{' '}
                        {item.inStock ? t('product.inStock') : t('product.outOfStock')}
                      </div>
                      <p className={styles.itemPrice}>
                        {item.price} {item.currency}
                      </p>
                      <Flex gap="middle">
                        <BaseButton onClick={() => dispatch(removeWishlistItem(item.id))}>
                          {' '}
                          {t('account.remove')}
                        </BaseButton>
                        <BaseButton onClick={() => dispatch(moveWishlistToBookings(item.id))}>
                          {' '}
                          {t('account.book')}
                        </BaseButton>
                      </Flex>
                    </Flex>
                  </div>
                  {index < wishlist.length - 1 && <Divider className={styles.accountDivider} />}
                </>
              ))
            ) : (
              <Text type="secondary">{t('wishlist.empty')}</Text>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WishlistItem;
