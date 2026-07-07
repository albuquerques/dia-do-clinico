# Experiência Medsafe — Design System

Brand pack for **Experiência Medsafe**, a two-day in-person immersion in emergency medicine ("imersão presencial em urgências"). The event turns knowledge into practice: students work through clinical stations, simulate real scenarios, and build the confidence to make decisions on shift ("no plantão").

This project is a **brand pack**, not an application library. Per the brief, it contains only what's needed to design *on brand*: the logo, the color and type systems, the fonts, the signature backgrounds, and a handful of brand primitives. It intentionally contains **no product UI kits or full screens**.

---

## Sources provided

- `uploads/Logo_Experiência Medsafe_Horizontal negativo.svg` — horizontal logo, light (for dark grounds) → `assets/logo-horizontal-negative.svg`
- `uploads/Logo_Experiência Medsafe_Horizontal positivo.svg` — horizontal logo, dark (for light grounds) → `assets/logo-horizontal-positive.svg`
- `uploads/Logo_Experiência Medsafe_Horizontal(1).svg` — horizontal logo, master (uncolored classes) → `assets/logo-horizontal.svg`
- `uploads/book-svg.svg` — the open-book symbol → `assets/book-mark.svg`
- `uploads/design exemplo.pdf` — a design reference page (informed the palette). The hero **aurora** background is a client-supplied Illustrator export → `assets/aurora-bg.png` (a CSS fallback lives in `--gradient-aurora`).s a bitmap.

### Fonts

Current mapping (`tokens/fonts.css`):

- **Westmount** (the "EXPERIÊNCIA" lockup, eyebrows & labels) → **Westmount** *(genuine, self-hosted in `assets/fonts/`)*
- **Montserrat** (body & UI) → **Montserrat** *(genuine, Google Fonts)*
- **Yorkten Slab** (display / the "Medsafe" wordmark) → **Zilla Slab** *(substitute — approved by client)*

Westmount weights bundled: Light 300, Regular 400, Bold 700, ExtraBold 800. Only **Yorkten Slab** remains substituted (Zilla Slab), per client sign-off; swap it in later if the real face is wanted.

---

## Content fundamentals

- **Language:** Brazilian Portuguese.
- **Voice:** direct, confident, clinical-but-human. Speaks to the learner as a practitioner-in-training. Verbs of action and mastery: *vivenciam, simulam, desenvolvem, tomar decisões*.
- **Person:** third-person about the experience ("os alunos vivenciam…") and imperative for CTAs ("Inscreva-se", "Saiba mais").
- **Casing:** headlines and body in sentence case; **eyebrows, labels, meta and buttons in UPPERCASE with wide tracking** (the mono lockup look). The wordmark itself pairs uppercase "EXPERIÊNCIA" with title-case slab "Medsafe".
- **Tone words:** *imersão, presencial, urgências, plantão, estações clínicas, cenários reais, segurança, prática*.
- **Numbers as texture:** the format details are used as terse mono meta — e.g. `02 DIAS · 12 ESTAÇÕES · SP`. Keep them factual, not decorative.
- **Emoji:** none. The brand is clinical and precise; do not use emoji.
- **Example copy:** *"Em dois dias intensivos, os alunos vivenciam estações clínicas, simulam cenários reais e desenvolvem mais segurança para tomar decisões no plantão."*

---

## Visual foundations

- **Palette:** a dark-first world. Deep **teal-black** grounds (`--ink-900 #05191B`) lit by a vivid **emerald-teal** (`--teal-500 #08B3A1`, sampled directly from the reference artwork). Type and light surfaces use **"bookwhite"** (`--paper #EEF4F5`). An **urgency alert** red-orange (`#E4572E`) is reserved for emergency/clinical emphasis.
- **Signature background — the aurora:** a deep teal-black field with soft diagonal emerald light blooms, **generated as CSS** via `--gradient-aurora` (no bitmap). This is the hero ground. Full-bleed, no borders.
- **Type:** slab display (Yorkten Slab → Zilla Slab) for headlines and the wordmark; **Westmount** — a wide-tracked geometric display — for eyebrows, labels, meta and buttons; **Montserrat** for body. for body. The display/mono pairing is the core identity signal.
- **Glow, not shadow:** elevation on dark grounds is expressed as a **teal glow** (`--glow-teal-*`), not drop shadow. Reserve neutral shadows (`--shadow-*`) for the rare light-ground card.
- **Corners:** crisp and modest. `--radius-sm 8px` / `--radius-md 12px` for cards and buttons; pill (`--radius-pill`) only for tags/chips. Nothing is heavily rounded.
- **Borders:** hairline, low-opacity — `--border-on-dark rgba(238,244,245,.14)` on dark, `--border-on-light` on light. A teal divider (`--divider-teal`) marks brand moments.
- **Cards:** flat raised surface (`--ink-800`) with a hairline border; optional teal glow for emphasis. No heavy drop shadows, no colored left-border accents, no gradients-for-gradients'-sake.
- **Motion:** purposeful and quick. `--dur-base 220ms` with `--ease-standard`; fades and gentle rises, no bounce. Respect reduced-motion.
- **Interaction states:** primary buttons lighten teal on hover (`--brand-hover`) and deepen on press (`--brand-press`); outline/ghost shift toward full teal. Focus uses a `--focus-ring` teal outline. No shrink/scale gimmicks.
- **Imagery vibe:** cool, dark, high-contrast; teal-lit. When photography is used it should feel clinical and calm, keyed to the teal/ink palette.

---

## Iconography

- **No proprietary icon font or SVG icon set was provided** with this brand pack. The only supplied vector marks are the **logo lockups** and the **open-book symbol** (`assets/book-mark.svg`).
- The open-book symbol is the brand's hero glyph — use it (recolored via CSS mask to teal or bookwhite) as a favicon, bullet, or decorative motif. Do **not** outline it or redraw it.
- **Recommended icon set for product/UI work:** [Lucide](https://lucide.dev) — clean 1.5–2px geometric strokes that sit well with the mono/slab pairing. Link from CDN and color with `currentColor` (teal on dark, graphite on light). *This is a recommendation, not a supplied asset — confirm before standardizing.*
- **Emoji:** not used.
- **Unicode as marks:** the middot `·` is used as a separator in mono meta lines (`02 DIAS · 12 ESTAÇÕES`); the arrow `→` appears in ghost CTAs. Both are intentional and on-brand.

---

## Components

Reusable React brand primitives (in `components/brand/`), exposed on `window.ExperiNciaMedsafeDesignSystem_de775a`:

- **Logo** — the official horizontal lockup or open-book symbol, from the brand SVG assets. Never redraw by hand.
- **Eyebrow** — wide-tracked uppercase mono kicker/label, paired above slab headings.
- **Button** — mono-label CTA; `primary` (solid teal + glow), `secondary` (outline on dark), `ghost` (teal text); sizes `sm`/`md`/`lg`.

Per the brief, product UI kits and full-screen recreations were intentionally **not** built.

---

## Index / manifest

- `styles.css` — global entry point (consumers link this one file). `@import` lines only.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`.
- `assets/` — logos (`logo-horizontal-negative.svg`, `-positive.svg`, `logo-horizontal.svg`), `book-mark.svg` (+ teal/white/ink variants), and Westmount fonts in `assets/fonts/`.
- `components/brand/` — `Logo`, `Eyebrow`, `Button` (+ `.d.ts`, `.prompt.md`, `brand.card.html`).
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand) shown in the Design System tab.
- `SKILL.md` — Agent-Skills-compatible entry point.

---

## Caveats / open items

1. **One substituted font** — Yorkten Slab (the "Medsafe" wordmark) uses **Zilla Slab**, approved by client. Westmount and Montserrat are the genuine faces.
2. **Logo brand colors** — the supplied logo SVGs carry no fill colors (they inherit `currentColor`). The dark/light usage and the teal accent are inferred from the reference artwork; confirm the exact logo color spec if one exists.
3. **No icon system supplied** — Lucide is a recommendation only.
4. **No UI kits** — omitted deliberately per the brief.
