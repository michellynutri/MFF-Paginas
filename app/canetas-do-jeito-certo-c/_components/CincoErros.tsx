import { Cta } from "../../canetas-do-jeito-certo-_shared/_components/Cta";
import { PRECO } from "../../canetas-do-jeito-certo-_shared/_components/constants";

// Seção 5 — o miolo da estrutura. Cada erro ensina o QUÊ e para antes do COMO:
// é o loop que só a sessão fecha. Se algum destes itens começar a explicar a
// conduta, a página deixa de ter motivo pra existir — cuidado ao editar.

const erros = [
  {
    titulo: "A Fome Emprestada",
    texto:
      "Você emagrece comendo de menos, o corpo se desmonta por dentro, e a balança esconde isso. Tem um jeito de blindar cada nutriente que importa — sem passar fome, porque fome você já não tem. Eu mostro qual, ao vivo.",
  },
  {
    titulo: "Subir a dose quando a balança trava",
    texto:
      "No platô, o caminho de sempre é aumentar a dose — mais custo, mais colateral, e nem sempre mais resultado. Quase nunca é dose que falta. É outra coisa, e ela se resolve no prato.",
  },
  {
    titulo: "Seguir orientação genérica",
    texto:
      "O corpo da mulher responde diferente — hormônio, músculo, a forma de perder peso. Conselho feito pra um corpo qualquer te deixa na mão. O protocolo tem que ser feito pro seu corpo.",
  },
  {
    titulo: "Não planejar a saída",
    texto:
      "A fase que ninguém prepara é a que decide tudo. Quando a caneta sai sem plano, a fome volta com força e o peso volta — mulheres que param assim recuperam até 70%. A saída se constrói desde a primeira aplicação, não no último dia.",
  },
  {
    titulo: "Desperdiçar a janela",
    texto:
      "A fase em que o peso desce fácil é a hora de ouro pra gravar a mudança — e a maioria só comemora, e perde a única janela em que mudar é sem esforço.",
  },
];

export function CincoErros() {
  return (
    <section className="bg-cjc-dia py-16 md:py-24 px-6 md:px-20">
      <div className="max-w-[900px] mx-auto">
        <h2 className="font-cjc-display text-[29px] md:text-[44px] leading-[1.12] md:leading-[1.06] font-semibold text-cjc-dia-texto mb-7 max-w-[760px]">
          Os 5 erros que fazem o peso voltar{" "}
          <em className="italic text-cjc-dia-texto-suave">
            (e quase todo tratamento tem os cinco)
          </em>
        </h2>

        <p className="font-sans text-[16px] md:text-[18px] leading-[1.75] text-cjc-dia-texto-suave mb-10 md:mb-12 max-w-[720px]">
          Eu já acompanhei mais de 3 mil mulheres na caneta. Quando uma chega no
          meu consultório com o resultado escapando, são estes cinco erros que
          eu encontro — quase sempre os cinco juntos.
        </p>

        <ol className="space-y-0 mb-12">
          {erros.map((erro, i) => (
            <li
              key={erro.titulo}
              className="grid grid-cols-[auto_1fr] gap-x-5 md:gap-x-8 py-7 md:py-8 border-t border-cjc-dia-linha-suave last:border-b"
            >
              <span
                className="font-cjc-display text-[22px] md:text-[30px] leading-none font-semibold text-cjc-dia-argila/50 tabular-nums pt-1"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <div>
                <h3 className="font-cjc-display text-[21px] md:text-[26px] leading-tight font-semibold text-cjc-dia-texto mb-3">
                  {erro.titulo}
                </h3>
                <p className="font-sans text-[15px] md:text-[17px] leading-[1.7] text-cjc-dia-texto-suave max-w-[680px]">
                  {erro.texto}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="rounded-2xl bg-cjc-dia-superficie border border-cjc-dia-linha-suave p-7 md:p-10 text-center">
          <p className="font-cjc-display italic text-[21px] md:text-[28px] leading-[1.35] font-medium text-cjc-dia-texto max-w-[640px] mx-auto">
            Uma pergunta honesta: quantos desses cinco você reconheceu no seu
            próprio tratamento?
          </p>
          <p className="font-sans text-[16px] md:text-[17px] leading-[1.7] text-cjc-dia-texto-suave mt-5 max-w-[560px] mx-auto">
            Esse reconhecimento é exatamente o que a sessão transforma em plano.
          </p>
          <div className="mt-8">
            <Cta variant="dia" dataCta="cjc-cinco-erros">
              QUERO O PLANO — {PRECO}
            </Cta>
          </div>
        </div>
      </div>
    </section>
  );
}
