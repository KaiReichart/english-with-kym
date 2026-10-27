# Variant 05e: Mind the Gap

A conversion-focused refinement of variant 05 ("The Schwabmünchen Line"). Same
British heritage / London Underground DNA (navy, pillar-box red, cream;
Libre Baskerville + Inter), but restructured end to end around answering a
visitor's real questions in order: what is this, is it for me, how does it
start, and what does it actually cost in time and effort.

**Headline:** "Englisch-Einzelunterricht in Schwabmünchen." / "Für Schule,
Beruf oder einfach mehr Sprechsicherheit."

**Subline:** "Persönlich, flexibel und ganz auf dich abgestimmt: unter der
Woche abends oder samstags, bei mir vor Ort."

## What's different from 05

- **New copy throughout**, written for this direction specifically (see
  `copy.ts`). Shorter sentences, no translated-English rhythm, no invented
  claims (prices, trials, testimonials, etc. were never in the brief and
  stayed out).
- **Restrained use of the Underground roundel.** 05 numbered every section
  (01–05) with the ring-and-bar roundel, even sections that aren't a
  sequence. 05e keeps that device only for the one thing that genuinely *is*
  a sequence (the three-step "Mind the Gap" process line) and connects the
  three markers with a dashed rail, like stops on a line. Every other
  section drops the numbering in favour of a plain eyebrow + heading.
- **New sections for conversion, not decoration:**
  - A three-step "So läuft's ab" block (Mind the Gap eyebrow), the real
    process only: get in touch and say where you're at → we talk it through
    → one-to-one lessons in Schwabmünchen.
  - An audience chooser styled as Underground direction signs (cream plate,
    red spine, arrow) that routes to the matching offer: Schüler/in →
    Nachhilfe, Beruf → Business English, mehr sprechen → Konversation.
  - A compact facts strip (Schwabmünchen · Einzelunterricht · werktags ab
    17 Uhr · samstags) for a one-glance recap before the trust-building
    About section.
  - A short FAQ (`<details>`/`<summary>`, no JS) answering only Wo? Wann?
    Einzelunterricht? Niveau/Alter? Anmeldung? It's pulled straight from the
    given facts, nothing invented.
- **Tighter typographic scale and rhythm.** `clamp()`-based heading sizes
  instead of fixed breakpoint jumps, a narrower measure on body copy and
  section heads, slightly reduced section padding for a brisker read, and a
  compact sticky mobile header (smaller brand lockup, horizontally-scrolling
  nav instead of wrapping to a second row).
- **Offer cards keep every original bullet** (reworded, not removed) and
  gain a small icon badge in the card header instead of the generic numbered
  roundel, so each card reads by subject (graduation cap / briefcase /
  speech bubble) rather than by position.
- Hero keeps one primary CTA (email) with phone as a clearly secondary,
  outlined action. Both appear again at the bottom of the page.

## Facts used

Only the facts given in the brief: native speaker born in London, 30+ years
in Germany, 35+ years of training seminars and public speaking in English,
15+ years of private English teaching; Nachhilfe (5th grade–Abitur),
Business English, one-to-one conversation; lessons in Schwabmünchen, usually
one-to-one, weekday evenings from 17:00 or Saturdays; contact by email or
phone, asking people to describe themselves, their level and their goals.
No prices, trial lessons, testimonials, student numbers, or certificates are
mentioned, because none were supplied.
