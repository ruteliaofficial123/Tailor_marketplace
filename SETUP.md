# Tailor & co.Stitch — starter website

This is a starter project for a tailor/customer directory. It includes a luxury editorial design, searchable tailor cards, demo listings, WhatsApp links, Google Maps search links, Supabase email/password registration and login, and a portfolio image upload flow.

## 1. Run locally

Install Node.js (LTS), then in this project folder run:

```bash
npm install
npm run dev
```

Open the local address printed by Vite.

## 2. Create Supabase project

1. Create a project at https://supabase.com/
2. In Project Settings → API, copy the Project URL and anon/public key.
3. Copy `.env.example` to `.env.local` and fill in the values:

```env
VITE_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
VITE_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

The anon/public key is intended for browser use when Row Level Security is correctly enabled. NEVER put a Supabase service_role key in this website.

4. Open Supabase SQL Editor and run `supabase-schema.sql`.
5. In Supabase Storage, create a bucket named `tailor-portfolio`. Set it to public only if portfolio images are meant to be publicly viewable. The SQL file includes starter upload policies.

After setting environment variables, restart the development server. Real authentication and listings will replace demo mode.

## 3. Publish for free with Cloudflare Pages

1. Push this project to your GitHub repository.
2. In Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git.
3. Select your repository.
4. Framework preset: Vite. Build command: `npm run build`. Build output directory: `dist`.
5. Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` under Settings → Environment variables.
6. Deploy. Your site will receive a `*.pages.dev` address.

Cloudflare's free plan and Supabase's free plan have limits and terms that can change. This is a starter for a small MVP, not a guarantee of unlimited free production service.

## 4. Important launch checklist

- Review the SQL policies with care before inviting real users.
- Verify tailor details and approve listings manually before showing them publicly.
- Add moderation, spam prevention, privacy policy, terms, and a way to report listings.
- Do not collect customer body measurements or sensitive personal data until you have a clear privacy and security plan.
- WhatsApp and Google Maps buttons open external services. They do not require API keys.
- Payment collection is intentionally not enabled. Payment providers charge transaction fees and marketplace payouts require additional onboarding/compliance.
- AI chatbot is intentionally not enabled in this starter. Add it later through a server-side function; never expose an AI API secret in frontend code.
