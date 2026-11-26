// Tela 11 — convertida de scripts/quiz-mia/stitch/11.html (Stitch, projeto "MIA · Quiz de vendas").
import type { TelaProps } from "../_quiz/tipos";
import { pontos } from "../_quiz/ui";

const OPCOES = ["Nenhuma", "Uma", "Duas", "Três ou mais"];

export default function T11({ q }: TelaProps) {
  const p = pontos(q);
  return (
    <div data-tela="11">
      <div data-body className="q-min-h-screen q-bg-[#F9FAF7] q-flex q-justify-center q-selection:bg-[#D9A441]/20">
        <div className="q-w-full q-max-w-[390px] q-min-h-screen q-flex q-flex-col q-px-6 q-pt-5 q-pb-8 q-relative">
          <header className="q-w-full q-mb-6">
            <div className="q-relative q-flex q-items-center q-justify-between q-h-9 q-mb-4">
              <button type="button" aria-label="Voltar" onClick={q.voltar} className="q-text-[#203E35] q-p-1 q--ml-1 q-active:scale-95 q-transition-transform">
                <svg className="q-w-6 q-h-6 q-stroke-[2.2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
              </button>
              <div className="q-absolute q-left-1/2 q--translate-x-1/2 q-top-1/2 q--translate-y-1/2">
                <div className="q-w-7 q-h-7 q-rounded-full q-shadow-[0_2px_8px_rgba(32,62,53,0.15)] q-relative q-overflow-hidden q-flex q-items-center q-justify-center" style={{ background: "radial-gradient(circle at 35% 30%, #A8C3B5 0%, #7E9E8F 55%, #4F6D60 100%)" }}>
                  <div className="q-absolute q-inset-0 q-rounded-full q-bg-gradient-to-tr q-from-[#D9A441]/25 q-via-transparent q-to-white/40 q-pointer-events-none" />
                </div>
              </div>
              <div className="q-w-6 q-h-6" />
            </div>
            <div className="q-grid q-grid-cols-4 q-gap-2 q-mb-2">
              <div className="q-h-1 q-bg-[#DDE3DA] q-rounded-full q-overflow-hidden">
                <div className="q-h-full q-bg-[#D9A441] q-rounded-full q-w-full" />
              </div>
              <div className="q-h-1 q-bg-[#DDE3DA] q-rounded-full q-overflow-hidden">
                <div className="q-h-full q-bg-[#D9A441] q-rounded-full" style={{ width: "62%" }} />
              </div>
              <div className="q-h-1 q-bg-[#DDE3DA] q-rounded-full q-overflow-hidden">
                <div className="q-h-full q-bg-[#D9A441] q-rounded-full q-w-0" />
              </div>
              <div className="q-h-1 q-bg-[#DDE3DA] q-rounded-full q-overflow-hidden">
                <div className="q-h-full q-bg-[#D9A441] q-rounded-full q-w-0" />
              </div>
            </div>
            <div className="q-flex q-items-center q-justify-between q-text-[12px] q-font-medium q-tracking-tight q-text-[#56654D]">
              <span>
                {"Os avisos do seu corpo"}
              </span>
              <div className="q-flex q-items-center q-gap-1.5">
                <span>
                  {"alertas"}
                </span>
                <div className="q-flex q-items-center q-gap-1 q-ml-0.5">
                  <span className="q-w-2 q-h-2 q-rounded-full" style={p[0]} />
                  {" "}
                  {" "}
                  <span className="q-w-2 q-h-2 q-rounded-full" style={p[1]} />
                  {" "}
                  {" "}
                  <span className="q-w-2 q-h-2 q-rounded-full" style={p[2]} />
                </div>
              </div>
            </div>
          </header>
          <main className="q-flex-1 q-flex q-flex-col">
            <h1 className="q-text-[24px] q-leading-[1.25] q-font-semibold q-text-[#203E35] q-tracking-tight q-mb-7">
              {" Ontem, em quantas refeições você comeu carne, frango, peixe, ovo ou queijo? "}
            </h1>
            <div className="q-flex q-flex-col q-gap-3">
              {OPCOES.map((txt, i) =>
                q.r.prot === i ? (
                  // marcada: padrão da prancheta 01b
                  <button key={i} type="button" role="radio" aria-checked="true" onClick={() => q.escolhe("prot", i)} className="q-w-full q-bg-[#FBF1DC] q-rounded-2xl q-p-4 q-min-h-[64px] q-border-2 q-border-[#203E35] q-flex q-items-center q-justify-between q-text-left q-active:scale-[0.99] q-transition-all q-group">
                    <span className="q-text-[16px] q-font-semibold q-text-[#203E35]">
                      {txt}
                    </span>
                    <span className="q-w-5 q-h-5 q-rounded-full q-bg-[#D9A441] q-flex-shrink-0 q-flex q-items-center q-justify-center">
                      <svg className="q-w-3 q-h-3 q-text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                  </button>
                ) : (
                  <button key={i} type="button" role="radio" aria-checked="false" onClick={() => q.escolhe("prot", i)} className="q-w-full q-bg-white q-rounded-2xl q-p-4 q-min-h-[64px] q-border q-border-transparent q-shadow-[0_1px_3px_rgba(0,0,0,0.03)] q-flex q-items-center q-justify-between q-text-left q-hover:border-[#DDE3DA] q-active:scale-[0.99] q-transition-all q-group">
                    <span className="q-text-[16px] q-font-medium q-text-[#203E35]">
                      {txt}
                    </span>
                    <span className="q-w-5 q-h-5 q-rounded-full q-bg-[#EEF2EC] q-flex-shrink-0 q-group-hover:bg-[#E3E8E0] q-transition-colors" />
                  </button>
                ),
              )}
            </div>
            <div className="q-flex-1" />
          </main>
        </div>
      </div>
    </div>
  );
}
