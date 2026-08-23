import type { Depoimento } from "./depoimentos";

type Props = {
  itens: Depoimento[];
  /** Classes do grid. O padrão são 3 colunas no desktop. */
  className?: string;
};

export function ListaDepoimentos({
  itens,
  className = "grid gap-4 md:grid-cols-3 md:gap-6",
}: Props) {
  return (
    <ul className={className}>
      {itens.map((d) => (
        <li
          key={d.nome}
          className="relative rounded-2xl border border-cjc-linha-suave bg-cjc-superficie p-7 md:p-8 flex flex-col"
        >
          <span
            className="font-cjc-display text-[58px] leading-none text-cjc-menta/25 absolute top-3 left-5 select-none"
            aria-hidden="true"
          >
            &ldquo;
          </span>
          <p className="font-cjc-display italic text-[17px] md:text-[19px] leading-[1.5] font-medium text-cjc-texto relative z-10 mt-5 mb-6 flex-1">
            {d.quote}
          </p>
          <div className="font-sans text-[14px] font-semibold text-cjc-texto">
            {d.nome}
          </div>
          <div className="font-sans text-[13px] text-cjc-texto-fraco mt-0.5">
            {d.detalhe}
          </div>
        </li>
      ))}
    </ul>
  );
}
