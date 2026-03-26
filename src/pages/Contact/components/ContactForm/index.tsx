import { useTranslation } from 'react-i18next';
import formImg from '../../../../assets/img/contact/form-img.png';
import styles from './styles.module.css';
import { App } from 'antd';
import { Form, Button, Checkbox, Input, Select } from 'antd';
import ContactFields from '../../../../components/common/Contact/components/ContactFields';
import { postContact } from '../../../../api/contact';
import { requiredRule } from '../../../../components/common/Contact/validation';
import type { ContactRequest } from '../../../../components/common/Contact/types';

const ContactForm = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm<ContactRequest>();
  const { message } = App.useApp();
  const onFinish = async (values: ContactRequest) => {
    console.log(values);
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
          <Form<ContactRequest> form={form} layout="vertical" onFinish={onFinish}>
            <ContactFields />

            <Form.Item
              name="topic"
              rules={[requiredRule(t('contact.required'))]}
            >
              <Select placeholder={t('contact.selectTopic')} className={styles.contactFormSelect} size="large">
                {' '}
                <Select.Option value="general">{t('contact.topicGeneral')}</Select.Option>{' '}
                <Select.Option value="booking">{t('contact.topicBooking')}</Select.Option>{' '}
                <Select.Option value="repair">{t('contact.topicRepair')}</Select.Option>{' '}
                <Select.Option value="custom">{t('contact.topicCustom')}</Select.Option>{' '}
              </Select>
            </Form.Item>

            <Form.Item
              name="message"
              rules={[requiredRule(t('contact.required'))]}
            >
              <Input.TextArea rows={4} placeholder={t('contact.message')}/>
            </Form.Item>

            <Form.Item
              name="consent"
              valuePropName="checked"
              rules={[requiredRule(t('contact.consentRequired'))]}
            >
              <Checkbox className={styles.customCheckbox}>{t('contact.consentText')}</Checkbox>
            </Form.Item>

            <Button className={styles.contactFormButton} htmlType="submit">
              {t('contact.submit')}
            </Button>
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
