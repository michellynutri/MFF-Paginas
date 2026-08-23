import { PRECO } from "../../canetas-do-jeito-certo-_shared/_components/constants";

// Seção 8 — reversão de risco. Bloco que não existe na variante A: lá a
// garantia só aparece como uma linha solta embaixo do CTA de fechamento
// ("Garantia de satisfação"). Aqui ela vira seção, com a regra escrita.

export function Garantia() {
  return (
    <section className="bg-cjc-noite py-16 md:py-20 px-6 md:px-20">
      <div className="max-w-[720px] mx-auto">
        <div className="rounded-2xl border border-cjc-menta/30 bg-cjc-superficie p-8 md:p-11 text-center">
          <span
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cjc-menta/[0.12] mb-6"
            aria-hidden="true"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="text-cjc-menta"
            >
              <path
                d="M12 3l7 3v5.5c0 4.2-2.9 7.9-7 9-4.1-1.1-7-4.8-7-9V6l7-3Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 12l2 2 4-4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>

          <h2 className="font-cjc-display text-[27px] md:text-[38px] leading-tight font-semibold text-cjc-texto mb-6">
            O risco é meu, <em className="italic text-cjc-menta">não seu.</em>
          </h2>

          <div className="font-sans text-[16px] md:text-[18px] leading-[1.75] text-cjc-texto-suave space-y-5">
            <p>
              Entra, participa da sessão ao vivo, e leva os materiais. Se você
              sentir que não valeu cada centavo dos {PRECO},{" "}
              <strong className="font-semibold text-cjc-texto">
                me manda uma mensagem que eu devolvo o seu dinheiro.
              </strong>{" "}
              Sem pergunta, sem burocracia.
            </p>
            <p className="text-cjc-texto">
              A única coisa que você tem a perder é a chance de fazer o seu
              tratamento do jeito certo.
            </p>
          </div>

          <p className="font-sans text-[12px] md:text-[13px] text-cjc-texto-fraco mt-7">
            <a
              href="/politica-de-reembolso"
              className="underline underline-offset-2 hover:text-cjc-texto-suave transition-colors"
            >
              Política de reembolso
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
