# Little Lemon — Reserve a table

A responsive React web app for the **Little Lemon** restaurant that lets
customers reserve a table online. Built for the Meta Front-End Developer
Capstone project.

The app presents the restaurant's homepage (hero, weekly specials,
testimonials and an about section) and a fully functional, validated booking
flow that fetches available times from a booking API and confirms the
reservation.

## Features

- **Responsive layout** — mobile-first CSS using Flexbox and CSS Grid, with
  breakpoints for tablet and desktop.
- **Semantic, accessible markup** — `header` / `nav` / `main` / `footer`
  landmarks, a skip-to-content link, labelled form controls, `aria-*`
  attributes, `role="alert"` errors and visible focus states.
- **Client-side routing** — `react-router-dom` with Home, Booking and
  Confirmation pages.
- **Stateful booking form** — available times held in a `useReducer` store and
  shared between the page and the form.
- **API integration** — available times are fetched per selected date and the
  reservation is submitted to the booking API.
- **Validated form** — combined HTML5 and React validation with meaningful,
  per-field error messages and a disabled submit button while invalid.
- **Unit tests** — React Testing Library + Jest covering the form, validation
  and the API query reducers.

## Tech stack

- React (Create React App / `react-scripts`)
- `react-router-dom` 6
- Jest + React Testing Library
- Plain CSS with custom-property design tokens

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer
- npm (bundled with Node.js)

### Installation

```bash
git clone https://github.com/AudriusSveikauskas/Booking-a-table-on-the-Little-Lemon-website.git
cd Booking-a-table-on-the-Little-Lemon-website
npm install
```

### Running the app

```bash
npm start
```

Open <http://localhost:3000> to view it in the browser. The page reloads on
edits.

### Running the tests

```bash
npm test
```

Runs the test suite in watch mode. To run once (e.g. in CI):

```bash
# macOS / Linux
CI=true npm test

# Windows PowerShell
$env:CI="true"; npm test
```

### Building for production

```bash
npm run build
```

Outputs an optimised production bundle to the `build/` folder.

## Project structure

```
src/
├── api.js                  Booking API (fetchAPI / submitAPI)
├── App.js                  Layout + routes
├── index.js                Entry point (BrowserRouter)
├── index.css               Design tokens, base styles, helpers
├── App.css                 Layout and component styles
├── assets/                 Logo, photography and icons (from the brand kit)
├── components/
│   ├── Header.js  Nav.js   Site header and navigation
│   ├── Hero.js             Homepage call-to-action
│   ├── Specials.js         Weekly specials (from data)
│   ├── Testimonials.js     Customer reviews
│   ├── Chicago.js          About section
│   ├── Footer.js           Site footer
│   └── BookingForm.js      Validated, controlled reservation form
├── data/specials.js        Specials content
└── pages/
    ├── HomePage.js         Composes the homepage sections
    ├── BookingPage.js      Booking state + submit handler
    └── ConfirmedBooking.js Confirmation page

docs/                       Design and UX documentation
├── 01-wireframe.md
├── 02-components.md
├── 03-design-fundamentals.md
└── 04-ux-evaluation.md
```

## The booking flow

1. The user opens **Reserve a table**.
2. `initializeTimes()` loads the available times for today from `fetchAPI`.
3. Choosing a date dispatches an update so `updateTimes()` refetches the times
   for that date.
4. The form validates date, time, guests (1–10) and occasion; submit is
   enabled only when everything is valid.
5. On submit, `submitAPI` is called and the user is routed to the confirmation
   page.

## Documentation

Design and UX artefacts (wireframe, component design, brand style guide and the
heuristic UX evaluation) live in the [`docs/`](docs/) folder.
