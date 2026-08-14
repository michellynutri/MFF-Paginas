import type { ReactNode } from "react";
import {
  ANO_COPYRIGHT,
  CNPJ,
  CRN,
  DISCLAIMER,
  EMAIL_SUPORTE,
  ENDERECO,
  LINKS_INSTITUCIONAIS,
  MARCA,
  RAZAO_SOCIAL,
  RESPONSAVEL,
} from "@/lib/institucional";

/**
 * Rodapé institucional — identificação do CNPJ, contato, links obrigatórios e
 * disclaimer. Vai em todas as páginas com conteúdo.
 *
 * O `tema` só muda a paleta: cada funil tem a sua e o rodapé precisa pousar
 * dentro dela sem parecer enxerto. `children` entra acima do bloco legal, para
 * as páginas que já tinham logo ou linha de marca no rodapé.
 */
type Tema = "verde" | "marrom" | "creme" | "noite";

type RodapeInstitucionalProps = {
  tema?: Tema;
  children?: ReactNode;
  className?: string;
};

const TEMAS: Record<
  Tema,
  { footer: string; texto: string; forte: string; link: string; regua: string }
> = {
  verde: {
    footer: "bg-verde-esc",
    texto: "text-creme/65",
    forte: "text-creme",
    link: "text-creme/80 hover:text-creme",
    regua: "border-creme/15",
  },
  marrom: {
    footer: "bg-marrom",
    texto: "text-white/55",
    forte: "text-white",
    link: "text-white/75 hover:text-white",
    regua: "border-white/15",
  },
  creme: {
    footer: "bg-creme border-t border-borda",
    texto: "text-texto/65",
    forte: "text-marrom",
    link: "text-verde-esc hover:text-marrom",
    regua: "border-borda",
  },
  noite: {
    footer: "bg-cjc-noite-esc border-t border-cjc-linha-suave",
    texto: "text-cjc-texto-fraco",
    forte: "text-cjc-texto-suave",
    link: "text-cjc-texto-fraco hover:text-cjc-menta",
    regua: "border-cjc-linha-suave",
  },
};

export function RodapeInstitucional({
  tema = "verde",
  children,
  className = "",
}: RodapeInstitucionalProps) {
  const t = TEMAS[tema];

  return (
    // A classe `rodape-institucional` não estiliza nada: é o gancho que a
    // /vendas usa pra tirar este bloco do reset unlayered da vendas.css, que
    // de outro modo venceria os utilitários do Tailwind (cascade layers).
    <footer
      className={`rodape-institucional ${t.footer} ${t.texto} px-5 md:px-8 py-10 md:py-12 text-center ${className}`}
    >
      <div className="mx-auto max-w-[760px]">
        {children ? (
          <div className={`pb-7 mb-7 border-b ${t.regua}`}>{children}</div>
        ) : null}

        <p className="font-sans text-[13px] leading-[1.8]">
          <strong className={`font-semibold ${t.forte}`}>{RAZAO_SOCIAL}</strong>{" "}
          — CNPJ {CNPJ}
          <br />
          {ENDERECO}
          <br />
          Contato:{" "}
          <a
            href={`mailto:${EMAIL_SUPORTE}`}
            className={`${t.link} underline underline-offset-4 transition-colors break-words`}
          >
            {EMAIL_SUPORTE}
          </a>
        </p>

        <nav
          aria-label="Links institucionais"
          className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 mt-6"
        >
          {LINKS_INSTITUCIONAIS.map((link, i) => (
            <span key={link.href} className="flex items-center gap-x-2">
              {i > 0 ? (
                <span aria-hidden="true" className="opacity-50">
                  ·
                </span>
              ) : null}
              <a
                href={link.href}
                className={`font-sans text-[13px] ${t.link} transition-colors`}
              >
                {link.label}
              </a>
            </span>
          ))}
        </nav>

        <p className="font-sans text-[13px] leading-[1.8] mt-6">
          © {ANO_COPYRIGHT} {RESPONSAVEL} · Nutricionista {CRN} · {MARCA}
        </p>

        <p
          className={`font-sans text-[12px] leading-[1.7] mt-6 pt-6 border-t ${t.regua}`}
        >
          {DISCLAIMER}
        </p>
      </div>
    </footer>
  );
}
