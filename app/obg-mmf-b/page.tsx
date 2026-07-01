import type { Metadata } from "next";
import Script from "next/script";
import { Leaf } from "../sos-canetas-_shared/_components/Leaf";

export const metadata: Metadata = {
  title: "Obrigada — Oferta especial | Michelly Silveira",
  robots: "noindex, follow",
};

// Token do gatilho de compra Pagtrust. É uma CONSTANTE DEFAULT embutida no
// próprio upsell.min.js (não identifica a oferta — a oferta é resolvida pelo
// passo do funil no painel da Pagtrust + o rcid da URL). Usar esse id exato
// faz o script vincular o clique automaticamente.
const PAGTRUST_UPSELL_TOKEN = "F5x1pBI";

// Classe visual reaproveitada da versão Greenn, para manter cor/copy.
const BTN_PRIMARY_CLASS =
  "inline-flex items-center justify-center rounded-full border-0 cursor-pointer font-sans font-semibold tracking-wide transition-all duration-200 ease-out hover:translate-y-[-2px] focus-visible:outline-2 focus-visible:outline-offset-4 bg-sos-terracota text-creme px-10 md:px-16 py-6 md:py-7 text-[18px] md:text-[20px] shadow-[0_12px_40px_rgba(197,107,74,0.4)] hover:shadow-[0_16px_48px_rgba(197,107,74,0.48)] focus-visible:outline-sos-terracota";

export default function ObgMmfBPage() {
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
      <div className="relative z-20 bg-[#A83E22] text-white shadow-[0_6px_22px_rgba(168,62,34,0.5)]">
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
              Comunicado importante
            </span>
            — leia antes de continuar.
          </span>
        </div>
      </div>

      <section className="relative z-10 flex-1 flex items-center justify-center px-6 md:px-20 py-12 md:py-16">
        {/* Wrapper único de 760px centralizado pela section via flex
            (não depende de mx-auto, que estava computando margin:0
            por algum conflito de cascade-layer entre o reset do
            preflight Tailwind e a regra .mx-auto). */}
        <div className="w-full max-w-[760px] text-center animate-fade-up">
          {/* HEADLINE */}
          <h1 className="font-serif text-[30px] md:text-[48px] leading-[1.12] md:leading-[1.08] font-medium text-texto mb-5 md:mb-6">
            Para garantir o seu resultado com o S.O.S. Canetas, você precisa{" "}
            <em className="italic">assistir esse vídeo agora.</em>
          </h1>

          {/* SUBHEADLINE — envolvido em flex justify-center pra centralizar
              o bloco de 620px dentro do wrapper de 760px sem mx-auto. */}
          <div className="flex justify-center mb-8 md:mb-10">
            <p className="font-sans text-[17px] md:text-[20px] leading-[1.6] text-marrom max-w-[620px]">
              O seu tratamento passa por 3 fases. O S.O.S. cobre a primeira. Eu
              gravei esse vídeo para mostrar o que protege o resultado nas outras
              duas — e por que ignorar isso é o erro que faz a maioria das
              mulheres perder tudo quando a caneta para.
            </p>
          </div>

          {/* VSL — Vturb / Converteai. Já preenche os 760px do wrapper. */}
          <div className="relative mb-8 md:mb-10 rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(42,36,24,0.18)]">
            {/* @ts-expect-error — custom element do Vturb */}
            <vturb-smartplayer
              id="vid-6a1845f4b7169516c91dba45"
              style={{ display: "block", width: "100%" }}
            />
          </div>

          {/* AVISO — reforço de escassez logo abaixo do vídeo. Bloco âmbar
              sólido (presente premium) com barra de acento + ícone pulsante:
              salta do creme por saturação, sem soar alarme. */}
          <div className="flex justify-center mb-8 md:mb-10">
            <p className="inline-flex items-start gap-3 rounded-xl border-l-4 border-sos-terracota bg-gradient-to-r from-sos-dourado to-sos-dourado-esc px-5 md:px-6 py-4 font-sans text-[15px] md:text-[17px] leading-[1.5] text-creme max-w-[620px] shadow-[0_10px_30px_rgba(156,126,69,0.35)]">
              <span
                aria-hidden="true"
                className="shrink-0 text-[20px] md:text-[22px] animate-pulse"
              >
                🎁
              </span>
              <span>
                <strong className="font-bold uppercase tracking-wide">
                  Aviso:
                </strong>{" "}
                Esse conteúdo é um presente e o vídeo não estará disponível se
                você sair dessa página.
              </span>
            </p>
          </div>

          {/* CTA principal — invisível até 13:00 de vídeo assistido. O
              wrapper reserva a altura do botão (opacity-0 mantém layout),
              evitando shift quando revelado via data-revealed.

              Compra Pagtrust one-click (upsell). O upsell.min.js vincula o
              clique pelos ids #pagtrust-upsell-trigger-*-<TOKEN>. Sem modal =
              aprovação imediata (a exibição do modal é controlada pela flag do
              passo no painel da Pagtrust). */}
          <div
            id="obg-mmf-b-main-cta"
            data-revealed="false"
            aria-live="polite"
            className="group"
          >
            <div className="opacity-0 pointer-events-none transition-opacity duration-500 group-data-[revealed=true]:opacity-100 group-data-[revealed=true]:pointer-events-auto">
              {/* Container do upsell Pagtrust */}
              <div className="pagtrust-upsell-button-div flex flex-col items-center gap-3">
                {/* Botão de compra (compra original em 1 cartão) */}
                <button
                  id={`pagtrust-upsell-trigger-1-${PAGTRUST_UPSELL_TOKEN}`}
                  className={BTN_PRIMARY_CLASS}
                >
                  QUERO APROVEITAR AGORA
                </button>

                {/* Botão de compra (compra original em 2 cartões) — exibido
                    pelo script apenas quando a compra original foi dividida. */}
                <button
                  id={`pagtrust-upsell-trigger-2-${PAGTRUST_UPSELL_TOKEN}`}
                  className={BTN_PRIMARY_CLASS}
                >
                  QUERO APROVEITAR AGORA (2º cartão)
                </button>

                {/* Status do processamento (preenchido pelo upsell.min.js) */}
                <p
                  id="pagtrust-upsell-buy-status"
                  className="font-sans text-[14px] text-marrom"
                />
              </div>

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
        </div>
      </section>

      {/* VSL — player Vturb (Converteai). Define o custom element
          <vturb-smartplayer> e faz upgrade do elemento já no DOM. */}
      <Script
        id="vturb-vid-6a1845f4b7169516c91dba45"
        src="https://scripts.converteai.net/9209a5ac-0a42-43b5-9c1f-7d310e9d3d33/players/6a1845f4b7169516c91dba45/v4/player.js"
        strategy="afterInteractive"
      />

      {/* Polling do tempo do player Vturb (Shadow DOM) com fallbacks.
          Libera o CTA principal aos 13:00. Para o intervalo assim que o
          alvo foi revelado. */}
      <Script id="obg-mmf-b-reveal-triggers" strategy="afterInteractive">
        {`(function(){
  var PLAYER_ID = "vid-6a1845f4b7169516c91dba45";
  var TARGETS = [
    { id: "obg-mmf-b-main-cta", at: 780 }, // 13:00 — botão principal
  ];
  var done = {};

  function getCurrentTime(){
    var el = document.getElementById(PLAYER_ID);
    if (!el) return null;
    if (typeof el.currentTime === "number") return el.currentTime;
    if (typeof el.getCurrentTime === "function") {
      try { var t = el.getCurrentTime(); if (typeof t === "number") return t; } catch(e){}
    }
    try {
      var sr = el.shadowRoot;
      if (sr) {
        var v = sr.querySelector("video");
        if (v && typeof v.currentTime === "number") return v.currentTime;
      }
    } catch(e){}
    var v2 = el.querySelector ? el.querySelector("video") : null;
    if (v2 && typeof v2.currentTime === "number") return v2.currentTime;
    return null;
  }

  function reveal(id){
    if (done[id]) return;
    var node = document.getElementById(id);
    if (!node) return;
    node.setAttribute("data-revealed", "true");
    node.setAttribute("aria-hidden", "false");
    done[id] = true;
  }

  var iv = setInterval(function(){
    var t = getCurrentTime();
    if (typeof t === "number") {
      for (var i = 0; i < TARGETS.length; i++) {
        if (t >= TARGETS[i].at) reveal(TARGETS[i].id);
      }
    }
    var allDone = true;
    for (var j = 0; j < TARGETS.length; j++) {
      if (!done[TARGETS[j].id]) { allDone = false; break; }
    }
    if (allDone) clearInterval(iv);
  }, 1000);
})();`}
      </Script>

      {/* Script de compra one-click da Pagtrust. Carrega upsell.min.js e
          inicializa com useCustomStyles: true para preservar nossos estilos
          (cor terracota / copy). */}
      <Script id="pagtrust-upsell" strategy="afterInteractive">
        {`(function (P, l) {
  var a = l.getElementsByTagName("body")[0];
  var script = l.createElement("script");
  script.src = "https://static.pagtrust.com.br/js/upsell.min.js";
  script.async = true;
  script.defer = true;
  script.addEventListener("load", function () {
    if (P.upsell) {
      P.upsell({ useCustomStyles: true });
    }
  });
  a.appendChild(script);
})(window, document);`}
      </Script>
    </main>
  );
}
