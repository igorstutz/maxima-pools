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

## Troubleshooting

- **Form returns "Something went wrong"** — check `submit.php`'s `$RECIPIENT`/`$FROM_EMAIL` exist as Hostinger mailboxes. Hostinger blocks `mail()` from a `From:` address it doesn't own.
- **Form lands in spam** — add an SPF record in DNS: `v=spf1 include:_spf.hostinger.com ~all`. Hostinger usually adds this automatically.
- **Page returns 404 unexpectedly** — make sure `.htaccess` made it into `public_html/` (some FTP clients hide dotfiles by default).
- **Trailing-slash inconsistency** — already handled by the `.htaccess`. Visiting `/about` should redirect to `/about/`.
