import { Cta } from "./Cta";
import { Leaf } from "./Leaf";

const consequencias = [
  {
    titulo:
      "O metabolismo desacelera, para o resto do tratamento e depois dele.",
    desc: "Menos massa magra significa menos calorias queimadas em repouso. Quando você para, o peso volta.",
  },
  {
    titulo: "O corpo fica flácido em vez de definido.",
    desc: "O que foi embora era massa magra, não gordura. O espelho mostra outra história.",
  },
  {
    titulo: "Os efeitos colaterais não vão embora.",
    desc: "Enjoo, intestino travado, queda de cabelo, fadiga e dor de cabeça têm origem alimentar. O protocolo certo resolve.",
  },
  {
    titulo: "Quando você para a caneta, engorda tudo de volta.",
    desc: "Sem massa magra preservada, o corpo não tem motor para manter o peso. Você recomeça do zero.",
  },
  {
    titulo:
      "Você fica com medo de parar, e a caneta que era ferramenta vira muleta.",
    desc: "",
  },
];

export function OQueAcontece() {
  return (
    <section className="bg-creme py-16 md:py-24 px-6 md:px-20 relative">
      <div className="max-w-[720px] mx-auto">
        <h2 className="font-serif text-[30px] md:text-[44px] leading-[1.1] md:leading-[1.1] font-medium text-texto mb-10">
          A janela dos primeiros meses é onde o tratamento inteiro{" "}
          <em className="italic">é decidido</em>.
        </h2>

        <div className="space-y-6 font-sans text-[17px] md:text-[19px] leading-[1.7] text-texto">
          <p>
            Enquanto você emagrece, o corpo toma decisões silenciosas a cada
            semana: o que vai queimar, o que vai preservar, como vai reagir
            quando o medicamento diminuir. Essas decisões não aparecem na
            balança agora. Mas estão sendo tomadas.
          </p>
          <p>
            Quando você come menos sem saber o que o corpo precisa nesse momento
            específico, ele entra em modo de economia. E nesse modo, queima
            massa magra antes de gordura.
          </p>
          <p>
            Estudos com GLP-1 mostram que parte significativa do peso perdido
            pode vir de massa magra — não só de gordura. A literatura científica
            também indica que protocolo nutricional adequado durante o uso
            amplifica o resultado de emagrecimento e protege o corpo. Esse é o
            ponto que a maioria das pacientes não sabe que está perdendo.
          </p>
        </div>

        <p className="font-serif italic text-[22px] md:text-[26px] leading-[1.4] my-10 md:my-12 text-texto font-medium">
          Isso não aparece na balança. Aparece no braço que ficou flácido. Na
          pele que não acompanhou. E no peso que voltou tudo quando você parou.
        </p>

        <h3 className="font-serif text-[22px] md:text-[28px] leading-[1.25] font-medium text-texto mb-8">
          E sabe o que acontece quando o corpo passa meses tomando as decisões
          erradas?
        </h3>

        <div className="space-y-0">
          {consequencias.map((c, i) => (
            <div
              key={i}
              className="flex gap-4 py-5 border-b border-sos-dourado/15 last:border-b-0"
            >
              <div className="w-8 h-8 rounded-full bg-sos-dourado-esc flex items-center justify-center shrink-0 mt-1">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-creme"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12h14M14 7l5 5-5 5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-[19px] md:text-[22px] font-medium text-texto leading-[1.3] mb-1">
                  {c.titulo}
                </h3>
                {c.desc && (
                  <p className="font-sans text-[15px] md:text-[16px] text-marrom leading-[1.6]">
                    {c.desc}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Pull quote */}
        <div className="bg-verde-esc text-creme rounded-2xl p-8 md:p-14 my-12 md:my-16 relative overflow-hidden">
          <Leaf
            className="top-[-30px] right-[-30px] w-[200px] h-[200px]"
            opacity={0.15}
          />
          <Leaf
            className="bottom-[-40px] left-[-40px] w-[180px] h-[180px]"
            opacity={0.12}
            rotation={180}
          />

          <p className="font-serif italic text-[22px] md:text-[32px] font-medium leading-[1.3] mb-6 relative z-10">
            O problema não é a caneta. O problema é o que você come — ou deixa
            de comer — enquanto a usa.
          </p>

          <div className="font-sans text-[15px] md:text-[16px] text-creme/80 relative z-10 space-y-4 leading-[1.7]">
            <p>
              A dieta do seu médico é genérica. A da nutricionista convencional
              foi feita para um corpo com fome normal. A caneta elimina o
              apetite. E nenhuma orientação convencional foi criada para isso.
            </p>
            <p>Você precisa de um sistema feito para quem usa caneta.</p>
          </div>
        </div>

        <div className="flex justify-center">
          <Cta dataCta="sos-bloco-3">QUERO FAZER O TRATAMENTO CERTO</Cta>
        </div>
      </div>
    </section>
  );
}
