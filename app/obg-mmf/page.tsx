import type { Metadata } from "next";
import Script from "next/script";
import { RodapeInstitucional } from "@/components/rodape-institucional";

export const metadata: Metadata = {
  title: "Processando sua compra | S.O.S Canetas | Michelly Silveira",
  robots: "noindex, nofollow",
};

// ─── Integração Greenn (one-click / upsell), herdada da /obg-mmf-arquivada-01 ──
// O botão fica como HTML cru pra preservar os atributos data-greenn-* e o
// onclick inline que o upsell.js da Greenn espera encontrar.
//
// data-greenn-upsell só aceita o ID NUMÉRICO do upsell cadastrado no painel —
// a oferta (preço) fica amarrada dentro desse cadastro. Consultado na API
// (apipay.greenn.com.br/api/upsell/<id>/metas) em 2026-09-10:
//   6552 = "MMF 497" → produto 161840 (código g4vfzcf), oferta KMD7EU
//          ("Método Metabólico Feminino + Mentoria com a Nutri", R$ 497, até 12x)
//   5872 = "MMF - 297" (oferta 4dJmPN) e 5875 = "MMF - 197" (oferta ZH8FAt) são os
//          upsells antigos usados na /obg-mmf-arquivada-01 (versão anterior desta página).
const GREENN_UPSELL_ID = "6552";
// ATENÇÃO: o upsell.js da Greenn injeta um CSS global com `.text-center { margin: 40px 0 }`,
// que colide com a classe do Tailwind. Por isso esta página usa `[text-align:center]`
// no lugar de `text-center` — não reintroduzir a classe.

// Destino do "Não, obrigada" = página de DOWNSELL (MMF 6 meses por R$ 247).
// O upsell.js procura um <a id="not-buy-link">, anexa ?token=... ao href e
// trata o clique — por isso o token da compra chega lá e o one-click continua.
const DECLINE_URL = "/obg-mmf-c-down";

// Recuperação de Pix: checkout normal (cartão, até 12x) do MESMO produto/oferta
// do upsell acima — produto g4vfzcf, oferta KMD7EU (R$ 497).
const PIX_RECOVERY_CHECKOUT_URL = "https://payfast.greenn.com.br/g4vfzcf/offer/KMD7EU";

// Player Vturb — mini-VSL do upsell (v5 enxuta do MMF), 3:4.
const VTURB_PLAYER_ID = "vid-6aa1e0c339597210fcdb85de";
const VTURB_PLAYER_SRC =
  "https://scripts.converteai.net/9209a5ac-0a42-43b5-9c1f-7d310e9d3d33/players/6aa1e0c339597210fcdb85de/v4/player.js";

// Tudo abaixo do vídeo (e o timer) só aparece aos 10:45 de vídeo assistido.
const REVEAL_AT_SECONDS = 645;
// Contagem regressiva exibida a partir do reveal.
const COUNTDOWN_SECONDS = 600;

// Verde de CTA (#16A34A, hover #15803D): verde saturado e escuro o bastante pra
// texto branco passar em AA em fonte grande. É o verde "de ação" clássico dos
// testes de botão (verde saturado > cor de marca em página de checkout/upsell),
// e aqui ainda contrasta com o terracota/dourado do resto da página, então o
// botão é o único elemento verde-vivo na tela.
const BTN_PRIMARY_CLASS =
  "inline-flex w-full items-center justify-center gap-3 rounded-2xl border-0 cursor-pointer font-sans font-bold tracking-wide uppercase transition-all duration-200 ease-out hover:translate-y-[-2px] focus-visible:outline-2 focus-visible:outline-offset-4 bg-[#16A34A] hover:bg-[#15803D] text-white px-6 md:px-10 py-5 md:py-6 text-[17px] md:text-[20px] leading-tight shadow-[0_14px_40px_rgba(22,163,74,0.42)] hover:shadow-[0_18px_48px_rgba(22,163,74,0.5)] focus-visible:outline-[#16A34A]";

const CHECK_SVG =
  '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';

const GREENN_BUTTON_HTML = `<button
  data-greenn-one-click="false"
  data-greenn-upsell="${GREENN_UPSELL_ID}"
  data-greenn-split="1"
  data-loading="false"
  onclick="startLoading(this)"
  class="${BTN_PRIMARY_CLASS}"
>${CHECK_SVG}<span>Sim! Quero o acompanhamento completo</span></button>`;

// ─── Ícones ─────────────────────────────────────────────────────────────────
function IconCheck({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}
function IconPlay({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className={className} aria-hidden="true">
      <path d="M8 5.5v13l11-6.5z" />
    </svg>
  );
}
function IconSpinner({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" className={`animate-spin ${className}`} aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="3" opacity="0.25" />
      <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
function IconWarn({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 3 22 20.5H2Z" />
      <path d="M12 9.5v5" strokeLinecap="round" />
      <circle cx="12" cy="17.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function ObgMmfPage() {
  return (
    <main className="obg-c bg-creme text-texto min-h-screen flex flex-col">
      {/* Keyframes locais: barra de progresso indeterminada e anel pulsante do
          passo ativo. Ficam aqui (e não no globals) porque só esta página usa. */}
      <style>{`
        @keyframes obg-c-indeterminate {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
        @keyframes obg-c-ring {
          0%   { box-shadow: 0 0 0 0 rgba(197,107,74,0.55); }
          100% { box-shadow: 0 0 0 14px rgba(197,107,74,0); }
        }
        .obg-c-bar::after {
          content: "";
          position: absolute; inset: 0; width: 25%;
          background: linear-gradient(90deg, transparent, #B8975A, transparent);
          animation: obg-c-indeterminate 1.6s ease-in-out infinite;
        }
        .obg-c-ring { animation: obg-c-ring 1.8s ease-out infinite; }
      `}</style>

      {/* ── FAIXA DE STATUS (sticky) — lê como sistema, não como headline ── */}
      <header className="sticky top-0 z-30 bg-texto text-creme">
        <div className="max-w-[960px] mx-auto px-4 md:px-8 py-3 flex items-center justify-center gap-3 font-sans text-[13px] md:text-[15px]">
          <IconSpinner className="text-sos-dourado shrink-0" />
          <span className="font-medium tracking-wide">
            Processando o seu pedido
          </span>
          <span className="hidden sm:inline text-creme/50">·</span>
          <span className="hidden sm:inline text-creme/70">S.O.S Canetas</span>
        </div>
        <div className="obg-c-bar relative h-[3px] w-full overflow-hidden bg-creme/10" aria-hidden="true" />
      </header>

      <section className="flex-1 px-4 sm:px-6 py-4 md:py-8">
        <div className="max-w-[720px] mx-auto flex flex-col gap-4 md:gap-6">
          {/* ── ALERTA compacto (1 linha) + TIMER (10:45) ── */}
          <div className="animate-fade-up rounded-xl border border-[#A83E22]/60 bg-[#FFF3EE] px-3 md:px-5 py-2.5 md:py-3">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-7 w-7 md:h-8 md:w-8 shrink-0 items-center justify-center rounded-full bg-[#A83E22] text-white animate-pulse">
                <IconWarn className="w-4 h-4 md:w-5 md:h-5" />
              </span>
              <p className="font-sans text-[13px] md:text-[16px] leading-[1.35] text-texto">
                <strong className="font-black text-[#A83E22] uppercase">Espere!</strong>{" "}
                Sua compra do S.O.S Canetas está sendo processada.{" "}
                <strong className="font-bold">Não feche esta página</strong> ou você pode
                perder o seu acesso.
              </p>
            </div>

            {/* Timer — aparece aos 10:45 de vídeo. */}
            <div
              id="obg-c-timer"
              data-revealed="false"
              className="hidden data-[revealed=true]:flex mt-2.5 items-center justify-between gap-3 rounded-lg bg-white/80 border border-[#A83E22]/25 px-3 py-2"
            >
              <span className="font-sans text-[12px] md:text-[14px] text-texto leading-snug">
                Esta condição fica disponível só nesta página por:
              </span>
              <span
                id="obg-c-countdown"
                className="font-sans font-black tabular-nums text-[20px] md:text-[24px] text-[#A83E22] leading-none shrink-0"
              >
                10:00
              </span>
            </div>
          </div>

          {/* ── HEADLINE curta ── */}
          <h1 className="animate-fade-up animate-delay-100 [text-align:center] font-serif text-[21px] md:text-[32px] leading-[1.2] md:leading-[1.15] font-medium text-texto px-1">
            Enquanto sua venda é processada, tenho um recado rápido pra você ter
            o seu resultado mais rápido e garantir que ele fique{" "}
            <em className="italic">quando a caneta sair.</em>
          </h1>

          {/* ── VÍDEO — logo na primeira dobra, enquadrado como "recado" ── */}
          {/* Card com a largura do player (3:4, máx. 400px): em tablet/desktop ele
              encolhe e centraliza em vez de deixar faixas pretas dos lados. */}
          <div className="animate-fade-up animate-delay-200 w-full sm:max-w-[432px] sm:mx-auto rounded-2xl md:rounded-3xl bg-texto p-2.5 md:p-4 shadow-[0_18px_50px_rgba(42,36,24,0.28)]">
            <div className="flex items-center justify-between gap-3 px-1.5 pb-2 md:pb-3 font-sans text-creme">
              <span className="inline-flex items-center gap-2 text-[13px] md:text-[15px] font-medium">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-sos-terracota opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-sos-terracota" />
                </span>
                Dá o play antes de sair
              </span>
              <span className="text-[11px] md:text-[13px] text-creme/70 shrink-0">
                menos de 5 min
              </span>
            </div>
            <div className="rounded-xl md:rounded-2xl overflow-hidden bg-black">
              {/* @ts-expect-error — custom element do Vturb */}
              <vturb-smartplayer
                id={VTURB_PLAYER_ID}
                style={{ display: "block", margin: "0 auto", width: "100%" }}
              >
                <div
                  className="vturb-player-placeholder"
                  style={{
                    position: "relative",
                    width: "100%",
                    padding: "133.33333333333331% 0 0",
                    zIndex: 0,
                    backgroundColor: "black",
                  }}
                />
                {/* @ts-expect-error — custom element do Vturb */}
              </vturb-smartplayer>
            </div>
          </div>

          {/* ── PASSOS (rastreio do pedido) — compactos, abaixo do vídeo ── */}
          <ol className="animate-fade-up animate-delay-300 rounded-xl md:rounded-2xl bg-white border border-[var(--sos-borda-dourada)] shadow-[0_8px_30px_rgba(42,36,24,0.08)] divide-y divide-[var(--sos-borda-dourada)]">
            <li className="flex items-center gap-3 px-3.5 md:px-5 py-2.5 md:py-3.5">
              <span className="inline-flex h-7 w-7 md:h-8 md:w-8 shrink-0 items-center justify-center rounded-full bg-sos-verde-medio text-white">
                <IconCheck className="w-4 h-4" />
              </span>
              <p className="font-sans text-[13px] md:text-[16px] leading-[1.35] text-texto">
                <span className="font-bold text-sos-verde-medio">Passo 1</span> · Você
                garantiu o S.O.S Canetas (a conduta certa pros primeiros meses).
              </p>
            </li>
            <li className="flex items-center gap-3 px-3.5 md:px-5 py-2.5 md:py-3.5 bg-[#FFF8F4]">
              <span className="obg-c-ring inline-flex h-7 w-7 md:h-8 md:w-8 shrink-0 items-center justify-center rounded-full bg-sos-terracota text-white">
                <IconPlay className="ml-0.5 w-3.5 h-3.5" />
              </span>
              <p className="font-sans text-[13px] md:text-[16px] leading-[1.35] text-texto">
                <span className="font-bold text-sos-terracota">Passo 2</span> ·{" "}
                <strong className="font-semibold">Assista o recado acima:</strong> é
                exclusivo pra você que entrou agora.
              </p>
            </li>
            <li className="flex items-center gap-3 px-3.5 md:px-5 py-2.5 md:py-3.5">
              <span className="inline-flex h-7 w-7 md:h-8 md:w-8 shrink-0 items-center justify-center rounded-full bg-sos-dourado/15 text-sos-dourado-esc">
                <IconSpinner className="w-4 h-4" />
              </span>
              <p className="font-sans text-[13px] md:text-[16px] leading-[1.35] text-texto">
                <span className="font-bold text-sos-dourado-esc">Passo 3</span> · Sua
                compra está sendo finalizada e o acesso chega no seu e-mail em instantes.
              </p>
            </li>
          </ol>

          {/* ── BLOCO COM DELAY (10:45): CTA + recusa + recuperação de Pix ── */}
          <div
            id="obg-c-offer"
            data-revealed="false"
            aria-live="polite"
            className="group"
          >
            <div className="hidden group-data-[revealed=true]:flex flex-col gap-5 md:gap-6 animate-fade-up">
              {/* Botão de compra Greenn (one-click) */}
              <div className="flex justify-center" dangerouslySetInnerHTML={{ __html: GREENN_BUTTON_HTML }} />

              {/* Recusa — link comum pro próximo passo do funil */}
              <div className="[text-align:center]">
                <a
                  id="not-buy-link"
                  href={DECLINE_URL || "#"}
                  className="inline-block font-sans text-[14px] md:text-[15px] text-marrom underline underline-offset-4 decoration-marrom/50 hover:text-texto"
                >
                  Não, obrigada. Quero seguir só com o S.O.S Canetas por enquanto. →
                </a>
              </div>

              {/* Recuperação de Pix */}
              <div className="rounded-2xl border border-[var(--sos-borda-dourada)] bg-white px-5 md:px-6 py-5 [text-align:center] font-sans">
                <p className="text-[15px] md:text-[16px] leading-[1.5] text-texto">
                  Comprou o S.O.S no <strong className="font-semibold">Pix</strong> e quer aproveitar
                  esta oportunidade no cartão, parcelado em até{" "}
                  <strong className="font-semibold">12x</strong>?
                </p>
                <a
                  href={PIX_RECOVERY_CHECKOUT_URL || "#"}
                  className="mt-3 inline-flex items-center justify-center rounded-full border-2 border-sos-dourado-esc px-6 py-3 text-[14px] md:text-[15px] font-semibold text-sos-dourado-esc hover:bg-sos-dourado-esc hover:text-creme transition-colors"
                >
                  Clique aqui e garanta no cartão →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé — sai junto com a oferta (10:45). */}
      <div id="obg-c-footer" data-revealed="false" className="hidden data-[revealed=true]:block">
        <RodapeInstitucional
          tema="verde"
          // Esta página vende acompanhamento nutricional — o disclaimer padrão
          // ("não substitui acompanhamento ... nutricional individualizado") se
          // contradiria com a oferta. Versão sem essa parte, só aqui.
          disclaimer="Este produto não substitui acompanhamento médico. Resultados variam de pessoa para pessoa."
        />
      </div>

      {/* Player Vturb */}
      <Script id={`vturb-${VTURB_PLAYER_ID}`} src={VTURB_PLAYER_SRC} strategy="afterInteractive" />

      {/* Reveal aos 10:45 + contagem regressiva de 10:00 a partir do reveal.
          ?preview=1 revela tudo imediatamente (só pra conferir layout). */}
      <Script id="obg-c-reveal" strategy="afterInteractive">
        {`(function(){
  var PLAYER_ID = ${JSON.stringify(VTURB_PLAYER_ID)};
  var AT = ${REVEAL_AT_SECONDS};
  var COUNTDOWN = ${COUNTDOWN_SECONDS};
  var IDS = ["obg-c-timer", "obg-c-offer", "obg-c-footer"];
  var revealed = false;

  function getCurrentTime(){
    var el = document.getElementById(PLAYER_ID);
    if (!el) return null;
    if (typeof el.currentTime === "number") return el.currentTime;
    if (typeof el.getCurrentTime === "function") {
      try { var t = el.getCurrentTime(); if (typeof t === "number") return t; } catch(e){}
    }
    try {
      var sr = el.shadowRoot;
      if (sr) { var v = sr.querySelector("video"); if (v && typeof v.currentTime === "number") return v.currentTime; }
    } catch(e){}
    var v2 = el.querySelector ? el.querySelector("video") : null;
    if (v2 && typeof v2.currentTime === "number") return v2.currentTime;
    return null;
  }

  function pad(n){ return (n < 10 ? "0" : "") + n; }
  function startCountdown(){
    var out = document.getElementById("obg-c-countdown");
    if (!out) return;
    var end = Date.now() + COUNTDOWN * 1000;
    function tick(){
      var left = Math.max(0, Math.round((end - Date.now()) / 1000));
      out.textContent = pad(Math.floor(left / 60)) + ":" + pad(left % 60);
      if (left <= 0) clearInterval(cv);
    }
    tick();
    var cv = setInterval(tick, 1000);
  }

  function revealAll(){
    if (revealed) return;
    revealed = true;
    for (var i = 0; i < IDS.length; i++) {
      var node = document.getElementById(IDS[i]);
      if (node) { node.setAttribute("data-revealed", "true"); node.setAttribute("aria-hidden", "false"); }
    }
    startCountdown();
  }

  // ?preview=1 → revela tudo na hora (conferência de layout; não usar em tráfego).
  if (/[?&]preview=1(&|$)/.test(location.search)) { revealAll(); return; }

  var iv = setInterval(function(){
    var t = getCurrentTime();
    if (typeof t === "number" && t >= AT) { revealAll(); clearInterval(iv); }
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
