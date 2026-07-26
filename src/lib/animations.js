// Custom easing curve — smooth, high-end editorial feel
export const ease = [0.16, 1, 0.3, 1];

export const transitionDefaults = {
  duration: 0.8,
  ease,
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transitionDefaults },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: transitionDefaults },
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -35 },
  visible: { opacity: 1, y: 0, transition: transitionDefaults },
};

export const scaleUp = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: transitionDefaults },
};

export const lineDraw = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.1, ease },
  },
};

export const staggerContainer = (staggerDelay = 0.08, delayChildren = 0.1) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren,
    },
  },
});

export const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
};
