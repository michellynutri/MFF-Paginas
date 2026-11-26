// Tela 19 — convertida de scripts/quiz-mia/stitch/19.html (Stitch, projeto "MIA · Quiz de vendas").
import type { TelaProps } from "../_quiz/tipos";
import { pontos } from "../_quiz/ui";

const PASSO = 250;
const MIN = 250;
const MAX = 3000;
// Na prancheta, 1,5 L enche 60% da garrafa: a escala vai até 2,5 L (100%); acima disso fica cheia.
const ESCALA = 2500;
/** 1500 → "1,5 L"; 1000 → "1 L"; 1250 → "1,25 L" */
const litros = (ml: number) => `${String(ml / 1000).replace(".", ",")} L`;

export default function T19({ q }: TelaProps) {
  const p = pontos(q);
  const agua = q.r.agua;
  const nivel = Math.min(100, (agua / ESCALA) * 100);
  const muda = (delta: number) => q.set({ agua: Math.min(MAX, Math.max(MIN, agua + delta)), aguaNaoSei: false });
  return (
    <div data-tela="19">
      <div data-body className="q-min-h-screen q-flex q-justify-center q-items-start q-bg-[#F9FAF7]">
        <main className="q-w-[390px] q-min-h-[844px] q-bg-[#F9FAF7] q-flex q-flex-col q-px-5 q-pt-3 q-pb-12 q-select-none q-relative" data-purpose="app-artboard">
          <div className="q-flex q-flex-col q-w-full">
            <header className="q-flex q-items-center q-justify-between q-w-full q-mb-5">
              <button aria-label="Voltar" onClick={q.voltar} className="q-flex q-items-center q-justify-center q-w-8 q-h-8 q-rounded-full text-primary-container hover:bg-surface-container q-active:scale-95 q-transition-transform" type="button">
                <span className="material-symbols-outlined q-text-[24px]">
                  {"chevron_left"}
                </span>
              </button>
              <div aria-hidden="true" className="glossy-sphere q-flex-shrink-0" />
              <div aria-hidden="true" className="q-w-8 q-h-8 q-pointer-events-none" />
            </header>
            <div aria-valuemax={100} aria-valuemin={0} aria-valuenow={70} className="q-w-full q-flex q-items-center q-gap-[6px] q-mb-2.5" role="progressbar">
              <div className="q-flex-1 q-h-1 q-rounded-full q-bg-[#D9A441] q-overflow-hidden" />
              <div className="q-flex-1 q-h-1 q-rounded-full q-bg-[#D9A441] q-overflow-hidden" />
              <div className="q-flex-1 q-h-1 q-rounded-full q-bg-[#DDE3DA] q-overflow-hidden q-flex">
                <div className="q-h-full q-bg-[#D9A441] q-w-[70%] q-rounded-l-full" />
                <div className="q-h-full q-bg-[#DDE3DA] q-w-[30%]" />
              </div>
              <div className="q-flex-1 q-h-1 q-rounded-full q-bg-[#DDE3DA]" />
            </div>
            <div className="q-flex q-items-center q-justify-between q-w-full q-mb-8">
              <span className="q-font-sans q-text-[12px] q-text-[#56654D] q-font-medium q-tracking-normal">
                {"O que cabe no seu dia"}
              </span>
              <div className="q-flex q-items-center q-gap-2">
                <span className="q-font-sans q-text-[12px] q-text-[#56654D] q-font-medium q-lowercase q-tracking-normal">
                  {"alertas"}
                </span>
                <div className="q-flex q-items-center q-gap-1.5">
                  <span aria-hidden="true" className="q-w-2 q-h-2 q-rounded-full" style={p[0]} />
                  <span aria-hidden="true" className="q-w-2 q-h-2 q-rounded-full" style={p[1]} />
                  <span aria-hidden="true" className="q-w-2 q-h-2 q-rounded-full" style={p[2]} />
                </div>
              </div>
            </div>
            <section className="q-flex q-flex-col q-w-full q-mb-6">
              <h1 className="font-question-lg q-text-[24px] q-leading-[30px] q-font-semibold text-primary-container q-tracking-tight">
                {" Quanta água você bebe por dia? "}
              </h1>
            </section>
            <div className="q-flex q-flex-col q-items-center q-w-full q-flex-1 q-justify-between q-pt-2" id="water-bottle-control">
              <div className="q-flex q-flex-col q-items-center q-w-full">
                <div className="q-relative q-flex q-items-center q-justify-center q-mb-6 q-pl-12">
                  <div className="q-flex q-flex-col q-items-center">
                    <div className="q-w-8 q-h-3.5 q-bg-[#426B56] q-rounded-t-[6px] q-mb-[1px]" />
                    <div className="q-relative q-w-[120px] q-h-[220px] q-bg-white q-rounded-t-[28px] q-rounded-b-[32px] q-border-2 q-border-[#426B56] q-overflow-hidden q-flex q-flex-col q-justify-end q-shadow-sm">
                      <div className="q-w-full q-bg-[#82C1CF] q-transition-all q-duration-300" style={{ height: `${nivel}%` }} />
                    </div>
                  </div>
                  <div className="q-flex q-flex-col q-justify-between q-h-[220px] q-ml-4 q-py-2">
                    <div className="q-flex q-items-center q-gap-1.5">
                      <div className="q-w-2.5 q-h-[1.5px] q-bg-[#56654D]" />
                      <span className="q-text-[11px] q-leading-none q-text-[#56654D] q-font-medium q-font-sans">
                        {"2,5 L"}
                      </span>
                    </div>
                    <div className="q-flex q-items-center q-gap-1.5">
                      <div className="q-w-2.5 q-h-[1.5px] q-bg-[#56654D]" />
                      <span className="q-text-[11px] q-leading-none q-text-[#56654D] q-font-medium q-font-sans">
                        {"2 L"}
                      </span>
                    </div>
                    <div className="q-flex q-items-center q-gap-1.5">
                      <div className="q-w-2.5 q-h-[1.5px] q-bg-[#56654D]" />
                      <span className="q-text-[11px] q-leading-none q-text-[#56654D] q-font-medium q-font-sans">
                        {"1,5 L"}
                      </span>
                    </div>
                    <div className="q-flex q-items-center q-gap-1.5">
                      <div className="q-w-2.5 q-h-[1.5px] q-bg-[#56654D]" />
                      <span className="q-text-[11px] q-leading-none q-text-[#56654D] q-font-medium q-font-sans">
                        {"1 L"}
                      </span>
                    </div>
                    <div className="q-flex q-items-center q-gap-1.5">
                      <div className="q-w-2.5 q-h-[1.5px] q-bg-[#56654D]" />
                      <span className="q-text-[11px] q-leading-none q-text-[#56654D] q-font-medium q-font-sans">
                        {"0,5 L"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="q-flex q-flex-col q-items-center q-mb-6">
                  <span className="q-text-[32px] q-font-semibold q-leading-[38px] q-text-[#203E35] q-font-sans" aria-live="polite">
                    {litros(agua)}
                  </span>
                  <span className="q-text-[13px] q-leading-tight q-text-[#56654D] q-font-sans">
                    {"por dia"}
                  </span>
                </div>
                <div className="q-flex q-items-center q-justify-center q-gap-3 q-w-full q-mb-5">
                  <button type="button" onClick={() => muda(-PASSO)} disabled={agua <= MIN} className="q-flex-1 q-h-12 q-bg-white q-border q-border-[#DDE3DA] q-rounded-2xl q-text-[15px] q-font-semibold q-text-[#203E35] q-flex q-items-center q-justify-center q-active:scale-95 q-transition-transform q-font-sans q-shadow-sm q-disabled:opacity-40">
                    {"− 250 ml"}
                  </button>
                  <button type="button" onClick={() => muda(PASSO)} disabled={agua >= MAX} className="q-flex-1 q-h-12 q-bg-white q-border q-border-[#DDE3DA] q-rounded-2xl q-text-[15px] q-font-semibold q-text-[#203E35] q-flex q-items-center q-justify-center q-active:scale-95 q-transition-transform q-font-sans q-shadow-sm q-disabled:opacity-40">
                    {"+ 250 ml"}
                  </button>
                </div>
                <button type="button" onClick={() => { q.set({ aguaNaoSei: true }); q.proxima(); }} className="q-text-[14px] q-text-[#426B56] q-underline q-font-sans q-hover:opacity-80 q-transition-opacity">
                  {"Não faço ideia"}
                </button>
              </div>
            </div>
          </div>
          <div className="q-sticky q-bottom-5 q-left-0 q-right-0 q-w-full q-pt-4 q-mt-auto">
            <button type="button" onClick={q.proxima} className="q-w-full q-h-[54px] q-bg-[#203E35] q-text-white q-rounded-2xl q-font-semibold q-text-[16px] q-flex q-items-center q-justify-center q-active:scale-[0.99] q-transition-transform q-font-sans q-shadow-sm">
              {"Continuar"}
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
