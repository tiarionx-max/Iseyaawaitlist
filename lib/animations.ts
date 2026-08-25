import type { Transition, TargetAndTransition } from "motion/react";

export type SimpleVariants = {
  hidden: TargetAndTransition;
  visible: TargetAndTransition;
};

/** Shared easing curves — used by both Motion and CSS transitions. */
export const EASE_EDITORIAL: Transition["ease"] = [0.22, 1, 0.36, 1];
export const EASE_OUT_SOFT: Transition["ease"] = [0.16, 1, 0.3, 1];

export const fadeUp: SimpleVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_EDITORIAL },
  },
};

export const fadeIn: SimpleVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: EASE_EDITORIAL } },
};

export const scaleSettle: SimpleVariants = {
  hidden: { opacity: 0, scale: 1.04 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: EASE_EDITORIAL },
  },
};

export const maskReveal: SimpleVariants = {
  hidden: { y: "100%" },
  visible: {
    y: "0%",
    transition: { duration: 0.8, ease: EASE_EDITORIAL },
  },
};
