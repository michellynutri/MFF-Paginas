import type { Metadata } from "next";
import Script from "next/script";
import { RodapeInstitucional } from "@/components/rodape-institucional";
import { greennUpsellScript } from "@/lib/greenn-upsell";

export const metadata: Metadata = {
  title: "Processando sua compra | S.O.S Canetas | Michelly Silveira",
  robots: "noindex, nofollow",
};

// ─── Integração Greenn (one-click / upsell), herdada da /alunos-metodo-mmf ──
// O botão fica como HTML cru pra preservar os atributos data-greenn-* e o
// onclick inline que o upsell.js da Greenn espera encontrar.
//
// data-greenn-upsell só aceita o ID NUMÉRICO do upsell cadastrado no painel —
// a oferta (preço) fica amarrada dentro desse cadastro. Consultado na API
// (apipay.greenn.com.br/api/upsell/<id>/metas) em 2026-09-10:
//   6552 = "MMF 497" → produto 161840 (código g4vfzcf), oferta KMD7EU
//          ("Método Metabólico Feminino + Mentoria com a Nutri", R$ 497, até 12x)
//   5872 = "MMF - 297" (oferta 4dJmPN) e 5875 = "MMF - 197" (oferta ZH8FAt) são os
//          os upsells da /alunos-metodo-mmf (oferta de e-mail pras alunas; era esta página).
const GREENN_UPSELL_ID = "6552";
// ATENÇÃO: o upsell.js da Greenn injeta um CSS global com `.text-center { margin: 40px 0 }`,
// que colide com a classe do Tailwind. Por isso esta página usa `[text-align:center]`
// no lugar de `text-center` — não reintroduzir a classe.

// Destino do "Não, obrigada" = página de DOWNSELL (MMF 6 meses por R$ 247).
// O upsell.js procura um <a id="not-buy-link">, anexa ?token=... ao href e
// trata o clique — por isso o token da compra chega lá e o one-click continua.
const DECLINE_URL = "/obg-mmf-down";

// Recuperação de Pix: checkout normal (cartão, até 12x) do MESMO produto/oferta
// do upsell acima — produto g4vfzcf, oferta KMD7EU (R$ 497).
const PIX_RECOVERY_CHECKOUT_URL = "https://payfast.greenn.com.br/g4vfzcf/offer/KMD7EU";

// Player Vturb — mini-VSL do upsell (v5 enxuta do MMF), 3:4.
const VTURB_PLAYER_ID = "vid-6aa1e0c339597210fcdb85de";
const VTURB_PLAYER_SRC =
  "https://scripts.converteai.net/9209a5ac-0a42-43b5-9c1f-7d310e9d3d33/players/6aa1e0c339597210fcdb85de/v4/player.js";

// Tudo abaixo do vídeo só aparece aos 10:45 de vídeo assistido.
const REVEAL_AT_SECONDS = 645;
// Contagem regressiva da faixa do topo — roda desde o carregamento da página
// (layout de referência: "ESSA PÁGINA SAIRÁ DO AR EM 15:00").
const COUNTDOWN_SECONDS = 900;

// Preço da oferta (upsell 6552 = R$ 497, até 12x). O parcelado segue a mesma
// taxa do downsell (R$ 247 = 12x de R$ 24,70).
const PRECO_PARCELA = "R$ 49,70";
const PRECO_AVISTA = "R$ 497";
// Preço "De:" riscado acima do parcelado. null = não mostra (o MMF de 1 ano é
// R$ 497 no site também, então não há âncora real hoje).
const PRECO_ANCORA: string | null = null;

// O que a compradora libera com o upgrade. Itens do MMF de 1 ano (mesmos
// bônus do downsell) + a mentoria que dá nome à oferta na Greenn.
const BENEFICIOS = [
  "O MMF completo: as 4 fases e todos os pilares, com 1 ano de acesso",
  "Mentoria com a Nutri: acompanhamento da Michelly durante o tratamento",
  "Bônus: Guia Pós-Caneta",
  "Bônus: Kit Fale com seu Médico",
  "Bônus: Kit Praticidade",
];

// Verde de CTA (#16A34A, hover #15803D): verde saturado e escuro o bastante pra
// texto branco passar em AA em fonte grande. É o verde "de ação" clássico dos
// testes de botão, e aqui é o único elemento verde-vivo da tela. Formato
// pílula, como na referência.
const BTN_PRIMARY_CLASS =
  "inline-flex w-full sm:w-auto items-center justify-center rounded-full border-0 cursor-pointer font-sans font-bold tracking-wide uppercase transition-all duration-200 ease-out hover:translate-y-[-2px] focus-visible:outline-2 focus-visible:outline-offset-4 bg-[#16A34A] hover:bg-[#15803D] text-white px-8 md:px-12 py-4 md:py-5 text-[16px] md:text-[18px] leading-tight shadow-[0_10px_30px_rgba(22,163,74,0.35)] hover:shadow-[0_14px_38px_rgba(22,163,74,0.45)] focus-visible:outline-[#16A34A]";

const GREENN_BUTTON_HTML = `<button
  data-greenn-one-click="false"
  data-greenn-upsell="${GREENN_UPSELL_ID}"
  data-greenn-split="1"
  data-mff-checkout="${PIX_RECOVERY_CHECKOUT_URL}"
  data-loading="false"
  onclick="startLoading(this)"
  class="${BTN_PRIMARY_CLASS}"
><span>Quero garantir agora</span></button>`;

// ─── Ícones ─────────────────────────────────────────────────────────────────
function IconCheck({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

export default function ObgMmfPage() {
  return (
    <main className="obg-c bg-white text-texto min-h-screen flex flex-col">
      {/* ── FAIXA VERMELHA (sticky): aviso + contagem regressiva desde o load ── */}
      <header className="sticky top-0 z-30 bg-[#E53E2A] text-white">
        <div className="max-w-[960px] mx-auto px-4 md:px-8 py-2.5 md:py-3 flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-10 font-sans">
          <p className="font-black uppercase tracking-wide text-[13px] md:text-[17px] leading-tight [text-align:center]">
            <span aria-hidden="true">⚠️</span> Importante: essa página sairá do ar em
          </p>
          <div className="flex flex-col items-center leading-none">
            <span
              id="obg-c-countdown"
              className="font-black tabular-nums text-[26px] md:text-[32px] leading-none"
            >
              15:00
            </span>
            <span className="text-[10px] md:text-[12px] mt-0.5 opacity-90">Minutos e Segundos</span>
          </div>
        </div>
      </header>

      <section className="flex-1 px-4 sm:px-6 py-6 md:py-10">
        <div className="max-w-[760px] mx-auto flex flex-col items-center gap-5 md:gap-7">
          {/* ── HEADLINE ── */}
          <h1 className="animate-fade-up [text-align:center] font-sans font-extrabold text-[24px] md:text-[38px] leading-[1.15] tracking-[-0.01em] text-[#1B1B1B]">
            Sua compra ainda não está completa…
          </h1>

          {/* ── PASSOS (3 caixas) ── */}
          <ol className="animate-fade-up animate-delay-100 w-full grid grid-cols-3 border-2 border-[#3A3A3A] divide-x-2 divide-[#3A3A3A] font-sans">
            <li className="bg-[#EBEBEB] px-2 md:px-4 py-3 md:py-5 [text-align:center] text-[12px] md:text-[18px] leading-[1.25]">
              <span className="block font-bold">
                <span aria-hidden="true">✅</span> Passo 1:
              </span>
              <span className="block">S.O.S Canetas</span>
            </li>
            <li className="bg-[#EAFFEA] px-2 md:px-4 py-3 md:py-5 [text-align:center] text-[12px] md:text-[18px] leading-[1.25]">
              <span className="block font-bold">
                <span aria-hidden="true">✅</span> Passo 2:
              </span>
              <span className="block">Método Metabólico Feminino</span>
            </li>
            <li className="bg-[#EBEBEB] px-2 md:px-4 py-3 md:py-5 [text-align:center] text-[12px] md:text-[18px] leading-[1.25]">
              <span className="block font-bold">
                <span aria-hidden="true">⚙️</span> Passo 3:
              </span>
              <span className="block">Compra concluída!</span>
            </li>
          </ol>

          {/* ── VÍDEO (3:4, máx. 432px, sem moldura) ── */}
          <div className="animate-fade-up animate-delay-200 w-full sm:max-w-[432px] mx-auto overflow-hidden bg-black">
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

          {/* ── BLOCO COM DELAY (10:45): oferta + Pix + recusa ── */}
          <div
            id="obg-c-offer"
            data-revealed="false"
            aria-live="polite"
            className="group w-full"
          >
            <div className="hidden group-data-[revealed=true]:flex flex-col items-center gap-6 md:gap-8 animate-fade-up">
              {/* Card branco da oferta */}
              <div className="w-full rounded-lg bg-white border border-[#E5E5E5] shadow-[0_6px_24px_rgba(0,0,0,0.12)] px-5 md:px-10 py-7 md:py-10 flex flex-col items-center gap-5 md:gap-6 font-sans [text-align:center]">
                <h2 className="font-bold uppercase text-[19px] md:text-[24px] leading-[1.25] text-[#1B1B1B] max-w-[520px]">
                  Faça seu upgrade imediato
                  <br />
                  Método Metabólico Feminino + Mentoria com a Nutri
                </h2>

                <div className="flex flex-col items-center gap-1">
                  {PRECO_ANCORA && (
                    <p className="font-bold text-[20px] md:text-[26px] text-[#E0524A]">
                      De: <span className="line-through">{PRECO_ANCORA}</span>
                    </p>
                  )}
                  <p className="text-[17px] md:text-[20px] text-[#1B1B1B]">Por: 12x de</p>
                  <p className="font-black text-[44px] md:text-[60px] leading-none text-[#3D8B93] tracking-[-0.02em]">
                    {PRECO_PARCELA}
                  </p>
                  <p className="text-[15px] md:text-[18px] text-[#1B1B1B] mt-1">
                    ou {PRECO_AVISTA} à vista.
                  </p>
                </div>

                {/* Botão de compra Greenn (one-click) */}
                <div className="w-full flex justify-center" dangerouslySetInnerHTML={{ __html: GREENN_BUTTON_HTML }} />

                <div className="w-full flex flex-col items-center gap-3">
                  <p className="font-bold text-[17px] md:text-[20px] text-[#1B1B1B]">
                    Garanta sua vaga agora e libere:
                  </p>
                  <ul className="w-full max-w-[560px] flex flex-col gap-2 text-left text-[14px] md:text-[16px] leading-[1.4] text-[#1B1B1B]">
                    {BENEFICIOS.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-[3px] inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[4px] bg-[#16A34A] text-white">
                          <IconCheck className="w-3 h-3" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recuperação de Pix */}
                <div className="w-full flex flex-col items-center gap-4 pt-2">
                  <p className="font-semibold text-[16px] md:text-[19px] leading-[1.35] text-[#1B1B1B] max-w-[520px]">
                    Comprou o S.O.S Canetas no Pix e quer parcelar o Método Metabólico
                    Feminino no cartão? Aperte no botão abaixo
                  </p>
                  <a
                    data-mff-checkout-link=""
                    href={PIX_RECOVERY_CHECKOUT_URL || "#"}
                    className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-[#3D8B93] hover:bg-[#33767D] text-white font-bold uppercase tracking-wide px-8 md:px-12 py-4 md:py-5 text-[16px] md:text-[18px] leading-tight transition-colors"
                  >
                    Quero parcelar
                  </a>
                  <p className="text-[13px] md:text-[15px] leading-[1.5] text-[#1B1B1B] max-w-[420px]">
                    Essa condição existe só nesta página, enquanto o tempo lá em cima
                    não zerar.
                  </p>
                </div>
              </div>

              {/* Recusa — link pro downsell; o upsell.js anexa o token pelo id */}
              <a
                id="not-buy-link"
                href={DECLINE_URL || "#"}
                className="inline-flex items-center justify-center rounded-full bg-[#E0524A] hover:bg-[#C9453E] text-white font-sans font-bold px-7 md:px-9 py-3.5 md:py-4 text-[15px] md:text-[17px] leading-tight [text-align:center] transition-colors"
              >
                Não, vou deixar a oportunidade passar.
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé escuro, sempre visível (como na referência). */}
      <RodapeInstitucional
        tema="marrom"
        // Esta página vende acompanhamento nutricional — o disclaimer padrão
        // ("não substitui acompanhamento ... nutricional individualizado") se
        // contradiria com a oferta. Versão sem essa parte, só aqui.
        disclaimer="Este produto não substitui acompanhamento médico. Resultados variam de pessoa para pessoa."
      />

      {/* Player Vturb */}
      <Script id={`vturb-${VTURB_PLAYER_ID}`} src={VTURB_PLAYER_SRC} strategy="afterInteractive" />

      {/* Contagem regressiva de 15:00 desde o carregamento + reveal da oferta
          aos 10:45 de vídeo. ?preview=1 revela tudo imediatamente (só pra
          conferir layout). */}
      <Script id="obg-c-reveal" strategy="afterInteractive">
        {`(function(){
  var PLAYER_ID = ${JSON.stringify(VTURB_PLAYER_ID)};
  var AT = ${REVEAL_AT_SECONDS};
  var COUNTDOWN = ${COUNTDOWN_SECONDS};
  var IDS = ["obg-c-offer"];
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
  }

  startCountdown();

  // ?preview=1 → revela tudo na hora (conferência de layout; não usar em tráfego).
  if (/[?&]preview=1(&|$)/.test(location.search)) { revealAll(); return; }

  var iv = setInterval(function(){
    var t = getCurrentTime();
    if (typeof t === "number" && t >= AT) { revealAll(); clearInterval(iv); }
  }, 1000);
})();`}
      </Script>

      {/* Compra do upsell (Greenn one-click) + rastreio de UTM — ver lib/greenn-upsell.ts.
          Sem token na URL o botão vira link direto pro checkout (data-mff-checkout). */}
      <Script id="greenn-upsell" strategy="afterInteractive">
        {greennUpsellScript()}
      </Script>
    </main>
  );
}
