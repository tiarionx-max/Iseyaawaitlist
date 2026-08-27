"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

/**
 * Hero background: the real ISEYAA footage when conditions allow it, over
 * a poster frame pulled from that same footage — shown immediately, kept
 * under prefers-reduced-motion or a slow/data-saver connection, and left
 * visible until the video can actually play so a slow load never shows a
 * black frame.
 *
 * The source footage is a near-square crop (1440x1180) with the building
 * roughly in its lower half; `object-cover` alone reveals a different
 * slice of it depending on the viewport's own aspect ratio — on a tall
 * narrow screen it can show the whole frame (building and all), while a
 * wide short one crops it down. Rather than let the building appear
 * partially cropped depending on window shape, `origin-top scale-[2.2]`
 * zooms in on the sky/birds consistently and pushes the building below
 * the visible frame on every viewport — Ogun's rock formations are
 * already featured elsewhere on the page (Final CTA, BrandStatement).
 * A gentle parallax drift ties it to scroll position once the hero starts
 * leaving the viewport.
 */
export function HeroMedia() {
  const prefersReducedMotion = useReducedMotion();
  const [canUseVideo, setCanUseVideo] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : 60]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const connection = (
      navigator as Navigator & {
        connection?: { saveData?: boolean; effectiveType?: string };
      }
    ).connection;

    const isSlow =
      connection?.saveData || ["slow-2g", "2g"].includes(connection?.effectiveType ?? "");

    // `navigator.connection` only exists client-side, so this can't be
    // computed during render without a server/client markup mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCanUseVideo(!isSlow);
  }, [prefersReducedMotion]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden bg-cream" aria-hidden="true">
      <motion.div className="absolute inset-0 origin-top scale-[2.2]" style={{ y: parallaxY }}>
        <Image
          src="/images/hero-poster.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />

        {canUseVideo && (
          <video
            className="absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-1000 ease-out"
            style={{ opacity: videoReady ? 1 : 0 }}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/images/hero-poster.webp"
            onLoadedData={() => setVideoReady(true)}
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
        )}
      </motion.div>
    </div>
  );
}
