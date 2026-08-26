"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { EASE_EDITORIAL } from "@/lib/animations";
import { cn } from "@/lib/utils";
import type { FeatureItem } from "@/components/sections/Features";

/**
 * Two-column scrollytelling layout: the item list scrolls normally while
 * the image panel stays pinned (CSS `sticky`) and crossfades to match
 * whichever item currently sits at the viewport's vertical center. Active
 * item is tracked with one IntersectionObserver per row rather than a
 * scroll listener, so there's no per-frame layout work.
 */
export function FeaturesDesktop({ items }: { items: FeatureItem[] }) {
  const [active, setActive] = useState(0);
  const rowRefs = useRef<Array<HTMLDivElement | null>>([]);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const observers = rowRefs.current.map((row, index) => {
      if (!row) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(index);
        },
        { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
      );

      observer.observe(row);
      return observer;
    });

    return () => observers.forEach((observer) => observer?.disconnect());
  }, [items.length]);

  return (
    <div className="grid grid-cols-[1.1fr_1fr] gap-16 xl:gap-24">
      <div className="flex flex-col gap-3">
        {items.map((item, index) => {
          const isActive = index === active;
          return (
            <div
              key={item.title}
              ref={(el) => {
                rowRefs.current[index] = el;
              }}
              className={cn(
                "border-l-4 px-6 py-5 transition-colors duration-300",
                isActive ? "border-yellow bg-yellow/15" : "border-transparent"
              )}
            >
              <h3
                className={cn(
                  "text-h3 font-semibold transition-colors duration-300",
                  isActive ? "text-ink" : "text-forest/55"
                )}
              >
                {item.title}
              </h3>
              <p
                className={cn(
                  "mt-2 text-sm leading-relaxed transition-colors duration-300 sm:text-base",
                  isActive ? "text-ink-muted" : "text-ink-muted/60"
                )}
              >
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="relative">
        <div className="sticky top-32">
          <div className="relative aspect-[536/700] w-full overflow-hidden bg-cream-soft">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={items[active].title}
                initial={prefersReducedMotion ? undefined : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0 }}
                transition={{ duration: 0.4, ease: EASE_EDITORIAL }}
                className="absolute inset-0"
              >
                <Image
                  src={items[active].desktopImage}
                  alt={items[active].title}
                  fill
                  sizes="(min-width: 1024px) 536px, 0px"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
