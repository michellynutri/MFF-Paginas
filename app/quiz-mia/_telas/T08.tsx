// Tela 08 — convertida de scripts/quiz-mia/stitch/08.html (Stitch, projeto "MIA · Quiz de vendas").
import type { TelaProps } from "../_quiz/tipos";
import { pontos } from "../_quiz/ui";

const OPCOES = ["Com energia o dia todo", "Já acordo cansada", "Às três da tarde eu apago", "Chego no fim do dia sem força para nada", "Me arrasto o dia inteiro"];

export default function T08({ q }: TelaProps) {
  const p = pontos(q);
  return (
    <div data-tela="08">
      <div data-body className="q-bg-surface q-font-body-md q-text-on-surface q-antialiased q-min-h-screen q-flex q-flex-col">
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
                <span className="q-font-['Geist',sans-serif] q-text-[12px] q-font-medium q-leading-4 q-text-[#56654D] q-tracking-normal">
                  {"Os avisos do seu corpo"}
                </span>
                <div className="q-flex q-items-center q-gap-space-xs">
                  <span className="q-font-['Geist',sans-serif] q-text-[12px] q-font-medium q-leading-4 q-lowercase q-text-[#56654D]">
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
          <div className="q-flex q-flex-col q-w-full q-pt-space-md q-pb-space-xl">
            <h1 className="q-font-['Geist',sans-serif] q-text-[24px] q-leading-[30px] q-font-semibold q-text-[#203E35] q-tracking-[-0.015em] q-mt-5 q-mb-space-lg">
              {"Como você se sente ao longo do dia?"}
            </h1>
            <div aria-label="Como você se sente ao longo do dia?" className="q-flex q-flex-col q-gap-space-md q-w-full" role="radiogroup">
              {OPCOES.map((txt, i) =>
                q.r.energia === i ? (
                  // marcada: padrão da prancheta 01b
                  <button key={i} aria-checked="true" onClick={() => q.escolhe("energia", i)} className="quiz-option q-w-full q-flex q-items-center q-justify-between q-gap-space-md q-bg-[#FBF1DC] q-border-2 q-border-[#203E35] q-text-on-surface q-rounded-xl q-p-space-md q-text-left q-transition-all q-duration-200 q-active:scale-[0.99]" role="radio" type="button">
                    <span className="q-font-['Geist',sans-serif] q-text-[16px] q-leading-[22px] q-font-semibold q-text-[#203E35]">
                      {txt}
                    </span>
                    <span className="radio-indicator q-w-5 q-h-5 q-rounded-full q-bg-[#D9A441] q-flex q-items-center q-justify-center q-shrink-0 q-transition-colors q-duration-200">
                      <svg className="q-w-3 q-h-3 q-text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                  </button>
                ) : (
                  <button key={i} aria-checked="false" onClick={() => q.escolhe("energia", i)} className="quiz-option q-w-full q-flex q-items-center q-justify-between q-gap-space-md q-bg-surface-container-lowest q-text-on-surface q-rounded-xl q-p-space-md q-shadow-[0_1px_2px_rgba(32,62,53,0.06),0_8px_24px_-16px_rgba(32,62,53,0.35)] q-text-left q-transition-all q-duration-200 q-active:scale-[0.99]" role="radio" type="button">
                    <span className="q-font-['Geist',sans-serif] q-text-[16px] q-leading-[22px] q-font-medium q-text-[#203E35]">
                      {txt}
                    </span>
                    <span className="radio-indicator q-w-5 q-h-5 q-rounded-full q-bg-surface-container q-flex q-items-center q-justify-center q-shrink-0 q-transition-colors q-duration-200">
                      <span className="radio-dot q-w-2 q-h-2 q-rounded-full q-bg-surface-container-lowest q-opacity-0 q-transition-opacity q-duration-200" />
                    </span>
                  </button>
                ),
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
