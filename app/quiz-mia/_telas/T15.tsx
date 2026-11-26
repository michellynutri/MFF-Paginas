// Tela 15 — convertida de scripts/quiz-mia/stitch/15.html (Stitch, projeto "MIA · Quiz de vendas").
import type { TelaProps } from "../_quiz/tipos";
import { pontos } from "../_quiz/ui";

const OPCOES = ["Eu mesma cozinho", "Alguém cozinha para mim", "Como fora ou peço", "Levo marmita"];

export default function T15({ q }: TelaProps) {
  const p = pontos(q);
  return (
    <div data-tela="15">
      <div data-body className="q-min-h-screen q-flex q-flex-col q-justify-between q-max-w-[390px] q-mx-auto q-px-5 q-pt-4 q-pb-8 q-select-none">
        <div>
          <header className="q-relative q-flex q-items-center q-justify-between q-h-9 q-mb-4">
            <button type="button" aria-label="Voltar" onClick={q.voltar} className="q-text-brand-dark q-hover:opacity-75 q-transition-opacity q-p-1 q--ml-1">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <div className="q-absolute q-left-1/2 q--translate-x-1/2">
              <div className="sphere-orb" />
            </div>
            <div className="q-w-6" />
          </header>
          <div className="q-grid q-grid-cols-4 q-gap-1.5 q-mb-2">
            <div className="q-h-1 q-bg-[#DDE3DA] q-rounded-full q-overflow-hidden">
              <div className="q-h-full q-bg-brand-gold q-w-full q-rounded-full" />
            </div>
            <div className="q-h-1 q-bg-[#DDE3DA] q-rounded-full q-overflow-hidden">
              <div className="q-h-full q-bg-brand-gold q-w-full q-rounded-full" />
            </div>
            <div className="q-h-1 q-bg-[#DDE3DA] q-rounded-full q-overflow-hidden">
              <div className="q-h-full q-bg-brand-gold q-w-[15%] q-rounded-full" />
            </div>
            <div className="q-h-1 q-bg-[#DDE3DA] q-rounded-full q-overflow-hidden">
              <div className="q-h-full q-bg-brand-gold q-w-0 q-rounded-full" />
            </div>
          </div>
          <div className="q-flex q-items-center q-justify-between q-text-[12px] q-text-brand-muted q-tracking-tight q-mb-8">
            <span>
              {"O que cabe no seu dia"}
            </span>
            <div className="q-flex q-items-center q-gap-1.5">
              <span className="q-font-normal q-text-brand-dark">
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
          <h1 className="q-text-[24px] q-leading-[1.25] q-font-semibold q-text-brand-dark q-tracking-[-0.015em] q-mb-7">
            {" No dia a dia, quem faz a sua comida? "}
          </h1>
          <div className="q-space-y-3">
            {OPCOES.map((txt, i) =>
              q.r.cozinha === i ? (
                // marcada: padrão da prancheta 01b (borda 2px compensada no padding)
                <div key={i} role="radio" aria-checked="true" tabIndex={0} onClick={() => q.escolhe("cozinha", i)} className="q-flex q-items-center q-justify-between q-bg-[#FBF1DC] q-rounded-2xl q-px-[19px] q-py-[15px] q-border-2 q-border-[#203E35] q-shadow-sm q-active:scale-[0.99] q-transition-all q-cursor-pointer">
                  <span className="q-text-[16px] q-font-semibold q-text-[#203E35]">
                    {txt}
                  </span>
                  <div className="q-w-5 q-h-5 q-rounded-full q-flex q-items-center q-justify-center q-bg-[#D9A441] q-flex-shrink-0">
                    <svg className="q-w-3 q-h-3 q-text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </div>
              ) : (
                <div key={i} role="radio" aria-checked="false" tabIndex={0} onClick={() => q.escolhe("cozinha", i)} className="q-flex q-items-center q-justify-between q-bg-white q-rounded-2xl q-px-5 q-py-4 q-border q-border-brand-border/70 q-shadow-sm q-active:scale-[0.99] q-transition-all q-cursor-pointer">
                  <span className="q-text-[16px] q-font-medium q-text-brand-dark">
                    {txt}
                  </span>
                  <div className="q-w-5 q-h-5 q-rounded-full q-border q-border-brand-border q-bg-[#F3F5F2] q-flex-shrink-0" />
                </div>
              ),
            )}
          </div>
        </div>
        <div className="q-h-16" />
      </div>
    </div>
  );
}
