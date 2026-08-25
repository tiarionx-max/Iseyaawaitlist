`iseyaa-hero.mp4` is the real hero background, referenced by
`components/sections/HeroMedia.tsx`. It plays over the illustrated
landscape fallback (shown immediately, and kept for
`prefers-reduced-motion` or a slow/data-saver connection).

Optional: add `iseyaa-hero.webm` (VP9) alongside it for a smaller payload
on browsers that support it — `HeroMedia.tsx` would need a second
`<source>` added for it.
