import Image from "next/image";
import { Cta } from "./Cta";
import { Cronometro } from "./Cronometro";
import { Glow } from "./Glow";
import { PRECO, PRECO_DE } from "./constants";
import type { Sessao } from "./sessao";

type Props = { sessao: Sessao };

export function Hero({ sessao }: Props) {
  return (
    <section className="relative overflow-hidden bg-cjc-noite py-14 md:py-24 px-6 md:px-20">
      <Glow className="top-[-160px] left-[-120px] w-[520px] h-[520px]" />
      <Glow
        className="bottom-[-200px] right-[-140px] w-[560px] h-[560px]"
        cor="ambar"
        opacidade={0.1}
      />

      <div className="max-w-[1180px] mx-auto relative">
        <div className="grid md:grid-cols-[54%_46%] gap-12 md:gap-14 items-center">
          <div className="animate-fade-up">
            <p className="font-sans text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.16em] text-cjc-menta mb-5 leading-[1.5]">
              Para todas as mulheres que querem emagrecer mais rápido e manter o
              resultado depois de parar com as canetas
            </p>

            <h1 className="font-cjc-display text-[32px] md:text-[52px] leading-[1.12] md:leading-[1.06] font-semibold text-cjc-texto mb-6 md:mb-8">
              Aprenda a usar a caneta do jeito certo e extraia o máximo dela:{" "}
              <em className="italic text-cjc-menta">
                mais resultado agora, e o corpo que continua seu depois.
              </em>
            </h1>

            <p className="font-sans text-[16px] md:text-[19px] leading-[1.65] text-cjc-texto-suave mb-8 max-w-[560px]">
              Você já investe na caneta todo mês. Nesta masterclass ao vivo, a
              nutricionista Michelly Silveira te mostra como emagrecer mais sem
              subir a dose, atravessar cada fase sem ser pega de surpresa e sair
              do tratamento dona do seu resultado — do jeito certo, feito pro
              corpo da mulher.
            </p>

            <p className="font-sans text-[15px] md:text-[16px] text-cjc-texto-suave mb-6">
              Ao vivo na{" "}
              <strong className="font-semibold text-cjc-texto">
                {sessao.diaLongo}, às 20h
              </strong>
            </p>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 mb-8">
              <span className="font-sans text-[14px] text-cjc-texto">
                Ingresso <span className="sr-only">de</span>
                <span className="line-through text-cjc-texto-fraco">
                  {PRECO_DE}
                </span>{" "}
                <span className="sr-only">por</span>
                <strong className="font-semibold text-cjc-menta">
                  {PRECO}
                </strong>
              </span>
              <span
                className="w-px h-4 bg-cjc-linha-suave hidden sm:block"
                aria-hidden="true"
              />
              <Cronometro />
            </div>

            <Cta dataCta="cjc-hero">QUERO MINHA VAGA NA SESSÃO</Cta>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_24px_70px_rgba(0,0,0,0.5)] ring-1 ring-cjc-linha">
              <Image
                src="/images/canetas-do-jeito-certo/michelly-hero.jpg"
                alt="Michelly Silveira, nutricionista clínica especialista em saúde da mulher"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 46vw"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-cjc-noite-esc via-cjc-noite-esc/10 to-transparent"
                aria-hidden="true"
              />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="font-cjc-display text-[19px] md:text-[21px] font-semibold text-cjc-texto leading-tight">
                  Michelly Silveira Fanelli
                </div>
                <div className="font-sans text-[12px] text-cjc-texto-suave mt-1">
                  Nutricionista Clínica · CRN-3 36739 · Especialista em Saúde da
                  Mulher
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
