import Image from "next/image";
import { ListaDepoimentos } from "../../canetas-do-jeito-certo-_shared/_components/ListaDepoimentos";
import { DEPOIMENTOS_OFERTA } from "../../canetas-do-jeito-certo-_shared/_components/depoimentos";
import { PRINT_OFERTA } from "../../canetas-do-jeito-certo-_shared/_components/prints";

/**
 * Segundo grupo de depoimentos, entre a oferta e o fechamento.
 *
 * Usa o mesmo fundo da oferta de propósito: sem quebra de cor, os dois blocos
 * são lidos como uma coisa só — preço e prova juntos. Não fica DEPOIS do
 * fechamento porque isso empurraria o CTA final para longe do fim da página.
 */
export function ProvaOferta() {
  return (
    <section className="bg-cjc-noite-esc pb-16 md:pb-24 px-6 md:px-20">
      <div className="max-w-[1180px] mx-auto grid gap-6 md:grid-cols-[minmax(0,340px)_1fr] md:gap-8 items-start">
        <div className="rounded-2xl overflow-hidden border border-cjc-linha-suave bg-cjc-superficie">
          <Image
            src={PRINT_OFERTA.src}
            alt={PRINT_OFERTA.alt}
            width={PRINT_OFERTA.width}
            height={PRINT_OFERTA.height}
            className="w-full h-auto"
            sizes="(max-width: 768px) 100vw, 340px"
          />
        </div>

        <ListaDepoimentos
          itens={DEPOIMENTOS_OFERTA}
          className="grid gap-4 md:gap-6"
        />
      </div>
    </section>
  );
}
