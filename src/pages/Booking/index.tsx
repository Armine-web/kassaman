import { Form, Card, Avatar, Typography, Flex, Divider, message, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../store/hook';
import {
  updateContactInfo,
  removeSelectedItem,
  increaseQuantity,
  decreaseQuantity,
} from '../../store/slices/bookingSlice';
import { addBookings } from '../../store/slices/accountSlice';
import { useTranslation } from 'react-i18next';
import type { ContactInfo } from '../../types/contact';
import { getProductText } from '../../i18n/utils/product';
import styles from './styles.module.css';
import { Line } from '../../components/common/AppearingLines';
import BaseButton from '../../components/common/buttons/BaseButton';

const { Title, Text } = Typography;

const BookingPage = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { selectedItems } = useAppSelector(state => state.booking);

  const handleValuesChange = (changedValues: Partial<ContactInfo>) => {
    dispatch(updateContactInfo(changedValues));
  };

  const handleRemoveItem = (id: string) => {
    dispatch(removeSelectedItem(id));
  };

  const onFinish = () => {
    if (selectedItems.length === 0) {
      message.warning(t('checkout.noItemsSelected'));
      return;
    }

    const mappedBookings = selectedItems.map(item => ({
      id: item.id,
      title: getProductText(item.nameKey, 'name'),
      price: item.price,
      currency: item.currency,
      image: item.images?.[0] || '',
      inStock: item.inStock ?? true,
      date: new Date().toISOString(),
      quantity: item.quantity || 1, // preserve quantity
    }));

    dispatch(addBookings(mappedBookings));

    navigate('/checkout');
  };

  const total = selectedItems.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  return (
    <section className={`container ${styles.bookingSection}`}>
      <Title level={2} className={styles.bookingTitle}>
        {t('booking.description')}
      </Title>
      <Flex vertical gap="small" align="center">
        <Line thin />
        <Line />
      </Flex>

      <div className={styles.bookingWrapper}>
        <Card className={styles.bookingCard}>
          {selectedItems.length > 0 ? (
            <>
              {selectedItems.map(item => (
                <div key={item.id}>
                  <div className={styles.productMain}>
                    <Flex align="center" gap="middle" className={styles.firstItem}>
                      <Avatar
                        shape="square"
                        src={item.images?.[0] || ''}
                        className={styles.productAvatar}
                      />
                      <Text className={styles.productTitle}>
                        {getProductText(item.nameKey, 'name')}
                      </Text>
                    </Flex>

                    <Flex align="center" gap="middle" className={styles.productControlsWrapper}>
                      <Button onClick={() => dispatch(decreaseQuantity(item.id))} type="text">
                        <Text className={styles.productControlsText}>-</Text>
                      </Button>
                      <Text className={styles.productControlsText}>{item.quantity || 1}</Text>
                      <Button onClick={() => dispatch(increaseQuantity(item.id))} type="text">
                        <Text className={styles.productControlsText}>+</Text>
                      </Button>
                    </Flex>

                    <Text className={styles.productPrice}>
                      {(item.price * (item.quantity || 1)).toFixed(2)} {item.currency}
                    </Text>

                    <BaseButton
                      onClick={() => handleRemoveItem(item.id)}
                      underlineColor="red"
                      className={styles.bookingRemoveButton}
                    >
                      {t('booking.remove')}
                    </BaseButton>
                  </div>

                  <Divider className={styles.cardDivaider} />
                </div>
              ))}

              <div className={styles.contactFormButton}>
                <Text strong>
                  {t('booking.total')}{' '}
                  <span className={styles.totalPrice}>
                    {total.toFixed(2)} {selectedItems[0]?.currency}
                  </span>
                </Text>

                <Form form={form} onValuesChange={handleValuesChange} onFinish={onFinish}>
                  <BaseButton>{t('booking.confirmButton')}</BaseButton>
                </Form>
              </div>
            </>
          ) : (
            <Text type="secondary">{t('booking.noItemsSelected')}</Text>
          )}
        </Card>
      </div>

      <Flex vertical gap="small" align="center">
        <Line thin />
        <Line />
      </Flex>
    </section>
  );
};

export default BookingPage;
