import { useReducedMotion } from "framer-motion";

export const EASE_OUT_QUINT = [0.22, 1, 0.36, 1] as const;
export const EASE_IN_OUT = [0.76, 0, 0.24, 1] as const;
export const EASE_SPRING = { type: "spring", stiffness: 100, damping: 20 } as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: EASE_OUT_QUINT },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: EASE_OUT_QUINT },
  },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: EASE_OUT_QUINT },
  },
};

export const fadeRight = {
  hidden: { opacity: 0, x: 48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: EASE_OUT_QUINT },
  },
};

export const scaleUp = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: EASE_OUT_QUINT },
  },
};

export const staggerContainer = (staggerDelay = 0.1, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: staggerDelay, delayChildren },
  },
});

export const heroSequence = {
  eyebrow: {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6, ease: EASE_OUT_QUINT } },
  },
  heading: {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.35, duration: 0.9, ease: EASE_OUT_QUINT } },
  },
  subtext: {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.7, ease: EASE_OUT_QUINT } },
  },
  buttons: {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.65, duration: 0.6, ease: EASE_OUT_QUINT } },
  },
  scroll: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 1.1, duration: 0.8, ease: EASE_OUT_QUINT } },
  },
};

export const overlayVariants = {
  rest: { y: 24, opacity: 0 },
  hover: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.35, ease: EASE_OUT_QUINT },
  },
};

export function useMotionVariants() {
  const reduce = useReducedMotion();
  if (reduce) {
    const simple = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
    return { fadeUp: simple, fadeIn: simple, fadeLeft: simple, fadeRight: simple, scaleUp: simple };
  }
  return { fadeUp, fadeIn, fadeLeft, fadeRight, scaleUp };
}
