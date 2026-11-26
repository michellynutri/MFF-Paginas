// Tela 20 — convertida de scripts/quiz-mia/stitch/20.html (Stitch, projeto "MIA · Quiz de vendas").
import type { TelaProps } from "../_quiz/tipos";
import { pontos } from "../_quiz/ui";

const OPCOES = [
  " Fico de fora, só olhando ",
  " Como e depois me culpo ",
  " Como, penso “estraguei tudo” e chuto o balde ",
  " Como e sigo a vida ",
];

export default function T20({ q }: TelaProps) {
  const p = pontos(q);
  return (
    <div data-tela="20" className="q-h-full">
      <div data-body className="q-bg-surface q-font-body-md q-text-body-md q-text-on-surface q-antialiased q-min-h-screen q-flex q-flex-col pt-safe pb-safe">
        <main className="q-flex-1 q-flex q-flex-col q-relative q-w-full q-bg-surface">
          <div className="q-flex q-flex-col q-w-full q-max-w-[390px] q-mx-auto q-px-5 q-pb-8">
            <header className="q-w-full q-pt-2 q-flex q-flex-col q-gap-3">
              <div className="q-relative q-flex q-items-center q-justify-between q-w-full q-h-8">
                <button aria-label="Voltar" onClick={q.voltar} className="q-p-1 q--ml-1 q-text-primary-container q-flex q-items-center q-justify-center" type="button">
                  <span className="material-symbols-outlined q-text-[22px] q-leading-none">
                    {"arrow_back_ios_new"}
                  </span>
                </button>
                <div className="q-absolute q-left-1/2 q--translate-x-1/2 q-w-7 q-h-7 q-rounded-full q-shadow-[0_2px_6px_rgba(32,62,53,0.25)]" style={{ background: "radial-gradient(circle at 35% 35%, #769b87 0%, #406352 50%, #203e35 100%)" }} />
                <div className="q-w-6" />
              </div>
              <div className="q-grid q-grid-cols-4 q-gap-[6px] q-w-full q-pt-1">
                <div className="q-h-1 q-rounded-full q-bg-[#D9A441]" />
                <div className="q-h-1 q-rounded-full q-bg-[#D9A441]" />
                <div className="q-h-1 q-rounded-full q-bg-[#D9A441]" />
                <div className="q-h-1 q-rounded-full q-bg-[#e0e3de]" />
              </div>
              <div className="q-flex q-items-center q-justify-between q-w-full q-font-body-md q-text-[12px] q-leading-none q-text-[#56654D] q-pt-0.5">
                <span className="q-tracking-normal q-font-medium">
                  {"O que cabe no seu dia"}
                </span>
                <div className="q-flex q-items-center q-gap-1.5">
                  <span className="q-font-medium">
                    {"alertas"}
                  </span>
                  <div className="q-flex q-items-center q-gap-[4px]">
                    <span className="q-w-[6px] q-h-[6px] q-rounded-full q-inline-block" style={p[0]} />
                    {" "}
                    <span className="q-w-[6px] q-h-[6px] q-rounded-full q-inline-block" style={p[1]} />
                    {" "}
                    <span className="q-w-[6px] q-h-[6px] q-rounded-full q-inline-block" style={p[2]} />
                  </div>
                </div>
              </div>
            </header>
            <section className="q-mt-7 q-mb-6">
              <h1 className="q-font-body-md q-text-[24px] q-font-semibold q-text-[#203E35] q-leading-tight q-tracking-[-0.01em]">
                {" Chega o fim de semana e tem pizza, churrasco ou hambúrguer. O que você faz? "}
              </h1>
            </section>
            <section aria-label="Opções de comportamento" className="q-flex q-flex-col q-gap-3 q-w-full" role="radiogroup">
              {OPCOES.map((txt, i) =>
                q.r.pizza === i ? (
                  <div key={i} role="radio" aria-checked="true" tabIndex={0} onClick={() => q.escolhe("pizza", i, 2600)} className="q-w-full q-bg-[#FBF1DC] q-rounded-2xl q-p-[18px_20px] q-flex q-items-center q-justify-between q-shadow-[0_2px_8px_rgba(32,62,53,0.08)] q-cursor-pointer" style={{ outline: "2px solid #203E35" }}>
                    <span className="q-font-body-md q-text-[16px] q-font-semibold q-text-[#203E35] q-pr-3">
                      {txt}
                    </span>
                    <div className="q-w-[22px] q-h-[22px] q-rounded-full q-bg-[#D9A441] q-flex q-items-center q-justify-center q-flex-shrink-0">
                      <span className="material-symbols-outlined q-text-[15px] q-text-white q-font-bold q-leading-none q-select-none">
                        {"check"}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div key={i} role="radio" aria-checked="false" tabIndex={0} onClick={() => q.escolhe("pizza", i, 2600)} className="q-w-full q-bg-[#FFFFFF] q-rounded-2xl q-p-[18px_20px] q-flex q-items-center q-justify-between q-shadow-[0_1px_3px_rgba(32,62,53,0.04)] q-cursor-pointer" style={{ outline: "1px solid rgba(0,0,0,0.06)" }}>
                    <span className="q-font-body-md q-text-[16px] q-font-medium q-text-[#203E35] q-pr-3">
                      {txt}
                    </span>
                    <div className="q-w-[22px] q-h-[22px] q-rounded-full q-flex-shrink-0" style={{ border: "1.5px solid #d9dad7" }} />
                  </div>
                ),
              )}
            </section>
            {q.r.pizza !== undefined && (
              <aside className="q-mt-4 q-w-full q-bg-[#E5F1E8] q-text-[#2F6B45] q-rounded-[14px] q-p-[14px_16px] q-flex q-items-start q-gap-2.5 q-shadow-sm">
                <span className="material-symbols-outlined q-text-[20px] q-leading-[22px] q-flex-shrink-0 q-text-[#2F6B45]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {" verified_user "}
                </span>
                <p className="q-font-body-md q-text-[14px] q-leading-relaxed q-text-[#2F6B45] q-font-normal q-m-0">
                  {" Tudo isso pode continuar, desde que você tenha um corpo forte. Quem não aguenta é o corpo fraco. "}
                </p>
              </aside>
            )}
            <div className="q-h-10 q-w-full" />
          </div>
        </main>
      </div>
    </div>
  );
}
