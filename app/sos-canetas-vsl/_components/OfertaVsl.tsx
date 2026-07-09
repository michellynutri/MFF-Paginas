import { Cta } from "../../sos-canetas-_shared/_components/Cta";
import { CheckoutPSLink } from "../../sos-canetas-_shared/_components/CheckoutPSLink";

type OfertaItem = {
  title: string;
  desc: string;
  value?: string;
  isMain?: boolean;
  isBonus?: boolean;
  icon: React.ReactNode;
};

const itens: OfertaItem[] = [
  {
    title: "Manual S.O.S. Canetas — Sistema Completo",
    desc: "As 7 proteções + o cardápio dia a dia, semana a semana, por 6 semanas. É ele que carrega o resultado inteiro.",
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
    title: "Protocolo 48h de Ouro",
    desc: "Alimentação e hidratação nas 24h antes e depois da aplicação, pra você chegar em cada dose sem enjoo, tontura ou mal-estar.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Kit S.O.S. Intestino",
    desc: "Pra você desinchar, destravar o intestino e voltar a se sentir leve — porque viver estufada não faz parte do plano.",
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
          d="M12 3s6 5 6 10a6 6 0 01-12 0c0-5 6-10 6-10z"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Aula de Ativação com a Michelly",
    desc: "Vídeo com a Michelly: o que esperar, o que é normal, como usar o sistema do jeito certo desde a primeira refeição.",
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
];

const bonus: OfertaItem[] = [
  {
    title: "Bônus — Calculadora de Proteína",
    desc: "Sua meta ajustada automaticamente conforme o seu peso muda, pra quem quer precisão.",
    value: "R$ 97",
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
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path
          d="M8 7h8M8 11h2M12 11h.01M15 11h.01M8 15h2M12 15h.01M15 15h.01"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Bônus — Guia de Substituições Inteligentes",
    desc: "Trocas certas para cada alimento do cardápio. Consulta rápida por grupo alimentar.",
    value: "R$ 49",
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
    title: "Bônus — Lista de Compras Pronta",
    desc: "6 semanas, separadas por categoria, com checklist para marcar no mercado.",
    value: "R$ 25",
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

type Props = { variant: string; checkoutUrl?: string };

function OfertaCard({ item }: { item: OfertaItem }) {
  return (
    <div
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
      {item.isBonus ? (
        <div className="font-sans text-[14px] md:text-[16px] font-medium whitespace-nowrap line-through text-marrom">
          {item.value}
        </div>
      ) : (
        <div className="font-serif italic text-[15px] md:text-[17px] text-sos-dourado-esc whitespace-nowrap">
          Incluso
        </div>
      )}

      {item.isBonus && (
        <span className="absolute -top-2 right-4 bg-sos-dourado text-creme text-[10px] font-sans font-semibold uppercase tracking-[0.1em] px-2 py-1 rounded">
          Grátis hoje
        </span>
      )}
    </div>
  );
}

export function OfertaVsl({ variant, checkoutUrl }: Props) {
  return (
    <>
      {/* 7.1 Zona Oferta */}
      <section
        id="oferta"
        className="bg-creme py-16 md:py-24 px-6 md:px-20 scroll-mt-6 md:scroll-mt-12"
      >
        <div className="max-w-[720px] mx-auto">
          <div className="text-center mb-8">
            <p className="font-sans text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.16em] text-sos-terracota mb-4">
              Apesar de ser suficiente
            </p>
            <h2 className="font-serif text-[28px] md:text-[40px] leading-[1.1] md:leading-[1.05] font-medium text-texto">
              Hoje você recebe{" "}
              <em className="italic">muito mais do que só o Manual</em>
            </h2>
          </div>

          {/* Selo do sistema + intro */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-sos-dourado/40 bg-sos-creme-soft py-2 px-5 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-sos-dourado" />
              <span className="font-sans font-semibold text-[12px] uppercase tracking-[0.16em] text-sos-dourado-esc">
                Sistema S.O.S. Canetas
              </span>
            </div>
            <p className="font-sans text-[16px] md:text-[18px] text-marrom leading-[1.7] max-w-[600px] mx-auto">
              Isso é o passo a passo da consultoria que eu faço no consultório,
              montada num sistema que você aplica com autonomia, em casa, em
              menos de 5 minutos por dia:
            </p>
          </div>

          <div className="space-y-3">
            {itens.map((item, i) => (
              <OfertaCard key={i} item={item} />
            ))}
          </div>

          {/* Âncora de valor — consultoria */}
          <p className="font-sans text-[15px] md:text-[16px] text-texto leading-[1.7] text-center max-w-[600px] mx-auto my-10">
            No meu consultório, montar esse acompanhamento pra quem usa caneta é
            uma consultoria de{" "}
            <strong className="font-semibold">mais de R$ 800/mês</strong>. Aqui,
            você tem o sistema inteiro, sem depender de agenda, sem sair de casa.
          </p>

          {/* Bônus */}
          <div className="text-center mb-6">
            <p className="font-sans text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.16em] text-sos-dourado-esc">
              E pra você que entrar hoje leva também:
            </p>
          </div>

          <div className="space-y-3">
            {bonus.map((item, i) => (
              <OfertaCard key={i} item={item} />
            ))}
          </div>

          {/* Bloco de preço */}
          <div className="text-center my-12">
            <div className="font-sans text-[15px] md:text-[16px] text-marrom">
              O valor real de tudo isso, junto, é <s>R$ 497</s>.
            </div>
            <div className="font-sans text-[16px] md:text-[17px] text-texto mt-2 mb-3">
              Hoje, tudo isso por:
            </div>
            <div className="inline-flex items-baseline text-sos-terracota">
              <span className="font-serif text-[32px] md:text-[36px] font-medium mr-1.5">
                R$
              </span>
              <span className="font-serif text-[64px] md:text-[96px] font-medium leading-none">
                97
              </span>
            </div>
            <div className="font-sans text-[13px] md:text-[14px] text-marrom mt-2">
              À vista ou em até 12x de R$ 9,97
            </div>
          </div>

          <div className="flex flex-col items-center gap-3">
            <Cta
              variant="terracota"
              to="checkout"
              dataCta={`sos-oferta-${variant}`}
              checkoutUrl={checkoutUrl}
            >
              SIM, QUERO O ACESSO COMPLETO
            </Cta>
            <p className="font-sans text-[13px] text-marrom text-center">
              Acesso imediato após o pagamento · Garantia de 7 dias
            </p>
          </div>

          <p className="font-sans text-[15px] md:text-[16px] text-texto leading-[1.7] text-center max-w-[560px] mx-auto mt-10">
            R$ 97 é uma pequena fração de um único mês de caneta. E pode ser a
            diferença entre o peso ir embora de vez — ou voltar tudo quando você
            parar.
          </p>
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
            Teste 7 dias. Se não for para você, você recebe cada centavo de
            volta.
          </h2>

          <div className="font-sans text-[16px] md:text-[17px] text-creme/90 leading-[1.7] space-y-4">
            <p>
              Se nos próximos 7 dias você sentir que não é para você, por
              qualquer motivo, você cancela e recebe seu dinheiro de volta na
              hora. Sem perguntas. Sem burocracia. Sem letra miúda.
            </p>
            <p>
              O risco real é continuar usando a caneta sem saber o que comer. E
              desperdiçar mais um mês de medicação cara sem extrair o resultado
              que ela pode dar.
            </p>
          </div>

          <div className="mt-10 flex justify-center">
            <Cta
              variant="terracota"
              to="checkout"
              dataCta={`sos-garantia-${variant}`}
              checkoutUrl={checkoutUrl}
            >
              QUERO TESTAR SEM RISCO POR 7 DIAS
            </Cta>
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
            o que vai determinar se o peso que está perdendo fica para sempre —
            ou volta tudo quando a caneta parar. O Manual S.O.S. Canetas é o
            sistema que garante que você está do lado certo dessas decisões.
          </p>

          <div className="flex flex-col items-center gap-3">
            <Cta
              variant="terracota-final"
              to="checkout"
              dataCta={`sos-final-${variant}`}
              checkoutUrl={checkoutUrl}
            >
              SIM, QUERO QUE O MEU RESULTADO FIQUE — R$ 97
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
              caneta é o que decide se dessa vez vai ser diferente. Por R$ 97 —
              uma fração do que você investe por mês na caneta — você garante que
              cada real gasto no tratamento está construindo um resultado que não
              vai voltar.
            </p>
          </div>

          <CheckoutPSLink dataCta={`sos-ps-${variant}`} checkoutUrl={checkoutUrl} />
        </div>
      </section>

      {/* 7.4 Footer */}
      <footer className="bg-verde-esc text-creme/70 py-10 px-6 text-center">
        <p className="font-sans text-[13px] leading-[1.7]">
          Copyright © 2026 — Manual S.O.S. Canetas / Michelly Silveira Fanelli.
          Todos os direitos reservados.
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
