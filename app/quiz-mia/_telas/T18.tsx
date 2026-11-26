// Tela 18 — convertida de scripts/quiz-mia/stitch/18.html (Stitch, projeto "MIA · Quiz de vendas").
import type { TelaProps } from "../_quiz/tipos";
import { pontos } from "../_quiz/ui";

const OPCOES = ["Consigo", "Em alguns dias", "Hoje não faço nada"];

export default function T18({ q }: TelaProps) {
  const p = pontos(q);
  return (
    <div data-tela="18">
      <div data-body className="q-min-h-screen q-flex q-justify-center q-items-start q-bg-[#F9FAF7]">
        <main className="q-w-[390px] q-min-h-[844px] q-bg-[#F9FAF7] q-flex q-flex-col q-px-5 q-pt-3 q-pb-12 q-select-none" data-purpose="app-artboard">
          <header className="q-w-full q-flex q-flex-col q-gap-4 q-pt-2" data-purpose="screen-header">
            <div className="q-flex q-items-center q-justify-between q-h-9">
              <button aria-label="Voltar" onClick={q.voltar} className="q-p-1 q--ml-1 q-text-[#203E35] q-active:opacity-60 q-transition-opacity" type="button">
                <svg className="q-w-5 q-h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div aria-label="Logo Esfera Verde" className="glossy-sphere" role="img" />
              <div className="q-w-5 q-h-5" />
            </div>
            <div className="q-grid q-grid-cols-4 q-gap-1 q-w-full" data-purpose="progress-bar">
              <div className="q-h-1 q-w-full q-bg-[#E5E9E2] q-rounded-full q-overflow-hidden">
                <div className="q-h-full q-w-full q-bg-[#D9A441] q-rounded-full" />
              </div>
              <div className="q-h-1 q-w-full q-bg-[#E5E9E2] q-rounded-full q-overflow-hidden">
                <div className="q-h-full q-w-full q-bg-[#D9A441] q-rounded-full" />
              </div>
              <div className="q-h-1 q-w-full q-bg-[#E5E9E2] q-rounded-full q-overflow-hidden">
                <div className="q-h-full q-w-[64%] q-bg-[#D9A441] q-rounded-full" />
              </div>
              <div className="q-h-1 q-w-full q-bg-[#E5E9E2] q-rounded-full q-overflow-hidden">
                <div className="q-h-full q-w-0 q-bg-[#D9A441] q-rounded-full" />
              </div>
            </div>
            <div className="q-flex q-items-center q-justify-between q-text-xs q-text-[#56654D] q--mt-1 q-font-normal q-tracking-tight">
              <span>
                {"O que cabe no seu dia"}
              </span>
              <div className="q-flex q-items-center q-gap-1.5" data-purpose="alert-status">
                <span className="q-text-xs">
                  {"alertas"}
                </span>
                <div className="q-flex q-items-center q-gap-1">
                  <span className="q-w-2 q-h-2 q-rounded-full q-inline-block" style={p[0]} />
                  {" "}
                  <span className="q-w-2 q-h-2 q-rounded-full q-inline-block" style={p[1]} />
                  {" "}
                  <span className="q-w-2 q-h-2 q-rounded-full q-inline-block" style={p[2]} />
                </div>
              </div>
            </div>
          </header>
          <section className="q-flex q-flex-col q-mt-7" data-purpose="interactive-question">
            <h1 className="q-text-[24px] q-font-semibold q-text-[#203E35] q-leading-[1.25] q-tracking-tight">
              {" Você consegue separar 17 minutos do seu dia, em casa? "}
            </h1>
            <p className="q-text-[15px] q-text-[#56654D] q-mt-2 q-mb-6 q-font-normal">
              {" Sem academia. Dá para fazer na sala. "}
            </p>
            <div aria-label="Disponibilidade de tempo" className="q-flex q-flex-col q-gap-3" role="radiogroup">
              {OPCOES.map((txt, i) =>
                q.r.mov === i ? (
                  <div key={i} onClick={() => q.escolhe("mov", i, i === 2 ? 2600 : 380)} aria-checked="true" className="q-bg-[#FBF1DC] q-border-2 q-border-[#203E35] q-rounded-2xl q-px-5 q-py-[18px] q-flex q-items-center q-justify-between q-cursor-pointer q-transition-all" data-purpose="option-card" role="radio" tabIndex={0}>
                    <span className="q-text-base q-font-medium q-text-[#203E35]">
                      {txt}
                    </span>
                    <div className="q-w-[22px] q-h-[22px] q-rounded-full q-bg-[#D9A441] q-flex q-items-center q-justify-center q-flex-shrink-0">
                      <svg className="q-w-3.5 q-h-3.5 q-text-white q-stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                ) : (
                  <div key={i} onClick={() => q.escolhe("mov", i, i === 2 ? 2600 : 380)} aria-checked="false" className="q-bg-white q-border q-border-[#EBECE8] q-rounded-2xl q-px-5 q-py-[18px] q-flex q-items-center q-justify-between q-cursor-pointer q-transition-all q-hover:border-[#D1D5CB]" data-purpose="option-card" role="radio" tabIndex={0}>
                    <span className="q-text-base q-font-medium q-text-[#203E35]">
                      {txt}
                    </span>
                    <div className="q-w-[22px] q-h-[22px] q-rounded-full q-border q-border-[#E0E2DC] q-flex q-items-center q-justify-center" />
                  </div>
                ),
              )}
            </div>
            {q.r.mov === 2 && (
              <div className="q-mt-5 q-bg-[#E5F1E8] q-rounded-[14px] q-p-3.5 q-px-4 q-flex q-items-center q-gap-2.5" data-purpose="validation-feedback">
                <svg className="q-w-4 q-h-4 q-text-[#2F6B45] q-flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {" "}
                <span className="q-text-sm q-text-[#2F6B45] q-font-normal q-leading-snug">
                  {" Tudo bem. O plano começa de onde você está. "}
                </span>
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}
