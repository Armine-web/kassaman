import type { TFunction } from 'i18next';
import type { WorkshopContent } from './types';

export const getWorkshopContent = (t: TFunction): WorkshopContent => ({
  title: t('aboutUs.workshop.title'),
  subtitle: t('aboutUs.workshop.subtitle'),
    description: t('aboutUs.workshop.description')
});