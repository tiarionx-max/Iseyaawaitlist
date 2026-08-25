"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";

/**
 * Wires Lenis for a smoother scroll feel. Skips entirely when the visitor
 * prefers reduced motion, or hands scrolling straight back to the browser —
 * native scroll, keyboard scrolling and anchor links keep working either way
 * since Lenis intercepts wheel/touch input rather than replacing scroll.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    });

    let frameId: number;
    function raf(time: number) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }
    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
