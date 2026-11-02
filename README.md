# Lalla Mama — digital menu

Open `index.html` directly, or serve this directory with `python -m http.server 8080`.
No build step or production dependencies. Deploy the directory to Vercel with framework preset **Other**, no build command, and output directory `.`.

## Restaurant configuration

In `script.js`, set `WHATSAPP_NUMBER` to the restaurant's international number, digits only (country code included, no plus or spaces). Checkout is deliberately disabled while this is empty. Opening WhatsApp prepares a message; the customer must send it there. The cart remains saved after opening WhatsApp.

Edit names, prices, descriptions and categories in `menu-data.js`. All 70 items and prices were checked against the two-page Lalla Mama PDF found in Downloads. Cart storage contains product IDs and quantities; current menu prices are used on reload.

## Assets

Category photography is AI-generated illustrative imagery, not photographs of actual restaurant dishes. Individual thumbnails are intentionally omitted where exact food photography is unavailable. The logo is extracted from the supplied reference. Category images are locally hosted WebP. Fonts use Google Fonts with system fallbacks.

## Checks

`node --check script.js` and `node --check menu-data.js` validate syntax. See `qa/` for browser screenshots and test results when available. `prepare.py` is an optional asset/data preparation utility, not required to run or deploy the site.
