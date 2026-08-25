"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [onDark, setOnDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

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

  useEffect(() => {
    if (!menuOpen) return;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const lightIcon = onDark && !menuOpen;

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <button
        type="button"
        onClick={() => setMenuOpen(true)}
        className={cn(
          "fixed right-4 top-4 flex items-center justify-center rounded-full p-2.5 transition-colors duration-200 sm:right-6 sm:top-5",
          lightIcon ? "text-cream-soft" : "text-forest"
        )}
        aria-label="Open menu"
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
      >
        <Menu className="size-5" aria-hidden="true" />
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 flex flex-col bg-cream px-6 pb-10 pt-6"
          >
            <div className="flex items-center justify-between">
              <Logo tone="dark" />
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setMenuOpen(false)}
                className="rounded-full p-2 text-forest"
                aria-label="Close menu"
              >
                <X className="size-6" aria-hidden="true" />
              </button>
            </div>

            <nav className="mt-16 flex flex-1 flex-col gap-8" aria-label="Site">
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="text-4xl font-semibold tracking-tight text-ink"
              >
                About
              </a>
              <a
                href="#experiences"
                onClick={() => setMenuOpen(false)}
                className="text-4xl font-semibold tracking-tight text-ink"
              >
                Experiences
              </a>
            </nav>

            <Button
              href="#join"
              variant="accent"
              className="w-full justify-center text-base"
              onClick={() => setMenuOpen(false)}
            >
              Join the Waitlist
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
