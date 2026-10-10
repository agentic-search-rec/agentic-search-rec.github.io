# Search and Recommendation in the Agentic AI Era

Static website for the proposed WSDM 2027 workshop. The content follows the current workshop proposal. No build step or package installation is needed.

## Preview and edit

Serve this directory with any static HTTP server, for example `python -m http.server 4173 --bind 127.0.0.1`, and open `http://127.0.0.1:4173`.

- `index.html`: workshop content, dates, and organizer cards.
- `styles.css`: layout, color, typography, and responsive styles.
- `script.js`: mobile navigation and active section indication.
- `assets/`: local images, favicon, and calendar download.

The page remains readable without JavaScript. Typography follows the reference homepage: Plus Jakarta Sans for body text and upright Lora for section headings and the Agentic AI title emphasis. Body text is 18 px on desktop and 17 px on mobile; supporting text is at least 16 px. Fonts are served locally. Photographs are served locally. GitHub Pages can serve the repository root on `main`; `.nojekyll` bypasses Jekyll processing.

## Current publication state

This is a local first draft. It identifies the workshop as proposed and the OpenReview link as forthcoming. Search indexing is disabled in `index.html` until publication is appropriate.

Before public launch, confirm acceptance and the final dates, add the real OpenReview venue link, update the proposal status text, and remove the `noindex` meta tag. Add speakers, the detailed program, and accepted papers when those are confirmed.

The calendar marks all events as tentative. The paper deadline converts November 30, 2026 at 23:59 AoE (UTC−12) to December 1 at 11:59 UTC. The workshop time is February 19, 2027 at 09:00–12:30 in Hong Kong (UTC+8).

## Asset sources

- Harbour photograph: [Johnes Hou on Unsplash](https://unsplash.com/photos/victoria-peak-next-to-a-body-of-water-HFBc2gbkuh4), used under the [Unsplash License](https://unsplash.com/license). Local versions are delivered by Unsplash at 2560 and 1200 pixels wide; no AI alteration. Credit is included in the website footer.
- Conference: the link retains the shared event-fact layout, with a navy typographic wordmark inspired by the [original WSDM logo](https://www.wsdm-conference.org/2027/images/logo.png) and an external-link arrow. The original logo is retained locally for reference.
- Typography reference: [Hongru Cai’s homepage](https://hongrucai.github.io/). Plus Jakarta Sans and Lora are distributed under the SIL Open Font License; copies are included in `assets/fonts/`.
- Organizer photos and homepages: individual source URLs and original file metadata are recorded in `assets/organizers/sources.json`. Larger files are resized and encoded as WebP for delivery, with their original appearance preserved.

Proposal source of truth: the sibling `Overleaf/main.tex`. Do not copy the ACM template’s sample conference metadata into the website.

## Selected workshop logo

The header uses `assets/brand/logo.svg`: the selected 06A mark, combining an A-shaped structure with a search lens. The event title appears beside it on multiple lines without the “Workshop on” prefix; “Agentic AI” uses the same upright Lora emphasis as the hero title. The hero uses `assets/brand/logo-white.svg` above the full title. `assets/favicon.svg` uses the same shape with a closer crop and light/dark adaptation. Canonical SVG and transparent PNG variants are in `../Branding/Logo/final/`.
