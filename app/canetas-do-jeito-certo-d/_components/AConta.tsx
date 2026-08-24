import { PRECO } from "../../canetas-do-jeito-certo-_shared/_components/constants";

// Seção 10 — justificativa lógica. É a razão que a pessoa vai usar pra
// explicar a compra a si mesma depois de já ter decidido emocionalmente.
//
// A âncora aqui é o que ela JÁ GASTA na caneta, não a soma do stack (essa vem
// só na seção seguinte). São duas contas diferentes e a ordem importa: contra
// mil reais por mês, R$ 27 vira arredondamento; contra R$ 358, vira desconto.
// A primeira converte melhor, e por isso vem primeiro.

export function AConta() {
  return (
    <section className="bg-cjc-dia-superficie border-y border-cjc-dia-linha-suave py-16 md:py-24 px-6 md:px-20">
      <div className="max-w-[820px] mx-auto">
        <h2 className="font-cjc-display text-[29px] md:text-[44px] leading-[1.12] md:leading-[1.06] font-semibold text-cjc-dia-texto mb-10">
          Faz a conta.
        </h2>

        <div className="font-sans text-[16px] md:text-[18px] leading-[1.75] text-cjc-dia-texto-suave space-y-5">
          <p>
            Você já investe{" "}
            <strong className="font-semibold text-cjc-dia-texto">
              mais de mil reais por mês
            </strong>{" "}
            na sua caneta.
          </p>
          <p>
            Comer errado durante o tratamento é desperdiçar parte desse
            dinheiro — porque você perde músculo, e músculo perdido é o que faz
            o peso voltar depois.
          </p>
        </div>

        <div className="mt-10 md:mt-12 rounded-2xl border-2 border-cjc-dia-ambar/30 bg-cjc-dia-ambar/[0.06] p-7 md:p-10">
          <p className="font-cjc-display text-[24px] md:text-[32px] leading-[1.25] font-semibold text-cjc-dia-texto mb-5">
            <span className="text-cjc-dia-ambar">{PRECO}</span> é o que custa
            pra aprender a comer do jeito certo e proteger todo esse
            investimento.
          </p>
          <p className="font-sans text-[16px] md:text-[18px] leading-[1.75] text-cjc-dia-texto-suave">
            Uma vez que você aprende, é seu pra sempre.
          </p>
        </div>
      </div>
    </section>
  );
}
