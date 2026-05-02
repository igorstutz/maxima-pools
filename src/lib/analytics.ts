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
};

function push(payload: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(payload);
}

export const analytics = {
  /** Form de contato enviado com sucesso. Conversão principal. */
  lead(params: LeadParams = {}) {
    push({ event: "generate_lead", ...params });
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
