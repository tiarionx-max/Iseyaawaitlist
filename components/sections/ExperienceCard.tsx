import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExperienceCardProps {
  index: string;
  title: string;
  description: string;
  art: ReactNode;
  aspect?: string;
  dark?: boolean;
  className?: string;
}

/**
 * Layout shell shared by all six ecosystem cards. Each product supplies its
 * own illustration via `art`; sizing/emphasis is controlled entirely by the
 * grid column spans set where the card is placed in ExperienceGrid.
 */
export function ExperienceCard({
  index,
  title,
  description,
  art,
  aspect = "aspect-[4/5]",
  dark = false,
  className,
}: ExperienceCardProps) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border transition-colors duration-300",
        dark
          ? "border-white/10 bg-forest-deep"
          : "border-ink/10 bg-cream-soft",
        className
      )}
    >
      <div className={cn("relative overflow-hidden", aspect)}>
        <div className="absolute inset-0 transition-transform duration-500 ease-out will-change-transform group-hover:scale-[1.03]">
          {art}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-6 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 sm:p-8">
        <span
          className={cn(
            "text-xs font-semibold tracking-[0.14em]",
            dark ? "text-yellow" : "text-orange"
          )}
        >
          {index}
        </span>
        <div className="flex items-start justify-between gap-4">
          <h3 className={cn("text-h3 font-semibold", dark ? "text-cream-soft" : "text-ink")}>
            {title}
          </h3>
          <ArrowUpRight
            className={cn(
              "mt-1 size-5 shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1",
              dark ? "text-cream-soft/60" : "text-ink-muted"
            )}
            aria-hidden="true"
          />
        </div>
        <p
          className={cn(
            "text-sm leading-relaxed sm:text-base",
            dark ? "text-cream-soft/70" : "text-ink-muted"
          )}
        >
          {description}
        </p>
      </div>
    </article>
  );
}
