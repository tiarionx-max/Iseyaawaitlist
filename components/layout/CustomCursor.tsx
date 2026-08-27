"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";

/**
 * A small dot tracks the pointer exactly; a larger ring trails behind it
 * with spring lag and grows over anything clickable, so the cursor itself
 * signals movement and intent instead of sitting static. Only enabled for
 * fine-pointer devices (real mice/trackpads) with no reduced-motion
 * preference — touch devices have no cursor to replace, and the native
 * cursor stays put over text inputs so typing still feels normal.
 */
export function CustomCursor() {
  const prefersReducedMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { damping: 28, stiffness: 260, mass: 0.5 });
  const ringY = useSpring(y, { damping: 28, stiffness: 260, mass: 0.5 });

  useEffect(() => {
    if (prefersReducedMotion) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    // `matchMedia` only exists client-side, so this can't be computed
    // during render without a server/client markup mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEnabled(true);
    document.documentElement.classList.add("custom-cursor");
    return () => document.documentElement.classList.remove("custom-cursor");
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (!enabled) return;

    function onMove(event: MouseEvent) {
      x.set(event.clientX);
      y.set(event.clientY);
      setVisible(true);
      const target = event.target as HTMLElement | null;
      setHovering(Boolean(target?.closest("a, button, [role='button'], input, textarea")));
    }
    function onLeaveWindow() {
      setVisible(false);
    }

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeaveWindow);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeaveWindow);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100]" aria-hidden="true">
      <motion.span
        className="absolute left-0 top-0 size-1.5 rounded-full bg-yellow"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        className="absolute left-0 top-0 rounded-full border border-yellow"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: hovering ? 52 : 30,
          height: hovering ? 52 : 30,
          opacity: visible ? (hovering ? 0.9 : 0.45) : 0,
          backgroundColor: hovering ? "rgba(245,215,0,0.15)" : "rgba(245,215,0,0)",
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}
