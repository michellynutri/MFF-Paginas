// Tela 24 — convertida de scripts/quiz-mia/stitch/24.html (Stitch, projeto "MIA · Quiz de vendas").
import type { TelaProps } from "../_quiz/tipos";
import { pontos } from "../_quiz/ui";

const NOTAS = [1, 2, 3, 4, 5];

export default function T24({ q }: TelaProps) {
  const p = pontos(q);
  return (
    <div data-tela="24" className="q-h-full">
      <div data-body className="q-bg-background q-font-body-md q-text-on-surface q-antialiased q-flex q-flex-col q-items-center q-min-h-screen">
        <div className="q-w-full q-max-w-[520px] q-sm:max-w-[520px] q-flex-1 q-flex q-flex-col q-min-h-screen q-relative q-bg-surface">
          <main className="q-flex-1 q-flex q-flex-col q-relative q-w-full q-bg-surface pt-safe pb-safe">
            <div className="q-flex q-flex-col q-w-full q-px-margin pb-safe">
              <header className="q-w-full q-flex q-flex-col q-pt-space-xs">
                <div className="q-relative q-w-full q-h-11 q-flex q-items-center q-justify-between">
                  <button aria-label="Voltar" onClick={q.voltar} className="q-w-10 q-h-10 q--ml-2 q-flex q-items-center q-justify-center q-text-primary-container q-active:opacity-60 q-transition-opacity" type="button">
                    <span className="material-symbols-outlined q-text-[24px]">
                      {"chevron_left"}
                    </span>
                  </button>
                  <div className="q-absolute q-left-1/2 q--translate-x-1/2 q-flex q-items-center q-justify-center">
                    <div className="q-w-[28px] q-h-[28px] q-rounded-full q-relative q-overflow-hidden q-shadow-[0_2px_8px_rgba(27,53,43,0.25)]" style={{ background: "radial-gradient(circle at 35% 30%, #8caea0 0%, #688B7B 28%, #385E4E 65%, #1B352B 100%)" }}>
                      <div className="q-absolute q-top-[3px] q-left-[5px] q-w-[9px] q-h-[5px] q-rounded-full q-bg-surface-container-lowest/40 q-rotate-[-25deg] q-blur-[0.6px]" />
                    </div>
                  </div>
                  <div className="q-w-10 q-h-10" />
                </div>
                <div className="q-grid q-grid-cols-4 q-gap-1 q-w-full q-h-[3px] q-mt-space-sm">
                  <div className="q-h-full q-rounded-full q-bg-[#D9A441]" />
                  <div className="q-h-full q-rounded-full q-bg-[#D9A441]" />
                  <div className="q-h-full q-rounded-full q-bg-[#D9A441]" />
                  <div className="q-h-full q-rounded-full q-bg-surface-container-highest q-overflow-hidden q-relative">
                    <div className="q-h-full q-bg-[#D9A441] q-rounded-full" style={{ width: "68%" }} />
                  </div>
                </div>
                <div className="q-flex q-items-center q-justify-between q-w-full q-mt-2">
                  <span className="q-font-mono-sm q-text-[12px] q-leading-none q-font-medium q-text-[#56654D]">
                    {"O seu plano"}
                  </span>
                  <div className="q-flex q-items-center q-gap-[6px]">
                    <span className="q-font-caption q-text-[12px] q-leading-none q-text-[#56654D]">
                      {"alertas"}
                    </span>
                    <div className="q-flex q-items-center q-gap-[3px]">
                      <span className="q-w-[6px] q-h-[6px] q-rounded-full q-inline-block" style={p[0]} />
                      {" "}
                      <span className="q-w-[6px] q-h-[6px] q-rounded-full q-inline-block" style={p[1]} />
                      {" "}
                      <span className="q-w-[6px] q-h-[6px] q-rounded-full q-inline-block" style={p[2]} />
                    </div>
                  </div>
                </div>
              </header>
              <div className="q-w-full q-mt-[32px] q-flex q-flex-col">
                <h1 className="q-text-[24px] q-leading-tight q-font-semibold q-text-primary-container q-tracking-[-0.015em]">
                  {" De 1 a 5, o quanto você está decidida a fazer esse investimento valer? "}
                </h1>
                <div className="q-mt-[32px] q-w-full q-flex q-flex-col">
                  <div aria-label="De 1 a 5" className="q-grid q-grid-cols-5 q-gap-2.5 q-w-full" role="radiogroup">
                    {NOTAS.map((n) =>
                      q.r.decid === n ? (
                        <button key={n} aria-checked="true" role="radio" onClick={() => q.escolhe("decid", n)} className="q-h-[64px] q-rounded-[14px] q-bg-[#FBF1DC] q-text-primary-container q-shadow-[0_0_0_2px_#203E35] q-flex q-items-center q-justify-center q-font-question-lg q-text-[20px] q-font-semibold q-active:scale-[0.98] q-transition-transform" type="button">
                          {` ${n} `}
                        </button>
                      ) : (
                        <button key={n} aria-checked="false" role="radio" onClick={() => q.escolhe("decid", n)} className="q-h-[64px] q-rounded-[14px] q-bg-surface-container-lowest q-text-primary-container q-shadow-[0_1px_2px_rgba(32,62,53,0.06),0_8px_20px_-16px_rgba(32,62,53,0.25)] q-flex q-items-center q-justify-center q-font-question-lg q-text-[20px] q-font-semibold q-active:scale-[0.98] q-transition-transform" type="button">
                          {` ${n} `}
                        </button>
                      ),
                    )}
                  </div>
                  <div className="q-w-full q-flex q-justify-between q-items-center q-mt-3 q-px-1">
                    <span className="q-font-caption q-text-[13px] q-leading-tight q-text-[#56654D]">
                      {"Ainda em dúvida"}
                    </span>
                    {" "}
                    <span className="q-font-caption q-text-[13px] q-leading-tight q-text-[#56654D]">
                      {"Totalmente decidida"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
