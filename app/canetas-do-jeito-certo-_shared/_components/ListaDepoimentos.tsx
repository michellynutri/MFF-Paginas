import type { Depoimento } from "./depoimentos";

type Props = {
  itens: Depoimento[];
  /** Paleta: "noite" (variantes A e B) ou "dia" (variante C, fundo branco). */
  tema?: "noite" | "dia";
  /** Classes do grid. O padrão são 3 colunas no desktop. */
  className?: string;
};

const TEMAS = {
  noite: {
    card: "border-cjc-linha-suave bg-cjc-superficie",
    aspas: "text-cjc-menta/25",
    quote: "text-cjc-texto",
    nome: "text-cjc-texto",
    detalhe: "text-cjc-texto-fraco",
  },
  dia: {
    card: "border-cjc-dia-linha-suave bg-cjc-dia-superficie",
    aspas: "text-cjc-dia-menta/20",
    quote: "text-cjc-dia-texto",
    nome: "text-cjc-dia-texto",
    detalhe: "text-cjc-dia-texto-fraco",
  },
} as const;

export function ListaDepoimentos({
  itens,
  tema = "noite",
  className = "grid gap-4 md:grid-cols-3 md:gap-6",
}: Props) {
  const t = TEMAS[tema];
  return (
    <ul className={className}>
      {itens.map((d) => (
        <li
          key={d.nome}
          className={`relative rounded-2xl border ${t.card} p-7 md:p-8 flex flex-col`}
        >
          <span
            className={`font-cjc-display text-[58px] leading-none ${t.aspas} absolute top-3 left-5 select-none`}
            aria-hidden="true"
          >
            &ldquo;
          </span>
          <p
            className={`font-cjc-display italic text-[17px] md:text-[19px] leading-[1.5] font-medium ${t.quote} relative z-10 mt-5 mb-6 flex-1`}
          >
            {d.quote}
          </p>
          <div className={`font-sans text-[14px] font-semibold ${t.nome}`}>
            {d.nome}
          </div>
          <div className={`font-sans text-[13px] ${t.detalhe} mt-0.5`}>
            {d.detalhe}
          </div>
        </li>
      ))}
    </ul>
  );
}
