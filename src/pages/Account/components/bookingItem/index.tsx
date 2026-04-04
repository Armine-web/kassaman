import { Card, Avatar, Typography, Divider, Flex } from 'antd';
import { useAppSelector, useAppDispatch } from '../../../../store/hook';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.css';
import { removeSelectedItem } from '../../../../store/slices/bookingSlice';
import BaseButton from '../../../../components/common/buttons/BaseButton';
import { getProductText } from '../../../../i18n/utils/product';

const { Text } = Typography;

const BookingItem = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const { selectedItems } = useAppSelector(state => state.booking);

  return (
    <section className="">
      <div className={styles.accountSection}>
        <div className={styles.accountWrapper}>
          <Card title={t('account.bookings')} className={styles.accountCard}>
            {selectedItems.length > 0 ? (
              selectedItems.map((item, index) => (
                <div key={item.id}>
                  <div className={styles.productItem}>
                    <Flex align="start" vertical gap="middle">
                      <div className={styles.bookingItemTitle}>
                        {getProductText(item.nameKey, 'name')}
                      </div>
                      <Avatar
                        shape="square"
                        src={item.images?.[0] || ''}
                        className={styles.productAvatar}
                      />
                    </Flex>

                    <Flex vertical gap="large">
                      <div>
                        <strong>{t('product.availability')}</strong>{' '}
                        {item.inStock ? t('product.inStock') : t('product.outOfStock')}
                      </div>

                      <div>
                        <Text strong className={styles.bookingItemPrice}>
                          {(item.price * (item.quantity || 1)).toFixed(2)} {item.currency}
                        </Text>
                      </div>

                      <div>
                        <BaseButton onClick={() => dispatch(removeSelectedItem(item.id))}>
                          {t('account.remove')}
                        </BaseButton>
                      </div>
                    </Flex>
                  </div>

                  {index < selectedItems.length - 1 && (
                    <Divider className={styles.accountDivider} />
                  )}
                </div>
              ))
            ) : (
              <Text type="secondary">{t('account.noBookings')}</Text>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingItem;
