import { Leaf } from "../../sos-canetas-_shared/_components/Leaf";

export function Hero() {
  return (
    <section className="bg-creme relative overflow-hidden py-6 md:py-12 px-6 md:px-20">
      <Leaf
        className="top-[-30px] right-[-60px] w-[260px] h-[260px] md:w-[300px] md:h-[300px]"
        opacity={0.12}
      />
      <Leaf
        className="bottom-[-40px] left-[-50px] w-[200px] h-[200px] md:w-[240px] md:h-[240px]"
        opacity={0.08}
        rotation={-25}
      />

      <div className="max-w-[1180px] mx-auto relative">
        {/* Header pill */}
        <div className="bg-sos-creme-soft rounded-full py-3 px-5 md:px-6 shadow-card flex items-center justify-between mb-10 md:mb-14 gap-4 max-w-[560px]">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-7 h-7 rounded-full bg-sos-dourado-esc flex items-center justify-center shrink-0">
              <span className="font-serif italic text-creme text-[15px] leading-none">
                M
              </span>
            </div>
            <span className="font-sans font-medium text-[12px] md:text-[13px] text-texto truncate">
              Calculadora de Proteína
            </span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-sos-dourado" />
            <span className="font-sans text-[11px] md:text-[12px] text-marrom whitespace-nowrap">
              com Michelly Silveira
            </span>
          </div>
        </div>

        <div className="max-w-[820px] animate-fade-up">
          <h1 className="font-serif text-[34px] md:text-[60px] leading-[1.07] md:leading-[1.02] font-medium text-texto mb-6 md:mb-7">
            Quanta proteína você precisa{" "}
            <em className="italic">para proteger o seu corpo</em> durante a
            caneta?
          </h1>

          <p className="font-sans text-[17px] md:text-[20px] leading-[1.6] text-marrom max-w-[640px]">
            Insira o seu peso atual e descubra em segundos a sua meta diária
            de proteína — a base nutricional que protege a massa magra, os
            cabelos, a pele e o seu metabolismo enquanto a caneta age.
          </p>
        </div>
      </div>
    </section>
  );
}
