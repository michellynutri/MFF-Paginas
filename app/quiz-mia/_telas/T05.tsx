// Tela 05 — convertida de scripts/quiz-mia/stitch/05.html (Stitch, projeto "MIA · Quiz de vendas").
import type { TelaProps } from "../_quiz/tipos";

const PARAR = [
  " Quase todo dia ",
  " Às vezes, e dá um frio na barriga ",
  " Prefiro nem pensar nisso ",
  " Já parei, e o peso está voltando ",
];

export default function T05({ q }: TelaProps) {
  return (
    <div data-tela="05">
      <div data-body className="q-min-h-screen q-bg-[#F6F7F4] q-flex q-justify-center q-text-[#203E35]">
        <main className="q-w-[390px] q-min-h-screen q-bg-[#F6F7F4] q-flex q-flex-col q-px-5 q-pt-3 q-pb-8 q-box-border">
          <div className="q-flex q-flex-col q-w-full">
            <div className="q-flex q-items-center q-justify-between q-w-full q-h-11 q-mb-2">
              <button aria-label="Voltar" onClick={q.voltar} className="q-flex q-items-center q-justify-center q-w-9 q-h-9 q--ml-1 q-text-[#203E35] q-focus:outline-none" type="button">
                <span className="material-symbols-outlined q-text-[24px]">
                  {"chevron_left"}
                </span>
              </button>
              <div className="orb-logo" />
              <div className="q-w-9 q-h-9" />
            </div>
            <div className="q-grid q-grid-cols-4 q-gap-1.5 q-w-full q-mt-1 q-mb-2">
              <div className="q-h-1 q-w-full q-bg-[#E5E8E2] q-rounded-full q-overflow-hidden">
                <div className="q-h-full q-bg-[#D9A441] q-rounded-full" style={{ width: "78%" }} />
              </div>
              <div className="q-h-1 q-w-full q-bg-[#E5E8E2] q-rounded-full" />
              <div className="q-h-1 q-w-full q-bg-[#E5E8E2] q-rounded-full" />
              <div className="q-h-1 q-w-full q-bg-[#E5E8E2] q-rounded-full" />
            </div>
            <div className="q-w-full q-mb-6">
              <span className="q-text-[12px] q-leading-[16px] q-font-medium q-text-[#56654D] q-tracking-normal q-font-sans">
                {" O seu momento na caneta "}
              </span>
            </div>
            <h1 className="q-text-[24px] q-leading-[32px] q-font-semibold q-text-[#203E35] q-tracking-tight q-font-sans q-mb-7">
              {" Você já se pegou pensando: “e quando eu parar?” "}
            </h1>
            <div aria-label="Você já se pegou pensando: “e quando eu parar?”" className="q-flex q-flex-col q-gap-3 q-w-full q-mb-4" role="radiogroup">
              {PARAR.map((txt, i) =>
                q.r.parar === i ? (
                  <div key={i} aria-checked="true" role="radio" tabIndex={0} onClick={() => q.escolhe("parar", i, 2200)} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); q.escolhe("parar", i, 2200); } }} className="q-flex q-items-center q-justify-between q-w-full q-p-4 q-rounded-[14px] q-bg-[#FBF1DC] q-shadow-sm q-cursor-pointer q-select-none" style={{ outline: "2px solid #203E35" }}>
                    <span className="q-text-[15px] q-leading-[21px] q-font-medium q-text-[#203E35] q-font-sans">
                      {txt}
                    </span>
                    <div className="q-flex q-items-center q-justify-center q-w-6 q-h-6 q-rounded-full q-bg-[#D9A441] q-flex-shrink-0">
                      <svg className="q-w-3.5 q-h-3.5 q-text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                  </div>
                ) : (
                  <div key={i} aria-checked="false" role="radio" tabIndex={0} onClick={() => q.escolhe("parar", i, 2200)} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); q.escolhe("parar", i, 2200); } }} className="q-flex q-items-center q-justify-between q-w-full q-p-4 q-rounded-[14px] q-bg-[#FFFFFF] q-shadow-sm q-cursor-pointer q-select-none" style={{ outline: "1px solid #DDE3DA" }}>
                    <span className="q-text-[15px] q-leading-[21px] q-font-medium q-text-[#203E35] q-font-sans">
                      {txt}
                    </span>
                    <div className="q-w-6 q-h-6 q-rounded-full q-flex-shrink-0" style={{ outline: "1.5px solid #DDE3DA" }} />
                  </div>
                ),
              )}
            </div>
            {q.r.parar !== undefined && (
              <div className="q-w-full q-rounded-[12px] q-bg-[#E5F1E8] q-px-4 q-py-[14px] q-mt-1">
                <p className="q-text-[14px] q-leading-[20px] q-font-medium q-text-[#2F6B45] q-font-sans q-m-0">
                  {" É a dúvida mais comum de quem usa caneta. A resposta está na próxima tela. "}
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
