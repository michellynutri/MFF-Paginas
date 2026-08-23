import { Cta } from "../../canetas-do-jeito-certo-_shared/_components/Cta";
import { Glow } from "../../canetas-do-jeito-certo-_shared/_components/Glow";
import { PRECO } from "../../canetas-do-jeito-certo-_shared/_components/constants";
import type { Sessao } from "../../canetas-do-jeito-certo-_shared/_components/sessao";

type Props = { sessao: Sessao };

// Seção 9 — fechamento por identidade. Mesma pergunta de abertura da variante
// A, com uma diferença de fundo na resposta: a A credita a persistência da
// leitora ("uma mulher que se recusa a desistir de si mesma"), a B credita a
// caneta que ela já tem na mão — coerente com a página inteira, que entra pelo
// desejo e trata a medicação como ativo, não como problema.

export function Fechamento({ sessao }: Props) {
  return (
    <section className="relative overflow-hidden bg-cjc-noite-esc py-18 md:py-28 px-6 md:px-20">
      <Glow
        className="bottom-[-220px] left-1/2 -translate-x-1/2 w-[680px] h-[520px]"
        opacidade={0.16}
      />

      <div className="max-w-[760px] mx-auto relative text-center">
        <h2 className="font-cjc-display text-[30px] md:text-[48px] leading-[1.1] md:leading-[1.05] font-semibold text-cjc-texto mb-8">
          Quantas vezes você já tentou emagrecer,{" "}
          <em className="italic text-cjc-menta">até chegar na caneta?</em>
        </h2>

        <div className="font-sans text-[16px] md:text-[19px] leading-[1.75] text-cjc-texto-suave space-y-5 mb-10">
          <p>
            A dieta que você seguiu certinho e o peso voltou. A promessa de
            segunda que virou culpa na sexta.
          </p>
          <p className="text-cjc-texto">
            Dessa vez é diferente por um motivo concreto: você tem a caneta na
            mão, e ela resolveu a parte que nenhuma tentativa anterior resolveu.
            O que falta agora é o mapa pra atravessar o tratamento inteiro e
            sair dele com o resultado ainda seu.
          </p>
          <p>
            É esse mapa que eu te entrego, ao vivo, na próxima{" "}
            <span className="text-cjc-texto">{sessao.diaLongo}</span>, às 20h —
            por{" "}
            <strong className="font-semibold text-cjc-texto">{PRECO}</strong>.
          </p>
        </div>

        <Cta to="checkout" variant="menta-grande" dataCta="cjc-fechamento">
          QUERO MINHA VAGA POR {PRECO}
        </Cta>

        <p className="font-sans text-[12px] md:text-[13px] text-cjc-texto-fraco mt-6 leading-[1.6]">
          Confirmação imediata · Ao vivo com a Michelly · Gravação inclusa por 7
          dias
        </p>
      </div>
    </section>
  );
}
