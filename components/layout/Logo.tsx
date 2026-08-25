import { cn } from "@/lib/utils";

/**
 * Typographic wordmark. Swap for an <Image> once a final logo file exists —
 * kept as text for now so it stays crisp at every size and theme.
 */
export function Logo({ className, tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  return (
    <span
      className={cn(
        "font-extrabold tracking-[-0.02em]",
        tone === "dark" ? "text-ink" : "text-cream-soft",
        className ?? "text-lg"
      )}
    >
      ISEYAA
    </span>
  );
}
