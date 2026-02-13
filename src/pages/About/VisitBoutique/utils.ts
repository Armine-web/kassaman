import type { TFunction } from 'i18next';
import type { VisitBoutiqueContent } from './types';

export const getVisitContent = (t: TFunction): VisitBoutiqueContent => ({
  title: t('aboutUs.visit.title'),
  subtitle: t('aboutUs.visit.subtitle'),
  description: t('aboutUs.visit.description'),
  buttonText: t('aboutUs.visit.button')
});