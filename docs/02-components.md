# Component design — "Occasion" dropdown

From the user-journey map, the persona **Tilly** wanted to choose a *type of
occasion* when reserving a table, so the restaurant can prepare something
special. This document captures the dropdown component and its interactive
variants designed in Figma, which later becomes the `occasion` field on the
booking form.

## Base (idle) state

| Property | Value |
| --- | --- |
| Size | 400 × 80 px |
| Fill | `#EDEFEE` (light grey) |
| Corner radius | 8 px |
| Effect | Drop shadow |
| Content | Label text, an icon, and a chevron arrow pointing **down** |

The chevron signals that clicking opens a list of occasion options.

## Open (active) state

When the control is clicked it expands to reveal the options:

- Corner radius and drop shadow are **removed** while open.
- Each option row uses a **dashed bottom stroke** as a separator.
- Option icons are dropped — only the labels remain.
- Options provided: **Birthday**, **Engagement**, **Anniversary**
  (extendable with more occasions).

```
Idle                          Open
┌──────────────────────┐      ┌──────────────────────┐
│ Occasion        ▾     │      │ Occasion        ▴     │
└──────────────────────┘      ├──────────────────────┤
                              │ Birthday              │
                              ├──────────────────────┤
                              │ Engagement            │
                              ├──────────────────────┤
                              │ Anniversary           │
                              └──────────────────────┘
```

## Selected-state variants

A Figma **component set** holds the variants. After a user picks an option, a
dedicated "selected" variant communicates the choice:

| Variant | Chevron | Fill | Text colour |
| --- | --- | --- | --- |
| Default (idle) | down | `#EDEFEE` | dark |
| Open | down | `#EDEFEE` | dark |
| Birthday (selected) | rotated 180° (up) | `#495E57` (brand green) | white |
| Engagement (selected) | up | `#495E57` | white |
| Anniversary (selected) | up | `#495E57` | white |

The colour inversion to the brand green `#495E57` with white text gives clear,
high-contrast feedback that a selection has been made.

## Mapping to code

This component becomes the **Occasion** `<select>` in the booking form
(Exercise 11+). The selected-state colour change is an accessible affordance;
in the React build it is realised with a native `<select>` whose options are
`Birthday`, `Anniversary` and `Engagement`, keeping the interaction keyboard- and
screen-reader-friendly while preserving the designed intent.
