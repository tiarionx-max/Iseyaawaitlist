"use client";

import { motion, useReducedMotion } from "motion/react";
import { HeroMedia } from "@/components/sections/HeroMedia";
import { RevealText } from "@/components/motion/RevealText";
import { Button } from "@/components/ui/Button";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { EASE_EDITORIAL } from "@/lib/animations";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-cream"
    >
      <HeroMedia />

      <div className="container-iseyaa relative z-10 flex flex-1 items-center">
        <div className="relative flex max-w-xl flex-col items-center gap-5 text-center sm:max-w-2xl">
          <div
            aria-hidden="true"
            className="absolute -inset-x-6 -inset-y-10 -z-10 rounded-[3rem] bg-cream/70 blur-3xl sm:-inset-x-10 sm:bg-cream/60"
          />

          <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 10 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE_EDITORIAL, delay: 0.15 }}
          >
            <EyebrowBadge />
          </motion.div>

          <RevealText
            as="h1"
            lines={["A New Way to", "Experience Ogun."]}
            delay={0.3}
            stagger={0.1}
            className="text-hero font-bold text-forest"
          />

          <motion.p
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 10 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_EDITORIAL, delay: 0.75 }}
            className="max-w-lg text-base leading-relaxed text-[#353535] sm:text-lg"
          >
            ISEYAA is bringing the people, places, culture and experiences of
            Ogun State into one connected digital experience.
          </motion.p>

          <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 10 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_EDITORIAL, delay: 0.95 }}
            className="mt-4"
          >
            <Button href="#join" variant="primary" arrow arrowVariant="badge" className="text-base">
              Join the waitlist
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
