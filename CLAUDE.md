# CLAUDE.md

Private tutoring website for "English with Kym" (Schwabmünchen, Germany). Astro,
static output, TypeScript, plain scoped CSS — no UI framework, no client JS, no
external fonts/CDNs, no analytics/cookies.

## Structure

- `src/i18n/de.ts` / `src/i18n/en.ts` — all page copy, typed by `src/i18n/types.ts`.
  Edit these for text changes; don't hardcode strings in components.
- `src/components/HomePage.astro` — the one-page layout (hero → learn → offer → about
  → lessons → contact), shared by both languages via `src/pages/index.astro` (German,
  default locale at `/`) and `src/pages/en/index.astro` (English at `/en/`).
- `src/layouts/Layout.astro` — shared chrome (head, header, skip link, footer),
  used by the home page and by the legal pages.
- `src/pages/impressum.astro` / `src/pages/datenschutz.astro` — German-only legal
  pages, contain placeholder name/address (postal address wasn't available).
- `src/components/Icon.astro` — inline SVG icon set (no icon font). The source PDF had
  icon glyphs that extracted as garbled characters in `docs/website-text.txt`; those
  were replaced with these SVGs.
- `src/consts.ts` — real contact details (email/phone), shared by both languages.

## i18n routing

Astro's built-in i18n (`astro.config.mjs`): `defaultLocale: 'de'`,
`prefixDefaultLocale: false`, so German pages live directly under `src/pages/` and
English under `src/pages/en/`.

## Known gaps for a later pass

- `astro.config.mjs` has no `site` set (no production domain yet) — hreflang/canonical
  links are relative. Set `site` once the domain is known.
- Impressum/Datenschutz have placeholder name and postal address.
