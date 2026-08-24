import Image from "next/image";
import { Cta } from "../../canetas-do-jeito-certo-_shared/_components/Cta";
import { Cronometro } from "../../canetas-do-jeito-certo-_shared/_components/Cronometro";
import { PRECO } from "../../canetas-do-jeito-certo-_shared/_components/constants";
import { partesRestantes, type Sessao } from "../../canetas-do-jeito-certo-_shared/_components/sessao";
import { PRECO_DE } from "./stack";

type Props = { sessao: Sessao };

// Hero da variante C. Headline polarizante: inverte a crença de que emagrecer
// rápido é vencer, e é o primeiro passo da sequência da copy v4 — a página
// inteira depois cobra essa promessa.
//
// Alternativas aprovadas, guardadas pra rodada seguinte (trocar só esta linha):
//  1. "A caneta está te fazendo emagrecer. E é exatamente por isso que o peso
//     pode voltar."
//  2. "Emagrecer com a caneta é a parte fácil. O que ela esconde é o que traz
//     o peso de volta."

export function Hero({ sessao }: Props) {
  return (
    <section className="bg-cjc-dia border-b border-cjc-dia-linha-suave py-12 md:py-20 px-6 md:px-20">
      <div className="max-w-[1180px] mx-auto">
        <div className="grid md:grid-cols-[54%_46%] gap-10 md:gap-14 items-center">
          <div>
            <p className="font-sans text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.14em] text-cjc-dia-menta mb-6 leading-[1.6]">
              Sessão ao vivo · Próxima {sessao.diaLongo}, às 20h · Para quem usa
              canetas (Ozempic, Mounjaro, Wegovy…)
            </p>

            <h1 className="font-cjc-display text-[31px] md:text-[50px] leading-[1.12] md:leading-[1.06] font-semibold text-cjc-dia-texto mb-6 md:mb-8">
              Quanto mais rápido a caneta{" "}
              <em className="italic text-cjc-dia-menta">esconde a sua fome</em>,
              mais o seu corpo se desmonta por dentro.
            </h1>

            <p className="font-sans text-[16px] md:text-[19px] leading-[1.65] text-cjc-dia-texto-suave mb-8 max-w-[560px]">
              Eu sou a Dra. Michelly Silveira. São 13 anos de clínica e mais de
              3 mil mulheres acompanhadas por mim. Nesta sessão ao vivo, eu vou
              te mostrar como blindar o seu corpo enquanto a caneta age, pra
              você{" "}
              <strong className="font-semibold text-cjc-dia-texto">
                emagrecer gordura, não perder saúde
              </strong>{" "}
              e sair do tratamento com o resultado ainda seu.
            </p>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 mb-7">
              <span className="font-sans text-[14px] text-cjc-dia-texto">
                Ingresso de{" "}
                <span className="line-through text-cjc-dia-texto-fraco">
                  {PRECO_DE}
                </span>{" "}
                por{" "}
                <strong className="font-semibold text-cjc-dia-menta">
                  {PRECO}
                </strong>
              </span>
              <span
                className="w-px h-4 bg-cjc-dia-linha-suave hidden sm:block"
                aria-hidden="true"
              />
              <Cronometro inicial={partesRestantes(sessao.alvoISO)} tema="dia" />
            </div>

            <Cta variant="dia" dataCta="cjc-hero">
              QUERO MINHA VAGA POR {PRECO}
            </Cta>

            <ul className="flex flex-wrap gap-x-6 gap-y-2 mt-6">
              {[
                "2 horas ao vivo, comigo",
                "Gravação incluída (7 dias)",
                "Participe, e se não valer, devolvo tudo",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 font-sans text-[13px] md:text-[14px] text-cjc-dia-texto-suave"
                >
                  <svg
                    width="13"
                    height="13"
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

          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden ring-1 ring-cjc-dia-linha-suave shadow-[0_24px_60px_rgba(16,32,26,0.16)]">
              {/* Mesmo par preload + fetchPriority das outras variantes: é o
                  candidato a LCP e, sem isso, o Chrome mantém a imagem em
                  prioridade baixa até o layout fechar. */}
              <Image
                src="/images/canetas-do-jeito-certo/michelly-hero.jpg"
                alt="Michelly Silveira, nutricionista clínica especialista em saúde da mulher"
                fill
                preload
                fetchPriority="high"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 46vw"
              />
            </div>
            <div className="mt-4">
              <div className="font-cjc-display text-[19px] md:text-[21px] font-semibold text-cjc-dia-texto leading-tight">
                Dra. Michelly Silveira Fanelli
              </div>
              <div className="font-sans text-[12px] text-cjc-dia-texto-suave mt-1">
                Nutricionista Clínica · CRN-3 36739 · Especialista em Saúde da
                Mulher
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
