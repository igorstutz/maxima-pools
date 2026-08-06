/* ------------------------------------------------------------------ */
/*  Google Ads click ids, captured first-party.                        */
/*                                                                     */
/*  gtag normally stores the gclid in its own `_gcl_aw` cookie, but    */
/*  that only happens when the GTM container actually loads — which is */
/*  exactly what an ad blocker prevents. Since the whole point of the  */
/*  server-side conversion upload is to survive a blocked container,   */
/*  we read the click id straight off the landing URL and keep our own */
/*  copy. `_gcl_aw` is still read as a fallback for visitors who       */
/*  landed before this shipped.                                        */
/*                                                                     */
/*  Consumed by src/app/contact/contact-form.tsx → api/gads-capi.php.  */
/* ------------------------------------------------------------------ */

const COOKIE = "_mx_gcl";
/** Google Ads' longest click-through lookback window. */
const MAX_AGE_SECONDS = 90 * 24 * 60 * 60;

/** The three flavours of click id, in the order Google prefers them. */
const KINDS = ["gclid", "wbraid", "gbraid"] as const;
type Kind = (typeof KINDS)[number];

export type ClickIds = Partial<Record<Kind, string>>;

/** Click ids are opaque tokens — keep only what one can legitimately hold. */
function sanitize(value: string): string {
  return /^[A-Za-z0-9._-]{1,512}$/.test(value) ? value : "";
}

function readCookie(name: string): string {
  if (typeof document === "undefined") return "";
  const hit = document.cookie
    .split("; ")
    .find((c) => c.startsWith(`${name}=`));
  if (!hit) return "";
  try {
    return decodeURIComponent(hit.slice(name.length + 1));
  } catch {
    return "";
  }
}

/**
 * Pull a click id off the current URL and remember it. Last click wins, which
 * is the attribution model Google Ads itself uses. Safe to call on every
 * navigation — it only writes when the URL actually carries an id.
 */
export function captureClickIds(): void {
  if (typeof window === "undefined") return;
  let params: URLSearchParams;
  try {
    params = new URLSearchParams(window.location.search);
  } catch {
    return;
  }

  for (const kind of KINDS) {
    const value = sanitize((params.get(kind) ?? "").trim());
    if (!value) continue;
    document.cookie =
      `${COOKIE}=${encodeURIComponent(`${kind}~${value}`)}` +
      `; path=/; max-age=${MAX_AGE_SECONDS}; SameSite=Lax` +
      (window.location.protocol === "https:" ? "; Secure" : "");
    return; // one id per click; the first match is the most specific
  }
}

/**
 * The click id to send with a conversion, or an empty object when the visitor
 * didn't arrive from an ad (organic leads still upload — they just match on
 * the hashed email/phone instead).
 */
export function readClickIds(): ClickIds {
  if (typeof document === "undefined") return {};

  const own = readCookie(COOKIE);
  const sep = own.indexOf("~");
  if (sep > 0) {
    const kind = own.slice(0, sep) as Kind;
    const value = sanitize(own.slice(sep + 1));
    if (value && (KINDS as readonly string[]).includes(kind)) {
      return { [kind]: value };
    }
  }

  // Fallback: gtag's own cookie, shaped `GCL.<timestamp>.<gclid>`.
  const gcl = readCookie("_gcl_aw");
  if (gcl) {
    const parts = gcl.split(".");
    const value = sanitize(parts.slice(2).join("."));
    if (value) return { gclid: value };
  }

  return {};
}
