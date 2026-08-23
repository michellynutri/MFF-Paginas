// Seção 4 — as fases. Estrutura igual à da variante A (é o ativo de clareza da
// página, e funciona), com as descrições da copy v2: mais longas e com a carga
// emocional do platô explicitada.

const fases = [
  {
    nome: "Emagrecimento ativo",
    texto: "A fase que todo mundo conhece, quando o peso desce fácil.",
  },
  { nome: "Platô", texto: "Quando a balança trava e a cabeça desaba." },
  {
    nome: "Recomposição",
    texto: "Quando faltam poucos quilos e o foco muda pra firmeza e forma.",
  },
  {
    nome: "Desmame",
    texto: "Quando a medicação começa a sair.",
    destaque: true,
  },
];

export function Fases() {
  return (
    <section className="bg-cjc-noite py-16 md:py-24 px-6 md:px-20">
      <div className="max-w-[1000px] mx-auto">
        <div className="mb-12 md:mb-16 max-w-[720px]">
          <h2 className="font-cjc-display text-[29px] md:text-[44px] leading-[1.12] md:leading-[1.06] font-semibold text-cjc-texto">
            O seu tratamento tem 4 fases.{" "}
            <em className="italic text-cjc-texto-suave">
              A maioria só planeja a primeira.
            </em>
          </h2>
        </div>

        <ol className="grid gap-4 md:grid-cols-4 md:gap-5 mb-12 md:mb-14">
          {fases.map((fase) => (
            <li
              key={fase.nome}
              className={`relative rounded-2xl p-5 md:p-6 border ${
                fase.destaque
                  ? "border-cjc-menta/40 bg-cjc-menta/[0.07]"
                  : "border-cjc-linha-suave bg-cjc-superficie"
              }`}
            >
              <span
                className={`block w-2 h-2 rounded-full mb-4 ${
                  fase.destaque ? "bg-cjc-menta" : "bg-cjc-texto-fraco/50"
                }`}
                aria-hidden="true"
              />
              <h3
                className={`font-cjc-display text-[19px] md:text-[21px] leading-tight font-semibold mb-2.5 ${
                  fase.destaque ? "text-cjc-menta" : "text-cjc-texto"
                }`}
              >
                {fase.nome}
              </h3>
              <p className="font-sans text-[14px] leading-[1.6] text-cjc-texto-suave">
                {fase.texto}
              </p>
            </li>
          ))}
        </ol>

        <div className="font-sans text-[16px] md:text-[18px] leading-[1.75] text-cjc-texto-suave space-y-5 max-w-[720px]">
          <p>
            Cada fase pede uma alimentação e uma rotina diferente. Seguir a
            mesma orientação do início ao fim é o que faz o tratamento desandar
            justamente na reta final.
          </p>
          <p className="text-cjc-texto">
            Fazer do jeito certo começa por saber em qual fase você está e o que
            ela exige de você.
          </p>
        </div>
      </div>
    </section>
  );
}
