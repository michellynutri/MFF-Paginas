import Image from "next/image";
import { ListaDepoimentos } from "../../canetas-do-jeito-certo-_shared/_components/ListaDepoimentos";
import { DEPOIMENTOS_OFERTA } from "../../canetas-do-jeito-certo-_shared/_components/depoimentos";
import { PRINT_OFERTA } from "../../canetas-do-jeito-certo-_shared/_components/prints";

// Seção 13 — mural de prova, imediatamente antes da oferta. Usa o segundo
// grupo de relatos (o que prova o PROCESSO, não o resultado), que é o que
// responde ao "será que eu dou conta?" logo antes de a pessoa ver o preço.
//
// TODO(michelly): a copy v4 pede aqui volume e variedade — relatos de fases
// diferentes, com kg e tempo. Hoje são três; quanto mais reais entrarem, melhor.

export function MuralProva() {
  return (
    <section className="bg-cjc-dia-superficie border-y border-cjc-dia-linha-suave py-16 md:py-24 px-6 md:px-20">
      <div className="max-w-[1080px] mx-auto">
        <h2 className="font-cjc-display text-[27px] md:text-[40px] leading-[1.14] md:leading-[1.08] font-semibold text-cjc-dia-texto mb-12 text-center max-w-[720px] mx-auto">
          O que elas dizem depois de{" "}
          <em className="italic text-cjc-dia-menta">fazer do jeito certo</em>
        </h2>

        <div className="grid gap-6 md:grid-cols-[minmax(0,320px)_1fr] md:gap-8 items-start">
          <figure className="rounded-2xl overflow-hidden border border-cjc-dia-linha-suave bg-cjc-dia">
            <Image
              src={PRINT_OFERTA.src}
              alt={PRINT_OFERTA.alt}
              width={PRINT_OFERTA.width}
              height={PRINT_OFERTA.height}
              className="w-full h-auto"
              sizes="(max-width: 768px) 100vw, 320px"
            />
          </figure>

          <ListaDepoimentos
            itens={DEPOIMENTOS_OFERTA}
            tema="dia"
            className="grid gap-4 md:gap-6"
          />
        </div>

        <p className="font-sans text-[12px] md:text-[13px] italic text-cjc-dia-texto-fraco text-center max-w-[680px] mx-auto mt-10 leading-[1.6]">
          Relatos de pacientes e alunas da Michelly. Cada corpo responde de um
          jeito, e os resultados variam conforme o acompanhamento individual.
        </p>
      </div>
    </section>
  );
}
