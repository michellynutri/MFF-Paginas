// Tela 17 — convertida de scripts/quiz-mia/stitch/17.html (Stitch, projeto "MIA · Quiz de vendas").
import type { TelaProps } from "../_quiz/tipos";
import { pontos } from "../_quiz/ui";

const OPCOES = ["Lactose", "Glúten", "Carne vermelha", "Peixe", "Ovo", "Como de tudo"];

export default function T17({ q }: TelaProps) {
  const p = pontos(q);
  const restr = q.r.restr ?? [];
  const n = restr.filter((x) => x !== 5).length; // restrições reais marcadas
  const temRestricao = n > 0;
  return (
    <div data-tela="17" className="q-h-full">
      <div data-body className="q-bg-surface q-text-on-surface q-antialiased q-flex q-flex-col q-min-h-screen q-selection:bg-secondary-fixed q-selection:text-on-secondary-fixed">
        <main className="q-flex-1 q-flex q-flex-col q-w-full q-max-w-[520px] q-mx-auto q-bg-surface pt-safe pb-safe">
          <div className="q-flex q-flex-col q-w-full q-relative q-pb-28">
            <div className="q-w-full q-px-5 q-pt-3 q-pb-2 q-flex q-items-center q-justify-between">
              <button aria-label="Voltar" onClick={q.voltar} className="q-w-8 q-h-8 q-flex q-items-center q-justify-start q-text-primary-container q-focus:outline-none" type="button">
                <span className="material-symbols-outlined q-text-[24px]">
                  {"chevron_left"}
                </span>
              </button>
              <div className="q-relative q-w-7 q-h-7 q-rounded-full q-shadow-sm q-flex q-items-center q-justify-center" style={{ background: "radial-gradient(circle at 35% 30%, #a4d0b7 0%, #46645a 55%, #16402e 100%)", boxShadow: "0 2px 6px -1px rgba(8, 40, 32, 0.35)" }}>
                <div className="q-absolute q-top-1 q-left-1.5 q-w-2 q-h-1 q-rounded-full q-bg-white/40 q-blur-[0.5px] q-transform -rotate-25" />
              </div>
              <div aria-hidden="true" className="q-w-8 q-h-8" />
            </div>
            <div className="q-w-full q-px-5 q-pt-1 q-pb-2">
              <div className="q-grid q-grid-cols-4 q-gap-1.5 q-w-full q-h-1">
                <div className="q-w-full q-h-full q-bg-[#D9A441] q-rounded-full" />
                <div className="q-w-full q-h-full q-bg-[#D9A441] q-rounded-full" />
                <div className="q-w-full q-h-full q-bg-surface-container-highest q-rounded-full q-overflow-hidden q-flex">
                  <div className="q-h-full q-bg-[#D9A441] q-w-[48%] q-rounded-full" />
                </div>
                <div className="q-w-full q-h-full q-bg-surface-container-highest q-rounded-full" />
              </div>
              <div className="q-flex q-items-center q-justify-between q-mt-2.5">
                <span className="q-font-['Geist',sans-serif] q-text-[12px] q-leading-4 q-font-medium q-text-[#56654D] q-tracking-normal">
                  {"O que cabe no seu dia"}
                </span>
                <div className="q-flex q-items-center q-gap-1.5">
                  <span className="q-font-['Geist',sans-serif] q-text-[12px] q-leading-4 q-font-medium q-text-[#56654D] q-tracking-normal">
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
            </div>
            <div className="q-w-full q-px-5 q-pt-[20px] q-pb-3">
              <h1 className="q-font-['Geist',sans-serif] q-text-[24px] q-leading-[1.25] q-font-semibold q-text-[#203E35] q-tracking-[-0.02em]">
                {" Tem alergia ou algo que você não come? "}
              </h1>
            </div>
            <div className="q-w-full q-px-5 q-flex q-flex-col q-gap-2.5 q-pt-1" id="options-stack">
              {OPCOES.map((txt, i) =>
                restr.includes(i) ? (
                  <button key={i} onClick={() => q.alterna("restr", i, 5)} role="checkbox" aria-checked="true" className="quiz-option q-w-full q-min-h-[58px] q-p-4 q-rounded-2xl q-flex q-items-center q-justify-between q-text-left q-transition-all q-duration-150 q-bg-[#FBF1DC] q-shadow-sm" style={{ outline: "1.5px solid #203E35" }} type="button" data-selected="true">
                    <span className="q-font-option-label q-text-[16px] q-leading-snug q-font-medium q-text-primary-container">
                      {txt}
                    </span>
                    <div className="checkbox-indicator q-w-6 q-h-6 q-rounded-lg q-bg-[#D9A441] q-flex q-items-center q-justify-center q-text-white q-shrink-0">
                      <span className="material-symbols-outlined q-text-[17px] q-font-bold">
                        {"check"}
                      </span>
                    </div>
                  </button>
                ) : (
                  <button key={i} onClick={() => q.alterna("restr", i, 5)} role="checkbox" aria-checked="false" className="quiz-option q-w-full q-min-h-[58px] q-p-4 q-rounded-2xl q-flex q-items-center q-justify-between q-text-left q-transition-all q-duration-150 q-bg-white q-shadow-sm" style={{ outline: "1px solid #E5E9E2" }} type="button" data-selected="false">
                    <span className="q-font-option-label q-text-[16px] q-leading-snug q-font-medium q-text-primary-container">
                      {txt}
                    </span>
                    <div className="checkbox-indicator q-w-6 q-h-6 q-rounded-lg q-flex q-items-center q-justify-center q-shrink-0 q-bg-transparent" style={{ outline: "1.5px solid #DDE3DA" }}>
                      <span className="material-symbols-outlined q-text-[17px] q-font-bold q-text-transparent">
                        {"check"}
                      </span>
                    </div>
                  </button>
                ),
              )}
            </div>
            {temRestricao && (
              <div className="q-w-full q-px-5 q-mt-4">
                <div className="q-rounded-xl q-p-3.5 q-flex q-items-center q-gap-2.5 q-bg-[#E5F1E8]">
                  <span className="material-symbols-outlined q-text-[20px] q-text-[#2F6B45] q-shrink-0" style={{ fontVariationSettings: "'FILL' 0, 'wght' 500" }}>
                    {"verified_user"}
                  </span>
                  <p className="q-font-['Geist',sans-serif] q-text-[14px] q-leading-[1.45] q-font-medium q-text-[#2F6B45]">
                    {" O que você marcar nunca aparece no seu plano. "}
                  </p>
                </div>
              </div>
            )}
            <div className="q-fixed q-bottom-0 q-left-0 q-right-0 q-max-w-[520px] q-mx-auto q-px-5 q-pt-3 q-pb-6 q-bg-gradient-to-t q-from-surface q-via-surface/95 q-to-transparent q-pointer-events-auto q-z-20">
              <button className="q-w-full q-h-[52px] q-rounded-full q-bg-primary-container q-text-on-primary q-font-button-label q-text-[16px] q-font-semibold q-flex q-items-center q-justify-center q-shadow-md q-active:scale-[0.99] q-transition-transform q-disabled:opacity-40 q-disabled:cursor-not-allowed" id="submit-btn" type="button" disabled={restr.length === 0} onClick={q.proxima}>
                <span id="btn-text">
                  {n ? `Continuar · ${n} ${n > 1 ? "marcados" : "marcado"}` : "Continuar"}
                </span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
