// Tela 09 — convertida de scripts/quiz-mia/stitch/09.html (Stitch, projeto "MIA · Quiz de vendas").
import type { KeyboardEvent } from "react";
import type { TelaProps } from "../_quiz/tipos";
import { pontos } from "../_quiz/ui";

const OPCOES = [
  "Enjoo",
  "Intestino preso por dias",
  "Cabelo enchendo o ralo do banho",
  "Unha quebrando à toa",
  "Fraqueza para levantar do sofá ou subir escada",
  "Tontura",
  "Nada disso",
];
const NADA = 6;

export default function T09({ q }: TelaProps) {
  const p = pontos(q);
  const marcadas = q.r.sinais || [];
  const reais = marcadas.filter((x) => x !== NADA).length;
  const rotulo = reais ? `Continuar · ${reais} ${reais > 1 ? "marcados" : "marcado"}` : "Continuar";
  const tecla = (i: number) => (e: KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      q.alterna("sinais", i, NADA);
    }
  };
  return (
    <div data-tela="09">
      <div data-body className="q-bg-surface q-font-body-md q-text-on-surface q-antialiased q-min-h-screen q-flex q-flex-col">
        <header className="q-fixed q-top-0 q-w-full q-z-50 q-bg-surface/85 q-backdrop-blur-xl q-shadow-[0_1px_8px_rgba(32,62,53,0.04)] pt-safe">
          <div className="q-h-28 q-max-w-[390px] q-mx-auto q-px-margin q-flex q-flex-col q-justify-between q-py-space-sm">
            <div className="q-relative q-flex q-items-center q-justify-between q-w-full q-h-11">
              <button aria-label="Voltar" onClick={q.voltar} className="q-w-11 q-h-11 q--ml-space-xs q-flex q-items-center q-justify-center q-text-on-surface q-rounded-full q-active:scale-95 q-transition-transform" type="button">
                <span className="material-symbols-outlined q-text-[22px]">
                  {"arrow_back"}
                </span>
              </button>
              <div className="q-absolute q-left-1/2 q-top-1/2 q--translate-x-1/2 q--translate-y-1/2">
                <div className="q-w-7 q-h-7 q-rounded-full q-bg-[#8EA89D] q-shadow-[0_0_12px_rgba(217,164,65,0.45)] q-ring-1 q-ring-[#D9A441]/30" />
              </div>
              <div className="q-w-11 q-h-11" />
            </div>
            <div className="q-flex q-flex-col q-gap-space-xs q-w-full q-pb-0.5">
              <div className="q-grid q-grid-cols-4 q-gap-gutter q-w-full q-h-1">
                <div className="q-h-1 q-rounded-full q-bg-[#D9A441]" />
                <div className="q-h-1 q-rounded-full q-bg-outline-variant q-overflow-hidden">
                  <div className="q-h-full q-bg-[#D9A441] q-rounded-full" style={{ width: "12%" }} />
                </div>
                <div className="q-h-1 q-rounded-full q-bg-outline-variant" />
                <div className="q-h-1 q-rounded-full q-bg-outline-variant" />
              </div>
              <div className="q-flex q-items-center q-justify-between q-text-caption q-text-[#56654D] q-pt-0.5">
                <span style={{ fontFamily: "Geist, sans-serif", fontSize: "12px", fontWeight: "500", color: "rgb(86, 101, 77)" }}>
                  {"Os avisos do seu corpo"}
                </span>
                <div className="q-flex q-items-center q-gap-space-xs">
                  <span style={{ fontFamily: "Geist, sans-serif", fontSize: "12px", fontWeight: "500", color: "rgb(86, 101, 77)" }}>
                    {"alertas"}
                  </span>
                  <div className="q-flex q-items-center q-gap-1 q-pl-1">
                    <span className="q-w-2 q-h-2 q-rounded-full q-inline-block" style={p[0]} />
                    <span className="q-w-2 q-h-2 q-rounded-full q-inline-block" style={p[1]} />
                    <span className="q-w-2 q-h-2 q-rounded-full q-inline-block" style={p[2]} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <main className="q-flex-1 q-flex q-flex-col q-relative q-w-full q-max-w-[390px] q-mx-auto q-px-margin q-pt-28 pb-safe q-bg-surface">
          <div className="q-flex q-flex-col q-w-full q-pb-28">
            <div className="q-flex q-flex-col q-gap-space-xs q-mb-space-lg" style={{ marginTop: "20px" }}>
              <h1 style={{ fontFamily: "Geist, sans-serif", fontSize: "24px", fontWeight: "600", color: "rgb(32, 62, 53)", lineHeight: "1.25", letterSpacing: "-0.02em" }}>
                {"O que apareceu depois que você começou a caneta?"}
              </h1>
              <p style={{ fontFamily: "Geist, sans-serif", fontSize: "14px", fontWeight: "400", color: "rgb(86, 101, 77)", letterSpacing: "normal", marginTop: "6px" }}>
                {"Marque tudo que acontece com você."}
              </p>
            </div>
            <div className="q-flex q-flex-col q-gap-3" id="options-group">
              {OPCOES.map((txt, i) =>
                marcadas.includes(i) ? (
                  <div key={i} role="checkbox" aria-checked="true" tabIndex={0} onClick={() => q.alterna("sinais", i, NADA)} onKeyDown={tecla(i)} className="quiz-option q-cursor-pointer q-select-none q-rounded-[16px] q-px-5 q-py-4 q-min-h-[60px] q-flex q-items-center q-justify-between q-bg-secondary-fixed q-text-primary-container q-shadow-md q-active:scale-[0.99] q-transition-all is-selected">
                    <span className="q-pr-3" style={{ fontFamily: "'Geist', sans-serif", fontSize: "16px", fontWeight: "600", color: "#203E35" }}>
                      {txt}
                    </span>
                    <div className="checkbox-box q-w-[22px] q-h-[22px] q-rounded-md q-bg-[#D9A441] q-flex q-items-center q-justify-center q-shrink-0 q-shadow-sm">
                      <span className="material-symbols-outlined q-text-[16px] q-text-surface-container-lowest q-font-bold">
                        {"check"}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div key={i} role="checkbox" aria-checked="false" tabIndex={0} onClick={() => q.alterna("sinais", i, NADA)} onKeyDown={tecla(i)} className="quiz-option q-cursor-pointer q-select-none q-rounded-[16px] q-px-5 q-py-4 q-min-h-[60px] q-flex q-items-center q-justify-between q-bg-surface-container-lowest q-shadow-sm q-active:scale-[0.99] q-transition-all">
                    <span className="q-pr-3" style={{ fontFamily: "'Geist', sans-serif", fontSize: "16px", fontWeight: "500", color: "#203E35" }}>
                      {txt}
                    </span>
                    <div className="checkbox-box q-w-[22px] q-h-[22px] q-rounded-md q-bg-surface-container-high q-flex q-items-center q-justify-center q-shrink-0">
                      <span className="material-symbols-outlined q-text-[16px] q-text-surface-container-lowest q-hidden">
                        {"check"}
                      </span>
                    </div>
                  </div>
                ),
              )}
            </div>
            {reais > 0 && (
              <div className="q-mt-space-lg q-rounded-xl q-bg-secondary-fixed q-p-4 q-shadow-sm">
                <p style={{ fontFamily: "Geist, sans-serif", fontSize: "13px", lineHeight: "1.4", color: "rgb(125, 87, 0)" }}>
                  {"Muita gente acha que é “normal da caneta”. É o corpo avisando que falta alguma coisa, e a maior parte se ajusta pelo prato."}
                </p>
              </div>
            )}
          </div>
          <div className="q-fixed q-bottom-0 q-left-0 q-right-0 q-z-40 q-bg-gradient-to-t q-from-surface q-via-surface/95 q-to-transparent q-pt-6 q-pb-8 q-px-margin">
            <div className="q-max-w-[390px] q-mx-auto">
              <button disabled={!marcadas.length} onClick={q.proxima} className="q-w-full q-h-[52px] q-rounded-2xl q-bg-primary-container q-text-on-primary q-font-button-label q-text-button-label q-flex q-items-center q-justify-center q-shadow-lg q-active:scale-[0.98] q-transition-transform q-disabled:opacity-40 q-disabled:shadow-none" id="cta-button" type="button">
                {rotulo}
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
