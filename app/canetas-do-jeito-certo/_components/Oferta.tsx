import { Cta } from "./Cta";
import { Glow } from "./Glow";
import { DURACAO, PRECO, PRECO_DE } from "./constants";
import { ITENS_OFERTA, brl, recapOferta } from "./stack";
import type { Sessao } from "./sessao";

type Props = { sessao: Sessao };

export function Oferta({ sessao }: Props) {
  const recap = recapOferta(sessao, DURACAO);

  return (
    <section
      id="ingresso"
      className="relative overflow-hidden bg-cjc-noite-esc py-16 md:py-24 px-6 md:px-20 scroll-mt-6"
    >
      <Glow className="top-[-140px] left-1/2 -translate-x-1/2 w-[560px] h-[460px]" />

      <div className="max-w-[820px] mx-auto relative">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.16em] text-cjc-menta mb-5">
            Sua vaga na sessão
          </p>

          <h2 className="font-cjc-display text-[29px] md:text-[46px] leading-[1.12] md:leading-[1.06] font-semibold text-cjc-texto max-w-[680px] mx-auto mb-6">
            Você não está comprando {DURACAO} de aula.{" "}
            <em className="italic text-cjc-menta">
              Você está saindo com o tratamento inteiro planejado.
            </em>
          </h2>

          <p className="font-sans text-[16px] md:text-[18px] leading-[1.7] text-cjc-texto-suave max-w-[620px] mx-auto">
            A sessão dura {DURACAO}. O que você leva dela continua funcionando
            por todos os meses de caneta que ainda estão pela frente — e pelos
            que vêm depois dela.
          </p>

          <p className="font-sans text-[14px] md:text-[15px] text-cjc-texto-suave mt-6">
            Ao vivo na{" "}
            <strong className="font-semibold text-cjc-texto">
              {sessao.diaLongo}, às 20h
            </strong>
          </p>
        </div>

        <ol className="space-y-3 md:space-y-4 mb-10 md:mb-12">
          {ITENS_OFERTA.map((item, i) => (
            <li
              key={item.nome}
              className={`rounded-2xl border p-5 md:p-7 ${
                item.nucleo
                  ? "border-cjc-menta/40 bg-cjc-menta/[0.07]"
                  : "border-cjc-linha-suave bg-cjc-superficie"
              }`}
            >
              <div className="grid grid-cols-[auto_1fr] gap-x-4 md:gap-x-6">
                <span
                  className={`font-cjc-display text-[17px] md:text-[19px] tabular-nums pt-0.5 ${
                    item.nucleo ? "text-cjc-menta" : "text-cjc-menta/40"
                  }`}
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-5 gap-y-1 mb-2.5">
                    <h3
                      className={`font-cjc-display text-[19px] md:text-[23px] leading-tight font-semibold ${
                        item.nucleo ? "text-cjc-menta" : "text-cjc-texto"
                      }`}
                    >
                      {item.nome}
                    </h3>

                    <p className="font-sans text-[13px] md:text-[14px] shrink-0">
                      {item.nucleo ? (
                        <span className="font-semibold text-cjc-texto">
                          Valor: {brl(item.valor)}
                        </span>
                      ) : (
                        <>
                          <span className="line-through text-cjc-texto-fraco">
                            {brl(item.valor)}
                          </span>{" "}
                          <span className="font-semibold text-cjc-menta">
                            incluso
                          </span>
                        </>
                      )}
                    </p>
                  </div>

                  <p className="font-sans text-[14px] md:text-[15px] leading-[1.65] text-cjc-texto-suave">
                    {item.texto}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="max-w-[620px] mx-auto rounded-3xl border border-cjc-menta/25 bg-cjc-superficie p-7 md:p-11 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
          <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.16em] text-cjc-menta mb-6 text-center">
            Tudo o que entra na sua vaga
          </p>

          <ul className="space-y-3.5 mb-9">
            {recap.map((item) => (
              <li key={item} className="flex gap-3 items-start">
                <span
                  className="w-[18px] h-[18px] rounded-full bg-cjc-menta flex items-center justify-center mt-0.5 shrink-0"
                  aria-hidden="true"
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    className="text-cjc-noite-esc"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="font-sans text-[14px] md:text-[15px] leading-[1.55] text-cjc-texto">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="text-center border-t border-cjc-linha-suave pt-8 mb-8">
            <p className="font-sans text-[15px] md:text-[16px] text-cjc-texto-fraco">
              Junto, isso vale{" "}
              <span className="line-through">{PRECO_DE}</span>
            </p>
            <p className="font-sans text-[15px] md:text-[16px] text-cjc-texto-suave mt-5">
              Sua vaga hoje:
            </p>
            <div className="font-cjc-display text-[56px] md:text-[76px] leading-none font-semibold text-cjc-menta mt-1">
              {PRECO}
            </div>
          </div>

          <Cta
            to="checkout"
            variant="menta-grande"
            dataCta="cjc-oferta"
            className="w-full"
          >
            GARANTIR MINHA VAGA POR {PRECO}
          </Cta>

          <p className="font-sans text-[12px] md:text-[13px] text-cjc-texto-fraco mt-5 leading-[1.6] text-center">
            Confirmação imediata por e-mail e WhatsApp
          </p>
        </div>
      </div>
    </section>
  );
}
