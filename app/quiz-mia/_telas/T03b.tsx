// Tela 03b — convertida de scripts/quiz-mia/stitch/03b.html (Stitch, projeto "MIA · Quiz de vendas").
import type { TelaProps } from "../_quiz/tipos";

export default function T03b({ q }: TelaProps) {
  return (
    <div data-tela="03b">
      <div data-body className="q-bg-[#F6F7F4] q-text-[#56654D] q-flex q-justify-center q-min-h-screen">
        <div className="q-w-full q-max-w-[390px] q-min-h-screen q-flex q-flex-col q-justify-between q-relative q-bg-[#F6F7F4] q-overflow-x-hidden" data-purpose="mobile-screen-viewport">
          <div aria-hidden="true" className="q-absolute q-top-0 q-left-0 q-right-0 q-h-40 top-ambient-glow q-pointer-events-none" />
          <div className="q-px-6 q-pt-5 q-pb-8 q-relative q-z-10 q-flex-1 q-flex q-flex-col">
            <header className="q-flex q-items-center q-justify-between q-mb-4 q-relative" data-purpose="header-navigation">
              <button aria-label="Voltar" onClick={q.voltar} className="q-text-[#203E35] q-p-1 q--ml-1 q-flex q-items-center q-justify-center q-focus:outline-none" type="button">
                <svg className="q-w-5 q-h-5 q-stroke-[2.2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div aria-label="Logo MIA" className="q-w-7 q-h-7 q-rounded-full mia-sphere q-flex-shrink-0" />
              <div aria-hidden="true" className="q-w-5 q-h-5 q--mr-1 q-pointer-events-none" />
            </header>
            <section aria-label="Progresso" className="q-mb-6" data-purpose="progress-container">
              <div className="q-grid q-grid-cols-4 q-gap-1.5 q-h-1 q-w-full q-mb-2">
                <div className="q-h-full q-bg-[#E5E8E2] q-rounded-full q-overflow-hidden">
                  <div className="q-h-full q-bg-[#D9A441] q-rounded-full" style={{ width: "45%" }} />
                </div>
                <div className="q-h-full q-bg-[#E5E8E2] q-rounded-full" />
                <div className="q-h-full q-bg-[#E5E8E2] q-rounded-full" />
                <div className="q-h-full q-bg-[#E5E8E2] q-rounded-full" />
              </div>
              <p className="q-text-[12px] q-font-normal q-text-[#56654D] q-leading-tight">
                {" O seu momento na caneta "}
              </p>
            </section>
            <section className="q-mb-6" data-purpose="headline-text-block">
              <span className="q-block q-text-[12px] q-font-semibold q-tracking-wider q-text-[#8A6418] q-uppercase q-mb-2">
                {" VOCÊ CHEGOU NA HORA CERTA "}
              </span>
              <h1 className="font-serif-headline q-text-[28px] q-font-semibold q-leading-[1.2] q-text-[#203E35] q-mb-3" style={{ fontFamily: "\"EB Garamond\", serif", fontSize: "28px", fontWeight: "600", color: "rgb(32, 62, 53)", lineHeight: "1.25" }}>
                {" O peso está descendo. Agora é a hora de garantir que ele não volte. "}
              </h1>
              <p className="q-text-[16px] q-leading-[1.5] q-text-[#56654D]">
                {" Enquanto a caneta segura a fome, o que vai no prato decide se o que sai é gordura ou músculo, e se o peso continua sendo seu depois da última dose. "}
              </p>
            </section>
            <div className="q-bg-white q-rounded-[16px] q-p-5 q-shadow-[0_4px_20px_rgba(0,0,0,0.04)] q-mb-4" data-purpose="authority-card">
              <p className="q-text-[11px] q-font-semibold q-tracking-wide q-text-[#8A6418] q-uppercase q-mb-4">
                {" QUEM CRIOU ESTE DIAGNÓSTICO "}
              </p>
              <div className="q-flex q-items-center q-space-x-3.5 q-pb-4">
                <img alt="Dra. Michelly Silveira" className="q-w-16 q-h-16 q-rounded-full q-object-cover q-flex-shrink-0" src="/images/quiz-mia/michelly.jpg" />
                <div>
                  <h2 className="q-text-[18px] q-font-semibold q-text-[#203E35] q-leading-tight">
                    {" Dra. Michelly Silveira "}
                  </h2>
                  <p className="q-text-[13px] q-text-[#56654D] q-leading-snug q-mt-0.5">
                    {" nutricionista "}
                  </p>
                </div>
              </div>
              <hr className="q-border-t q-border-[#F0F2ED] q-my-0" />
              <div className="q-divide-y q-divide-[#F0F2ED]">
                <div className="q-flex q-items-center q-space-x-3 q-py-3.5">
                  <svg className="q-w-5 q-h-5 q-text-[#426B56] q-flex-shrink-0 q-stroke-[1.75]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="q-text-[14px] q-text-[#203E35] q-leading-tight q-font-normal">
                    {"Especialista em bioquímica e fisiologia do exercício pela Unicamp"}
                  </span>
                </div>
                <div className="q-flex q-items-center q-space-x-3 q-py-3.5">
                  <svg className="q-w-5 q-h-5 q-text-[#426B56] q-flex-shrink-0 q-stroke-[1.75]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  <span className="q-text-[14px] q-text-[#203E35] q-leading-tight q-font-normal">
                    {"Pós-graduada em nutrição ortomolecular"}
                  </span>
                </div>
                <div className="q-flex q-items-center q-space-x-3 q-py-3.5">
                  <svg className="q-w-5 q-h-5 q-text-[#426B56] q-flex-shrink-0 q-stroke-[1.75]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="9" r="5" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7m-3-3h6" />
                  </svg>
                  <span className="q-text-[14px] q-text-[#203E35] q-leading-tight q-font-normal">
                    {"Especialista em intestino e nos hormônios da mulher"}
                  </span>
                </div>
                <div className="q-flex q-items-center q-space-x-3 q-py-3.5">
                  <svg className="q-w-5 q-h-5 q-text-[#426B56] q-flex-shrink-0 q-stroke-[1.75]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="q-text-[14px] q-text-[#203E35] q-leading-tight q-font-normal">
                    {"Mais de 4 mil mulheres satisfeitas"}
                  </span>
                </div>
                <div className="q-flex q-items-center q-space-x-3 q-pt-3.5 q-pb-0.5">
                  <svg className="q-w-5 q-h-5 q-text-[#426B56] q-flex-shrink-0 q-stroke-[1.75]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                  <span className="q-text-[14px] q-text-[#203E35] q-leading-tight q-font-normal">
                    {"Este diagnóstico é a base da primeira consulta da Dra. Michelly"}
                  </span>
                </div>
              </div>
            </div>
            <div className="q-flex q-items-start q-space-x-2 q-px-1 q-mb-6 q-text-[#56654D]" data-purpose="time-estimate">
              <svg className="q-w-4 q-h-4 q-flex-shrink-0 q-mt-0.5 q-text-[#56654D] q-stroke-[1.75]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="q-text-[13px] q-leading-snug">
                {" Faltam menos de 2 minutos. No fim, você recebe o seu resultado personalizado. "}
              </p>
            </div>
          </div>
          <footer className="q-sticky q-bottom-0 q-left-0 q-right-0 q-w-full q-p-4 q-bg-[#F6F7F4]/90 q-backdrop-blur-sm q-z-30" data-purpose="bottom-action">
            <button onClick={q.proxima} className="q-w-full q-bg-[#203E35] q-active:bg-[#183029] q-text-white q-font-medium q-text-[16px] q-py-3.5 q-px-6 q-rounded-[14px] q-shadow-sm q-transition-colors q-duration-150 q-flex q-items-center q-justify-center q-cursor-pointer" type="button">
              {" Continuar "}
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}
