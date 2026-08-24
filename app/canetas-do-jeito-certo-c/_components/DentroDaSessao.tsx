import { DURACAO } from "../../canetas-do-jeito-certo-_shared/_components/constants";
import type { Sessao } from "../../canetas-do-jeito-certo-_shared/_components/sessao";

type Props = { sessao: Sessao };

// Seção 12 — o que ela leva, nos três passos. Vem depois da qualificação de
// propósito: quem chegou até aqui já se reconheceu no problema e já se
// qualificou; só agora o conteúdo da sessão vira argumento de compra.

const passos = [
  {
    titulo: "Enxergar",
    texto:
      "os sinais de que a Fome Emprestada já está agindo em você agora, antes da balança acusar.",
  },
  {
    titulo: "Blindar",
    texto:
      "as três frentes em que o corpo perde saúde na caneta, e o que fazer em cada uma pra emagrecer mais e firme.",
  },
  {
    titulo: "Planejar",
    texto:
      "como preparar a saída desde já, pra sair do tratamento dona do resultado.",
  },
];

export function DentroDaSessao({ sessao }: Props) {
  return (
    <section className="bg-cjc-dia py-16 md:py-24 px-6 md:px-20">
      <div className="max-w-[900px] mx-auto">
        <h2 className="font-cjc-display text-[29px] md:text-[44px] leading-[1.12] md:leading-[1.06] font-semibold text-cjc-dia-texto mb-7">
          O que você leva da Sessão{" "}
          <em className="italic text-cjc-dia-menta">Canetas do Jeito Certo</em>
        </h2>

        <p className="font-sans text-[16px] md:text-[18px] leading-[1.75] text-cjc-dia-texto-suave mb-10 md:mb-12 max-w-[700px]">
          São {DURACAO} ao vivo, na próxima{" "}
          <strong className="font-semibold text-cjc-dia-texto">
            {sessao.diaLongo}, às 20h
          </strong>
          . Você sai com o mapa completo do seu tratamento na mão, em 3 passos:
        </p>

        <ol className="grid gap-4 md:grid-cols-3 md:gap-6 mb-10">
          {passos.map((passo, i) => (
            <li
              key={passo.titulo}
              className="rounded-2xl border border-cjc-dia-linha-suave bg-cjc-dia-superficie p-6 md:p-8"
            >
              <span
                className="font-cjc-display text-[34px] md:text-[42px] leading-none font-semibold text-cjc-dia-menta/30 tabular-nums block mb-4"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-cjc-display text-[21px] md:text-[24px] leading-tight font-semibold text-cjc-dia-texto mb-3">
                {passo.titulo}
              </h3>
              <p className="font-sans text-[15px] leading-[1.65] text-cjc-dia-texto-suave">
                {passo.texto}
              </p>
            </li>
          ))}
        </ol>

        <p className="font-cjc-display italic text-[19px] md:text-[24px] leading-[1.4] font-medium text-cjc-dia-texto max-w-[720px]">
          E um momento específico do desmame, em que a maioria escorrega —{" "}
          <span className="text-cjc-dia-menta not-italic font-semibold">
            eu mostro qual é, ao vivo.
          </span>
        </p>
      </div>
    </section>
  );
}
