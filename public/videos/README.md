Drop the final hero footage here:

- `iseyaa-hero.mp4` (H.264, required)
- `iseyaa-hero.webm` (VP9, optional but recommended for smaller payloads)

Keep it short (6–12s), loopable, and compressed (~3–6 Mbps, 1080p is plenty —
the video is always displayed cropped via `object-cover`). `components/sections/HeroMedia.tsx`
already references these exact paths; no code changes are needed once the files exist.
