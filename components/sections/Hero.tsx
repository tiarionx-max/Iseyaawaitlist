"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { HeroMedia } from "@/components/sections/HeroMedia";
import { RevealText } from "@/components/motion/RevealText";
import { WaitlistForm } from "@/components/ui/WaitlistForm";
import { EASE_EDITORIAL } from "@/lib/animations";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const mediaScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-forest-deep"
    >
      <motion.div
        className="absolute inset-0"
        style={prefersReducedMotion ? undefined : { scale: mediaScale }}
      >
        <HeroMedia />
      </motion.div>

      <div
        className="absolute inset-0 bg-gradient-to-t from-forest-deep/95 via-forest-deep/25 to-forest-deep/45"
        aria-hidden="true"
      />

      <div className="container-iseyaa relative z-10 flex flex-1 flex-col justify-end pb-16 pt-32 sm:pb-20 sm:pt-40 lg:pb-24">
        <motion.p
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 10 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_EDITORIAL, delay: 0.15 }}
          className="text-eyebrow mb-5 font-semibold uppercase text-yellow"
        >
          Everything Connects
        </motion.p>

        <RevealText
          as="h1"
          lines={["A New Way to", "Experience Ogun."]}
          delay={0.3}
          stagger={0.1}
          className="text-display max-w-3xl font-bold text-cream-soft"
        />

        <motion.p
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 10 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE_EDITORIAL, delay: 0.75 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-cream-soft/80 sm:text-lg"
        >
          ISEYAA is bringing the people, places, culture and experiences of
          Ogun State into one connected digital experience.
        </motion.p>

        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 10 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE_EDITORIAL, delay: 0.95 }}
          className="mt-10 max-w-lg"
        >
          <WaitlistForm source="hero" tone="dark" />
        </motion.div>
      </div>
    </section>
  );
}
