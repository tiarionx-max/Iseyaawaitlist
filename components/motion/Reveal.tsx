"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { fadeUp, type SimpleVariants } from "@/lib/animations";

interface RevealProps {
  children: ReactNode;
  as?: "div" | "span" | "li";
  variants?: SimpleVariants;
  delay?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

/**
 * Generic scroll-entrance wrapper. Centralizes the "appear once, gently"
 * behavior used across sections instead of hand-rolling viewport logic
 * per component. Renders children statically when reduced motion is set.
 */
export function Reveal({
  children,
  as = "div",
  variants = fadeUp,
  delay = 0,
  className,
  once = true,
  amount = 0.3,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const MotionTag = motion[as];

  if (prefersReducedMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const delayedVariants: SimpleVariants = delay
    ? {
        ...variants,
        visible: {
          ...variants.visible,
          transition: { ...variants.visible.transition, delay },
        },
      }
    : variants;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={delayedVariants}
    >
      {children}
    </MotionTag>
  );
}
