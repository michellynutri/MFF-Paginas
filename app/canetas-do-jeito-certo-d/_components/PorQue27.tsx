import { PRECO } from "../../canetas-do-jeito-certo-_shared/_components/constants";

// Seção 13 — justifica o preço baixo. Sem ela, R$ 27 depois de uma âncora de
// R$ 358 levanta a pergunta "onde está a pegadinha?", e a pessoa responde
// sozinha, do jeito errado.
//
// A copy v5 traz só as duas razões. Mantive assim, sem o parágrafo de upsell
// declarado que a variante C tem: aquele texto anuncia um acompanhamento mais
// fundo depois, e nesta variante a próxima oferta é o Método Metabólico
// Feminino, cuja régua ainda vai ser reescrita neste mesmo eixo. Anunciar aqui
// um upsell que a régua ainda não sustenta cria expectativa que ninguém
// atende. Quando a régua do MMF estiver pronta, avaliar reintroduzir.

export function PorQue27() {
  return (
    <section className="bg-cjc-dia-superficie border-y border-cjc-dia-linha-suave py-16 md:py-24 px-6 md:px-20">
      <div className="max-w-[760px] mx-auto">
        <h2 className="font-cjc-display text-[29px] md:text-[42px] leading-[1.12] md:leading-[1.06] font-semibold text-cjc-dia-texto mb-8">
          Por que tão barato?
        </h2>

        <div className="font-sans text-[16px] md:text-[18px] leading-[1.75] text-cjc-dia-texto-suave space-y-5">
          <p>
            Porque eu quero que o máximo de mulheres aprenda a comer do jeito
            certo <em className="italic">antes</em> de perder músculo no escuro
            — não depois. A {PRECO}, não tem barreira.
          </p>
          <p className="text-cjc-dia-texto">
            E porque quem investe, presta atenção e aparece.{" "}
            <strong className="font-semibold">
              É com essa mulher que eu quero passar essas 2 horas.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}
