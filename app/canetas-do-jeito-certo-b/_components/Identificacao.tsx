// Seção 1 — a entrada da variante B, e a diferença mais visível em relação à
// A: lá a página abre pela bifurcação ("dois resultados diferentes quando para
// a caneta"), aqui ela abre validando a decisão que a leitora já tomou. O
// problema só aparece na seção seguinte.

const situacoes = [
  "se começou semana passada ou já está há meses",
  "se o peso está caindo rápido ou travou",
  "se você ainda nem pensou no dia de parar ou já pensa nele",
];

export function Identificacao() {
  return (
    <section className="bg-cjc-noite-esc py-16 md:py-24 px-6 md:px-20">
      <div className="max-w-[880px] mx-auto">
        <h2 className="font-cjc-display text-[29px] md:text-[46px] leading-[1.12] md:leading-[1.06] font-semibold text-cjc-texto mb-8 md:mb-10">
          A caneta está funcionando.{" "}
          <em className="italic text-cjc-menta">
            Agora é hora de fazer ela render de verdade.
          </em>
        </h2>

        <div className="font-sans text-[16px] md:text-[18px] leading-[1.75] text-cjc-texto-suave space-y-5 max-w-[720px]">
          <p>
            Você tomou a decisão, e a balança começou a descer. Isso é real, e
            você merece.
          </p>
          <p>
            Mas existe uma diferença enorme entre usar a caneta e{" "}
            <strong className="font-semibold text-cjc-texto">
              usar a caneta do jeito certo
            </strong>
            . E é essa diferença que decide o seu resultado — não só o número da
            balança, mas o que sobra quando o tratamento acaba.
          </p>
        </div>

        <div className="mt-10 md:mt-12">
          <p className="font-sans text-[15px] md:text-[16px] text-cjc-texto mb-5">
            E não importa em que ponto você está:
          </p>
          <ul className="space-y-3.5">
            {situacoes.map((item) => (
              <li key={item} className="flex gap-3 items-start">
                <span
                  className="w-3.5 h-px bg-cjc-menta/60 mt-3 shrink-0"
                  aria-hidden="true"
                />
                <span className="font-sans text-[15px] md:text-[17px] leading-[1.6] text-cjc-texto-suave">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <p className="font-sans text-[16px] md:text-[18px] leading-[1.75] text-cjc-texto-suave mt-10 md:mt-12 max-w-[720px] border-l-2 border-cjc-menta pl-6">
          A partir de agora, dá pra fazer melhor: emagrecer mais sem viver
          aumentando a dose, se sentir bem no caminho em vez de arrastada pelos
          efeitos colaterais, e chegar no fim com{" "}
          <strong className="font-semibold text-cjc-texto">
            o resultado sendo seu de verdade
          </strong>{" "}
          — não emprestado pela caneta.
        </p>
      </div>
    </section>
  );
}
