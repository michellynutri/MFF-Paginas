import Image from "next/image";

// Seção 5 — autoridade. Mais curta que a Origem das outras variantes de
// propósito: numa página de workshop, a credencial só precisa responder "por
// que ELA pra me ensinar isso", não contar a história inteira. A história
// longa continua de pé na variante C.
//
// O corte com o MMF mora aqui: a Michelly ensina o método da fase em que a
// pessoa está, e os cardápios das 4 fases ficam reservados pro Método
// Metabólico Feminino. É o que mantém o workshop vendedor sem canibalizar a
// oferta principal — não descrever aqui nenhum conteúdo de fase.
//
// TODO(michelly): os números (13 anos, +3.000 pacientes, 6 especializações)
// repetem os das outras variantes e continuam pendentes de confirmação.

const metricas = [
  { numero: "13", label: "anos de prática clínica" },
  { numero: "+3.000", label: "pacientes atendidas" },
  { numero: "6", label: "especializações em saúde da mulher" },
];

export function Autoridade() {
  return (
    <section className="bg-cjc-dia py-16 md:py-24 px-6 md:px-20">
      <div className="max-w-[1080px] mx-auto">
        <div className="grid md:grid-cols-[40%_60%] gap-10 md:gap-14 items-start">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden ring-1 ring-cjc-dia-linha-suave shadow-[0_20px_50px_rgba(16,32,26,0.14)] md:sticky md:top-10">
            {/* TODO(launch): trocar por foto da Michelly feita pro workshop. */}
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
              Quem é a{" "}
              <em className="italic text-cjc-dia-menta">Michelly Silveira</em>
            </h2>

            <div className="font-sans text-[16px] md:text-[17px] leading-[1.75] text-cjc-dia-texto-suave space-y-5 max-w-[640px]">
              <p>
                Eu passei 13 anos e mais de 3 mil mulheres no consultório
                aprendendo o que funciona no corpo da mulher — e nos últimos
                anos, montando a alimentação de quem usa caneta, quando quase
                ninguém estava olhando pra isso.
              </p>
              <p className="text-cjc-dia-texto">
                Eu fui contra as canetas por um bom tempo. Mudei de ideia quando
                vi o que acontece quando a mulher aprende a comer do jeito certo
                enquanto usa:{" "}
                <strong className="font-semibold">
                  emagrece firme, não perde músculo, e chega no fim se sentindo
                  bem.
                </strong>
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
