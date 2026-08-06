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

### Smoke-testing the server side

`validate_only` asks OpenAI to check the payload without recording a
conversion — safe to run against production:

```bash
cd domains/maximapools.com/public_html/api
php -r 'require "oai-capi.php"; oai_capi_lead([
  "event_id" => "smoke-" . bin2hex(random_bytes(5)),
  "email" => "Smoke.Test@Example.com", "city" => "Delaware", "zip" => "43015",
  "validate_only" => true,
]);'
tail -1 ../.private/oai-capi.log   # expect status 200, {"accepted_events":1}
```

> **Note:** `api/submit.php` is excluded from the CI rsync, so changes to it
> must be copied to the server manually (`scp`), unlike `api/oai-capi.php`.

## Google Ads — Enhanced Conversions for Leads (server-side)

The GTM tag only reports a lead when the container actually loads, so every
visitor running an ad blocker — and every Safari user whose cookie expired
before they came back — is invisible to Google Ads. `api/gads-capi.php`
uploads the same lead straight from the server, matching on a hashed
email/phone instead of a cookie, so nothing in the browser can block it.

The click id rides along when there is one: `src/lib/click-ids.ts` stores
`gclid`/`wbraid`/`gbraid` from the landing URL in the first-party `_mx_gcl`
cookie (90 days). It reads the URL directly rather than gtag's `_gcl_aw`,
because a blocked container never writes that cookie — which is exactly the
case this feature exists for.

Everything is a silent no-op until `/.private/gads-config.php` exists, so
the contact form is unaffected while you work through the setup below.

**This does not replace the browser side.** The GTM container already has
Enhanced Conversions wired up client-side — the `DLV - user_*` data-layer
variables, the `UPD - Lead Form` user-provided-data variable and the
`GAds Conversion ID` constant, fed by `analytics.lead()` in
`src/lib/analytics.ts`. That keeps working untouched; this covers only the
visitors it never sees.

### 1. Get a developer token — start here, it gates everything

Google Ads → **Tools → API Center**. A fresh token is **test-account only**;
uploads against the real account fail until Google approves *Basic access*,
which is a short application form and can take a few days. Nothing else
works before this, so apply first.

### 2. Create the conversion action

Google Ads → **Goals → Conversions → New conversion action → Import →
CRM/files/other data sources → Track conversions from clicks**, and enable
**Enhanced conversions for leads** on it. Accept the customer-data terms.

Note the numeric conversion action id from the URL (`ctId=...`).

> ⚠️ **This must be a second action, separate from the website tag** — the
> API only accepts uploads into an import-type action. Keep exactly **one of
> the two marked as Primary**, or the same lead counts twice. Suggested
> path: leave the website tag Primary, run the upload as Secondary for a
> couple of weeks, compare the counts, then swap once you trust the upload.

### 3. OAuth credentials

1. Google Cloud Console → new project → enable the **Google Ads API**.
2. **APIs & Services → Credentials → OAuth client ID → Web application**,
   with `https://developers.google.com/oauthplayground` as a redirect URI.
3. [OAuth Playground](https://developers.google.com/oauthplayground) → gear
   icon → *Use your own OAuth credentials* → paste the client id/secret →
   authorise the scope `https://www.googleapis.com/auth/adwords` with the
   Google account that can see the Ads account → **Exchange authorization
   code for tokens** → copy the **refresh token**.

### 4. Install the config on the server

```bash
ssh -p 65002 u247207656@157.173.208.145
cd domains/maximapools.com/public_html/.private
cat > gads-config.php <<'PHP'
<?php return [
    'clientId'           => '....apps.googleusercontent.com',
    'clientSecret'       => '...',
    'refreshToken'       => '...',
    'developerToken'     => '...',
    'customerId'         => '1234567890',   // the Ads account, no dashes
    'conversionActionId' => '987654321',
    // ↑ customerId is the 10-digit account id in the top corner of Google
    //   Ads — NOT the AW-XXXXXXX in the GTM "GAds Conversion ID" variable.
    // Optional:
    // 'loginCustomerId' => '1112223333',   // only when accessed via an MCC
    // 'conversionValue' => 250,            // what a lead is worth, USD
    // 'timeZone'        => 'America/New_York',  // must match the Ads account
];
PHP
chmod 600 gads-config.php
```

The OAuth access token is cached next to it in `.private/gads-token.json`
(auto-created, refreshed ~hourly) so a burst of leads doesn't mint one per
submission.

### 5. Check the setup

`api/gads-check.php` tests each piece separately and names the one that's
wrong — the API's own errors are cryptic and arrive all at once. It records
nothing (the last step is a `validateOnly` dry run):

```bash
cd domains/maximapools.com/public_html/api
php gads-check.php
```

```
1. Config file      → present, all keys, customerId is 10 digits
2. OAuth            → refresh token still exchanges for an access token
3. Account          → developer token accepted, account name, time zone match
4. Conversion action→ exists, type UPLOAD_CLICKS, ENABLED, Primary or not
5. Dry run          → Google accepts the real payload
```

Exit code is 0 only when everything passes. It's CLI-only — over HTTP it
404s.

For a one-off payload check without the rest:

```bash
php -r 'require "gads-capi.php"; gads_upload_lead([
  "name" => "Smoke Test", "email" => "smoke.test@example.com",
  "phone" => "6143845081", "city" => "Delaware", "state" => "OH",
  "zip" => "43015", "order_id" => "smoke-" . bin2hex(random_bytes(4)),
  "validate_only" => true,
]);'
tail -1 ../.private/gads-capi.log   # expect "ok":true
```

Attempts are logged one JSON line each to `.private/gads-capi.log` (no PII —
only the order id, status and how many identifiers matched).

**Read the `ok` field, not the status code.** Google returns rejected
conversions inside an HTTP 200 as `partialFailureError`; the log unpacks
that into `"ok":false` plus the message, so a `200` alone means nothing.

Real uploads show up in Google Ads within ~3 hours (up to 24h), under the
conversion action's *Diagnostics* tab.

### Notes

- Leads without a click id still upload — that's the point of matching on
  hashed data. They land as enhanced conversions for leads.
- A lead with neither email nor phone nor a full name is skipped and logged
  as `no usable identifiers`; the form itself requires all three, so this
  only fires on malformed input.
- `order_id` reuses the same id sent to ChatGPT Ads, so one lead can be
  traced across both platforms' logs and a re-upload deduplicates instead of
  doubling.

## Troubleshooting

- **Form returns "Something went wrong"** — check `submit.php`'s `$RECIPIENT`/`$FROM_EMAIL` exist as Hostinger mailboxes. Hostinger blocks `mail()` from a `From:` address it doesn't own.
- **Form lands in spam** — add an SPF record in DNS: `v=spf1 include:_spf.hostinger.com ~all`. Hostinger usually adds this automatically.
- **Page returns 404 unexpectedly** — make sure `.htaccess` made it into `public_html/` (some FTP clients hide dotfiles by default).
- **Trailing-slash inconsistency** — already handled by the `.htaccess`. Visiting `/about` should redirect to `/about/`.
