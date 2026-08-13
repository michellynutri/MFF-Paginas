import { Cta } from "./Cta";
import { PRECO } from "./constants";

const passos = [
  {
    titulo: "Enxergar a armadilha",
    texto:
      "Os sinais de que o seu corpo já está perdendo massa magra agora, e como reconhecer cada um deles em você. Você sai com essa leitura pronta para levar ao seu médico e à sua nutricionista.",
  },
  {
    titulo: "Blindar o corpo",
    texto:
      "As três frentes em que o corpo perde saúde durante a caneta: a saciedade e o músculo, o intestino e os micronutrientes. O que fazer em cada uma delas.",
  },
  {
    titulo: "Planejar a saída",
    texto:
      "O que acontece no corpo quando a medicação sai, por que a fome volta com força, e como essa fase começa a ser construída desde a primeira aplicação.",
  },
];

export function TresPassos() {
  return (
    <section className="bg-cjc-noite py-16 md:py-24 px-6 md:px-20">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-cjc-display text-[29px] md:text-[46px] leading-[1.12] md:leading-[1.06] font-semibold text-cjc-texto">
            Os três passos da{" "}
            <em className="italic text-cjc-menta">Blindagem Metabólica</em>
          </h2>
        </div>

        <ol className="grid gap-4 md:grid-cols-3 md:gap-6">
          {passos.map((passo, i) => (
            <li
              key={passo.titulo}
              className="rounded-2xl border border-cjc-linha-suave bg-cjc-superficie p-6 md:p-8 flex flex-col"
            >
              <span
                className="font-cjc-display text-[38px] md:text-[46px] leading-none font-semibold text-cjc-menta/35 tabular-nums mb-5"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-cjc-display text-[21px] md:text-[24px] leading-tight font-semibold text-cjc-texto mb-3.5">
                {passo.titulo}
              </h3>
              <p className="font-sans text-[15px] leading-[1.65] text-cjc-texto-suave">
                {passo.texto}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-10 md:mt-12 rounded-2xl border border-cjc-ambar/25 bg-cjc-ambar/[0.06] p-6 md:p-8 text-center">
          <p className="font-cjc-display italic text-[19px] md:text-[23px] leading-[1.4] font-medium text-cjc-texto max-w-[680px] mx-auto">
            E tem um momento específico, dentro do desmame, em que a maioria das
            mulheres escorrega.{" "}
            <span className="text-cjc-ambar not-italic font-semibold">
              Eu vou te mostrar qual é ao vivo.
            </span>
          </p>
        </div>

        <div className="flex justify-center mt-12 md:mt-14">
          <Cta dataCta="cjc-bloco-8">QUERO MINHA VAGA POR {PRECO}</Cta>
        </div>
      </div>
    </section>
  );
}
