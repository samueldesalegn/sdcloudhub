# SD Cloud Hub

Cloud, data engineering, software development, and training platform — built with **Angular 21** and deployed to **AWS S3 + CloudFront** via **GitHub Actions**.

Live site: **[sdcloudhub.com](https://sdcloudhub.com)**

---

## Overview

This repository contains the marketing/portfolio site for SD Cloud Hub. It is a
single-page Angular application using standalone components, lazy-loaded routes,
and SCSS. Each route is a self-contained page; a shared header and footer wrap the
router outlet.

A featured page, **Sales Analytics**, showcases an end-to-end AWS analytics
pipeline (S3 → Glue ETL → Athena → QuickSight) with embedded dashboard
screenshots and a written breakdown of what the data shows.

---

## Tech stack

| Layer | Technology |
|---|---|
| Framework | Angular 21 (standalone components, lazy routes) |
| Language | TypeScript 5.9 |
| Styling | SCSS |
| Build | `@angular/build:application` (esbuild) |
| Hosting | Amazon S3 (static website) |
| CDN / TLS | Amazon CloudFront |
| CI/CD | GitHub Actions |

---

## Project structure

```
sdcloudhub/
├─ .github/workflows/
│  └─ deploy-frontend.yml        # CI: build → S3 sync → CloudFront invalidation
├─ README.md                     # this file
└─ sdcloudhub-frontend/          # the Angular app
   ├─ angular.json
   ├─ package.json
   ├─ bucket-policy.json         # S3 public-read policy (reference)
   ├─ public/                    # served at site root
   └─ src/
      ├─ index.html
      ├─ main.ts
      ├─ styles.scss             # global styles
      └─ app/
         ├─ app.ts               # root component (header + outlet + footer)
         ├─ app.config.ts        # router + change-detection providers
         ├─ app.routes.ts        # lazy-loaded route table
         ├─ layout/
         │  ├─ header/           # site nav
         │  └─ footer/
         └─ pages/
            ├─ home/
            ├─ services/
            ├─ products/
            ├─ training/
            ├─ contact/
            ├─ sales-analytics/  # featured analytics showcase
            ├─ about/            # (component exists; not yet routed)
            ├─ blog/             # (component exists; not yet routed)
            └─ projects/         # (component exists; not yet routed)
```

---

## Local development

Requires **Node.js 24** (matches the CI runner) and npm.

```bash
cd sdcloudhub-frontend
npm install
npm start          # ng serve — http://localhost:4200
```

Other scripts:

```bash
npm run build      # production build to dist/sdcloudhub-frontend/browser
npm run watch      # development build, rebuild on change
npm test           # Karma + Jasmine unit tests
```

---

## Routing

Routes are lazy-loaded in `src/app/app.routes.ts`. Current routes:

| Path | Page |
|---|---|
| `/` | Home |
| `/services` | Services |
| `/products` | Products |
| `/training` | Training |
| `/contact` | Contact |
| `/sales-analytics` | Sales Analytics showcase |
| `**` | redirects to `/` |

To add a page: create a standalone component under `src/app/pages/<name>/`,
add a `loadComponent` entry **above** the `**` wildcard, and add a nav link in
`src/app/layout/header/header.html`.

---

## The Sales Analytics page

`pages/sales-analytics/` renders a hero dashboard image plus three highlight
cards. Image filenames and caption copy are data-driven from
`sales-analytics.ts`:

- `imgBase` — base path for screenshots (`/assets`).
- `hero` / `heroAlt` — the full-dashboard image.
- `highlights[]` — the three deep-dive cards (product profitability, monthly
  revenue, price-vs-margin).
- `githubUrl` — link to the backend IaC repository.

Screenshots live in `src/assets/` (`dashboard.png`, `product-profitability.png`,
`monthly-revenue.png`, `price-margin.png`) and are served from `/assets/`.

> The analytics backend (S3 buckets, Glue ETL job, Glue Data Catalog, Athena
> workgroup, a Lambda data-quality gate, and the QuickSight embedding API) is
> defined as infrastructure-as-code in a separate AWS SAM project.

---

## Deployment

Deployment is fully automated. Any push to `main` triggers
`.github/workflows/deploy-frontend.yml`, which:

1. Checks out the repo and sets up Node 24.
2. Runs `npm ci` and `npm run build`.
3. Configures AWS credentials from repository secrets.
4. Syncs `dist/sdcloudhub-frontend/browser` to the S3 bucket with `--delete`.
5. Invalidates the CloudFront distribution (`/*`) so changes go live immediately.

### Required GitHub secrets

| Secret | Purpose |
|---|---|
| `AWS_ACCESS_KEY_ID` | IAM credential for S3 + CloudFront |
| `AWS_SECRET_ACCESS_KEY` | IAM credential secret |

### AWS resources

| Resource | Value |
|---|---|
| S3 bucket | `sdcloudhub-frontend-samuel` |
| CloudFront distribution | `E3AKDHU0DBZGOP` |
| Region | `us-east-1` |

> **SPA routing note:** because Angular handles routing client-side, CloudFront
> must map `403`/`404` responses to `/index.html` with a `200` status, or deep
> links like `/sales-analytics` will error on refresh.

---

## License

Proprietary — © SD Cloud Hub. All rights reserved.