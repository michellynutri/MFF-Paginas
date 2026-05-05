import Image from "next/image";
import { Cta } from "./Cta";

const protections = [
  {
    title: "Preservar sua massa magra enquanto emagrece",
    desc: "Com dosagem estratégica de proteína na faixa que estudos mostram ser ideal para quem usa GLP-1, sem precisar calcular nada.",
  },
  {
    title: "Emagrecer mais na mesma dose",
    desc: "Quando o corpo recebe o que precisa, ele entende que não está em escassez. E queima gordura com mais eficiência. O resultado na balança acelera sem aumentar a medicação.",
  },
  {
    title: "Manter o rosto firme e o corpo definido",
    desc: "O protocolo protege a massa magra para que o peso que vai embora seja gordura — não o que você não quer perder.",
  },
  {
    title: "Reduzir os efeitos colaterais que têm origem alimentar",
    desc: "Enjoo, intestino travado, queda de cabelo, fadiga — boa parte some quando o corpo recebe o que falta.",
  },
  {
    title: "Fazer cada real da medicação render mais",
    desc: "O protocolo certo faz a caneta funcionar melhor na dose que você já usa.",
  },
  {
    title: "Sustentar o resultado mesmo quando a caneta parar",
    desc: "Os hábitos construídos agora existem independente da medicação.",
  },
  {
    title: "Saber exatamente o que comer, sem improviso",
    desc: "Cardápio dia a dia, semana a semana, por 6 semanas completas. Você fecha o manual sabendo o que comer amanhã.",
  },
];

export function OManual() {
  return (
    <section className="bg-verde-esc text-creme py-20 md:py-32 px-6 md:px-20 relative overflow-hidden">
      <div className="max-w-[1180px] mx-auto">
        <div className="grid md:grid-cols-[45%_55%] gap-12 md:gap-16 items-start">
          {/* Mockup */}
          <div className="relative flex justify-center md:sticky md:top-12">
            <div
              className="relative w-full max-w-[400px] aspect-square rounded-lg shadow-[0_24px_60px_rgba(0,0,0,0.4)] overflow-hidden -rotate-3"
            >
              {/* TODO: substituir por mockup real do Manual */}
              <Image
                src="/images/sos-canetas/manual-mockup.png"
                alt="Capa do Manual S.O.S. Canetas"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </div>
          </div>

          {/* Conteúdo */}
          <div>
            <p className="font-sans text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.16em] text-sos-dourado mb-5">
              O que falta para sua caneta funcionar
            </p>

            <h2 className="font-serif text-[30px] md:text-[48px] leading-[1.1] md:leading-[1.05] font-medium text-creme mb-8">
              O que falta para a sua caneta funcionar{" "}
              <em className="italic">de verdade</em>
            </h2>

            <div className="font-sans text-[16px] md:text-[18px] leading-[1.7] text-creme/80 space-y-5 mb-10">
              <p>
                Manual S.O.S. Canetas — um sistema de nutrição desenhado
                especificamente para a fisiologia de quem está nos primeiros
                meses de tratamento com GLP-1.
              </p>
              <p>
                Não é dieta. Não tem lista de proibidos. Não tem contagem de
                calorias. Não tem módulo para assistir.
              </p>
              <p>
                É um sistema de aplicação imediata: você abre, vê o que comer
                amanhã, e fecha. Menos de 5 minutos por dia.
              </p>
            </div>

            {/* Pull quote dourado */}
            <div className="bg-sos-dourado-esc text-verde-esc rounded-xl p-6 md:p-8 my-10">
              <p className="font-serif italic text-[20px] md:text-[28px] font-medium leading-[1.3]">
                A caneta faz você comer menos. O Manual garante que o pouco que
                você come vai para o lugar certo.
              </p>
            </div>

            {/* Lista 7 proteções */}
            <ol className="relative mt-10 md:mt-12">
              <div
                className="absolute left-7 top-6 bottom-6 w-px bg-sos-dourado/30"
                aria-hidden="true"
              />

              {protections.map((p, i) => (
                <li
                  key={i}
                  className="grid grid-cols-[60px_1fr] md:grid-cols-[80px_1fr] gap-4 md:gap-6 py-4 md:py-5"
                >
                  <div className="font-serif text-[36px] md:text-[48px] text-sos-dourado leading-none bg-verde-esc px-2 md:px-3 w-12 md:w-14 text-center relative z-10 font-medium">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="font-serif text-[20px] md:text-[24px] text-creme mb-1.5 mt-1 md:mt-2 font-medium leading-[1.25]">
                      {p.title}
                    </h3>
                    <p className="font-sans text-[15px] md:text-[16px] text-creme/80 leading-[1.6]">
                      {p.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-12">
              <Cta dataCta="sos-bloco-4">QUERO O PROTOCOLO COMPLETO</Cta>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
