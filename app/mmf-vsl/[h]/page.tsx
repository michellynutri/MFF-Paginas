import type { Metadata } from "next";
import { VTURB_AB_MMF_VSL } from "../_components/constants";
import { HeroVsl, type HeadlineId } from "../_components/HeroVsl";
import { stixHero } from "../_components/fonts";
import { POSTER_VSL_DATA_URI } from "../_components/poster";
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
} from "../_components/Secoes";

// Funil de VSL vendendo o MMF direto (23/09/2026). Copy do Vinícius.
// Teste de headline por parâmetro: ?h=1|2|3 (sem ?h=, h1). O link divulgado
// é /mmf-vsl: o middleware sorteia a headline (ou devolve a do cookie) e
// redireciona com ?h=N&variante=mmf-vsl-hN — ver MMF_VSL_HEADLINES.
// A variante vai pro checkout como ?variante=mmf-vsl-h1|h2|h3.
//
// Desde 03/10/2026 a página é ESTÁTICA: três HTMLs pré-renderizados em
// /mmf-vsl/h1|h2|h3, e o middleware reescreve /mmf-vsl?h=N pra cá sem mudar a
// URL que a pessoa vê (window.location continua /mmf-vsl?h=N&variante=…, que
// é de onde os botões e o pixel leem). Antes ela lia searchParams e era
// dinâmica — e em rota dinâmica o Next 16 descarta o preload das fontes e os
// preconnects, além de renderizar a cada visita. Acessar /mmf-vsl/hN direto
// redireciona pra URL pública (middleware).

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

const HEADLINE_IDS: readonly HeadlineId[] = ["h1", "h2", "h3"];

// Só os três segmentos abaixo existem; qualquer outro /mmf-vsl/x é 404.
export const dynamicParams = false;
export function generateStaticParams() {
  return HEADLINE_IDS.map((h) => ({ h }));
}

export default async function Page({ params }: { params: Promise<{ h: string }> }) {
  const { h } = await params;
  const headlineId: HeadlineId = (HEADLINE_IDS as readonly string[]).includes(h) ? (h as HeadlineId) : "h1";
  const variante = `mmf-vsl-${headlineId}`;

  return (
    <main className={`bg-creme ${stixHero.variable}`}>
      {/* Desde 02/10/2026 o vídeo vem do teste A/B da Vturb (6 leads). */}
      <HeroVsl
        headlineId={headlineId}
        variante={variante}
        video={VTURB_AB_MMF_VSL}
        poster={POSTER_VSL_DATA_URI}
      />
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
