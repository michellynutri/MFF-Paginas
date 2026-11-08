"use client";

import { useEffect, useState } from "react";
import { BF_FAIXA_TEXTO, BF_PITCH_SECONDS, VTURB_VIDEO_MIA } from "./constants";

// Faixa amarela "CONDIÇÃO ESPECIAL DE BLACK FRIDAY" no topo da página. Começa
// escondida; no instante em que o botão da Vturb ("ACESSO IMEDIATO LIBERADO",
// dentro do vídeo) aparece, ela TOMA O LUGAR da faixa preta "ESTE VÍDEO SAI DO
// AR HOJE" (classe `bf-aberta` no <html> esconde a .faixa-sai-do-ar) e fica.
// Uma faixa só, nunca duas empilhadas (pedido do Vinícius em 08/11): mesma
// altura da preta, então o vídeo não se mexe e o botão da Vturb, no rodapé
// do vídeo, continua na dobra do celular (o cuidado do PR #32).
//
// Como sabe que o botão abriu: a cada 500 ms olha (1) se existe dentro do
// <vturb-smartplayer> um <a> pra greenn.com.br de fato visível (o player
// deixa o botão no DOM comum da página o tempo todo, escondido com
// visibility:hidden, e só o mostra quando o vídeo chega no segundo do
// painel); e (2) como reserva, se a posição do vídeo (el.currentTime, lida
// como a /mmf-vsl faz) já passou de BF_PITCH_SECONDS, o mesmo segundo do
// painel. Qualquer um dos dois abre a faixa. Não depende de evento da Vturb
// (ela não avisa quando o botão entra).
export function FaixaBlackFriday() {
  const [aberta, setAberta] = useState(false);

  useEffect(() => {
    if (VTURB_VIDEO_MIA === "") return;
    let aberto = false;

    function abrir() {
      if (aberto) return;
      aberto = true;
      document.documentElement.classList.add("bf-aberta");
      setAberta(true);
    }

    // A Vturb já cria o <a> do botão no DOM desde o carregamento, com tamanho,
    // mas com visibility:hidden (no <a> ou no <vturb-anchor-button> em volta)
    // até o segundo configurado — visto no dev em 08/11. Então "visível" =
    // tem tamanho E nenhum ancestral até o player esconde (visibility,
    // display, opacity).
    function realmenteVisivel(a: HTMLElement) {
      const r = a.getBoundingClientRect();
      if (r.width <= 0 || r.height <= 0) return false;
      let el: HTMLElement | null = a;
      while (el && el.tagName.toLowerCase() !== "vturb-smartplayer") {
        const cs = getComputedStyle(el);
        if (cs.visibility === "hidden" || cs.display === "none" || Number(cs.opacity) === 0) return false;
        el = el.parentElement;
      }
      return true;
    }

    function botaoVisivel() {
      const links = document.querySelectorAll<HTMLAnchorElement>("vturb-smartplayer a[href]");
      for (const a of links) {
        if (!/(^|\.)greenn\.com\.br$/.test(a.hostname)) continue;
        if (realmenteVisivel(a)) return true;
      }
      return false;
    }

    function passouDoPitch() {
      if (!(BF_PITCH_SECONDS > 0)) return false;
      const el = document.getElementById(`vid-${VTURB_VIDEO_MIA}`) as
        | (HTMLElement & { currentTime?: number })
        | null;
      if (!el) return false;
      let pos = 0;
      try {
        pos = Number(el.currentTime) || 0;
      } catch {
        pos = 0;
      }
      return pos >= BF_PITCH_SECONDS;
    }

    const t = window.setInterval(() => {
      if (botaoVisivel() || passouDoPitch()) {
        abrir();
        window.clearInterval(t);
      }
    }, 500);
    return () => window.clearInterval(t);
  }, []);

  // A regra que esconde a faixa preta vai sempre, pra não piscar: no momento
  // em que a classe entra no <html>, uma some e a outra aparece.
  const css = `
    .bf-aberta .faixa-sai-do-ar{display:none}
    @keyframes bf-faixa-entra{from{opacity:0}to{opacity:1}}
    .bf-faixa{animation:bf-faixa-entra .35s ease-out both}
    @media (prefers-reduced-motion: reduce){.bf-faixa{animation:none}}
  `;

  if (!aberta) return <style>{css}</style>;

  return (
    <div role="status" className="bf-faixa bg-[#FFE600] text-black">
      {/* Mesmo padding e mesma altura de linha da FaixaSaiDoAr (21,25 px no
          celular, 25 px no desktop) = mesma altura, o vídeo não se mexe. A
          fonte é menor no celular (clamp até 15 px) porque o texto é mais
          comprido que o da preta e a 17 px quebrava em duas linhas a 390 px. */}
      <p className="mx-auto max-w-[1180px] px-4 py-3 md:py-3.5 text-center font-sans font-bold uppercase text-[clamp(12px,3.9vw,15px)] md:text-[20px] leading-[21.25px] md:leading-[25px] tracking-[0.01em] whitespace-nowrap">
        <span aria-hidden className="mr-1.5">🔥</span>
        {BF_FAIXA_TEXTO}
      </p>
      <style>{css}</style>
    </div>
  );
}
