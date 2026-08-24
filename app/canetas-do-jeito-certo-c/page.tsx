import type { Metadata } from "next";
import { fraunces } from "../canetas-do-jeito-certo-_shared/_components/fonts";
import { proximaSessao } from "../canetas-do-jeito-certo-_shared/_components/sessao";
import { Rodape } from "../canetas-do-jeito-certo-_shared/_components/Rodape";
import { BarraFixa } from "../canetas-do-jeito-certo-_shared/_components/BarraFixa";
import { PRECO_DE } from "./_components/stack";
import { Hero } from "./_components/Hero";
import { MomentoCaro } from "./_components/MomentoCaro";
import { FomeEmprestada } from "./_components/FomeEmprestada";
import { Blindagem } from "./_components/Blindagem";
import { Categoria } from "./_components/Categoria";
import { CincoErros } from "./_components/CincoErros";
import { Origem } from "./_components/Origem";
import { ProvaPeso } from "./_components/ProvaPeso";
import { Objecoes } from "./_components/Objecoes";
import { AConta } from "./_components/AConta";
import { Qualificacao } from "./_components/Qualificacao";
import { DentroDaSessao } from "./_components/DentroDaSessao";
import { MuralProva } from "./_components/MuralProva";
import { Oferta } from "./_components/Oferta";
import { PorQue27 } from "./_components/PorQue27";
import { Faq } from "./_components/Faq";
import { Fechamento } from "./_components/Fechamento";

// Variante C do teste — a copy v4, em fundo branco.
//
// Duas coisas mudam de uma vez em relação às outras duas variantes, e vale
// saber disso na hora de ler o resultado:
//
//  1. A ARQUITETURA. A A e a B são páginas de oferta; a C segue uma sequência
//     de venda longa, na ordem: cena de dor → nomeia o vilão (a "Fome
//     Emprestada") e tira a culpa da leitora → mecanismo-solução com prova
//     logo em seguida → eleva a categoria → os 5 erros (que ensinam o QUÊ e
//     param antes do COMO) → autoridade → prova → duas objeções viram seções
//     inteiras → justificativa lógica → qualificação com takeaway → o que ela
//     leva → mural de prova → stack → por que é barato → FAQ → fechamento
//     binário. São 17 seções contra 12 da B.
//
//  2. A PALETA. Fundo branco de ponta a ponta, com os tokens `cjc-dia-*` do
//     globals.css: a mesma identidade (Fraunces no display, a família verde no
//     acento, âmbar e argila nos alertas), virada para o claro. Não é a paleta
//     noturna clareada — sobre branco, a menta #7FE3A8 tem 1,7:1 de contraste
//     e sumiria; os acentos desceram até passar em AA.
//
// Como as duas mudam juntas, um resultado desta variante diz "esta página
// converte mais/menos", não "foi a estrutura" nem "foi a cor".
export const revalidate = 60;

export const metadata: Metadata = {
  title:
    "Canetas do Jeito Certo — Sessão ao vivo com Michelly Silveira | Ingresso R$ 27",
  description:
    "Quanto mais rápido a caneta esconde a sua fome, mais o seu corpo se desmonta por dentro. Sessão ao vivo: como blindar o corpo enquanto a caneta age.",
  // Canonical na rota pública, e não nesta: as três variantes mostram a mesma
  // oferta, e é a /canetas-do-jeito-certo que é divulgada.
  alternates: {
    canonical: "https://michellysilveira.com.br/canetas-do-jeito-certo",
  },
  openGraph: {
    title: "Canetas do Jeito Certo",
    description:
      "Emagrecer gordura, e não saúde — e sair do tratamento com o resultado ainda seu.",
    url: "https://michellysilveira.com.br/canetas-do-jeito-certo",
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
      <MomentoCaro />
      <FomeEmprestada />
      <Blindagem />
      <Categoria />
      <CincoErros />
      <Origem />
      <ProvaPeso />
      <Objecoes />
      <AConta />
      <Qualificacao />
      <DentroDaSessao sessao={sessao} />
      <MuralProva />
      <Oferta sessao={sessao} />
      <PorQue27 />
      <Faq />
      <Fechamento sessao={sessao} />
      <Rodape tema="branco" />
      <BarraFixa precoDe={PRECO_DE} tema="dia" />
    </main>
  );
}
