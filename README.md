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

## v3.2
Settings (SCRUM #12, Sprint 1): demo security alerts, update history, saved preferences, horizontal settings tabs and original wireframe. Home gear opens settings.html.

## v3.3
Added an additional original Expenses wireframe to the left of the working SCRUM #18 page. Existing snapshots and application functionality preserved.

## v3.4 — SCRUM #38
Database MGMT settings tab uses fictional local records and simulated sync. Set DEVELOPMENT_BUILD=false in scripts/database.js to hide the tab in a user build. This is a presentation flag, not access control; production requires server-side authorization and removal of developer tools from public builds.


## v3.5
Added the original SCRUM #38 database management PowerPoint slide as a clickable design evolution image beside Settings, visible in development builds only.

## v3.6 — Notification Center
SCRUM #21 Sprint 2: Home bell opens notifications.html. Sample alerts, category filters, persistent read status and placeholders for #24, #26 and #32.

### v3.7 — Best Price Finder
SCRUM #34 Sprint 3: Shopping Planner links to price-finder.html. Sample offers, sorting, deal previews, SCRUM #37 placeholder, and original team design snapshot. No live retailer integration.

## v3.8 — Account Login (SCRUM #16)
Settings Account Login tab includes demo login/logout, password visibility, future provider and registration placeholders, and original wireframe. No credentials stored or real authentication. Direct preview: settings.html#account-login. Home remains the default development entry point.

## v3.9 — Disposable Income Budget
SCRUM #25 Sprint 2: Home Budget opens budget.html. Editable allocation, live 50/30/20 breakdown, discretionary spending, remaining balance, local demo save, and original team snapshots.

## v4.0 — Credit Score and Credit Freeze
Home Credit icon opens credit.html (SCRUM #23 Sprint 4; SCRUM #29 Sprint 3). Sample bureau scores, history, factors and simulated per-bureau freeze controls. Original design preserved.

## v4.1 — SCRUM #31 Sprint 3
Card Authorizations links to card-lock.html. Demo credit/debit card locks, sample history and linking are local only. Original wireframe retained.

## v4.2 — SCRUM #30 · Sprint 2
Financial Insights and Knowledge Base: date filters, sample cash flow analysis, searchable educational article previews, original team wireframe, and SCRUM #41 placeholder. Home Insights links to insights.html.

## v4.3 — Design evolution
Shared responsive history layout on all 18 pages. Added original Home, Shopping and Transfer artwork. Missing original artwork: Card Authorizations, Direct Bill Pay, Notification Center, and the pending Investments dashboard. No demo logic changed.

### v4.4 — Scrum development directory
Home feature index opens implemented pages directly, including Settings tabs and the demo lock screen. Unimplemented features retain preview dialogs.

## v4.5
SCRUM #32 Sprint 3: Debt Risk Alerts, linked from Notification Center and Home SCRUM directory. Demo thresholds, saved preferences, payoff estimate and original design snapshot.

## v4.6 — SCRUM #26 · Sprint 2
Spending Limit Alerts: category spending, supporting sample transactions, monthly trend chart, editable limits and alert thresholds. Linked from Notifications and Home SCRUM directory. Original team artwork included. Demo only.

### v4.7 — SCRUM #38
Updated backend web server design displayed beside the Database MGMT developer tab; original wireframe retained. Local demo metrics are distinct from server design figures. No live server connection.

## v4.8
Updated SCRUM 33 account overview and SCRUM 14 linking flow; original and updated team designs retained. Sample balances and linking are simulated.

Version 4.9: Updated Saturn artwork across all 20 pages using supplied light-background PNG; cropped display asset, original and full source preserved.

## Version 5.0
Transparent background for the shared Hi-Def Saturn logo; original artwork and all application layouts retained.


Version 5.1: animated transparent Saturn GIF in all live logo locations; original static PNG retained. GIF uses binary transparency and preserves source frame timing.

Version 5.2: SCRUM #25 updated team design, previous working screenshots retained; animated branding unchanged. Savings links to Goals pending dedicated Savings page.

## v5.3
SCRUM #24 Sprint 4: Bill Due Date Reminders, linked from Notification Center and Home SCRUM directory. Ten team sample bills and local three-day reminder preference; no live alerts or synchronization with Bill Pay. Original team design retained.

## v5.4 — SCRUM #17
Combined team 17-3 upper layout and 17-2 spending/insight sections; prior working screenshot and both team images preserved. Payment method percentages are illustrative, not transaction-derived. Existing sample records and date filters retained.

## v5.5 — SCRUM #14
Refined account and institution screens from team PDF, cropped institution marks from reference, preserved v5.4 screenshots. SCRUM #33 now has a separate placeholder route investment-ai.html; no AI functionality yet. Demo accounts only.

## v5.6 — SCRUM #23
Updated score gauge and factor cards to match team design; preserved bureau history and individual demo freeze controls. All factor ratings are illustrative team sample values. Previous working screenshot and new team design retained.

## v5.7
SCRUM #27 Receipt Repository: shopping and directory links, team reference, local receipt uploads and camera picker, search and details. No OCR or server sync.

## v5.8
Added both original embedded images from SCRUM-68.docx to SCRUM #18 Expense Details Design Evolution only. Existing phone UI, scripts and styles unchanged.

## v5.9
Added SCRUM #36 Sprint 4 annual spending analysis, sample year/category filters, monthly chart and breakdown. Linked from overview and home directory; original team design preserved.

## v6.0
SCRUM #40 Link & Share: simulated local connections, permissions and invitation form; no actual sharing. Home Saturn popup and SCRUM directory link to the new page. Team reference preserved.

## v6.1
SCRUM #39 Technical Support: shared footer card on every Settings tab, Home directory route, five demo support workflows, team design preserved. No live support or monitoring.

## v6.2
SCRUM #28 Sprint 4: Savings and round-up demo, home and budget links, original team artwork. Savings ratio uses $9,400 / $47,000 = 20%.

## v6.3
SCRUM #33 educational investment planning prototype; swipeable modes, user-verified limits, local demo plan, no live AI or financial data.

## v6.4
Corrected Design Evolution: original security notifications artwork now appears on SCRUM #21; supplied SCRUM #12 authenticator and verification wireframe appears on Settings. Working interfaces unchanged.


### v6.5 — Design Evolution
Added the original SCRUM #16 Sprint 1 automatic updates wireframe to Settings Design Evolution. No working interface, CSS or JavaScript changes.

### v6.6
SCRUM #15: demo VPN configuration in Security settings, secure transfer flow page, original and updated team designs. No real VPN or encryption operations.

### v6.7 — Security icon accents
Added scoped green, blue, teal and orange icon accents to Settings Security and VPN flow. Existing bank logos, navigation, simulation behavior and design references retained.

## v6.8
Developed Settings 2FA & Access tab; retained supplied low/mid fidelity comparison. Demo preferences stored locally; test code and recovery codes are fictional, not authentication.

## v6.9
Demo account session defaults to active for existing prototype users. Confirmed logout clears Cosmic Cash-prefixed local/session storage, persists a signed-out marker, and redirects app pages to Account Login. This is client-side demo gating, not real authentication.


### v7.0 — Lock screen
Enlarged the existing animated Saturn on the lock screen from 95px to up to 320px wide, preserving aspect ratio and existing unlock behavior.

## v7.1
Lock screen uses a de-matted, antialiased animated WebP; original GIF remains on all other pages. Original frame timing retained.

### v7.2 — QC punch list #1
Standardized notification and settings SVG controls on all 28 headers; preserved Home button handlers and relocated two refresh controls below headers. Signed-out restrictions retained.

- v7.2 punch list #2: scalable multicolor credit gauge with score-band geometry and dynamic needle; existing credit controls preserved.

- v7.2 punch list #3: visible SCRUM and Sprint identifiers added where missing, including lock screen and Updates placeholder. Home is a multi-story dashboard. Existing identifiers retained.

### Punch list #4
Header Saturn and Cosmic Cash branding link directly to SCRUM #40 Link & Share on all 28 pages. SCRUM #64 is implemented as the existing animated visual activity indicator, with no separate link. GIF playback is not a guaranteed JavaScript freeze detector. Larger lock-screen asset unchanged.

Punch list #5: risk-responsive growth chart and color accents; previous design archived as HTML/CSS/JS. #64 explanatory disclosure restored.

- Punch list #5 refinement: SCRUM 33 projection defaults to compact chart; click to expand chart and annual breakdown. Existing planning controls retained.

## v7.3
Eight testing corrections: header links, credit gauge, alert icons, seven-day bill highlighting, investment tabs, knowledge icons, home chart spacing/colors, budget palette. Browser rendering not verified in build environment.
