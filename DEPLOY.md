# Deploy to Hostinger (maximapools.com)

Step-by-step for the first deploy and any redeploy after that.

## 1. Build the static site

```bash
npm run build
```

Output goes to `out/`. That's everything Hostinger needs to serve.

For a one-shot zipped artifact (Windows PowerShell):

```powershell
Compress-Archive -Path 'out\*' -DestinationPath 'maxima-pools-deploy.zip' -Force
```

## 2. (One-time) confirm contact form recipient

Open `out/api/submit.php` and check the two constants at the top:

```php
$RECIPIENT  = 'info@maximapools.com';      // where leads land
$FROM_EMAIL = 'no-reply@maximapools.com';  // sender; must be a real mailbox on the domain
```

Both addresses must exist as mailboxes in Hostinger's email panel **before** the form will send. If you'd rather receive leads at a different address, edit the file and rebuild (or edit it directly on the server).

## 3. Upload to Hostinger

**Option A — File Manager (simplest)**
1. Hostinger → Hosting → Manage → File Manager
2. Open `public_html/`. **Empty it** if there's a default placeholder (`default.php`, `index.html`, etc.).
3. Upload `maxima-pools-deploy.zip` into `public_html/`.
4. Right-click the zip → Extract → into the current folder.
5. Delete the zip.

**Option B — FTP**
- Host: from Hostinger's FTP panel
- Drop the entire contents of local `out/` into `public_html/`.

After upload, `public_html/` should contain `index.html`, `_next/`, `api/`, `images/`, `.htaccess`, etc.

## 4. Point the domain at Hostinger

- In Hostinger's DNS Zone (or at the registrar): set `A` records for `@` and `www` to the Hostinger server IP shown in the hPanel.
- Wait for propagation (usually 5–30 min).

## 5. Enable SSL

- Hostinger → SSL → install free Let's Encrypt for both `maximapools.com` and `www.maximapools.com`.
- Once it's green, the `.htaccess` already redirects `http → https` and `www → apex` automatically.

## 6. Test

- Visit `https://maximapools.com/`
- Submit the contact form once with a real email — you should receive the lead at `$RECIPIENT` within a minute.
- Confirm a few internal pages load (`/pools/`, `/blog/`, `/contact/`).

## Updating the site later

1. Make changes locally
2. `npm run build`
3. Upload the new `out/` content over `public_html/` (overwrite)

The `_next/` folder hashes assets, so old chunks linger harmlessly. If you want to keep `public_html/` clean, delete it before each upload — the upload re-creates everything.

## Adding a blog article

Use the CMS at `https://maximapools.com/admin/cms/` → **Blog Posts → New**. It
commits a Markdown file to `src/content/blog/` and the site rebuilds/deploys
automatically. (The old `/admin/blog` localStorage draft tool was removed.)

## ChatGPT Ads (OpenAI Ads) conversion tracking

The measurement pixel is loaded by the site itself (not by GTM) so the event
queue exists before any conversion fires. Pixel ID: CMS → **Site Settings →
Tracking & Scripts → ChatGPT Ads Pixel ID**. Never add the same pixel inside
Tag Manager as well — that would `init` it twice.

What the site sends (`src/lib/oaiq.ts`):

| Action | Event | Where |
| --- | --- | --- |
| Contact form submitted OK | `lead_created` (`customer_action`) | `src/lib/analytics.ts` → `analytics.lead()` |
| Click on any `tel:` link | custom `phone_click` | `src/lib/analytics.ts` → `analytics.phoneClick()` |

Each lead carries an `event_id` (UUID) that `api/submit.php` reuses for the
server-side Conversions API call, so OpenAI counts one conversion instead of
two. To debug in the browser, add `?oaiqdebug=1` to any URL — the SDK then
logs every event to the console.

### Installing the Conversions API key (one-time, server-side)

`api/oai-capi.php` is a silent no-op until the key exists on the server. Create
it by hand (it must never live in the public repo):

```bash
ssh -p 65002 u247207656@157.173.208.145
cd domains/maximapools.com/public_html/.private
cat > oai-capi-config.php <<'PHP'
<?php return ['apiKey' => 'PASTE-THE-CONVERSIONS-API-KEY'];
PHP
chmod 600 oai-capi-config.php
```

Attempts are logged one JSON line each to `.private/oai-capi.log` (no PII).

> **Note:** `api/submit.php` is excluded from the CI rsync, so changes to it
> must be copied to the server manually (`scp`), unlike `api/oai-capi.php`.

## Troubleshooting

- **Form returns "Something went wrong"** — check `submit.php`'s `$RECIPIENT`/`$FROM_EMAIL` exist as Hostinger mailboxes. Hostinger blocks `mail()` from a `From:` address it doesn't own.
- **Form lands in spam** — add an SPF record in DNS: `v=spf1 include:_spf.hostinger.com ~all`. Hostinger usually adds this automatically.
- **Page returns 404 unexpectedly** — make sure `.htaccess` made it into `public_html/` (some FTP clients hide dotfiles by default).
- **Trailing-slash inconsistency** — already handled by the `.htaccess`. Visiting `/about` should redirect to `/about/`.
