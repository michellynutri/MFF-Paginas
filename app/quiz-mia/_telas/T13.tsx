// Tela 13 — convertida de scripts/quiz-mia/stitch/13.html (Stitch, projeto "MIA · Quiz de vendas").
import type { KeyboardEvent } from "react";
import type { TelaProps } from "../_quiz/tipos";
import { pontos } from "../_quiz/ui";

const OPCOES = ["Quase todo dia", "Às vezes", "Nunca"];
// aviso que aparece depois da resposta (doc de copy, Tela 13)
const AVISOS = [
  "É o erro que a Dra. Michelly mais vê em quem usa caneta. A vontade de comer some, mas o corpo continua precisando de nutriente.",
  "É por aí que começa. A caneta desliga a fome, mas o corpo continua precisando de tudo.",
  "Bom sinal. Mas comer na hora certa só protege o corpo se o prato tiver o que ele precisa. É o que as próximas respostas mostram.",
];

export default function T13({ q }: TelaProps) {
  const p = pontos(q);
  const escolhe = (i: number) => q.escolhe("pula", i, 2600);
  const tecla = (i: number) => (e: KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      escolhe(i);
    }
  };
  return (
    <div data-tela="13" className="q-h-full">
      <div data-body className="q-bg-surface q-font-body-md q-text-body-md q-text-on-surface q-antialiased q-min-h-full q-flex q-flex-col q-justify-start q-items-center q-selection:bg-primary-fixed q-selection:text-on-primary-fixed">
        <main className="q-flex q-flex-col q-relative q-w-full q-max-w-[520px] q-min-h-screen q-px-margin pt-safe pb-safe q-bg-surface">
          <div className="q-flex q-flex-col q-w-full q-pb-8">
            <div className="q-w-full q-flex q-items-center q-justify-between q-pt-2 q-pb-4">
              <button aria-label="Voltar" onClick={q.voltar} className="q-w-9 q-h-9 q-flex q-items-center q-justify-start q-text-primary-container q-focus:outline-none" type="button">
                <svg className="q-w-5 q-h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" viewBox="0 0 24 24">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <div className="q-w-7 q-h-7 q-rounded-full q-shadow-sm" style={{ background: "radial-gradient(circle at 35% 30%, #89A99D 0%, #46645A 55%, #203E35 100%)", boxShadow: "0 2px 6px -1px rgba(32, 62, 53, 0.25)" }} />
              <div className="q-w-9 q-h-9" />
            </div>
            <div className="q-w-full q-grid q-grid-cols-4 q-gap-1 q-mt-1 q-mb-2.5">
              <div className="q-h-1 q-rounded-full q-overflow-hidden" style={{ backgroundColor: "#D9A441" }} />
              <div className="q-h-1 q-rounded-full q-overflow-hidden q-flex" style={{ backgroundColor: "#DDE3DA" }}>
                <div className="q-h-full q-rounded-full" style={{ width: "88%", backgroundColor: "#D9A441" }} />
              </div>
              <div className="q-h-1 q-rounded-full" style={{ backgroundColor: "#DDE3DA" }} />
              <div className="q-h-1 q-rounded-full" style={{ backgroundColor: "#DDE3DA" }} />
            </div>
            <div className="q-w-full q-flex q-items-center q-justify-between q-font-mono-sm q-text-caption q-mb-6" style={{ color: "#56654D" }}>
              <span>
                {"Os avisos do seu corpo"}
              </span>
              <div className="q-flex q-items-center q-space-x-1.5">
                <span className="q-mr-1">
                  {"alertas"}
                </span>
                {" "}
                <span className="q-w-2 q-h-2 q-rounded-full q-inline-block" style={p[0]} />
                {" "}
                <span className="q-w-2 q-h-2 q-rounded-full q-inline-block" style={p[1]} />
                {" "}
                <span className="q-w-2 q-h-2 q-rounded-full q-inline-block" style={p[2]} />
              </div>
            </div>
            <h1 className="q-font-question-lg q-text-primary-container q-text-[24px] q-leading-[1.25] q-font-semibold q-mb-6">
              {" Você pula refeição quando não está com fome? "}
            </h1>
            <div className="q-w-full q-flex q-flex-col q-space-y-3" id="quiz-options-group">
              {OPCOES.map((txt, i) =>
                q.r.pula === i ? (
                  <div key={i} aria-checked="true" onClick={() => escolhe(i)} onKeyDown={tecla(i)} className="q-w-full q-flex q-items-center q-justify-between q-rounded-[16px] q-px-5 q-py-[18px] q-cursor-pointer q-transition-all q-duration-150 q-select-none q-shadow-sm" role="radio" style={{ backgroundColor: "#FBF1DC", border: "2px solid #203E35" }} tabIndex={0}>
                    <span className="q-text-[16px] q-leading-[22px] q-font-medium" style={{ color: "#203E35" }}>
                      {txt}
                    </span>
                    <div className="q-w-[22px] q-h-[22px] q-rounded-full q-flex q-items-center q-justify-center q-shrink-0" style={{ backgroundColor: "#D9A441" }}>
                      <svg className="q-w-3.5 q-h-3.5 q-text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" viewBox="0 0 16 16">
                        <polyline points="3.5 8.5 6.5 11.5 12.5 4.5" />
                      </svg>
                    </div>
                  </div>
                ) : (
                  <div key={i} aria-checked="false" onClick={() => escolhe(i)} onKeyDown={tecla(i)} className="q-w-full q-flex q-items-center q-justify-between q-rounded-[16px] q-px-5 q-py-[18px] q-cursor-pointer q-transition-all q-duration-150 q-select-none q-shadow-sm" role="radio" style={{ backgroundColor: "#FFFFFF", border: "1px solid #ECEEE9" }} tabIndex={0}>
                    <span className="q-text-[16px] q-leading-[22px] q-font-medium" style={{ color: "#203E35" }}>
                      {txt}
                    </span>
                    <div className="q-w-5 q-h-5 q-rounded-full q-shrink-0" style={{ backgroundColor: "#DDE3DA" }} />
                  </div>
                ),
              )}
            </div>
            {q.r.pula !== undefined && (
              <div className="q-w-full q-mt-4 q-p-4 q-rounded-[12px] q-flex q-items-start" style={{ backgroundColor: "#F8EFDC", color: "#7A5619" }}>
                <p className="q-text-[14px] q-leading-[1.4] q-m-0 q-font-normal">
                  {AVISOS[q.r.pula]}
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
