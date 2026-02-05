import type { TFunction } from 'i18next';
import type { GalleryImage } from '../PhilosophyGallery/types';

export const getImagesDesc = (images: GalleryImage[], t: TFunction): GalleryImage[] => {
  return images.map(img => ({ ...img, alt: t(`home.philosophy.images.${img.key}`) }));
};
