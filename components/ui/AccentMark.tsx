import { cn } from "@/lib/utils";

interface AccentMarkProps {
  variant: "leaf" | "chevrons";
  className?: string;
}

/**
 * Small recurring decorative glyphs from the brand's edge details — a leaf
 * pennant and a triple-chevron mark. Color comes from `currentColor` so the
 * same mark can sit dark-on-cream or yellow-on-dark depending on section.
 */
export function AccentMark({ variant, className }: AccentMarkProps) {
  if (variant === "chevrons") {
    return (
      <svg
        viewBox="0 0 40 24"
        fill="none"
        className={cn("text-forest", className)}
        aria-hidden="true"
      >
        <path d="M14 2L4 12L14 22" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M26 2L16 12L26 22" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M38 2L28 12L38 22" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 26 34"
      fill="none"
      className={cn("text-forest", className)}
      aria-hidden="true"
    >
      <path
        d="M13 0C13 11 6 13 0 14.5C6 15.5 13 18 13 34C13 18 20 15.5 26 14.5C20 13 13 11 13 0Z"
        fill="currentColor"
      />
    </svg>
  );
}
