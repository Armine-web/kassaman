import type { Variants } from 'framer-motion';

export const GRID_CONTAINER_ANIMATION: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, 
      delayChildren: 0.2,
    }
  }
};

export const CARD_ANIMATION: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const INITIAL_VISIBLE_COUNT = 8;
export const LOAD_MORE_COUNT = 4;