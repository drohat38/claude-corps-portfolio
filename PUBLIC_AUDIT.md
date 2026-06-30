# Public Safety & Privacy Audit

A review of every repo linked from this portfolio, focused on what is safe to
show publicly. **This file is itself public**, so it names file locations and
value *types* only — it never prints an actual key, token, address, or ID.

**How this audit was done (scope note):**
`feed-the-city-event-map` was reviewed in full from a local checkout. The other
repos were reviewed only from their **public GitHub pages and public
deployments** — the working session's GitHub access was scoped to
`feed-the-city-event-map`, so other repos got a lighter, outside-only review and
carry more "human review needed" items. Nothing in any repo was auto-committed.

## Overview

| Repo | Public link | Status | Safe to link now? | Top issue | Fix state |
|---|---|---|---|---|---|
| feed-the-city-event-map | [repo](https://github.com/drohat38/feed-the-city-event-map) · [live](https://feed-the-city-event-map.pages.dev/) | Complete / Live | ✅ Yes (after README fix) | README said "repo is private" while repo is public | README fixed in this branch (not yet committed) |
| ftc-distribution-tool | [repo](https://github.com/drohat38/ftc-distribution-tool) | In Progress | ⚠️ Link OK, **clean up + data-check first** | Public repo, but description/README say "Private" / "Internal only" | Rewrite drafted, **not pushed** (out of session scope) |
| WhatToBringFTC | [repo](https://github.com/drohat38/WhatToBringFTC) · [demo](https://what-to-bring-ftc.vercel.app) | Prototype / Active Dev | ⚠️ Likely yes — verify demo + reword | Description overstates scope ("impact tracker"); verify Vercel loads | Rewrite drafted, **not pushed** (out of session scope) |
| what-to-bring-list | [repo](https://github.com/drohat38/what-to-bring-list) | Earlier prototype | ✅ Yes (as a prototype) | No description; not inspected | None needed |
| FeedTheCityPlanner | [repo](https://github.com/drohat38/FeedTheCityPlanner) | Earlier prototype | ✅ Yes (as a prototype) | No description; not inspected | None needed |
| South-Asian | [repo](https://github.com/drohat38/South-Asian) | Older / unrelated | ✅ Yes (not featured) | Older geo-map; not inspected | None needed |
| South-Asian-Map | [repo](https://github.com/drohat38/South-Asian-Map) | Older / unrelated | ✅ Yes (not featured) | Older geo-map; not inspected | None needed |

---

## feed-the-city-event-map — reviewed in full

**Status:** Complete / Live. **Safe to link:** Yes, once the README fix in this
branch is committed.

**Issues found**

1. **Public/private contradiction (fixed).** `README.md` stated *"The repo is
   **private**"* and the deployment notes described the repo as private and the
   rest of the tree as staying "private." The repo is public, so this was both
   wrong and misleading. → Rewritten in this branch.
2. **Client-side Google Maps key, public by design.** `src/index.html` (around
   line 2732) contains a Google Maps JavaScript API key (the developer's own
   "fallback" key), and the same value appears in every `versions/*.html`
   snapshot. Browser Maps keys *must* ship in client code, so this is exposed by
   design — the real protection is the HTTP-referrer restriction, not secrecy.
   It is **not** a classic leaked secret, but it is the developer's personal key
   sitting in a public repo and on the live site.
   → **Human review:** confirm the key is restricted to
   `feed-the-city-event-map.pages.dev/*` (+ localhost) and limited to Maps
   JavaScript + Geocoding with a daily quota cap; consider rotating it since it
   is now broadly public/indexable.
3. **Published-sheet URLs, public by design.** `src/index.html` (around lines
   1745–1746) and every `versions/*.html` contain the published Google Sheet
   CSV link (a publish-to-web token) and a GVIZ link that exposes the raw
   spreadsheet ID. The public map needs to read the sheet, so this is expected.
   → **Human review:** (a) confirm no personal data (leader names, notes,
   phone/email) is reachable through the published CSV/GVIZ columns; (b) confirm
   the spreadsheet's sharing is view-only / not world-editable, since the raw
   spreadsheet ID is exposed.
4. **Scraped page committed to the repo.** `scratch/hub_raw.html` is a raw copy
   of the public Tango page and contains a **named staff member's work email**
   (around lines 1193/1390) plus third-party Wix/Sentry telemetry identifiers.
   The email is likely already public on Tango's own site, but a named
   individual's address sitting in a scrape dump in a public repo is avoidable.
   → **Recommend:** remove the `scratch/` crawl artifacts (`hub_raw.html`,
   `crawl_results.json`) from the public repo, or confirm this is acceptable.
5. **Apps Script project ID.** `.clasp.json` contains the bound script's
   `scriptId`. Low risk (it is an identifier, not a credential — access still
   needs Google auth), but it is an internal pointer. → Optional to remove.
6. **Internal planning docs are now public.** `CLAUDE.md`, `TANGO_RESEARCH.md`,
   `docs/OWNER_GUIDE.md`, and `docs/GEMINI_TANGO_CRAWL_PROMPT.md` contain
   operational detail and a staff first name, but no credentials were found in
   them. → **Decide** whether you want these visible; if not, move them to a
   private repo.

**Fixes made (in this branch, not yet committed):** `README.md` rewritten —
removed the "private" claims, added live link + "Complete / Live" status, a
"Public Data & Privacy" section, and an "AI-Assisted Development" section. No
secrets were removed or committed automatically.

---

## ftc-distribution-tool — reviewed from public GitHub only

**Status:** In Progress. **Safe to link:** Yes to *link*, but do the cleanup and
private-data check below first.

**Issues found**

1. **Public repo that reads as private.** The repo is public (its README renders
   to anonymous visitors), yet the GitHub "About" description ends in the word
   *"Private."* and the README says *"Internal only,"* *"Internal
   partner-distribution tool,"* and includes a *"⚠️ Privacy wall"* callout. That
   combination is contradictory and implies real internal data may live here.
2. **Possible public-surface conflict.** The README describes a public
   Cloudflare `src/index.html` "display" map **and** states partner data is
   "never served on a public URL." Those can conflict if that public map renders
   real partner names/addresses. Not verifiable from outside.
3. **Unreviewed folders.** The repo contains `apps-script/`, `reference/`,
   `docs/`, `PRD.md`, `AGENTS.md`, and `CLAUDE.md`, none of which could be
   inspected this session. Any could contain real partner contacts, capacity
   numbers, agreements, a spreadsheet ID, or keys.

**Fix state:** A rewritten, public-safe README was drafted (see
`proposed-readmes/ftc-distribution-tool.README.md` in the staging branch). It
reframes the repo as a *public-safe prototype/planning version*, adds a
"Built vs Planned" split, and adds a "Privacy & Data Boundaries" section. It was
**not pushed** — out of this session's scope.

**Remaining human review (important):** Before leaving this repo public,
**scan `apps-script/`, `reference/`, `docs/`, and `PRD.md` for real partner
contact info, capacity details, agreements, spreadsheet IDs, or keys**, and
confirm the public `src/index.html` does not render real partner data. If any
real operational data is present, **make the repo private** or sanitize/rotate
before continuing to link it.

---

## WhatToBringFTC — reviewed from public GitHub + deployment

**Status:** Prototype / Active Development. **Safe to link:** Likely yes, after
verifying the demo and a small wording change.

**Issues found**

1. **Description slightly overstates scope.** The GitHub "About" text lists
   "ingredient calculator, **impact tracker**, and city sign-up tool." The
   ingredient calculator, shopping-list output, and registration flow are real;
   the impact tracker and broader leader features are planned, not complete.
2. **Demo not auto-verified.** The Vercel deployment
   (`https://what-to-bring-ftc.vercel.app`) returned HTTP 403 to an automated
   fetch — which is typical bot protection, **not** proof it is down. It must be
   eyeballed in a browser before being relied on as a live link.
3. **Source not inspected for secrets.** A React/Vite app usually keeps keys in
   a gitignored `.env`, but `vercel.json` and `src/` were not reviewed this
   session.

**Fix state:** A status-clarified README was drafted (see
`proposed-readmes/WhatToBringFTC.README.md`). **Not pushed** — out of scope.

**Remaining human review:** open the Vercel URL in a browser to confirm it
works; reword the GitHub description so "impact tracker" reads as planned; skim
`src/` and config for any committed keys.

---

## Older repos — metadata only

`what-to-bring-list`, `FeedTheCityPlanner`, `South-Asian`, and `South-Asian-Map`
are all public. The first two are earlier Feed The City prototypes; the
South-Asian repos are older, unrelated interactive geo-maps. None were inspected
file-by-file this session. They are safe to *mention* as earlier work. **Low-risk
human review:** skim each for any stray committed key or contact data before
leaving them public, but nothing observed from the outside suggests a problem.

---

## Bottom line

- **Link now:** `feed-the-city-event-map` (after committing the README fix) and
  the live map — these are the cleanest, strongest items to feature.
- **Link with a caveat:** `WhatToBringFTC` once you confirm the Vercel demo
  loads.
- **Clean up before leaning on it:** `ftc-distribution-tool` — apply the drafted
  README and, more importantly, verify no real partner data sits in its
  unreviewed folders. If it does, make it private.
- **No live secrets requiring rotation were found in plain sight.** The
  key-looking values in `feed-the-city-event-map` are client-side-by-design
  (referrer-restricted Maps key, published-sheet token). Treat the Maps key
  rotation and the staff email in `scratch/` as cleanup, not emergencies.
