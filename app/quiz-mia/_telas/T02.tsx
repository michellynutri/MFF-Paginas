// Tela 02 — convertida de scripts/quiz-mia/stitch/02.html (Stitch, projeto "MIA · Quiz de vendas").
import type { TelaProps } from "../_quiz/tipos";

const CANETAS = ["Ozempic ou Wegovy", "Mounjaro", "Manipulada", "Outra"];

export default function T02({ q }: TelaProps) {
  return (
    <div data-tela="02">
      <div data-body className="q-min-h-screen q-bg-[#F6F7F4] q-flex q-justify-center q-text-[#203E35]">
        <main className="q-w-[390px] q-min-h-screen q-bg-[#F6F7F4] q-flex q-flex-col q-px-5 q-pt-3 q-pb-8 q-box-border">
          <header className="q-w-full q-mb-6">
            <div className="q-h-11 q-flex q-items-center q-justify-between q-relative q-mb-2">
              <button type="button" aria-label="Voltar" onClick={q.voltar} className="q-p-1 q--ml-1 q-text-[#203E35] q-hover:opacity-75 q-transition-opacity">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <div className="q-absolute q-left-1/2 q--translate-x-1/2 q-flex q-items-center q-justify-center">
                <div className="orb-logo" aria-label="MIA Logo" />
              </div>
              <div className="q-w-[22px] q-h-[22px]" aria-hidden="true" />
            </div>
            <div className="q-grid q-grid-cols-4 q-gap-2 q-mb-2">
              <div className="q-h-1 q-bg-[#E5E8E2] q-rounded-full q-overflow-hidden">
                <div className="q-h-full q-bg-[#D9A441] q-rounded-full" style={{ width: "30%" }} />
              </div>
              <div className="q-h-1 q-bg-[#E5E8E2] q-rounded-full" />
              <div className="q-h-1 q-bg-[#E5E8E2] q-rounded-full" />
              <div className="q-h-1 q-bg-[#E5E8E2] q-rounded-full" />
            </div>
            <p className="q-text-[12px] q-text-[#56654D] q-tracking-normal q-font-normal">
              {" O seu momento na caneta "}
            </p>
          </header>
          <section className="q-mt-2 q-mb-6">
            <h1 className="q-text-[24px] q-leading-[1.25] q-font-semibold q-text-[#203E35] q-tracking-tight">
              {" Qual caneta você usa? "}
            </h1>
          </section>
          <section aria-label="Qual caneta você usa?" className="q-flex q-flex-col q-gap-3" role="radiogroup">
            {CANETAS.map((txt, i) =>
              q.r.caneta === i ? (
                // marcada: estilo da prancheta 01b
                <div key={i} aria-checked="true" role="radio" tabIndex={0} onClick={() => q.escolhe("caneta", i)} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); q.escolhe("caneta", i); } }} className="q-w-full q-bg-[#FBF1DC] q-rounded-[14px] q-border-2 q-border-[#203E35] q-px-[15px] q-py-[15px] q-flex q-items-center q-justify-between q-cursor-pointer q-transition-colors q-shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                  <span className="q-text-[16px] q-font-semibold q-text-[#203E35]">
                    {txt}
                  </span>
                  <div className="q-w-5 q-h-5 q-rounded-full q-bg-[#D9A441] q-flex q-items-center q-justify-center q-flex-shrink-0">
                    <svg className="q-w-3 q-h-3 q-text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </div>
              ) : (
                <div key={i} aria-checked="false" role="radio" tabIndex={0} onClick={() => q.escolhe("caneta", i)} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); q.escolhe("caneta", i); } }} className="q-w-full q-bg-white q-rounded-[14px] q-border q-border-[#DDE3DA] q-px-4 q-py-4 q-flex q-items-center q-justify-between q-cursor-pointer q-hover:border-[#C4CCC0] q-transition-colors q-shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                  <span className="q-text-[16px] q-font-medium q-text-[#203E35]">
                    {txt}
                  </span>
                  <div className="q-w-5 q-h-5 q-rounded-full q-border q-border-[#DDE3DA] q-bg-transparent q-flex-shrink-0" />
                </div>
              ),
            )}
          </section>
          <div className="q-flex-1 q-min-h-[120px]" />
        </main>
      </div>
    </div>
  );
}
