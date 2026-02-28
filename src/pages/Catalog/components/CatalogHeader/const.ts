import type { HeaderImage } from './types';
import type { Variants } from 'framer-motion';

import ringSwarovsky from '../../../../assets/img/catalog/ringSwarovsky.jpg';
import catalogNackles from '../../../../assets/img/catalog/catalogNackles.jpg';
import catalogItems from '../../../../assets/img/catalog/catalogItems.jpg';
import silverBraclet from '../../../../assets/img/catalog/silverBraclet.jpg';
import goldCross from '../../../../assets/img/catalog/goldCross.jpg';
import catalogCafflink from '../../../../assets/img/catalog/catalogCafflink.jpg';

export const HEADER_IMAGES: HeaderImage[] = [
  {
    id: 1,
    src: ringSwarovsky,
    alt: 'Swarovsky Ring',
    category: 'rings',
    title: 'Rings',
    description: 'Eternal symbols of love',
    delay: 0,
  },
  {
    id: 2,
    src: catalogNackles,
    alt: 'Luxury Chain Necklace',
    category: 'necklaces',
    title: 'Necklaces',
    description: 'Graceful statements',
    delay: 0.1,
  },
  {
    id: 3,
    src: catalogItems,
    alt: 'Our Brand',
    category: 'earrings',
    title: 'Earrings',
    description: 'Sparkling elegance',
    delay: 0.2,
  },
  {
    id: 4,
    src: silverBraclet,
    alt: 'Silver Bracelet',
    category: 'bracelets',
    title: 'Bracelets',
    description: 'Timeless adornments',
    delay: 0.3,
  },
  {
    id: 5,
    src: goldCross,
    alt: 'Gold Cross',
    category: 'pendants',
    title: 'Pendants',
    description: 'Sacred elegance',
    delay: 0.4,
  },
  {
    id: 6,
    src: catalogCafflink,
    alt: 'Catalog Cufflink',
    category: 'cufflinks',
    title: 'Cufflinks',
    description: 'Sophisticated style',
    delay: 0.5,
  },
];

export const PREVIEW_IMAGES = {
  ringSwarovsky,
  catalogNackles,
  catalogItems,
  silverBraclet,
  goldCross,
  catalogCafflink,
} as const;

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40, 
    clipPath: "inset(100% 0% 0% 0%)" 
  },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: 1.2,
      ease: [0.19, 1, 0.22, 1],
    },
  },
};
