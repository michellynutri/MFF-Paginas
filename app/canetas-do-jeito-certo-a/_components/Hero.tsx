import Image from "next/image";
import { Cta } from "../../canetas-do-jeito-certo-_shared/_components/Cta";
import { Cronometro } from "../../canetas-do-jeito-certo-_shared/_components/Cronometro";
import { Glow } from "../../canetas-do-jeito-certo-_shared/_components/Glow";
import { PRECO } from "../../canetas-do-jeito-certo-_shared/_components/constants";
import { PRECO_DE } from "./stack";
import { partesRestantes, type Sessao } from "../../canetas-do-jeito-certo-_shared/_components/sessao";

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
          {/* Sem animação de entrada aqui de propósito: .animate-fade-up
              começa em opacity:0, e o Chrome não considera elemento invisível
              como candidato a LCP — o hero inteiro só entrava na conta 500 ms
              depois de já estar pintado. */}
          <div>
            {/* Formato e data antes da headline: a página tem um cronômetro
                logo abaixo, e relógio só faz sentido pra quem já sabe que
                existe um evento com hora marcada. */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-6">
              <span className="inline-flex items-center rounded-full border border-cjc-menta/30 bg-cjc-menta/[0.08] px-3.5 py-1.5 font-sans text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.16em] text-cjc-menta">
                Sessão ao vivo
              </span>
              <span className="font-sans text-[14px] md:text-[15px] text-cjc-texto-suave">
                {sessao.diaLongoTitulo}, às 20h
              </span>
            </div>

            <h1 className="font-cjc-display text-[32px] md:text-[52px] leading-[1.12] md:leading-[1.06] font-semibold text-cjc-texto mb-6 md:mb-8">
              <em className="italic text-cjc-menta">Blindagem Metabólica</em>: o
              que faz a mesma dose de caneta queimar mais gordura.
            </h1>

            <p className="font-sans text-[16px] md:text-[19px] leading-[1.65] text-cjc-texto-suave mb-8 max-w-[560px]">
              O Sistema Completo que a Dra. Michelly usa nas pacientes da
              clínica: emagrecer com segurança, sem perder músculo no caminho —
              e{" "}
              <strong className="font-semibold text-cjc-texto">
                sem o peso voltar com tudo quando você parar.
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
              <Cronometro inicial={partesRestantes(sessao.alvoISO)} />
            </div>

            <Cta dataCta="cjc-hero">QUERO MINHA VAGA NA SESSÃO</Cta>
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
