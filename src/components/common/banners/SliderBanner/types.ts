import type { BANNER_IMAGES } from './const';
import type { BannerCTA } from '../types';

export type BannerImageKey = keyof typeof BANNER_IMAGES;

export type SliderBannerItem = {
  id: string;
  image: BannerImageKey;
  title: string;
  subtitle?: string;
  alt?: string;
  cta?: BannerCTA;
};

export type SliderBannerProps = {
  banners: SliderBannerItem[];
};
