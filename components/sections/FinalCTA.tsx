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
        className="absolute inset-0 opacity-20"
        initial={prefersReducedMotion ? undefined : { scale: 1.08, opacity: 0 }}
        whileInView={prefersReducedMotion ? undefined : { scale: 1, opacity: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.3, ease: EASE_EDITORIAL }}
        aria-hidden="true"
      >
        <Image src="/images/olumo-rock.png" alt="" fill sizes="100vw" className="object-cover" />
      </motion.div>

      <motion.div
        className="absolute left-[6%] top-[12%]"
        animate={prefersReducedMotion ? undefined : { y: [0, -10, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <AccentMark variant="sparkle" className="h-8 w-8 sm:h-10 sm:w-10" />
      </motion.div>
      <motion.div
        className="absolute right-[6%] top-1/2 -translate-y-1/2"
        animate={prefersReducedMotion ? undefined : { x: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <AccentMark variant="chevrons" className="h-6 w-7 sm:h-7 sm:w-8" />
      </motion.div>

      <div className="container-iseyaa relative">
        <div className="mx-auto max-w-2xl text-center">
          <RevealText
            as="h2"
            lines={["Ogun is waiting.", "Are you ready?"]}
            className="text-h2 font-semibold tracking-tight text-cream-soft"
          />

          <Reveal variants={fadeUp} delay={0.15}>
            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-[#bcbcbc] sm:text-lg">
              Be among the first to discover, experience and connect with
              Ogun through ISEYAA.
            </p>
          </Reveal>

          <Reveal variants={fadeUp} delay={0.25} className="mx-auto mt-10 max-w-[534px]">
            <WaitlistForm source="final-cta" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
