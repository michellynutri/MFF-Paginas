// Tela 12 — convertida de scripts/quiz-mia/stitch/12.html (Stitch, projeto "MIA · Quiz de vendas").
import type { TelaProps } from "../_quiz/tipos";
import { pontos } from "../_quiz/ui";

const OPCOES = [
  {
    txt: "Iogurte zero",
    icone: (
      <>
        <path d="M7 9h10v10a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V9Z" />
        <path d="M5 9h14" />
        <path d="M15 5a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4h6V5Z" />
      </>
    ),
  },
  {
    txt: "Barrinha de proteína",
    icone: (
      <>
        <rect height="12" rx="2" width="18" x="3" y="6" />
        <path d="M8 6v12" />
        <path d="M16 6v12" />
      </>
    ),
  },
  {
    txt: "Torradinha integral",
    icone: (
      <>
        <path d="M5 10c0-3.3 2.7-6 6-6h2c3.3 0 6 2.7 6 6 0 1.2-.4 2.3-1 3.2V19a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-5.8A6.02 6.02 0 0 1 5 10Z" />
      </>
    ),
  },
  {
    txt: "Gelatina zero",
    icone: (
      <>
        <path d="M4 11h16a1 1 0 0 1 1 1v1a7 7 0 0 1-7 7h-4a7 7 0 0 1-7-7v-1a1 1 0 0 1 1-1Z" />
        <path d="M8 8a4 4 0 0 1 8 0" />
      </>
    ),
  },
  {
    txt: "Nenhum desses",
    icone: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m4.93 4.93 14.14 14.14" />
      </>
    ),
  },
];
const NENHUM = 4;

export default function T12({ q }: TelaProps) {
  const p = pontos(q);
  const marcadas = q.r.afl || [];
  const reais = marcadas.filter((x) => x !== NENHUM).length;
  const rotulo = reais ? `Continuar · ${reais} ${reais > 1 ? "marcados" : "marcado"}` : "Continuar";
  return (
    <div data-tela="12" className="q-h-full">
      <div data-body className="q-bg-surface q-text-on-surface q-antialiased q-flex q-flex-col q-min-h-screen q-selection:bg-secondary-fixed q-selection:text-on-secondary-fixed">
        <main className="q-flex-1 q-flex q-flex-col q-w-full q-max-w-[520px] q-mx-auto q-bg-surface pt-safe pb-safe">
          <div className="q-flex q-flex-col q-w-full q-max-w-[390px] q-mx-auto q-px-5 q-pt-4 q-pb-28 q-text-on-surface">
            <header className="q-flex q-items-center q-justify-between q-w-full">
              <button aria-label="Voltar" onClick={q.voltar} className="q-w-8 q-h-8 q--ml-1 q-flex q-items-center q-justify-center q-text-primary-container q-active:opacity-60 q-transition-opacity" type="button">
                <svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" viewBox="0 0 24 24" width="20">
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <div className="q-w-7 q-h-7 q-rounded-full q-bg-gradient-to-br q-from-[#A2B49E] q-via-[#82997E] q-to-[#60775C] q-shadow-inner q-relative q-flex q-items-center q-justify-center q-overflow-hidden">
                <div className="q-absolute q--top-1 q--left-1 q-w-3.5 q-h-3.5 q-rounded-full q-bg-surface-container-lowest/30 q-blur-[0.6px]" />
                <div className="q-absolute q--bottom-1 q--right-1 q-w-3 q-h-3 q-rounded-full q-bg-secondary-fixed/40 q-blur-[1px]" />
              </div>
              <div className="q-w-8 q-h-8" />
            </header>
            <div className="q-mt-4 q-grid q-grid-cols-4 q-gap-2 q-w-full">
              <div className="q-h-1 q-rounded-full q-bg-secondary-fixed-dim q-overflow-hidden" />
              <div className="q-h-1 q-rounded-full q-bg-outline-variant q-flex q-overflow-hidden">
                <div className="q-h-full q-w-3/4 q-bg-secondary-fixed-dim q-rounded-full" />
              </div>
              <div className="q-h-1 q-rounded-full q-bg-outline-variant" />
              <div className="q-h-1 q-rounded-full q-bg-outline-variant" />
            </div>
            <div className="q-mt-2.5 q-flex q-items-center q-justify-between">
              <span className="q-font-caption q-text-caption q-text-on-surface-variant q-font-medium" style={{ fontFamily: "Geist, sans-serif", fontSize: "12px", fontWeight: "500", color: "rgb(86, 101, 77)" }}>
                {"Os avisos do seu corpo"}
              </span>
              <div className="q-flex q-items-center q-gap-1.5">
                <span className="q-font-caption q-text-caption q-text-on-surface-variant q-font-medium" style={{ fontFamily: "Geist, sans-serif", fontSize: "12px", fontWeight: "500", color: "rgb(86, 101, 77)" }}>
                  {"alertas"}
                </span>
                <div className="q-w-2 q-h-2 q-rounded-full" style={p[0]} />
                <div className="q-w-2 q-h-2 q-rounded-full" style={p[1]} />
                <div className="q-w-2 q-h-2 q-rounded-full" style={p[2]} />
              </div>
            </div>
            <h1 className="q-text-headline-lg q-text-primary-container q-leading-tight q-mt-6" style={{ fontFamily: "Geist, sans-serif", fontSize: "24px", fontWeight: "600", lineHeight: "1.25", letterSpacing: "-0.02em", color: "rgb(32, 62, 53)" }}>
              {" O que você come quase todo dia? "}
            </h1>
            <p className="q-font-body-md q-text-body-md q-text-on-surface-variant q-mt-2 q-mb-6" style={{ fontFamily: "Geist, sans-serif", fontSize: "14px", lineHeight: "20px", color: "rgb(86, 101, 77)" }}>
              {" Marque o que entra na sua rotina. "}
            </p>
            <section className="q-grid q-grid-cols-2 q-gap-3" id="tile-grid">
              {OPCOES.map(({ txt, icone }, i) =>
                marcadas.includes(i) ? (
                  <button key={i} role="checkbox" aria-checked="true" onClick={() => q.alterna("afl", i, NENHUM)} className="quiz-tile q-h-[92px] q-rounded-[14px] q-p-3 q-flex q-flex-col q-justify-between q-text-left q-transition-colors q-relative q-bg-secondary-fixed/30 q-shadow-sm" style={{ boxShadow: "inset 0 0 0 2px #203E35" }} type="button">
                    <div className="q-w-full q-flex q-items-center q-justify-between q-pointer-events-none">
                      <svg className="q-w-5 q-h-5 q-text-primary-container" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewBox="0 0 24 24">
                        {icone}
                      </svg>
                      <span className="checkbox-indicator q-w-[22px] q-h-[22px] q-rounded-[6px] q-bg-secondary-fixed-dim q-flex q-items-center q-justify-center q-text-on-primary">
                        <svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" width="14">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                    </div>
                    <span className="q-font-option-label q-text-option-label q-font-medium q-text-primary-container q-leading-snug">
                      {txt}
                    </span>
                  </button>
                ) : (
                  <button key={i} role="checkbox" aria-checked="false" onClick={() => q.alterna("afl", i, NENHUM)} className="quiz-tile q-h-[92px] q-rounded-[14px] q-p-3 q-flex q-flex-col q-justify-between q-text-left q-transition-colors q-relative q-bg-surface-container-lowest q-shadow-sm" style={{ boxShadow: "inset 0 0 0 1px #E4E8E1, 0 1px 2px rgba(0,0,0,0.03)" }} type="button">
                    <div className="q-w-full q-flex q-items-center q-justify-between q-pointer-events-none">
                      <svg className="q-w-5 q-h-5 q-text-primary-container" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewBox="0 0 24 24">
                        {icone}
                      </svg>
                      <span className="checkbox-indicator q-w-[22px] q-h-[22px] q-rounded-[6px] q-bg-transparent" style={{ boxShadow: "inset 0 0 0 2px #DDE3DA" }} />
                    </div>
                    <span className="q-font-option-label q-text-option-label q-font-medium q-text-primary-container q-leading-snug">
                      {txt}
                    </span>
                  </button>
                ),
              )}
            </section>
            {reais > 0 && (
              <div className="q-mt-5 q-rounded-[12px] q-bg-secondary-fixed/30 q-p-4">
                <p className="q-font-caption q-text-caption q-text-secondary q-leading-relaxed q-font-medium" style={{ fontFamily: "Geist, sans-serif", fontSize: "14px", lineHeight: "1.45", color: "rgb(138, 100, 24)" }}>
                  {" São os AFLs, Alimentos Falsamente Leves. Parecem saudáveis, mas sozinhos não alimentam o músculo e muito menos entregam os nutrientes que o seu corpo precisa. "}
                </p>
              </div>
            )}
            <div className="q-fixed q-bottom-0 q-left-0 q-right-0 q-max-w-[390px] q-mx-auto q-p-4 q-bg-gradient-to-t q-from-surface q-via-surface/95 q-to-transparent q-pointer-events-none q-z-20">
              <button disabled={!marcadas.length} onClick={q.proxima} className="q-pointer-events-auto q-w-full q-py-3.5 q-px-6 q-rounded-full q-bg-primary-container q-text-on-primary q-font-button-label q-text-button-label q-text-center q-shadow-md q-active:scale-[0.99] q-transition-transform q-disabled:opacity-40 q-disabled:shadow-none" id="cta-button" type="button">
                {rotulo}
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
