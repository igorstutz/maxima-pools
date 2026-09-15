"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { analytics } from "@/lib/analytics";
import { captureClickIds } from "@/lib/click-ids";
import { payloadAtribuicao, registrarPagina, registrarVisita } from "@/lib/attribution";

export function AnalyticsListener() {
  const pathname = usePathname();
  const sessaoEnviada = useRef(false);

  useEffect(() => {
    // Runs before anything else touches analytics: the ad click id has to be
    // stored even when the GTM container is blocked, or the server-side
    // conversion upload loses its attribution.
    captureClickIds();
  }, [pathname]);

  /**
   * Atribuição: de onde veio quem entra em contato.
   *
   * Vive aqui, e não num componente próprio, porque este já é o ouvinte de rota
   * e de clique do site — um segundo faria o mesmo trabalho duas vezes.
   *
   * Navegar não gera requisição: a jornada fica no navegador e viaja junto da
   * conversão. O servidor é chamado UMA vez por sessão, para contar a visita que
   * não virou lead (sem esse denominador não há taxa de conversão por canal) e
   * para renovar o cookie do visitante num Set-Cookie — o Safari corta para 7
   * dias o cookie escrito por JavaScript, mas não o que vem do servidor.
   */
  useEffect(() => {
    if (!pathname || pathname.startsWith("/admin")) return;

    const r = registrarVisita();
    if (!r) return;
    registrarPagina(pathname);

    if (!r.novaSessao || sessaoEnviada.current) return;
    sessaoEnviada.current = true;

    const enviar = () => {
      try {
        const corpo = JSON.stringify({
          vid: r.jornada.vid,
          sessions: r.jornada.sessions,
          first_seen: r.jornada.createdAt,
          ...r.toque,
        });
        if (navigator.sendBeacon) {
          navigator.sendBeacon("/api/track.php", new Blob([corpo], { type: "application/json" }));
        } else {
          fetch("/api/track.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: corpo,
            keepalive: true,
          }).catch(() => {});
        }
      } catch {
        /* medição nunca atrapalha a navegação */
      }
    };

    // Fora do caminho crítico: a primeira tela não divide banda com isto.
    if ("requestIdleCallback" in window) {
      (window as unknown as { requestIdleCallback: (cb: () => void, o?: object) => void })
        .requestIdleCallback(enviar, { timeout: 4000 });
    } else {
      setTimeout(enviar, 1200);
    }
  }, [pathname]);

  useEffect(() => {
    if (!pathname) return;
    if (pathname === "/pool-simulator") {
      analytics.simulatorOpen();
      return;
    }
    const poolMatch = pathname.match(/^\/pools\/([^/]+)\/?$/);
    if (poolMatch) {
      analytics.viewPool({ pool_slug: poolMatch[1] });
    }
  }, [pathname]);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement | null)?.closest?.("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href") ?? "";
      if (!href.startsWith("tel:")) return;

      let location = "body";
      if (anchor.closest("header")) location = "header";
      else if (anchor.closest("footer")) location = "footer";
      else if (anchor.closest("form")) location = "contact_form";

      analytics.phoneClick(location);

      // Also record the click in our own backend so the /admin panel can
      // count calls by date and location. Fire-and-forget; never blocks the
      // tel: navigation. (No-op locally where the PHP endpoint doesn't exist.)
      try {
        const payload = JSON.stringify({
          location,
          page: window.location.pathname,
          // A jornada vai junto: ligação é conversão como o formulário, e sem
          // isto metade dos contatos ficaria sem origem no painel.
          attribution: payloadAtribuicao() || undefined,
        });
        if (navigator.sendBeacon) {
          navigator.sendBeacon("/api/track-call.php", payload);
        } else {
          fetch("/api/track-call.php", {
            method: "POST",
            body: payload,
            keepalive: true,
          }).catch(() => {});
        }
      } catch {
        /* ignore */
      }
    }

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
