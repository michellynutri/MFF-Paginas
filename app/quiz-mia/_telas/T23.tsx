// Tela 23 — convertida de scripts/quiz-mia/stitch/23.html (Stitch, projeto "MIA · Quiz de vendas").
import type { TelaProps } from "../_quiz/tipos";
import { pontos } from "../_quiz/ui";

const OPCOES = ["Até R$ 500", "De R$ 500 a R$ 1.000", "De R$ 1.000 a R$ 2.000", "Mais de R$ 2.000"];

export default function T23({ q }: TelaProps) {
  const p = pontos(q);
  return (
    <div data-tela="23">
      <div data-body className="q-bg-[#F9FAF7] q-text-[#203E35] q-min-h-screen q-flex q-justify-center">
        <main className="q-w-full q-max-w-[390px] q-min-h-screen q-flex q-flex-col q-justify-between q-px-6 q-pt-6 q-pb-12">
          <div className="q-w-full">
            <header className="q-w-full q-mb-8">
              <div className="q-relative q-flex q-items-center q-justify-between q-mb-5 q-h-8">
                <button type="button" aria-label="Voltar" onClick={q.voltar} className="q-p-1 q--ml-1 q-text-[#203E35] q-hover:opacity-70 q-transition-opacity">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <div className="q-absolute q-left-1/2 q--translate-x-1/2 q-flex q-items-center q-justify-center">
                  <div className="q-w-7 q-h-7 q-rounded-full q-shadow-[inset_-3px_-3px_6px_rgba(0,0,0,0.35),inset_2px_2px_5px_rgba(255,255,255,0.65),0_3px_8px_rgba(32,62,53,0.2)] q-bg-gradient-to-br q-from-[#749D85] q-via-[#466B57] q-to-[#1A332B]" />
                </div>
                <div className="q-w-6 q-h-6" />
              </div>
              <div className="q-grid q-grid-cols-4 q-gap-2 q-mb-2">
                <div className="q-h-1 q-bg-[#D9A441] q-rounded-full" />
                <div className="q-h-1 q-bg-[#D9A441] q-rounded-full" />
                <div className="q-h-1 q-bg-[#D9A441] q-rounded-full" />
                <div className="q-h-1 q-bg-[#EDEEEB] q-rounded-full q-overflow-hidden">
                  <div className="q-h-full q-bg-[#D9A441] q-rounded-full" style={{ width: "50%" }} />
                </div>
              </div>
              <div className="q-flex q-items-center q-justify-between q-text-[12px] q-text-[#56654D]">
                <span>
                  {"O seu plano"}
                </span>
                <div className="q-flex q-items-center q-gap-1.5">
                  <span>
                    {"alertas"}
                  </span>
                  <div className="q-flex q-items-center q-gap-1">
                    <span className="q-w-1.5 q-h-1.5 q-rounded-full" style={p[0]} />
                    {" "}
                    <span className="q-w-1.5 q-h-1.5 q-rounded-full" style={p[1]} />
                    {" "}
                    <span className="q-w-1.5 q-h-1.5 q-rounded-full" style={p[2]} />
                  </div>
                </div>
              </div>
            </header>
            <div className="q-mb-8">
              <h1 className="q-text-[24px] q-leading-[1.25] q-font-semibold q-text-[#203E35] q-tracking-tight">
                {" Quanto você investe na caneta por mês? "}
              </h1>
            </div>
            <div aria-label="Investimento por mês" className="q-flex q-flex-col q-gap-3" role="radiogroup">
              {OPCOES.map((txt, i) =>
                q.r.gasto === i ? (
                  // marcada: padrão da prancheta 01b (fundo creme, borda 2px verde, marcador dourado com check)
                  <button key={i} type="button" role="radio" aria-checked="true" onClick={() => q.escolhe("gasto", i)} className="q-group q-w-full q-text-left q-flex q-items-center q-justify-between q-p-[15px] q-bg-[#FBF1DC] q-border-2 q-border-[#203E35] q-rounded-2xl q-shadow-sm q-transition-all q-cursor-pointer">
                    <span className="q-text-[16px] q-font-semibold q-text-[#203E35]">
                      {txt}
                    </span>
                    <div className="q-w-6 q-h-6 q-rounded-full q-bg-[#D9A441] q-flex q-items-center q-justify-center">
                      <svg className="q-w-3.5 q-h-3.5 q-text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                  </button>
                ) : (
                  <button key={i} type="button" role="radio" aria-checked="false" onClick={() => q.escolhe("gasto", i)} className="q-group q-w-full q-text-left q-flex q-items-center q-justify-between q-p-4 q-bg-white q-border q-border-[#E4E7E1] q-rounded-2xl q-shadow-sm q-hover:border-[#CBD3C6] q-transition-all q-cursor-pointer">
                    <span className="q-text-[16px] q-font-medium q-text-[#203E35]">
                      {txt}
                    </span>
                    <div className="q-w-6 q-h-6 q-rounded-full q-border-2 q-border-[#D7DDD2] q-flex q-items-center q-justify-center q-group-hover:border-[#A4B39F] q-transition-colors" />
                  </button>
                ),
              )}
            </div>
          </div>
          <div />
        </main>
      </div>
    </div>
  );
}
