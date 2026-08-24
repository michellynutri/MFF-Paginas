// Seções 8 e 9 — cada objeção vira uma seção inteira, com o título na voz da
// pessoa. Ficam juntas no mesmo arquivo porque são o mesmo movimento repetido
// e sempre andam em par: separar em dois componentes só espalharia a mesma
// decisão editorial por dois lugares.

export function Objecoes() {
  return (
    <section className="bg-cjc-dia-superficie border-y border-cjc-dia-linha-suave py-16 md:py-24 px-6 md:px-20">
      <div className="max-w-[820px] mx-auto space-y-14 md:space-y-20">
        <div>
          <h2 className="font-cjc-display text-[26px] md:text-[38px] leading-[1.16] md:leading-[1.1] font-semibold text-cjc-dia-texto mb-8">
            &ldquo;Mas eu já tentei de tudo.{" "}
            <em className="italic text-cjc-dia-menta">
              Por que dessa vez seria diferente?
            </em>
            &rdquo;
          </h2>

          <div className="font-sans text-[16px] md:text-[18px] leading-[1.75] text-cjc-dia-texto-suave space-y-5">
            <p>
              Você provavelmente já fez a dieta certinha. Já pagou academia. Já
              seguiu o plano da influencer da vez. E o peso voltou mesmo assim.
            </p>
            <p>
              Aqui está o porquê, e importa: nenhuma dessas coisas foi feita pro
              seu corpo, e nenhuma cuidou do que a caneta faz por dentro.{" "}
              <strong className="font-semibold text-cjc-dia-texto">
                Você não falhou nas dietas.
              </strong>{" "}
              As dietas eram genéricas — feitas pra um corpo qualquer, com uma
              fome normal. Nunca pro seu.
            </p>
            <p className="text-cjc-dia-texto">
              Dessa vez é diferente por um motivo concreto: a caneta já resolveu
              a parte que sempre te derrubou — a fome. Isso nunca esteve em jogo
              antes. Agora, pela primeira vez, o que falta não é força de
              vontade. É o mapa certo pro seu corpo, na janela em que ele
              funciona.
            </p>
          </div>
        </div>

        <div className="border-t border-cjc-dia-linha-suave pt-14 md:pt-20">
          <h2 className="font-cjc-display text-[26px] md:text-[38px] leading-[1.16] md:leading-[1.1] font-semibold text-cjc-dia-texto mb-8">
            &ldquo;Meu caso é diferente.{" "}
            <em className="italic text-cjc-dia-menta">
              E eu não tenho disciplina pra isso.
            </em>
            &rdquo;
          </h2>

          <div className="font-sans text-[16px] md:text-[18px] leading-[1.75] text-cjc-dia-texto-suave space-y-5">
            <p className="text-cjc-dia-texto font-medium">
              Ótimo — porque isso aqui não depende de disciplina.
            </p>
            <p>
              Disciplina é o que te pediam quando você tinha que segurar a fome
              na base da força de vontade. A caneta já tirou esse peso das suas
              costas. O que decide o resultado agora não é o quanto você aguenta
              — é saber o que fazer em cada fase, com o corpo que é seu.
            </p>
            <p>
              E sobre o &ldquo;meu caso é diferente&rdquo;: é justamente por isso
              que a sessão é feita pro corpo da mulher, e não uma regra igual pra
              todo mundo.{" "}
              <strong className="font-semibold text-cjc-dia-texto">
                O seu caso ser diferente não é um problema aqui. É o ponto de
                partida.
              </strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
