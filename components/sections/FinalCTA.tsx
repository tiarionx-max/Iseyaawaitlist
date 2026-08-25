"use client";

import { motion, useReducedMotion } from "motion/react";
import { RevealText } from "@/components/motion/RevealText";
import { Reveal } from "@/components/motion/Reveal";
import { AnimatedRoute } from "@/components/motion/AnimatedRoute";
import { WaitlistForm } from "@/components/ui/WaitlistForm";
import { fadeUp, EASE_EDITORIAL } from "@/lib/animations";

export function FinalCTA() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="join" className="relative overflow-hidden bg-forest-deep py-28 sm:py-36">
      <motion.div
        className="absolute inset-0"
        initial={prefersReducedMotion ? undefined : { scale: 1.08, opacity: 0.85 }}
        whileInView={prefersReducedMotion ? undefined : { scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.3, ease: EASE_EDITORIAL }}
        aria-hidden="true"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(70% 60% at 50% 0%, rgba(255,212,0,0.14) 0%, rgba(255,212,0,0) 55%), radial-gradient(60% 50% at 90% 100%, rgba(238,108,39,0.16) 0%, rgba(238,108,39,0) 55%), linear-gradient(180deg, #001d13 0%, #002a17 100%)",
          }}
        />
      </motion.div>

      <AnimatedRoute
        path="M -40 60 C 260 -20, 480 160, 760 70 C 1000 -6, 1200 120, 1480 40"
        viewBox="0 0 1400 200"
        className="absolute inset-x-0 top-10 h-[160px] w-full opacity-40"
        strokeWidth={2}
      />

      <div className="container-iseyaa relative">
        <div className="mx-auto max-w-2xl text-center">
          <RevealText
            as="h2"
            lines={["Ogun is waiting.", "Are you ready?"]}
            className="text-h2 font-semibold tracking-tight text-cream-soft"
          />

          <Reveal variants={fadeUp} delay={0.15}>
            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-cream-soft/70 sm:text-lg">
              Be among the first to discover, experience and connect with
              Ogun through ISEYAA.
            </p>
          </Reveal>

          <Reveal variants={fadeUp} delay={0.25} className="mx-auto mt-10 max-w-lg">
            <WaitlistForm source="final-cta" tone="dark" helperText="" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
