// Seções 6 e 7 — cada objeção vira uma seção, com o título na voz da pessoa.
// Ficam no mesmo arquivo porque são o mesmo movimento repetido e sempre andam
// em par.
//
// As duas objeções desta variante são PRÁTICAS ("não consigo seguir", "não
// tenho tempo de calcular"), e não identitárias ("meu caso é diferente") como
// na C. É coerente com o eixo: quem compra um workshop está avaliando se vai
// dar conta de EXECUTAR, não se acredita no diagnóstico.
//
// A segunda objeção tem uma linha que vale ouro e não pode sair numa edição
// futura: "não é pra você virar nutricionista". Ela desarma o medo de
// complexidade melhor do que qualquer promessa de simplicidade.

const objecoes = [
  {
    aspas: "Eu já tentei dieta e nunca consegui seguir.",
    corpo: (
      <>
        <p>
          Claro que não conseguiu. Você tentava segurar a fome na base da força
          de vontade, com uma dieta genérica que não era pra você.
        </p>
        <p className="text-cjc-dia-texto">
          Agora é diferente por um motivo concreto:{" "}
          <strong className="font-semibold">
            a fome já não está mais no seu caminho.
          </strong>{" "}
          A caneta resolveu isso. O que falta não é disciplina, é saber o que
          colocar no prato.
        </p>
        <p className="text-cjc-dia-texto font-medium">
          Você aprende uma vez e usa pra sempre.
        </p>
      </>
    ),
  },
  {
    aspas: "Eu não tenho tempo nem cabeça pra ficar calculando comida.",
    corpo: (
      <>
        <p className="text-cjc-dia-texto font-medium">
          Justo. Por isso o workshop te ensina uma régua simples, não uma dieta
          complicada.
        </p>
        <p>
          Você vai aprender a montar o prato no olho, com uma conta que se faz
          em segundos.{" "}
          <strong className="font-semibold text-cjc-dia-texto">
            Não é pra você virar nutricionista.
          </strong>{" "}
          É pra você nunca mais abrir a geladeira sem saber o que fazer.
        </p>
      </>
    ),
  },
];

export function Objecoes() {
  return (
    <section className="bg-cjc-dia-superficie border-y border-cjc-dia-linha-suave py-16 md:py-24 px-6 md:px-20">
      <div className="max-w-[820px] mx-auto space-y-14 md:space-y-20">
        {objecoes.map((o, i) => (
          <div
            key={o.aspas}
            className={
              i > 0
                ? "border-t border-cjc-dia-linha-suave pt-14 md:pt-20"
                : undefined
            }
          >
            <h2 className="font-cjc-display text-[26px] md:text-[38px] leading-[1.16] md:leading-[1.1] font-semibold text-cjc-dia-texto mb-8">
              <span className="italic text-cjc-dia-menta">
                &ldquo;{o.aspas}&rdquo;
              </span>
            </h2>

            <div className="font-sans text-[16px] md:text-[18px] leading-[1.75] text-cjc-dia-texto-suave space-y-5">
              {o.corpo}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
