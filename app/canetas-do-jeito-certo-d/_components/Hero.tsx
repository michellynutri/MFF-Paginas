import Image from "next/image";
import { Cta } from "../../canetas-do-jeito-certo-_shared/_components/Cta";
import { Cronometro } from "../../canetas-do-jeito-certo-_shared/_components/Cronometro";
import { PRECO } from "../../canetas-do-jeito-certo-_shared/_components/constants";
import {
  partesRestantes,
  type Sessao,
} from "../../canetas-do-jeito-certo-_shared/_components/sessao";
import { PRECO_DE } from "./stack";

type Props = { sessao: Sessao };

// Hero da variante D (copy v5, eixo prático).
//
// A diferença que define esta variante inteira já está aqui: as outras três
// abrem prometendo um DIAGNÓSTICO ("a caneta esconde a sua fome e o seu corpo
// se desmonta"), e esta abre prometendo um ENTREGÁVEL ("em 2 horas eu monto o
// plano completo de alimentação com você"). A dor vem depois, na seção 1 — o
// que vem primeiro é o que a pessoa sai tendo na mão.
//
// Se isto aqui converter melhor, a leitura não é "a copy ficou boa": é que
// este público compra solução prática, não explicação de mecanismo.

// Os três selos abaixo do botão. Cada um tem duas redações: a `longa` é a da
// copy, e a `curta` existe só pra caber em UMA linha no celular.
//
// Por que duas: no mobile a coluna tem ~310px úteis num aparelho de 360px, e
// as três frases da copy somam 75 caracteres — quebravam em três linhas, cada
// uma com o seu ✓, virando uma listinha empilhada que empurrava o botão pra
// fora da primeira dobra. Selo é pra ser varrido de relance, não lido: no
// celular ele vira etiqueta, no desktop volta a ser a frase inteira.
//
// Se for mexer na versão curta, medir antes: o limite é a soma passar de ~35
// caracteres. Acima disso volta a quebrar nos aparelhos estreitos, que é
// justamente onde está a maior parte do tráfego desta página.
const garantias = [
  { curta: "2h ao vivo", longa: "2 horas ao vivo, mão na massa" },
  { curta: "Plano montado", longa: "Você sai com um plano montado" },
  { curta: "Com gravação", longa: "Gravação incluída" },
];

export function Hero({ sessao }: Props) {
  return (
    <section className="bg-cjc-dia border-b border-cjc-dia-linha-suave py-12 md:py-20 px-6 md:px-20">
      <div className="max-w-[1180px] mx-auto">
        <div className="grid md:grid-cols-[54%_46%] gap-10 md:gap-14 items-center">
          <div>
            <p className="font-sans text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.14em] text-cjc-dia-menta mb-6 leading-[1.6]">
              Workshop ao vivo · Próxima {sessao.diaLongo}, às 20h · Para quem
              usa canetas (Mounjaro, Ozempic, Wegovy)
            </p>

            <h1 className="font-cjc-display text-[31px] md:text-[50px] leading-[1.12] md:leading-[1.06] font-semibold text-cjc-dia-texto mb-6 md:mb-8">
              Em 2 horas, eu monto{" "}
              <em className="italic text-cjc-dia-menta">
                o plano completo de alimentação
              </em>{" "}
              pra você ter o melhor resultado possível com a caneta.
            </h1>

            <p className="font-sans text-[16px] md:text-[19px] leading-[1.65] text-cjc-dia-texto-suave mb-8 max-w-[560px]">
              O primeiro workshop feito pra quem usa caneta:{" "}
              <strong className="font-semibold text-cjc-dia-texto">
                o que comer, quanto comer e quais os melhores alimentos
              </strong>
              . Do zero, mão na massa, com a Dra. Michelly Silveira. Você sai
              sabendo fazer sozinha, no mesmo dia.
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

            {/* Mobile: uma linha só, os três espalhados pela largura
                (justify-between) e sem permissão de quebrar. Do md pra cima
                volta o comportamento normal, alinhado à esquerda. */}
            <ul className="mt-6 flex flex-nowrap items-center justify-between gap-x-2 md:flex-wrap md:justify-start md:gap-x-6 md:gap-y-2">
              {garantias.map((item) => (
                <li
                  key={item.longa}
                  className="flex items-center gap-1.5 md:gap-2 font-sans text-[11px] md:text-[14px] text-cjc-dia-texto-suave whitespace-nowrap"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    className="text-cjc-dia-menta shrink-0 md:w-[13px] md:h-[13px]"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="md:hidden">{item.curta}</span>
                  <span className="hidden md:inline">{item.longa}</span>
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
