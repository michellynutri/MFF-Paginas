import { Cta } from "./Cta";

const itensSem = [
  "Emagrece, mas perde massa magra junto. O corpo no espelho não é o que ela queria ver.",
  "Rosto murcho, braço flácido, pele sobrando — os sinais de que perdeu o que não devia.",
  "Enjoo que não passa, intestino travado, queda de cabelo, sem disposição.",
  "Quando para a caneta: engorda tudo de volta — às vezes mais do que antes.",
  "R$ 500 a R$ 2.500 por mês em medicação com resultado pela metade.",
];

const itensCom = [
  "Emagrece perdendo gordura. O corpo que aparece é firme, com presença.",
  "Rosto definido, braços firmes, pele que acompanhou o emagrecimento.",
  "Efeitos colaterais sumindo como consequência natural do protocolo.",
  "Hábitos que sustentam o resultado mesmo quando a caneta parar.",
  "Cada real da medicação dando o máximo de retorno possível.",
];

type Props = { variant: string };

export function DoisCaminhos({ variant }: Props) {
  return (
    <section className="bg-sos-creme-soft py-16 md:py-24 px-6 md:px-20">
      <div className="max-w-[1180px] mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.16em] text-sos-dourado-esc mb-4">
            Duas mulheres · mesma caneta
          </p>
          <h2 className="font-serif text-[30px] md:text-[48px] leading-[1.1] md:leading-[1.05] font-medium text-texto max-w-[540px] mx-auto">
            <em className="italic">Dois finais</em> completamente diferentes.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {/* Card sem manual */}
          <div className="bg-sos-verde-medio text-creme rounded-2xl p-6 md:p-8 flex flex-col">
            <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.16em] text-creme/70 mb-3">
              Caneta sem o Manual
            </p>
            <p className="font-serif italic text-[18px] md:text-[20px] font-medium mb-6">
              O resultado que some.
            </p>
            <ul className="space-y-4">
              {itensSem.map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span
                    className="w-3.5 h-px bg-creme/40 mt-3 shrink-0"
                    aria-hidden="true"
                  />
                  <span className="font-sans text-[14px] leading-[1.5] text-creme/95">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card com manual */}
          <div className="bg-creme text-texto rounded-2xl p-6 md:p-8 border border-sos-borda-dourada flex flex-col">
            <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.16em] text-sos-dourado-esc mb-3">
              Caneta + Manual S.O.S.
            </p>
            <p className="font-serif italic text-[18px] md:text-[20px] font-medium mb-6 text-texto">
              O resultado que fica.
            </p>
            <ul className="space-y-4">
              {itensCom.map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span
                    className="w-[18px] h-[18px] rounded-full bg-sos-dourado-esc flex items-center justify-center mt-0.5 shrink-0"
                    aria-hidden="true"
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      className="text-creme"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="font-sans text-[14px] leading-[1.5]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-center mt-12 md:mt-16">
          <Cta dataCta={`sos-bloco-2-${variant}`}>
            QUERO POTENCIALIZAR MINHA CANETA
          </Cta>
        </div>
      </div>
    </section>
  );
}
