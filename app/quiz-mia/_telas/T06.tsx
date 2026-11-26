// Tela 06 — convertida de scripts/quiz-mia/stitch/06.html (Stitch, projeto "MIA · Quiz de vendas").
import type { TelaProps } from "../_quiz/tipos";

export default function T06({ q }: TelaProps) {
  return (
    <div data-tela="06">
      <div data-body className="q-bg-surface q-font-body-md q-text-body-md q-text-on-surface q-antialiased q-flex q-flex-col q-min-h-screen">
        <header className="q-fixed q-top-0 q-w-full q-z-50 q-bg-surface/90 q-backdrop-blur-xl q-shadow-[0_1px_8px_rgba(0,0,0,0.03)] pt-safe">
          <div className="q-h-28 q-px-margin q-flex q-flex-col q-justify-between q-py-2">
            <div className="q-flex q-items-center q-justify-between q-w-full q-h-11">
              <button aria-label="Voltar" onClick={q.voltar} className="q-w-11 q-h-11 q--ml-2 q-rounded-full q-flex q-items-center q-justify-center q-text-on-surface q-hover:bg-surface-container q-transition-colors" type="button">
                <span className="material-symbols-outlined q-text-[22px]">
                  {"chevron_left"}
                </span>
              </button>
              <div className="q-relative q-flex q-items-center q-justify-center">
                <div className="q-w-7 q-h-7 q-rounded-full q-bg-primary-container q-shadow-[0_0_12px_#ffc55f] q-flex q-items-center q-justify-center" />
              </div>
              <div className="q-w-11 q-h-11" aria-hidden="true" />
            </div>
            <div className="q-w-full q-flex q-flex-col q-gap-1.5 q-pb-1">
              <div className="q-grid q-grid-cols-4 q-gap-gutter q-w-full">
                <div className="q-h-1 q-rounded-full q-bg-secondary-container" />
                <div className="q-h-1 q-rounded-full q-bg-surface-variant" />
                <div className="q-h-1 q-rounded-full q-bg-surface-variant" />
                <div className="q-h-1 q-rounded-full q-bg-surface-variant" />
              </div>
              <div className="q-flex q-items-center q-justify-between">
                <span style={{ fontFamily: "Geist, sans-serif", fontSize: "12px", fontWeight: "500", color: "rgb(86, 101, 77)" }}>
                  {"O seu momento na caneta"}
                </span>
              </div>
            </div>
          </div>
        </header>
        <main className="q-flex q-flex-col q-relative q-w-full q-px-margin q-pt-28 q-pb-28 q-bg-surface q-min-h-screen q-max-w-[520px] q-mx-auto pb-safe">
          <div className="q-hidden">
            {"Quiz Flow V4"}
          </div>
          <div className="q-flex q-flex-col q-w-full q-relative">
            <div className="q-absolute q--top-6 q--left-margin q--right-margin q-h-40 q-bg-gradient-to-b q-from-[#FBF1DC]/60 q-via-[#FBF1DC]/20 q-to-transparent q-pointer-events-none q--z-10" />
            <div className="q-flex q-flex-col q-gap-space-sm q-pt-2">
              <span className="q-leading-none" style={{ fontFamily: "Geist, sans-serif", fontSize: "12px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.12em", color: "rgb(138, 100, 24)" }}>
                {" “E QUANDO EU PARAR?” "}
              </span>
              <h1 className="q-leading-tight" style={{ fontFamily: "\"EB Garamond\", serif", fontSize: "28px", fontWeight: "600", color: "rgb(32, 62, 53)", lineHeight: "1.15" }}>
                {" A caneta tira o peso, mas você sabia que a memória da gordura fica? "}
              </h1>
              <p className="q-font-body-md q-text-body-md q-text-on-surface-variant q-leading-relaxed q-mt-1" style={{ fontFamily: "Geist, sans-serif", fontSize: "16px", lineHeight: "1.5", color: "rgb(86, 101, 77)" }}>
                {" Cientistas europeus analisaram a gordura de pessoas que tinham emagrecido muito. Dois anos depois, as células ainda guardavam a marca do peso antigo. "}
              </p>
              <div className="q-flex q-items-center q-gap-1.5 q-mt-0.5 q-text-on-surface-variant">
                <span className="material-symbols-outlined q-text-[15px] q-opacity-75" style={{ color: "rgb(86, 101, 77)" }}>
                  {"info"}
                </span>
                <span style={{ fontFamily: "Geist, sans-serif", fontSize: "12px", fontWeight: "400", color: "rgb(86, 101, 77)" }}>
                  {"estudo publicado na revista Nature"}
                </span>
              </div>
            </div>
            <div className="q-mt-space-lg q-bg-surface-container-lowest q-rounded-xl q-p-5 q-shadow-[0_1px_2px_rgba(32,62,53,0.06),0_8px_24px_-16px_rgba(32,62,53,0.35)] q-flex q-flex-col q-gap-3">
              <div className="q-w-full">
                <svg aria-hidden="true" className="q-w-full q-h-auto q-overflow-visible q-select-none" viewBox="0 0 320 140">
                  <line stroke="#89a99d" strokeDasharray="4,4" strokeWidth="1.2" x1="16" x2="304" y1="36" y2="36" />
                  <text style={{ fontFamily: "Geist, sans-serif", fontSize: "12px", fontWeight: "400" }} fill="#56654D" x="18" y="26">
                    {"seu peso de antes"}
                  </text>
                  <path d="M 28 36 C 70 38, 110 108, 160 110" fill="none" stroke="#203e35" strokeLinecap="round" strokeWidth="2.5" />
                  <circle cx="160" cy="110" fill="#203e35" r="4.5" />
                  <text style={{ fontFamily: "Geist, sans-serif", fontSize: "12px", fontWeight: "600" }} fill="#203e35" textAnchor="middle" x="160" y="128">
                    {"emagreceu"}
                  </text>
                  <path d="M 160 110 C 205 110, 245 42, 292 38" fill="none" stroke="#ffc55f" strokeDasharray="3,3" strokeLinecap="round" strokeWidth="2.5" />
                  <circle cx="292" cy="38" fill="#ffc55f" r="4.5" />
                  <text style={{ fontFamily: "Geist, sans-serif", fontSize: "12px", fontWeight: "600" }} fill="#755100" textAnchor="end" x="292" y="24">
                    {"parou"}
                  </text>
                </svg>
              </div>
            </div>
            <div className="q-mt-space-md q-bg-surface-container-lowest q-rounded-xl q-p-4 q-shadow-[0_1px_2px_rgba(32,62,53,0.06),0_8px_24px_-16px_rgba(32,62,53,0.35)] q-flex q-flex-col q-gap-2">
              <div className="q-flex q-items-baseline q-gap-2">
                <span className="q-font-question-lg q-text-[40px] q-leading-none q-tracking-tight q-text-error q-font-semibold">
                  {"quase 70%"}
                </span>
              </div>
              <p className="q-font-caption q-text-caption q-text-on-surface-variant q-leading-snug">
                {" do peso perdido voltou em um ano, em quem usou só a caneta e parou. Para quem perdeu 14 kg, são quase 10 de volta. Estudo da Universidade de Copenhague. "}
              </p>
            </div>
            <div className="q-mt-space-md q-bg-secondary-fixed/50 q-rounded-xl q-p-4 q-flex q-flex-col q-gap-1.5">
              <h2 className="q-font-option-label q-text-option-label q-text-on-secondary-fixed-variant q-font-semibold">
                {" O que isso significa para você "}
              </h2>
              <p className="q-font-caption q-text-caption q-text-on-secondary-fixed-variant q-leading-relaxed">
                {" No dia em que a caneta sair, a fome volta e o corpo puxa para o peso que ele lembra. Essa memória age com mais força em um corpo fraco, e é na caneta que o corpo mais enfraquece sem a mulher perceber. "}
              </p>
            </div>
            <p className="q-font-caption q-text-caption q-text-on-surface-variant q-leading-normal q-my-space-md" style={{ fontFamily: "Geist, sans-serif", fontSize: "16px", lineHeight: "1.5", color: "rgb(86, 101, 77)" }}>
              {" Corpo fraco avisa antes. As próximas perguntas identificam os alertas do seu corpo. A primeira é um teste de 5 segundos. "}
            </p>
          </div>
        </main>
        <aside className="q-fixed q-bottom-0 q-w-full q-z-50 pb-safe q-bg-surface/90 q-backdrop-blur-xl q-shadow-[0_-4px_16px_rgba(32,62,53,0.04)]">
          <div className="q-max-w-[520px] q-mx-auto q-px-margin q-py-3 q-flex q-items-center">
            <button onClick={q.proxima} className="q-w-full q-text-on-primary q-rounded-xl q-flex q-items-center q-justify-center q-shadow-[0_8px_24px_-16px_rgba(32,62,53,0.35)] q-active:scale-[0.99] q-transition-all" style={{ height: "54px", backgroundColor: "rgb(32, 62, 53)", fontFamily: "Geist, sans-serif", fontSize: "16px", fontWeight: "600" }} type="button">
              {"Fazer o teste"}
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
