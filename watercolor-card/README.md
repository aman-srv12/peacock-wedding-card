# Watercolor Card

A standalone Aman & Ananya wedding invitation app inside the Shadi Cards monorepo.

## Reference direction

The section order and mobile-first pacing are closely inspired by the supplied Suraj & Libina invitation:
Tap to Open → hero/countdown → families → story → event schedule → RSVP/directions.

All implementation, wedding data, illustrations, and watercolor assets in this folder are original to this project.

## Architecture

- `app/` — Next.js App Router entry points and design system CSS
- `components/` — one component per invitation section
- `data/wedding.js` — factual wedding details and RSVP destinations
- `data/content.js` — replaceable story captions and event copy
- `public/` — original watercolor backgrounds and temporary caricature artwork

## Replacing story photos later

Replace the three `story-caricature-*.svg` files or update the paths in `data/content.js`.
No component changes should be required.

## Music

No third-party track is bundled. A licensed track can be added later without changing the invitation content architecture.
