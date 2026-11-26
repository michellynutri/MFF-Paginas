// Tela 03f — convertida de scripts/quiz-mia/stitch/03f.html (Stitch, projeto "MIA · Quiz de vendas").
import type { TelaProps } from "../_quiz/tipos";

export default function T03f({ q }: TelaProps) {
  return (
    <div data-tela="03f">
      <div data-body className="q-min-h-screen q-flex q-flex-col q-justify-between q-bg-surface q-relative q-select-none">
        <div className="q-absolute q-top-0 q-left-0 q-right-0 q-h-44 top-tint q-pointer-events-none q-z-0" />
        <main className="q-w-full q-max-w-[390px] q-mx-auto q-flex-1 q-flex q-flex-col q-z-10 q-px-5 q-pt-3 q-pb-28">
          <div className="q-flex q-flex-col q-w-full">
            <div className="q-flex q-flex-col q-w-full q-mb-6">
              <div className="q-flex q-items-center q-justify-between q-w-full q-h-8 q-mb-3 q-relative">
                <button aria-label="Voltar" onClick={q.voltar} className="q-w-8 q-h-8 q--ml-1 q-flex q-items-center q-justify-center text-primary-container q-active:opacity-60 q-transition-opacity" type="button">
                  <span className="material-symbols-outlined q-text-[22px]">
                    {"chevron_left"}
                  </span>
                </button>
                <div className="q-absolute q-left-1/2 q--translate-x-1/2 q-top-1/2 q--translate-y-1/2">
                  <div className="orb-logo" style={{ width: "36px", height: "36px", borderRadius: "9999px", background: "radial-gradient(circle at 35% 30%, rgb(168, 194, 175) 0%, rgb(127, 154, 134) 45%, rgb(88, 115, 95) 80%, rgb(59, 82, 66) 100%)", boxShadow: "rgba(255, 255, 255, 0.6) 1px 1px 2px inset, rgba(217, 164, 65, 0.35) -2px -2px 5px inset, rgba(32, 62, 53, 0.18) 0px 3px 8px" }} />
                </div>
                <div className="q-w-8 q-h-8" />
              </div>
              <div className="q-grid q-grid-cols-4 q-gap-1.5 q-w-full q-mb-2">
                <div className="q-h-1 q-w-full bg-outline-variant/40 q-rounded-full q-overflow-hidden">
                  <div className="q-h-full bg-secondary-container q-w-[45%] q-rounded-full" />
                </div>
                <div className="q-h-1 q-w-full bg-outline-variant/40 q-rounded-full" />
                <div className="q-h-1 q-w-full bg-outline-variant/40 q-rounded-full" />
                <div className="q-h-1 q-w-full bg-outline-variant/40 q-rounded-full" />
              </div>
              <div className="q-text-left q-text-[12px] q-font-medium q-tracking-normal" style={{ fontFamily: "Geist, sans-serif", color: "rgb(86, 101, 77)" }}>
                {"O seu momento na caneta"}
              </div>
            </div>
            <div className="q-flex q-flex-col q-w-full q-mb-6">
              <span className="q-uppercase q-font-semibold q-mb-2 q-text-[12px]" style={{ fontFamily: "Geist, sans-serif", color: "rgb(138, 100, 24)", letterSpacing: "0.12em" }}>
                {"VOCÊ CHEGOU NA HORA CERTA"}
              </span>
              <h1 className="q-mb-3 q-font-semibold q-text-[28px]" style={{ fontFamily: "\"EB Garamond\", serif", color: "rgb(32, 62, 53)", lineHeight: "1.25" }}>
                {"Você já parou. Cada semana conta."}
              </h1>
              <p style={{ fontFamily: "Geist, sans-serif", fontSize: "16px", color: "rgb(86, 101, 77)", lineHeight: "1.5", textAlign: "left" }} className="q-mt-1">
                {"Quando o corpo volta a ficar forte, o peso tem muito mais dificuldade de voltar. Você precisa de uma estratégia urgente."}
              </p>
            </div>
            <div className="q-w-full bg-surface-container-lowest q-rounded-2xl q-p-5 q-shadow-[0_1px_2px_rgba(32,62,53,0.06),0_8px_24px_-16px_rgba(32,62,53,0.35)] q-flex q-flex-col q-mb-4">
              <span className="font-option-label q-text-[11px] q-uppercase q-font-semibold q-tracking-wider q-text-gold-text q-mb-4">
                {"QUEM CRIOU ESTE DIAGNÓSTICO"}
              </span>
              <div className="q-flex q-items-center q-gap-3.5 q-pb-4">
                <div className="q-w-12 q-h-12 q-rounded-full q-overflow-hidden q-flex-shrink-0 q-shadow-sm q-border q-border-[#DDE3DA]/50">
                  <img className="q-w-full q-h-full q-object-cover" src="/images/quiz-mia/michelly.jpg" alt="Dra. Michelly Silveira" />
                </div>
                <div className="q-flex q-flex-col q-justify-center">
                  <h2 className="font-option-label q-text-[18px] q-font-semibold q-text-brand q-leading-[22px]">
                    {"Dra. Michelly Silveira"}
                  </h2>
                  <span className="font-caption q-text-[13px] q-text-body q-leading-[18px]">
                    {"nutricionista"}
                  </span>
                </div>
              </div>
              <div className="q-flex q-items-center q-gap-3 q-py-3 q-border-t border-surface-container">
                <span className="material-symbols-outlined q-text-[20px] q-text-body-icon q-flex-shrink-0" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}>
                  {"school"}
                </span>
                <span className="font-body-md q-text-[14px] q-leading-[20px] q-text-brand">
                  {"Especialista em bioquímica e fisiologia do exercício pela Unicamp"}
                </span>
              </div>
              <div className="q-flex q-items-center q-gap-3 q-py-3 q-border-t border-surface-container">
                <span className="material-symbols-outlined q-text-[20px] q-text-body-icon q-flex-shrink-0" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}>
                  {"biotech"}
                </span>
                <span className="font-body-md q-text-[14px] q-leading-[20px] q-text-brand">
                  {"Pós-graduada em nutrição ortomolecular"}
                </span>
              </div>
              <div className="q-flex q-items-center q-gap-3 q-py-3 q-border-t border-surface-container">
                <span className="material-symbols-outlined q-text-[20px] q-text-body-icon q-flex-shrink-0" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}>
                  {"female"}
                </span>
                <span className="font-body-md q-text-[14px] q-leading-[20px] q-text-brand">
                  {"Especialista em intestino e nos hormônios da mulher"}
                </span>
              </div>
              <div className="q-flex q-items-center q-gap-3 q-py-3 q-border-t border-surface-container">
                <span className="material-symbols-outlined q-text-[20px] q-text-body-icon q-flex-shrink-0" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}>
                  {"groups"}
                </span>
                <span className="font-body-md q-text-[14px] q-leading-[20px] q-text-brand">
                  {"Mais de 4 mil mulheres satisfeitas"}
                </span>
              </div>
              <div className="q-flex q-items-center q-gap-3 q-pt-3 q-border-t border-surface-container">
                <span className="material-symbols-outlined q-text-[20px] q-text-body-icon q-flex-shrink-0" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}>
                  {"assignment"}
                </span>
                <span className="font-body-md q-text-[14px] q-leading-[20px] q-text-brand">
                  {"Este diagnóstico é a base da primeira consulta da Dra. Michelly"}
                </span>
              </div>
            </div>
            <div className="q-flex q-items-center q-gap-2 q-px-1 q-text-body">
              <span className="material-symbols-outlined q-text-[18px] q-text-body-icon q-flex-shrink-0">
                {"schedule"}
              </span>
              <span className="font-caption q-text-[13px] q-leading-[18px] q-text-body">
                {"Faltam menos de 2 minutos. No fim, você recebe o seu resultado personalizado."}
              </span>
            </div>
          </div>
        </main>
        <div className="q-fixed q-bottom-0 q-left-0 q-right-0 q-z-30 q-p-4 q-bg-gradient-to-t q-from-surface q-via-surface q-to-transparent q-flex q-justify-center q-pointer-events-none">
          <div className="q-w-full q-max-w-[390px] q-pointer-events-auto">
            <button onClick={q.proxima} className="q-w-full q-h-[52px] q-bg-brand q-hover:bg-brand-dark q-active:scale-[0.99] q-transition-all q-text-white q-font-medium q-text-[16px] q-rounded-[14px] q-shadow-[0_4px_16px_rgba(32,62,53,0.2)] q-flex q-items-center q-justify-center q-cursor-pointer" type="button">
              {"Continuar"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
