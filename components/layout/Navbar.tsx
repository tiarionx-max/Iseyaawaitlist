"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "What’s Coming", href: "#experiences" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (value) => {
    setScrolled(value > 32);
  });

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

  // Menu is always rendered on a light overlay, so its own links are dark
  // regardless of nav scroll state.
  const lightText = !scrolled && !menuOpen;

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={cn(
          "mx-3 mt-3 rounded-full transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ease-out sm:mx-6 sm:mt-4",
          scrolled || menuOpen
            ? "border border-ink/10 bg-cream-soft/85 shadow-[0_8px_30px_-12px_rgba(16,23,19,0.25)] backdrop-blur-md"
            : "border border-transparent bg-transparent"
        )}
      >
        <nav
          className="flex items-center justify-between px-4 py-3 sm:px-6"
          aria-label="Primary"
        >
          <a href="#top" className="flex items-center">
            <Logo tone={lightText ? "light" : "dark"} />
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-200",
                  lightText ? "text-cream-soft/90 hover:text-cream-soft" : "text-ink/80 hover:text-ink"
                )}
              >
                {link.label}
              </a>
            ))}
            <Button href="#join" variant="primary" className="!px-5 !py-2.5 text-sm">
              Join the Waitlist
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className={cn(
              "-mr-1 flex items-center justify-center rounded-full p-2 md:hidden",
              lightText ? "text-cream-soft" : "text-ink"
            )}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <Menu className="size-6" aria-hidden="true" />
          </button>
        </nav>
      </div>

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
            className="fixed inset-0 z-50 flex flex-col bg-cream px-6 pb-10 pt-6 md:hidden"
          >
            <div className="flex items-center justify-between">
              <Logo tone="dark" />
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setMenuOpen(false)}
                className="rounded-full p-2 text-ink"
                aria-label="Close menu"
              >
                <X className="size-6" aria-hidden="true" />
              </button>
            </div>

            <nav className="mt-16 flex flex-1 flex-col gap-8" aria-label="Mobile">
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
              arrow
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
