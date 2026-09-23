import type { Metadata } from "next";
import { HeroVsl, type HeadlineId } from "./_components/HeroVsl";
import {
  AberturaOferta,
  Autoridade,
  Bonus,
  DoisCaminhos,
  Faq,
  Garantia,
  Jornada,
  Oferta,
  ProvaPrints,
  ProvaVideos,
} from "./_components/Secoes";

// Funil de VSL vendendo o MMF direto (23/09/2026). Copy do Vinícius.
// Teste de headline por parâmetro: /mmf-vsl (h1, padrão), ?h=2, ?h=3.
// A variante vai pro checkout como ?variante=mmf-vsl-h1|h2|h3.

export const metadata: Metadata = {
  title: "Método Metabólico Feminino — Assista ao vídeo | Michelly Silveira",
  description:
    "O que fazer em cada fase do tratamento com a caneta para não recuperar o peso quando parar. Com a nutricionista Michelly Silveira.",
  alternates: {
    canonical: "https://www.metodometabolicofeminino.com.br/mmf-vsl",
  },
  openGraph: {
    title: "Método Metabólico Feminino — Vídeo",
    description:
      "O que ninguém te explicou pra fazer enquanto a caneta ainda está agindo.",
    url: "https://www.metodometabolicofeminino.com.br/mmf-vsl",
    images: ["/images/sos-canetas/og-image.jpg"],
    type: "website",
  },
};

function headlineDaUrl(h: string | string[] | undefined): HeadlineId {
  const valor = Array.isArray(h) ? h[0] : h;
  if (valor === "2") return "h2";
  if (valor === "3") return "h3";
  return "h1";
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const headlineId = headlineDaUrl((await searchParams).h);
  const variante = `mmf-vsl-${headlineId}`;

  return (
    <main className="bg-creme">
      <HeroVsl headlineId={headlineId} variante={variante} />
      {/* Tudo abaixo do vídeo só aparece no minuto do preço (ver HeroVsl). */}
      <div className="vsl-oculto">
        <AberturaOferta />
        <Jornada variante={variante} />
        <ProvaPrints />
        <Autoridade variante={variante} />
        <Bonus />
        <ProvaVideos variante={variante} />
        <Oferta variante={variante} />
        <Garantia />
        <DoisCaminhos variante={variante} />
        <Faq variante={variante} />
      </div>
    </main>
  );
}
