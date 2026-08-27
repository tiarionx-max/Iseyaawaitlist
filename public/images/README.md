Images in this folder:

- `logo.png` — the ISEYAA icon + wordmark, used by `components/layout/Logo.tsx`
- `footer-wordmark.png` — the oversized cropped "iseyaa" treatment in the footer, used by `components/layout/Footer.tsx`
- `olumo-rock.png` — aerial photo of Olumo Rock, used as the Final CTA background in `components/sections/FinalCTA.tsx`
- `hero-poster.webp` — a frame extracted from `public/videos/new-hero.mp4`, used as the hero's poster/fallback in `components/sections/HeroMedia.tsx`
- `avatar-1.png`, `avatar-2.png`, `avatar-3.png` — the "+3.3k Joined" social-proof avatars in `components/sections/Hero.tsx`

Still missing:

- `iseyaa-og-image.jpg` — 1200x630 social share image, referenced in `app/layout.tsx` metadata. Until this is added, social previews (X/Facebook/etc.) will show a broken image.
- A brand illustration for the "Ogun has more to discover" section (`components/sections/BrandStatement.tsx`) — the Figma frame (node 1108:762 / 1134:1929) shows a green-toned "Abeokuta / Professor Wole Soyinka Station" illustration here; it hasn't been uploaded to the repo yet, so that section currently renders an empty placeholder panel.
