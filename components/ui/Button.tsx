import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "accent" | "outline-light" | "ghost";

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary: "bg-forest text-cream-soft hover:bg-[#00542f]",
  accent: "bg-yellow text-ink hover:bg-[#ffdf33]",
  "outline-light": "border border-white/35 text-cream-soft hover:border-white/70 hover:bg-white/5",
  ghost: "text-ink hover:text-forest",
};

export function buttonClassName(variant: ButtonVariant = "primary", className?: string) {
  return cn(
    "group inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "rounded-full font-medium tracking-tight",
    "transition-[background-color,border-color,color,transform] duration-200 ease-out",
    "active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none",
    variant === "ghost" ? "px-1 py-1" : "px-6 py-3.5 sm:px-7",
    VARIANT_STYLES[variant],
    className
  );
}

function ButtonArrow() {
  return (
    <ArrowRight
      className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-1"
      aria-hidden="true"
    />
  );
}

interface ButtonAsButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: undefined;
  variant?: ButtonVariant;
  arrow?: boolean;
  loading?: boolean;
  children: ReactNode;
}

interface ButtonAsLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: ButtonVariant;
  arrow?: boolean;
  loading?: undefined;
  children: ReactNode;
}

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

/**
 * Shared button primitive. Micro-interactions (arrow nudge, press scale)
 * are plain CSS so they cost nothing at runtime and still respect
 * prefers-reduced-motion via the global transition-duration override.
 * Pass `href` to render an anchor styled identically to the button —
 * needed because nav/CTA links must not nest an <a> inside a <button>.
 */
export function Button({ variant = "primary", arrow = false, className, children, ...rest }: ButtonProps) {
  if (rest.href !== undefined) {
    const { href, ...anchorRest } = rest;
    return (
      <a href={href} className={buttonClassName(variant, className)} {...anchorRest}>
        <span>{children}</span>
        {arrow && <ButtonArrow />}
      </a>
    );
  }

  const { loading = false, disabled, ...buttonRest } = rest;

  return (
    <button
      className={buttonClassName(variant, className)}
      disabled={disabled || loading}
      {...buttonRest}
    >
      {loading ? (
        <Loader2 className="size-4 animate-spin" aria-hidden="true" />
      ) : (
        <span>{children}</span>
      )}
      {arrow && !loading && <ButtonArrow />}
    </button>
  );
}
