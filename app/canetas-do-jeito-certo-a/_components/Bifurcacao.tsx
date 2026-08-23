import { Cta } from "../../canetas-do-jeito-certo-_shared/_components/Cta";

const semProtocolo = [
  "A fome volta com força total, e nada foi preparado para esse momento.",
  "O corpo tem menos músculo do que tinha, e passa a gastar menos energia em repouso.",
  "O peso encontra o caminho de volta em poucas semanas.",
  "A conta da medicação recomeça, agora com menos confiança do que na primeira vez.",
  "O medo de parar cresce a cada mês, e a caneta deixa de ser ferramenta.",
];

const comProtocolo = [
  "A fome volta, você reconhece o que está acontecendo e sabe exatamente o que fazer.",
  "O músculo preservado mantém o corpo gastando energia.",
  "A redução acontece por etapas, com conduta específica para cada uma.",
  "O que você aprendeu continua funcionando com a medicação fora da rotina.",
  "A caneta cumpre o papel de ferramenta e sai de cena no tempo certo.",
];

export function Bifurcacao() {
  return (
    <section className="bg-cjc-noite-esc py-16 md:py-24 px-6 md:px-20">
      <div className="max-w-[1180px] mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-cjc-display text-[29px] md:text-[46px] leading-[1.12] md:leading-[1.06] font-semibold text-cjc-texto max-w-[640px] mx-auto">
            Existem <em className="italic">dois resultados diferentes</em>{" "}
            quando para a caneta
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          <div className="rounded-2xl border border-cjc-argila/25 bg-cjc-argila/[0.06] p-6 md:p-8">
            <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.16em] text-cjc-argila mb-6">
              Sem um protocolo nutricional
            </p>
            <ul className="space-y-4">
              {semProtocolo.map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <span
                    className="w-3.5 h-px bg-cjc-argila/60 mt-3 shrink-0"
                    aria-hidden="true"
                  />
                  <span className="font-sans text-[14px] md:text-[15px] leading-[1.55] text-cjc-texto-suave">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-cjc-menta/30 bg-cjc-superficie p-6 md:p-8">
            <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.16em] text-cjc-menta mb-6">
              Com o protocolo de blindagem metabólica
            </p>
            <ul className="space-y-4">
              {comProtocolo.map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <span
                    className="w-[18px] h-[18px] rounded-full bg-cjc-menta flex items-center justify-center mt-0.5 shrink-0"
                    aria-hidden="true"
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      className="text-cjc-noite-esc"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="font-sans text-[14px] md:text-[15px] leading-[1.55] text-cjc-texto">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-center mt-12 md:mt-16">
          <Cta dataCta="cjc-bloco-3">QUERO CHEGAR NESSE DIA COM UM PLANO</Cta>
        </div>
      </div>
    </section>
  );
}
