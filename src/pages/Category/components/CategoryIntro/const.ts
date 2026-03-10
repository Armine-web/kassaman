import type { Variants } from 'framer-motion';

import ourBrend from '../../../../assets/img/catalog/ourBrand.webp';
import luxuaryNecklates from '../../../../assets/img/category/luxuaryNecklate.jpg';
import categorycufflinks from '../../../../assets/img/category/categorycufflinks.jpg';

export const MASTER_IMAGES = {
  main: ourBrend,
  left: luxuaryNecklates,
  right: categorycufflinks,
} as const;

export const MASTER_ANIMATIONS: Record<string, Variants> = {
  reveal: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] },
    },
  },
  zoom: {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 2, ease: 'easeOut' },
    },
  },
};

export const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};
