`new-hero.mp4` is the real hero background, referenced by
`components/sections/HeroMedia.tsx`. It plays over
`public/images/hero-poster.webp` — a frame extracted from this same
video — which is shown immediately, kept under `prefers-reduced-motion`
or a slow/data-saver connection, and left visible until the video
reports `loadeddata`.

Optional: add `new-hero.webm` (VP9) alongside it for a smaller payload
on browsers that support it — `HeroMedia.tsx` would need a second
`<source>` added for it.
