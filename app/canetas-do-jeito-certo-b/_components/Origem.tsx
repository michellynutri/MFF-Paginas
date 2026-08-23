import Image from "next/image";
import { Cta } from "../../canetas-do-jeito-certo-_shared/_components/Cta";

// Seção 5 — autoridade. Diferença de ângulo em relação à A: lá a história abre
// pelo que ela viu acontecer com as pacientes; aqui abre pela virada de opinião
// dela própria sobre as canetas, que responde antes a objeção de "isso é contra
// a caneta?" (a FAQ, no fim da página, responde de novo e direto).
//
// TODO(michelly): os números abaixo subiram em relação à variante A — lá são
// 13+ anos, 2.500+ pacientes e 5+ especializações. Confirmar 3.000 e 6 antes
// de a variante receber tráfego.
const metricas = [
  { numero: "13", label: "anos de prática clínica em saúde da mulher" },
  { numero: "+3.000", label: "pacientes atendidas em consultório" },
  {
    numero: "6",
    label:
      "especializações em saúde hormonal feminina, microbiota e ciclicidade",
  },
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
              Eu fui contra as canetas.{" "}
              <em className="italic text-cjc-menta">
                Até ver o que acontecia quando o tratamento era feito do jeito
                certo.
              </em>
            </h2>

            <div className="border-l-2 border-cjc-menta pl-4 mb-8">
              <div className="font-cjc-display text-[23px] md:text-[27px] font-semibold text-cjc-texto leading-tight">
                Dra. Michelly Silveira Fanelli
              </div>
              <div className="font-sans text-[13px] md:text-[14px] text-cjc-texto-suave mt-1">
                Nutricionista Clínica · CRN-3 36739 · Especialista em Saúde da
                Mulher
              </div>
            </div>

            <div className="font-sans text-[16px] md:text-[17px] text-cjc-texto-suave leading-[1.75] space-y-5 max-w-[620px]">
              <p>
                O que me trouxe até aqui foi ver as mesmas pacientes duas vezes.
              </p>
              <p>
                Na primeira, chegavam animadas, com a caneta funcionando e o
                peso caindo. Meses depois, algumas voltavam com o peso de volta
                e a autoestima num lugar pior do que no começo. Tinham feito
                tudo o que mandaram — e ninguém tinha preparado nenhuma delas
                pro dia em que a medicação sairia.
              </p>
              <p className="text-cjc-texto">
                Foi aí que eu entendi onde estava a falha: o tratamento era
                tratado como se terminasse na fase de emagrecer. A parte que
                decide se o resultado permanece nunca era planejada.
              </p>
              <p>
                Eu levei tempo pra aceitar as canetas — fui contra por um bom
                período. Mudei de ideia quando juntei mais de uma década de
                especialização em saúde hormonal feminina com o que aprendi
                acompanhando essas mulheres na prática. É exatamente isso que eu
                vou te mostrar nessa sessão.
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
              <Cta dataCta="cjc-origem">QUERO APRENDER COM A MICHELLY</Cta>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
