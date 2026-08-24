import { Cta } from "../../canetas-do-jeito-certo-_shared/_components/Cta";
import { PRECO } from "../../canetas-do-jeito-certo-_shared/_components/constants";
import type { Sessao } from "../../canetas-do-jeito-certo-_shared/_components/sessao";

type Props = { sessao: Sessao };

// Seção 17 — fechamento binário: dois desfechos, e a escolha é do que se faz
// em volta da caneta. Termina com o risco revertido em uma frase (pior caso /
// melhor caso), que é onde a garantia mora nesta variante — a B tem uma seção
// inteira pra isso, aqui ela é a última linha antes do botão.

export function Fechamento({ sessao }: Props) {
  return (
    <section className="bg-cjc-dia-superficie border-t border-cjc-dia-linha-suave py-18 md:py-28 px-6 md:px-20">
      <div className="max-w-[780px] mx-auto text-center">
        <h2 className="font-cjc-display text-[30px] md:text-[46px] leading-[1.1] md:leading-[1.05] font-semibold text-cjc-dia-texto mb-9">
          O seu tratamento vai terminar{" "}
          <em className="italic text-cjc-dia-menta">de um de dois jeitos.</em>
        </h2>

        <div className="font-sans text-[16px] md:text-[19px] leading-[1.75] text-cjc-dia-texto-suave space-y-5 mb-10">
          <p>
            Ou você chega no fim firme, com saúde, dona de um resultado que
            continua seu — ou você chega magra e enfraquecida, vê o peso voltar
            quando a caneta sai, e recomeça do zero.
          </p>
          <p className="text-cjc-dia-texto">
            A caneta, sozinha, não escolhe por você. Quem escolhe é o que você
            faz em volta dela — e isso começa nessa sessão.
          </p>
          <p>
            <strong className="font-semibold text-cjc-dia-texto">
              Pior caso:
            </strong>{" "}
            você participa, não gosta, me manda uma mensagem e eu devolvo seus 27
            reais — e você fica com a gravação mesmo assim.{" "}
            <strong className="font-semibold text-cjc-dia-texto">
              Melhor caso:
            </strong>{" "}
            você faz o tratamento inteiro do jeito certo, e não passa mais uma
            vez pela decepção de recomeçar.
          </p>
          <p className="text-cjc-dia-texto font-medium">
            Próxima {sessao.diaLongo}, às 20h, ao vivo. Por {PRECO}.
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
