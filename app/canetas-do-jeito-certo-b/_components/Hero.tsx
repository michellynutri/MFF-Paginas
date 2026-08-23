import Image from "next/image";
import { Cta } from "../../canetas-do-jeito-certo-_shared/_components/Cta";
import { Cronometro } from "../../canetas-do-jeito-certo-_shared/_components/Cronometro";
import { Glow } from "../../canetas-do-jeito-certo-_shared/_components/Glow";
import { PRECO } from "../../canetas-do-jeito-certo-_shared/_components/constants";
import { partesRestantes, type Sessao } from "../../canetas-do-jeito-certo-_shared/_components/sessao";
import { PRECO_DE } from "./stack";

type Props = { sessao: Sessao };

// Headlines alternativas aprovadas na copy v2, guardadas aqui pra rodada 2 do
// teste. A headline é o elemento nº 1 da página: quando a B ganhar (ou perder)
// da A, o próximo teste é trocar só esta linha, sem mexer em mais nada.
//
//  1. "Aprenda a usar a sua caneta do jeito certo: emagreça mais agora e
//     continue firme depois que ela sair."
//  2. "A sua caneta pode render muito mais do que está rendendo. Numa sessão
//     ao vivo, eu te mostro como."

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
          {/* Sem animação de entrada aqui de propósito: .animate-fade-up
              começa em opacity:0, e o Chrome não considera elemento invisível
              como candidato a LCP — o hero inteiro só entrava na conta 500 ms
              depois de já estar pintado. */}
          <div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-6">
              <span className="inline-flex items-center rounded-full border border-cjc-menta/30 bg-cjc-menta/[0.08] px-3.5 py-1.5 font-sans text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.16em] text-cjc-menta">
                Sessão ao vivo
              </span>
              <span className="font-sans text-[14px] md:text-[15px] text-cjc-texto-suave">
                Próxima {sessao.diaLongo}, às 20h
              </span>
            </div>

            <h1 className="font-cjc-display text-[32px] md:text-[52px] leading-[1.12] md:leading-[1.06] font-semibold text-cjc-texto mb-6 md:mb-8">
              Você já paga caro pela sua caneta.{" "}
              <em className="italic text-cjc-menta">
                Aprenda a extrair o máximo dela
              </em>{" "}
              e a manter o resultado quando ela sair.
            </h1>

            <p className="font-sans text-[16px] md:text-[19px] leading-[1.65] text-cjc-texto-suave mb-8 max-w-[560px]">
              Numa sessão ao vivo, a Dra. Michelly Silveira te mostra como
              emagrecer mais sem subir a dose, atravessar cada fase do
              tratamento sem ser pega de surpresa, e{" "}
              <strong className="font-semibold text-cjc-texto">
                chegar no fim com o resultado ainda seu
              </strong>{" "}
              — o mesmo sistema que ela aplica no consultório.
            </p>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 mb-7">
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
              <Cronometro inicial={partesRestantes(sessao.alvoISO)} />
            </div>

            <Cta dataCta="cjc-hero">QUERO MINHA VAGA POR {PRECO}</Cta>

            <ul className="flex flex-wrap gap-x-6 gap-y-2 mt-6">
              {[
                "Confirmação na hora, por e-mail e WhatsApp",
                "Acesso à gravação por 7 dias",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 font-sans text-[13px] md:text-[14px] text-cjc-texto-suave"
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    className="text-cjc-menta shrink-0"
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

          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_24px_70px_rgba(0,0,0,0.5)] ring-1 ring-cjc-linha">
              {/* preload + fetchPriority juntos de propósito: `priority`
                  (deprecado no Next 16) só emite loading=eager e o
                  <link rel=preload> — não emite fetchpriority=high, nem na tag
                  nem no preload. Sem isso o Chrome mantém a imagem em
                  prioridade baixa até o layout fechar, e ela entra na fila
                  atrás dos 189 KB de CSS inline e dos chunks. */}
              <Image
                src="/images/canetas-do-jeito-certo/michelly-hero.jpg"
                alt="Michelly Silveira, nutricionista clínica especialista em saúde da mulher"
                fill
                preload
                fetchPriority="high"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 46vw"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-cjc-noite-esc via-cjc-noite-esc/10 to-transparent"
                aria-hidden="true"
              />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="font-cjc-display text-[19px] md:text-[21px] font-semibold text-cjc-texto leading-tight">
                  Dra. Michelly Silveira Fanelli
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
