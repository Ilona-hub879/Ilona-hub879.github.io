# Digital products catalog

## Price changes (site)

1. Edit **`catalog/products/<product-id>/product.json`** → `plans.oneTime.amount` / `plans.subscription.amount`.
2. In product **how-to** Markdown, use tokens `{{price.oneTime}}`, `{{price.subscription}}`, `{{app.url}}` where prices or app URL appear.
3. Run **`npm run build`** (or `npm run build:catalog`).
4. Commit generated files (`catalog-pricing.js`, updates in `digital-products.html` guide sections).

## Merchant of Record (MoR)

Checkout prices in your **MoR dashboard** are **not** synced from this repo. After changing amounts here, update the matching products/plans in MoR manually.

## Add a new product

1. Copy `catalog/products/ai-gdpr-audit/` to `catalog/products/<new-id>/`.
2. Edit `product.json`, add `how-to.{ru,en,lv}.md`, `legal/*.md`.
3. Register the product in **`catalog/catalog.json`**.
4. Add a product card block to **`digital-products.html`** (with `data-product-id`, pricing slots, guide markers).
5. Extend **`scripts/build-ai-gdpr-legal.mjs`** or add product-specific legal build if needed.
6. Run **`npm run build`**.

## Layout

- **`catalog/catalog.json`** — index of products.
- **`catalog/products/<id>/product.json`** — URLs, plans, UI labels.
- **`catalog/products/<id>/how-to.*.md`** — in-card instructions (injected into `digital-products.html`).
- **`catalog/products/<id>/legal/`** — source Markdown for product privacy/terms HTML in site root.

Site-wide refund: **`refund-policy.html`** (brochure legal build). Product cards link to it from the page header and should include the same link in each card’s actions.
