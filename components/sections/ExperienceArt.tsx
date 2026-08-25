import { Mic, ShoppingBag, Ticket, Wallet as WalletIcon } from "lucide-react";

/**
 * Illustrated placeholders for each ecosystem card. These stand in for the
 * final photography/artwork — swap the fill of each `<div>`/`<svg>` region
 * for a real `next/image` once assets land in /public/images.
 */

export function ExploreArt() {
  return (
    <div className="absolute inset-0 bg-[#f4e9cc]">
      <svg
        className="absolute inset-x-0 bottom-0 h-[70%] w-full"
        viewBox="0 0 400 260"
        preserveAspectRatio="none"
        fill="none"
      >
        <circle cx="320" cy="50" r="34" fill="#ffd400" opacity="0.9" />
        <path d="M0 170 C 60 120, 140 200, 220 140 C 280 96, 340 150, 400 120 L400 260 L0 260 Z" fill="#003d24" />
        <path d="M0 210 C 90 180, 200 240, 300 190 C 340 170, 370 200, 400 190 L400 260 L0 260 Z" fill="#00251488" />
      </svg>
      <div className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full bg-cream-soft/90 px-3 py-1.5 text-xs font-medium text-forest shadow-sm">
        <span className="size-1.5 rounded-full bg-orange" />
        Olumo Rock
      </div>
    </div>
  );
}

export function WalletArt() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[#062e1c] p-6 sm:p-10">
      <div className="flex w-full max-w-[220px] flex-col gap-4 rounded-[1.5rem] border border-white/10 bg-forest-deep p-5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-medium tracking-wide text-cream-soft/60">
            ISEYAA Wallet
          </span>
          <WalletIcon className="size-4 text-yellow" aria-hidden="true" />
        </div>
        <p className="text-2xl font-bold tracking-tight text-cream-soft">
          ₦48,500
        </p>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2">
            <Ticket className="size-3.5 text-yellow" aria-hidden="true" />
            <span className="text-[11px] text-cream-soft/80">Event ticket</span>
          </div>
          <div className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2">
            <ShoppingBag className="size-3.5 text-orange" aria-hidden="true" />
            <span className="text-[11px] text-cream-soft/80">Marketplace</span>
          </div>
          <div className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2">
            <Mic className="size-3.5 text-cream-soft/70" aria-hidden="true" />
            <span className="text-[11px] text-cream-soft/80">Studio booking</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MarketplaceArt() {
  const swatches = [
    "linear-gradient(135deg, #ee6c27 25%, #f4a25a 25%, #f4a25a 50%, #ee6c27 50%, #ee6c27 75%, #f4a25a 75%)",
    "repeating-linear-gradient(45deg, #003d24, #003d24 6px, #054a2c 6px, #054a2c 12px)",
    "radial-gradient(circle at 30% 30%, #ffd400 0%, #ffd400 20%, transparent 21%), radial-gradient(circle at 70% 70%, #ffd400 0%, #ffd400 20%, transparent 21%), #f4e9cc",
    "linear-gradient(180deg, #f4e9cc 0%, #ee6c27 100%)",
  ];

  return (
    <div className="absolute inset-0 grid grid-cols-2 gap-1.5 bg-cream p-1.5">
      {swatches.map((bg, i) => (
        <div
          key={i}
          className="rounded-xl"
          style={{ backgroundImage: bg, backgroundSize: "16px 16px" }}
        />
      ))}
    </div>
  );
}

export function EventsArt() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[#f4e9cc] p-6">
      <div className="relative flex w-full max-w-[220px] items-stretch overflow-hidden rounded-2xl bg-forest text-cream-soft shadow-sm">
        <div className="flex flex-1 flex-col gap-1.5 p-4">
          <span className="text-[10px] uppercase tracking-[0.14em] text-yellow">
            Live in Abeokuta
          </span>
          <span className="text-sm font-semibold">Ogun Culture Night</span>
          <span className="text-[11px] text-cream-soft/60">Sat · 7:00 PM</span>
        </div>
        <div className="relative flex w-16 shrink-0 items-center justify-center border-l border-dashed border-cream-soft/30">
          <Ticket className="size-5 text-yellow" aria-hidden="true" />
        </div>
        <span className="absolute -left-2 top-1/2 size-4 -translate-y-1/2 rounded-full bg-[#f4e9cc]" />
        <span className="absolute -right-2 top-1/2 size-4 -translate-y-1/2 rounded-full bg-[#f4e9cc]" />
      </div>
    </div>
  );
}

export function StayArt() {
  return (
    <div className="absolute inset-0 bg-gradient-to-b from-[#ffdf7a] via-[#f9c96a] to-[#f4e9cc]">
      <svg
        className="absolute inset-x-0 bottom-0 h-[62%] w-full"
        viewBox="0 0 400 220"
        preserveAspectRatio="none"
        fill="none"
      >
        <path d="M0 140 L90 80 L180 140 Z" fill="#003d24" />
        <rect x="30" y="140" width="120" height="70" fill="#00311d" />
        <rect x="70" y="165" width="24" height="30" fill="#ffd400" opacity="0.85" />
        <path d="M180 220 C 220 150, 280 190, 400 130 L400 220 Z" fill="#054a2c" />
        <path d="M0 220 L0 150 C 40 120, 70 150, 110 130 L 220 220 Z" fill="#00251480" />
      </svg>
    </div>
  );
}

export function StudioArt() {
  const bars = [30, 55, 40, 70, 45, 60, 35, 65, 50, 75, 40, 58, 32, 68, 44];

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#001d13]">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(60% 80% at 20% 40%, rgba(255,212,0,0.25) 0%, rgba(255,212,0,0) 60%)",
        }}
      />
      <Mic className="absolute left-8 top-1/2 size-10 -translate-y-1/2 text-cream-soft/25 sm:left-14 sm:size-14" aria-hidden="true" />
      <div className="relative flex h-16 items-end gap-1.5 sm:h-24">
        {bars.map((h, i) => (
          <span
            key={i}
            className="w-1.5 rounded-full bg-yellow/80 sm:w-2"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  );
}
