import type { Metadata } from "next";
import { fraunces } from "../canetas-do-jeito-certo-_shared/_components/fonts";
import { proximaSessao } from "../canetas-do-jeito-certo-_shared/_components/sessao";
import { Rodape } from "../canetas-do-jeito-certo-_shared/_components/Rodape";
import { BarraFixa } from "../canetas-do-jeito-certo-_shared/_components/BarraFixa";
import { PRECO_DE } from "./_components/stack";
import { Hero } from "./_components/Hero";
import { Geladeira } from "./_components/Geladeira";
import { FomeRoubada } from "./_components/FomeRoubada";
import { PlanoBlindagem } from "./_components/PlanoBlindagem";
import { Curriculo } from "./_components/Curriculo";
import { Autoridade } from "./_components/Autoridade";
import { Objecoes } from "./_components/Objecoes";
import { Qualificacao } from "./_components/Qualificacao";
import { AConta } from "./_components/AConta";
import { Oferta } from "./_components/Oferta";
import { Garantia } from "./_components/Garantia";
import { PorQue27 } from "./_components/PorQue27";
import { Faq } from "./_components/Faq";
import { Fechamento } from "./_components/Fechamento";

// Variante D do teste — a copy v5, no eixo prático, em fundo branco.
//
// O QUE ESTA VARIANTE TESTA
//
// As A, B e C vendem um DIAGNÓSTICO: todas abrem explicando o que a caneta faz
// com o corpo por dentro, e a compra é a consequência de a pessoa aceitar o
// mecanismo. A D vende um ENTREGÁVEL: abre dizendo o que a pessoa sai tendo na
// mão em 2 horas, e o mecanismo entra depois, só o suficiente pra justificar
// por que o entregável importa.
//
// A hipótese, do gestor: este público não compra explicação, compra solução
// prática. É isso, e só isso, que o resultado desta página responde.
//
// O QUE MUDOU EM RELAÇÃO À C (que é a comparação natural — mesma paleta)
//
//  1. A PROMESSA. "Eu monto o plano completo de alimentação com você" no lugar
//     de "a caneta esconde a sua fome e o seu corpo se desmonta".
//  2. A DOR. A cena da geladeira aberta às 12h30, concreta e cotidiana, no
//     lugar do desmonte metabólico invisível.
//  3. O CENTRO DE GRAVIDADE. O currículo (seção 4, seis módulos) é o coração
//     da página, e ganha o maior peso visual dela. Na C, o centro são os cinco
//     erros — que ensinam o QUÊ e param antes do COMO. Aqui é o oposto: a
//     página entrega o COMO como argumento de venda.
//  4. O STACK. Saíram o "Mapa das 4 Fases" e o "Protocolo de Blindagem" (que
//     são slides da apresentação, não material entregue); entraram a Régua de
//     Cálculo e o Guia do Prato, que o workshop de fato produz. Âncora igual,
//     R$ 358 — ver o stack.ts.
//  5. O TAMANHO. 14 seções contra 17. As que saíram são todas de argumento
//     (a analogia da cirurgia, os cinco erros, o mural de prova longo).
//
// A página segue a copy v5 ao pé da letra: nenhuma seção a mais, nenhuma a
// menos. Chegou a existir aqui um bloco de depoimentos encostado no preço,
// que não vinha da copy — foi removido a pedido do Vinícius. A prova desta
// variante mora toda no ponto que a copy marca, na seção 3. Se a ideia de
// pôr prova antes da oferta voltar, ela precisa entrar na copy primeiro.
//
// COMPLIANCE — ler antes de editar qualquer texto desta página
//
// Toda a régua está escrita como "você vai aprender a calcular / a montar",
// nunca como "você recebe a sua dieta personalizada". A diferença separa
// conteúdo educativo de prescrição nutricional individualizada. Vale aqui, nos
// e-mails e nos anúncios — se um deles prometer dieta personalizada, a página
// inteira passa a responder por isso.
export const revalidate = 60;

export const metadata: Metadata = {
  title:
    "Canetas do Jeito Certo — Workshop ao vivo com Michelly Silveira | Ingresso R$ 27",
  description:
    "Em 2 horas ao vivo, você aprende a montar a sua alimentação do zero: o que comer, quanto comer e quais os melhores alimentos enquanto usa a caneta.",
  // Canonical na rota pública, e não nesta: as variantes mostram a mesma
  // oferta, e é a /canetas-do-jeito-certo que é divulgada.
  alternates: {
    canonical:
      "https://metodometabolicofeminino.com.br/canetas-do-jeito-certo",
  },
  openGraph: {
    title: "Canetas do Jeito Certo — Workshop ao vivo",
    description:
      "O que comer, quanto comer e quais os melhores alimentos enquanto usa a caneta. Do zero, mão na massa.",
    url: "https://metodometabolicofeminino.com.br/canetas-do-jeito-certo",
    type: "website",
  },
};

export default function Page() {
  const sessao = proximaSessao();

  return (
    <main
      className={`${fraunces.variable} bg-cjc-dia text-cjc-dia-texto min-h-screen`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            name: "Workshop Canetas do Jeito Certo",
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
              url: "https://metodometabolicofeminino.com.br/canetas-do-jeito-certo",
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
      <Geladeira />
      <FomeRoubada />
      <PlanoBlindagem />
      <Curriculo />
      <Autoridade />
      <Objecoes />
      <Qualificacao />
      <AConta />
      <Oferta sessao={sessao} />
      <Garantia />
      <PorQue27 />
      <Faq />
      <Fechamento sessao={sessao} />
      <Rodape tema="branco" tipo="workshop" />
      <BarraFixa precoDe={PRECO_DE} tema="dia" />
    </main>
  );
}
