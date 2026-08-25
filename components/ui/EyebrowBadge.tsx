import { cn } from "@/lib/utils";

export function EyebrowBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-yellow px-4 py-2 text-xs font-semibold text-forest",
        className
      )}
    >
      Everything, Connects
    </span>
  );
}
