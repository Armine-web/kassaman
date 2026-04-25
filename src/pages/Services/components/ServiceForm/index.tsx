import { useState } from 'react';
import { Form, Input, Select, Button, message as antMessage } from 'antd';
import { useTranslation } from 'react-i18next';
import { SERVICE_OPTIONS, SERVICE_FORM_IMAGE } from './const';
import type { IServiceInquiry } from './types';
import { postServiceInquiry } from '../../../../api/services';
import styles from './styles.module.css';

const { Option } = Select;

export default function ServiceForm() {
  const { t } = useTranslation('');
  const [form] = Form.useForm<IServiceInquiry>();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: IServiceInquiry) => {
    setLoading(true);
    try {
      const response = await postServiceInquiry(values);

      if (response.success) {
        antMessage.success(t('service.form.success_msg'));
        form.resetFields();
      }
    } catch (error) {
      antMessage.error(t('service.form.error_msg') || 'Connection failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.splitSection}>
      <div className={styles.wrapper}>
        <div className={styles.imageSide}>
          <img src={SERVICE_FORM_IMAGE} alt="Kassaman Atelier" className={styles.sideImage} />
          <div className={styles.imageOverlay}>
            <span className={styles.overlayText}>{t('service.hero.kicker')}</span>
          </div>
        </div>

        <div className={styles.formSide}>
          <div className={styles.header}>
            <h2>{t('service.form.title')}</h2>
            <p>{t('service.form.subtitle')}</p>
          </div>

          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            requiredMark={false}
            className={styles.antForm}
          >
            <Form.Item
              name="fullName"
              rules={[{ required: true, message: t('service.form.val_name') }]}
            >
              <Input placeholder={t('service.form.name')} className={styles.minimalInput} />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[{ required: true, type: 'email', message: t('service.form.val_email') }]}
            >
              <Input placeholder={t('service.form.email')} className={styles.minimalInput} />
            </Form.Item>

            <Form.Item
              name="serviceType"
              rules={[{ required: true, message: t('service.form.val_service') }]}
            >
              <Select
                placeholder={t('service.form.service')}
                className={styles.minimalSelect}
                bordered={false}
              >
                {SERVICE_OPTIONS.map(opt => (
                  <Option key={opt.value} value={opt.value}>
                    {t(opt.labelKey)}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Button htmlType="submit" className={styles.submitBtn} loading={loading}>
              {t('service.form.submit')}
            </Button>
          </Form>
        </div>
      </div>
    </section>
  );
}
