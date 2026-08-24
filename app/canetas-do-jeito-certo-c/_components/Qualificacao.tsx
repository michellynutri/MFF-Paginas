// Seção 11 — qualifica e, no fim, tira: o "não é pra você" existe pra que o
// sim tenha peso. Sem o takeaway, a lista vira só mais uma lista de benefícios.

const criterios = [
  "você usa a caneta e quer tirar o máximo dela, sem enfraquecer o corpo no caminho",
  "você tem medo de parar um dia e engordar tudo de novo",
  "você já desconfiou que “comer menos e treinar mais” nunca funcionou de verdade com você",
  "você quer um caminho feito pro corpo da mulher, não mais uma dieta genérica",
];

export function Qualificacao() {
  return (
    <section className="bg-cjc-dia-superficie border-y border-cjc-dia-linha-suave py-16 md:py-24 px-6 md:px-20">
      <div className="max-w-[820px] mx-auto">
        <h2 className="font-cjc-display text-[29px] md:text-[42px] leading-[1.12] md:leading-[1.06] font-semibold text-cjc-dia-texto mb-10">
          Essa sessão é pra você se…
        </h2>

        <ul className="space-y-4 mb-12">
          {criterios.map((item) => (
            <li key={item} className="flex gap-4 items-start">
              <span
                className="w-[20px] h-[20px] rounded-full bg-cjc-dia-menta flex items-center justify-center mt-1 shrink-0"
                aria-hidden="true"
              >
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  className="text-white"
                >
                  <path
                    d="M5 13l4 4L19 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="font-sans text-[16px] md:text-[18px] leading-[1.65] text-cjc-dia-texto-suave">
                {item}
              </span>
            </li>
          ))}
        </ul>

        <div className="rounded-2xl border border-cjc-dia-argila/30 bg-cjc-dia p-7 md:p-9">
          <p className="font-sans text-[16px] md:text-[18px] leading-[1.75] text-cjc-dia-texto-suave">
            <strong className="font-semibold text-cjc-dia-argila">
              Não é pra você
            </strong>{" "}
            se você procura uma fórmula mágica pra emagrecer sem cuidar de nada.
            Aqui é o oposto disso — e tudo bem se não for o que você quer agora.
          </p>
        </div>
      </div>
    </section>
  );
}
