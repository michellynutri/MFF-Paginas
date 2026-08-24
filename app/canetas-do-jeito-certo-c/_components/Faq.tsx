// Seção 16 — FAQ. Em <details>/<summary> nativo, sem JavaScript: a página
// inteira é server component e um acordeão em React custaria hidratação no fim
// da página por nada.

const perguntas = [
  {
    pergunta: "Não vou poder assistir ao vivo. Vale a pena?",
    resposta:
      "Vale — a gravação fica 7 dias com você, e você leva os materiais.",
  },
  {
    pergunta: "Comecei a caneta há pouco. É pra mim?",
    resposta:
      "Sim. Quanto antes você blinda o corpo, menos a Fome Emprestada tira de você.",
  },
  {
    pergunta: "Já estou quase parando.",
    resposta:
      "É exatamente a fase que a sessão te ensina a atravessar.",
  },
  {
    pergunta: "Isso é contra a caneta ou contra o meu médico?",
    resposta:
      "Não. É pra quem usa e quer usar bem. A medicação é decisão do seu médico; aqui a gente cuida da metade nutricional, que anda junto.",
  },
  {
    pergunta: "Como recebo o acesso?",
    resposta: "Na hora, por e-mail e WhatsApp.",
  },
];

export function Faq() {
  return (
    <section className="bg-cjc-dia py-16 md:py-24 px-6 md:px-20">
      <div className="max-w-[760px] mx-auto">
        <h2 className="font-cjc-display text-[27px] md:text-[40px] leading-[1.14] md:leading-[1.08] font-semibold text-cjc-dia-texto mb-10 md:mb-12 text-center">
          Antes de você decidir
        </h2>

        <ul className="space-y-3">
          {perguntas.map((item) => (
            <li key={item.pergunta}>
              <details className="group rounded-2xl border border-cjc-dia-linha-suave bg-cjc-dia-superficie open:border-cjc-dia-menta/30">
                <summary className="flex items-start justify-between gap-4 cursor-pointer list-none p-5 md:p-7 font-sans text-[16px] md:text-[18px] font-semibold text-cjc-dia-texto focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cjc-dia-menta rounded-2xl">
                  {item.pergunta}
                  <span
                    className="shrink-0 mt-1 text-cjc-dia-menta transition-transform duration-200 group-open:rotate-45"
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
                <p className="font-sans text-[15px] md:text-[16px] leading-[1.7] text-cjc-dia-texto-suave px-5 md:px-7 pb-6 md:pb-7 -mt-1 max-w-[620px]">
                  {item.resposta}
                </p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
