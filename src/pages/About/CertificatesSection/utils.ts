import type { TFunction } from 'i18next';
import type { CertificatesContent } from './types';

export const getCertificatesContent = (t: TFunction): CertificatesContent => ({
  title: t('aboutUs.certificates.title'),
  subtitle: t('aboutUs.certificates.subtitle')
});