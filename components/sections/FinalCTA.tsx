"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { RevealText } from "@/components/motion/RevealText";
import { Reveal } from "@/components/motion/Reveal";
import { AccentMark } from "@/components/ui/AccentMark";
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
        <Image
          src="/images/olumo-rock.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/70 via-forest-deep/50 to-forest-deep/85" />
      </motion.div>

      <AccentMark
        variant="leaf"
        className="absolute left-[6%] top-[12%] h-8 w-6 text-yellow sm:h-10 sm:w-8"
      />
      <AccentMark
        variant="chevrons"
        className="absolute right-[6%] top-1/2 h-6 w-10 -translate-y-1/2 text-yellow sm:h-7 sm:w-12"
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
            <WaitlistForm source="final-cta" tone="light" helperText="" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
