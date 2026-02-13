import type { Variants } from 'framer-motion';

export type GalleryItem = {
  id: number;
  src: string;
  alt: string;
  size: 'large' | 'medium' | 'small' | 'wide';
}

export type WorkshopContent = {
  title: string;
  subtitle: string;
  description: string;
}

export type AnimationVariants = {
  fadeInUp: Variants;
  imageReveal: Variants;
  stagger: Variants;
}