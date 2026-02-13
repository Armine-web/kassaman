import type{ Variants } from 'framer-motion';

export type AboutContent = {
  title: string;
  description: string[];
}

export type AnimationVariants = {
  fadeInUp: Variants;
  imageReveal: Variants;
  stagger: Variants;
}