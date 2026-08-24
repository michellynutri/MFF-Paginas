import Image from "next/image";
import { PRINT_PROVA } from "../../canetas-do-jeito-certo-_shared/_components/prints";

// Seção 3 — apresenta o mecanismo-solução e coloca prova forte cedo, logo
// depois do diagnóstico, enquanto a pessoa ainda está no impacto do nome do
// vilão. É o par do vilão: Fome Emprestada é o vazamento, Blindagem é o escudo.
//
// TODO(michelly): a copy pede aqui a prova mais forte que existir — um
// antes/depois real com legenda específica (nome, tempo de desmame, o que
// manteve). Enquanto ela não chega, entra o print de conversa que já roda nas
// outras variantes. Trocar assim que houver material próprio.

export function Blindagem() {
  return (
    <section className="bg-cjc-dia py-16 md:py-24 px-6 md:px-20">
      <div className="max-w-[880px] mx-auto">
        <h2 className="font-cjc-display text-[29px] md:text-[44px] leading-[1.12] md:leading-[1.06] font-semibold text-cjc-dia-texto mb-8">
          Existe a outra metade. E ela tem nome:{" "}
          <em className="italic text-cjc-dia-menta">Blindagem Metabólica</em>.
        </h2>

        <div className="font-sans text-[16px] md:text-[18px] leading-[1.75] text-cjc-dia-texto-suave space-y-5 max-w-[720px]">
          <p>
            Se a Fome Emprestada é o vazamento, a Blindagem Metabólica é o
            escudo.
          </p>
          <p>
            É o sistema que garante ao seu corpo o que ele precisa enquanto a
            caneta age — protege o músculo, o intestino e os nutrientes que a
            Fome Emprestada rouba — e prepara a sua saída desde a primeira
            aplicação. Com ele,{" "}
            <strong className="font-semibold text-cjc-dia-texto">
              você emagrece a gordura, não a saúde.
            </strong>{" "}
            E chega no fim dona do resultado.
          </p>
          <p className="text-cjc-dia-texto font-medium">
            Não é teoria. É o que eu aplico no consultório todos os dias.
          </p>
        </div>

        <div className="mt-10 md:mt-14 grid gap-5 md:grid-cols-2 md:gap-7 items-start">
          {PRINT_PROVA.map((p) => (
            <figure
              key={p.src}
              className="rounded-2xl overflow-hidden border border-cjc-dia-linha-suave bg-cjc-dia-superficie"
            >
              <Image
                src={p.src}
                alt={p.alt}
                width={p.width}
                height={p.height}
                className="w-full h-auto"
                sizes="(max-width: 768px) 100vw, 420px"
              />
            </figure>
          ))}
        </div>

        <p className="font-sans text-[16px] md:text-[18px] leading-[1.75] text-cjc-dia-texto-suave mt-10 max-w-[720px]">
          Foi isso que fez a diferença pra centenas de mulheres que já estavam
          na caneta e achavam que era &ldquo;só continuar tomando&rdquo;.
        </p>
      </div>
    </section>
  );
}
