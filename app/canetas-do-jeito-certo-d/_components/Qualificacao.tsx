// Seção 8 — qualifica e, no fim, tira. O "não é pra você" existe pra que o sim
// tenha peso: sem o takeaway, a lista vira só mais uma lista de benefícios.
//
// O critério do meio ("quer aprender a montar o seu prato, não receber uma
// dieta pronta que não entende") é o que faz a peneira do eixo prático — quem
// quer receber cardápio mastigado se auto-elimina aqui, e é melhor que se
// elimine antes de pagar do que depois, no reembolso.

const criterios = [
  "você usa caneta e não sabe direito o que comer",
  "você come pouco e desconfia que pode estar comendo errado",
  "você quer proteger o músculo e não emagrecer “murcha”",
  "você quer aprender a montar o seu prato, não receber uma dieta pronta que não entende",
  "você não quer engordar tudo de novo quando parar a caneta",
];

export function Qualificacao() {
  return (
    <section className="bg-cjc-dia py-16 md:py-24 px-6 md:px-20">
      <div className="max-w-[820px] mx-auto">
        <h2 className="font-cjc-display text-[29px] md:text-[42px] leading-[1.12] md:leading-[1.06] font-semibold text-cjc-dia-texto mb-10">
          Esse workshop é pra você se…
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

        <div className="rounded-2xl border border-cjc-dia-argila/30 bg-cjc-dia-superficie p-7 md:p-9">
          <p className="font-sans text-[16px] md:text-[18px] leading-[1.75] text-cjc-dia-texto-suave">
            <strong className="font-semibold text-cjc-dia-argila">
              Não é pra você
            </strong>{" "}
            se você quer uma fórmula mágica sem colocar a mão na massa. Aqui é
            mão na massa — e tudo bem se não for o que você quer agora.
          </p>
        </div>
      </div>
    </section>
  );
}
