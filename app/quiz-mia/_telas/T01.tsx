// Tela 01 — convertida de scripts/quiz-mia/stitch/01.html (Stitch, projeto "MIA · Quiz de vendas").
import type { TelaProps } from "../_quiz/tipos";

const OPCOES = [
  "Ainda vou começar",
  "Comecei e o peso está descendo",
  "O peso travou e não desce mais",
  "Faltam menos de 5 kg para a minha meta",
  "Estou me preparando para parar",
  "Já parei",
];

export default function T01({ q }: TelaProps) {
  return (
    <div data-tela="01">
      <div data-body className="q-bg-surface q-font-body-md q-text-on-surface q-min-h-screen q-flex q-flex-col q-antialiased q-selection:bg-secondary-fixed">
        <header className="q-fixed q-top-0 q-w-full q-z-50 pt-safe q-bg-surface/80 q-backdrop-blur-xl q-shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
          <div className="q-h-24 q-px-margin q-flex q-flex-col q-justify-between q-py-space-xs">
            <div className="q-relative q-flex q-items-center q-justify-center q-w-full q-h-11">
              <button aria-label="Voltar" onClick={q.voltar} className="q-absolute q-left-0 q-w-11 q-h-11 q--ml-space-xs q-flex q-items-center q-justify-center q-text-on-surface q-hover:text-primary q-transition-colors" type="button">
                <span className="material-symbols-outlined q-text-[22px]">
                  {"arrow_back_ios_new"}
                </span>
              </button>
              <div className="q-flex q-items-center q-justify-center">
                <div aria-hidden="true" className="q-w-7 q-h-7 q-rounded-full q-bg-[#7F9A86] q-shadow-[inset_2px_2px_4px_rgba(255,255,255,0.65),3px_3px_8px_rgba(217,164,65,0.45)]" />
              </div>
            </div>
            <div className="q-flex q-flex-col q-gap-space-xs q-w-full q-pb-1">
              <div className="q-grid q-grid-cols-4 q-gap-gutter q-w-full">
                <div className="q-h-1 q-rounded-full q-bg-surface-container-highest q-overflow-hidden">
                  <div className="q-h-full q-bg-secondary-container q-rounded-full" style={{ width: "15%" }} />
                </div>
                <div className="q-h-1 q-rounded-full q-bg-surface-container-highest q-overflow-hidden">
                  <div className="q-h-full q-bg-secondary-container q-rounded-full" style={{ width: "0%" }} />
                </div>
                <div className="q-h-1 q-rounded-full q-bg-surface-container-highest q-overflow-hidden">
                  <div className="q-h-full q-bg-secondary-container q-rounded-full" style={{ width: "0%" }} />
                </div>
                <div className="q-h-1 q-rounded-full q-bg-surface-container-highest q-overflow-hidden">
                  <div className="q-h-full q-bg-secondary-container q-rounded-full" style={{ width: "0%" }} />
                </div>
              </div>
              <div className="q-flex q-items-center q-justify-between">
                <span className="q-font-['Geist',sans-serif] q-text-[12px] q-font-medium q-text-[#56654D] q-tracking-normal">
                  {"O seu momento na caneta"}
                </span>
              </div>
            </div>
          </div>
        </header>
        <main className="q-flex q-flex-col q-relative q-w-full q-px-margin q-pt-[108px] pb-safe q-bg-surface q-max-w-[520px] q-mx-auto q-min-h-screen">
          <div className="q-flex q-flex-col q-w-full q-pb-space-xl">
            <div className="q-flex q-flex-col q-gap-space-sm q-pt-space-xs q-mb-space-lg">
              <span className="q-uppercase q-font-semibold q-text-[12px] q-tracking-[0.12em] q-text-[#8A6418] q-font-['Geist',sans-serif]">
                {"DIAGNÓSTICO DO SEU TRATAMENTO COM AS CANETAS · 3 MINUTOS"}
              </span>
              <h1 className="q-text-[24px] q-font-semibold q-text-[#203E35] q-leading-[1.25] q-font-['Geist',sans-serif]">
                {"Em que momento da caneta você está?"}
              </h1>
              <p className="q-font-['Geist',sans-serif] q-text-[15px] q-text-[#56654D] q-leading-[1.45]">
                {"Existem 4 fases e cada uma pede um cuidado diferente. Selecione abaixo o momento que você está hoje."}
              </p>
            </div>
            <div aria-label="Momento atual do tratamento" className="q-flex q-flex-col q-gap-space-md" role="radiogroup">
              {OPCOES.map((txt, i) =>
                q.r.fase === i ? (
                  // marcada: igual à prancheta 01b do Stitch
                  <button key={i} aria-checked="true" className="group q-relative q-w-full q-flex q-items-center q-justify-between q-p-[18px_20px] q-rounded-[14px] q-bg-[#FBF1DC] q-border-2 q-border-[#203E35] q-text-left q-transition-all q-duration-200 q-active:scale-[0.99]" role="radio" type="button" onClick={() => q.escolhe("fase", i)}>
                    <span className="q-text-[15px] q-leading-snug q-font-semibold q-text-[#203E35] q-font-['Geist',sans-serif] q-pr-space-md">
                      {txt}
                    </span>
                    <div className="q-w-5 q-h-5 q-rounded-full q-shrink-0 q-flex q-items-center q-justify-center q-bg-[#D9A441]">
                      <svg className="q-w-3 q-h-3 q-text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                  </button>
                ) : (
                  <button key={i} aria-checked="false" className="group q-relative q-w-full q-flex q-items-center q-justify-between q-p-[18px_20px] q-rounded-[14px] q-bg-surface-container-lowest q-shadow-[0_1px_2px_rgba(32,62,53,0.04),0_6px_16px_-8px_rgba(32,62,53,0.12)] q-text-left q-transition-all q-duration-200 q-active:scale-[0.99] q-hover:bg-surface-container-low" role="radio" type="button" onClick={() => q.escolhe("fase", i)}>
                    <span className="q-font-option-label q-text-option-label q-text-primary-container q-font-medium q-pr-space-md q-leading-snug">
                      {txt}
                    </span>
                    <div className="indicator q-w-5 q-h-5 q-rounded-full q-shrink-0 q-flex q-items-center q-justify-center q-bg-surface-container-high q-transition-colors">
                      <div className="dot q-w-2 q-h-2 q-rounded-full q-bg-primary-container q-opacity-0 q-transition-opacity" />
                    </div>
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
