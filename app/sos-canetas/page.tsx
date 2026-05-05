import type { Metadata } from "next";
import { Hero } from "./_components/Hero";
import { DoisCaminhos } from "./_components/DoisCaminhos";
import { OQueAcontece } from "./_components/OQueAcontece";
import { OManual } from "./_components/OManual";
import { QuemEMichelly } from "./_components/QuemEMichelly";
import { Prova } from "./_components/Prova";
import { Oferta } from "./_components/Oferta";

export const metadata: Metadata = {
  title:
    "Manual S.O.S. Canetas — Nutrição para os primeiros meses de Ozempic e Mounjaro | Michelly Silveira",
  description:
    "Sistema de 7 proteções nutricionais para mulheres nos primeiros meses de tratamento com canetas GLP-1. Para o resultado ficar mesmo quando a caneta parar.",
  openGraph: {
    title: "Manual S.O.S. Canetas",
    description: "O que falta para sua caneta funcionar de verdade.",
    images: ["/images/sos-canetas/og-image.jpg"],
    type: "website",
  },
};

export default function SosCanetasPage() {
  return (
    <main className="bg-creme">
      <Hero />
      <DoisCaminhos />
      <OQueAcontece />
      <OManual />
      <QuemEMichelly />
      <Prova />
      <Oferta />
    </main>
  );
}
