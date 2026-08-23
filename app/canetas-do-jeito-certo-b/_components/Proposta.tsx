import { Cta } from "../../canetas-do-jeito-certo-_shared/_components/Cta";
import { Glow } from "../../canetas-do-jeito-certo-_shared/_components/Glow";
import { DURACAO, PRECO } from "../../canetas-do-jeito-certo-_shared/_components/constants";
import type { Sessao } from "../../canetas-do-jeito-certo-_shared/_components/sessao";

type Props = { sessao: Sessao };

// Seção 3 — a proposta. Junta num bloco só o que na variante A estava separado
// em ASessao ("o que é") e TresPassos ("o caminho"): a B apresenta o produto e
// o método de uma vez, antes de pedir o primeiro clique de checkout.

const passos = [
  {
    titulo: "Enxergar",
    texto:
      "Os sinais de que o seu corpo pode estar perdendo massa magra agora, e como reconhecer cada um em você. Você sai com essa leitura pronta pra levar ao seu médico e à sua nutricionista.",
  },
  {
    titulo: "Blindar",
    texto:
      "As três frentes em que o corpo perde saúde durante a caneta — saciedade e músculo, intestino, micronutrientes — e o que fazer em cada uma pra emagrecer mais e firme, sem depender de dose alta.",
  },
  {
    titulo: "Planejar",
    texto:
      "O que acontece no corpo quando a medicação sai, por que a fome volta com força, e como preparar essa fase desde a primeira aplicação — pra sair do tratamento dona do resultado.",
  },
];

export function Proposta({ sessao }: Props) {
  return (
    <section className="relative overflow-hidden bg-cjc-noite-esc py-16 md:py-24 px-6 md:px-20">
      <Glow className="top-[-180px] left-1/2 -translate-x-1/2 w-[620px] h-[520px]" />

      <div className="max-w-[1000px] mx-auto relative">
        <div className="text-center max-w-[780px] mx-auto mb-12 md:mb-16">
          <h2 className="font-cjc-display text-[29px] md:text-[46px] leading-[1.12] md:leading-[1.06] font-semibold text-cjc-texto mb-7">
            O que é a Sessão{" "}
            <em className="italic text-cjc-menta">Canetas do Jeito Certo</em>
          </h2>

          <div className="font-sans text-[16px] md:text-[19px] leading-[1.7] text-cjc-texto-suave space-y-5">
            <p>
              São {DURACAO} ao vivo com a Dra. Michelly, na próxima{" "}
              <span className="text-cjc-texto">{sessao.diaLongo}</span>, às 20h,
              para mulheres que usam canetas GLP-1 e querem atravessar o
              tratamento inteiro sem perder o resultado no fim.
            </p>
            <p>
              É conduta clínica, com o passo a passo detalhado do que você vai
              precisar. Você sai da sessão com{" "}
              <strong className="font-semibold text-cjc-texto">
                o mapa completo do seu tratamento na mão
              </strong>
              : enxergando os sinais no seu próprio corpo, com o protocolo
              pronto pra sua rotina, e com a saída da caneta deixando de ser um
              pesadelo.
            </p>
          </div>
        </div>

        <p className="font-sans text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.16em] text-cjc-menta text-center mb-7">
          O caminho tem 3 passos
        </p>

        <ol className="grid gap-4 md:grid-cols-3 md:gap-6">
          {passos.map((passo, i) => (
            <li
              key={passo.titulo}
              className="rounded-2xl border border-cjc-linha-suave bg-cjc-superficie p-6 md:p-8 flex flex-col"
            >
              <span
                className="font-cjc-display text-[38px] md:text-[46px] leading-none font-semibold text-cjc-menta/35 tabular-nums mb-5"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-cjc-display text-[21px] md:text-[24px] leading-tight font-semibold text-cjc-texto mb-3.5">
                {passo.titulo}
              </h3>
              <p className="font-sans text-[15px] leading-[1.65] text-cjc-texto-suave">
                {passo.texto}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-10 md:mt-12 rounded-2xl border border-cjc-ambar/25 bg-cjc-ambar/[0.06] p-6 md:p-8 text-center">
          <p className="font-cjc-display italic text-[19px] md:text-[23px] leading-[1.4] font-medium text-cjc-texto max-w-[680px] mx-auto">
            E tem um momento específico, dentro do desmame, em que a maioria das
            mulheres escorrega.{" "}
            <span className="text-cjc-ambar not-italic font-semibold">
              Eu vou te mostrar qual é, ao vivo.
            </span>
          </p>
        </div>

        <div className="flex justify-center mt-12 md:mt-14">
          <Cta dataCta="cjc-proposta">QUERO APRENDER ISSO — {PRECO}</Cta>
        </div>
      </div>
    </section>
  );
}
