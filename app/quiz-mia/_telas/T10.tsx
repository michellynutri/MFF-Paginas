// Tela 10 — convertida de scripts/quiz-mia/stitch/10.html (Stitch, projeto "MIA · Quiz de vendas").
import type { TelaProps } from "../_quiz/tipos";
import { pontos } from "../_quiz/ui";

const OPCOES = ["Sumiu, eu até esqueço de comer", "Pouca, em horários certos", "Normal", "Voltou com força nos últimos dias"];

export default function T10({ q }: TelaProps) {
  const p = pontos(q);
  return (
    <div data-tela="10">
      <div data-body className="q-min-h-screen q-bg-[#F9FAF7] q-text-[#203E35] q-flex q-flex-col q-justify-between q-selection:bg-[#D9A441]/20">
        <div className="q-w-full q-max-w-[390px] q-mx-auto q-min-h-screen q-px-5 q-pt-3 q-pb-8 q-flex q-flex-col q-justify-between">
          <div>
            <div className="q-relative q-flex q-items-center q-justify-between q-h-12 q-mb-3">
              <button type="button" aria-label="Voltar" onClick={q.voltar} className="q-p-2 q--ml-2 q-text-[#203E35] q-hover:opacity-75 q-transition-opacity">
                <svg className="q-w-5 q-h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="q-absolute q-left-1/2 q--translate-x-1/2 q-flex q-items-center q-justify-center">
                <div className="q-w-7 q-h-7 q-rounded-full q-shadow-[0_2px_8px_rgba(217,164,65,0.35)] q-relative q-overflow-hidden" style={{ background: "radial-gradient(circle at 35% 30%, #A3B899 0%, #768F70 55%, #465E43 100%)" }}>
                  <div className="q-absolute q-inset-0 q-rounded-full" style={{ background: "radial-gradient(circle at 60% 80%, rgba(217, 164, 65, 0.45) 0%, transparent 60%)" }} />
                  <div className="q-absolute q-top-[3px] q-left-[5px] q-w-2 q-h-1.5 q-rounded-full q-bg-white/40 q-blur-[0.6px]" />
                </div>
              </div>
              <div className="q-w-9" />
            </div>
            <div className="q-grid q-grid-cols-4 q-gap-2 q-mb-2">
              <div className="q-h-1 q-bg-[#DDE3DA] q-rounded-full q-overflow-hidden">
                <div className="q-h-full q-bg-[#D9A441] q-w-full q-rounded-full" />
              </div>
              <div className="q-h-1 q-bg-[#DDE3DA] q-rounded-full q-overflow-hidden">
                <div className="q-h-full q-bg-[#D9A441] q-w-1/2 q-rounded-full" />
              </div>
              <div className="q-h-1 q-bg-[#DDE3DA] q-rounded-full q-overflow-hidden">
                <div className="q-h-full q-bg-[#D9A441] q-w-0 q-rounded-full" />
              </div>
              <div className="q-h-1 q-bg-[#DDE3DA] q-rounded-full q-overflow-hidden">
                <div className="q-h-full q-bg-[#D9A441] q-w-0 q-rounded-full" />
              </div>
            </div>
            <div className="q-flex q-items-center q-justify-between q-text-[12px] q-text-[#56654D] q-mb-7 q-font-normal">
              <span>
                {"Os avisos do seu corpo"}
              </span>
              <div className="q-flex q-items-center q-gap-1.5">
                <span>
                  {"alertas"}
                </span>
                <div className="q-flex q-items-center q-gap-1 q-ml-0.5">
                  <span className="q-w-2 q-h-2 q-rounded-full q-inline-block" style={p[0]} />
                  {" "}
                  <span className="q-w-2 q-h-2 q-rounded-full q-inline-block" style={p[1]} />
                  {" "}
                  <span className="q-w-2 q-h-2 q-rounded-full q-inline-block" style={p[2]} />
                </div>
              </div>
            </div>
            <h1 className="q-text-[24px] q-leading-[1.25] q-font-semibold q-text-[#203E35] q-mb-6 q-tracking-tight">
              {" Como está a sua fome hoje? "}
            </h1>
            <div className="q-flex q-flex-col q-gap-3">
              {OPCOES.map((txt, i) =>
                q.r.fome === i ? (
                  // marcada: padrão da prancheta 01b
                  <button key={i} type="button" role="radio" aria-checked="true" onClick={() => q.escolhe("fome", i)} className="q-w-full q-text-left q-bg-[#FBF1DC] q-rounded-2xl q-p-4 sm:p-4.5 q-border-2 q-border-[#203E35] q-transition-all q-flex q-items-center q-justify-between q-group q-active:scale-[0.99]">
                    <span className="q-text-[15px] q-font-semibold q-text-[#203E35] q-pr-3 q-leading-snug">
                      {txt}
                    </span>
                    <span className="q-w-5 q-h-5 q-rounded-full q-bg-[#D9A441] q-flex-shrink-0 q-flex q-items-center q-justify-center">
                      <svg className="q-w-3 q-h-3 q-text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                  </button>
                ) : (
                  <button key={i} type="button" role="radio" aria-checked="false" onClick={() => q.escolhe("fome", i)} className="q-w-full q-text-left q-bg-white q-rounded-2xl q-p-4 sm:p-4.5 q-border q-border-transparent q-shadow-[0_1px_3px_rgba(0,0,0,0.02)] q-hover:border-[#DDE3DA] q-transition-all q-flex q-items-center q-justify-between q-group q-active:scale-[0.99]">
                    <span className="q-text-[15px] q-font-medium q-text-[#203E35] q-pr-3 q-leading-snug">
                      {txt}
                    </span>
                    <span className="q-w-5 q-h-5 q-rounded-full q-bg-[#E5E9E2] q-flex-shrink-0 q-group-hover:bg-[#D5DCD0] q-transition-colors" />
                  </button>
                ),
              )}
            </div>
          </div>
          <div className="q-py-6" />
        </div>
      </div>
    </div>
  );
}
