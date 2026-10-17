# English with Kym

Website for Kym's private English tutoring (Englischnachhilfe, Business English,
one-to-one conversation) in Schwabmünchen, Germany. A small static site built with
[Astro](https://astro.build), no client-side JavaScript, no external fonts or CDNs.

- German is the default language at `/` (the local target audience).
- English is available at `/en/`.
- `/impressum` and `/datenschutz` are German-only legal pages (linked from both languages).

## Content

All page text lives in `src/i18n/de.ts` and `src/i18n/en.ts`, typed by
`src/i18n/types.ts`. The shared page markup is `src/components/HomePage.astro`; the two
route files (`src/pages/index.astro` and `src/pages/en/index.astro`) just pass in the
language-specific data. To change copy, edit the `de.ts`/`en.ts` files — not the
components.

The original source text (extracted from the client-provided PDF) is kept for
reference in `docs/website-text.pdf` / `docs/website-text.txt`.

Contact details (email/phone) are defined once in `src/consts.ts` and used by both
language versions, since the real details are the same for both.

Some fields in `/impressum` and `/datenschutz` are placeholders (e.g. `[Vollständiger
Name]`, `[Straße und Hausnummer]`) because the postal address/legal name were not
available yet — fill these in before going live.

Photos live in `src/assets/images/` and are rendered via `astro:assets`. They're all
CC0 (public domain, no attribution required) — see `src/assets/images/CREDITS.md` for
sources.

## Commands

All commands are run from the root of the project:

| Command           | Action                                      |
| :----------------- | :------------------------------------------ |
| `npm install`      | Install dependencies                        |
| `npm run dev`       | Start local dev server at `localhost:4321`  |
| `npm run build`     | Build the production site to `./dist/`      |
| `npm run preview`   | Preview the production build locally        |

## Deployment

The site deploys to GitHub Pages via `.github/workflows/deploy.yml`, which builds
and publishes on every push to `main` (or manually via workflow_dispatch). In the
repo settings, **Pages → Source** must be set to **"GitHub Actions"** (not a branch).

It's served at the default Pages URL for a project site:
`https://kaireichart.github.io/english-with-kym/`. Because of that, `astro.config.mjs`
sets both `site` (the domain) and `base` (`/english-with-kym`, the repo name) — every
internal link/asset uses `import.meta.env.BASE_URL` or the `astro:i18n` helpers
(`getRelativeLocaleUrl` / `getAbsoluteLocaleUrl`) so it resolves correctly under that
path. If a custom domain is set up later, switch to it by removing `base` and changing
`site` to the new domain — no other code changes needed.
