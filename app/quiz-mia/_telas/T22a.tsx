// Tela 22a — convertida de scripts/quiz-mia/stitch/22a.html (Stitch, projeto "MIA · Quiz de vendas").
import { useEffect, useRef } from "react";
import type { Respostas, TelaProps } from "../_quiz/tipos";
import { pontos } from "../_quiz/ui";

type Campo = "idade" | "altura";
const LIMITE: Record<Campo, [number, number]> = { idade: [18, 90], altura: [140, 200] };

/** − e + que repetem enquanto ela segura (começa em 350 ms, depois a cada 70 ms) */
function useSegura(q: TelaProps["q"]) {
  const atual = useRef<Respostas>(q.r);
  atual.current = q.r;
  const t = useRef<{ espera?: ReturnType<typeof setTimeout>; repete?: ReturnType<typeof setInterval> }>({});
  const para = () => {
    clearTimeout(t.current.espera);
    clearInterval(t.current.repete);
    t.current = {};
  };
  useEffect(() => para, []);
  const passo = (k: Campo, d: number) => {
    const [min, max] = LIMITE[k];
    const v = Math.min(max, Math.max(min, atual.current[k] + d));
    if (v === atual.current[k]) return;
    atual.current = { ...atual.current, [k]: v };
    q.set({ [k]: v });
  };
  return (k: Campo, d: number) => ({
    onPointerDown: (e: React.PointerEvent) => {
      if (e.button !== 0) return;
      para();
      passo(k, d);
      t.current.espera = setTimeout(() => {
        t.current.repete = setInterval(() => passo(k, d), 70);
      }, 350);
    },
    onPointerUp: para,
    onPointerLeave: para,
    onPointerCancel: para,
    onContextMenu: (e: React.MouseEvent) => e.preventDefault(),
    // teclado (Enter/Espaço) gera clique sem ponteiro
    onClick: (e: React.MouseEvent) => {
      if (e.detail === 0) passo(k, d);
    },
  });
}

export default function T22a({ q }: TelaProps) {
  const segura = useSegura(q);
  const p = pontos(q);
  const altura = (q.r.altura / 100).toFixed(2).replace(".", ",");
  return (
    <div data-tela="22a" className="q-h-full">
      <div data-body className="q-bg-surface q-font-body-md q-text-body-md q-text-on-surface q-antialiased q-flex q-flex-col q-min-h-screen q-selection:bg-primary-fixed q-selection:text-on-primary-fixed">
        <header className="q-fixed q-top-0 q-w-full q-z-50 pt-safe q-bg-surface/80 q-backdrop-blur-xl q-shadow-[0_1px_8px_rgba(32,62,53,0.04)]">
          <div className="q-h-14 q-px-margin q-flex q-items-center q-justify-between q-max-w-[520px] q-mx-auto q-w-full">
            <button aria-label="Voltar" onClick={q.voltar} type="button" className="q-w-11 q-h-11 q--ml-2 q-flex q-items-center q-justify-center q-text-on-surface q-hover:text-on-surface-variant q-transition-colors q-active:opacity-70">
              <span className="material-symbols-outlined q-text-[22px]">
                {"arrow_back_ios_new"}
              </span>
            </button>
            <div className="q-flex q-items-center q-justify-center q-flex-1">
              <div className="q-w-7 q-h-7 q-rounded-full q-shadow-[inset_-2px_-2px_6px_rgba(8,40,32,0.45),inset_2px_2px_6px_rgba(200,234,221,0.65),0_2px_6px_rgba(32,62,53,0.18)] q-bg-gradient-to-br q-from-[#c8eadd] q-via-[#46645a] q-to-[#203e35]" />
            </div>
            <div className="q-w-11 q-h-11 q--mr-2" />
          </div>
        </header>
        <main className="q-flex-1 q-flex q-flex-col q-relative q-w-full q-max-w-[520px] q-mx-auto q-px-margin q-pt-14 q-pb-28 q-bg-surface">
          <div className="q-flex q-flex-col q-w-full q-max-w-[390px] q-mx-auto q-min-w-0">
            <div className="q-flex q-flex-col q-w-full q-mb-6">
              <div className="q-grid q-grid-cols-4 q-gap-2 q-h-1 q-w-full">
                <div className="q-h-full q-rounded-full q-bg-secondary" />
                <div className="q-h-full q-rounded-full q-bg-secondary" />
                <div className="q-h-full q-rounded-full q-bg-secondary" />
                <div className="q-h-full q-rounded-full" style={{ background: "linear-gradient(to right, #D9A441 32%, #DDE3DA 32%)" }} />
              </div>
              <div className="q-flex q-items-center q-justify-between q-mt-2">
                <span className="q-font-body-md q-text-[12px] q-leading-none q-text-[#56654D]">
                  {"O seu plano"}
                </span>
                <div className="q-flex q-items-center q-gap-1.5">
                  <span className="q-font-body-md q-text-[12px] q-leading-none q-text-[#56654D]">
                    {"alertas"}
                  </span>
                  <div className="q-flex q-items-center q-gap-1">
                    <span className="q-w-[6px] q-h-[6px] q-rounded-full q-block" style={p[0]} />
                    {" "}
                    <span className="q-w-[6px] q-h-[6px] q-rounded-full q-block" style={p[1]} />
                    {" "}
                    <span className="q-w-[6px] q-h-[6px] q-rounded-full q-block" style={p[2]} />
                  </div>
                </div>
              </div>
            </div>
            <h1 className="q-font-body-md q-text-[24px] q-font-semibold q-text-[#203E35] q-leading-tight q-tracking-[-0.01em]">
              {" Agora, a sua idade e a sua altura. "}
            </h1>
            <p className="q-font-body-md q-text-[14px] q-leading-[1.4] q-text-[#56654D] q-mt-2">
              {" Com elas o plano calcula quanto o seu corpo gasta por dia. "}
            </p>
            <div className="q-mt-6 q-w-full q-bg-surface-container-lowest q-rounded-[16px] q-shadow-[0_2px_8px_rgba(0,0,0,0.03)] q-overflow-hidden">
              <div className="q-p-4 q-flex q-items-center q-justify-between">
                <div className="q-flex q-flex-col">
                  <span className="q-font-body-md q-text-[13px] q-font-medium q-text-[#56654D] q-leading-none q-mb-1.5">
                    {"Idade"}
                  </span>
                  <div className="q-flex q-items-baseline">
                    <span className="q-font-body-md q-text-[26px] q-font-semibold q-text-[#203E35] q-leading-none" id="val-idade">
                      {q.r.idade}
                    </span>
                    {" "}
                    <span className="q-font-body-md q-text-[16px] q-font-medium q-text-[#56654D] q-ml-0.5">
                      {"anos"}
                    </span>
                  </div>
                </div>
                <div className="q-flex q-items-center q-gap-[10px]">
                  <button aria-label="Diminuir idade" {...segura("idade", -1)} style={{ touchAction: "manipulation" }} className="q-w-11 q-h-11 q-rounded-full q-bg-[#EDF0E9] q-flex q-items-center q-justify-center q-text-[22px] q-font-medium q-text-primary-container q-active:scale-95 q-transition-transform q-select-none" type="button">
                    {"−"}
                  </button>
                  {" "}
                  <button aria-label="Aumentar idade" {...segura("idade", 1)} style={{ touchAction: "manipulation" }} className="q-w-11 q-h-11 q-rounded-full q-bg-[#EDF0E9] q-flex q-items-center q-justify-center q-text-[22px] q-font-medium q-text-primary-container q-active:scale-95 q-transition-transform q-select-none" type="button">
                    {"+"}
                  </button>
                </div>
              </div>
              <div className="q-h-[1px] q-w-full q-bg-[#DDE3DA]" />
              <div className="q-p-4 q-flex q-items-center q-justify-between">
                <div className="q-flex q-flex-col">
                  <span className="q-font-body-md q-text-[13px] q-font-medium q-text-[#56654D] q-leading-none q-mb-1.5">
                    {"Altura"}
                  </span>
                  <div className="q-flex q-items-baseline">
                    <span className="q-font-body-md q-text-[26px] q-font-semibold q-text-[#203E35] q-leading-none" id="val-altura">
                      {altura}
                    </span>
                    {" "}
                    <span className="q-font-body-md q-text-[16px] q-font-medium q-text-[#56654D] q-ml-0.5">
                      {"m"}
                    </span>
                  </div>
                </div>
                <div className="q-flex q-items-center q-gap-[10px]">
                  <button aria-label="Diminuir altura" {...segura("altura", -1)} style={{ touchAction: "manipulation" }} className="q-w-11 q-h-11 q-rounded-full q-bg-[#EDF0E9] q-flex q-items-center q-justify-center q-text-[22px] q-font-medium q-text-primary-container q-active:scale-95 q-transition-transform q-select-none" type="button">
                    {"−"}
                  </button>
                  {" "}
                  <button aria-label="Aumentar altura" {...segura("altura", 1)} style={{ touchAction: "manipulation" }} className="q-w-11 q-h-11 q-rounded-full q-bg-[#EDF0E9] q-flex q-items-center q-justify-center q-text-[22px] q-font-medium q-text-primary-container q-active:scale-95 q-transition-transform q-select-none" type="button">
                    {"+"}
                  </button>
                </div>
              </div>
            </div>
            <div className="q-mt-4 q-flex q-items-center q-gap-1.5">
              <svg className="q-w-3.5 q-h-3.5 q-shrink-0" fill="none" stroke="#56654D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                <rect height="11" rx="2" ry="2" width="18" x="3" y="11" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              {" "}
              <span className="q-font-body-md q-text-[12px] q-leading-none q-text-[#56654D]">
                {" usados só para calcular o seu plano "}
              </span>
            </div>
          </div>
        </main>
        <footer className="q-fixed q-bottom-0 q-w-full q-z-50 pb-safe q-bg-surface/80 q-backdrop-blur-xl q-shadow-[0_-2px_12px_rgba(32,62,53,0.03)]">
          <div className="q-max-w-[520px] q-mx-auto q-px-margin q-py-space-md q-flex q-flex-col q-gap-space-xs">
            <button onClick={q.proxima} className="q-w-full q-h-[54px] q-rounded-full q-bg-[#203E35] q-text-on-primary q-font-button-label q-text-[16px] q-font-semibold q-shadow-[0_4px_12px_rgba(32,62,53,0.2)] q-active:scale-[0.99] q-transition-transform q-flex q-items-center q-justify-center" type="button">
              {"Continuar"}
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
