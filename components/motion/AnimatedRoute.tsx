"use client";

import { motion, useReducedMotion } from "motion/react";
import { EASE_EDITORIAL } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface AnimatedRouteProps {
  /** SVG path data, drawn as the ISEYAA "route" line. */
  path: string;
  viewBox: string;
  className?: string;
  strokeWidth?: number;
  color?: string;
  duration?: number;
  delay?: number;
}

/**
 * A single flowing line that draws itself in as it enters the viewport —
 * the "route travelling through the page" motif referenced in the brand
 * moodboard. Kept to one instance per section so it reads as a wayfinding
 * device, not decoration.
 */
export function AnimatedRoute({
  path,
  viewBox,
  className,
  strokeWidth = 3,
  color = "var(--color-yellow)",
  duration = 1.8,
  delay = 0,
}: AnimatedRouteProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <svg
      viewBox={viewBox}
      fill="none"
      preserveAspectRatio="none"
      className={cn("pointer-events-none", className)}
      aria-hidden="true"
    >
      <motion.path
        d={path}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        initial={prefersReducedMotion ? undefined : { pathLength: 0, opacity: 0.4 }}
        whileInView={prefersReducedMotion ? undefined : { pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration, ease: EASE_EDITORIAL, delay }}
      />
    </svg>
  );
}
