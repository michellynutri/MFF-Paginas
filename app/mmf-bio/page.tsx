import type { Metadata } from "next";
import { VTURB_VIDEO_BIO } from "../mmf-vsl/_components/constants";
import { HeroVsl } from "../mmf-vsl/_components/HeroVsl";
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
} from "../mmf-vsl/_components/Secoes";

// Página do link da bio (30/09/2026): cópia da /mmf-vsl SEM o delay — CTA,
// oferta e todas as seções aparecem desde o primeiro segundo, sem esperar o
// vídeo chegar no minuto do preço. Headline fixa (h1), fora do sorteio do
// middleware: só recebe quem clica direto nela. Mesma ideia da
// /sos-canetas-bio. O checkout recebe ?variante=mmf-bio.
// Desde 02/10/2026 roda outro vídeo (VTURB_VIDEO_BIO, 3:4), não a VSL 9:16.
const VARIANTE = "mmf-bio";

export const metadata: Metadata = {
  title: "Método Metabólico Feminino — Assista ao vídeo | Michelly Silveira",
  description:
    "O que fazer em cada fase do tratamento com a caneta para não recuperar o peso quando parar. Com a nutricionista Michelly Silveira.",
  alternates: {
    canonical: "https://www.metodometabolicofeminino.com.br/mmf-bio",
  },
  openGraph: {
    title: "Método Metabólico Feminino — Vídeo",
    description:
      "O que ninguém te explicou pra fazer enquanto a caneta ainda está agindo.",
    url: "https://www.metodometabolicofeminino.com.br/mmf-bio",
    images: ["/images/sos-canetas/og-image.jpg"],
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="bg-creme">
      <HeroVsl headlineId="h1" variante={VARIANTE} pitchSeconds={0} video={VTURB_VIDEO_BIO} />
      {/* Sem delay: tudo abaixo do vídeo já aparece no carregamento. */}
      <AberturaOferta />
      <Jornada variante={VARIANTE} />
      <ProvaPrints />
      <Autoridade variante={VARIANTE} />
      <Bonus />
      <ProvaVideos variante={VARIANTE} />
      <Oferta variante={VARIANTE} />
      <Garantia />
      <DoisCaminhos variante={VARIANTE} />
      <Faq variante={VARIANTE} />
    </main>
  );
}
