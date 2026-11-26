// Tela 04 — convertida de scripts/quiz-mia/stitch/04.html (Stitch, projeto "MIA · Quiz de vendas").
import type { TelaProps } from "../_quiz/tipos";

const QUER = [
  " Perder mais gordura sem subir a dose ",
  " Parar de passar mal depois da aplicação ",
  " Emagrecer sem ficar flácida e com cara de cansada ",
  " Parar a caneta e não engordar tudo de novo ",
];

export default function T04({ q }: TelaProps) {
  return (
    <div data-tela="04">
      <div data-body className="q-min-h-screen q-bg-[#F6F7F4] q-flex q-justify-center q-text-[#203E35]">
        <main className="q-w-[390px] q-min-h-screen q-bg-[#F6F7F4] q-flex q-flex-col q-px-5 q-pt-3 q-pb-8 q-box-border">
          <header className="q-w-full q-mb-6">
            <div className="q-h-11 q-flex q-items-center q-justify-between q-relative q-mb-2">
              <button aria-label="Voltar" onClick={q.voltar} className="q-p-1 q--ml-1 q-text-[#203E35] q-hover:opacity-75 q-transition-opacity" type="button">
                <svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="22">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <div className="q-absolute q-left-1/2 q--translate-x-1/2 q-flex q-items-center q-justify-center">
                <div aria-label="MIA Logo" className="orb-logo" />
              </div>
              <div aria-hidden="true" className="q-w-[22px] q-h-[22px]" />
            </div>
            <div className="q-grid q-grid-cols-4 q-gap-2 q-mb-2">
              <div className="q-h-1 q-bg-[#E5E8E2] q-rounded-full q-overflow-hidden">
                <div className="q-h-full q-bg-[#D9A441] q-rounded-full" style={{ width: "60%" }} />
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
            <h1 className="q-text-[24px] q-leading-[1.3] q-font-semibold q-text-[#203E35] q-tracking-tight">
              {"Se a caneta pudesse te dar uma coisa só, qual seria?"}
            </h1>
          </section>
          <section className="q-flex q-flex-col q-gap-4">
            <div aria-label="Se a caneta pudesse te dar uma coisa só, qual seria?" className="q-flex q-flex-col q-gap-3" role="radiogroup">
              {QUER.map((txt, i) =>
                q.r.quer === i ? (
                  // marcada: estilo da prancheta 01b
                  <div key={i} aria-checked="true" role="radio" tabIndex={0} onClick={() => q.escolhe("quer", i)} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); q.escolhe("quer", i); } }} className="q-w-full q-bg-[#FBF1DC] q-rounded-[14px] q-border-2 q-border-[#203E35] q-p-[15px_17px] q-flex q-items-center q-justify-between q-cursor-pointer q-shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                    <span className="q-text-[16px] q-font-semibold q-text-[#203E35] q-leading-snug q-pr-3">
                      {txt}
                    </span>
                    <div className="q-w-[22px] q-h-[22px] q-rounded-full q-bg-[#D9A441] q-flex q-items-center q-justify-center q-flex-shrink-0">
                      <svg className="q-w-3 q-h-3 q-text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                  </div>
                ) : (
                  <div key={i} aria-checked="false" role="radio" tabIndex={0} onClick={() => q.escolhe("quer", i)} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); q.escolhe("quer", i); } }} className="q-w-full q-bg-white q-rounded-[14px] q-border q-border-[#DDE3DA] q-p-[16px_18px] q-flex q-items-center q-justify-between q-cursor-pointer q-shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                    <span className="q-text-[16px] q-font-medium q-text-[#203E35] q-leading-snug q-pr-3">
                      {txt}
                    </span>
                    <div className="q-w-[22px] q-h-[22px] q-rounded-full q-border-[1.5px] q-border-[#DDE3DA] q-flex-shrink-0" />
                  </div>
                ),
              )}
            </div>
          </section>
          <div className="q-flex-1 q-min-h-[120px]" />
        </main>
      </div>
    </div>
  );
}
