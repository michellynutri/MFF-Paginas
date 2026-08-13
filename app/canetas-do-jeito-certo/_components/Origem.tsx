import Image from "next/image";
import { Cta } from "./Cta";

const metricas = [
  { numero: "13+", label: "anos de prática clínica em saúde da mulher" },
  { numero: "2.500+", label: "pacientes atendidas em consultório" },
  { numero: "5+", label: "pós-graduações e especializações" },
];

export function Origem() {
  return (
    <section className="bg-cjc-noite-esc py-16 md:py-24 px-6 md:px-20">
      <div className="max-w-[1180px] mx-auto">
        <div className="grid md:grid-cols-[42%_58%] gap-10 md:gap-16 items-start">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden ring-1 ring-cjc-linha shadow-[0_24px_60px_rgba(0,0,0,0.45)] md:sticky md:top-10">
            {/* TODO(launch): trocar por foto da Michelly feita pra esta sessão. */}
            <Image
              src="/images/sos-canetas/michelly-about.jpg"
              alt="Michelly Silveira Fanelli em seu consultório"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 42vw"
            />
          </div>

          <div>

            <h2 className="font-cjc-display text-[27px] md:text-[40px] leading-[1.14] md:leading-[1.08] font-semibold text-cjc-texto mb-8">
              Eu vi mulheres emagrecerem com a caneta e{" "}
              <em className="italic text-cjc-argila">
                recuperarem tudo depois
              </em>
            </h2>

            <div className="border-l-2 border-cjc-menta pl-4 mb-8">
              <div className="font-cjc-display text-[23px] md:text-[27px] font-semibold text-cjc-texto leading-tight">
                Michelly Silveira Fanelli
              </div>
              <div className="font-sans text-[13px] md:text-[14px] text-cjc-texto-suave mt-1">
                Nutricionista Clínica · CRN-3 36739 · Especialista em Saúde da
                Mulher
              </div>
            </div>

            <div className="font-sans text-[16px] md:text-[17px] text-cjc-texto-suave leading-[1.75] space-y-5 max-w-[620px]">
              <p>O que me trouxe até aqui foi ver as mesmas pacientes duas vezes.</p>
              <p>
                Na primeira, elas chegavam animadas, com a caneta funcionando e
                o peso caindo. Meses depois, algumas voltavam com o peso de
                volta e com a autoestima em um lugar pior do que estava no
                começo. Tinham feito tudo o que mandaram, e ninguém tinha
                preparado nenhuma delas para o dia em que a medicação sairia.
              </p>
              <p className="text-cjc-texto">
                Foi aí que eu entendi onde estava a falha: o tratamento era
                tratado como se terminasse na fase de emagrecer. A parte que
                decide se o resultado permanece nunca era planejada.
              </p>
              <p>
                Juntei mais de uma década de especialização em saúde hormonal
                feminina, microbiota e ciclicidade com o que eu aprendi
                acompanhando essas mulheres na prática. É isso que eu vou te
                mostrar nessa sessão.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 md:gap-6 items-start mt-10 md:mt-12 pt-8 border-t border-cjc-linha-suave">
              {metricas.map((m, i) => (
                <div
                  key={m.numero}
                  className={
                    i > 0 ? "pl-4 md:pl-6 border-l border-cjc-linha-suave" : ""
                  }
                >
                  <div className="font-cjc-display text-[30px] md:text-[44px] text-cjc-menta leading-none mb-2 font-semibold">
                    {m.numero}
                  </div>
                  <div className="font-sans text-[11px] md:text-[12px] text-cjc-texto-fraco uppercase tracking-[0.08em] leading-[1.4]">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Cta dataCta="cjc-bloco-9">QUERO APRENDER COM A MICHELLY</Cta>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
