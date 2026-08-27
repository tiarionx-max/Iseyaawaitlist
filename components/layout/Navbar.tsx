"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

/**
 * Persistent utility bar: brand mark left, primary CTA right. The logo is
 * a fixed-color raster asset, so `onDark` inverts it to white via CSS
 * filter once the viewport reaches the dark Final CTA section — the pill
 * button needs no such treatment since it carries its own background.
 */
export function Navbar() {
  const [onDark, setOnDark] = useState(false);

  useEffect(() => {
    const darkSection = document.getElementById("join");
    if (!darkSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => setOnDark(entry.isIntersecting),
      { rootMargin: "-64px 0px -85% 0px" }
    );
    observer.observe(darkSection);

    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="container-iseyaa flex items-center justify-between py-4 sm:py-5">
        <Logo
          className={cn(
            "h-6 w-auto transition-[filter] duration-300 sm:h-7",
            onDark && "brightness-0 invert"
          )}
        />
        <Button
          href="#join"
          variant="primary"
          arrow
          arrowVariant="badge"
          className="px-4 py-2 text-xs sm:px-5 sm:py-2.5 sm:text-sm"
        >
          Join the waitlist
        </Button>
      </div>
    </motion.header>
  );
}
