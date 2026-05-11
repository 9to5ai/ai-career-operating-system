# Career Signal

Career Signal is an AI-native career clarity and adaptation MVP for experienced corporate professionals navigating redundancy, retrenchment, restructuring, career uncertainty, or AI disruption.

## What is included

- Landing page at `/`
- Scan intro at `/start`
- 12-step 5-minute Career Signal Scan at `/scan`
- Gemini-backed generation endpoint at `/api/generate-signal`
- Results dashboard at `/dashboard`
- Exportable Career Signal Map at `/signal-map`
- Waitlist/session APIs with Supabase persistence when configured
- Placeholder admin view at `/admin`
- Markdown, JSON, and print exports

## Environment

Copy `.env.example` to `.env.local` and fill in values:

```bash
GEMINI_API_KEY=
GEMINI_MODEL=gemini-1.5-pro-latest
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

Gemini calls run server-side only. If `GEMINI_API_KEY` is missing or Gemini returns malformed JSON, the MVP returns a structured fallback signal so the local product flow remains testable.

Supabase is optional for local MVP review. Without credentials, scan answers and generated results are kept in browser storage and API routes return non-fatal “not configured” responses.

## Supabase

Run `supabase/schema.sql` in your Supabase SQL editor to create:

- `users`
- `career_signal_sessions`
- `waitlist`

Before production, add authentication and row-level security policies appropriate to your deployment model.

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run lint
npm run build
```
