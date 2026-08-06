/* ------------------------------------------------------------------ */
/*  ChatGPT Ads (OpenAI Ads) measurement pixel — typed wrapper.        */
/*                                                                     */
/*  The pixel is initialised in src/app/layout.tsx (id from the CMS,   */
/*  Site Settings → Tracking & Scripts). This module only sends the    */
/*  conversion events, mirroring what analytics.ts does for GTM.       */
/*                                                                     */
/*  Docs: https://developers.openai.com/ads/measurement-pixel          */
/* ------------------------------------------------------------------ */

import tracking from "@/content/settings/tracking.json";

/* eslint-disable @typescript-eslint/no-explicit-any */
type OaiqFn = ((...args: any[]) => void) & { q?: unknown[] };

declare global {
  interface Window {
    oaiq?: OaiqFn;
  }
}

export const OAI_PIXEL_ID: string = tracking.openaiPixelId ?? "";

/** Standard event names we use. `custom` covers everything else. */
type EventName = "lead_created" | "custom";

/** Data shape per event — lead_created is a `customer_action`. */
type EventData =
  | { type: "customer_action"; amount?: number; currency?: string }
  | { type: "custom"; amount?: number; currency?: string };

type EventOptions = {
  /** Shared with the server-side Conversions API call to deduplicate. */
  event_id?: string;
  /** Required when the event name is `custom`. */
  custom_event_name?: string;
};

/** User data the pixel matches on. Hashes only — never raw PII, and never
 *  phone numbers (not even hashed), per the OpenAI docs. */
type UserData = {
  email_sha256?: string;
  country?: string;
  city?: string;
  zip_code?: string;
};

/**
 * Returns window.oaiq, creating the official command queue if the inline
 * init snippet hasn't run yet, so an early conversion is never dropped —
 * the SDK drains the queue once it loads.
 */
function queue(): OaiqFn | null {
  if (typeof window === "undefined" || !OAI_PIXEL_ID) return null;
  if (!window.oaiq) {
    const stub = function (this: unknown) {
      (stub.q = stub.q ?? []).push(arguments);
    } as OaiqFn;
    window.oaiq = stub;
  }
  return window.oaiq;
}

/** Unique id shared by the browser and server copies of one conversion. */
export function newEventId(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return `evt_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
}

/** Lowercase 64-char hex SHA-256, or null where SubtleCrypto is unavailable
 *  (non-HTTPS contexts — the event still sends, just without the match key). */
export async function sha256Hex(value: string): Promise<string | null> {
  const input = value.trim().toLowerCase();
  if (!input || typeof crypto === "undefined" || !crypto.subtle) return null;
  try {
    const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(input));
    return Array.from(new Uint8Array(buf))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  } catch {
    return null;
  }
}

/**
 * The ChatGPT Ads click reference. The SDK stores it in the first-party
 * `__oppref` cookie after an ad click; we also accept it straight off the
 * landing URL in case the event fires before the SDK wrote the cookie.
 * Read here so it can travel with the server-side conversion.
 */
export function readOppref(): string {
  if (typeof document === "undefined") return "";
  const cookie = document.cookie
    .split("; ")
    .find((c) => c.startsWith("__oppref="));
  if (cookie) {
    const value = decodeURIComponent(cookie.slice("__oppref=".length));
    if (value) return value;
  }
  try {
    return new URLSearchParams(window.location.search).get("oppref") ?? "";
  } catch {
    return "";
  }
}

/** Attach known user data to subsequent events (documented as a re-`init`). */
export function identify(user: UserData): void {
  const oaiq = queue();
  if (!oaiq) return;
  const clean: UserData = {};
  if (user.email_sha256) clean.email_sha256 = user.email_sha256;
  if (user.country) clean.country = user.country;
  if (user.city) clean.city = user.city.trim().toLowerCase().slice(0, 128);
  if (user.zip_code) clean.zip_code = user.zip_code.trim().slice(0, 32);
  if (Object.keys(clean).length === 0) return;
  oaiq("init", { pixelId: OAI_PIXEL_ID, user: clean });
}

/** Send a conversion event. */
export function measure(
  name: EventName,
  data: EventData,
  options: EventOptions = {},
): void {
  const oaiq = queue();
  if (!oaiq) return;
  const opts: EventOptions = {};
  if (options.event_id) opts.event_id = options.event_id;
  if (options.custom_event_name) opts.custom_event_name = options.custom_event_name;
  oaiq("measure", name, data, opts);
}
