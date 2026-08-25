import { Logo } from "@/components/layout/Logo";

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com/iseyaa" },
  { label: "X", href: "https://x.com/iseyaa" },
  { label: "Email", href: "mailto:hello@iseyaa.com" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest-deep">
      <div className="container-iseyaa relative py-16 sm:py-20">
        <div className="flex flex-col gap-12 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Logo tone="light" className="text-2xl" />
            <p className="mt-3 text-sm font-medium text-yellow">Everything Connects.</p>
          </div>

          <div className="flex flex-wrap gap-12 sm:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cream-soft/40">
                Connect
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {SOCIAL_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-cream-soft/80 transition-colors hover:text-cream-soft"
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cream-soft/40">
                Legal
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {LEGAL_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-cream-soft/80 transition-colors hover:text-cream-soft"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20">
          <p className="text-xs text-cream-soft/40">
            © 2026 ISEYAA. All rights reserved.
          </p>
        </div>
      </div>

      <div
        className="pointer-events-none select-none overflow-hidden pb-2 text-center leading-none"
        aria-hidden="true"
      >
        <span
          className="block font-extrabold tracking-tight text-cream-soft/5"
          style={{ fontSize: "clamp(4.5rem, 22vw, 15rem)" }}
        >
          ISEYAA
        </span>
      </div>
    </footer>
  );
}
