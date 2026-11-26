// Tela 25 — convertida de scripts/quiz-mia/stitch/25.html (Stitch, projeto "MIA · Quiz de vendas").
import type { TelaProps } from "../_quiz/tipos";
import { pontos } from "../_quiz/ui";

export default function T25({ q }: TelaProps) {
  const p = pontos(q);
  const nome = q.r.nome.trim();
  const envia = () => {
    if (!nome) return;
    q.set({ nome });
    q.proxima();
  };
  return (
    <div data-tela="25" className="q-h-full">
      <div data-body className="q-bg-background q-font-body-md q-text-on-surface q-antialiased q-flex q-flex-col q-items-center q-min-h-screen">
        <div className="q-w-full q-max-w-[520px] q-sm:max-w-[520px] q-flex-1 q-flex q-flex-col q-min-h-screen q-relative q-bg-surface">
          <main className="q-flex-1 q-flex q-flex-col q-relative q-w-full q-bg-surface pt-safe pb-safe">
            <div className="q-flex q-flex-col q-w-full q-px-5 q-pb-6">
              <header className="q-w-full q-flex q-flex-col q-pt-3">
                <div className="q-flex q-items-center q-justify-between q-w-full q-h-8">
                  <button aria-label="Voltar" onClick={q.voltar} className="q-w-6 q-h-6 q-flex q-items-center q-justify-center q-p-0 q-text-primary-container q-active:opacity-70 q-transition-opacity" type="button">
                    <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>
                  <div className="q-w-[28px] q-h-[28px] q-rounded-full q-shadow-sm" style={{ background: "radial-gradient(circle at 30% 28%, #6E9B82 0%, #3D6A53 58%, #203E35 100%)" }} />
                  <div aria-hidden="true" className="q-w-6 q-h-6" />
                </div>
                <div className="q-grid q-grid-cols-4 q-gap-1.5 q-w-full q-mt-4 q-h-1">
                  <div className="q-w-full q-h-full q-rounded-full q-overflow-hidden" style={{ backgroundColor: "#EDEEEB" }}>
                    <div className="q-h-full q-w-full q-rounded-full" style={{ backgroundColor: "#D9A441" }} />
                  </div>
                  <div className="q-w-full q-h-full q-rounded-full q-overflow-hidden" style={{ backgroundColor: "#EDEEEB" }}>
                    <div className="q-h-full q-w-full q-rounded-full" style={{ backgroundColor: "#D9A441" }} />
                  </div>
                  <div className="q-w-full q-h-full q-rounded-full q-overflow-hidden" style={{ backgroundColor: "#EDEEEB" }}>
                    <div className="q-h-full q-w-full q-rounded-full" style={{ backgroundColor: "#D9A441" }} />
                  </div>
                  <div className="q-w-full q-h-full q-rounded-full q-overflow-hidden" style={{ backgroundColor: "#EDEEEB" }}>
                    <div className="q-h-full q-rounded-full" style={{ width: "86%", backgroundColor: "#D9A441" }} />
                  </div>
                </div>
                <div className="q-flex q-items-center q-justify-between q-w-full q-mt-2 q-font-['Geist'] q-text-[12px] q-leading-4" style={{ color: "#56654D" }}>
                  <span>
                    {"O seu plano"}
                  </span>
                  <div className="q-flex q-items-center q-gap-1.5">
                    <span>
                      {"alertas"}
                    </span>
                    <div className="q-inline-flex q-items-center q-gap-1">
                      <span className="q-w-[6px] q-h-[6px] q-rounded-full" style={p[0]} />
                      {" "}
                      <span className="q-w-[6px] q-h-[6px] q-rounded-full" style={p[1]} />
                      {" "}
                      <span className="q-w-[6px] q-h-[6px] q-rounded-full" style={p[2]} />
                    </div>
                  </div>
                </div>
              </header>
              <main className="q-w-full q-flex q-flex-col q-mt-[32px]">
                <h1 className="q-font-['Geist'] q-font-semibold q-text-[24px] q-leading-[1.25] q-mb-[24px]" style={{ color: "#203E35" }}>
                  {" Como podemos te chamar? "}
                </h1>
                <div className="q-relative q-w-full q-h-[52px] q-bg-white q-rounded-[12px] q-flex q-items-center q-px-4" style={{ border: "1px solid #DDE3DA", boxShadow: "0 0 0 2px #426B56" }}>
                  <input
                    aria-label="Seu nome"
                    autoComplete="given-name"
                    autoFocus={!q.previa}
                    className="q-w-full q-h-full q-bg-transparent q-border-0 q-p-0 q-outline-none q-font-['Geist'] q-font-medium q-text-[17px] q-leading-none"
                    enterKeyHint="go"
                    maxLength={24}
                    onChange={(e) => q.set({ nome: e.target.value })}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") envia();
                    }}
                    style={{ color: "#203E35", caretColor: "#426B56" }}
                    type="text"
                    value={q.r.nome}
                  />
                </div>
              </main>
              <footer className="q-mt-auto q-pt-12 q-pb-6 q-px-0 q-w-full">
                <button className="q-w-full q-h-[52px] q-rounded-full q-flex q-items-center q-justify-center q-font-['Geist'] q-font-semibold q-text-[16px] q-text-white q-active:opacity-95 q-transition-all q-shadow-sm" disabled={!nome} onClick={envia} style={{ backgroundColor: "#203E35", opacity: nome ? undefined : 0.35 }} type="button">
                  {" Ver o meu diagnóstico "}
                </button>
              </footer>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
