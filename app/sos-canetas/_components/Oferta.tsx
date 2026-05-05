import { Cta } from "./Cta";
import { CHECKOUT_URL } from "./constants";

type OfertaItem = {
  title: string;
  desc: string;
  value: string;
  isMain?: boolean;
  isBonus?: boolean;
  icon: React.ReactNode;
};

const itens: OfertaItem[] = [
  {
    title: "Manual S.O.S. Canetas — Sistema Completo",
    desc: "7 capítulos de consulta imediata — do que está acontecendo no seu corpo agora até o cardápio dia a dia.",
    value: "R$ 47",
    isMain: true,
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M4 4h12a4 4 0 014 4v12H8a4 4 0 01-4-4V4z" />
        <path d="M4 4v16M8 8h8M8 12h6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Aula de Ativação com a Michelly",
    desc: "Vídeo: o que esperar, o que é normal, como usar o manual desde o primeiro dia.",
    value: "R$ 67",
    isBonus: true,
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <polygon points="6 4 20 12 6 20" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Guia de Substituições Inteligentes",
    desc: "Trocas certas para cada alimento do cardápio. Consulta rápida por grupo alimentar.",
    value: "R$ 17",
    isBonus: true,
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          d="M4 7h12l-3-3M20 17H8l3 3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Lista de Compras Pronta",
    desc: "Semanas 1 e 2, separada por categoria, com checkbox para marcar no mercado.",
    value: "R$ 17",
    isBonus: true,
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          d="M5 7h14l-1.5 11a2 2 0 01-2 1.8H8.5a2 2 0 01-2-1.8L5 7z"
          strokeLinejoin="round"
        />
        <path d="M9 7V5a3 3 0 016 0v2" strokeLinecap="round" />
      </svg>
    ),
  },
];

const checks = [
  "Manual S.O.S. Canetas — sistema completo de 7 proteções",
  "Aula de ativação com a Michelly",
  "Guia de substituições inteligentes",
  "Lista de compras das semanas 1 e 2",
  "Acesso imediato após o pagamento",
  "Garantia integral de satisfação por 7 dias",
];

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      className="text-sos-dourado-esc shrink-0 mt-1"
      aria-hidden="true"
    >
      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Oferta() {
  return (
    <>
      {/* 7.1 Zona Oferta */}
      <section
        id="oferta"
        className="bg-creme py-16 md:py-24 px-6 md:px-20 scroll-mt-6 md:scroll-mt-12"
      >
        <div className="max-w-[720px] mx-auto">
          <div className="text-center mb-10">
            <p className="font-sans text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.16em] text-sos-terracota mb-4">
              Apesar de ser suficiente
            </p>
            <h2 className="font-serif text-[28px] md:text-[40px] leading-[1.1] md:leading-[1.05] font-medium text-texto">
              Hoje você recebe{" "}
              <em className="italic">mais do que só o Manual</em>
            </h2>
          </div>

          <div className="space-y-3">
            {itens.map((item, i) => (
              <div
                key={i}
                className={`relative grid grid-cols-[48px_1fr_auto] md:grid-cols-[56px_1fr_auto] gap-4 md:gap-5 items-center bg-sos-creme-soft rounded-xl p-5 md:p-6 ${
                  item.isMain
                    ? "border-2 border-sos-dourado-esc"
                    : "border border-sos-borda-dourada"
                }`}
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-sos-dourado flex items-center justify-center text-creme">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <div className="font-serif text-[19px] md:text-[22px] font-medium text-texto mb-1 leading-tight">
                    {item.title}
                  </div>
                  <div className="font-sans text-[13px] md:text-[14px] text-marrom leading-[1.5]">
                    {item.desc}
                  </div>
                </div>
                <div
                  className={`font-sans text-[14px] md:text-[16px] font-medium whitespace-nowrap ${
                    item.isBonus ? "line-through text-marrom" : "text-texto"
                  }`}
                >
                  {item.value}
                </div>

                {item.isBonus && (
                  <span className="absolute -top-2 right-4 bg-sos-dourado text-creme text-[10px] font-sans font-semibold uppercase tracking-[0.1em] px-2 py-1 rounded">
                    Grátis hoje
                  </span>
                )}
              </div>
            ))}
          </div>

          <ul className="space-y-3 my-10">
            {checks.map((c, i) => (
              <li
                key={i}
                className="flex gap-3 items-start font-sans text-[15px] text-texto"
              >
                <CheckIcon />
                <span>{c}</span>
              </li>
            ))}
          </ul>

          {/* Bloco de preço */}
          <div className="text-center my-12">
            <div className="font-sans text-[15px] md:text-[16px] text-marrom">
              Valor total: <s>R$ 148</s>
            </div>
            <div className="font-sans text-[16px] md:text-[17px] text-texto mt-2 mb-3">
              Hoje, tudo isso por:
            </div>
            <div className="inline-flex items-baseline text-sos-terracota">
              <span className="font-serif text-[32px] md:text-[36px] font-medium mr-1.5">
                R$
              </span>
              <span className="font-serif text-[64px] md:text-[96px] font-medium leading-none">
                47
              </span>
            </div>
            <div className="font-sans text-[13px] md:text-[14px] text-marrom mt-2">
              Ou em parcelas no cartão
            </div>
          </div>

          <div className="flex flex-col items-center gap-3">
            <Cta variant="terracota" to="checkout" dataCta="sos-oferta">
              SIM, QUERO TUDO ISSO POR R$ 47
            </Cta>
            <p className="font-sans text-[13px] text-marrom text-center">
              Acesso imediato após o pagamento · Garantia de 7 dias
            </p>
          </div>
        </div>
      </section>

      {/* 7.2 Zona Garantia */}
      <section className="bg-sos-verde-medio text-creme py-20 md:py-24 px-6 md:px-20">
        <div className="max-w-[640px] mx-auto text-center">
          <svg
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-sos-dourado mx-auto mb-6"
            aria-hidden="true"
          >
            <path
              d="M12 2L3 6v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V6l-9-4z"
              strokeLinejoin="round"
            />
            <path
              d="M9 12l2 2 4-4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <h2 className="font-serif text-[26px] md:text-[32px] leading-[1.15] font-medium mb-6">
            Teste 7 dias. Se não for para você, devolvemos cada centavo.
          </h2>

          <div className="font-sans text-[16px] md:text-[17px] text-creme/90 leading-[1.7] space-y-4">
            <p>
              Se nos próximos 7 dias você sentir que não é para você, por
              qualquer motivo, basta enviar um e-mail e devolvemos 100% do seu
              dinheiro. Sem perguntas. Sem burocracia. Sem letra miúda.
            </p>
            <p>
              O risco real é continuar usando a caneta sem saber o que comer. E
              desperdiçar mais um mês de medicação cara sem extrair o resultado
              que ela pode dar.
            </p>
          </div>
        </div>
      </section>

      {/* 7.3 Zona CTA Final */}
      <section className="bg-creme py-16 md:py-24 px-6 md:px-20">
        <div className="max-w-[720px] mx-auto text-center">
          <h2 className="font-serif text-[28px] md:text-[38px] leading-[1.1] md:leading-[1.05] font-medium text-texto mb-6">
            Você está emagrecendo. E ainda está a tempo de fazer{" "}
            <em className="italic">o tratamento certo</em>.
          </h2>

          <p className="font-sans text-[16px] md:text-[18px] text-texto leading-[1.7] mb-10">
            O que você faz agora, nessa janela específica dos primeiros meses, é
            o que vai determinar se o peso que está perdendo fica para sempre.
            Ou volta tudo quando a caneta parar. O Manual S.O.S. Canetas é o
            sistema que garante que você está do lado certo dessas decisões.
          </p>

          <div className="flex flex-col items-center gap-3">
            <Cta variant="terracota-final" to="checkout" dataCta="sos-final">
              SIM, QUERO QUE O MEU RESULTADO FIQUE — R$ 47
            </Cta>
            <p className="font-sans text-[13px] text-marrom">
              Acesso imediato · Garantia de 7 dias · Sem risco
            </p>
          </div>

          {/* P.S. */}
          <div className="bg-sos-creme-soft border-l-4 border-sos-dourado-esc rounded-r-xl p-6 md:p-8 mt-14 md:mt-16 text-left">
            <div className="font-serif italic text-[24px] md:text-[28px] font-medium text-sos-dourado-esc mb-3">
              P.S.
            </div>
            <p className="font-sans text-[15px] md:text-[17px] text-texto leading-[1.7] italic">
              Você chegou até aqui porque o que está em jogo importa de verdade.
              Você sabe que a caneta está funcionando. Você sabe que não quer
              perder isso. E agora sabe que o que você come enquanto usa a
              caneta é o que decide se dessa vez vai ser diferente. Por R$ 47,
              menos de 5% do que você investe por mês na caneta, você garante
              que cada real gasto no tratamento está construindo um resultado
              que não vai voltar.
              <br />
              <br />
              Você não chegou até aqui à toa.
            </p>
          </div>

          <a
            href={CHECKOUT_URL}
            data-cta="sos-ps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 text-sos-dourado-esc font-sans text-[15px] hover:underline"
          >
            Garantir meu acesso agora
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path
                d="M5 12h14M14 7l5 5-5 5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* 7.4 Footer */}
      <footer className="bg-verde-esc text-creme/70 py-10 px-6 text-center">
        <p className="font-sans text-[13px] leading-[1.7]">
          Manual S.O.S. Canetas © 2026 · Michelly Silveira Fanelli
        </p>
        <p className="font-sans text-[13px] mt-1">
          <a href="#" className="hover:text-creme transition-colors">
            Política de Privacidade
          </a>
          {" · "}
          <a href="#" className="hover:text-creme transition-colors">
            Termos de Uso
          </a>
          {" · "}
          <a href="#" className="hover:text-creme transition-colors">
            Contato
          </a>
        </p>
      </footer>
    </>
  );
}
