# Claude Corps Portfolio — Deven Rohatgi

A single-page, no-build static website that presents Deven Rohatgi's
AI-assisted nonprofit-systems work for **Feed The City / Tango Charities**,
created for the Claude Corps application.

## Status

- **This website:** Complete static build — `index.html`, `styles.css`, and
  `script.js` are finished and self-contained, with no build step and no
  dependencies.
- **Live URL:** Not yet confirmed live. The site is designed to be served from
  GitHub Pages at `https://drohat38.github.io/claude-corps-portfolio/`; that URL
  goes live only after Pages is enabled for this repository (see
  [Deploy (GitHub Pages)](#deploy-github-pages)).
- **Featured projects:** Each carries its own honest status — one live, one in
  progress, one prototype. See the [table below](#featured-projects).

## Overview

The site is a concise portfolio a reviewer can skim in about a minute and reach
the live work in one click. It frames a single through-line across three
projects: start from a real Feed The City workflow problem, build a lightweight
tool, validate it with the people who would use it, and plan for handoff so the
system survives beyond the original builder.

It links out to already-public project pages and describes the work in general
terms. It does **not** contain private Tango, partner, volunteer, or contact
data (see [Public-safe](#public-safe-this-is-a-public-repo)).

## Featured projects

Status reflects each project as of this README. Full "built vs planned" detail
for each project lives on the site itself (`index.html`).

| #  | Project | Status | What it is | Links |
|----|---------|--------|------------|-------|
| 01 | Feed The City Event Map | ✅ Complete · Live | Searchable map so volunteers can find nearby meal-packing events and reach official Tango registration pages. | [Live](https://feed-the-city-event-map.pages.dev/) · [Code](https://github.com/drohat38/feed-the-city-event-map) |
| 02 | FTC Distribution Tool | 🚧 In progress | Planning tool for matching events to partner organizations that can receive surplus meals (capacity, backups, accountability). | [Code](https://github.com/drohat38/ftc-distribution-tool) |
| 03 | Volunteer Experience Platform (WhatToBringFTC) | 🧪 Prototype · active dev | Turns a volunteer's sandwich goal into an ingredient/shopping plan, then connects to city registration. | [Demo](https://what-to-bring-ftc.vercel.app) · [Code](https://github.com/drohat38/WhatToBringFTC) |

Earlier prototypes are linked from the site as honest first steps rather than
featured work:
[what-to-bring-list](https://github.com/drohat38/what-to-bring-list),
[FeedTheCityPlanner](https://github.com/drohat38/FeedTheCityPlanner),
[South-Asian](https://github.com/drohat38/South-Asian), and
[South-Asian-Map](https://github.com/drohat38/South-Asian-Map).

## Features

Features of this portfolio site (not the projects it links to):

- Single page, mobile-first responsive layout.
- Accessible basics: skip link, semantic landmarks, ARIA labels, and a
  `prefers-reduced-motion` fallback.
- Status indicators per project: `is-live` (green), `is-progress` (amber), and
  `is-proto` (blue) dots.
- Self-hosted Fraunces (display) + Inter (text) web fonts — no third-party requests.
- Open Graph / social-preview tags and a self-contained inline SVG favicon.
- One small script that keeps the footer year current. No analytics, no
  trackers, no third-party requests.

## Tech stack

- **HTML5** — semantic, single page (`index.html`).
- **CSS3** — custom properties, flexbox/grid, mobile-first; no framework
  (`styles.css`).
- **Typography** — self-hosted Fraunces (display serif) + Inter (text) via
  `@font-face` (`assets/fonts/`).
- **Vanilla JavaScript** — one tiny progressive-enhancement script
  (`script.js`).
- **No build step, no dependencies, no package manager.**
- **Hosting:** static — designed for GitHub Pages.

## Getting started / run locally

No build step is required. Either open the file directly or serve the folder:

```bash
git clone https://github.com/drohat38/claude-corps-portfolio.git
cd claude-corps-portfolio

# Option A: open index.html directly in a browser.

# Option B: serve locally, then open http://127.0.0.1:8080/
python3 -m http.server 8080
```

## Deploy (GitHub Pages)

`index.html` sits at the repository root, so no build is needed:

1. On GitHub, open this repo → **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Set **Branch: `main`** and **folder: `/ (root)`** → **Save**.
4. Wait about a minute. The site goes live at
   `https://drohat38.github.io/claude-corps-portfolio/`.
5. Open that URL in a browser to confirm it loads, then use it wherever a
   portfolio link is needed (see [`APPLICATION_LINKS.md`](./APPLICATION_LINKS.md)).

GitHub Pages serves `index.html` directly; `styles.css` and `script.js` load
alongside it.

## Repository contents

| File | Purpose |
|------|---------|
| `index.html` | The single-page portfolio. |
| `styles.css` | Styling — mobile-first, no framework. |
| `assets/fonts/` | Self-hosted Fraunces + Inter web fonts (woff2). |
| `script.js` | Tiny enhancement that keeps the footer year current. No tracking. |
| `README.md` | This file. |
| `PUBLIC_AUDIT.md` | Privacy/security audit of every linked repo. |
| `APPLICATION_LINKS.md` | The exact links to paste into the application form. |
| `LICENSE` | Copyright notice (all rights reserved). |
| `.gitignore` | Ignores OS/editor cruft and environment files. |

## Updating project links

All links are plain `<a href="…">` tags in `index.html`. To change one:

1. Open `index.html` and search for the old URL (a live site, a GitHub repo, or
   the email).
2. Replace it. The same URLs also appear in the footer and in
   [`APPLICATION_LINKS.md`](./APPLICATION_LINKS.md) — update those too so they
   stay in sync.

Status indicators live in `index.html` as `is-live`, `is-progress`, and
`is-proto` on each project's `.status` element. Change the class to change the dot.

## Public-safe (this is a public repo)

This repository is meant to be public. It must **not** contain private Tango,
partner, volunteer, or contact data, API keys, spreadsheet IDs, tokens, or
internal operational records. It only links to already-public project pages and
describes the work in general terms.

The one personal detail published by design is Deven's own contact email, used
as the portfolio's contact link.

If you add screenshots, example data, or copy, sanitize it first.
[`PUBLIC_AUDIT.md`](./PUBLIC_AUDIT.md) records the privacy review of every linked
repo and what still needs human review.

## AI-assisted development

This portfolio — and the projects it describes — were built with support from
Claude and Claude Code for prototyping, debugging, refactoring, and
documentation. Product direction, nonprofit context, data validation,
deployment decisions, and handoff planning were owned by Deven Rohatgi.

## License

All rights reserved. The source is public so the site can be deployed and read
for reference, but it is not open-source — see [`LICENSE`](./LICENSE) before
reusing any part of it.
