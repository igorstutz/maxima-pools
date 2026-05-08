/* ------------------------------------------------------------------ */
/*  dataLayer helper — pushes events that GTM forwards to              */
/*  Meta Pixel / Conversions API and Google Ads.                       */
/*                                                                     */
/*  GTM container is loaded in src/app/layout.tsx and creates          */
/*  window.dataLayer on its own. We just push to it.                   */
/* ------------------------------------------------------------------ */

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

type LeadParams = {
  pool_size?: string;
  source?: string;
  zip?: string;
  city?: string;
  state?: string;
  // Enhanced Conversions — Google Ads user-provided data.
  // GTM hashes (SHA-256) automatically client-side before sending.
  email?: string;
  phone?: string;
  full_name?: string;
  street?: string;
};

function push(payload: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(payload);
}

// E.164 format required by Google Ads Enhanced Conversions
function normalizePhone(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (!digits) return "";
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;
  return `+${digits}`;
}

export const analytics = {
  /** Form de contato enviado com sucesso. Conversão principal. */
  lead(params: LeadParams = {}) {
    const { email, phone, full_name, street, pool_size, source, zip, city, state } = params;
    const nameParts = full_name?.trim().split(/\s+/) ?? [];
    const firstName = nameParts[0] ?? "";
    const lastName = nameParts.slice(1).join(" ");

    const payload: Record<string, unknown> = { event: "generate_lead" };
    if (pool_size) payload.pool_size = pool_size;
    if (source) payload.source = source;
    if (zip) payload.zip = zip;
    if (city) payload.city = city;
    if (state) payload.state = state;

    if (email) payload.user_email = email.trim().toLowerCase();
    if (phone) payload.user_phone = normalizePhone(phone);
    if (firstName) payload.user_first_name = firstName;
    if (lastName) payload.user_last_name = lastName;
    if (street) payload.user_street = street;
    if (city) payload.user_city = city;
    if (state) payload.user_region = state;
    if (zip) payload.user_postal_code = zip;
    if (email || phone) payload.user_country = "US";

    push(payload);
  },

  /** Clique em qualquer link tel:… no site. */
  phoneClick(location: string) {
    push({ event: "phone_click", click_location: location });
  },

  /** Página /pool-simulator carregada. */
  simulatorOpen() {
    push({ event: "simulator_open" });
  },

  /** Página /pools/[slug] carregada (visualização de modelo). */
  viewPool(params: { pool_slug: string }) {
    push({ event: "view_pool", ...params });
  },
};
