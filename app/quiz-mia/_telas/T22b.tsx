// Tela 22b — convertida de scripts/quiz-mia/stitch/22b.html (Stitch, projeto "MIA · Quiz de vendas").
import { useEffect, useRef } from "react";
import type { Respostas, TelaProps } from "../_quiz/tipos";
import { pontos } from "../_quiz/ui";

type Campo = "peso" | "meta";
const LIMITE: Record<Campo, [number, number]> = { peso: [40, 200], meta: [40, 200] };

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

export default function T22b({ q }: TelaProps) {
  const segura = useSegura(q);
  const p = pontos(q);
  const falta = q.r.peso - q.r.meta;
  return (
    <div data-tela="22b">
      <div data-body className="q-min-h-screen q-flex q-justify-center q-bg-[#F6F7F4]">
        <div className="q-w-[390px] q-min-h-screen q-bg-[#F6F7F4] q-flex q-flex-col q-justify-between q-relative q-px-5 q-pt-4 q-pb-6 q-box-border">
          <div>
            <div className="q-relative q-flex q-items-center q-justify-center q-h-10 q-mb-3">
              <button type="button" aria-label="Voltar" onClick={q.voltar} className="q-absolute q-left-0 q-top-1/2 q--translate-y-1/2 q-w-10 q-h-10 q-flex q-items-center q-justify-center q-text-[#203E35] q-focus:outline-none">
                <span className="material-symbols-outlined q-text-[24px]">
                  {"chevron_left"}
                </span>
              </button>
              <div className="sphere-logo" aria-label="MIA logo" />
            </div>
            <div className="q-grid q-grid-cols-4 q-gap-1.5 q-w-full q-mb-2">
              <div className="q-h-1 q-bg-[#D9A441] q-rounded-full" />
              <div className="q-h-1 q-bg-[#D9A441] q-rounded-full" />
              <div className="q-h-1 q-bg-[#D9A441] q-rounded-full" />
              <div className="q-h-1 q-bg-[#DDE3DA] q-rounded-full q-overflow-hidden">
                <div className="q-h-full q-bg-[#D9A441] q-w-[40%] q-rounded-full" />
              </div>
            </div>
            <div className="q-flex q-items-center q-justify-between q-text-[12px] q-font-medium q-text-[#56654D] q-mb-6">
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
            <div className="q-mb-6">
              <h1 className="q-text-[24px] q-font-semibold q-leading-[1.25] q-text-[#203E35] q-mb-2 q-tracking-tight">
                {" E o seu peso: hoje e onde você quer chegar. "}
              </h1>
              <p className="q-text-[16px] q-leading-[1.4] q-text-[#56654D]">
                {" Com eles o plano calcula os nutrientes, a ingestão de água e as suas porções. "}
              </p>
            </div>
            <div className="q-bg-white q-rounded-[16px] q-shadow-sm q-border q-border-[#E8EDE6] q-p-4 q-mb-3">
              <div className="q-flex q-items-center q-justify-between q-py-2 q-pb-4">
                <div className="q-flex q-flex-col">
                  <span className="q-text-[13px] q-text-[#56654D] q-mb-0.5">
                    {"Peso hoje"}
                  </span>
                  {" "}
                  <span className="q-text-[26px] q-font-semibold q-text-[#203E35] q-leading-none">
                    {`${q.r.peso} kg`}
                  </span>
                </div>
                <div className="q-flex q-items-center q-gap-2">
                  <button type="button" aria-label="Diminuir peso hoje" {...segura("peso", -1)} style={{ touchAction: "manipulation" }} className="q-w-[44px] q-h-[44px] q-rounded-full q-bg-[#EDF0E9] q-text-[#203E35] q-text-[22px] q-font-medium q-flex q-items-center q-justify-center q-active:bg-[#e2e7dd] q-transition-colors q-focus:outline-none">
                    {" − "}
                  </button>
                  {" "}
                  <button type="button" aria-label="Aumentar peso hoje" {...segura("peso", 1)} style={{ touchAction: "manipulation" }} className="q-w-[44px] q-h-[44px] q-rounded-full q-bg-[#EDF0E9] q-text-[#203E35] q-text-[22px] q-font-medium q-flex q-items-center q-justify-center q-active:bg-[#e2e7dd] q-transition-colors q-focus:outline-none">
                    {" + "}
                  </button>
                </div>
              </div>
              <div className="q-h-[1px] q-bg-[#EEF2EC] q-w-full" />
              <div className="q-flex q-items-center q-justify-between q-py-2 q-pt-4">
                <div className="q-flex q-flex-col">
                  <span className="q-text-[13px] q-text-[#56654D] q-mb-0.5">
                    {"Peso que você quer chegar"}
                  </span>
                  {" "}
                  <span className="q-text-[26px] q-font-semibold q-text-[#203E35] q-leading-none">
                    {`${q.r.meta} kg`}
                  </span>
                </div>
                <div className="q-flex q-items-center q-gap-2">
                  <button type="button" aria-label="Diminuir meta de peso" {...segura("meta", -1)} style={{ touchAction: "manipulation" }} className="q-w-[44px] q-h-[44px] q-rounded-full q-bg-[#EDF0E9] q-text-[#203E35] q-text-[22px] q-font-medium q-flex q-items-center q-justify-center q-active:bg-[#e2e7dd] q-transition-colors q-focus:outline-none">
                    {" − "}
                  </button>
                  {" "}
                  <button type="button" aria-label="Aumentar meta de peso" {...segura("meta", 1)} style={{ touchAction: "manipulation" }} className="q-w-[44px] q-h-[44px] q-rounded-full q-bg-[#EDF0E9] q-text-[#203E35] q-text-[22px] q-font-medium q-flex q-items-center q-justify-center q-active:bg-[#e2e7dd] q-transition-colors q-focus:outline-none">
                    {" + "}
                  </button>
                </div>
              </div>
            </div>
            {falta > 0 && (
              <div className="q-bg-[#FBF1DC] q-rounded-[12px] q-px-4 q-py-3 q-mb-4">
                <p className="q-text-[14px] q-text-[#8A6418] q-font-medium q-leading-snug">
                  {` São ${falta} kg até a sua meta. `}
                </p>
              </div>
            )}
            <div className="q-flex q-items-center q-justify-center q-gap-1.5 q-text-[12px] q-text-[#56654D]">
              <span className="material-symbols-outlined q-text-[15px] q-text-[#56654D]">
                {"lock"}
              </span>
              {" "}
              <span>
                {"usados só para calcular o seu plano"}
              </span>
            </div>
          </div>
          <div className="q-w-full q-pt-4">
            <button type="button" onClick={q.proxima} className="q-w-full q-h-[52px] q-bg-[#203E35] q-text-white q-rounded-[14px] q-font-semibold q-text-[16px] q-flex q-items-center q-justify-center q-active:bg-[#183329] q-transition-colors q-shadow-sm q-focus:outline-none">
              {" Continuar "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
