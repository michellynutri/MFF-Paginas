import type { Metadata } from "next";
import { fraunces } from "./_components/fonts";
import { proximaSessao } from "./_components/sessao";
import { Hero } from "./_components/Hero";
import { Bifurcacao } from "./_components/Bifurcacao";
import { Mecanismo } from "./_components/Mecanismo";
import { Consequencias } from "./_components/Consequencias";
import { Fases } from "./_components/Fases";
import { ASessao } from "./_components/ASessao";
import { TresPassos } from "./_components/TresPassos";
import { Origem } from "./_components/Origem";
import { Prova } from "./_components/Prova";
import { ProvaOferta } from "./_components/ProvaOferta";
import { Oferta } from "./_components/Oferta";
import { Fechamento } from "./_components/Fechamento";
import { Rodape } from "./_components/Rodape";
import { BarraFixa } from "./_components/BarraFixa";

// A página mostra a data da próxima sessão, que vira toda quinta às 20h, então
// o HTML não pode congelar na data do build. ISR de 60 s resolve isso sem abrir
// mão do cache: com force-dynamic a resposta vinha `no-store` e todo acesso ia
// até iad1 (x-vercel-cache: MISS, ~390 ms de TTFB). Agora sai do edge de São
// Paulo. A data erra no máximo 1 minuto na virada da semana, e o cronômetro se
// corrige sozinho no primeiro tick do cliente.
export const revalidate = 60;

export const metadata: Metadata = {
  title:
    "Canetas do Jeito Certo — Sessão ao vivo com Michelly Silveira | Ingresso R$ 27",
  description:
    "Sessão ao vivo para mulheres que usam canetas GLP-1: o plano completo do início ao desmame, para o resultado continuar seu depois que a medicação sair da rotina.",
  alternates: {
    canonical: "https://michellysilveira.com.br/canetas-do-jeito-certo",
  },
  openGraph: {
    title: "Canetas do Jeito Certo",
    description:
      "Te ensinaram a começar a caneta, mas ninguém te ensinou a sair dela.",
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
      <Bifurcacao />
      <Mecanismo />
      <Consequencias />
      <Fases />
      <ASessao sessao={sessao} />
      <TresPassos />
      <Origem />
      <Prova />
      <Oferta sessao={sessao} />
      <ProvaOferta />
      <Fechamento sessao={sessao} />
      <Rodape />
      <BarraFixa />
    </main>
  );
}
