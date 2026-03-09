import { useState } from 'react';
import { Form, Input, Select } from 'antd';
import { useTranslation } from 'react-i18next';
import { emailRule, phoneRule, requiredRule } from '../validation';
import type { ContactRequest } from '../types';

const ContactFields = () => {
  const { t } = useTranslation();
  const [preferredMethod, setPreferredMethod] =
    useState<ContactRequest['preferredContact']>('phone');

  return (
    <>
      <Form.Item
        label={t('contact.fullName')}
        name="fullName"
        rules={[requiredRule(t('contact.required'))]}
      >
        <Input placeholder={t('contact.fullName')} />
      </Form.Item>

      <Form.Item
        label={t('contact.phone')}
        name="phone"
        rules={[phoneRule(t('contact.invalidPhone'))]}
      >
        <Input placeholder="+374" />
      </Form.Item>

      <Form.Item label={t('contact.email')} name="email" rules={[emailRule]}>
        <Input placeholder="example@mail.com" />
      </Form.Item>

      <Form.Item
        label={t('contact.preferredContact')}
        name="preferredContact"
        initialValue="phone"
        rules={[requiredRule(t('contact.required'))]}
      >
        <Select onChange={value => setPreferredMethod(value)}>
          <Select.Option value="phone">{t('contact.phone')}</Select.Option>
          <Select.Option value="telegram">{t('contact.telegram')}</Select.Option>
          <Select.Option value="email">{t('contact.email')}</Select.Option>
        </Select>
      </Form.Item>

      {preferredMethod === 'telegram' && (
        <Form.Item
          label={t('contact.telegramUsername')}
          name="telegram"
          rules={[requiredRule(t('contact.required'))]}
        >
          <Input placeholder="@username" />
        </Form.Item>
      )}
    </>
  );
};

export default ContactFields;
