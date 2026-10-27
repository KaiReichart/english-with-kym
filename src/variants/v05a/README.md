# Variant 05a: The Classic

A refined pass on variant 05's British-heritage / Penguin-paperback +
Underground-signage grammar: same navy / pillar-box-red / cream palette and
Libre Baskerville + Inter pairing, but tightened into a sharper typographic
scale, a more considered hero, and a more compact mobile header.

## What changed vs. 05

- **Book-cover hero.** The hero text sits in a bordered "cover panel": a
  small-caps red band (the series strip), a two-line serif title, an
  author-credit line ("Unterrichtet von / Kym, geboren in London", the
  Penguin-cover byline), a short red rule, and the intro paragraph. CTAs sit
  outside the panel, so the editorial "jacket" and the interactive buttons
  stay visually distinct.
- **Station nameplates instead of 01–05.** The numbered roundels from 05
  (generic sequence counters) are replaced with `StationMark`: a ring +
  nameplate bar that carries the actual section name ("Philosophie",
  "Angebot", "Über Kym", "Unterricht", "Kontakt"), styled after enamel
  station signage: each section reads as a stop on the line, not just a
  number.
- **Penguin-style spine numbers on the offer cards.** Each offer card gets a
  small "N° 1 / N° 2 / N° 3" chip, echoing the volume numbers printed on
  Penguin Classics spines, instead of repeating the roundel motif on the
  photos.
- **Rectangular corner-tick photo plates.** The oval postcard frame is
  replaced with a precise rectangular frame with four small corner ticks,
  closer to a signage/engraving plate than a decorative oval.
- **Tighter type scale and rhythm.** Fluid `clamp()` sizing for the hero
  title and section headings, slightly tighter line-height, more consistent
  vertical spacing, and `hyphens: auto` on headings for long German
  compounds.
- **Compact mobile header.** Smaller brand/nav type and tighter gaps below
  420px, plus a thin second tri-band line under the header that echoes the
  top one at a smaller scale.
- **New German copy.** All text rewritten in `copy.ts`, shorter and more
  editorial, same facts and offer content as the brief.

## Headline

**"Englisch aus London, zuhause in Schwabmünchen."** The byline "Kym,
geboren in London" sits directly underneath, read as a book's title and author
line. Subline (intro paragraph): "Ich bin Muttersprachlerin aus London und
lebe seit über 30 Jahren in Deutschland. Seit 15 Jahren unterrichte ich
Englisch: persönlich, praxisnah und genau auf dich abgestimmt."

## Fonts

- **Libre Baskerville**: headings, body copy, the byline (literary,
  Penguin-paperback voice)
- **Inter** (variable): nav, small-caps labels, buttons

## Palette

Unchanged from variant 05 (see `../v05/README.md` for the full table): navy
`#0f2142`, pillar-box red `#c8102e`, cream `#f3ecd9`, paper `#faf6ec`.
