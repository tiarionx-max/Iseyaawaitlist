Expected image paths (referenced by the app, currently rendered as designed
placeholders so nothing looks broken without them):

- `hero-poster.webp` — hero video poster frame
- `iseyaa-og-image.jpg` — 1200x630 social share image
- `explore-ogun.webp`, `wallet.webp`, `marketplace.webp`, `events.webp`,
  `stay.webp`, `creative-studio.webp` — reserved paths for the ecosystem
  cards once photography/illustration replaces the placeholder art in
  `components/sections/ExperienceArt.tsx`

When replacing a placeholder, swap the relevant `<div>`/`<svg>` block for a
`next/image` using the matching path above.
