// animations/pageVariants.js
export const pageVariants = {
  enter: (direction) => ({
    x: direction > 0 ? -100 : 100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
};

export const pageTransition = {
  duration: 0.5,
  ease: "easeInOut",
};
