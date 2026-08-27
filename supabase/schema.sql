-- ISEYAA waitlist table
-- Run this once in the Supabase SQL editor (or via `supabase db push`).

create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  created_at timestamptz not null default now(),
  source text default 'site',
  referrer text
);

create unique index if not exists waitlist_email_key
  on public.waitlist (lower(email));

-- If the table was already created before the "Full Name" field was added
-- to the form, run this against the existing table instead of the
-- CREATE TABLE above:
-- alter table public.waitlist add column if not exists full_name text not null default '';

alter table public.waitlist enable row level security;

-- The API route uses the service role key (server-side only), which bypasses
-- RLS entirely. No client-side policies are required or created here, so the
-- table stays unreachable from the browser's anon key by default.
