# Capacity Case Calculator

A browser-based tool for security awareness practitioners who need to make the case for more resource. Model how your time is spent today, show what a new hire would cover, and demonstrate what becomes possible as a result.

**Live tool:** [antdaviscyber.github.io/SCH-Tools/capacity-calculator/](https://antdaviscyber.github.io/SCH-Tools/capacity-case-calculator.html)

---

## What it does

The tool is built around three fully independent hour columns, each with its own weekly target:

- **Your week** — how you currently split your time across activity categories, in hours
- **You after** — your rebalanced allocation once the new hire is in place
- **New hire week** — what the new hire would take on, including capabilities that don't exist yet but would become possible with the extra capacity

None of the three columns auto-link to one another. Setting hours in one doesn't silently adjust another, so part-time hires, job shares, and full-time roles are all easy to model without fighting the tool's assumptions.

As you adjust the sliders or type hours directly, three donut charts update live, a plain-English narrative summarises what's changing, and a capacity analysis tells you whether the hours you've identified support a full-time hire, a part-time arrangement, or a contractor — with a link to the Secure Culture Hub community for the first two, and a direct route to list the vacancy for the third.

---

## How to use it

**1. Choose your path**

On first visit you'll see a small welcome screen with two options: guided setup, or skip straight to the dashboard. The guided setup is a six-step wizard that takes about five minutes and covers your activities, where the pressure shows up in your week, your hours, the new hire's role, your current time split, and the business case. Skipping loads the dashboard with sensible defaults.

**2. Set your three targets**

At the top of the left panel: Your week, You after, and New hire week, each with an editable hours target and a live allocated total underneath, colour-coded green when matched, orange when under, red when over.

**3. Allocate hours per activity**

Twelve practitioner-specific categories are available by default — phishing simulation, content creation, reporting, champions network, and so on — plus the ability to add your own, including capabilities flagged as not currently possible. Each activity has three independent sliders (or type the number directly) for Your time now, You after, and New hire.

**4. Build the business case**

Four free-text fields connect the numbers to outcomes:

- What new initiative or programme becomes possible
- What risk this investment addresses
- What success looks like in 12 months
- How you'll measure it

If you ran the guided setup and selected pain points, the risk field is pre-populated with relevant language — edit it, don't just accept it.

**5. Export**

- **Slide preview** — generates a four-slide presentation at 1920×1080: current state, proposed state, a dedicated new-hire slide, and a capacity-change summary. Preview before downloading, export one slide or all four.
- **Individual donut downloads** — each chart can be downloaded standalone with a full legend, or as a breakdown table with no chart at all.
- **Excel** — a full workbook with the capacity breakdown and business case answers on separate sheets.
- **Image** — a PNG of the whole dashboard.
- **Print** — a print-optimised layout.

The export bar, the community CTA banner, and the theme toggle are excluded from every export. What leadership sees is the numbers and the case, nothing else.

---

## Technical notes

Single-file HTML tool. No frameworks, no build step.

**External dependencies (CDN only):**
- Google Fonts — DM Sans, DM Mono
- html2canvas 1.4.1 — loaded on demand for slide, donut, and image exports
- SheetJS (xlsx) 0.18.5 — loaded on demand for the Excel export

**Theme:** Respects system preference (`prefers-color-scheme`) on first visit, falls back to light. Manual toggle is remembered on return visits.

**Storage:** Setup state and theme preference are stored in `localStorage`. Nothing is sent to a server — the tool runs entirely client-side.

**Hosting:** GitHub Pages. Serves directly as a static webpage — no server-side processing.

---

## Part of SCH Tools

[Back to SCH Tools](https://antdaviscyber.github.io/SCH-Tools/) · [Secure Culture Hub](https://www.secureculture.com)
