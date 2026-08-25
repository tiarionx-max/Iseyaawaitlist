import { cn } from "@/lib/utils";

/**
 * Icon mark + "iseyaa" wordmark. The icon badge is self-contained (dark
 * green fill, cream glyph) so it reads on any background; only the
 * wordmark text needs to flip color between light and dark sections.
 */
export function Logo({ className, tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <span className="flex size-6 shrink-0 items-center justify-center rounded-[7px] bg-forest">
        <svg width="13" height="15" viewBox="0 0 13 15" fill="none" aria-hidden="true">
          <path
            d="M6.5 0C6.5 5 3 6 0 6.5C3 7 6.5 8 6.5 15C6.5 8 10 7 13 6.5C10 6 6.5 5 6.5 0Z"
            fill="var(--color-yellow)"
          />
        </svg>
      </span>
      <span
        className={cn(
          "text-lg font-bold tracking-[-0.02em]",
          tone === "dark" ? "text-forest" : "text-cream-soft"
        )}
      >
        iseyaa
      </span>
    </span>
  );
}
