import type { CheckoutFormValues } from '../../types';
import type { TFunction } from 'i18next';
import type { FormInstance } from 'antd';

export type ContactProps = {
  form: FormInstance<CheckoutFormValues>;
  t: TFunction;
}