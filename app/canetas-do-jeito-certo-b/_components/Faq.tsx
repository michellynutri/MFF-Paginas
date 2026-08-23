import { Cta } from "../../canetas-do-jeito-certo-_shared/_components/Cta";
import { PRECO } from "../../canetas-do-jeito-certo-_shared/_components/constants";

// FAQ — bloco novo da variante B, depois do fechamento: derruba as objeções
// que sobraram no caminho até o checkout. Em <details>/<summary> nativo, sem
// JavaScript nenhum: a página inteira é server component, e um acordeão em
// React custaria hidratação no fim da página por nada.
//
// TODO(michelly): a última resposta promete grupo de WhatsApp com conteúdo de
// preparação. Confirmar que a operação da sessão entrega isso antes de a
// variante receber tráfego — a variante A só promete "confirmação por e-mail
// e WhatsApp", sem grupo.

const perguntas = [
  {
    pergunta: "Não vou poder assistir ao vivo. Vale a pena?",
    resposta:
      "Vale. Você recebe o replay liberado por 7 dias e leva todos os materiais. Dá pra assistir no seu tempo.",
  },
  {
    pergunta: "Eu comecei a caneta há pouco tempo. Isso é pra mim?",
    resposta:
      "Sim. Quanto mais cedo você aprende a fazer do jeito certo, mais resultado você tira do tratamento inteiro — e menos coisa você tem que consertar depois.",
  },
  {
    pergunta: "E se eu já estou quase parando?",
    resposta:
      "Também é pra você. A fase de saída é a mais delicada, e é exatamente a que a sessão te ensina a atravessar.",
  },
  {
    pergunta: "Isso é contra a caneta?",
    resposta:
      "Não. A sessão é pra quem usa e quer usar bem. O uso da medicação é decisão do seu médico; aqui a gente cuida da parte nutricional, que anda junto.",
  },
  {
    pergunta: "Como recebo o acesso?",
    resposta:
      "Na hora, por e-mail e WhatsApp. Você entra num grupo onde recebe o conteúdo de preparação e o link da sessão.",
  },
];

export function Faq() {
  return (
    <section className="bg-cjc-noite py-16 md:py-24 px-6 md:px-20">
      <div className="max-w-[760px] mx-auto">
        <h2 className="font-cjc-display text-[27px] md:text-[40px] leading-[1.14] md:leading-[1.08] font-semibold text-cjc-texto mb-10 md:mb-12 text-center">
          Antes de você decidir
        </h2>

        <ul className="space-y-3">
          {perguntas.map((item) => (
            <li key={item.pergunta}>
              <details className="group rounded-2xl border border-cjc-linha-suave bg-cjc-superficie open:border-cjc-menta/30">
                <summary className="flex items-start justify-between gap-4 cursor-pointer list-none p-5 md:p-7 font-sans text-[16px] md:text-[18px] font-semibold text-cjc-texto focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cjc-menta rounded-2xl">
                  {item.pergunta}
                  <span
                    className="shrink-0 mt-1 text-cjc-menta transition-transform duration-200 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        d="M12 5v14M5 12h14"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="font-sans text-[15px] md:text-[16px] leading-[1.7] text-cjc-texto-suave px-5 md:px-7 pb-6 md:pb-7 -mt-1 max-w-[620px]">
                  {item.resposta}
                </p>
              </details>
            </li>
          ))}
        </ul>

        <div className="flex justify-center mt-12 md:mt-14">
          <Cta dataCta="cjc-faq">QUERO MINHA VAGA POR {PRECO}</Cta>
        </div>
      </div>
    </section>
  );
}
