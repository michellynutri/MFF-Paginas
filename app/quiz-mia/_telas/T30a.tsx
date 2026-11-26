// Tela 30a — convertida de scripts/quiz-mia/stitch/30a.html (Stitch, projeto "MIA · Quiz de vendas").
import { useState } from "react";
import type { TelaProps } from "../_quiz/tipos";
import { GASTO, PLANOS, PRECO_CHEIO, precoDia } from "../_quiz/regras";
import { COM_FOTO } from "../_quiz/depoimentos";
import VideoApp from "../_quiz/VideoApp";
import { cx, primeiroNome } from "../_quiz/ui";

const LEVA = [
  "O seu plano, montado com o que você gosta de comer",
  "O plano certo para cada fase: emagrecimento, platô, recomposição e saída da caneta",
  "Ajuste toda semana, conforme o peso, a fome e os sintomas",
  "Mia, sua nutricionista treinada de IA, para tirar a dúvida na hora",
  "O que fazer no dia do enjoo e do intestino preso",
  "Os 17 minutos de movimento, em casa",
];
const FAQ: [string, string][] = [
  ["Funciona com Mounjaro?", "Funciona com Ozempic, Wegovy, Mounjaro ou outra caneta. O plano já vem pensado para a sua caneta e a sua fase."],
  ["E se eu ainda nem comecei a caneta?", "É o melhor momento: você começa protegendo o músculo desde a primeira aplicação."],
  ["Já parei a caneta e o peso está voltando. Ainda dá tempo?", "Dá, e quanto antes, melhor. Quando o corpo volta a ficar forte, o peso tem muito mais dificuldade de voltar."],
  ["Isso substitui o meu médico?", "Não. O seu médico continua cuidando da caneta e da dose. A MIA cuida da alimentação."],
  ["Vou ter que ir para a academia?", "Não. São 17 minutos em casa, no seu ritmo."],
];

// Oferta (prancheta 30a). Quando o cronômetro zera, a mesma página troca para o estado da 30b:
// faixa "A sua promoção terminou", sem preço riscado nem selo de desconto, R$ 129 por mês e R$ 4,61 por dia.
export default function T30a({ q }: TelaProps) {
  const [aberta, setAberta] = useState<number | null>(null);
  const ativa = q.promo.ativa;
  const nome = primeiroNome(q.r.nome) || "Ana";
  const abertos = q.alertas.filter((a) => a.status !== "ok").length;
  const dia = precoDia(q.r.plano, ativa);
  return (
    <div data-tela="30a">
      <div data-body className="q-min-h-screen q-flex q-justify-center q-bg-[#F9FAF7]">
        <main className="q-w-full q-max-w-[390px] q-min-h-screen q-bg-[#F9FAF7] q-flex q-flex-col q-relative q-pb-40">
          <header className={cx("q-w-full q-h-[44px] q-flex q-items-center q-justify-between q-px-5 q-text-white q-sticky q-top-0 q-z-30", ativa ? "q-bg-[#203E35]" : "q-bg-[#56654D]")}>
            <span className="q-text-[14px] q-font-normal q-leading-none q-tracking-tight">
              {ativa ? "A sua promoção termina em" : "A sua promoção terminou"}
            </span>
            <div className={cx("q-px-2.5 q-py-1 q-rounded-full q-flex q-items-center q-justify-center", ativa ? "q-bg-[#2F5447]" : "q-bg-[#45523E]")}>
              <span className="q-font-mono q-text-[14px] q-font-semibold q-text-white q-tracking-wider q-leading-none">
                {q.promo.relogio}
              </span>
            </div>
          </header>
          <div className="q-px-5 q-pt-7 q-flex q-flex-col q-items-center">
            <div className="sphere-logo q-mb-6" aria-hidden="true" />
            <h1 className="q-font-serif q-text-[28px] q-font-semibold q-text-[#203E35] q-text-center q-leading-[1.2] q-mb-2.5">
              {`${nome}, o seu plano está pronto. Escolha por quanto tempo.`}
            </h1>
            <p className="q-text-[15px] q-text-[#56654D] q-text-center q-leading-snug q-mb-7">
              {abertos === 1 ? "O seu alerta se resolve enquanto a caneta trabalha a seu favor." : `Os seus ${abertos} alertas se resolvem enquanto a caneta trabalha a seu favor.`}
            </p>
            <div className="q-w-full q-flex q-flex-col q-gap-3.5 q-mb-4" role="radiogroup" aria-label="Planos">
              {PLANOS.map((pl, i) => {
                const marcado = q.r.plano === i;
                return (
                  <button key={pl.nome} type="button" role="radio" aria-checked={marcado} onClick={() => q.set({ plano: i })} className={cx("q-relative q-rounded-[16px] q-p-4 q-flex q-items-center q-justify-between q-shadow-sm q-text-left q-w-full", marcado ? "q-bg-[#FBF1DC] q-border-2 q-border-[#203E35]" : "q-bg-white q-border q-border-[#DDE3DA]")}>
                    {i === 2 && (
                      <span className="q-absolute q--top-2.5 q-left-4 q-bg-[#FBF1DC] q-text-[#8A6418] q-text-[11px] q-font-semibold q-px-2.5 q-py-0.5 q-rounded-full q-leading-tight q-border q-border-[#D9A441] shadow-xs">
                        {" Mais escolhido "}
                      </span>
                    )}
                    {ativa && (
                      <span className="q-absolute q--top-2.5 q-right-4 q-bg-[#E5F1E8] q-text-[#2F6B45] q-text-[12px] q-font-semibold q-px-2 q-py-0.5 q-rounded-full q-leading-tight q-border q-border-[#2F6B45]/15">
                        {` −${pl.off}% `}
                      </span>
                    )}
                    <div className="q-flex q-items-center q-gap-3.5">
                      {marcado ? (
                        <div className="q-w-5 q-h-5 q-rounded-full q-border-[2px] q-border-[#203E35] q-flex q-items-center q-justify-center q-shrink-0 q-bg-white">
                          <div className="q-w-2.5 q-h-2.5 q-rounded-full q-bg-[#D9A441]" />
                        </div>
                      ) : (
                        <div className="q-w-5 q-h-5 q-rounded-full q-border-[1.5px] q-border-[#DDE3DA] q-flex q-items-center q-justify-center q-shrink-0" />
                      )}
                      <div>
                        <div className="q-text-[17px] q-font-semibold q-text-[#203E35] q-leading-tight">
                          {pl.nome}
                        </div>
                        <div className="q-text-[13px] q-text-[#56654D] q-mt-0.5 q-leading-tight">
                          {ativa && (
                            <span className="q-line-through q-text-[#56654D]/75">
                              {`R$ ${PRECO_CHEIO}`}
                            </span>
                          )}
                          {ativa && " "}
                          <span className="q-font-semibold q-text-[#203E35]">
                            {`R$ ${ativa ? pl.mes : PRECO_CHEIO} por mês`}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="q-text-right">
                      <div className="q-text-[24px] q-font-semibold q-text-[#203E35] q-font-sans q-tracking-tight q-leading-none">
                        {`R$ ${precoDia(i, ativa)}`}
                      </div>
                      <div className="q-text-[12px] q-text-[#56654D] q-mt-1 q-leading-none">
                        {"por dia"}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
            <div className="q-w-full q-bg-[#FBF1DC] q-rounded-[16px] q-p-4 q-mb-8 q-text-[#8A6418] q-text-[14px] q-leading-relaxed q-border q-border-[#D9A441]/20" style={{ padding: "10px 14px", marginBottom: 24, fontSize: 13, lineHeight: 1.45, borderRadius: 14 }}>
              {` Você investe ${GASTO[q.r.gasto ?? 1]} por mês na caneta. Por R$ ${dia} por dia, esse dinheiro não vai embora junto com o peso no dia em que você parar. `}
            </div>
            <VideoApp />
            <div className="q-w-full q-flex q-flex-col q-items-start q-mb-6">
              <h2 className="q-text-[17px] q-font-semibold q-text-[#203E35] q-leading-tight q-mb-1.5">
                {" O que você leva "}
              </h2>
              <p className="q-text-[14px] q-text-[#56654D] q-leading-normal q-mb-3.5">
                {" A MIA é a inteligência artificial criada pela Dra. Michelly Silveira, com o método que ela usa no consultório. "}
              </p>
              <div className="q-w-full q-bg-white q-rounded-[16px] q-border q-border-[#DDE3DA] q-p-4 q-flex q-flex-col q-gap-3.5 q-shadow-sm">
                {LEVA.map((t) => (
                  <div key={t} className="q-flex q-items-start q-gap-3">
                    <svg className="q-w-4 q-h-4 q-text-[#426B56] q-shrink-0 q-mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {" "}
                    <span className="q-text-[15px] q-font-medium q-text-[#203E35] q-leading-snug">
                      {t}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="q-w-full q-bg-[#203E35] q-rounded-[16px] q-p-4 q-mb-6 q-shadow-sm">
              <p className="q-text-[15px] q-text-white q-leading-relaxed">
                {` No consultório da Dra. Michelly, um ano de acompanhamento chega a R$ 9 mil. Na MIA, o método dela sai por R$ ${dia} por dia. `}
              </p>
            </div>
            {/* depoimentos reais de alunas da MIA, com o print que elas mandaram no grupo; desliza para o lado */}
            <div className="q-w-full q-mb-8">
              <h2 className="q-text-[17px] q-font-semibold q-text-[#203E35] q-leading-tight q-mb-3">
                {"Quem já está na MIA"}
              </h2>
              <div style={{ display: "flex", gap: 12, overflowX: "auto", scrollSnapType: "x mandatory", margin: "0 -20px", padding: "2px 20px 6px", scrollbarWidth: "none" }}>
                {COM_FOTO.map((d) => (
                  <figure key={d.nome} style={{ flex: "0 0 82%", scrollSnapAlign: "center", background: "#fff", border: "1px solid #DDE3DA", borderRadius: 16, overflow: "hidden", boxShadow: "0 1px 2px rgba(32,62,53,.05)" }}>
                    <img src={d.foto} alt={d.legenda} loading="lazy" style={{ display: "block", width: "100%", height: 220, objectFit: "cover", objectPosition: d.posicao ?? "center", background: "#F6F7F4" }} />
                    <figcaption style={{ padding: "14px 16px 16px" }}>
                      <p className="q-font-serif" style={{ fontStyle: "italic", fontSize: 17, lineHeight: 1.35, color: "#203E35" }}>{`“${d.texto}”`}</p>
                      <p style={{ fontSize: 13, color: "#56654D", marginTop: 8 }}>{`${d.nome}, aluna da MIA`}</p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
            <div className="q-w-full q-flex q-flex-col q-items-start q-mb-6">
              <h2 className="q-text-[17px] q-font-semibold q-text-[#203E35] q-leading-tight q-mb-3">
                {" Perguntas frequentes "}
              </h2>
              <div className="q-w-full q-bg-white q-rounded-[16px] q-border q-border-[#DDE3DA] q-divide-y q-divide-[#DDE3DA]/70 q-shadow-sm q-overflow-hidden">
                {FAQ.map(([pergunta, resposta], i) => (
                  <div key={pergunta}>
                    <button type="button" aria-expanded={aberta === i} onClick={() => setAberta(aberta === i ? null : i)} className="q-p-4 q-flex q-items-center q-justify-between q-w-full q-text-left">
                      <span className="q-text-[15px] q-font-medium q-text-[#203E35] q-pr-3">
                        {pergunta}
                      </span>
                      {" "}
                      <span className={cx("q-shrink-0 q-transition-transform q-duration-200", aberta === i && "q-rotate-45")}>
                        <svg className="q-w-4 q-h-4 q-text-[#56654D] q-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                      </span>
                    </button>
                    {aberta === i && (
                      <p className="q-px-4 q-pb-4 q--mt-1 q-text-[14px] q-text-[#56654D] q-leading-relaxed">
                        {resposta}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="q-fixed q-bottom-0 q-left-0 q-right-0 q-z-40 q-flex q-justify-center q-bg-gradient-to-t q-from-[#F9FAF7] q-via-[#F9FAF7]/95 q-to-transparent q-pt-4 q-pb-5 q-px-5 q-pointer-events-none">
            <div className="q-w-full q-max-w-[390px] q-flex q-flex-col q-items-center q-pointer-events-auto">
              <button type="button" onClick={q.comprar} className="q-w-full q-h-[52px] q-bg-[#203E35] q-hover:bg-[#19322b] q-active:scale-[0.99] q-text-white q-text-[16px] q-font-medium q-rounded-full q-flex q-items-center q-justify-center q-shadow-md q-transition-all">
                {" Começar o meu plano "}
              </button>
              <p className="q-text-[13px] q-text-[#56654D] q-text-center q-mt-2.5 q-leading-snug">
                {"Renova a cada ciclo; cancele quando quiser."}
              </p>
              <div
                className="q-flex q-items-center q-justify-center q-text-[#56654D]"
                style={{ gap: 5, marginTop: 4, fontSize: 11, lineHeight: 1.2, whiteSpace: "nowrap", opacity: 0.85 }}
              >
                <span>
                  {"Pagamento seguro"}
                </span>
                {" "}
                <span className="q-text-[10px] q-text-[#56654D]/60">
                  {"•"}
                </span>
                {" "}
                <span>
                  {"Acesso imediato"}
                </span>
                {" "}
                <span className="q-text-[10px] q-text-[#56654D]/60">
                  {"•"}
                </span>
                {" "}
                <span>
                  {"Garantia de 15 dias"}
                </span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
