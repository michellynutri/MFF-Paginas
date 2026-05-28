import type { Metadata } from "next";
import Script from "next/script";
import { Leaf } from "../sos-canetas-_shared/_components/Leaf";

export const metadata: Metadata = {
  title: "Obrigada — Oferta especial | Michelly Silveira",
  robots: "noindex, follow",
};

// Botão de compra da Greenn (one-click / upsell).
// Mantido como HTML cru para preservar os atributos data-greenn-* e o
// onclick inline que o script da Greenn (upsell.js) espera encontrar.
const GREENN_BUTTON_HTML = `<button
  data-greenn-one-click="false"
  data-greenn-upsell="5872"
  data-greenn-split="1"
  data-loading="false"
  onclick="startLoading(this)"
  class="inline-flex items-center justify-center rounded-full border-0 cursor-pointer font-sans font-semibold tracking-wide transition-all duration-200 ease-out hover:translate-y-[-2px] focus-visible:outline-2 focus-visible:outline-offset-4 bg-sos-terracota text-creme px-10 md:px-16 py-6 md:py-7 text-[18px] md:text-[20px] shadow-[0_12px_40px_rgba(197,107,74,0.4)] hover:shadow-[0_16px_48px_rgba(197,107,74,0.48)] focus-visible:outline-sos-terracota"
>QUERO APROVEITAR AGORA</button>`;

// Segundo botão (oferta com 30% off, revelado pela barra inferior aos 14:30
// de vídeo). Upsell 5875 cadastrado no painel da Greenn já com 30% off.
const GREENN_BUTTON_30OFF_HTML = `<button
  data-greenn-one-click="false"
  data-greenn-upsell="5875"
  data-greenn-split="1"
  data-loading="false"
  onclick="startLoading(this)"
  class="shrink-0 inline-flex items-center justify-center rounded-full border-0 cursor-pointer font-sans font-semibold tracking-wide bg-sos-terracota text-creme px-5 md:px-8 py-3 md:py-3.5 text-[13px] md:text-[15px] shadow-[0_8px_22px_rgba(197,107,74,0.4)] hover:shadow-[0_12px_28px_rgba(197,107,74,0.5)] transition-all duration-200 hover:translate-y-[-1px]"
>QUERO COM 30% OFF</button>`;

export default function ObgMmfPage() {
  return (
    <main className="bg-creme relative overflow-hidden min-h-screen flex flex-col">
      {/* Folhagem botânica — assinatura visual da identidade sos-canetas */}
      <Leaf
        className="top-[-40px] right-[-60px] w-[260px] h-[260px] md:w-[320px] md:h-[320px]"
        opacity={0.16}
      />
      <Leaf
        className="bottom-[-50px] left-[-70px] w-[220px] h-[220px] md:w-[280px] md:h-[280px]"
        opacity={0.12}
        rotation={-25}
      />

      {/* Faixa de alerta no topo — vermelho puro + triângulo de aviso pulsante,
          texto bold black em branco. Romper a harmonia é intencional aqui:
          a missão é gritar "não saia ainda". */}
      <div className="relative z-20 bg-[#DC2626] text-white shadow-[0_6px_22px_rgba(220,38,38,0.5)]">
        <div className="max-w-[1180px] mx-auto px-4 md:px-8 py-3 md:py-3.5 flex items-center justify-start md:justify-center gap-3 md:gap-4 text-left md:text-center">
          <span className="inline-flex h-9 w-9 md:h-11 md:w-11 items-center justify-center rounded-full bg-white/20 shrink-0 animate-pulse">
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinejoin="round"
              className="md:w-6 md:h-6"
              aria-hidden="true"
            >
              <path d="M12 2.5 22 20.5 2 20.5 Z" />
              <path d="M12 9.5v5" strokeLinecap="round" />
              <circle cx="12" cy="17.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </span>
          <span className="font-sans font-black text-[16px] md:text-[22px] leading-tight tracking-tight">
            <span className="uppercase tracking-[0.14em] mr-1 md:mr-2">
              Atenção:
            </span>
            Deixa eu te contar uma coisa antes de você ir.
          </span>
        </div>
      </div>

      <section className="relative z-10 flex-1 flex items-center justify-center px-6 md:px-20 py-12 md:py-16">
        <div className="w-full max-w-[1180px] mx-auto">
          {/* Bloco único: copy + VSL + botão, centralizado */}
          <div className="max-w-[760px] mx-auto text-center animate-fade-up">
            {/* HEADLINE */}
            <h1 className="font-serif text-[30px] md:text-[48px] leading-[1.12] md:leading-[1.08] font-medium text-texto mb-5 md:mb-6">
              Enquanto a balança desce, o seu corpo está tomando decisões{" "}
              <em className="italic">que você não consegue ver.</em>
            </h1>

            {/* SUBHEADLINE */}
            <p className="font-sans text-[17px] md:text-[20px] leading-[1.6] text-marrom mb-8 md:mb-10 max-w-[620px] mx-auto">
              São essas decisões que vão determinar se você vai sair do tratamento
              com o corpo que quer — ou voltar ao ponto zero. Assiste esse vídeo
              antes de fechar essa página. Eu te explico tudo.
            </p>

            {/* VSL — Vturb / Converteai (player carregado via <Script> abaixo) */}
            <div className="relative mx-auto mb-8 md:mb-10 max-w-[760px] rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(42,36,24,0.18)]">
              {/* @ts-expect-error — custom element do Vturb */}
              <vturb-smartplayer
                id="vid-6a1845f4b7169516c91dba45"
                style={{ display: "block", margin: "0 auto", width: "100%" }}
              />
            </div>

            {/* Botão de compra Greenn (estilizado em terracota) */}
            <div
              className="flex justify-center"
              dangerouslySetInnerHTML={{ __html: GREENN_BUTTON_HTML }}
            />

            {/* Microline */}
            <div className="mt-4 flex items-center justify-center gap-2 font-sans text-[13px] text-marrom">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="text-sos-dourado-esc"
                aria-hidden="true"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" strokeLinecap="round" />
              </svg>
              <span>Pagamento 100% seguro · Oferta exclusiva desta página</span>
            </div>
          </div>
        </div>
      </section>

      {/* Barra inferior fixa — 2ª oferta (30% off). Oculta por padrão;
          revelada quando o vídeo passa de 14:30 (ver script abaixo). */}
      <aside
        id="obg-mmf-second-offer"
        data-revealed="false"
        aria-hidden="true"
        className="fixed bottom-0 left-0 right-0 z-50 translate-y-full opacity-0 pointer-events-none transition-all duration-500 ease-out data-[revealed=true]:translate-y-0 data-[revealed=true]:opacity-100 data-[revealed=true]:pointer-events-auto bg-verde-esc text-creme shadow-[0_-10px_30px_rgba(0,0,0,0.18)]"
      >
        <div className="max-w-[1180px] mx-auto px-4 md:px-8 py-3 md:py-4 flex items-center justify-between gap-3 md:gap-6">
          <div className="flex items-center gap-3 min-w-0">
            <span className="shrink-0 rounded-full bg-sos-terracota text-creme font-sans font-bold text-[11px] md:text-[12px] px-2.5 py-1 tracking-wide">
              -30% OFF
            </span>
            <div className="min-w-0">
              <div className="font-sans font-semibold text-[13px] md:text-[15px] leading-tight truncate">
                Oferta exclusiva por tempo limitado
              </div>
              <div className="font-sans text-[11px] md:text-[13px] text-creme/70 leading-tight truncate">
                Aproveite o desconto antes de fechar essa página
              </div>
            </div>
          </div>
          <div
            className="shrink-0"
            dangerouslySetInnerHTML={{ __html: GREENN_BUTTON_30OFF_HTML }}
          />
        </div>
      </aside>

      {/* VSL — player Vturb (Converteai). Define o custom element
          <vturb-smartplayer> e faz upgrade do elemento já no DOM. */}
      <Script
        id="vturb-vid-6a1845f4b7169516c91dba45"
        src="https://scripts.converteai.net/9209a5ac-0a42-43b5-9c1f-7d310e9d3d33/players/6a1845f4b7169516c91dba45/v4/player.js"
        strategy="afterInteractive"
      />

      {/* Revela a barra inferior quando o vídeo passa de 14:30. Faz polling
          do tempo do player Vturb (Shadow DOM) com fallbacks. */}
      <Script id="obg-mmf-reveal-second-offer" strategy="afterInteractive">
        {`(function(){
  var TARGET = 870; // 14:30 em segundos (de vídeo assistido)
  var PLAYER_ID = "vid-6a1845f4b7169516c91dba45";
  var BAR_ID = "obg-mmf-second-offer";
  var revealed = false;

  function getCurrentTime(){
    var el = document.getElementById(PLAYER_ID);
    if (!el) return null;
    // 1) propriedade direta no custom element
    if (typeof el.currentTime === "number") return el.currentTime;
    // 2) método getCurrentTime()
    if (typeof el.getCurrentTime === "function") {
      try { var t = el.getCurrentTime(); if (typeof t === "number") return t; } catch(e){}
    }
    // 3) <video> dentro do shadowRoot
    try {
      var sr = el.shadowRoot;
      if (sr) {
        var v = sr.querySelector("video");
        if (v && typeof v.currentTime === "number") return v.currentTime;
      }
    } catch(e){}
    // 4) <video> em light DOM (fallback)
    var v2 = el.querySelector ? el.querySelector("video") : null;
    if (v2 && typeof v2.currentTime === "number") return v2.currentTime;
    return null;
  }

  function reveal(){
    if (revealed) return;
    var bar = document.getElementById(BAR_ID);
    if (!bar) return;
    bar.setAttribute("data-revealed", "true");
    bar.setAttribute("aria-hidden", "false");
    revealed = true;
  }

  var iv = setInterval(function(){
    if (revealed) { clearInterval(iv); return; }
    var t = getCurrentTime();
    if (typeof t === "number" && t >= TARGET) { reveal(); clearInterval(iv); }
  }, 1000);
})();`}
      </Script>

      {/* Script de compra (modal) da Greenn — define window.startLoading e
          carrega o upsell.js que vincula o comportamento ao botão acima. */}
      <Script id="greenn-upsell" strategy="afterInteractive">
        {`window.startLoading = function(button) {
  const originalHTML = button.innerHTML;
  button.setAttribute('data-loading', 'true');
  button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#ffffff" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25"/><path fill="#ffffff" d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"><animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path></svg>';
  setTimeout(() => {
    button.setAttribute('data-loading', 'false');
    button.innerHTML = originalHTML;
  }, 3000);
};
(function (w, d, s, t) {
  if (w._greennUp) return;
  w._greennUp = t;
  var f = d.getElementsByTagName(s)[0], j = d.createElement(s);
  j.async = true;
  j.src = "https://payfast.greenn.com.br/assets/upsell.js?v=" + t;
  f.parentNode.insertBefore(j, f);
})(window, document, "script", Date.now());`}
      </Script>
    </main>
  );
}
