// Seção 4 — eleva a categoria: a caneta deixa de ser "o tratamento" e vira uma
// parte dele. A analogia da cirurgia faz o trabalho pesado — ela transporta a
// pessoa pra um domínio onde ela já aceita a regra ("ninguém acha que a
// cirurgia sozinha resolve") e devolve a regra aplicada à caneta.

export function Categoria() {
  return (
    <section className="bg-cjc-dia-superficie border-y border-cjc-dia-linha-suave py-16 md:py-24 px-6 md:px-20">
      <div className="max-w-[820px] mx-auto">
        <h2 className="font-cjc-display text-[29px] md:text-[44px] leading-[1.12] md:leading-[1.06] font-semibold text-cjc-dia-texto mb-8 md:mb-10">
          A caneta não é o seu tratamento.{" "}
          <em className="italic text-cjc-dia-menta">É só uma parte dele.</em>
        </h2>

        <div className="font-sans text-[16px] md:text-[18px] leading-[1.75] text-cjc-dia-texto-suave space-y-5">
          <p>
            Pensa numa cirurgia. A operação dura uma hora. Mas quem decide o
            resultado é a recuperação — o que você faz nas semanas seguintes.
            Ninguém acha que a cirurgia sozinha resolve.
          </p>
          <p>
            Com a caneta é igual. A medicação segura a sua fome. Mas o que
            decide se você emagrece com saúde, se mantém o resultado e se sai
            bem do tratamento é o que você faz{" "}
            <strong className="font-semibold text-cjc-dia-texto">
              em volta dela
            </strong>{" "}
            — a metade que ninguém te entregou.
          </p>
          <p className="text-cjc-dia-texto font-medium">
            A caneta é o empurrão. Você é quem tem que aprender a andar antes
            que ele acabe. E a janela pra aprender isso é agora, enquanto ela
            ainda está te segurando.
          </p>
        </div>
      </div>
    </section>
  );
}
