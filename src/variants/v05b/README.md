# Variant 05b: Next Stop: Abitur

A refined sub-variant of 05 ("The Schwabmünchen Line"), re-aimed at parents and
school pupils first, with Business English and one-to-one conversation shown
as secondary offers.

## Direction

The Nachhilfe offer is presented as an Underground-style line diagram: five
stations from **5./6. Klasse** to **Abitur**, each with its own focus, running
along a navy line with a red terminus at Abitur. Copy speaks directly to the
pupil ("du"); one short, clearly labelled aside reassures parents without
turning the hero into two competing messages. Business English and
conversation follow underneath as "zwei weitere Linien": same card grammar,
secondary billing.

- **Headline:** "Nächster Halt: Abitur."
- **Subline:** "5. Klasse bis Abitur · Business English · Konversation"

## What's refined vs. v05

- **Type scale & rhythm**: headings use `clamp()` so they step smoothly
  between 320px and 1280px instead of jumping at two fixed breakpoints; a
  single spacing scale (`--sp-1`…`--sp-7`) replaces ad-hoc paddings/gaps.
- **Compact header**: a small roundel brand mark sits next to a tighter
  wordmark; the "Schwabmünchen" tag drops below 560px so the header stays one
  line even on narrow phones.
- **New motif: the tube line**: the Nachhilfe stages are drawn as an actual
  Underground line (vertical on mobile, horizontal from 720px up), with a
  red-terminus roundel marking Abitur, rather than a plain bullet list.
- **Richer but restrained tri-band**: the navy/red/cream rule now opens and
  closes the page (top of header, above footer) instead of repeating inside
  every section, so it reads as a signature rather than a wallpaper pattern.
- **Reworded, regrouped copy**: all offer bullet content is kept, but
  reorganised around the school-stage progression; a dedicated parent note
  box; shorter, more direct sentences throughout (see `copy.ts`).
- **Postcard image frames**: the about and line-diagram photos share one
  `.frame` treatment (cream border, red keyline) instead of two near-duplicate
  styles, tightening the CSS.

## Files

- `copy.ts`: all page copy, typed.
- `variant.css`: palette, type scale, spacing scale, and all component styles.
- `components/Icon.astro`, `components/Roundel.astro`: original inline SVG
  icon set and station/section marker (the roundel supports a `terminus`
  colour-flip and a `size="sm"` variant for inline line-diagram use).
