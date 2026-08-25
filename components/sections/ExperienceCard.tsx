import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ExperienceCardProps {
  title: string;
  description: string;
  art: ReactNode;
  aspect?: string;
  /** "stacked": image on top, text below. "split": image left, text right. */
  layout?: "stacked" | "split";
  className?: string;
}

/**
 * Layout shell shared by all six ecosystem cards. Each product supplies its
 * own illustration via `art`; sizing/emphasis is controlled entirely by the
 * grid column spans set where the card is placed in ExperienceGrid.
 */
export function ExperienceCard({
  title,
  description,
  art,
  aspect = "aspect-[4/5]",
  layout = "stacked",
  className,
}: ExperienceCardProps) {
  if (layout === "split") {
    return (
      <article
        className={cn(
          "group flex flex-col overflow-hidden rounded-[1.75rem] border border-ink/10 bg-cream-soft p-2.5 sm:flex-row sm:items-center",
          className
        )}
      >
        <div className={cn("relative w-full overflow-hidden rounded-[1.4rem] sm:w-1/2", aspect)}>
          <div className="absolute inset-0 transition-transform duration-500 ease-out will-change-transform group-hover:scale-[1.03]">
            {art}
          </div>
        </div>
        <div className="flex flex-col gap-2 px-6 py-6 sm:w-1/2 sm:px-10">
          <h3 className="text-h3 font-semibold text-ink">{title}</h3>
          <p className="text-sm leading-relaxed text-ink-muted sm:text-base">{description}</p>
        </div>
      </article>
    );
  }

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-ink/10 bg-cream-soft p-2.5",
        className
      )}
    >
      <div className={cn("relative overflow-hidden rounded-[1.4rem]", aspect)}>
        <div className="absolute inset-0 transition-transform duration-500 ease-out will-change-transform group-hover:scale-[1.03]">
          {art}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-2 px-4 pb-4 pt-6 sm:px-6">
        <h3 className="text-h3 font-semibold text-ink">{title}</h3>
        <p className="text-sm leading-relaxed text-ink-muted sm:text-base">{description}</p>
      </div>
    </article>
  );
}
