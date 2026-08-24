import { Cta } from "../../canetas-do-jeito-certo-_shared/_components/Cta";
import { PRECO } from "../../canetas-do-jeito-certo-_shared/_components/constants";
import type { Sessao } from "../../canetas-do-jeito-certo-_shared/_components/sessao";

type Props = { sessao: Sessao };

// Seção 15 — fechamento binário. Os dois desfechos aqui não são "chegar firme"
// ou "chegar murcha" (esse é o da variante C): são "comer no escuro" ou
// "saber o que colocar no prato". O eixo prático se mantém até a última linha.
//
// A última frase fecha a bússola aberta na seção 1 — a fome não guia mais,
// então quem guia é o que ela aprende a fazer com o garfo. Se a seção 1 mudar,
// esta frase morre junto.

export function Fechamento({ sessao }: Props) {
  return (
    <section className="bg-cjc-dia-superficie border-t border-cjc-dia-linha-suave py-18 md:py-28 px-6 md:px-20">
      <div className="max-w-[780px] mx-auto text-center">
        <h2 className="font-cjc-display text-[30px] md:text-[46px] leading-[1.1] md:leading-[1.05] font-semibold text-cjc-dia-texto mb-9">
          Você vai comer de{" "}
          <em className="italic text-cjc-dia-menta">um dos dois jeitos</em>{" "}
          daqui pra frente.
        </h2>

        <div className="font-sans text-[16px] md:text-[19px] leading-[1.75] text-cjc-dia-texto-suave space-y-5 mb-10">
          <p>
            No escuro, adivinhando, torcendo pra estar certo e perdendo músculo
            sem ver. Ou sabendo exatamente o que colocar no prato, quanto, e por
            quê.
          </p>
          <p className="text-cjc-dia-texto">
            A caneta não escolhe por você. Quem escolhe é{" "}
            <strong className="font-semibold">
              o que você aprende a fazer com o garfo.
            </strong>
          </p>
          <p className="text-cjc-dia-texto font-medium">
            Próxima {sessao.diaLongo}, às 20h, ao vivo. Você sai sabendo montar
            o seu prato. Por {PRECO}.
          </p>
        </div>

        <Cta to="checkout" variant="dia-grande" dataCta="cjc-fechamento">
          QUERO MINHA VAGA POR {PRECO}
        </Cta>

        <p className="font-cjc-display italic text-[16px] md:text-[18px] text-cjc-dia-texto-suave mt-8">
          — Dra. Michelly Silveira
        </p>
      </div>
    </section>
  );
}
