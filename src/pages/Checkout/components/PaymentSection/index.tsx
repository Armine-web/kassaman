import { Form, Radio, Checkbox, Divider, Input, Flex, Tooltip, Typography } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import type { PaymentProps } from './types';
import { PAYMENT_METHODS } from '../../const';
import styles from './styles.module.css';

const { Text } = Typography;
const PaymentSection = ({ t, form }: PaymentProps) => {
  const paymentMethod = Form.useWatch('paymentMethod', form);

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    const formatted = value.match(/.{1,4}/g)?.join(' ') || value;
    form.setFieldValue(['paymentDetails', 'cardNumber'], formatted);
  };

  return (
    <div className={styles.sectionContainer}>
      <Divider titlePlacement="left" className={styles.goldDivider}>
        {t('checkoutPage.paymentMethod')}
      </Divider>

      <Form.Item
        name="paymentMethod"
        rules={[{ required: true, message: t('validation.required') }]}
      >
        <Radio.Group className={styles.paymentRadioGroup}>
          {[...PAYMENT_METHODS].map(method => (
            <Radio key={method.value} value={method.value}>
              <span className={styles.radioLabel}>{t(`payment.${method.value}`)}</span>
            </Radio>
          ))}
        </Radio.Group>
      </Form.Item>

      {paymentMethod === 'card' && (
        <div className={styles.cardDetailsWrapper}>
          <Form.Item
            name={['paymentDetails', 'cardNumber']}
            label={t('labels.cardNumber')}
            rules={[{ required: true, min: 19, message: t('validation.invalidCard') }]}
          >
            <Input
              placeholder="0000 0000 0000 0000"
              className={styles.minimalInput}
              maxLength={19}
              onChange={handleCardNumberChange}
            />
          </Form.Item>

          <Flex gap="middle">
            <Form.Item
              name={['paymentDetails', 'expiry']}
              label={t('labels.expiry')}
              style={{ flex: 1 }}
              rules={[
                { required: true, pattern: /^(0[1-9]|1[0-2])\/?([0-9]{2})$/, message: 'MM/YY' },
              ]}
            >
              <Input placeholder="MM/YY" className={styles.minimalInput} maxLength={5} />
            </Form.Item>

            <Form.Item
              name={['paymentDetails', 'cvv']}
              label={
                <span>
                  CVV&nbsp;
                  <Tooltip title="3 digits on back">
                    <QuestionCircleOutlined style={{ fontSize: '12px' }} />
                  </Tooltip>
                </span>
              }
              style={{ flex: 1 }}
              rules={[{ required: true, len: 3, message: '***' }]}
            >
              <Input
                placeholder="•••"
                type="password"
                className={styles.minimalInput}
                maxLength={3}
              />
            </Form.Item>
          </Flex>
        </div>
      )}

      {paymentMethod === 'paypal' && (
        <div className={styles.methodInfoBox}>
          <Text type="secondary">{t('checkoutPage.paypalRedirectNote')}</Text>
        </div>
      )}

      {paymentMethod === 'bank' && (
        <div className={styles.methodInfoBox}>
          <Text strong>{t('labels.bankName')}:</Text> <Text>Ameria Bank</Text>
          <br />
          <Text strong>{t('labels.accountNumber')}:</Text> <Text>1234 5678 9012 3456</Text>
          <br />
          <Text strong>{t('labels.beneficiary')}:</Text> <Text>Luxury Boutique LLC</Text>
          <p style={{ marginTop: '10px', fontSize: '12px', color: '#888' }}>
            {t('checkoutPage.bankTransferNote')}
          </p>
        </div>
      )}

      <Form.Item
        name="consent"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error(t('contactCheckout.consentRequired'))),
          },
        ]}
      >
        <Checkbox className={styles.customCheckbox}>{t('booking.consentText')}</Checkbox>
      </Form.Item>
    </div>
  );
};

export default PaymentSection;
