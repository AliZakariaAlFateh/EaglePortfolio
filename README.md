# Team Portfolio Timeline (v4) — Arabic/English Toggle

✅ Bootstrap 5 + jQuery  
✅ Reveal/Hide Animation on Scroll  
✅ Team Timeline + Shared Projects Section  
✅ Language Toggle (AR/EN) + RTL/LTR switch + saved in localStorage

## Run
Open `index.html` in your browser.

## Switch Language
Use the Translate button in the navbar to switch Arabic/English.
- It changes `dir` automatically (RTL/LTR)
- Saves the choice in `localStorage`

## Edit Translations
All translations are in:
- `js/i18n.js`

Translate any element by adding:
- `data-i18n="some.key"` for text
- `data-i18n-placeholder="some.key"` for placeholders

## Edit Team
In `index.html` section `#team`:
- Names are direct text
- Bios/labels use i18n keys (edit in i18n.js)
- Update links (LinkedIn/GitHub/Email)

## Edit Shared Projects
In `index.html` section `#projects`:
- Each project card = `.project-col`
- Filters use: `data-tags="web api dashboard"`
- Modal uses button `data-*`:
  - data-title, data-person, data-stack, data-desc, data-link
