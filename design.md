# Myme — Coffee Café Landing Page — Design Spec

Source: Figma — [Landing Page Coffee](https://www.figma.com/design/Enydhi95ctXLrKGvaPSng1/Landing-Page-Coffee)
Brand: **Myme** — specialty coffee café, Laxmi Nagar, Nagpur, India.

This doc is the build reference for the landing page in this repo. Update it if the design changes.

---

## 1. Brand & Tone
A calm, "third-wave" coffee shop. Editorial serif headlines, warm cream/brown palette, generous whitespace, no clutter. Copy voice: unhurried, intentional, sensory ("Crafted calm in every cup", "Patience is the secret ingredient").

---

## 2. Color Palette

| Name | Hex | Usage |
|---|---|---|
| Orange White (bg cream) | `#FEF9ED` | Page background (Hero, About alt sections) |
| Linen | `#FBF4E5` | Card background (menu items) |
| Soya Bean (ink) | `#5D524B` | Body text on light, button text |
| Gondola (dark ink) | `#2A1816` | Headlines on light |
| Pine Cone | `#6D635B` | Secondary paragraph text |
| Limed Oak (accent) | `#A67C52` | Eyebrow labels, links, accents, underline |
| Donkey Brown | `#A89484` | Muted image-placeholder labels |
| Makara | `#8B7D6B` | Muted captions on dark image blocks |
| Bison Hide | `#C4B8A8` | Footer secondary text (on dark brown) |
| Soft Amber | `#D4C8B8` | Body text on dark brown (Explore section) |
| Taupe (dark section bg) | `#3D332D` / `#5D524B` (Explore section bg) | Dark section background |
| Armadillo | `#4A413B` | Image placeholder fill (dark sections) |
| Albescent White | `#F7ECD9` | Button fill (primary CTA, "Visit Us") |
| Parchment | `#EDE1C7` | Image placeholder fill (light sections) |
| Bone | `#E5D9C5` | Image placeholder fill alt |
| Stark White | `#E8DBC6` | Image placeholder fill alt 2 |
| White | `#FFFFFF` | Rare |

Image placeholders use a subtle diagonal hairline pattern (45° repeating gradient at ~3% opacity) over a flat fill — replace with real photography.

---

## 3. Typography

- **Display / heading / body serif**: **Cormorant Garamond** (Google Font) — weights: Regular (400), Italic, SemiBold (600).
- **UI / labels / nav / buttons**: **Red Hat Mono** (Google Font) — weights: Regular (400), Medium (500). Always uppercase with letter-spacing on labels/buttons.

### Scale (desktop)
| Element | Font | Size | Weight | Tracking |
|---|---|---|---|---|
| Hero H1 ("Myme") | Cormorant Garamond SemiBold | 128px | 600 | -3px |
| Section H2 | Cormorant Garamond SemiBold | 52px | 600 | normal |
| Card H3 | Cormorant Garamond SemiBold | 22px | 600 | normal |
| Eyebrow label (THE MENU, OUR STORY, etc.) | Red Hat Mono Medium | 11px | 500 | 3px, uppercase |
| Nav links | Red Hat Mono Medium | 11px | 500 | 1.5px, uppercase |
| Body paragraph | Cormorant Garamond Regular | 17–18px | 400 | normal, line-height 1.7–1.8 |
| Hero subtitle (italic) | Cormorant Garamond Italic | 26px | 400 | normal |
| Button label | Red Hat Mono Medium | 13px | 500 | 1px, uppercase |
| Caption / image label | Red Hat Mono Medium | 10–11px | 500 | 2px, uppercase |
| Footer fine print | Red Hat Mono Regular | 11px | 400 | 0.5px |

Mobile: scale headlines down ~40–50% (Hero H1 → ~56px, Section H2 → ~34px); stack all multi-column layouts to single column.

---

## 4. Layout

- Max content width: **1200px**, centered, with **360px** side padding at desktop (≥1440px); reduce to 24–48px gutters on smaller viewports.
- Section vertical padding: **140px** top/bottom (desktop), reduce to ~64–80px on mobile.
- Border radius: **8px** (cards, image blocks), **12px** (hero image), pill (`999px`/`2em`) for buttons.
- Nav bar height: **72px**, fixed/sticky, translucent cream background (`rgba(254,249,237,0.95)`) with subtle bottom shadow.

### Sections (in order)
1. **NAV** — logo "Myme" (left), links About/Menu/Explore/Find Us (center), "Visit Us" pill button (right).
2. **HERO** — eyebrow ("Specialty Coffee · Laxmi Nagar, Nagpur"), giant serif "Myme" wordmark, short divider rule, italic tagline, body copy, CTA button, full-width hero image below.
3. **ABOUT** — 2-col: image left (coffee roasting), text right (eyebrow "Our Story", H2 "Born from a love of craft", two paragraphs, pull-quote with left accent border).
4. **PRODUCTS / Menu** — centered heading block ("The Menu" / "Carefully curated"), 3-card grid (Pour Over, Espresso, Cold Brew) + 2-card row (Pastries, Equipment), "View Full Menu" link with underline.
5. **EXPLORE** — dark section (brown bg `#5D524B`), 2-col: text left (eyebrow "The Space", H2 "Step inside and the world softens", two paragraphs, Hours/Location mini-grid with top border), image collage right (1 tall + 2 stacked square/rect images).
6. **FOOTER** — dark section, 4-col: brand blurb, Visit Us (address/hours), Quick Links (About/Menu/Explore/Contact), Follow Us (Instagram/Twitter/Facebook). Divider line, then copyright + "Crafted with care in Nagpur".

---

## 5. Copy (final, from Figma)

**Nav**: Myme · About · Menu · Explore · Find Us · [Visit Us]

**Hero**:
- Eyebrow: Specialty Coffee · Laxmi Nagar, Nagpur
- H1: Myme
- Tagline (italic): Crafted calm in every cup
- Body: A third-wave coffee space where every pour is an invitation to slow down, savor the moment, and find your quiet.
- CTA: Visit Us

**About**:
- Eyebrow: Our Story
- H2: Born from a love of craft
- Body 1: Myme began with a simple belief — that great coffee deserves patience. Nestled in the heart of Laxmi Nagar, Nagpur, we source single-origin beans from farms across India and the world, roasting each batch to draw out its truest character.
- Body 2: Our baristas are devotees of the craft. Every pour-over, every espresso, every cold brew is prepared with intention — because the ritual of making coffee is just as important as drinking it.
- Quote: "Patience is the secret ingredient. In coffee, as in everything."

**Menu**:
- Eyebrow: The Menu
- H2: Carefully curated
- Subhead: Every item exists for a reason. Thoughtfully sourced, mindfully prepared.
- Card 1 — Single-Origin Pour Over: Seasonal beans from small farms, brewed by hand to bring out every subtle note.
- Card 2 — House Espresso: Our signature blend — rich, balanced, and deeply comforting. The soul of Myme.
- Card 3 — Cold Brew: Steeped for 18 hours. Impossibly smooth, naturally sweet, and best enjoyed unhurried.
- Card 4 — Fresh Pastries: Baked every morning by our in-house baker. Butter croissants, sourdough, and seasonal favorites.
- Card 5 — Brewing Equipment: Hand-picked tools for the home brewer. Grinders, gooseneck kettles, filters, and more.
- Link: View Full Menu

**Explore**:
- Eyebrow: The Space
- H2: Step inside and the world softens
- Body 1: Warm wood, the quiet hum of the grinder, soft light falling through wide windows — Myme is designed to be your pause. Whether you're here to work, read, or simply sit with your thoughts, this is your space.
- Body 2: We keep things intentionally unhurried. No rush, no noise, just the gentle rhythm of a space that was made for you.
- Hours: Open daily 9:00 AM — 10:00 PM
- Location: Laxmi Nagar, Nagpur, India

**Footer**:
- Brand: Myme — Crafted calm in every cup. A specialty coffee space in the heart of Nagpur.
- Visit Us: Laxmi Nagar, Nagpur, Maharashtra, India · Open daily 9:00 AM — 10:00 PM
- Quick Links: About / Menu / Explore / Contact
- Follow Us: Instagram / Twitter / Facebook
- © 2026 Myme Coffee. All rights reserved. · Crafted with care in Nagpur

---

## 6. Assets needed (placeholders in build, replace with real photos)
- Hero: wide café interior shot (1824×472 aspect, ~3.86:1)
- About: coffee roasting process (440×550, ~4:5 portrait)
- Explore: café interior (232×309 portrait), latte art (square), coffee beans (232×174 landscape)
- Menu cards: pour-over, espresso, cold brew, pastries, equipment (square-ish, ~381×286)

---

## 7. Build notes
- Stack: plain HTML/CSS/JS, no build step — `index.html`, `css/styles.css`, `js/main.js`.
- Fonts loaded via Google Fonts: Cormorant Garamond (400, 400 italic, 600, 600 italic) + Red Hat Mono (400, 500).
- Keep all section IDs matching nav anchors (`#about`, `#menu`, `#explore`, `#contact`) for smooth-scroll nav.
- Responsive breakpoints: 1024px (tablet), 640px (mobile) — stack all multi-column grids to single column below 768px.
