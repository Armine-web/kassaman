import { useState } from 'react';
import { Form, Input, Select, Button, Checkbox, message } from 'antd';
import { useTranslation } from 'react-i18next';
import type { ContactRequest } from './types';
import { postContact } from '../../../../api/contact';
import { emailRule, phoneRule, requiredRule } from './validation';
import formImg from '../../../../assets/img/contact/form-img.png';
import styles from './styles.module.css';

const ContactForm = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm<ContactRequest>();
  const [preferredMethod, setPreferredMethod] = useState<'phone' | 'telegram' | 'email'>('phone');

  const onFinish = async (values: ContactRequest) => {
    try {
      await postContact(values);
      message.success(t('contact.formSuccess'));
      form.resetFields();
    } catch {
      message.error(t('contact.formError'));
    }
  };

  return (
    <div className={styles.contactFormPage}>
      <hr className={styles.contactFormMobHr} />

      <div className="container">
        <hr className={styles.contactFormDecstopHr} />

        <div className={styles.contactFormWrapper}>
          <Form<ContactRequest>
            form={form}
            layout="vertical"
            onFinish={onFinish}
            requiredMark
            className={styles.contactForm}
          >
            <Form.Item
              label={t('contact.fullName')}
              name="fullName"
              rules={[requiredRule(t('contact.required'))]}
            >
              <Input placeholder={t('contact.fullName')} />
            </Form.Item>
            <div className={styles.contactFormItemsWrapper}>
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
            </div>

            <div className={styles.contactFormItemsWrapper}>
              <Form.Item
                label={t('contact.preferredContact')}
                name="preferredContact"
                initialValue="phone"
                rules={[{ required: true, message: t('contact.required') }]}
              >
                <Select
                  onChange={value => setPreferredMethod(value)}
                  className={styles.contactFormSelect}
                >
                  <Select.Option value="phone">{t('contact.phone')}</Select.Option>
                  <Select.Option value="telegram">{t('contact.telegram')}</Select.Option>
                  <Select.Option value="email">{t('contact.email')}</Select.Option>
                </Select>
              </Form.Item>

              {preferredMethod === 'telegram' && (
                <Form.Item
                  className={styles.teleramWrapper}
                  label={t('contact.telegramUsername')}
                  name="telegram"
                  rules={[requiredRule(t('contact.required'))]}
                >
                  <Input placeholder="@username" />
                </Form.Item>
              )}

              <Form.Item
                label={t('contact.topic')}
                name="topic"
                rules={[requiredRule(t('contact.required'))]}
              >
                <Select placeholder={t('contact.selectTopic')} className={styles.contactFormSelect}>
                  <Select.Option value="general">{t('contact.topicGeneral')}</Select.Option>
                  <Select.Option value="booking">{t('contact.topicBooking')}</Select.Option>
                  <Select.Option value="repair">{t('contact.topicRepair')}</Select.Option>
                  <Select.Option value="custom">{t('contact.topicCustom')}</Select.Option>
                </Select>
              </Form.Item>
            </div>

            <Form.Item
              label={t('contact.message')}
              name="message"
              rules={[requiredRule(t('contact.required'))]}
            >
              <Input.TextArea rows={4} placeholder={t('contact.typeMessage')} />
            </Form.Item>

            <Form.Item
              name="consent"
              valuePropName="checked"
              rules={[requiredRule(t('contact.consentRequired'))]}
            >
              <Checkbox className={styles.customCheckbox}>{t('contact.consentText')}</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button className={styles.contactFormButton} type="primary" htmlType="submit">
                {t('contact.submit')}
              </Button>
            </Form.Item>
          </Form>

          <div className={styles.contactFormImageWrapper}>
            <img src={formImg} alt="Contact Us" className={styles.contactFormImage} />
          </div>
        </div>

        <hr className={styles.contactFormDecstopHr} />
      </div>

      <hr className={styles.contactFormMobHr} />
    </div>
  );
};

export default ContactForm;
