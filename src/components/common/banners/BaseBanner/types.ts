import type { BannerCTA } from '../types';

export type BaseBannerProps = {
  id: string;
  image: string;
  title?: string;
  subtitle?: string;
  alt?: string;
  cta?: BannerCTA;
  className?: string;
};
