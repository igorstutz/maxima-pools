<div align="center">

# 🏊 Maxima Pools

### Premium Fiberglass Pools & Spas — Columbus, OH

[![Live](https://img.shields.io/badge/live-maximapools.com-06B6D4?style=for-the-badge)](https://maximapools.com)
![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

</div>

---

## 📖 About

Marketing website for **Maxima Pools**, a premium fiberglass pools & spas builder in Columbus, OH and an authorized San Juan Pools dealer. It's a **fully static site** (pre-rendered HTML, no Node server in production) for top speed and SEO, paired with a **Git-based CMS** so the team can edit every page, pool model, location and blog post without touching code.

🔗 **Live:** [maximapools.com](https://maximapools.com)

## ✨ Highlights

- ⚡ **100% static** — `next build` with `output: "export"` emits plain HTML/CSS/JS. Every page's text, meta tags and JSON-LD are baked into the HTML at build time (no client-side content fetching), so SEO/GEO and load speed stay excellent.
- 📝 **Git-based CMS** ([Sveltia CMS](https://github.com/sveltia/sveltia-cms)) at `/admin/cms` — edits commit content files to this repo and trigger an automatic rebuild + deploy. Manages: every page, **CRUD for the 99 pool/spa models** (specs + gallery/PDF/3D/video), the 50 service-area pages, blog posts (rich-text), testimonials, the header/footer navigation, and tracking settings.
- 🗂️ **Content decoupled from code** — page copy, images and links live as JSON/Markdown under `src/content/`, imported at build time.
- 🖼️ **All imagery in WebP**, served locally and browsable in the CMS media library.
- 📈 **Analytics & ads** — Google Tag Manager with `dataLayer` events (phone-call clicks, form leads) feeding Google Ads conversions.
- 🛰️ **Lightweight PHP backend** on shared hosting for the few dynamic bits (see below) — the public site itself ships zero server code.

## 🛠️ Stack

| Layer            | Tech                                                                       |
| ---------------- | -------------------------------------------------------------------------- |
| Framework        | Next.js 16 (App Router, `output: export` — static)                         |
| UI               | React 19 · Tailwind CSS 4 · lucide-react                                   |
| Language         | TypeScript 6                                                               |
| Content          | JSON + Markdown (`gray-matter`, `react-markdown`, `remark-gfm`) in `src/content/` |
| CMS              | Sveltia CMS (Decap-compatible, GitHub backend)                             |
| Backend (PHP)    | Contact-form handler, leads/calls admin dashboard, GitHub OAuth proxy, call-click tracker — on Hostinger |
| Analytics        | Google Tag Manager + dataLayer (Google Ads conversions)                    |
| Hosting / CI     | Hostinger (static) · GitHub Actions → rsync over SSH (auto-retry)          |
| Tooling          | PostCSS · ESLint                                                           |

## 🧱 Architecture

```
src/
├─ app/            Next.js App Router pages (static export)
├─ components/     UI components (Header, Footer, sections…)
├─ content/        ← CMS-editable content
│  ├─ pages/       per-page text/images/links/SEO (JSON)
│  ├─ pools/       one JSON per pool model (CRUD via CMS)
│  ├─ blog/        Markdown articles
│  ├─ settings/    tracking + navigation
│  ├─ locations.json
│  └─ testimonials.json
└─ lib/            data loaders (pools, locations, blog), helpers

public/
├─ admin/cms/      Sveltia CMS (config.yml + host page)
├─ api/            PHP endpoints (submit.php, admin/, oauth/, track-call.php)
└─ images/         all site imagery (WebP)
```

> **How publishing works:** an editor changes content in `/admin/cms` → Sveltia commits to `main` → GitHub Actions rebuilds the static site and rsyncs `out/` to Hostinger (~3 min). Server-only files (`/.private/`, the live `api/submit.php` with its mail credentials) are excluded from the sync.

## 🚀 Running locally

```bash
git clone https://github.com/igorstutz/maxima-pools.git
cd maxima-pools
npm install
npm run dev      # http://localhost:3000
```

## 📦 Build (static export)

```bash
npm run build    # outputs the static site to ./out
```

Serve `./out` with any static file server to preview the production build. See [`DEPLOY.md`](./DEPLOY.md) for the full deployment flow.

---

<div align="center">

Developed by **[Igor Stutz Fonseca](https://github.com/igorstutz)** ·
[Email](mailto:igor.stutzf@gmail.com) ·
[WhatsApp](https://wa.me/5522998470672)

</div>
