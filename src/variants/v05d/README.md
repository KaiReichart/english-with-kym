# Variant 05d — Letters from London

A refined sub-variant of 05 ("The Schwabmünchen Line"). Same British-heritage
DNA — navy / pillar-box red / cream, Libre Baskerville + Inter, the
Penguin-paperback and Underground-signage grammar — but told as a personal
letter from Kym rather than a brochure. The hero reads like a postcard she
sent from London; every section below it is a numbered chapter of that
story, closing with a proper letter sign-off at the contact section.

**Headline:** "Geboren in London. Seit über 30 Jahren in Schwabmünchen."
**Subline (the letter):** "Ich unterrichte Englisch in Schwabmünchen,
meistens eins zu eins. 15 Jahre privat, nach 35 Jahren mit Schulungen und
Vorträgen davor."

## What's refined vs. v05

- **Hero → postcard.** The oval "cameo" photo frame is replaced with a
  rectangular postcard mount: a dashed-border postage stamp (original
  artwork — a mini tri-band, not a copied postal mark) and a postmark
  medallion overlap its corners. The copy itself reads as a short letter,
  not a feature list.
- **Roundel → postmark.** The numbered marker keeps the original ring + bar
  grammar but gains a dashed outer "cancellation" ring, and gets an explicit
  narrative job: it numbers chapters of a story, not arbitrary sections —
  so the device is earned rather than decorative. It also now ships in
  three colour variants (`on="paper" | "navy" | "red"`) so it stays legible
  on every section background, including the one component-level thing
  Astro's scoped styles can't reach from outside.
- **Eyebrows → chapter labels.** v05's tracked-uppercase sans eyebrows
  ("PHILOSOPHIE", "LEISTUNGEN") are gone — a known generic-AI tell. In their
  place, an italic serif line ("Kapitel Eins", "Kapitel Zwei"…) that fits
  the paperback voice instead of SaaS-template chrome.
- **Conversation gets top billing.** Per the brief, one-to-one conversation
  is pulled out of the three-card offer grid into its own full chapter
  (Kapitel Zwei) with a larger image and a pull-quote close. Nachhilfe and
  Business English share a quieter, paired chapter (Kapitel Drei) as
  "Teil eins" / "Teil zwei".
- **Typographic scale & rhythm.** Larger, tighter-leading display sizes on
  H1/H2 with `hyphens: auto` for German compounds, slightly more generous
  section padding (6.25rem desktop vs. 5.5rem), and body copy capped to
  readable measures throughout.
- **Compact mobile header.** Sticky header padding shrinks further on
  mobile, and the nav becomes a horizontally scrollable strip (no wrap,
  no overflow) instead of stacking.
- **One dry-humour beat, not a running joke.** The brief asked for a "touch"
  of British dry humour, not a bit — it appears exactly once, in the About
  chapter ("wo man früh lernt, dass der Tee kalt wird, wenn man nicht
  aufpasst"), and nowhere else.

## New copy

All page text lives in `copy.ts`, typed and separate from markup. Facts are
limited to what the brief supplied: no prices, no trial lesson, no
testimonials/numbers, no certificates, no online lessons.

## Fonts

- **Libre Baskerville** (incl. italic, now also bold-italic) — headings,
  letter body, chapter labels, pull-quotes.
- **Inter** (variable) — nav, buttons, small labels, the stamp/postmark.

## Palette

Unchanged from v05: navy `#0f2142`, navy-deep `#081530`, pillar-box red
`#c8102e`, red-deep `#8f0b20`, cream `#f3ecd9`, cream-deep `#e7dcc0`, paper
`#faf6ec`, ink `#14161c`.
