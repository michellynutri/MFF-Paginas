import { Glow } from "../../canetas-do-jeito-certo-_shared/_components/Glow";
import { DURACAO } from "../../canetas-do-jeito-certo-_shared/_components/constants";
import type { Sessao } from "../../canetas-do-jeito-certo-_shared/_components/sessao";

type Props = { sessao: Sessao };

export function ASessao({ sessao }: Props) {
  return (
    <section className="relative overflow-hidden bg-cjc-noite-esc py-16 md:py-24 px-6 md:px-20">
      <Glow className="top-[-180px] left-1/2 -translate-x-1/2 w-[620px] h-[520px]" />

      <div className="max-w-[820px] mx-auto relative text-center">
        <h2 className="font-cjc-display text-[34px] md:text-[54px] leading-[1.06] font-semibold text-cjc-texto mb-7">
          Canetas do Jeito Certo
        </h2>

        <div className="font-sans text-[16px] md:text-[19px] leading-[1.7] text-cjc-texto-suave space-y-5 max-w-[640px] mx-auto">
          <p>
            Uma sessão ao vivo com a Michelly, na{" "}
            <span className="text-cjc-texto">{sessao.diaLongo}</span> às 20h,
            para mulheres que usam canetas GLP-1 e querem atravessar o
            tratamento inteiro sem perder o resultado no final.
          </p>
          <p>
            São {DURACAO} com a Michelly te ensinando o plano completo do início
            ao fim do tratamento.
          </p>
          <p className="text-cjc-texto">
            Você sai da sessão enxergando os sinais no seu próprio corpo, com o
            protocolo pronto para a sua rotina e alimentação, e com a saída da
            caneta deixando de ser um pesadelo.
          </p>
        </div>
      </div>
    </section>
  );
}
