// Tela 07a — convertida de scripts/quiz-mia/stitch/07a.html (Stitch, projeto "MIA · Quiz de vendas").
import { useEffect, useRef, useState } from "react";
import type { TelaProps } from "../_quiz/tipos";
import { pontos } from "../_quiz/ui";

const INICIO = 7; // segundos da contagem (dá para ver a animação duas vezes)
const VOLTA = 263.89; // comprimento do anel (2π·42)
const QUADRO_MS = [1500, 2100]; // braço levantado, mão apertando

/** contorno dourado no passo que a ilustração está mostrando */
const destaque = (ativo: boolean) => ({
  boxShadow: ativo ? "0 0 0 2px #D9A441" : "0 0 0 2px transparent",
  transition: "box-shadow .35s ease",
});

export default function T07a({ q }: TelaProps) {
  // quadro da ilustração: 0 = levanta o braço, 1 = aperta embaixo
  const [passo, setPasso] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setPasso((x) => 1 - x), QUADRO_MS[passo]);
    return () => clearTimeout(t);
  }, [passo]);
  // na prévia fica parada em 3, como na prancheta
  const [n, setN] = useState(q.previa ? 3 : INICIO);
  const proxima = useRef(q.proxima);
  proxima.current = q.proxima;
  useEffect(() => {
    if (q.previa) return;
    if (n <= 0) {
      proxima.current();
      return;
    }
    const t = setTimeout(() => setN((x) => x - 1), 1000);
    return () => clearTimeout(t);
  }, [n, q.previa]);
  const p = pontos(q);
  // o arco acompanha a contagem (na prévia, o mesmo arco da prancheta)
  const offset = q.previa ? 88 : VOLTA * (1 - n / INICIO);
  return (
    <div data-tela="07a">
      <div data-body className="q-bg-surface q-font-body-md q-text-on-surface q-antialiased q-min-h-screen q-flex q-flex-col">
        <header className="q-fixed q-top-0 q-w-full q-z-50 q-bg-surface/85 q-backdrop-blur-xl q-shadow-[0_1px_8px_rgba(32,62,53,0.04)] pt-safe">
          <div className="q-max-w-[390px] q-mx-auto q-px-margin q-flex q-flex-col q-justify-between q-py-space-sm">
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
                <span className="q-font-mono-sm q-text-mono-sm q-tracking-normal">
                  {"Os avisos do seu corpo"}
                </span>
                <div className="q-flex q-items-center q-gap-space-xs">
                  <span className="q-font-caption q-text-caption q-lowercase q-text-on-surface-variant">
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
          <div className="q-flex q-flex-col q-w-full q-pb-space-xl q-pt-3 q-gap-space-lg">
            <div className="q-w-full">
              <h1 className="q-text-[24px] q-leading-[1.25] q-font-semibold q-text-[#203E35] q-tracking-tight">
                {"Levante o braço e aperte a gordurinha embaixo dele."}
              </h1>
            </div>
            <div className="q-flex q-flex-col q-gap-gutter q-w-full">
              <div className="q-flex q-items-center q-gap-space-md q-p-space-md q-rounded-xl q-bg-surface-container q-shadow-sm" style={destaque(passo === 0)}>
                <div className="q-w-[26px] q-h-[26px] q-min-w-[26px] q-rounded-full q-bg-primary-container q-text-on-primary q-flex q-items-center q-justify-center q-font-button-label q-text-[14px] q-font-semibold q-leading-none q-shadow-sm">
                  {"1"}
                </div>
                <p className="q-font-option-label q-text-option-label q-text-primary-container q-leading-relaxed">
                  {"Levante um braço, como quem dá tchau."}
                </p>
              </div>
              <div className="q-flex q-items-center q-gap-space-md q-p-space-md q-rounded-xl q-bg-surface-container q-shadow-sm" style={destaque(passo === 1)}>
                <div className="q-w-[26px] q-h-[26px] q-min-w-[26px] q-rounded-full q-bg-primary-container q-text-on-primary q-flex q-items-center q-justify-center q-font-button-label q-text-[14px] q-font-semibold q-leading-none q-shadow-sm">
                  {"2"}
                </div>
                <p className="q-font-option-label q-text-option-label q-text-primary-container q-leading-relaxed">
                  {"Com a outra mão, aperte a parte de baixo."}
                </p>
              </div>
            </div>
            {/* ilustração em dois quadros (levanta o braço → aperta embaixo), em loop, acendendo o passo da vez */}
            <div className="quiz-braco" aria-hidden="true">
              <img src="/images/quiz-mia/braco-a.webp" alt="" width={720} height={601} style={{ opacity: passo === 0 ? 1 : 0 }} />
              <img src="/images/quiz-mia/braco-b.webp" alt="" width={720} height={601} style={{ opacity: passo === 1 ? 1 : 0 }} />
              {passo === 1 && <span className="quiz-braco-pulso" style={{ left: "33%", top: "56%" }} />}
            </div>
            <div className="q-flex q-flex-col q-items-center q-justify-center q-pt-2">
              <div className="q-relative q-w-[100px] q-h-[100px] q-flex q-items-center q-justify-center">
                <svg className="q-w-full q-h-full q--rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="42" stroke="#E2E8DF" strokeWidth="4" fill="none" />
                  <circle cx="50" cy="50" r="42" stroke="#D9A441" strokeWidth="4.5" fill="none" strokeLinecap="round" strokeDasharray="263.89" strokeDashoffset={offset} style={{ transition: q.previa ? undefined : "stroke-dashoffset 1s linear" }} />
                </svg>
                <span className="q-absolute q-text-[34px] q-font-semibold q-text-[#203E35] q-tracking-tight">
                  {n}
                </span>
              </div>
              <p className="q-mt-3 q-text-[13px] q-text-[#56654D] q-text-center q-font-normal q-tracking-normal">
                {`As respostas aparecem em ${n} ${n === 1 ? "segundo" : "segundos"}.`}
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
