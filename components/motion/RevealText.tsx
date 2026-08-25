"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { EASE_EDITORIAL } from "@/lib/animations";

interface RevealTextProps {
  lines: string[];
  className?: string;
  delay?: number;
  /** Stagger between lines, in seconds. */
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "p";
}

/**
 * Editorial masked-line reveal: each line sits behind an overflow-hidden
 * mask and slides up into place, used for hero and section headlines.
 *
 * The element that gets translated can't also be the one observed for
 * viewport entry — once it slides fully behind its own mask it would clip
 * itself out of the intersection rect and never be seen as "in view" again.
 * So visibility is tracked on this untransformed wrapper span instead, and
 * fed down to each line's transform.
 */
export function RevealText({
  lines,
  className,
  delay = 0,
  stagger = 0.1,
  as = "h1",
}: RevealTextProps) {
  const prefersReducedMotion = useReducedMotion();
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(wrapperRef, { once: true, amount: 0.6 });
  const Tag = as;

  if (prefersReducedMotion) {
    return (
      <Tag className={className}>
        {lines.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </Tag>
    );
  }

  return (
    <Tag className={className}>
      <span ref={wrapperRef} className="block">
        {lines.map((line, i) => (
          <span key={i} className="block overflow-hidden py-[0.05em]">
            <motion.span
              className="block"
              initial={{ y: "100%" }}
              animate={{ y: isInView ? "0%" : "100%" }}
              transition={{
                duration: 0.85,
                ease: EASE_EDITORIAL,
                delay: delay + i * stagger,
              }}
            >
              {line}
            </motion.span>
          </span>
        ))}
      </span>
    </Tag>
  );
}
