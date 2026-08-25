"use client";

import { motion, useReducedMotion } from "motion/react";
import { HeroMedia } from "@/components/sections/HeroMedia";
import { RevealText } from "@/components/motion/RevealText";
import { WaitlistForm } from "@/components/ui/WaitlistForm";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { Logo } from "@/components/layout/Logo";
import { EASE_EDITORIAL } from "@/lib/animations";

const AVATAR_COLORS = ["#ee6c27", "#013519", "#f5d700"];

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-cream"
    >
      <HeroMedia />

      <div className="container-iseyaa relative z-10 flex flex-1 flex-col items-center justify-center py-32 text-center sm:py-36">
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_EDITORIAL }}
        >
          <Logo className="h-8" />
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 10 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_EDITORIAL, delay: 0.15 }}
          className="mt-6"
        >
          <EyebrowBadge />
        </motion.div>

        <RevealText
          as="h1"
          lines={["A New Way to", "Experience Ogun."]}
          delay={0.3}
          stagger={0.1}
          className="text-hero mt-5 max-w-2xl font-bold text-forest"
        />

        <motion.p
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 10 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE_EDITORIAL, delay: 0.75 }}
          className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg"
        >
          ISEYAA is bringing the people, places, culture and experiences of
          Ogun State into one connected digital experience.
        </motion.p>

        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 10 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE_EDITORIAL, delay: 0.95 }}
          className="mt-9 w-full max-w-lg"
        >
          <WaitlistForm source="hero" tone="dark" helperText="" />
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 10 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_EDITORIAL, delay: 1.1 }}
          className="mt-5 flex flex-col items-center gap-3"
        >
          <p className="text-xs text-ink-muted sm:text-sm">
            Be among the first to experience ISEYAA.
          </p>
          <div className="flex items-center -space-x-3">
            {AVATAR_COLORS.map((color, i) => (
              <span
                key={i}
                className="size-9 rounded-full border-2 border-cream"
                style={{ backgroundColor: color }}
                aria-hidden="true"
              />
            ))}
            <span className="flex size-9 flex-col items-center justify-center rounded-full border-2 border-cream bg-forest text-center leading-none text-cream-soft">
              <span className="text-[9px] font-bold">+3.3k</span>
              <span className="text-[6px] uppercase tracking-wide">users</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
