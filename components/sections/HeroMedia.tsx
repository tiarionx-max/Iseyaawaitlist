"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

/**
 * Hero background: real video when conditions allow it, otherwise a designed
 * gradient + illustrated skyline that stands on its own until the final
 * /public/videos/iseyaa-hero.(mp4|webm) and /public/images/hero-poster.webp
 * assets are dropped in. The video only fades in once it can actually play,
 * so a missing source never leaves a black frame over the illustration.
 */
export function HeroMedia() {
  const prefersReducedMotion = useReducedMotion();
  const [canUseVideo, setCanUseVideo] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

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
    <div className="absolute inset-0 overflow-hidden bg-forest-deep">
      <OgunSkyline />

      {canUseVideo && (
        <video
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-out"
          style={{ opacity: videoReady ? 1 : 0 }}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/images/hero-poster.webp"
          onLoadedData={() => setVideoReady(true)}
        >
          <source src="/videos/iseyaa-hero.webm" type="video/webm" />
          <source src="/videos/iseyaa-hero.mp4" type="video/mp4" />
        </video>
      )}
    </div>
  );
}

/** Abstract placeholder illustration standing in for the final hero footage. */
function OgunSkyline() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 78% 8%, rgba(255,212,0,0.28) 0%, rgba(255,212,0,0) 45%), radial-gradient(90% 70% at 15% 100%, rgba(238,108,39,0.22) 0%, rgba(238,108,39,0) 50%), linear-gradient(180deg, #001d13 0%, #003d24 62%, #002b19 100%)",
        }}
      />
      <svg
        className="absolute inset-x-0 bottom-0 h-[55%] w-full"
        viewBox="0 0 1440 500"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M0 340 C 220 260, 380 400, 580 300 C 760 210, 900 340, 1120 260 C 1260 210, 1360 260, 1440 230 L1440 500 L0 500 Z"
          fill="#00311d"
          opacity="0.85"
        />
        <path
          d="M0 400 C 260 330, 420 440, 660 370 C 860 310, 1040 410, 1440 340 L1440 500 L0 500 Z"
          fill="#00230f"
        />
      </svg>
    </div>
  );
}
