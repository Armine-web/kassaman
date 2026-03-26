import { Card, Avatar, Typography, Divider, Flex } from 'antd';
import { useAppSelector, useAppDispatch } from '../../../../store/hook';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.css';
import { removeBookingItem } from '../../../../store/slices/accountSlice';
import BaseButton from '../../../../components/common/buttons/BaseButton';

const { Text } = Typography;
const BookingItem = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { bookings } = useAppSelector(state => state.account);

  return (
    <section className="">
      <div className={styles.accountSection}>
        <div className={styles.accountWrapper}>
          <Card title={t('account.bookings')} className={styles.accountCard}>
            {bookings.length > 0 ? (
              bookings.map((item, index) => (
                <div key={item.id}>
                  <div className={styles.productItem}>
                    <Flex align='start' vertical gap="middle">
                      <div>{item.title}</div>{' '}
                      <Avatar shape="square" src={item.image} className={styles.productAvatar} />
                    </Flex>
                    <Flex  vertical gap="large">
                      <div>
                        {' '}
                        <strong>{t('product.availability')}</strong>{' '}
                        {item.inStock ? t('product.inStock') : t('product.outOfStock')}
                      </div>
                      <div>
                        <Text strong>
                          {item.price} {item.currency}
                        </Text>
                      </div>
                      <div>
                        <BaseButton onClick={() => dispatch(removeBookingItem(item.id))}>
                          {t('account.remove')}
                        </BaseButton>
                      </div>
                    </Flex>
                  </div>

                  {index < bookings.length - 1 && <Divider className={styles.accountDivider}/>}
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
