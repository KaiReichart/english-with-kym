# Variant 03: Teacher's Notebook

A warm, handmade "teacher's desk" look: cream ruled-paper backgrounds, a cork
board of pinned sticky notes for the three offers, polaroid-style taped photos,
and handwritten Caveat annotations (underlines, margin notes, arrows) sketched
in inline SVG to stand in for a teacher's red pen. The whole page reads like
flipping through Kym's own lesson notebook: friendly, personal, unpolished
in the best way, never generic.

## Fonts

- **Caveat** (400/500/600/700, self-hosted via `@fontsource/caveat`): headings,
  margin notes, section tags, stamp button, sticky-note titles.
- **Nunito Variable** (`@fontsource-variable/nunito`): all body copy.

## Palette

| Role | Colour |
| --- | --- |
| Paper | `#fbf5e6` / `#f3ecd8` (lined/squared variants) |
| Ruled lines | blue `rgba(79,110,158,.28)`, red margin `rgba(197,76,68,.45)` |
| Ink | `#2c3550` / `#454e6b` |
| Accent (pen/stamp red) | `#c8503f` / `#a53e30` |
| Sticky notes | yellow `#fdebab`, pink `#ffd3cf`, mint `#cdeccb` |
| Washi tape | `#a9cdea` / `#7fb0d9` |
| Cork board | `#b98a5c` |

Zero client-side JS; all motion (hover tilts, smooth scroll) is CSS-only and
respects `prefers-reduced-motion`.
