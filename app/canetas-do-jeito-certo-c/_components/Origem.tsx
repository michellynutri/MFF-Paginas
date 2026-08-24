import Image from "next/image";

// Seção 6 — autoridade pela história de virada. Mesma história das outras
// variantes; aqui ela vem DEPOIS dos cinco erros, e não antes: na arquitetura
// da copy v4, a pessoa só quer saber quem está falando depois de reconhecer o
// problema na própria vida.
//
// TODO(michelly): os números repetem os da variante B (13 anos, +3.000
// pacientes, 6 especializações) e continuam pendentes de confirmação.

const metricas = [
  { numero: "13", label: "anos de prática clínica em saúde da mulher" },
  { numero: "+3.000", label: "pacientes atendidas" },
  { numero: "6", label: "especializações em saúde hormonal feminina" },
];

export function Origem() {
  return (
    <section className="bg-cjc-dia-superficie border-y border-cjc-dia-linha-suave py-16 md:py-24 px-6 md:px-20">
      <div className="max-w-[1080px] mx-auto">
        <div className="grid md:grid-cols-[40%_60%] gap-10 md:gap-14 items-start">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden ring-1 ring-cjc-dia-linha-suave shadow-[0_20px_50px_rgba(16,32,26,0.14)] md:sticky md:top-10">
            {/* TODO(launch): trocar por foto da Michelly feita pra esta sessão. */}
            <Image
              src="/images/sos-canetas/michelly-about.jpg"
              alt="Michelly Silveira Fanelli em seu consultório"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>

          <div>
            <h2 className="font-cjc-display text-[27px] md:text-[40px] leading-[1.14] md:leading-[1.08] font-semibold text-cjc-dia-texto mb-8">
              Eu fui contra as canetas.{" "}
              <em className="italic text-cjc-dia-menta">
                Até ver o que acontecia quando o tratamento era feito do jeito
                certo.
              </em>
            </h2>

            <div className="font-sans text-[16px] md:text-[17px] leading-[1.75] text-cjc-dia-texto-suave space-y-5 max-w-[640px]">
              <p>
                O que me trouxe até aqui foi ver as mesmas pacientes duas vezes.
              </p>
              <p>
                Na primeira, chegavam animadas, com a caneta funcionando. Meses
                depois, algumas voltavam com o peso de volta e a autoestima num
                lugar pior do que no começo. Tinham feito tudo o que mandaram —
                e ninguém tinha preparado nenhuma delas pro dia em que a
                medicação sairia.
              </p>
              <p className="text-cjc-dia-texto">
                Eu levei tempo pra aceitar as canetas — fui contra por um bom
                período. Mudei de ideia quando juntei mais de uma década de
                especialização em saúde hormonal feminina com o que aprendi
                acompanhando essas mulheres na prática. Vi que, do jeito certo,
                o resultado vinha melhor, mais firme, e ficava.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 md:gap-6 items-start mt-10 pt-8 border-t border-cjc-dia-linha-suave">
              {metricas.map((m, i) => (
                <div
                  key={m.numero}
                  className={
                    i > 0
                      ? "pl-4 md:pl-6 border-l border-cjc-dia-linha-suave"
                      : ""
                  }
                >
                  <div className="font-cjc-display text-[30px] md:text-[42px] text-cjc-dia-menta leading-none mb-2 font-semibold">
                    {m.numero}
                  </div>
                  <div className="font-sans text-[11px] md:text-[12px] text-cjc-dia-texto-fraco uppercase tracking-[0.08em] leading-[1.4]">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
