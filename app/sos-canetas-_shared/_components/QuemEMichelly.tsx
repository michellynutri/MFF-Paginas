import Image from "next/image";
import { Cta } from "./Cta";
import { Leaf } from "./Leaf";

const metricas = [
  { number: "13+", label: "anos de prática clínica em saúde da mulher" },
  { number: "2.500+", label: "pacientes atendidas em consultório" },
  { number: "5+", label: "pós-graduações e especializações" },
];

type Props = { variant: string };

export function QuemEMichelly({ variant }: Props) {
  return (
    <section className="bg-creme py-16 md:py-24 px-6 md:px-20 relative overflow-hidden">
      <Leaf
        className="top-[-40px] left-[-60px] w-[240px] h-[240px]"
        opacity={0.12}
      />
      <Leaf
        className="bottom-[-60px] right-[-40px] w-[260px] h-[260px]"
        opacity={0.1}
        rotation={140}
      />

      <div className="max-w-[1180px] mx-auto relative">
        <div className="grid md:grid-cols-[42%_58%] gap-10 md:gap-16 items-start">
          {/* Foto */}
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-card">
            {/* TODO: substituir por foto real da Michelly */}
            <Image
              src="/images/sos-canetas/michelly-about.jpg"
              alt="Michelly Silveira Fanelli em seu consultório"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 42vw"
            />
          </div>

          {/* Conteúdo */}
          <div>
            <p className="font-sans text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.16em] text-sos-dourado-esc mb-5">
              Criado por
            </p>

            <h2 className="font-serif text-[26px] md:text-[36px] leading-[1.15] md:leading-[1.1] font-medium text-texto mb-8">
              Criado por quem foi <em className="italic">contra</em> as canetas
              — e mudou de ideia por uma razão muito concreta
            </h2>

            <div className="border-l-[3px] border-sos-dourado pl-4 mb-8">
              <div className="font-serif text-[24px] md:text-[28px] font-medium text-texto leading-tight">
                Michelly Silveira Fanelli
              </div>
              <div className="font-sans text-[13px] md:text-[14px] text-marrom mt-1">
                Nutricionista Clínica · CRN-3 36739 · Especialista em Saúde
                da Mulher
              </div>
            </div>

            <div className="font-sans text-[16px] md:text-[17px] text-texto leading-[1.75] space-y-5 max-w-[560px]">
              <p>
                Quando as primeiras pacientes chegaram no meu consultório usando
                canetas emagrecedoras, vou ser honesta: eu fui contra. Achei que
                era atalho. Tentei convencer cada uma a voltar para a dieta.
              </p>
              <p>Só que elas continuaram usando, com ou sem a minha orientação.</p>
              <p>
                E foi aí que eu comecei a ver o que acontece quando se usa a
                caneta sem protocolo nutricional. Uma paciente foi parar no
                hospital com constipação severa. Outra tinha usado três canetas
                diferentes sem resultado. Várias chegavam com cabelo caindo, sem
                energia, sem disposição. E com flacidez crescendo junto com a
                frustração.
              </p>
              <p>
                Foi quando eu entendi: o problema não era a caneta. Era a
                ausência de um protocolo nutricional feito para ela.
              </p>
              <p>
                Fui aos congressos. Estudei os protocolos. E juntei tudo isso
                com mais de uma década de especialização em saúde hormonal
                feminina, microbiota e ciclicidade. O resultado foi o Manual
                S.O.S. Canetas.
              </p>
            </div>

            {/* Métricas */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 items-start mt-10 md:mt-12 pt-8 border-t border-sos-borda-dourada">
              {metricas.map((m, i) => (
                <div
                  key={i}
                  className={`relative ${i > 0 ? "pl-4 md:pl-6 border-l border-sos-borda-dourada" : ""}`}
                >
                  <div className="font-serif text-[32px] md:text-[48px] text-sos-dourado-esc leading-none mb-2 font-medium">
                    {m.number}
                  </div>
                  <div className="font-sans text-[11px] md:text-[13px] text-marrom uppercase tracking-[0.08em] leading-[1.4]">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Cta dataCta={`sos-bloco-5-${variant}`}>
                QUERO O PROTOCOLO DA MICHELLY
              </Cta>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
