The Features section (`components/sections/Features.tsx`) expects
per-breakpoint crops of each of the six illustrations:

- `public/illustrations/desktop/*.png` — tall crop, ~536x700, for the
  sticky image panel in the desktop scroll interaction
- `public/illustrations/mobile/*.png` — wide crop, ~345x220, for the
  stacked mobile cards

Expected filenames match the flat files already in this folder:
`explore-ogun.png`, `wallet.png`, `marketplace.png`,
`events-ticketing.png`, `stay-in-ogun.png` (used for "Accommodation"),
`creative-studio.png`.

Until those subfolders exist, both breakpoints fall back to the flat
files in this folder, rendered with `object-contain` on desktop (so nothing
gets awkwardly cropped) instead of the intended full-bleed `object-cover`.
Once the real crops land, update the paths in `FEATURES` at the top of
`components/sections/Features.tsx` and switch the desktop image back to
`object-cover` in `components/sections/FeaturesDesktop.tsx`.
