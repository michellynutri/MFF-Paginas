import type { Metadata } from "next";
import Script from "next/script";
import { RodapeInstitucional } from "@/components/rodape-institucional";
import { greennUpsellScript } from "@/lib/greenn-upsell";

export const metadata: Metadata = {
  title: "Uma última proposta | S.O.S Canetas | Michelly Silveira",
  robots: "noindex, nofollow",
};

// ─── DOWNSELL do MMF (6 meses por R$ 247) ────────────────────────────────────
// Chega aqui quem clicou em "Não, obrigada" na /obg-mmf. O upsell.js da Greenn
// anexa ?token=... ao link de recusa, então o one-click continua disponível.
//
// Consultado na API (apipay.greenn.com.br/api/upsell/6553/metas) em 2026-09-10:
//   6553 = "MMF - 247" → produto 161840 (código g4vfzcf), oferta ZmlMFv
//          ("Método Metabólico Feminino - 6 meses de acesso", R$ 247, até 12x)
const GREENN_UPSELL_ID = "6553";
// Checkout normal (cartão, até 12x) da MESMA oferta de R$ 247 — recuperação de Pix.
const PIX_RECOVERY_CHECKOUT_URL = "https://payfast.greenn.com.br/g4vfzcf/offer/ZmlMFv";
// Página de obrigado / acesso do S.O.S Canetas (fim do funil).
const DECLINE_URL = "";

// ATENÇÃO: o upsell.js da Greenn injeta um CSS global com `.text-center { margin: 40px 0 }`,
// que colide com a classe do Tailwind. Por isso esta página usa `[text-align:center]`
// no lugar de `text-center` — não reintroduzir a classe.

const BTN_PRIMARY_CLASS =
  "inline-flex w-full items-center justify-center gap-3 rounded-2xl border-0 cursor-pointer font-sans font-bold tracking-wide uppercase transition-all duration-200 ease-out hover:translate-y-[-2px] focus-visible:outline-2 focus-visible:outline-offset-4 bg-[#16A34A] hover:bg-[#15803D] text-white px-6 md:px-10 py-5 md:py-6 text-[16px] md:text-[20px] leading-tight shadow-[0_14px_40px_rgba(22,163,74,0.42)] hover:shadow-[0_18px_48px_rgba(22,163,74,0.5)] focus-visible:outline-[#16A34A]";

const CHECK_SVG =
  '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';

const GREENN_BUTTON_HTML = `<button
  data-greenn-upsell="${GREENN_UPSELL_ID}"
  data-greenn-one-click="false"
  data-greenn-split="1"
  data-mff-checkout="${PIX_RECOVERY_CHECKOUT_URL}"
  data-loading="false"
  onclick="startLoading(this)"
  class="${BTN_PRIMARY_CLASS}"
>${CHECK_SVG}<span>Sim! Quero o MMF com 6 meses por R$247</span></button>`;

// ─── Ícones ─────────────────────────────────────────────────────────────────
function IconCheck({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}
function IconHand({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M18 11V6a2 2 0 0 0-4 0v5" />
      <path d="M14 10V4a2 2 0 0 0-4 0v6" />
      <path d="M10 10.5V6a2 2 0 0 0-4 0v8" />
      <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
    </svg>
  );
}
function IconShield({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 3 4 6v6c0 5 3.4 8.4 8 9 4.6-.6 8-4 8-9V6z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

// Parágrafos do corpo: copy fiel; só grifos pra leitura em F.
const CORPO: React.ReactNode[] = [
  <>
    Olha, eu entendo de verdade. Você acabou de investir no S.O.S, e talvez os
    R$497 tenham pesado nesse momento. Ou talvez você tenha olhado pra 1 ano
    inteiro de acesso e pensado <em>&ldquo;isso é mais do que eu preciso agora&rdquo;</em>.
    E sabe de uma coisa? <strong>Pode ser que você esteja certa.</strong>
  </>,
  <>
    Mas eu não quero te deixar sozinha justo agora, no começo de tudo. Porque a
    partir daqui você tem só <strong>dois caminhos</strong>. Ou você tenta atravessar
    as fases da caneta no escuro, na tentativa e erro, torcendo pra dar certo
    quando ela sair. Ou você vem comigo, com o mapa na mão, e faz do jeito certo
    desde o primeiro dia, <strong>pra não ser mais uma que emagrece e reganha tudo</strong>.
  </>,
  <>E é por isso que eu vou fazer uma coisa que eu normalmente não faço.</>,
  <>
    A parte que realmente muda tudo, que é atravessar as 4 fases e chegar preparada
    no dia de largar a caneta, <strong>cabe em 6 meses</strong>. Você não precisa de um
    ano pra isso. Então, em vez do acesso de 1 ano, eu vou te dar o{" "}
    <strong>MMF completo com 6 meses de acesso</strong>. É tempo mais que suficiente
    pra você percorrer todas as fases, blindar o seu resultado e chegar firme no
    desmame.
  </>,
];

export default function ObgMmfCDownPage() {
  return (
    <main className="obg-c bg-creme text-texto min-h-screen flex flex-col">
      <style>{`
        @keyframes obg-c-indeterminate {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
        .obg-c-bar::after {
          content: "";
          position: absolute; inset: 0; width: 25%;
          background: linear-gradient(90deg, transparent, #B8975A, transparent);
          animation: obg-c-indeterminate 1.6s ease-in-out infinite;
        }
      `}</style>

      {/* ── FAIXA DE STATUS — mesma linguagem da /obg-mmf ── */}
      <header className="sticky top-0 z-30 bg-texto text-creme">
        <div className="max-w-[960px] mx-auto px-4 md:px-8 py-3 flex items-center justify-center gap-3 font-sans text-[13px] md:text-[15px]">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-sos-verde-medio text-white shrink-0">
            <IconCheck className="w-3 h-3" />
          </span>
          <span className="font-medium tracking-wide">S.O.S Canetas garantido</span>
          <span className="hidden sm:inline text-creme/50">·</span>
          <span className="hidden sm:inline text-creme/70">uma última proposta antes do seu acesso</span>
        </div>
        <div className="obg-c-bar relative h-[3px] w-full overflow-hidden bg-creme/10" aria-hidden="true" />
      </header>

      <section className="flex-1 px-4 sm:px-6 py-6 md:py-10">
        <div className="max-w-[680px] mx-auto flex flex-col gap-6 md:gap-8">
          {/* ── 1 · PRÉ-HEADLINE ── */}
          <div className="animate-fade-up rounded-xl border border-[#A83E22]/60 bg-[#FFF3EE] px-4 md:px-5 py-3 md:py-4">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-8 w-8 md:h-9 md:w-9 shrink-0 items-center justify-center rounded-full bg-[#A83E22] text-white animate-pulse">
                <IconHand className="w-4 h-4 md:w-5 md:h-5" />
              </span>
              <p className="font-sans text-[14px] md:text-[17px] leading-[1.45] text-texto">
                <strong className="font-black text-[#A83E22]">Calma, não fecha essa página ainda.</strong>{" "}
                Antes de você ir, me deixa te fazer uma última proposta. É rapidinho
                de ler, e pode mudar a sua decisão.
              </p>
            </div>
          </div>

          {/* ── 2 · HEADLINE ── */}
          <div className="animate-fade-up animate-delay-100 [text-align:center]">
            <h1 className="font-serif text-[28px] md:text-[42px] leading-[1.15] md:leading-[1.1] font-medium text-texto">
              Eu não vou te deixar atravessar isso{" "}
              <em className="italic">sozinha.</em>
            </h1>
            <p className="mt-3 md:mt-4 font-sans text-[16px] md:text-[20px] leading-[1.5] text-marrom">
              Se os R$497 pesaram agora, existe um outro jeito de você começar
              comigo, <strong className="font-semibold text-texto">por menos da metade.</strong>
            </p>
          </div>

          {/* ── 3 · CORPO (carta) ── */}
          <div className="animate-fade-up animate-delay-200 flex flex-col gap-4 md:gap-5 font-sans text-[16px] md:text-[18px] leading-[1.65] text-texto">
            {CORPO.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* ── A PROPOSTA (card): o que vem + preço ── */}
          <div className="animate-fade-up animate-delay-300 rounded-2xl md:rounded-3xl bg-white border border-[var(--sos-borda-dourada)] shadow-[0_12px_40px_rgba(42,36,24,0.10)] overflow-hidden">
            <div className="bg-texto text-creme px-5 md:px-7 py-3 md:py-4 flex items-center justify-between gap-3">
              <span className="font-sans font-semibold text-[14px] md:text-[16px]">
                MMF completo · 6 meses de acesso
              </span>
              <span className="font-sans text-[11px] md:text-[12px] uppercase tracking-[0.14em] text-sos-dourado">
                só nesta página
              </span>
            </div>

            <div className="px-5 md:px-7 py-5 md:py-6 flex flex-col gap-5">
              <p className="font-sans text-[15px] md:text-[17px] leading-[1.55] text-texto">
                É o <strong>mesmo método</strong>, as <strong>mesmas 4 fases</strong>, os
                mesmos pilares, os mesmos bônus. Não falta nada. A única diferença é
                o tempo de acesso, que é menor.
              </p>

              <ul className="grid gap-2.5 font-sans text-[15px] md:text-[16px] text-texto">
                {[
                  "O MMF completo: as 4 fases e todos os pilares",
                  "Bônus: Guia Pós-Caneta",
                  "Bônus: Kit Fale com seu Médico",
                  "Bônus: Kit Praticidade",
                  "6 meses de acesso: tempo pra percorrer todas as fases e chegar firme no desmame",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sos-verde-medio text-white">
                      <IconCheck className="w-3 h-3" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="rounded-xl bg-[#FFF8F4] border border-sos-terracota/30 px-4 md:px-5 py-4 [text-align:center]">
                <p className="font-sans text-[13px] md:text-[14px] text-marrom">
                  E, por ser 6 meses, o preço cai pela metade:
                </p>
                <p className="mt-1 font-sans">
                  <span className="text-[18px] md:text-[20px] text-marrom line-through decoration-sos-terracota/70 mr-2">
                    R$497
                  </span>
                  <span className="font-serif font-medium text-[40px] md:text-[52px] leading-none text-texto">
                    R$247
                  </span>
                </p>
                <p className="mt-1 font-sans text-[14px] md:text-[16px] text-texto">
                  Uma vez só. <span className="text-marrom">Ou</span>{" "}
                  <strong className="font-semibold">12x de R$24,70</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* ── GARANTIA ── */}
          <div className="animate-fade-up animate-delay-300 flex items-start gap-3 md:gap-4 rounded-2xl bg-white border border-[var(--sos-borda-dourada)] px-4 md:px-6 py-4 md:py-5">
            <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sos-dourado/15 text-sos-dourado-esc">
              <IconShield />
            </span>
            <p className="font-sans text-[15px] md:text-[17px] leading-[1.55] text-texto">
              E o risco continua todo meu. Você tem{" "}
              <strong>7 dias de garantia total</strong>: entra, vê tudo por dentro, e se
              não for pra você, por qualquer motivo, pede o reembolso e recebe seu
              dinheiro de volta na hora. <strong>Testar não te custa nada.</strong>
            </p>
          </div>

          {/* ── ESCASSEZ + CTA (texto) ── */}
          <div className="animate-fade-up animate-delay-400 flex flex-col gap-4 md:gap-5 font-sans text-[16px] md:text-[18px] leading-[1.65] text-texto">
            <p>
              Mas eu preciso ser sincera: <strong>essa é a última vez que essa condição
              aparece pra você.</strong> Quando você fechar esta página, ela vai embora,
              e o MMF volta a ser R$497, com 1 ano, lá no meu site. Essa porta, com
              6 meses por R$247, só existe aqui, agora, nesse botão.
            </p>
            <p>
              Se você quer fazer isso do jeito certo, sem gastar mais do que precisa
              nesse momento, é só clicar no botão aqui embaixo.{" "}
              <strong>Em 1 clique, sem digitar o cartão de novo</strong>, você entra
              pro MMF e começa hoje, enquanto a sua Janela de Ouro ainda tá aberta.
            </p>
          </div>

          {/* ── 4 · BOTÃO PRINCIPAL (one-click Greenn) ── */}
          <div className="animate-fade-up animate-delay-400 flex flex-col gap-3">
            <div className="flex justify-center" dangerouslySetInnerHTML={{ __html: GREENN_BUTTON_HTML }} />
            <p className="[text-align:center] font-sans text-[13px] md:text-[14px] text-marrom">
              Adicionado ao seu pedido atual, com 1 clique. Sem digitar o cartão de novo.
            </p>
          </div>

          {/* ── 5 · RECUPERAÇÃO DE PIX ── */}
          <div className="rounded-2xl border border-[var(--sos-borda-dourada)] bg-white px-5 md:px-6 py-5 [text-align:center] font-sans">
            <p className="text-[15px] md:text-[16px] leading-[1.5] text-texto">
              Comprou o S.O.S no <strong className="font-semibold">Pix</strong> e quer garantir
              essa condição no cartão, parcelado em até{" "}
              <strong className="font-semibold">12x</strong>?
            </p>
            <a
              data-mff-checkout-link=""
                  href={PIX_RECOVERY_CHECKOUT_URL || "#"}
              className="mt-3 inline-flex items-center justify-center rounded-full border-2 border-sos-dourado-esc px-6 py-3 text-[14px] md:text-[15px] font-semibold text-sos-dourado-esc hover:bg-sos-dourado-esc hover:text-creme transition-colors"
            >
              Clique aqui e garanta no cartão →
            </a>
          </div>

          {/* ── 6 · NÃO QUERO (fim do funil — sempre visível) ── */}
          <div className="[text-align:center] pb-2">
            <a
              id="not-buy-link"
              href={DECLINE_URL || "#"}
              className="inline-block font-sans text-[14px] md:text-[15px] text-marrom underline underline-offset-4 decoration-marrom/50 hover:text-texto"
            >
              Não, obrigada. Quero seguir só com o S.O.S Canetas. →
            </a>
          </div>
        </div>
      </section>

      <RodapeInstitucional
        tema="verde"
        disclaimer="Este produto não substitui acompanhamento médico. Resultados variam de pessoa para pessoa."
      />

      {/* Compra do upsell (Greenn one-click) + rastreio de UTM — ver lib/greenn-upsell.ts.
          Sem token na URL o botão vira link direto pro checkout (data-mff-checkout). */}
      <Script id="greenn-upsell" strategy="afterInteractive">
        {greennUpsellScript()}
      </Script>
    </main>
  );
}
