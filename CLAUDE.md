# CLAUDE.md

Private tutoring website for "English with Kym" (Schwabmünchen, Germany). Astro,
static output, TypeScript, plain scoped CSS: no UI framework, no client JS, no
external fonts/CDNs, no analytics/cookies.

## Structure

- `src/i18n/de.ts` / `src/i18n/en.ts`: all page copy, typed by `src/i18n/types.ts`.
  Edit these for text changes; don't hardcode strings in components.
- `src/components/HomePage.astro`: the one-page layout (hero → learn → offer → about
  → lessons → contact), shared by both languages via `src/pages/index.astro` (German,
  default locale at `/`) and `src/pages/en/index.astro` (English at `/en/`).
- `src/layouts/Layout.astro`: shared chrome (head, header, skip link, footer),
  used by the home page and by the legal pages.
- `src/pages/impressum.astro` / `src/pages/datenschutz.astro`: German-only legal
  pages, contain placeholder name/address (postal address wasn't available).
- `src/components/Icon.astro`: inline SVG icon set (no icon font). The source PDF had
  icon glyphs that extracted as garbled characters in `docs/website-text.txt`; those
  were replaced with these SVGs.
- `src/consts.ts`: real contact details (email/phone), shared by both languages.

## i18n routing

Astro's built-in i18n (`astro.config.mjs`): `defaultLocale: 'de'`,
`prefixDefaultLocale: false`, so German pages live directly under `src/pages/` and
English under `src/pages/en/`.

## Deployment

Deployed to GitHub Pages via `.github/workflows/deploy.yml` (build + deploy on push
to `main`, or manually via workflow_dispatch). Repo setting **Pages → Source** must
be **"GitHub Actions"**.

Served at the default Pages URL `https://kaireichart.github.io/english-with-kym/`
(no custom domain yet), so `astro.config.mjs` sets `site: 'https://kaireichart.github.io'`
and `base: '/english-with-kym'`. Because of `base`, every internal link/asset
reference (nav, language switcher, hreflang alternates, canonical, favicon, footer
legal links) uses `import.meta.env.BASE_URL` or the `astro:i18n` helpers
(`getRelativeLocaleUrl` / `getAbsoluteLocaleUrl`) instead of hardcoded `/` paths:
don't reintroduce hardcoded absolute paths, they'll 404 under the base path.

To move to a custom domain later: remove `base` and change `site` to the new
domain, no other code changes needed.

## Known gaps for a later pass

- Impressum/Datenschutz have placeholder name and postal address.

## Style

- Never use em dashes or spaced en dashes (Gedankenstriche) in copy, titles, comments
  or docs; use commas, colons, full stops or brackets. En dash only in numeric ranges
  like 7.–9.
