import type { TFunction } from 'i18next';
import type { OurBrandContent } from './types';

export const getOurBrandContent = (t: TFunction): OurBrandContent => ({
  title: t('aboutUs.ourBrand.title'),
  description: t('aboutUs.ourBrand.description', { returnObjects: true }) as string[],
});
