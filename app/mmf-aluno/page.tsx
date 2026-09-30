import type { Metadata } from "next";
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

// Página para alunas (30/09/2026): cópia idêntica da /mmf-bio (que copia a
// /mmf-vsl) SEM o delay — CTA, oferta e todas as seções aparecem desde o
// primeiro segundo. Headline fixa (h1), fora do sorteio do middleware: só
// recebe quem clica direto nela. O checkout recebe ?variante=mmf-aluno, pra
// separar na Greenn o que vem por este link.
const VARIANTE = "mmf-aluno";

export const metadata: Metadata = {
  title: "Método Metabólico Feminino — Assista ao vídeo | Michelly Silveira",
  description:
    "O que fazer em cada fase do tratamento com a caneta para não recuperar o peso quando parar. Com a nutricionista Michelly Silveira.",
  alternates: {
    canonical: "https://www.metodometabolicofeminino.com.br/mmf-aluno",
  },
  openGraph: {
    title: "Método Metabólico Feminino — Vídeo",
    description:
      "O que ninguém te explicou pra fazer enquanto a caneta ainda está agindo.",
    url: "https://www.metodometabolicofeminino.com.br/mmf-aluno",
    images: ["/images/sos-canetas/og-image.jpg"],
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="bg-creme">
      <HeroVsl headlineId="h1" variante={VARIANTE} pitchSeconds={0} />
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
