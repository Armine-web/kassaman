import { useState } from 'react';
import { Form, Button, Typography, message, Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../store/hook';

import BookingSummary from './components/BookingSummary';
import ContactSection from './components/ContactSection';
import VisitDetailsSection from './components/VisitDetailsSection';
import PaymentSection from './components/PaymentSection';

import { submitBooking } from './utils';
import type { CheckoutFormValues, BookingRequest } from './types';
import styles from './styles.module.css';

const { Title } = Typography;

const CheckoutPage = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm<CheckoutFormValues>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const { selectedItems } = useAppSelector(state => state.booking);

  const onFinish = async (values: CheckoutFormValues): Promise<void> => {
    if (selectedItems.length === 0) {
      message.warning(t('checkoutPage.noItemsSelected'));
      return;
    }

    setLoading(true);
    try {
      const payload: BookingRequest = {
        items: selectedItems.map(item => ({
          productId: item.id,
          quantity: item.quantity,
        })),
        customer: values.customer,
        visit: {
          date: values.visit.date.format('YYYY-MM-DD'),
          time: values.visit.time.format('HH:mm'),
          storeId: 'yerevan_main',
        },
        paymentMethod: values.paymentMethod,
        comment: values.comment,
      };

      const success = await submitBooking(payload);

      if (success) {
        message.success(t('checkoutPage.successMessage'));
        navigate('/catalog');
      }
    } catch (error: unknown) {
      console.error('Booking failed:', error);
      message.error(t('checkoutPage.errorMessage'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={`container ${styles.checkoutSection}`}>
      <header className={styles.checkoutHeader}>
        <Title level={2} className={styles.checkoutTitle}>
          {t('checkoutPage.header')}
        </Title>
      </header>

      <div className={styles.checkoutWrapper}>
        <BookingSummary items={selectedItems} t={t} />

        <Card className={styles.formCard} variant="borderless">
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            requiredMark={false}
            initialValues={{
              customer: { preferredContact: 'phone' },
              paymentMethod: 'cash',
            }}
          >
            <ContactSection form={form} t={t} />
            <VisitDetailsSection t={t} />
            <PaymentSection t={t} form={form} />

            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              className={styles.submitBtn}
              block
            >
              {t('bookingCheckout.placeOrder')}
            </Button>
          </Form>
        </Card>
      </div>
    </section>
  );
};

export default CheckoutPage;
