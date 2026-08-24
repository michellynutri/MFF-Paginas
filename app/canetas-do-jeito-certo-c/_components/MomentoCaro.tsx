// Seção 1 — abre pela cena de dor reconhecível, não pelo mecanismo. A pessoa
// precisa se ver na cena antes de aceitar o diagnóstico que vem na seção
// seguinte. O parêntese existe pra não perder quem nunca parou a caneta: sem
// ele, metade do público lê a seção como "isso é problema de quem já parou".

export function MomentoCaro() {
  return (
    <section className="bg-cjc-dia py-16 md:py-24 px-6 md:px-20">
      <div className="max-w-[820px] mx-auto">
        <h2 className="font-cjc-display text-[29px] md:text-[44px] leading-[1.12] md:leading-[1.06] font-semibold text-cjc-dia-texto mb-8 md:mb-10">
          O momento mais caro do tratamento com caneta
        </h2>

        <div className="font-sans text-[16px] md:text-[18px] leading-[1.75] text-cjc-dia-texto-suave space-y-5">
          <p className="text-cjc-dia-texto">Você conhece esse momento.</p>
          <p>
            A balança finalmente desce. A calça que não fechava, fecha. Alguém
            no trabalho pergunta o que você está fazendo de diferente.
          </p>
          <p>
            Depois de tantas tentativas que não deram certo, dessa vez está
            funcionando. E você merece comemorar — de verdade.
          </p>
          <p className="text-cjc-dia-texto font-medium">
            Só que por baixo dessa vitória, tem uma conta correndo que quase
            ninguém te mostrou.
          </p>
        </div>

        <p className="font-sans text-[15px] md:text-[16px] leading-[1.7] text-cjc-dia-texto-suave italic mt-8 rounded-2xl bg-cjc-dia-superficie border border-cjc-dia-linha-suave p-6 md:p-7">
          Nunca parou a caneta ainda? Fica comigo. Essa mesma conta é o que faz
          o peso voltar depois — e ela começa a rodar na primeira semana de
          tratamento, muito antes de qualquer sinal aparecer.
        </p>

        <figure className="mt-10 md:mt-12 border-l-2 border-cjc-dia-menta pl-6 md:pl-8">
          <blockquote className="font-cjc-display italic text-[20px] md:text-[26px] leading-[1.45] font-medium text-cjc-dia-texto">
            &ldquo;Eu emagreci, todo mundo elogiava, e ao mesmo tempo meu cabelo
            caía no ralo e eu vivia exausta. Ninguém tinha me avisado que uma
            coisa tinha a ver com a outra.&rdquo;
          </blockquote>
          <figcaption className="font-sans text-[13px] md:text-[14px] text-cjc-dia-texto-fraco mt-4">
            — relato de paciente, antes do acompanhamento
          </figcaption>
        </figure>

        <p className="font-sans text-[17px] md:text-[20px] leading-[1.6] text-cjc-dia-texto font-medium mt-10 md:mt-12">
          Isso não é azar. É um mecanismo.{" "}
          <span className="text-cjc-dia-menta">E ele tem nome.</span>
        </p>
      </div>
    </section>
  );
}
