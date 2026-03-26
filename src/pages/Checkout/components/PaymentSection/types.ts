import type { FormInstance } from 'antd';

export type PaymentProps = {
  t: (key: string) => string;
  form: FormInstance;
};
