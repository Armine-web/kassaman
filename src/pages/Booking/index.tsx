import { Form, Button, Card, Avatar, Typography, Flex, Divider, Checkbox } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useAppSelector, useAppDispatch } from '../../store/hook';
import {
  updateContactInfo,
  removeSelectedItem,
  increaseQuantity,
  decreaseQuantity,
} from '../../store/slices/bookingSlice';
import ContactFields from '.././../components/common/Contact/components/ContactFields';
import { useTranslation } from 'react-i18next';
import { requiredRule } from '../../components/common/Contact/validation';
import type { ContactInfo } from '../../types/contact';
import { getProductText } from '../../i18n/utils/product';
import styles from './styles.module.css';

const { Title, Text } = Typography;

const BookingPage = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();

  const { selectedItems, contactInfo } = useAppSelector(state => state.booking);

  const handleValuesChange = (changedValues: Partial<ContactInfo>) => {
    dispatch(updateContactInfo(changedValues));
  };

  const handleRemoveItem = (id: string) => {
    dispatch(removeSelectedItem(id));
  };

  const onFinish = (values: ContactInfo) => {
    console.log('Booking Data:', { products: selectedItems, contact: values });
  };

  return (
    <section className={`container ${styles.bookingSection}`}>
      <Title level={2} className={styles.bookingTitle}>
        {t('booking.description')}
      </Title>
      <div className={styles.bookingWrapper}>
        <Card className={styles.bookingCard}>
          {selectedItems.length > 0 ? (
            selectedItems.map((item, index) => (
              <div key={item.id}>
                <div className={styles.productItem}>
                  <Flex align="start" gap="middle" className={styles.productMain}>
                    <Avatar shape="square" src={item.images[0]} className={styles.productAvatar} />

                    <div>
                      <div>{getProductText(item.nameKey, 'name')}</div>
                      <Text type="secondary">
                        {item.price} {item.currency}
                      </Text>
                    </div>
                  </Flex>

                  <Flex align="center" gap="middle" className={styles.productControls}>
                    <Flex align="center" gap="middle" className={styles.productControlsWrapper}>
                      <Button onClick={() => dispatch(decreaseQuantity(item.id))} type="text">
                        -
                      </Button>
                      <Text>{item.quantity || 1}</Text>
                      <Button onClick={() => dispatch(increaseQuantity(item.id))} type="text">
                        +
                      </Button>
                    </Flex>
                    <Button
                      danger
                      type="text"
                      icon={<DeleteOutlined className={styles.deleteIcon} />}
                      onClick={() => handleRemoveItem(item.id)}
                    />
                  </Flex>
                </div>
                <Text type="secondary">{getProductText(item.nameKey, 'description')}</Text>
                <Divider className={styles.cardDivaider} />
                {index < selectedItems.length - 1 && <Divider className={styles.cardDivaider} />}
              </div>
            ))
          ) : (
            <Text type="secondary">{t('booking.noItemsSelected')}</Text>
          )}
        </Card>

        <Card title={t('booking.contactDetails')} className={styles.bookingCard}>
          <Form
            form={form}
            layout="vertical"
            initialValues={contactInfo}
            onValuesChange={handleValuesChange}
            onFinish={onFinish}
          >
            <ContactFields />
            <Form.Item
              name="consent"
              valuePropName="checked"
              rules={[requiredRule(t('contact.consentRequired'))]}
            >
              <Checkbox className={styles.customCheckbox}>{t('booking.consentText')}</Checkbox>
            </Form.Item>
            <Button className={styles.contactFormButton} type="primary" htmlType="submit">
              {t('booking.confirmButton')}
            </Button>
          </Form>
        </Card>
      </div>
    </section>
  );
};

export default BookingPage;
