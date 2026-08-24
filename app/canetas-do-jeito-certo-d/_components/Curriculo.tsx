import { Cta } from "../../canetas-do-jeito-certo-_shared/_components/Cta";
import {
  DURACAO,
  PRECO,
} from "../../canetas-do-jeito-certo-_shared/_components/constants";

// Seção 4 — O CORAÇÃO DA PÁGINA. Numa página de workshop, é o currículo que
// faz a pessoa enxergar o que ela sai sabendo FAZER, e é o que a copy v5
// manda proteger: se algum dia for preciso encurtar a página, corte das
// seções de argumento (objeções, a conta, por que R$ 27) e nunca daqui.
//
// Por isso esta seção é a única que ganha tratamento de card, numeração
// grande e mais respiro que as vizinhas — o peso visual acompanha o peso
// editorial. Ela é a única coisa na página que uma pessoa apressada precisa
// ler pra decidir.
//
// Compliance: cada item está escrito como "você aprende a calcular/montar",
// nunca "você recebe a sua dieta". Isso não é preciosismo de linguagem — é o
// que separa conteúdo educativo de prescrição nutricional individualizada, e
// o que mantém a página defensável. Vale pra régua de e-mail e anúncios também.

const modulos = [
  {
    titulo: "A Régua da Proteína",
    texto:
      "Quanto de proteína o seu corpo precisa por refeição, calculado pelo seu peso. A conta que protege o seu músculo e mantém o seu corpo firme enquanto emagrece.",
  },
  {
    titulo: "O Método do Prato",
    texto:
      "Como dividir o prato — proteína, vegetal, carboidrato, gordura boa — pra aproveitar cada garfada quando o apetite é pouco.",
  },
  {
    titulo: "A Conta do Seu Peso",
    texto:
      "O passo a passo pra calcular a quantidade certa de comida pra você, sem depender de ninguém.",
  },
  {
    titulo: "A Lista dos Alimentos Campeões",
    texto:
      "O que priorizar (e o que evitar) quando você come pouco, pra cada garfada render o máximo.",
  },
  {
    titulo: "Cada Refeição Montada",
    texto:
      "Café, almoço, jantar e lanches montados na prática, na sua frente, pra você replicar já amanhã.",
  },
  {
    titulo: "A Leitura da Saciedade",
    texto:
      "Como saber se está comendo o suficiente — nem de menos, nem do errado — agora que a fome não te avisa mais.",
  },
];

export function Curriculo() {
  return (
    <section className="bg-cjc-dia-superficie border-y border-cjc-dia-linha-suave py-16 md:py-24 px-6 md:px-20">
      <div className="max-w-[980px] mx-auto">
        <h2 className="font-cjc-display text-[29px] md:text-[44px] leading-[1.12] md:leading-[1.06] font-semibold text-cjc-dia-texto mb-7">
          O que você vai{" "}
          <em className="italic text-cjc-dia-menta">sair sabendo fazer</em>
        </h2>

        <p className="font-sans text-[16px] md:text-[18px] leading-[1.75] text-cjc-dia-texto-suave mb-10 md:mb-14 max-w-[720px]">
          Em {DURACAO}, de forma prática, você aprende a montar a sua
          alimentação do zero:
        </p>

        <ol className="grid gap-4 md:grid-cols-2 md:gap-6 mb-12 md:mb-14">
          {modulos.map((modulo, i) => (
            <li
              key={modulo.titulo}
              className="rounded-2xl border border-cjc-dia-linha-suave bg-cjc-dia p-6 md:p-8"
            >
              <span
                className="font-cjc-display text-[34px] md:text-[42px] leading-none font-semibold text-cjc-dia-menta/30 tabular-nums block mb-4"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-cjc-display text-[21px] md:text-[25px] leading-tight font-semibold text-cjc-dia-texto mb-3">
                {modulo.titulo}
              </h3>
              <p className="font-sans text-[15px] md:text-[16px] leading-[1.65] text-cjc-dia-texto-suave">
                {modulo.texto}
              </p>
            </li>
          ))}
        </ol>

        <div className="rounded-2xl border-2 border-cjc-dia-menta/30 bg-cjc-dia p-7 md:p-10 text-center">
          <p className="font-cjc-display text-[22px] md:text-[30px] leading-[1.3] font-semibold text-cjc-dia-texto max-w-[680px] mx-auto">
            Você entra sem saber por onde começar. Sai com o{" "}
            <em className="italic text-cjc-dia-menta">
              seu plano nutricional pronto
            </em>{" "}
            pra aplicar no mesmo dia.
          </p>
          <div className="mt-8">
            <Cta variant="dia" dataCta="cjc-curriculo">
              QUERO APRENDER A MONTAR — {PRECO}
            </Cta>
          </div>
        </div>
      </div>
    </section>
  );
}
