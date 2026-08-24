// Seção 2 — nomeia o vilão e realoca a culpa. O nome próprio ("Fome
// Emprestada") é o que a página inteira passa a referenciar depois: sem ele,
// os cinco erros da seção 5 e o mecanismo-solução da seção 3 não teriam onde
// se apoiar.
//
// O inimigo externo é o vão do sistema — receita sem a metade nutricional —,
// nunca o médico que prescreveu. Mexer nessa frase mexe em compliance.

const cadeia = [
  {
    titulo: "A caneta desliga a sua fome",
    texto:
      "Você já sente — aquele barulho de pensar em comida o dia inteiro silenciou. É um dos maiores alívios do tratamento.",
  },
  {
    titulo: "Sem fome, você come muito menos",
    texto:
      "E comendo muito menos, o seu corpo recebe muito menos do que precisa: proteína, vitaminas, minerais. O combustível que sustenta o seu músculo, o seu cabelo, a sua energia.",
  },
  {
    titulo: "Faltando o que precisa, o corpo se desmonta para compensar",
    texto:
      "Ele queima músculo junto com a gordura, o cabelo enfraquece, a energia some. E a balança continua descendo. Então você comemora, sem ver o que acontece por baixo.",
  },
];

export function FomeEmprestada() {
  return (
    <section className="bg-cjc-dia-superficie border-y border-cjc-dia-linha-suave py-16 md:py-24 px-6 md:px-20">
      <div className="max-w-[880px] mx-auto">
        <h2 className="font-cjc-display text-[30px] md:text-[46px] leading-[1.1] font-semibold text-cjc-dia-texto mb-7">
          A balança é a última a saber.
        </h2>

        <p className="font-sans text-[16px] md:text-[18px] leading-[1.75] text-cjc-dia-texto-suave mb-10 md:mb-12 max-w-[700px]">
          Deixa eu te explicar, porque isso muda a forma como você olha pra sua
          caneta a partir de hoje.
        </p>

        <ol className="space-y-6 md:space-y-8 mb-12">
          {cadeia.map((etapa, i) => (
            <li
              key={etapa.titulo}
              className="grid grid-cols-[auto_1fr] gap-x-5 md:gap-x-7"
            >
              <span
                className="font-cjc-display text-[15px] md:text-[17px] text-cjc-dia-menta/60 tabular-nums pt-1"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-cjc-display text-[20px] md:text-[25px] leading-tight font-semibold text-cjc-dia-texto mb-2.5">
                  {etapa.titulo}
                </h3>
                <p className="font-sans text-[15px] md:text-[17px] leading-[1.7] text-cjc-dia-texto-suave max-w-[660px]">
                  {etapa.texto}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="rounded-2xl border-2 border-cjc-dia-menta/30 bg-cjc-dia p-7 md:p-10">
          <p className="font-cjc-display text-[24px] md:text-[34px] leading-[1.2] font-semibold text-cjc-dia-texto mb-5">
            Isso tem nome: é a{" "}
            <em className="italic text-cjc-dia-menta">Fome Emprestada</em>.
          </p>
          <p className="font-sans text-[16px] md:text-[18px] leading-[1.75] text-cjc-dia-texto-suave">
            A caneta te empresta a ausência de fome, e cobra a conta calada — em
            músculo e em nutriente — enquanto você acha que está só emagrecendo.
          </p>
        </div>

        <div className="font-sans text-[16px] md:text-[18px] leading-[1.75] text-cjc-dia-texto-suave space-y-5 mt-10 md:mt-12 max-w-[720px]">
          <p>
            E aqui está o que eu preciso que você ouça:{" "}
            <strong className="font-semibold text-cjc-dia-texto">
              isso não é sobre esforço, e não é sobre você.
            </strong>{" "}
            É sobre o que o seu corpo deixou de receber.
          </p>
          <p>
            Você recebeu a receita da caneta, mas não a outra metade do
            tratamento — a parte nutricional, que é justamente a que protege a
            sua saúde. O sistema entrega a medicação e vira as costas pro que
            decide o seu resultado.
          </p>
        </div>
      </div>
    </section>
  );
}
