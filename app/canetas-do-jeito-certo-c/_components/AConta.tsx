import { PRECO } from "../../canetas-do-jeito-certo-_shared/_components/constants";

// Seção 10 — justificativa lógica. Depois de nove seções de argumento
// emocional, esta é a que dá à pessoa a razão que ela vai usar pra explicar a
// compra a si mesma. Ancora no que ela já gasta, não na soma do stack.

export function AConta() {
  return (
    <section className="bg-cjc-dia py-16 md:py-24 px-6 md:px-20">
      <div className="max-w-[820px] mx-auto">
        <h2 className="font-cjc-display text-[29px] md:text-[44px] leading-[1.12] md:leading-[1.06] font-semibold text-cjc-dia-texto mb-10">
          Faz a conta{" "}
          <em className="italic text-cjc-dia-menta">
            que ninguém te fez fazer.
          </em>
        </h2>

        <div className="font-sans text-[16px] md:text-[18px] leading-[1.75] text-cjc-dia-texto-suave space-y-5">
          <p>
            Você já investe{" "}
            <strong className="font-semibold text-cjc-dia-texto">
              mais de mil reais por mês
            </strong>{" "}
            na sua caneta. Ao longo do tratamento, são milhares de reais.
          </p>
          <p>
            Agora pensa no custo de fazer isso do jeito errado: emagrecer
            perdendo músculo e saúde, e ver o peso voltar quando a caneta sai.
            Isso não custa só o peso de volta. Custa os meses de caneta que você
            pagou, a autoestima, e o recomeço do zero — de novo.
          </p>
        </div>

        <div className="mt-10 md:mt-12 rounded-2xl border-2 border-cjc-dia-ambar/30 bg-cjc-dia-ambar/[0.06] p-7 md:p-10">
          <p className="font-cjc-display text-[24px] md:text-[32px] leading-[1.25] font-semibold text-cjc-dia-texto mb-5">
            <span className="text-cjc-dia-ambar">{PRECO}</span> é o que custa pra
            proteger todo esse investimento.
          </p>
          <p className="font-sans text-[16px] md:text-[18px] leading-[1.75] text-cjc-dia-texto-suave">
            Fazer a caneta render o dobro no ritmo que você já está, sem
            colateral te derrubando, sem recomeçar lá na frente — por 27 reais.
            É, provavelmente, o melhor retorno que o seu tratamento pode ter.
          </p>
        </div>
      </div>
    </section>
  );
}
