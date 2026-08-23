import { Glow } from "../../canetas-do-jeito-certo-_shared/_components/Glow";

// Seção 2 — o mecanismo. A A gasta duas seções aqui (Mecanismo + Consequencias,
// esta última com cinco itens de consequência); a B resolve em uma só e entrega
// o mesmo dado de recaída como insight, não como ameaça. Se a B ganhar, esta é
// a segunda hipótese que o teste terá respondido.

const etapas = [
  {
    titulo: "A caneta segura a fome por você",
    texto:
      "Enquanto ela faz esse trabalho, você emagrece sem precisar mudar o que te trouxe até aqui — a mesma rotina, o mesmo jeito de comer, só que sem a fome empurrando.",
  },
  {
    titulo: "A mudança que sustenta o resultado não chegou a acontecer",
    texto:
      "Ela ficou escondida pelo efeito do remédio. E o que está escondido não dá pra consertar.",
  },
  {
    titulo: "Quando a medicação sai, tudo volta ao mesmo tempo",
    texto:
      "A fome volta com força, os hábitos antigos voltam junto, e o corpo — se não foi cuidado do jeito certo no caminho — ficou mais lento pra gastar energia.",
  },
];

export function Revelacao() {
  return (
    <section className="relative overflow-hidden bg-cjc-noite py-16 md:py-24 px-6 md:px-20">
      <Glow
        className="top-[-140px] right-[-100px] w-[440px] h-[440px]"
        cor="argila"
        opacidade={0.12}
      />

      <div className="max-w-[880px] mx-auto relative">
        <h2 className="font-cjc-display text-[29px] md:text-[44px] leading-[1.15] md:leading-[1.1] font-semibold text-cjc-texto mb-6">
          Por que tanta mulher emagrece com a caneta{" "}
          <em className="italic text-cjc-ambar">e recupera o peso depois?</em>
        </h2>

        <p className="font-sans text-[16px] md:text-[18px] leading-[1.75] text-cjc-texto-suave mb-10 md:mb-12 max-w-[680px]">
          Deixa eu te explicar uma coisa que quase ninguém te conta, e que muda
          tudo.
        </p>

        {/* O mecanismo em três passos encadeados, no lugar da tabela de
            consequências da variante A. Um bloco só, na ordem em que a coisa
            acontece no corpo. */}
        <ol className="relative border-l border-cjc-linha pl-6 md:pl-9 space-y-8 md:space-y-10">
          {etapas.map((etapa, i) => (
            <li key={etapa.titulo} className="relative">
              <span
                className="absolute -left-[31px] md:-left-[43px] top-1 flex items-center justify-center w-[22px] h-[22px] rounded-full bg-cjc-noite border border-cjc-menta/40 font-cjc-display text-[12px] text-cjc-menta tabular-nums"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <h3 className="font-cjc-display text-[20px] md:text-[24px] leading-tight font-semibold text-cjc-texto mb-2.5">
                {etapa.titulo}
              </h3>
              <p className="font-sans text-[15px] md:text-[17px] leading-[1.7] text-cjc-texto-suave max-w-[640px]">
                {etapa.texto}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-12 md:mt-14 rounded-2xl border border-cjc-ambar/25 bg-cjc-ambar/[0.06] p-7 md:p-9">
          <p className="font-cjc-display text-[21px] md:text-[27px] leading-[1.3] font-semibold text-cjc-texto">
            É por isso que mulheres que param sem um plano chegam a recuperar{" "}
            <span className="text-cjc-ambar">até 70% do peso perdido</span>.
          </p>
          <p className="font-sans text-[15px] md:text-[17px] leading-[1.7] text-cjc-texto-suave mt-5">
            Não é sobre esforço. É sobre o que foi construído — ou não — nos
            meses anteriores. E a boa notícia é que{" "}
            <strong className="font-semibold text-cjc-texto">
              dá pra construir isso desde agora.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}
