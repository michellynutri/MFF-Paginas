// Tela 03e — convertida de scripts/quiz-mia/stitch/03e.html (Stitch, projeto "MIA · Quiz de vendas").
import type { TelaProps } from "../_quiz/tipos";

export default function T03e({ q }: TelaProps) {
  return (
    <div data-tela="03e">
      <div data-body className="q-min-h-screen q-flex q-flex-col q-justify-between q-bg-surface q-relative q-select-none">
        <div className="q-absolute q-top-0 q-left-0 q-right-0 q-h-44 top-tint q-pointer-events-none q-z-0" />
        <main className="q-w-full q-max-w-[390px] q-mx-auto q-flex-1 q-flex q-flex-col q-z-10 q-px-5 q-pt-3 q-pb-28">
          <div className="q-flex q-flex-col q-w-full">
            <div className="q-w-full q-flex q-flex-col q-mb-6">
              <div className="q-flex q-items-center q-justify-between q-relative q-h-10 q-w-full q-mb-3">
                <button aria-label="Voltar" onClick={q.voltar} className="q-w-9 q-h-9 q--ml-1 q-rounded-full q-flex q-items-center q-justify-center text-primary-container q-active:scale-95 q-transition-transform" type="button">
                  <span className="material-symbols-outlined q-text-[24px]">
                    {"arrow_back_ios_new"}
                  </span>
                </button>
                <div className="q-absolute q-left-1/2 q--translate-x-1/2 q-flex q-items-center q-justify-center q-pointer-events-none">
                  <div className="orb-logo" />
                </div>
                <div className="q-w-9 q-h-9" />
              </div>
              <div className="q-grid q-grid-cols-4 q-gap-1.5 q-w-full q-mb-2">
                <div className="q-h-1 q-rounded-full bg-outline-variant/30 q-overflow-hidden q-relative">
                  <div className="q-h-full bg-secondary-fixed-dim q-rounded-full" style={{ width: "45%" }} />
                </div>
                <div className="q-h-1 q-rounded-full bg-outline-variant/30" />
                <div className="q-h-1 q-rounded-full bg-outline-variant/30" />
                <div className="q-h-1 q-rounded-full bg-outline-variant/30" />
              </div>
              <div className="q-text-left font-mono-sm text-mono-sm q-text-body">
                {" O seu momento na caneta "}
              </div>
            </div>
            <div className="q-flex q-flex-col q-gap-2 q-mb-6">
              <span className="font-option-label q-text-[12px] q-uppercase q-font-semibold q-tracking-wider q-text-gold-text">
                {" VOCÊ CHEGOU NA HORA CERTA "}
              </span>
              <h1 className="font-display-lg-mobile q-text-[28px] q-leading-[35px] q-font-semibold q-text-brand q-tracking-[-0.015em]" style={{ fontFamily: "\"EB Garamond\", serif", fontSize: "28px", fontWeight: "600", color: "rgb(32, 62, 53)", lineHeight: "1.25" }}>
                {" Você está perto de parar. É a fase em que o peso pode voltar com tudo. "}
              </h1>
              <p className="font-body-md q-text-[16px] q-leading-[24px] q-text-body q-mt-1">
                {" O que decide isso acontece antes da última dose. Ainda dá tempo de sair da caneta com a garantia que o peso não vai voltar. "}
              </p>
            </div>
            <div className="q-w-full q-bg-card q-rounded-[16px] q-p-5 q-shadow-[0_1px_2px_rgba(32,62,53,0.06),0_8px_24px_-16px_rgba(32,62,53,0.35)] q-flex q-flex-col q-mb-5">
              <span className="font-option-label q-text-[11px] q-uppercase q-font-semibold q-tracking-wider q-text-gold-text q-mb-4">
                {" QUEM CRIOU ESTE DIAGNÓSTICO "}
              </span>
              <div className="q-flex q-items-center q-gap-3.5 q-pb-4">
                <img className="q-w-16 q-h-16 q-rounded-full q-object-cover q-shadow-sm q-flex-shrink-0" data-alt="Dra. Michelly Silveira" src="/images/quiz-mia/michelly.jpg" />
                <div className="q-flex q-flex-col q-justify-center">
                  <h2 className="font-option-label q-text-[18px] q-font-semibold q-text-brand q-leading-[22px]">
                    {" Dra. Michelly Silveira "}
                  </h2>
                  <span className="font-caption q-text-[13px] q-text-body q-leading-[18px]">
                    {" nutricionista "}
                  </span>
                </div>
              </div>
              <div className="q-flex q-items-center q-gap-3 q-py-3 q-border-t border-surface-container">
                <span className="material-symbols-outlined q-text-[20px] q-text-body-icon q-flex-shrink-0" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}>
                  {" school "}
                </span>
                {" "}
                <span className="font-body-md q-text-[14px] q-leading-[20px] q-text-brand">
                  {" Especialista em bioquímica e fisiologia do exercício pela Unicamp "}
                </span>
              </div>
              <div className="q-flex q-items-center q-gap-3 q-py-3 q-border-t border-surface-container">
                <span className="material-symbols-outlined q-text-[20px] q-text-body-icon q-flex-shrink-0" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}>
                  {" biotech "}
                </span>
                {" "}
                <span className="font-body-md q-text-[14px] q-leading-[20px] q-text-brand">
                  {" Pós-graduada em nutrição ortomolecular "}
                </span>
              </div>
              <div className="q-flex q-items-center q-gap-3 q-py-3 q-border-t border-surface-container">
                <span className="material-symbols-outlined q-text-[20px] q-text-body-icon q-flex-shrink-0" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}>
                  {" female "}
                </span>
                {" "}
                <span className="font-body-md q-text-[14px] q-leading-[20px] q-text-brand">
                  {" Especialista em intestino e nos hormônios da mulher "}
                </span>
              </div>
              <div className="q-flex q-items-center q-gap-3 q-py-3 q-border-t border-surface-container">
                <span className="material-symbols-outlined q-text-[20px] q-text-body-icon q-flex-shrink-0" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}>
                  {" groups "}
                </span>
                {" "}
                <span className="font-body-md q-text-[14px] q-leading-[20px] q-text-brand">
                  {" Mais de 4 mil mulheres satisfeitas "}
                </span>
              </div>
              <div className="q-flex q-items-center q-gap-3 q-pt-3 q-border-t border-surface-container">
                <span className="material-symbols-outlined q-text-[20px] q-text-body-icon q-flex-shrink-0" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}>
                  {" assignment "}
                </span>
                {" "}
                <span className="font-body-md q-text-[14px] q-leading-[20px] q-text-brand">
                  {" Este diagnóstico é a base da primeira consulta da Dra. Michelly "}
                </span>
              </div>
            </div>
            <div className="q-flex q-items-center q-gap-2 q-px-1 q-text-body">
              <span className="material-symbols-outlined q-text-[18px] q-text-body-icon q-flex-shrink-0">
                {" schedule "}
              </span>
              {" "}
              <span className="font-caption q-text-[13px] q-leading-[18px] q-text-body">
                {" Faltam menos de 2 minutos. No fim, você recebe o seu resultado personalizado. "}
              </span>
            </div>
          </div>
        </main>
        <div className="q-fixed q-bottom-0 q-left-0 q-right-0 q-z-30 q-p-4 q-bg-gradient-to-t q-from-surface q-via-surface q-to-transparent q-flex q-justify-center q-pointer-events-none">
          <div className="q-w-full q-max-w-[390px] q-pointer-events-auto">
            <button onClick={q.proxima} className="q-w-full q-h-[52px] q-bg-brand q-hover:bg-brand-dark q-active:scale-[0.99] q-transition-all q-text-white q-font-medium q-text-[16px] q-rounded-[14px] q-shadow-[0_4px_16px_rgba(32,62,53,0.2)] q-flex q-items-center q-justify-center q-cursor-pointer" type="button">
              {" Continuar "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
