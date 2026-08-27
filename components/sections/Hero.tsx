"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { HeroMedia } from "@/components/sections/HeroMedia";
import { RevealText } from "@/components/motion/RevealText";
import { Button } from "@/components/ui/Button";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { EASE_EDITORIAL } from "@/lib/animations";

const AVATARS = ["/images/avatar-1.png", "/images/avatar-2.png", "/images/avatar-3.png"];

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-cream"
    >
      <HeroMedia />

      <div className="container-iseyaa relative z-10 flex flex-1 flex-col items-center justify-start pt-28 text-center sm:pt-36">
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
          className="text-hero mt-5 max-w-2xl font-bold text-forest"
        />

        <motion.p
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 10 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE_EDITORIAL, delay: 0.75 }}
          className="mt-5 max-w-xl text-base leading-relaxed text-[#353535] sm:text-lg"
        >
          ISEYAA is bringing the people, places, culture and experiences of
          Ogun State into one connected digital experience.
        </motion.p>

        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 10 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE_EDITORIAL, delay: 0.95 }}
          className="mt-9"
        >
          <Button href="#join" variant="primary" arrow arrowVariant="badge" className="text-base">
            Join the waitlist
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={prefersReducedMotion ? undefined : { opacity: 0, y: 10 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE_EDITORIAL, delay: 1.1 }}
        className="container-iseyaa relative z-10 flex items-center -space-x-3 pb-10 sm:pb-14"
      >
        {AVATARS.map((src) => (
          <Image
            key={src}
            src={src}
            alt=""
            width={67}
            height={67}
            className="size-9 rounded-full border-2 border-cream object-cover sm:size-10"
          />
        ))}
        <span className="flex size-9 flex-col items-center justify-center rounded-full border-2 border-cream bg-forest text-center leading-none text-cream-soft sm:size-10">
          <span className="text-[9px] font-bold sm:text-[10px]">+3.3k</span>
          <span className="text-[6px] sm:text-[7px]">Joined</span>
        </span>
      </motion.div>
    </section>
  );
}
