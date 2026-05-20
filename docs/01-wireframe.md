# Wireframe — Little Lemon homepage

A wireframe is the structural blueprint of a screen. It fixes *where* content
lives and *how* a user moves through a task before any branding, colour or
imagery is added. The goal here is to introduce the missing **reserve-a-table**
flow, which previously had no place in the navigation and no call-to-action on
the homepage.

## Client requirements (content blocks)

The Little Lemon owners asked for the following content, which becomes the
skeleton of the page:

- About Little Lemon
- Highlights and specials
- Descriptions and photos of dishes
- Navigation bar
- Footer
- Testimonials

## Frame and grid

- **Frame:** 1440 × 2900 px (desktop homepage).
- **Layout grid:** 12 columns — the standard responsive grid that lets each
  section align to a shared rhythm and reflow predictably on smaller screens.

## Page structure (top to bottom)

```
┌───────────────────────────────────────────────────────────────┐
│  NAV BAR                                                        │
│  [logo]            Home  About  Menu  Reserve a table  Login    │
├───────────────────────────────────────────────────────────────┤
│  HERO                                                           │
│  Little Lemon — Chicago                                         │
│  Short restaurant description.                                  │
│  [ Reserve a table ]   <- primary call-to-action               │
│                                          [ hero food image ]    │
├───────────────────────────────────────────────────────────────┤
│  HIGHLIGHTS / SPECIALS                                          │
│  This week's specials!            [ Online menu ]               │
│  ┌────────┐  ┌────────┐  ┌────────┐                             │
│  │ dish 1 │  │ dish 2 │  │ dish 3 │   (image, name, price,      │
│  └────────┘  └────────┘  └────────┘    short description)       │
├───────────────────────────────────────────────────────────────┤
│  TESTIMONIALS                                                   │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐  (rating, avatar, name,    │
│  └──────┘ └──────┘ └──────┘ └──────┘   review)                  │
├───────────────────────────────────────────────────────────────┤
│  ABOUT                                                          │
│  Little Lemon / Chicago      [ owners photo ]                   │
│  Story paragraph.                                               │
├───────────────────────────────────────────────────────────────┤
│  FOOTER                                                         │
│  [logo]   Navigation   Contact   Social media                   │
└───────────────────────────────────────────────────────────────┘
```

## Section notes

| Section | Purpose | Key elements |
| --- | --- | --- |
| Navigation bar | Global wayfinding; surfaces the new reserve-a-table link | Logo, primary links incl. **Reserve a table** |
| Hero | First impression + primary conversion point | Title, location, description, **Reserve a table** button, hero image |
| Highlights / specials | Promote the week's dishes | Section title, "Online menu" button, dish cards (image, name, price, description) |
| Testimonials | Build trust through social proof | Rating, customer name/photo, short quote |
| About | Tell the brand story | Heading, location, paragraph, photos |
| Footer | Secondary navigation and contact | Logo, link columns, contact, social |

## Why this addresses the brief

The reserve-a-table feature appears **twice** on the homepage — as a navigation
link and as the hero's primary button — so the previously hidden feature is now
the most prominent action a visitor can take. The wireframe deliberately uses
plain rectangles and placeholder labels; typography, colour and real imagery are
applied later in the high-fidelity design (see `03-design-fundamentals.md`).
