"use client";

import { useEffect } from "react";

type Props = {
  /** vai pro checkout como ?variante=... (ex.: "mmf-vsl-h1", "vsl-v03") */
  variante: string;
};

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
const UTM_COOKIE = "mff_utm";

// Botão de checkout configurado no painel da Vturb (dentro do vídeo).
// O player renderiza um <a> comum na página (<vturb-anchor-button>, sem iframe
// nem shadow DOM) e sozinho só repassa a query da URL — sem a variante (que na
// /mmf-vsl não fica na URL), sem as UTMs guardadas no cookie mff_utm e abrindo
// em aba nova se o painel mandar. Aqui o clique é pego na fase de captura,
// antes do handler da Vturb (que dá stopPropagation), e vai pro checkout NA
// MESMA ABA com o mesmo pacote dos botões da página. Não para a propagação:
// a Vturb continua contando o clique (ExitedClick).
function montarUrl(href: string, variante: string) {
  const url = new URL(href);
  const daPagina = new URLSearchParams(window.location.search);
  daPagina.forEach((value, key) => url.searchParams.set(key, value));

  // Quem volta com a URL sem campanha (nenhuma UTM, ou só o utm_source=direto
  // que a UTMify escreve com sck=direto): usa o conjunto inteiro do cookie
  // (gravado pelo script tracking-utms do layout). Com campanha na URL, ela
  // vale sozinha — nunca mistura URL e cookie.
  let salvas: Record<string, string> = {};
  try {
    const m = document.cookie.match(new RegExp("(?:^|; )" + UTM_COOKIE + "=([^;]*)"));
    if (m) salvas = JSON.parse(decodeURIComponent(m[1])) || {};
  } catch {
    salvas = {};
  }
  const naUrl = UTM_KEYS.filter((k) => daPagina.get(k));
  const semCampanha =
    naUrl.length === 0 || (naUrl.length === 1 && daPagina.get("utm_source") === "direto");
  if (semCampanha && UTM_KEYS.some((k) => salvas[k])) {
    UTM_KEYS.forEach((k) => {
      if (salvas[k]) url.searchParams.set(k, salvas[k]);
      else url.searchParams.delete(k);
    });
    if (url.searchParams.get("sck") === "direto") url.searchParams.delete("sck");
  }

  // sck no formato da UTMify/tracking-utms: valores das UTMs unidos por "|".
  if (!url.searchParams.has("sck")) {
    const sck = UTM_KEYS.map((k) => url.searchParams.get(k) ?? "").filter(Boolean);
    if (sck.length > 0) url.searchParams.set("sck", sck.join("|"));
  }

  url.searchParams.set("variante", variante);
  return url.toString();
}

export function VturbCheckoutUtm({ variante }: Props) {
  useEffect(() => {
    function aoClicar(e: MouseEvent) {
      if (e.defaultPrevented || e.button !== 0) return;
      const alvo = e.target instanceof Element ? e.target : null;
      const link = alvo?.closest("a");
      if (!link || !link.closest("vturb-smartplayer, vturb-anchor-button, vturb-custom-html")) return;
      if (!/(^|\.)greenn\.com\.br$/.test(link.hostname)) return;
      e.preventDefault();
      window.location.assign(montarUrl(link.href, variante));
    }
    window.addEventListener("click", aoClicar, true);
    return () => window.removeEventListener("click", aoClicar, true);
  }, [variante]);

  return null;
}
