import { Form, DatePicker, TimePicker, Divider, Input } from 'antd';
import type { VisitProps } from './types';
import styles from '../../styles.module.css';

const VisitDetailsSection = ({ t }: VisitProps) => (
  <div className={styles.sectionContainer}>
    <Divider titlePlacement="left" className={styles.goldDivider}>
      {t('checkoutPage.visitDetails')}
    </Divider>

    <div className={styles.row}>
      <Form.Item
        name={['visit', 'date']}
        label={t('labels.date')}
        rules={[{ required: true }]}
        style={{ flex: 1 }}
      >
        <DatePicker className={styles.minimalInput} style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        name={['visit', 'time']}
        label={t('labels.time')}
        rules={[{ required: true }]}
        style={{ flex: 1 }}
      >
        <TimePicker format="HH:mm" className={styles.minimalInput} style={{ width: '100%' }} />
      </Form.Item>
    </div>

    <Form.Item name="comment" label={t('labels.comment')}>
      <Input.TextArea rows={3} className={styles.minimalTextarea} />
    </Form.Item>
  </div>
);

export default VisitDetailsSection;
