// Tela 28 — convertida de scripts/quiz-mia/stitch/28.html (Stitch, projeto "MIA · Quiz de vendas").
import type { TelaProps } from "../_quiz/tipos";
import { FASE_NOME, FASE_TRILHA, ROTULO, contagem, metas, resumoAlertas } from "../_quiz/regras";
import { cx, primeiroNome } from "../_quiz/ui";

const TRILHA = ["Emagrecimento", "Platô", "Recomposição", "Saída da caneta"];
// colunas proporcionais ao tamanho de cada nome, para "Emagrecimento" não encostar em "Platô"
const COLUNAS_TRILHA = { gridTemplateColumns: "1.35fr 0.7fr 1.25fr 1fr" };
const VALOR_META = { fontSize: 22, whiteSpace: "nowrap" } as const;

// Resultado. Um modelo para as pranchetas 28 (3 graves) e 28b (2 em atenção); cartões e textos saem das respostas.
export default function T28({ q }: TelaProps) {
  const fase = q.r.fase ?? 1;
  const etapa = FASE_TRILHA[fase];
  const nome = primeiroNome(q.r.nome) || "Ana";
  const resumo = resumoAlertas(q.alertas);
  const { graves } = contagem(q.alertas);
  const abertos = q.alertas.filter((a) => a.status !== "ok").length;
  const m = metas(q.r);
  const texto =
    graves > 0
      ? `Você quer chegar em ${q.r.meta} kg. Do jeito que o seu corpo está hoje, o risco é chegar lá e o peso voltar. ${
          abertos === 3 ? "Os três alertas têm solução" : abertos === 2 ? "Os dois alertas têm solução" : "O alerta tem solução"
        }, e o melhor momento é agora, com a caneta trabalhando a seu favor.`
      : "Você está fazendo muita coisa certa, mas ainda não é o suficiente para o peso ficar. Na caneta, o corpo muda a cada quilo e a cada fase, e um alerta em atenção vira grave sem aviso.";
  return (
    <div data-tela="28">
      <div data-body className="q-bg-surface q-font-body-md q-text-on-surface q-antialiased q-min-h-screen q-flex q-flex-col q-justify-between q-selection:bg-primary-fixed q-selection:text-on-primary-fixed">
        <main className="q-flex-1 q-flex q-flex-col q-relative q-w-full q-max-w-[520px] q-mx-auto q-bg-surface">
          <div className="q-flex q-flex-col q-w-full q-text-on-surface">
            <header className="q-w-full q-flex q-items-center q-justify-center q-pt-6 q-pb-4">
              <div className="q-relative q-w-8 q-h-8 q-rounded-full q-shadow-[0_4px_12px_rgba(32,62,53,0.18)]" style={{ background: "radial-gradient(circle at 35% 30%, #a4d0b7 0%, #46645a 48%, #203e35 85%, #082820 100%)" }}>
                <div className="q-absolute q-inset-0 q-rounded-full q-opacity-60 q-mix-blend-overlay" style={{ background: "radial-gradient(circle at 50% 15%, #ffffff 0%, transparent 60%)" }} />
              </div>
            </header>
            <div className="q-flex q-flex-col q-px-margin q-pb-28">
              <section className="q-flex q-flex-col q-mt-2">
                <span className="q-font-body-md q-text-[12px] q-font-semibold q-uppercase q-tracking-[0.12em] q-text-[#8A6418]">
                  {"SEU DIAGNÓSTICO"}
                </span>
                <h1 className="q-font-headline-lg q-text-[30px] q-leading-tight q-font-semibold q-text-primary-container q-mt-1.5">
                  {`${nome}, o seu corpo está com ${resumo.txt}.`}
                </h1>
                <p className="q-font-body-md q-text-base q-leading-relaxed q-text-[#56654D] q-mt-3">
                  {texto}
                </p>
              </section>
              <section className="q-mt-6 q-bg-surface-container-lowest q-rounded-2xl q-p-4 q-shadow-[0_1px_2px_rgba(32,62,53,0.06),0_8px_24px_-16px_rgba(32,62,53,0.25)] q-border q-border-[#EDEEEB]">
                <div className="q-flex q-items-center q-gap-2">
                  <span className="q-bg-[#FBF1DC] q-text-[#8A6418] q-px-2.5 q-py-1 q-rounded-full q-text-xs q-font-semibold">
                    {"Sua fase"}
                  </span>
                  <h2 className="q-text-[17px] q-font-semibold q-text-primary-container">
                    {FASE_NOME[fase]}
                  </h2>
                </div>
                <div className="q-grid q-grid-cols-4 q-gap-2 q-mt-4" style={COLUNAS_TRILHA}>
                  {TRILHA.map((t, i) => (
                    <div key={t} className={cx("q-h-1 q-rounded-full", i === etapa ? "q-bg-[#D9A441]" : "q-bg-[#DDE3DA]")} />
                  ))}
                </div>
                <div className="q-grid q-grid-cols-4 q-gap-2 q-mt-2" style={COLUNAS_TRILHA}>
                  {TRILHA.map((t, i) => (
                    <span key={t} className={i === etapa ? "q-text-[11px] q-font-bold q-text-primary-container q-leading-tight" : "q-text-[11px] q-text-[#8A9584] q-leading-tight"}>
                      {t}
                    </span>
                  ))}
                </div>
              </section>
              <section className="q-flex q-flex-col q-gap-3 q-mt-6">
                {q.alertas.map((al, i) => (
                  <article key={al.nome} className="q-relative q-bg-surface-container-lowest q-rounded-2xl q-p-4 q-shadow-[0_1px_2px_rgba(32,62,53,0.06),0_8px_24px_-16px_rgba(32,62,53,0.25)] q-border q-border-[#EDEEEB] q-overflow-hidden">
                    <div className={cx("q-absolute q-left-0 q-top-0 q-bottom-0 q-w-[3px]", al.status === "grave" ? "q-bg-[#A1312A]" : al.status === "ok" ? "q-bg-[#2F6B45]" : "q-bg-[#D9A441]")} />
                    <div className="q-flex q-items-center q-justify-between q-pl-1">
                      <h3 className="q-text-base q-font-semibold q-text-primary-container">
                        {al.nome}
                      </h3>
                      <span className={cx("q-px-2.5 q-py-0.5 q-rounded-full q-text-xs q-font-semibold", al.status === "grave" ? "q-text-[#A1312A] q-bg-[#FBECEB]" : al.status === "ok" ? "q-text-[#2F6B45] q-bg-[#E5F1E8]" : "q-text-[#7A5619] q-bg-[#F8EFDC]")}>
                        {ROTULO[al.status]}
                      </span>
                    </div>
                    <p className="q-text-[14px] q-text-[#56654D] q-mt-2 q-pl-1 q-leading-snug">
                      <strong className="q-font-semibold q-text-primary-container">
                        {"O que apareceu:"}
                      </strong>
                      {" " + al.apareceu + " "}
                    </p>
                    {al.status === "grave" && (
                      <p className="q-text-[14px] q-text-[#A1312A] q-mt-1 q-pl-1 q-leading-snug">
                        <strong className="q-font-semibold q-text-[#A1312A]">
                          {"Se nada mudar:"}
                        </strong>
                        {" " + al.seNada + " "}
                      </p>
                    )}
                    {al.status === "atencao" && (
                      <p className="q-text-[14px] q-text-[#7A5619] q-mt-1 q-pl-1 q-leading-snug">
                        <strong className="q-font-semibold q-text-[#7A5619]">
                          {"Se nada mudar:"}
                        </strong>
                        {" " + al.seNada + " "}
                      </p>
                    )}
                    {al.status !== "ok" && (
                      <div className="q-mt-3 q-pt-2 q-border-t q-border-[#F3F4F1] q-flex q-items-center q-justify-between q-pl-1 q-gap-2">
                        <div className="q-flex q-items-center q-gap-1.5 q-min-w-0 q-flex-1 q-overflow-hidden">
                          <span className="q-font-semibold q-text-sm q-text-primary-container q-shrink-0">
                            {"Como resolver:"}
                          </span>
                          {al.status === "grave" ? (
                            <div className={cx("q-h-[10px] q-rounded-[6px] q-bg-[#DDE3DA] q-blur-[2px]", ["q-w-[50%]", "q-w-[58%]", "q-w-[46%]"][i])} />
                          ) : (
                            <div className="q-flex-1 q-flex q-items-center q-gap-1.5 q-overflow-hidden">
                              <div className={cx("q-bg-[#DDE3DA] q-rounded-[6px] q-h-[10px] q-filter q-blur-[2px]", ["q-w-[55%]", "q-w-[55%]", "q-w-[50%]"][i])} />
                              <div className={cx("q-bg-[#DDE3DA] q-rounded-[6px] q-h-[10px] q-filter q-blur-[2px]", ["q-w-[35%]", "q-w-[35%]", "q-w-[30%]"][i])} />
                            </div>
                          )}
                        </div>
                        <div className="q-shrink-0 q-bg-[#FBF1DC] q-border q-border-[#E8D4A8] q-text-[#8A6418] q-px-2.5 q-py-1 q-rounded-full q-text-xs q-font-medium q-flex q-items-center q-gap-1">
                          <svg className="q-w-3 q-h-3 q-fill-current" viewBox="0 0 24 24">
                        <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                      </svg>
                          {" "}
                          <span>
                            {"no seu plano"}
                          </span>
                        </div>
                      </div>
                    )}
                  </article>
                ))}
              </section>
              <section className="q-mt-8 q-flex q-flex-col">
                <h2 className="q-text-[17px] q-font-semibold q-text-primary-container q-mb-3">
                  {"As suas metas por dia"}
                </h2>
                <div className="q-grid q-grid-cols-3 q-gap-2">
                  <div className="q-bg-surface-container-lowest q-border q-border-[#EDEEEB] q-rounded-2xl q-p-3 q-shadow-sm q-flex q-flex-col q-justify-between">
                    <span className="q-font-semibold q-text-[24px] q-text-primary-container q-leading-none" style={VALOR_META}>
                      {`${m.prot} g`}
                    </span>
                    {" "}
                    <span className="q-text-[12px] q-text-[#56654D] q-leading-tight q-mt-1">
                      {`de proteína, ${m.porRefeicao}\u00A0g por refeição`}
                    </span>
                  </div>
                  <div className="q-bg-surface-container-lowest q-border q-border-[#EDEEEB] q-rounded-2xl q-p-3 q-shadow-sm q-flex q-flex-col q-justify-between">
                    <span className="q-font-semibold q-text-[24px] q-text-primary-container q-leading-none" style={VALOR_META}>
                      {`${m.agua} L`}
                    </span>
                    {" "}
                    <span className="q-text-[12px] q-text-[#56654D] q-leading-tight q-mt-1">
                      {"de água"}
                    </span>
                  </div>
                  <div className="q-bg-surface-container-lowest q-border q-border-[#EDEEEB] q-rounded-2xl q-p-3 q-shadow-sm q-flex q-flex-col q-justify-between">
                    <span className="q-font-semibold q-text-[24px] q-text-primary-container q-leading-none" style={VALOR_META}>
                      {"17 min"}
                    </span>
                    {" "}
                    <span className="q-text-[12px] q-text-[#56654D] q-leading-tight q-mt-1">
                      {"de movimento em casa"}
                    </span>
                  </div>
                </div>
                <p className="q-text-[14px] q-text-[#56654D] q-mt-3 q-leading-relaxed">
                  {" Bater esses números com a fome desligada é a parte difícil. O seu plano resolve isso refeição por refeição. "}
                </p>
              </section>
              <section className="q-mt-6 q-flex q-flex-col">
                <h2 className="q-text-[17px] q-font-semibold q-text-primary-container q-mb-3">
                  {"O primeiro dia do seu plano"}
                </h2>
                <div className="q-relative q-bg-surface-container-lowest q-border q-border-[#EDEEEB] q-rounded-2xl q-p-4 q-shadow-sm q-overflow-hidden">
                  <div className="q-flex q-flex-col q-divide-y q-divide-[#F3F4F1] q-select-none">
                    <div className="q-py-2.5 q-first:pt-0 q-flex q-items-center q-gap-3">
                      <span className="q-text-[12px] q-uppercase q-font-body-md q-font-semibold q-text-[#56654D] q-w-16 q-shrink-0">
                        {"CAFÉ"}
                      </span>
                      <div className="q-flex-1 q-flex q-items-center q-gap-2">
                        <div className="q-h-[10px] q-rounded-[6px] q-bg-[#DDE3DA] q-w-[65%] q-blur-[2px]" />
                      </div>
                    </div>
                    <div className="q-py-2.5 q-flex q-items-center q-gap-3">
                      <span className="q-text-[12px] q-uppercase q-font-body-md q-font-semibold q-text-[#56654D] q-w-16 q-shrink-0">
                        {"ALMOÇO"}
                      </span>
                      <div className="q-flex-1 q-flex q-items-center q-gap-2">
                        <div className="q-h-[10px] q-rounded-[6px] q-bg-[#DDE3DA] q-w-[72%] q-blur-[2px]" />
                      </div>
                    </div>
                    <div className="q-py-2.5 q-flex q-items-center q-gap-3">
                      <span className="q-text-[12px] q-uppercase q-font-body-md q-font-semibold q-text-[#56654D] q-w-16 q-shrink-0">
                        {"LANCHE"}
                      </span>
                      <div className="q-flex-1 q-flex q-items-center q-gap-2">
                        <div className="q-h-[10px] q-rounded-[6px] q-bg-[#DDE3DA] q-w-[48%] q-blur-[2px]" />
                      </div>
                    </div>
                    <div className="q-py-2.5 q-last:pb-0 q-flex q-items-center q-gap-3">
                      <span className="q-text-[12px] q-uppercase q-font-body-md q-font-semibold q-text-[#56654D] q-w-16 q-shrink-0">
                        {"JANTAR"}
                      </span>
                      <div className="q-flex-1 q-flex q-items-center q-gap-2">
                        <div className="q-h-[10px] q-rounded-[6px] q-bg-[#DDE3DA] q-w-[58%] q-blur-[2px]" />
                      </div>
                    </div>
                  </div>
                  <div className="q-absolute q-inset-0 q-flex q-items-center q-justify-center q-p-4 q-bg-white/40 q-backdrop-blur-[1px]">
                    <div className="q-bg-[#FBF1DC] q-border q-border-[#E8D4A8] q-text-[#8A6418] q-px-4 q-py-2 q-rounded-full q-text-xs q-font-semibold q-shadow-md q-flex q-items-center q-gap-1.5">
                      <svg className="q-w-3.5 q-h-3.5 q-fill-current" viewBox="0 0 24 24">
                        <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                      </svg>
                      {" "}
                      <span>
                        {"liberado no seu plano"}
                      </span>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="q-fixed q-bottom-0 q-left-0 q-right-0 q-max-w-[520px] q-mx-auto q-p-margin pb-safe q-bg-gradient-to-t q-from-surface q-via-surface/95 q-to-transparent q-z-40 q-pointer-events-none">
              <button type="button" onClick={q.proxima} className="q-w-full q-h-[52px] q-rounded-full q-bg-[#203E35] q-hover:bg-[#18312a] q-text-[#FFFFFF] q-font-semibold q-text-base q-shadow-[0_8px_20px_-4px_rgba(32,62,53,0.4)] q-pointer-events-auto q-transition-colors q-flex q-items-center q-justify-center q-active:scale-[0.99]">
                {abertos === 1 ? "Resolver o meu alerta" : `Resolver os meus ${abertos} alertas`}
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
