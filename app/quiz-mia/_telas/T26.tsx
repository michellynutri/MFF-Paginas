// Tela 26 — convertida de scripts/quiz-mia/stitch/26.html (Stitch, projeto "MIA · Quiz de vendas").
import { useEffect, useRef, useState } from "react";
import type { TelaProps } from "../_quiz/tipos";
import { FASE_NOME } from "../_quiz/regras";
import { FRASES } from "../_quiz/depoimentos";
import { primeiroNome } from "../_quiz/ui";

const DURACAO = 8000; // ms de 0% a 100% (dá tempo de ler os 3 depoimentos)
const VOLTA = 402.12; // comprimento do anel (2π·64)
const suave = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2); // easeInOutCubic

/** cada item ocupa 20% do anel: pendente antes, em andamento durante, feito depois */
const estado = (i: number, pct: number) => (pct >= (i + 1) * 20 ? "feito" : pct >= i * 20 ? "andamento" : "pendente");

export default function T26({ q }: TelaProps) {
  // na prévia fica parado em 72%, como na prancheta
  const [pct, setPct] = useState(q.previa ? 72 : 0);
  const proxima = useRef(q.proxima);
  proxima.current = q.proxima;
  useEffect(() => {
    if (q.previa) return;
    let raf = 0;
    let fim: ReturnType<typeof setTimeout> | undefined;
    const t0 = performance.now();
    const passo = (agora: number) => {
      const t = Math.max(0, Math.min(1, (agora - t0) / DURACAO)); // o 1º quadro do rAF pode vir antes de t0
      setPct(suave(t) * 100);
      if (t < 1) raf = requestAnimationFrame(passo);
      else fim = setTimeout(() => proxima.current(), 500);
    };
    raf = requestAnimationFrame(passo);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(fim);
    };
  }, [q.previa]);
  const itens = [
    `Fase da caneta identificada: ${FASE_NOME[q.r.fase ?? 1]}`,
    "Sinais de perda de músculo conferidos",
    "Sinais de Fome Oculta conferidos",
    "AFLs do seu dia a dia contados",
    "Primeiro dia do seu plano sendo montado",
  ];
  const arco = ((VOLTA * pct) / 100).toFixed(2);
  // um depoimento por terço do carregamento
  const d = Math.max(0, Math.min(FRASES.length - 1, Math.floor((pct / 100) * FRASES.length)));
  return (
    <div data-tela="26" className="q-h-full">
      <div data-body className="q-subpixel-antialiased q-min-h-full q-bg-surface q-text-on-surface q-flex q-flex-col pt-safe pb-safe pl-safe pr-safe q-selection:bg-primary-fixed q-selection:text-on-primary-fixed">
        <main className="q-flex-1 q-flex q-flex-col q-justify-center q-items-center q-px-margin q-w-full q-max-w-[520px] q-mx-auto q-bg-surface">
          <div className="q-flex q-flex-col q-w-full q-items-center q-pb-8">
            <div className="q-flex q-justify-center q-items-center q-w-full q-pt-4 q-pb-2">
              <div className="q-relative q-w-8 q-h-8 q-rounded-full q-shadow-sm q-flex q-items-center q-justify-center q-bg-gradient-to-tr q-from-[#203E35] q-via-[#3E6351] q-to-[#6E9580] q-overflow-hidden" style={{ boxShadow: "0 4px 12px -2px rgba(62, 99, 81, 0.35), inset 0 1px 2px rgba(255, 255, 255, 0.45), inset -2px -2px 4px rgba(0, 0, 0, 0.25)" }}>
                <div className="q-absolute q--top-1 q--right-1 q-w-4 q-h-4 q-rounded-full q-bg-gradient-to-br q-from-[#FFE9B3] q-to-transparent q-opacity-60 q-blur-[1px]" />
              </div>
            </div>
            <h1 className="q-font-display-lg-mobile q-text-display-lg-mobile q-text-primary-container q-text-center q-mt-6 q-mb-7 q-px-4">
              {` Montando o diagnóstico da ${primeiroNome(q.r.nome)}. `}
            </h1>
            <div className="q-relative q-w-[150px] q-h-[150px] q-flex q-items-center q-justify-center q-mb-7">
              <svg aria-hidden="true" className="q-w-full q-h-full q--rotate-90 q-transform" viewBox="0 0 150 150">
                <circle cx="75" cy="75" fill="none" r="64" stroke="#DDE3DA" strokeWidth="9" />
                <circle cx="75" cy="75" fill="none" r="64" stroke="#D9A441" strokeDasharray={`${arco} ${VOLTA}`} strokeLinecap="round" strokeWidth="9" />
              </svg>
              <div className="q-absolute q-inset-0 q-flex q-items-center q-justify-center q-pointer-events-none">
                <span className="q-font-button-label q-text-[34px] q-leading-none q-font-semibold q-text-primary-container q-tracking-tight">
                  {` ${Math.round(pct)}% `}
                </span>
              </div>
            </div>
            <div className="q-w-full q-bg-surface-container-lowest q-rounded-[16px] q-shadow-sm q-overflow-hidden" style={{ boxShadow: "0 1px 2px rgba(32, 62, 53, 0.05), 0 8px 24px -16px rgba(32, 62, 53, 0.18)", border: "1px solid #DDE3DA" }}>
              {itens.map((txt, i) => {
                const e = estado(i, pct);
                const borda = i < itens.length - 1 ? { borderBottom: "1px solid #DDE3DA" } : undefined;
                if (e === "feito")
                  return (
                    <div key={i} className="q-flex q-items-center q-px-4 q-py-3 q-min-h-[48px]" style={borda}>
                      <div className="q-w-5 q-h-5 q-rounded-full q-bg-[#2F6B45] q-flex q-items-center q-justify-center q-flex-shrink-0 q-mr-3">
                        <svg className="q-w-3 q-h-3 q-text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span className="q-font-option-label q-text-[14px] q-leading-snug q-font-medium q-text-primary-container">
                        {` ${txt} `}
                      </span>
                    </div>
                  );
                if (e === "andamento")
                  return (
                    <div key={i} className="q-flex q-items-center q-px-4 q-py-3 q-min-h-[48px]" style={borda}>
                      <div className="q-w-5 q-h-5 q-rounded-full q-bg-white q-flex q-items-center q-justify-center q-flex-shrink-0 q-mr-3" style={{ border: "2.5px solid #D9A441" }}>
                        <div className="q-w-[7px] q-h-[7px] q-rounded-full q-bg-[#D9A441]" />
                      </div>
                      <span className="q-font-button-label q-text-[14px] q-leading-snug q-font-semibold q-text-primary-container">
                        {` ${txt} `}
                      </span>
                    </div>
                  );
                return (
                  <div key={i} className="q-flex q-items-center q-px-4 q-py-3 q-min-h-[48px]" style={borda}>
                    <div className="q-w-5 q-h-5 q-rounded-full q-bg-white q-flex q-items-center q-justify-center q-flex-shrink-0 q-mr-3" style={{ border: "1.5px solid #DDE3DA" }} />
                    <span className="q-font-body-md q-text-[14px] q-leading-snug q-font-normal q-text-[#56654D]">
                      {` ${txt} `}
                    </span>
                  </div>
                );
              })}
            </div>
            <div key={d} className="quiz-depo q-w-full q-bg-[#EDF0E9] q-rounded-[14px] q-p-[16px_18px] q-mt-5">
              <p className="q-font-headline-md q-italic q-text-[19px] q-leading-[1.35] q-text-primary-container">
                {`“${FRASES[d].texto}”`}
              </p>
              <p className="q-font-caption q-text-[13px] q-leading-normal q-text-[#56654D] q-mt-2">
                {`${FRASES[d].nome}, aluna da MIA`}
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
