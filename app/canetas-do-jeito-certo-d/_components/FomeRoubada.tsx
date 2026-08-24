import { Cta } from "../../canetas-do-jeito-certo-_shared/_components/Cta";

// Seção 2 — o vilão, na versão prática. As variantes A/B/C chamam o mecanismo
// de "Fome Emprestada"; a copy v5 rebatiza pra "Fome Roubada", e o texto todo
// se apoia nesse verbo ("a caneta ROUBA a sua fome, e rouba também o seu
// músculo"). Por isso o nome ficou como está na copy, e não harmonizado com as
// outras variantes: mudar pra "Emprestada" quebraria o trocadilho que sustenta
// o parágrafo inteiro.
//
// A frase que faz o trabalho aqui é a primeira: "comer pouco não é a mesma
// coisa que comer certo". É ela que abre espaço pro currículo da seção 4 —
// sem ela, a pessoa acha que já está resolvida porque já come pouco.

export function FomeRoubada() {
  return (
    <section className="bg-cjc-dia-superficie border-y border-cjc-dia-linha-suave py-16 md:py-24 px-6 md:px-20">
      <div className="max-w-[860px] mx-auto">
        <h2 className="font-cjc-display text-[30px] md:text-[46px] leading-[1.1] font-semibold text-cjc-dia-texto mb-7">
          Comer pouco não é a mesma coisa que{" "}
          <em className="italic text-cjc-dia-menta">comer certo.</em>
        </h2>

        <div className="font-sans text-[16px] md:text-[18px] leading-[1.75] text-cjc-dia-texto-suave space-y-5 max-w-[720px]">
          <p>Deixa eu te explicar por que isso importa tanto.</p>
          <p>
            Quando você come pouco e no escuro, o seu corpo recebe muito menos
            do que precisa —{" "}
            <strong className="font-semibold text-cjc-dia-texto">
              principalmente proteína
            </strong>
            .
          </p>
          <p>
            E faltando proteína, ele faz a pior troca possível: começa a queimar
            o seu próprio músculo junto com a gordura. A balança desce, e você
            comemora, sem ver que está perdendo a massa magra que segura o seu
            metabolismo de pé.
          </p>
        </div>

        <div className="mt-10 md:mt-12 rounded-2xl border-2 border-cjc-dia-menta/30 bg-cjc-dia p-7 md:p-10">
          <p className="font-cjc-display text-[24px] md:text-[34px] leading-[1.2] font-semibold text-cjc-dia-texto mb-5">
            Eu chamo isso de{" "}
            <em className="italic text-cjc-dia-menta">Fome Roubada</em>.
          </p>
          <p className="font-sans text-[16px] md:text-[18px] leading-[1.75] text-cjc-dia-texto-suave">
            A caneta rouba a sua fome, mas se você não tomar cuidado, ela rouba
            também o seu músculo — quando você come da forma errada.
          </p>
        </div>

        <div className="font-sans text-[16px] md:text-[18px] leading-[1.75] text-cjc-dia-texto-suave space-y-5 mt-10 md:mt-12 max-w-[720px]">
          <p>
            E{" "}
            <strong className="font-semibold text-cjc-dia-texto">
              não é culpa sua
            </strong>{" "}
            não saber disso. Você recebeu a receita da caneta, mas ninguém te
            entregou a outra metade: como comer enquanto ela age.
          </p>
          <p className="text-cjc-dia-texto font-medium">
            É isso que decide se você vai perder gordura ou perder músculo.
          </p>
        </div>

        <div className="mt-10">
          <Cta variant="dia" dataCta="cjc-fome-roubada">
            EU QUERO USAR A CANETA DO JEITO CERTO
          </Cta>
        </div>
      </div>
    </section>
  );
}
