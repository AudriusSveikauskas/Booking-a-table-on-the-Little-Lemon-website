# UX evaluation — heuristic review

An abridged heuristic evaluation of the reserve-a-table flow using
**Jakob Nielsen's 10 usability heuristics**. Each issue is given a severity
rating (S0–S4) and an action.

| Severity | Meaning |
| --- | --- |
| S0 | Violates a heuristic but not really a usability issue |
| S1 | Cosmetic; fix if time allows |
| S2 | Minor; low priority |
| S3 | Major; high priority |
| S4 | Catastrophe; must fix before release |

## Findings

| # | Heuristic | Observation | Severity | Action |
| --- | --- | --- | --- | --- |
| 1 | Visibility of system status | After submitting, the user is taken to a confirmation page, but focus stayed at the top of the document. | S2 | **Fixed** — focus now moves to the "Booking confirmed!" heading on mount, announcing success to screen readers. |
| 2 | Match between system and the real world | Times are shown in 24-hour format and occasions use familiar words (Birthday, Anniversary, Engagement). | S0 | No change. |
| 3 | User control and freedom | The confirmation page offers a clear "Back to home" route; the browser back button works via client-side routing. | S0 | No change. |
| 4 | Consistency and standards | Buttons, cards and headings reuse shared classes and the brand palette across pages. | S0 | No change. |
| 5 | Error prevention | The submit button is disabled while the form is invalid, and the date field rejects past dates. | S1 | Kept; inline errors explain why. |
| 6 | Recognition rather than recall | Available times are presented as a select populated from the API, so users pick rather than recall valid slots. | S0 | No change. |
| 7 | Flexibility and efficiency | Keyboard users can skip to main content and tab through the form in logical order. | S1 | **Addressed** in the accessibility exercise (skip link, focus styles). |
| 8 | Aesthetic and minimalist design | The form asks only for what is needed: date, time, guests and occasion. | S0 | No change. |
| 9 | Help users recognise, diagnose and recover from errors | Each invalid field shows a specific, plain-language message with `role="alert"`. | S1 | Kept. |
| 10 | Help and documentation | The homepage and booking intro explain the flow; this repo's `README` documents setup. | S1 | Kept. |

## Known minor issues (backlog)

- The "Online Menu", "Order online" and social links are placeholders that do
  not yet navigate to real pages (S1) — out of scope for the reserve-a-table
  capstone, left for a future iteration.

## Outcome

The flow has no S3/S4 issues. The one S2 issue (status visibility on
confirmation) has been fixed; the remaining items are cosmetic or out of scope.
