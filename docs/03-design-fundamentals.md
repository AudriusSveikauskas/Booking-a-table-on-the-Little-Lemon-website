# Design fundamentals — Little Lemon brand style guide

This document turns the wireframe into a high-fidelity design language by
applying Little Lemon's brand style guide: colour palette, typographic
hierarchy and imagery. The same tokens are implemented in CSS during the
styling exercises (see `src/index.css`).

## Colour palette

| Token | Hex | Usage |
| --- | --- | --- |
| Primary green | `#495E57` | Headers, footer, primary surfaces, selected states |
| Primary yellow | `#F4CE14` | Primary buttons / call-to-action, highlights |
| Secondary salmon | `#EE9972` | Accents, secondary highlights |
| Secondary peach | `#FBDABB` | Soft backgrounds, cards |
| Highlight light | `#EDEFEE` | Section backgrounds, input fields |
| Highlight dark | `#333333` | Body text on light backgrounds |

The primary green + yellow pairing is the brand's signature. The
green/white inversion is reused as the "selected" affordance for the occasion
dropdown (see `02-components.md`).

## Typography

Two Google Fonts carry the whole system:

| Role | Font | Notes |
| --- | --- | --- |
| Display / titles | **Markazi Text** (serif) | Warm, editorial feel for the brand name and hero title |
| Body / UI | **Karla** (sans-serif) | Highly legible for paragraphs, labels and controls |

Suggested type scale:

| Style | Font | Size / weight |
| --- | --- | --- |
| Display title | Markazi Text Medium | ~64 px |
| Sub title | Markazi Text Regular | ~40 px |
| Section title | Karla ExtraBold | ~20 px, uppercase |
| Card title | Karla Bold | ~18 px |
| Paragraph / lead | Karla Regular/Medium | ~16–18 px, line-height 1.5 |
| Highlight text | Karla Medium | ~16 px |

## Imagery

Brand photography is warm and food-forward. The assets supplied with the style
guide are imported into the project under `src/assets/`:

```
src/assets/
├── logo.svg                     Little Lemon logo
├── images/
│   ├── restaurant-food.jpg      Hero dish
│   ├── greek-salad.jpg          Special
│   ├── bruschetta.svg           Special
│   ├── lemon-dessert.jpg        Special
│   ├── restaurant.jpg           About / atmosphere
│   ├── restaurant-chef.jpg      About / atmosphere
│   ├── mario-and-adrian-a.jpg   About — the owners
│   └── mario-and-adrian-b.jpg   About — the owners
└── icons/
    ├── basket.svg  dish.svg  home.svg
    ├── recent.svg  credit-card.svg
    └── hamburger.svg            Mobile navigation toggle
```

## From wireframe to mock-up

Applying these colours, fonts and images to the wireframe content blocks
produces the high-fidelity homepage: a green hero with a yellow
**Reserve a table** button, dish cards on a light background, testimonials, and
an about section featuring the owners. These tokens are the single source of
truth that the React/CSS implementation references so the build stays faithful
to the design.
