
export const luxuryTransition = {
  duration: 1.8,
  ease: [0.19, 1, 0.22, 1],
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

export const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};


export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

export const imageScaleReveal = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};
