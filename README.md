# ISEYAA — Waitlist Site

A production-quality, responsive waitlist site for **ISEYAA**, a connected
digital ecosystem for Ogun State, Nigeria. Built with Next.js App Router,
TypeScript and Tailwind CSS, with a restrained, editorial motion system.

## Stack

- Next.js 15+ (App Router) · React 19 · TypeScript
- Tailwind CSS v4 (CSS-first theme in `app/globals.css`)
- Motion (`motion/react`) for UI animation, GSAP is installed for any future
  scroll-sequencing needs, Lenis for smooth scroll
- Lucide React for icons
- React Hook Form + Zod for the waitlist form
- Supabase (service-role, server-only) for the waitlist table

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in Supabase credentials
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Supabase setup

1. Create a Supabase project.
2. Run `supabase/schema.sql` in the SQL editor to create the `waitlist`
   table (email, created_at, source, referrer) with a case-insensitive
   unique index on email.
3. Set `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` in `.env.local`. The
   service role key is only ever read on the server
   (`app/api/waitlist/route.ts`, `lib/supabase.ts`) — it is never sent to
   the browser.

## Assets

Real media is wired in throughout — hero video, the six ecosystem
illustrations, the logo, the footer wordmark and the Final CTA photo. See
`public/images/README.md` and `public/videos/README.md` for what's there
and the one thing still missing (the social share image).

The hero's illustrated landscape (`components/sections/HeroMedia.tsx`) is
kept as the fallback shown before the video loads, under
`prefers-reduced-motion`, and on slow/data-saver connections.

## Project structure

```
app/
  page.tsx, layout.tsx, globals.css
  api/waitlist/route.ts      # server-only Supabase insert + validation
  privacy/, terms/           # legal placeholder pages
  robots.ts, sitemap.ts
components/
  layout/                    # Navbar, Footer, Logo, SmoothScroll
  sections/                  # Hero, BrandStatement, ExperienceGrid, FinalCTA
  ui/                        # Button, WaitlistForm
  motion/                    # Reveal, RevealText, AnimatedRoute
lib/
  supabase.ts, validations.ts, animations.ts, utils.ts
types/
  waitlist.ts
supabase/
  schema.sql
```

## Notes

- Reduced motion: `MotionConfig reducedMotion="user"` (app/layout.tsx) plus
  explicit `useReducedMotion` checks in the hero, route line and reveal
  components; Lenis is skipped entirely under `prefers-reduced-motion`.
- The waitlist form is one component (`components/ui/WaitlistForm.tsx`)
  reused in the hero and final CTA, with human error/duplicate/success copy
  and no layout shift on success.
