// Tela 07b — convertida de scripts/quiz-mia/stitch/07b.html (Stitch, projeto "MIA · Quiz de vendas").
import type { TelaProps } from "../_quiz/tipos";
import { pontos } from "../_quiz/ui";

const OPCOES = ["Firme", "Molinha, balança quando eu dou tchau", "Não sei dizer"];

export default function T07b({ q }: TelaProps) {
  const p = pontos(q);
  return (
    <div data-tela="07b">
      <div data-body className="q-bg-surface q-font-body-md q-text-on-surface q-antialiased q-min-h-screen q-flex q-flex-col" style={{ fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif" }}>
        <header className="q-fixed q-top-0 q-w-full q-z-50 q-bg-surface/85 q-backdrop-blur-xl q-shadow-[0_1px_8px_rgba(32,62,53,0.04)] pt-safe">
          <div className="q-h-28 q-max-w-[390px] q-mx-auto q-px-margin q-flex q-flex-col q-justify-between q-py-space-sm">
            <div className="q-relative q-flex q-items-center q-justify-between q-w-full q-h-11">
              <button aria-label="Voltar" onClick={q.voltar} className="q-w-11 q-h-11 q--ml-space-xs q-flex q-items-center q-justify-center q-text-on-surface q-rounded-full q-active:scale-95 q-transition-transform" type="button">
                <span className="material-symbols-outlined q-text-[22px]">
                  {"arrow_back"}
                </span>
              </button>
              <div className="q-absolute q-left-1/2 q-top-1/2 q--translate-x-1/2 q--translate-y-1/2">
                <div className="q-w-7 q-h-7 q-rounded-full q-bg-[#8EA89D] q-shadow-[0_0_12px_rgba(217,164,65,0.45)] q-ring-1 q-ring-[#D9A441]/30" />
              </div>
              <div className="q-w-11 q-h-11" />
            </div>
            <div className="q-flex q-flex-col q-gap-space-xs q-w-full q-pb-0.5">
              <div className="q-grid q-grid-cols-4 q-gap-gutter q-w-full q-h-1">
                <div className="q-h-1 q-rounded-full q-bg-[#D9A441]" />
                <div className="q-h-1 q-rounded-full q-bg-outline-variant q-overflow-hidden">
                  <div className="q-h-full q-bg-[#D9A441] q-rounded-full" style={{ width: "12%" }} />
                </div>
                <div className="q-h-1 q-rounded-full q-bg-outline-variant" />
                <div className="q-h-1 q-rounded-full q-bg-outline-variant" />
              </div>
              <div className="q-flex q-items-center q-justify-between q-text-caption q-text-[#56654D] q-pt-0.5">
                <span className="q-text-mono-sm q-tracking-normal" style={{ fontFamily: "Geist, sans-serif", fontSize: "12px", fontWeight: "500", color: "rgb(86, 101, 77)" }}>
                  {"Os avisos do seu corpo"}
                </span>
                <div className="q-flex q-items-center q-gap-space-xs">
                  <span className="q-font-caption q-text-caption q-lowercase q-text-on-surface-variant" style={{ fontFamily: "Geist, sans-serif", fontSize: "12px", fontWeight: "500", color: "rgb(86, 101, 77)" }}>
                    {"alertas"}
                  </span>
                  <div className="q-flex q-items-center q-gap-1 q-pl-1">
                    <span className="q-w-2 q-h-2 q-rounded-full q-inline-block" style={p[0]} />
                    <span className="q-w-2 q-h-2 q-rounded-full q-inline-block" style={p[1]} />
                    <span className="q-w-2 q-h-2 q-rounded-full q-inline-block" style={p[2]} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <main className="q-flex-1 q-flex q-flex-col q-relative q-w-full q-max-w-[390px] q-mx-auto q-px-margin q-pt-28 pb-safe q-bg-surface">
          <div className="q-flex q-flex-col q-w-full q-pb-space-xl">
            <div className="q-flex q-flex-col q-gap-space-lg q-w-full">
              <div className="q-flex q-flex-col q-gap-space-sm q-pt-space-xs">
                <h1 className="q-font-question-lg q-text-question-lg q-text-primary-container q-tracking-tight q-leading-snug" style={{ fontFamily: "Geist, sans-serif", fontSize: "24px", fontWeight: "600", color: "rgb(32, 62, 53)", lineHeight: "1.25", letterSpacing: "-0.02em" }}>
                  {" Levante o braço e aperte a gordurinha embaixo dele. "}
                </h1>
              </div>
              <div className="q-flex q-flex-col q-gap-gutter q-w-full">
                <div className="q-flex q-items-center q-gap-space-md q-p-space-md q-rounded-xl q-bg-surface-container q-shadow-sm q-transition-all q-duration-300">
                  <div className="q-w-[26px] q-h-[26px] q-min-w-[26px] q-rounded-full q-bg-primary-container q-text-on-primary q-flex q-items-center q-justify-center q-font-button-label q-text-[14px] q-font-semibold q-leading-none q-shadow-sm">
                    {" 1 "}
                  </div>
                  <p className="q-font-option-label q-text-option-label q-text-primary-container q-leading-relaxed">
                    {" Levante um braço, como quem dá tchau. "}
                  </p>
                </div>
                <div className="q-flex q-items-center q-gap-space-md q-p-space-md q-rounded-xl q-bg-surface-container q-shadow-sm q-transition-all q-duration-300">
                  <div className="q-w-[26px] q-h-[26px] q-min-w-[26px] q-rounded-full q-bg-primary-container q-text-on-primary q-flex q-items-center q-justify-center q-font-button-label q-text-[14px] q-font-semibold q-leading-none q-shadow-sm">
                    {" 2 "}
                  </div>
                  <p className="q-font-option-label q-text-option-label q-text-primary-container q-leading-relaxed">
                    {" Com a outra mão, aperte a parte de baixo. "}
                  </p>
                </div>
              </div>
              <div className="q-flex q-flex-col q-gap-space-md q-pt-space-sm">
                <h2 className="q-font-body-lg q-text-[17px] q-font-semibold q-text-[#203E35] q-leading-snug" style={{ fontFamily: "Geist, sans-serif", fontSize: "24px", fontWeight: "600", color: "rgb(32, 62, 53)", lineHeight: "1.25", letterSpacing: "-0.02em" }}>
                  {"Está firme ou está molinha?"}
                </h2>
                <div className="q-flex q-flex-col q-gap-space-sm q-w-full">
                  {OPCOES.map((txt, i) =>
                    q.r.braco === i ? (
                      <button key={i} aria-checked="true" role="radio" onClick={() => q.escolhe("braco", i, i === 1 ? 2600 : 380)} className="q-w-full q-text-left q-flex q-items-center q-justify-between q-p-space-md q-bg-[#FBF1DC] q-border-2 q-border-[#203E35] q-rounded-2xl q-transition-all q-shadow-sm" type="button">
                        <span className="q-font-option-label q-text-[15px] q-font-medium q-text-on-surface" style={{ fontFamily: "Geist, sans-serif", fontSize: "16px", fontWeight: "500" }}>
                          {txt}
                        </span>
                        <span className="q-w-6 q-h-6 q-rounded-full q-bg-[#D9A441] q-flex q-items-center q-justify-center q-shrink-0 q-text-white q-shadow-sm">
                          <span className="material-symbols-outlined q-text-[16px] q-font-bold">
                            {"check"}
                          </span>
                        </span>
                      </button>
                    ) : (
                      <button key={i} aria-checked="false" role="radio" onClick={() => q.escolhe("braco", i, i === 1 ? 2600 : 380)} className="q-w-full q-text-left q-flex q-items-center q-justify-between q-p-space-md q-bg-white q-border q-border-[#E5E7EB] q-rounded-2xl q-transition-all q-shadow-sm q-active:scale-[0.99]" type="button">
                        <span className="q-font-option-label q-text-[15px] q-font-medium q-text-on-surface" style={{ fontFamily: "Geist, sans-serif", fontSize: "16px", fontWeight: "500" }}>
                          {txt}
                        </span>
                        <span className="q-w-6 q-h-6 q-rounded-full q-border-2 q-border-[#C1C8C4] q-flex q-items-center q-justify-center q-shrink-0" />
                      </button>
                    ),
                  )}
                </div>
                {q.r.braco === 1 && (
                  <div className="q-p-space-md q-rounded-xl q-bg-[#F8EFDC] q-mt-space-xs">
                    <p className="q-text-[14px] q-font-medium q-text-[#7A5619] q-leading-relaxed" style={{ fontFamily: "Geist, sans-serif", fontSize: "14px", lineHeight: "1.45", color: "rgb(122, 86, 25)" }}>
                      {"Pode ser o músculo indo embora junto com a gordura. Na caneta, quase 30% do peso perdido pode ser músculo."}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
