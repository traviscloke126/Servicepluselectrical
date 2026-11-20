# Service Plus Electrical Solutions — website (concept)

Concept redesign for Service Plus Electrical Solutions, Hutchinson, KS. Hosted on GitHub Pages (Jekyll).

## Where to edit

| What | File |
|---|---|
| Phone, email, hours, concept banner on/off | `_data/business.yml` |
| Owner's story (About page) | `_includes/owner-story.md` (plain Markdown) |
| Page text | `index.html`, `services.html`, `about.html`, `faq.html`, `contact.html` |
| Header, footer, menu | `_layouts/default.html` |
| Colors and fonts | `assets/style.css` (top of file) |

Anything in `[brackets]` is a placeholder waiting on real info from the owner.

## Going live
1. Fill in the placeholders and add real photos to `assets/images/`.
2. In `_data/business.yml`, set `concept: false` (removes the banner and lets Google index the site).
3. Hook up the quote form (e.g. Formspree) — it's demo-only right now.
