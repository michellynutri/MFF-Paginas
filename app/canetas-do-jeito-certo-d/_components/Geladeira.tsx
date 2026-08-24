// Seção 1 — a dor prática. Não é a dor do "meu corpo se desmonta por dentro"
// (essa é a das variantes A/B/C): é a cena concreta das 12h30, de pé na frente
// da geladeira aberta sem saber o que pegar.
//
// A imagem que carrega a seção é a da BÚSSOLA: a fome era o instrumento de
// navegação, a caneta tirou o instrumento, e ninguém entregou outro. Ela volta
// no fim da página — se mexer aqui, mexa também no Fechamento.

export function Geladeira() {
  return (
    <section className="bg-cjc-dia py-16 md:py-24 px-6 md:px-20">
      <div className="max-w-[820px] mx-auto">
        <h2 className="font-cjc-display text-[29px] md:text-[44px] leading-[1.12] md:leading-[1.06] font-semibold text-cjc-dia-texto mb-8 md:mb-10">
          A caneta tirou a sua fome. E, com ela,{" "}
          <em className="italic text-cjc-dia-menta">
            a única bússola que você tinha.
          </em>
        </h2>

        <div className="font-sans text-[16px] md:text-[18px] leading-[1.75] text-cjc-dia-texto-suave space-y-5">
          <p className="text-cjc-dia-texto">Você conhece essa cena.</p>
          <p>
            Abre a geladeira e não sabe o que pegar. Chega a hora do almoço e
            você não tem fome de nada, mas sabe que precisa comer alguma coisa.
            Come três garfadas e enjoa.
          </p>
        </div>

        <p className="font-cjc-display italic text-[20px] md:text-[26px] leading-[1.45] font-medium text-cjc-dia-texto mt-8 rounded-2xl bg-cjc-dia-superficie border border-cjc-dia-linha-suave p-6 md:p-8">
          &ldquo;Será que isso tá certo? Será que tô comendo pouco demais? Ou
          tem algo errado?&rdquo;
        </p>

        <div className="font-sans text-[16px] md:text-[18px] leading-[1.75] text-cjc-dia-texto-suave space-y-5 mt-8">
          <p>
            Antes, a fome te guiava. Agora ela sumiu, e ninguém te deu uma
            bússola nova no lugar.
          </p>
          <p>
            Então, você come no escuro. Um pouquinho disso, um pouquinho
            daquilo, o que sobra na geladeira.
          </p>
        </div>

        <p className="font-sans text-[17px] md:text-[20px] leading-[1.6] text-cjc-dia-texto font-medium mt-10 md:mt-12">
          E é aí que{" "}
          <span className="text-cjc-dia-menta">mora o problema.</span>
        </p>
      </div>
    </section>
  );
}
