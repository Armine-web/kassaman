import { useState } from 'react';
import { Form, Input, Select } from 'antd';
import { useTranslation } from 'react-i18next';
import { emailRule, phoneRule, requiredRule } from '../validation';
import type { ContactRequest } from '../types';
import styles from './styles.module.css';


const ContactFields = () => {
  const { t } = useTranslation();
  const [preferredMethod, setPreferredMethod] =
    useState<ContactRequest['preferredContact']>('phone');

  return (
    <>
      <Form.Item
        name="fullName"
        rules={[requiredRule(t('contact.required'))]}
      >
        <Input placeholder={t('contact.fullName')}size="large" />
      </Form.Item>

      <Form.Item
        name='phone'
        rules={[phoneRule(t('contact.invalidPhone'))]}
      >
        <Input placeholder={t('contact.phone')} size="large"/>
      </Form.Item>

      <Form.Item 
      name="email" rules={[emailRule]}>
        <Input placeholder="example@mail.com" size="large"/>
      </Form.Item>

      <Form.Item
        name="preferredContact"
        initialValue={t('contact.preferredContact')}
        rules={[requiredRule(t('contact.required'))]}
      >
        <Select onChange={value => setPreferredMethod(value)} size="large"className={styles.formSelect}>
          <Select.Option value="phone">{t('contact.phone')}</Select.Option>
          <Select.Option value="telegram">{t('contact.telegram')}</Select.Option>
          <Select.Option value="email">{t('contact.email')}</Select.Option>
        </Select>
      </Form.Item>

      {preferredMethod === 'telegram' && (
        <Form.Item
          name="telegram"
          rules={[requiredRule(t('contact.required'))]}
        >
          <Input placeholder="@username" size="large" />
        </Form.Item>
      )}
    </>
  );
};

export default ContactFields;
