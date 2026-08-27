import Image from "next/image";
import { cn } from "@/lib/utils";

interface AccentMarkProps {
  variant: "sparkle" | "chevrons";
  tone?: "yellow" | "green";
  className?: string;
}

const SOURCES = {
  "sparkle-yellow": { src: "/icons/yellow-sparkle.png", width: 36, height: 38 },
  "chevrons-yellow": { src: "/icons/yellow-chevrons.png", width: 52, height: 47 },
  "chevrons-green": { src: "/icons/green-chevrons.png", width: 29, height: 46 },
} as const;

/**
 * Small recurring decorative marks from the brand's edge details — a
 * sparkle flourish and a triple-chevron mark, exported straight from
 * Figma. Color is baked into the source image, so `tone` picks the file
 * rather than a currentColor override.
 */
export function AccentMark({ variant, tone = "yellow", className }: AccentMarkProps) {
  const key = `${variant}-${tone}` as keyof typeof SOURCES;
  const asset = SOURCES[key] ?? SOURCES[`${variant}-yellow`];

  return (
    <Image
      src={asset.src}
      alt=""
      width={asset.width}
      height={asset.height}
      className={cn("h-auto w-auto", className)}
      aria-hidden="true"
    />
  );
}
