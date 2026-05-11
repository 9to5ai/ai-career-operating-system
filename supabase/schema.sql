create extension if not exists pgcrypto;

create table if not exists public.users (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  name text,
  created_at timestamptz not null default now()
);

create table if not exists public.career_signal_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.users(id) on delete set null,
  status text not null default 'draft',
  current_step integer not null default 0,
  scan_answers_json jsonb not null default '{}'::jsonb,
  generated_signal_markdown text,
  generated_signal_json jsonb,
  dashboard_json jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  role text,
  career_status text,
  biggest_challenge text,
  created_at timestamptz not null default now()
);

create index if not exists career_signal_sessions_user_id_idx
  on public.career_signal_sessions(user_id);

create index if not exists career_signal_sessions_updated_at_idx
  on public.career_signal_sessions(updated_at desc);

create index if not exists waitlist_created_at_idx
  on public.waitlist(created_at desc);
