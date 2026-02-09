// src/animations.js
export const luxuryTransition = {
  duration: 1.8,
  ease: [0.19, 1, 0.22, 1] as const,
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: luxuryTransition,
  },
};

export const imageReveal = {
  hidden: { clipPath: 'inset(0 100% 0 0)', scale: 1.1 },
  visible: {
    clipPath: 'inset(0 0% 0 0)',
    scale: 1,
    transition: { ...luxuryTransition, duration: 2.2 },
  },
};
