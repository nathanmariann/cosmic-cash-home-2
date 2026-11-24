## Current project structure — v3.1

HTML pages and index.html remain at the project root. CSS is in `styles/`, JavaScript in `scripts/`, and artwork and prototype snapshots in `images/`. Open the root folder in VS Code and launch index.html with Live Server. Older release notes below describe the historical flat structure.

# Cosmic Cash — cleaned baseline (review copy)

This is a conservative cleanup of the seven files you uploaded, not a redesign.

## Run
Open `index.html` with VS Code Live Server. Click **Goals** to open `goals.html`.
GitHub Pages: publish the folder contents at the repository root (with `index.html` at the root).

## Changes
- Reindented HTML for easier editing.
- Closed the monthly chart `<section>` in `goals.html` before the next heading.
- Fixed invalid `height:px` for chart legend swatches.
- Removed legacy styles for the old *separate* savings and investment charts, retaining the combined chart styles.
- Added shared CSS tokens for phone width and accent color, without changing intended sizing.
- Kept the existing home and goals page structure, compact goals list, JS behavior, and sample values.

## Not changed yet
- Home and Goals still use different phone/header/navigation classes. Unifying them could alter appearance, so that is reserved for the next design pass.
- No new financial functionality or account connections were added.
- Current chart figures are illustrative and custom goals are stored in browser localStorage.

## Files
- `index.html`, `styles.css`, `app.js`: home page
- `goals.html`, `goals.css`, `goals.js`: goals page

## Template v1.1 updates
- Header Saturn logo is the actual artwork extracted from the supplied `Home PageV2.pdf` (page 1).
- Home chart now has three grouped bar series: Income (deep purple), Expenses (lavender), and Investment performance (teal).
- Investment performance means *monthly investment gain*, not the investment account balance. Current chart bar heights are illustrative visual values; they are not connected to real data.
- Home and Goals share CSS color tokens (`--purple`, `--lavender`, `--teal`) via `styles.css`.
- Existing Goals chart, compact savings goals, and JS behaviors are preserved.
- These are styling and prototype changes; no bank connection or real investment calculation is implemented.


## Version 1.2 — home screen refinements
- Four quick actions in one row: Credit, Pay Bills, Transfer Money, Cards.
- Savings and Budget entry points moved into Available Financial Balance card (prototype dialogs).
- Credit displays number 742 without gauge.
- Analytics heading now reads Income - Expenses - Investments.
- Header bell, cellular/Wi-Fi/battery indicators, and matching purple SVG bottom icons.
- Home bottom item replaced with Lock. Lock hides the dashboard until Unlock demo is clicked. This is NOT real authentication or security.
- Goals page retained as previously supplied.


## v1.3 — Home screen spacing
- Increased Income and Expenses cards from 82px to 112px minimum height.
- Increased the analytics plot from 111px to 163px and proportionally enlarged the monthly bars.
- Kept the phone frame, bottom navigation, other page layout, colors, and sample values unchanged.

Version 1.4: Replaced the More navigation item with a purple shopping cart labeled Shopping on Home and Goals, matching the Home Page V2 reference. The Home Shopping button opens the existing Shopping Planner prototype dialog.


## Version 1.5 — Scrum mapping and legibility
Updated pop-up Scrum and Sprint mappings as requested, including grouped notifications, settings, cards, analytics, shopping, credit, Saturn, and lock. The lock displays its Scrum preview before activating the demo lock screen. Removed Scrum #16 from the balance-card arrow popup. Enlarged Savings/Budget controls and increased type sizes while retaining the approved v1.4 layout.


## Version 1.6 — Readability update
Enlarged Home screen titles, quick-action and navigation button labels, income/expense card labels and values, chart title, chart legend, month labels, and feature-preview text. The existing phone frame dimensions, colors, Scrum mappings, chart series, and behavior are unchanged. On narrow screens the type scales down slightly to avoid clipping.


## v1.7 Scrum detail index updates
Only the Scrum detail cards below the phone were changed. Added #16 and #64 to Account & Updates; #63 to Security & Cards; #23 to Money Tools; and a sixth Account Tools card (#18, #19, #17, #62). Existing phone layout and popup behavior remain unchanged.


## Version 1.8 — Goals page layout
- Approved Home page index, Scrum details, pop-ups and lock interaction unchanged.
- Goals page uses same fixed phone viewport proportions and bottom navigation typography.
- Savings and Investments grouped chart expanded from 80px to 218px; bars now use full available chart plot height, with larger labels and legend.
- Goals content scrolls inside the phone so navigation stays visible even with added custom goals.
- Financial figures are illustrative and custom goals remain stored locally.


## v1.9 — Card authorizations (SCRUM #20)
- New `authorizations.html` with fixed-height scrollable phone, simulated transaction approvals and per-card demo pre-authorization settings (localStorage).
- Home Cards quick action now opens authorizations page.
- Goals bottom navigation Lock replaced by Home. Home lock remains exclusive to index.
- Prototype only; not connected to real cards, payment processors, or banks.


## v2.0 — Direct Bill Pay (SCRUM #22)
- Added `bills.html`, `bills.css`, and `bills.js` for a fixed-height, scrollable bill-payment prototype matching the established app styling.
- Lists four sample billers with amount, due date, payment source, and Auto Pay or Press to Pay status.
- Manual Pay Now opens a confirmation dialog and marks the bill paid in browser-local demo data. Auto Pay is only a preference label, not an automatic scheduler.
- Add Bill Pay Account form accepts payee, amount, due date, payment source, and Auto Pay selection. Entries persist in localStorage when available.
- Home Pay Bills quick action opens `bills.html`; all other approved Home/Goals/Authorizations layouts remain unchanged.
- No real banking, billing, or funds transfer occurs.


## v2.1 visual polish
- Replaced placeholder cellular/Wi-Fi/battery text with the same CSS-drawn status icons used on Home across Goals, Card Authorizations, and Direct Bill Pay.
- Applied a consistent crisp, darker, flat phone frame on all four pages. No 3D effects.
- Preserved existing functionality, layouts, and scrolling.


## v2.2 Status bar fix
- Goals, Card Authorizations and Direct Bill Pay now keep the time, cellular signal, Wi-Fi and battery outside the scrolling content, fixed at the top of the phone.
- The Home lock overlay also displays the matching status indicators with light contrast against the purple background.
- No change to the approved navigation, cards, transaction data or phone frame.


## v2.3 — Financial Goals design history
- Added a small side snapshot of the original Financial Goals prototype (from the supplied one-page PDF).
- Snapshot is an image outside the phone frame; clicking it opens the full image.
- On narrow screens the history panel moves below the phone.
- Approved Goals phone layout, chart, status bar, navigation and app logic unchanged.


## v2.4 — SCRUM #35 Shopping Planner (Sprint 3)
New shopping.html, shopping.css, shopping.js based on the team reference screenshot. Shopping navigation opens the planner. SCRUM #27 receipt saving and SCRUM #34/#37 price finder are clickable placeholder dialogs, not implemented pages. Sample purchase items can be added and stored locally. Approved existing pages retain their layouts.

## v2.5
SCRUM #62 Sprint 3: transfer.html, account and recipient transfer demos, confirmation and local activity.

## v2.6
Income (SCRUM #19, Sprint 1): sample deposit history, date filters, monthly graph, source totals, search, original wireframe. Open from Home Income card.

### v2.7
Home chart legend now has independent Income, Expenses and Investments controls. Income opens income.html; Expenses (#18) and Investments (#17) open feature previews until their pages are built. The original analytics heading retains its existing combined analytics preview.

### v2.8 — Expenses (SCRUM #18 · Sprint 1)
Expense overview, date filters, payment method chart, category insights and searchable demo transactions. Both original design snapshots are included. Home expense summary and chart legend link to expenses.html.

## v2.9
SCRUM #17 Sprint 1: financial overview (overview.html), linked from Home graph heading. Original and team snapshots included. Demo data matches Income and Expenses detail pages.

## v3.0
SCRUM #33 Sprint 4: Investments placeholder. SCRUM #14 Sprint 1: demo institution search, manual entry and local account nicknames. No actual institution connection or credentials. Original team slide included as snapshot.
