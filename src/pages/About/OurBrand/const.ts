import brandImg from '../../../assets/img/about/inProgress.jpg';
import type { AnimationVariants } from './types';

export const STORY_ASSETS = {
  image: brandImg,
};

export const fadeUp: AnimationVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] } 
  },
};

export const stagger: AnimationVariants = {
  visible: { 
    transition: { staggerChildren: 0.2 } 
  },
};