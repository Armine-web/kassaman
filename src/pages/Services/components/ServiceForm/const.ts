import type { ServiceOption } from './types';


import formImg from '../../../../assets/img/services/formImg.jpg';

export const SERVICE_FORM_IMAGE = formImg;

export const SERVICE_OPTIONS: ServiceOption[] = [
  { value: 'repair', labelKey: 'service.items.repair.title' },
  { value: 'cleaning', labelKey: 'service.items.cleaning.title' },
  { value: 'custom', labelKey: 'service.items.custom.title' },
];
