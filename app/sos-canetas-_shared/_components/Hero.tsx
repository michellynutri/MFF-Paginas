import Image from "next/image";
import { Cta } from "./Cta";
import { Leaf } from "./Leaf";

type HeroProps = {
  variant: string;
  headline: React.ReactNode;
  subhead: string;
};

export function Hero({ variant, headline, subhead }: HeroProps) {
  return (
    <section className="bg-creme relative overflow-hidden py-6 md:py-10 px-6 md:px-20">
      <div className="max-w-[1180px] mx-auto">
        {/* Header pill */}
        <div className="bg-sos-creme-soft rounded-full py-3 px-5 md:px-6 shadow-card flex items-center justify-between mb-10 md:mb-12 gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-7 h-7 rounded-full bg-sos-dourado-esc flex items-center justify-center shrink-0">
              <span className="font-serif italic text-creme text-[15px] leading-none">
                M
              </span>
            </div>
            <span className="font-sans font-medium text-[12px] md:text-[13px] text-texto truncate">
              Manual S.O.S. Canetas
            </span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-sos-dourado" />
            <span className="font-sans text-[11px] md:text-[12px] text-marrom whitespace-nowrap">
              com Michelly Silveira
            </span>
          </div>
        </div>

        {/* Grid 2 colunas desktop */}
        <div className="grid md:grid-cols-[52%_48%] gap-10 md:gap-12 items-center">
          {/* Coluna conteúdo */}
          <div className="animate-fade-up">
            <p className="font-sans text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.18em] text-sos-dourado-esc mb-5">
              Para os primeiros meses de Ozempic, Mounjaro ou canetas similares
            </p>

            <h1 className="font-serif text-[38px] md:text-[68px] leading-[1.05] md:leading-none font-medium text-texto mb-6 md:mb-8">
              {headline}
            </h1>

            <p className="font-sans text-[17px] md:text-[22px] leading-[1.6] text-marrom mb-8 max-w-[560px]">
              {subhead}
            </p>

            <div className="flex items-center gap-2 font-sans text-[13px] text-marrom mb-6">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="text-sos-dourado-esc"
                aria-hidden="true"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" strokeLinecap="round" />
              </svg>
              <span>Comece agora por R$ 47 · Garantia de 7 dias</span>
            </div>

            <Cta dataCta={`sos-hero-${variant}`}>
              QUERO QUE O MEU RESULTADO FIQUE
            </Cta>
          </div>

          {/* Coluna foto */}
          <div className="relative">
            <Leaf
              className="top-[-20px] right-[-40px] w-[260px] h-[260px] md:w-[280px] md:h-[280px]"
              opacity={0.18}
            />
            <Leaf
              className="bottom-[-30px] left-[-50px] w-[200px] h-[200px] md:w-[220px] md:h-[220px]"
              opacity={0.14}
              rotation={-25}
            />

            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(42,36,24,0.18)]">
              {/* TODO: substituir por foto real da Michelly */}
              <Image
                src="/images/sos-canetas/michelly-hero.jpg"
                alt="Michelly Silveira, nutricionista clínica especialista em saúde da mulher"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 48vw"
              />
              {/* Card sobreposto */}
              <div className="absolute bottom-4 left-4 right-4 bg-sos-creme-soft/95 backdrop-blur-sm rounded-lg p-3 shadow-card">
                <div className="font-sans font-semibold text-[13px] text-texto leading-tight">
                  Michelly Silveira Fanelli
                </div>
                <div className="font-sans text-[11px] text-marrom mt-0.5">
                  Nutricionista Clínica · Saúde da Mulher
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
