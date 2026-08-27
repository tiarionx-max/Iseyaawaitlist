"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Logo } from "@/components/layout/Logo";
import { EASE_EDITORIAL } from "@/lib/animations";

/**
 * Brief branded splash shown while the page's real assets (hero video,
 * fonts, images) finish loading, so the first thing a visitor sees is
 * never a half-painted page. Waits for `window.load` plus a small minimum
 * so a fast connection still gets a deliberate reveal rather than a flash.
 */
export function LoadingScreen() {
  const prefersReducedMotion = useReducedMotion();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const minDelay = prefersReducedMotion ? 150 : 700;
    const start = Date.now();

    function finish() {
      const remaining = Math.max(0, minDelay - (Date.now() - start));
      window.setTimeout(() => setLoading(false), remaining);
    }

    if (document.readyState === "complete") {
      finish();
      return;
    }

    window.addEventListener("load", finish);
    return () => window.removeEventListener("load", finish);
  }, [prefersReducedMotion]);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: EASE_EDITORIAL }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-cream"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={
              prefersReducedMotion
                ? { opacity: 1, scale: 1 }
                : { opacity: [0, 1, 1, 0.6, 1], scale: 1 }
            }
            transition={
              prefersReducedMotion
                ? { duration: 0.3 }
                : { duration: 1.8, times: [0, 0.25, 0.55, 0.8, 1], repeat: Infinity, ease: "easeInOut" }
            }
          >
            <Logo className="h-9 w-auto sm:h-10" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
