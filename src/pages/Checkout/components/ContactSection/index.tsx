import { Form, Input, Select, Divider } from 'antd';
import { CONTACT_METHODS } from '../../const';
import type { ContactProps } from './types';
import styles from '../../styles.module.css';

const ContactSection = ({ form, t }: ContactProps) => {
  const preferredContact = Form.useWatch(['customer', 'preferredContact'], form);

  return (
    <div className={styles.sectionContainer}>
      <Divider titlePlacement="left" className={styles.goldDivider}>
        {t('checkoutPage.contactTitle')}
      </Divider>

      <Form.Item
        name={['customer', 'name']}
        label={t('labels.fullName')}
        rules={[{ required: true, message: t('validation.required') }]}
      >
        <Input className={styles.minimalInput} placeholder={t('placeholders.name')} />
      </Form.Item>

      <div className={styles.row}>
        <Form.Item
          name={['customer', 'phone']}
          label={t('labels.phone')}
          rules={[{ required: true, message: t('validation.required') }]}
          style={{ flex: 1 }}
        >
          <Input className={styles.minimalInput} placeholder="+374..." />
        </Form.Item>

        <Form.Item
          name={['customer', 'preferredContact']}
          label={t('labels.contactMethod')}
          style={{ flex: 1 }}
        >
          <Select
            options={[...CONTACT_METHODS]}
            className={styles.minimalSelect}
            // variant="borderless"
          />
        </Form.Item>
      </div>

      {preferredContact === 'telegram' && (
        <Form.Item
          name={['customer', 'telegram']}
          label={t('labels.telegram')}
          rules={[{ required: true, message: t('validation.requiredTelegram') }]}
        >
          <Input
            className={styles.minimalInput}
            placeholder="@username"
            prefix={<span style={{ color: '#c5a059' }}>@</span>}
          />
        </Form.Item>
      )}

      <Form.Item
        name={['customer', 'email']}
        label={t('labels.email')}
        rules={[{ type: 'email', message: t('validation.invalidEmail') }]}
      >
        <Input className={styles.minimalInput} type="email" placeholder="example@mail.com" />
      </Form.Item>
    </div>
  );
};

export default ContactSection;
