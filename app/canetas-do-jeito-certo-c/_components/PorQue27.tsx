import { PRECO } from "../../canetas-do-jeito-certo-_shared/_components/constants";

// Seção 15 — justifica o preço baixo. Sem ela, R$ 27 depois de uma âncora de
// R$ 358 levanta a pergunta "onde está a pegadinha?", e a pessoa responde
// sozinha, do jeito errado. O terceiro parágrafo declara o upsell na cara —
// é o que sustenta a credibilidade dos dois primeiros.

export function PorQue27() {
  return (
    <section className="bg-cjc-dia-superficie border-y border-cjc-dia-linha-suave py-16 md:py-24 px-6 md:px-20">
      <div className="max-w-[760px] mx-auto">
        <h2 className="font-cjc-display text-[29px] md:text-[42px] leading-[1.12] md:leading-[1.06] font-semibold text-cjc-dia-texto mb-8">
          Por que só {PRECO}?
        </h2>

        <div className="font-sans text-[16px] md:text-[18px] leading-[1.75] text-cjc-dia-texto-suave space-y-5">
          <p>Duas razões, e as duas são honestas.</p>
          <p>
            <strong className="font-semibold text-cjc-dia-texto">
              A primeira:
            </strong>{" "}
            eu quero que o máximo de mulheres aprenda isso{" "}
            <em className="italic">antes</em> de cometer os cinco erros — não
            depois. A {PRECO}, não tem barreira.
          </p>
          <p>
            <strong className="font-semibold text-cjc-dia-texto">
              A segunda:
            </strong>{" "}
            quem investe, presta atenção. Uma sessão paga junta a mulher que está
            decidida a fazer diferente — e é com ela que eu quero passar essas
            duas horas.
          </p>
          <p>
            E, sendo transparente: algumas mulheres que entram vão querer seguir
            comigo num acompanhamento mais fundo depois. Ótimo se for o seu caso,
            ótimo se não for. A sessão te entrega tudo o que você precisa pra
            começar a fazer do jeito certo por conta própria.
          </p>
        </div>
      </div>
    </section>
  );
}
