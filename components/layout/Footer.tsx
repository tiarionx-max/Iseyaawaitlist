import Image from "next/image";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";

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
    <footer className="relative overflow-hidden bg-forest-deep pt-14 sm:pt-20">
      <div className="container-iseyaa flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-xs text-cream-soft/40">© 2026 ISEYAA. All rights reserved.</p>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-cream-soft/60">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-cream-soft"
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {link.label}
            </a>
          ))}
          <span className="h-3 w-px bg-cream-soft/20" aria-hidden="true" />
          {LEGAL_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="transition-colors hover:text-cream-soft">
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-12 flex justify-center sm:mt-16">
        <EyebrowBadge />
      </div>

      <div className="relative mt-6 w-screen -translate-x-1/2 overflow-hidden pb-2" style={{ left: "50%" }} aria-hidden="true">
        <Image
          src="/images/footer-wordmark.png"
          alt=""
          width={1440}
          height={273}
          className="h-auto w-full"
        />
      </div>
    </footer>
  );
}
