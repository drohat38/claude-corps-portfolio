# Claude Corps Portfolio — Deven Rohatgi

A small static site presenting my AI-assisted nonprofit-systems work for
**Feed The City / Tango Charities**. It is built for the Claude Corps
application: a reviewer should be able to skim it in under a minute and reach
the live work in one click.

**What it highlights**

- **Feed The City Event Map** — a complete, live volunteer event finder.
- **FTC Distribution Tool** — an in-progress operations/planning concept for
  matching events to partner organizations that can receive meals.
- **Volunteer Experience Platform (WhatToBringFTC)** — a prototype volunteer
  planner (sandwich goal → ingredient/shopping plan → registration).

The theme across all three: start from a real nonprofit workflow problem, build
a lightweight tool, validate it with the people who would use it, and plan for
handoff so the system survives beyond the original builder.

## This site is public — keep it public-safe

This repository is meant to be public. It must **not** contain private Tango,
partner, volunteer, or contact data, API keys, spreadsheet IDs, tokens, or
internal operational records. It only links out to already-public project pages
and describes the work in general terms.

If you ever add screenshots, example data, or copy, sanitize it first. See
[`PUBLIC_AUDIT.md`](./PUBLIC_AUDIT.md) for the privacy review of every linked
repo and what still needs human review.

## Files

| File | Purpose |
|---|---|
| `index.html` | The single-page portfolio. |
| `styles.css` | Styling — mobile-first, no framework. |
| `script.js` | Tiny enhancement (keeps the footer year current). No tracking. |
| `README.md` | This file. |
| `PUBLIC_AUDIT.md` | Privacy/security audit of every linked repo. |
| `APPLICATION_LINKS.md` | The exact links to paste into the application form. |

No build step, no dependencies. Open `index.html` in a browser to preview, or
serve the folder locally:

```bash
python3 -m http.server 8080
# then open http://127.0.0.1:8080/
```

## Deploy with GitHub Pages

This repository **is** the portfolio — `index.html` sits at the root, so no
build step is needed. To put it online:

1. On GitHub, open this repo → **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Set **Branch: `main`** and **folder: `/ (root)`** → **Save**.
4. Wait ~1 minute. The site goes live at
   `https://drohat38.github.io/claude-corps-portfolio/`.
5. Put that URL into [`APPLICATION_LINKS.md`](./APPLICATION_LINKS.md) (the
   "Portfolio / personal site" line) and into the application form.

GitHub Pages serves `index.html` directly; `styles.css` and `script.js` load
alongside it.

## How to update project links

All links are plain `<a href="…">` tags in `index.html`. To change one:

1. Open `index.html`.
2. Search for the old URL (e.g. the live map, a GitHub repo, your email).
3. Replace it. The same URLs also appear in the footer and in
   `APPLICATION_LINKS.md` — update those too so they stay in sync.

Status badges live in `index.html` as `badge-live` (green), `badge-progress`
(amber), and `badge-proto` (blue). Change the class on a card to change its
badge.

## AI-assisted development

This portfolio — and the projects it describes — were built with support from
Claude and Claude Code for prototyping, debugging, refactoring, and
documentation. Product direction, nonprofit context, data validation,
deployment decisions, and handoff planning were owned by Deven Rohatgi.
