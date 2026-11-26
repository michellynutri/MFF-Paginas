// Tela 03a — convertida de scripts/quiz-mia/stitch/03a.html (Stitch, projeto "MIA · Quiz de vendas").
import type { TelaProps } from "../_quiz/tipos";

export default function T03a({ q }: TelaProps) {
  return (
    <div data-tela="03a">
      <div data-body className="q-min-h-screen q-flex q-flex-col q-justify-between q-bg-surface q-relative q-select-none">
        <div className="q-absolute q-top-0 q-left-0 q-right-0 q-h-44 top-tint q-pointer-events-none q-z-0" />
        <main className="q-w-full q-max-w-[390px] q-mx-auto q-flex-1 q-flex q-flex-col q-z-10 q-px-5 q-pt-3 q-pb-28">
          <header className="q-w-full q-flex q-flex-col q-mb-6">
            <div className="q-w-full q-flex q-items-center q-justify-between q-relative q-py-2">
              <button type="button" aria-label="Voltar" onClick={q.voltar} className="q-text-brand q-p-1 q--ml-1 q-focus:outline-none q-cursor-pointer">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#203E35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <div className="q-absolute q-left-1/2 q--translate-x-1/2">
                <div className="orb-logo" />
              </div>
              <div className="q-w-6 q-h-6" />
            </div>
            <div className="q-grid q-grid-cols-4 q-gap-2 q-mt-2 q-w-full">
              <div className="q-h-1 q-bg-[#E4E8E2] q-rounded-full q-overflow-hidden">
                <div className="q-h-full q-bg-gold q-rounded-full" style={{ width: "45%" }} />
              </div>
              <div className="q-h-1 q-bg-[#E4E8E2] q-rounded-full" />
              <div className="q-h-1 q-bg-[#E4E8E2] q-rounded-full" />
              <div className="q-h-1 q-bg-[#E4E8E2] q-rounded-full" />
            </div>
            <p className="q-text-[12px] q-text-body q-mt-2 q-font-normal">
              {"O seu momento na caneta"}
            </p>
          </header>
          <div className="q-text-[12px] q-font-semibold q-text-gold-text q-uppercase q-mb-2 q-font-sans" style={{ letterSpacing: "0.12em" }}>
            {"VOCÊ CHEGOU NA HORA CERTA"}
          </div>
          <h1 className="q-font-serif q-text-[28px] q-font-semibold q-text-brand q-mb-3 q-tracking-[-0.01em]" style={{ fontFamily: "\"EB Garamond\", serif", fontSize: "28px", fontWeight: "600", color: "rgb(32, 62, 53)", lineHeight: "1.25" }}>
            {"Você ainda não começou. Esse é o melhor momento de todos."}
          </h1>
          <p className="q-text-[16px] q-leading-[1.45] q-text-body q-font-normal q-mb-6">
            {" Quem começa a caneta com o plano certo protege o músculo desde a primeira aplicação e garante um resultado que fica. "}
          </p>
          <section className="q-w-full q-bg-card q-rounded-[16px] q-border q-border-border/80 q-shadow-[0_4px_20px_rgba(32,62,53,0.06)] q-p-5 q-mb-4">
            <div className="q-text-[12px] q-font-semibold q-text-gold-text q-uppercase q-mb-2 q-font-sans" style={{ letterSpacing: "0.12em" }}>
              {"VOCÊ CHEGOU NA HORA CERTA"}
            </div>
            <div className="q-flex q-items-center q-gap-3.5 q-pb-4">
              <img src="/images/quiz-mia/michelly.jpg" alt="Dra. Michelly Silveira" className="q-w-16 q-h-16 q-rounded-full q-object-cover q-border q-border-[#DDE3DA] q-shadow-sm q-flex-shrink-0" />
              <div className="q-flex q-flex-col">
                <h2 className="q-text-[18px] q-font-semibold q-text-brand q-leading-snug">
                  {"Dra. Michelly Silveira"}
                </h2>
                <span className="q-text-[13px] q-text-body q-font-normal">
                  {"nutricionista"}
                </span>
              </div>
            </div>
            <div className="q-divide-y q-divide-[#EDF0EB] q-border-t q-border-[#EDF0EB]">
              <div className="q-flex q-items-center q-gap-3 q-py-3">
                <div className="q-w-5 q-h-5 q-flex q-items-center q-justify-center q-flex-shrink-0 q-text-body-icon">
                  <span className="material-symbols-outlined" style={{ fontSize: "20px", fontVariationSettings: "'wght' 300, 'FILL' 0", color: "#426B56" }}>
                    {"school"}
                  </span>
                </div>
                <span className="q-text-[14px] q-leading-tight q-font-normal" style={{ color: "#203E35" }}>
                  {"Especialista em bioquímica e fisiologia do exercício pela Unicamp"}
                </span>
              </div>
              <div className="q-flex q-items-center q-gap-3 q-py-3">
                <div className="q-w-5 q-h-5 q-flex q-items-center q-justify-center q-flex-shrink-0 q-text-body-icon">
                  <span className="material-symbols-outlined" style={{ fontSize: "20px", fontVariationSettings: "'wght' 300, 'FILL' 0", color: "#426B56" }}>
                    {"biotech"}
                  </span>
                </div>
                <span className="q-text-[14px] q-leading-tight q-font-normal" style={{ color: "#203E35" }}>
                  {"Pós-graduada em nutrição ortomolecular"}
                </span>
              </div>
              <div className="q-flex q-items-center q-gap-3 q-py-3">
                <div className="q-w-5 q-h-5 q-flex q-items-center q-justify-center q-flex-shrink-0 q-text-body-icon">
                  <span className="material-symbols-outlined" style={{ fontSize: "20px", fontVariationSettings: "'wght' 300, 'FILL' 0", color: "#426B56" }}>
                    {"female"}
                  </span>
                </div>
                <span className="q-text-[14px] q-leading-tight q-font-normal" style={{ color: "#203E35" }}>
                  {"Especialista em intestino e nos hormônios da mulher"}
                </span>
              </div>
              <div className="q-flex q-items-center q-gap-3 q-py-3">
                <div className="q-w-5 q-h-5 q-flex q-items-center q-justify-center q-flex-shrink-0 q-text-body-icon">
                  <span className="material-symbols-outlined" style={{ fontSize: "20px", fontVariationSettings: "'wght' 300, 'FILL' 0", color: "#426B56" }}>
                    {"groups"}
                  </span>
                </div>
                <span className="q-text-[14px] q-leading-tight q-font-normal" style={{ color: "#203E35" }}>
                  {"Mais de 4 mil mulheres satisfeitas"}
                </span>
              </div>
              <div className="q-flex q-items-center q-gap-3 q-py-3">
                <div className="q-w-5 q-h-5 q-flex q-items-center q-justify-center q-flex-shrink-0 q-text-body-icon">
                  <span className="material-symbols-outlined" style={{ fontSize: "20px", fontVariationSettings: "'wght' 300, 'FILL' 0", color: "#426B56" }}>
                    {"assignment"}
                  </span>
                </div>
                <span className="q-text-[14px] q-leading-tight q-font-normal" style={{ color: "#203E35" }}>
                  {"Este diagnóstico é a base da primeira consulta da Dra. Michelly"}
                </span>
              </div>
            </div>
          </section>
          <div className="q-flex q-items-start q-gap-2 q-px-1">
            <div className="q-w-4 q-h-4 q-mt-0.5 q-flex-shrink-0 q-text-body">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <p className="q-text-[13px] q-text-body q-leading-normal">
              {" Faltam menos de 2 minutos. No fim, você recebe o seu resultado personalizado. "}
            </p>
          </div>
        </main>
        <div className="q-fixed q-bottom-0 q-left-0 q-right-0 q-z-30 q-p-4 q-bg-gradient-to-t q-from-surface q-via-surface q-to-transparent q-flex q-justify-center q-pointer-events-none">
          <div className="q-w-full q-max-w-[390px] q-pointer-events-auto">
            <button onClick={q.proxima} type="button" className="q-w-full q-h-[52px] q-bg-brand q-hover:bg-brand-dark q-active:scale-[0.99] q-transition-all q-text-white q-font-medium q-text-[16px] q-rounded-[14px] q-shadow-[0_4px_16px_rgba(32,62,53,0.2)] q-flex q-items-center q-justify-center q-cursor-pointer">
              {" Continuar "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
