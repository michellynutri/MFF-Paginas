import { Cta } from "../../canetas-do-jeito-certo-_shared/_components/Cta";
import {
  DURACAO,
  PRECO,
} from "../../canetas-do-jeito-certo-_shared/_components/constants";
import { ITENS_OFERTA, PRECO_DE, brl, recapOferta } from "./stack";
import type { Sessao } from "../../canetas-do-jeito-certo-_shared/_components/sessao";

type Props = { sessao: Sessao };

// Seção 11 — o stack. Mesma mecânica visual da variante C (o que já foi
// testado não se mexe sem motivo); o que muda são os itens, que agora são os
// materiais que o workshop de fato produz. Ver o comentário do stack.ts.

const selos = ["Confirmação na hora", "Ao vivo, mão na massa", "Replay incluso"];

export function Oferta({ sessao }: Props) {
  const recap = recapOferta(sessao, DURACAO);

  return (
    <section className="bg-cjc-dia-superficie border-y border-cjc-dia-linha-suave py-16 md:py-24 px-6 md:px-20">
      <div className="max-w-[820px] mx-auto">
        <h2 className="font-cjc-display text-[29px] md:text-[44px] leading-[1.12] md:leading-[1.06] font-semibold text-cjc-dia-texto mb-12 text-center">
          Tudo o que entra na sua vaga por{" "}
          <em className="italic text-cjc-dia-menta">{PRECO}</em>
        </h2>

        <ol className="space-y-3 md:space-y-4 mb-10">
          {ITENS_OFERTA.map((item, i) => (
            <li
              key={item.nome}
              className={`rounded-2xl border p-5 md:p-7 ${
                item.nucleo
                  ? "border-cjc-dia-menta/40 bg-cjc-dia-menta/[0.05]"
                  : "border-cjc-dia-linha-suave bg-cjc-dia"
              }`}
            >
              <div className="grid grid-cols-[auto_1fr] gap-x-4 md:gap-x-6">
                <span
                  className={`font-cjc-display text-[17px] md:text-[19px] tabular-nums pt-0.5 ${
                    item.nucleo ? "text-cjc-dia-menta" : "text-cjc-dia-menta/40"
                  }`}
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-5 gap-y-1 mb-2.5">
                    <h3
                      className={`font-cjc-display text-[19px] md:text-[23px] leading-tight font-semibold ${
                        item.nucleo
                          ? "text-cjc-dia-menta"
                          : "text-cjc-dia-texto"
                      }`}
                    >
                      {item.nome}
                    </h3>

                    <p className="font-sans text-[13px] md:text-[14px] shrink-0">
                      {item.nucleo ? (
                        <span className="font-semibold text-cjc-dia-texto">
                          Valor: {brl(item.valor)}
                        </span>
                      ) : (
                        <>
                          <span className="line-through text-cjc-dia-texto-fraco">
                            {brl(item.valor)}
                          </span>{" "}
                          <span className="font-semibold text-cjc-dia-menta">
                            incluso
                          </span>
                        </>
                      )}
                    </p>
                  </div>

                  <p className="font-sans text-[14px] md:text-[15px] leading-[1.65] text-cjc-dia-texto-suave">
                    {item.texto}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <p className="font-cjc-display text-[21px] md:text-[26px] font-semibold text-cjc-dia-texto text-center mb-12">
          Junto, isso vale{" "}
          <span className="line-through text-cjc-dia-texto-fraco font-normal">
            {PRECO_DE}
          </span>
          .
        </p>

        {/* A âncora #ingresso pousa aqui, no card que fecha a venda — preço e
            botão na primeira dobra depois do pulo, como nas outras variantes. */}
        <div
          id="ingresso"
          className="max-w-[620px] mx-auto rounded-3xl border-2 border-cjc-dia-menta/25 bg-cjc-dia p-7 md:p-11 shadow-[0_24px_60px_rgba(16,32,26,0.12)] scroll-mt-8 md:scroll-mt-14"
        >
          <ul className="space-y-3.5 mb-9">
            {recap.map((item) => (
              <li key={item} className="flex gap-3 items-start">
                <span
                  className="w-[18px] h-[18px] rounded-full bg-cjc-dia-menta flex items-center justify-center mt-0.5 shrink-0"
                  aria-hidden="true"
                >
                  <svg
                    width="10"
                    height="10"
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
                <span className="font-sans text-[14px] md:text-[15px] leading-[1.55] text-cjc-dia-texto">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="text-center border-t border-cjc-dia-linha-suave pt-8 mb-8">
            <p className="font-sans text-[15px] md:text-[16px] text-cjc-dia-texto-suave">
              Sua vaga hoje:
            </p>
            <div className="font-cjc-display text-[56px] md:text-[76px] leading-none font-semibold text-cjc-dia-menta mt-1">
              {PRECO}
            </div>
            <p className="font-sans text-[15px] md:text-[16px] text-cjc-dia-texto-fraco mt-2">
              (de <span className="line-through">{PRECO_DE}</span>)
            </p>
          </div>

          <Cta
            to="checkout"
            variant="dia-grande"
            dataCta="cjc-oferta"
            className="w-full"
          >
            GARANTIR MINHA VAGA — {PRECO}
          </Cta>

          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 mt-6">
            {selos.map((item) => (
              <li
                key={item}
                className="flex items-center gap-1.5 font-sans text-[12px] md:text-[13px] text-cjc-dia-texto-fraco"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  className="text-cjc-dia-menta shrink-0"
                  aria-hidden="true"
                >
                  <path
                    d="M5 13l4 4L19 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
