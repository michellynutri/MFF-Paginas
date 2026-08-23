import type { Metadata } from "next";
import { fraunces } from "../canetas-do-jeito-certo-_shared/_components/fonts";
import { proximaSessao } from "../canetas-do-jeito-certo-_shared/_components/sessao";
import { Rodape } from "../canetas-do-jeito-certo-_shared/_components/Rodape";
import { BarraFixa } from "../canetas-do-jeito-certo-_shared/_components/BarraFixa";
import { PRECO_DE } from "./_components/stack";
import { Hero } from "./_components/Hero";
import { Identificacao } from "./_components/Identificacao";
import { Revelacao } from "./_components/Revelacao";
import { Proposta } from "./_components/Proposta";
import { Fases } from "./_components/Fases";
import { Origem } from "./_components/Origem";
import { Prova } from "./_components/Prova";
import { Oferta } from "./_components/Oferta";
import { ProvaOferta } from "./_components/ProvaOferta";
import { Garantia } from "./_components/Garantia";
import { Fechamento } from "./_components/Fechamento";
import { Faq } from "./_components/Faq";

// Variante B do teste A/B — a copy v2. O que ela testa contra a A:
//
//  1. Entrada por desejo. A A abre pela perda ("dois resultados diferentes
//     quando para a caneta"); a B abre validando a decisão já tomada e só
//     apresenta o problema na seção seguinte.
//  2. Mecanismo em um bloco, não três. Saem a Bifurcacao e as Consequencias
//     (cinco itens de consequência); entra uma Revelacao só, com o dado dos
//     70% como insight em vez de ameaça.
//  3. Âncora nova. O stack sobe de R$ 163 para R$ 358 e ganha a "conta que
//     realmente importa": o R$ 27 comparado ao que ela já gasta por mês na
//     caneta, e não à soma dos itens.
//  4. Objeções cobertas. Entram uma seção de garantia com a regra escrita e
//     uma FAQ de cinco perguntas antes do checkout.
//
// São quatro mudanças de uma vez: se a B ganhar, o teste diz que a estrutura
// nova é melhor, não qual das quatro fez o trabalho. Isolar vem depois — as
// headlines alternativas já estão guardadas no Hero pra rodada 2.
export const revalidate = 60;

export const metadata: Metadata = {
  title:
    "Canetas do Jeito Certo — Sessão ao vivo com Michelly Silveira | Ingresso R$ 27",
  description:
    "Você já paga caro pela sua caneta. Numa sessão ao vivo, aprenda a extrair o máximo dela e a manter o resultado quando ela sair.",
  // Canonical na rota pública, e não nesta: as duas variantes mostram a mesma
  // oferta, e é a /canetas-do-jeito-certo que é divulgada.
  alternates: {
    canonical: "https://michellysilveira.com.br/canetas-do-jeito-certo",
  },
  openGraph: {
    title: "Canetas do Jeito Certo",
    description:
      "Você já paga caro pela sua caneta. Aprenda a extrair o máximo dela.",
    url: "https://michellysilveira.com.br/canetas-do-jeito-certo",
    type: "website",
  },
};

export default function Page() {
  const sessao = proximaSessao();

  return (
    <main
      className={`${fraunces.variable} bg-cjc-noite text-cjc-texto min-h-screen`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            name: "Canetas do Jeito Certo",
            startDate: sessao.alvoISO,
            eventAttendanceMode:
              "https://schema.org/OnlineEventAttendanceMode",
            eventStatus: "https://schema.org/EventScheduled",
            organizer: {
              "@type": "Person",
              name: "Michelly Silveira Fanelli",
              jobTitle: "Nutricionista Clínica",
            },
            location: {
              "@type": "VirtualLocation",
              url: "https://michellysilveira.com.br/canetas-do-jeito-certo",
            },
            offers: {
              "@type": "Offer",
              price: "27",
              priceCurrency: "BRL",
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />

      <Hero sessao={sessao} />
      <Identificacao />
      <Revelacao />
      <Proposta sessao={sessao} />
      <Fases />
      <Origem />
      <Prova />
      <Oferta sessao={sessao} />
      <ProvaOferta />
      <Garantia />
      <Fechamento sessao={sessao} />
      <Faq />
      <Rodape />
      <BarraFixa precoDe={PRECO_DE} />
    </main>
  );
}
