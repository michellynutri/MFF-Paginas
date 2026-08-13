import { Cta } from "./Cta";
import { Glow } from "./Glow";
import { PRECO } from "./constants";
import type { Sessao } from "./sessao";

type Props = { sessao: Sessao };

export function Fechamento({ sessao }: Props) {
  return (
    <section className="relative overflow-hidden bg-cjc-noite py-18 md:py-28 px-6 md:px-20">
      <Glow
        className="bottom-[-220px] left-1/2 -translate-x-1/2 w-[680px] h-[520px]"
        opacidade={0.16}
      />

      <div className="max-w-[760px] mx-auto relative text-center">
        <h2 className="font-cjc-display text-[30px] md:text-[48px] leading-[1.1] md:leading-[1.05] font-semibold text-cjc-texto mb-8">
          Quantas vezes você já tentou,{" "}
          <em className="italic text-cjc-menta">até chegar na caneta?</em>
        </h2>

        <div className="font-sans text-[16px] md:text-[19px] leading-[1.75] text-cjc-texto-suave space-y-5 mb-10">
          <p>
            A dieta que você seguiu certinho e o peso voltou. A promessa de
            segunda-feira que virou culpa na sexta. Cada uma dessas vezes mostra
            uma mulher que se recusa a desistir de si mesma.
          </p>
          <p className="text-cjc-texto">
            Dessa vez você tem a caneta na mão. O que falta é o mapa para
            atravessar o tratamento inteiro e sair dele com o resultado ainda
            seu.
          </p>
          <p>
            A sessão acontece ao vivo na{" "}
            <span className="text-cjc-texto">{sessao.diaLongo}</span>, às 20h, e
            a sua vaga custa {PRECO}.
          </p>
        </div>

        <Cta to="checkout" variant="menta-grande" dataCta="cjc-fechamento">
          SIM, QUERO MINHA VAGA — {PRECO}
        </Cta>

        <p className="font-sans text-[12px] md:text-[13px] text-cjc-texto-fraco mt-6 leading-[1.6]">
          Confirmação imediata · Ao vivo com a Michelly · Garantia de satisfação
        </p>
      </div>
    </section>
  );
}
