import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/images/logo.png"
      alt="ISEYAA"
      width={526}
      height={146}
      priority
      className={cn("w-auto", className ?? "h-7")}
    />
  );
}
