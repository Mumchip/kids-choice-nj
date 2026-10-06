---
version: 1
name: Kids Choice transit
base: getdesign "uber" (mobility platform, black and white duet, pill controls), adapted for Kids Choice INC.
description: A plain-spoken transit language for a family-run New Jersey school bus and wheelchair transport company. Black and white carry the structure, one school-bus yellow carries the brand, and the photography of real vehicles does the decorating.

colors:
  ink: "#0e1012"          # headings, primary pill, footer fill
  canvas: "#fcfcfb"       # page background (never pure white)
  canvas-soft: "#f0f1ef"  # tinted panels, inputs
  surface-pressed: "#e2e3e0"
  hairline: "#d9dbd7"
  body: "#4a4f4c"         # secondary text, 7.9:1 on canvas
  placeholder: "#676c69"  # 5.1:1 on canvas-soft
  bus: "#ffc21a"          # the single accent. Fill only, always with ink text (12.6:1)
  bus-deep: "#e0a600"     # hover state of bus fills
  danger: "#b42318"
  dark:
    canvas: "#0e1012"
    canvas-soft: "#1a1d1f"
    hairline: "#2c3033"
    ink: "#f3f4f2"
    body: "#b9bdba"
    primary-pill: "#f3f4f2 with #0e1012 text"

typography:
  display: "Archivo, weight 700 to 800, wdth 100, sentence case, tracking -0.02em at 40px and up"
  text: "Atkinson Hyperlegible Next, weights 400 / 500 / 700. Chosen for low-vision legibility"
  scale:
    display-xxl: "clamp(2.5rem, 4.6vw + 0.5rem, 4.25rem) / 1.02"
    display-xl: "clamp(2rem, 2.4vw + 1rem, 3rem) / 1.08"
    display-lg: "1.75rem / 1.15"
    display-md: "1.375rem / 1.25"
    body-lg: "1.1875rem / 1.55"
    body-md: "1.0625rem / 1.6"
    body-sm: "0.9375rem / 1.5"

rounded:
  control: 999px  # every button, chip, nav pill
  input: 12px     # text inputs, selects, textareas, file pickers
  card: 20px      # panels, images, form cards, the dark promo block

spacing:
  base: 4px
  section-y: "py-20 mobile, py-28 desktop"
  gutter: "16px mobile, 32px desktop"
  container: 1240px
---

## Overview

Kids Choice moves two kinds of passengers: students on school routes and adults who ride in a wheelchair. Both audiences (parents, district transportation offices, caregivers, older riders) want the same thing from the site: to see quickly that the company is licensed, local, and reachable by phone. The design borrows the structure of a mobility platform (black and white, pill controls, flat cards, photography in rounded frames) and gives it a single piece of brand colour: the yellow of the company's own school buses.

Design read: trust-first local service site for families, schools and riders with disabilities. Dials: variance 5, motion 4, density 4.

## Colour rules

- Ink and canvas carry the page. The primary call to action is an ink pill ("Request a quote"). In dark mode it flips to a light pill with ink text.
- Yellow is the only accent. It is used as a fill behind ink text (fact strip, step markers, the careers band, the active nav underline, text selection). Yellow is never used as text colour and never as a gradient.
- No purple, no teal, no gradients, no glows. Shadows are reserved for the sticky nav on scroll and the open mobile menu.
- One dark promo block per page at most (the closing call block). It is a contained card, not a full-bleed band, so the page theme does not flip.

## Typography rules

- Display: Archivo 700/800 in sentence case. No gradient text, no all-caps headlines.
- Text: Atkinson Hyperlegible Next. Body never smaller than 15px; default 17px.
- Eyebrows are rationed to one per three sections and are set in Atkinson 700, 13px, uppercase, tracking 0.08em.
- Numbers that matter (phone, years) are set in the display face.

## Shape rules

- Interactive controls are pills (999px). Inputs are 12px. Cards and images are 20px. Nothing else.

## Layout rules

- Container 1240px, 16px gutters on mobile, 32px on desktop.
- Heroes are split (copy left, photo right) on every page that has a photo, and fit in the first viewport at 1440x900 and 1280x720.
- Every multi-column section collapses to one column below 768px.
- Section layout families are not repeated on the same page.

## Motion rules

- Hero copy rises in on load (opacity + 12px translate, 500ms, staggered 80ms).
- Sections reveal with CSS scroll-driven animation where supported (`animation-timeline: view()`); browsers without it show content immediately.
- Buttons press down 1px on `:active`. Arrow icons nudge 3px on hover.
- All of it is disabled under `prefers-reduced-motion: reduce`.

## Accessibility rules

- Skip link is the first tab stop. Navigation, main and footer are siblings, never nested.
- One `h1` per page; heading levels never skip.
- Focus ring: 3px solid ink outline with 3px offset (light ring in dark mode), on every interactive element.
- Active nav item carries `aria-current="page"`. The mobile menu button carries `aria-expanded` and `aria-controls`, and Escape closes the menu.
- Links never wrap buttons. Buttons that navigate are rendered as links (`asChild`).
- Decorative icons are `aria-hidden`. Every photo has descriptive alt text.
- Form labels sit above inputs, errors sit below and are announced; radio options are individually labelled.
- Each route sets its own document title.
