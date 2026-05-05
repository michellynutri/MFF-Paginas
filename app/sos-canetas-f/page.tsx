import type { Metadata } from "next";
import { Hero } from "../sos-canetas-_shared/_components/Hero";
import { DoisCaminhos } from "../sos-canetas-_shared/_components/DoisCaminhos";
import { OQueAcontece } from "../sos-canetas-_shared/_components/OQueAcontece";
import { OManual } from "../sos-canetas-_shared/_components/OManual";
import { QuemEMichelly } from "../sos-canetas-_shared/_components/QuemEMichelly";
import { Prova } from "../sos-canetas-_shared/_components/Prova";
import { Oferta } from "../sos-canetas-_shared/_components/Oferta";

const VARIANT = "f";

export const metadata: Metadata = {
  title:
    "Manual S.O.S. Canetas — Nutrição para os primeiros meses de Ozempic e Mounjaro | Michelly Silveira",
  description:
    "Sistema de 7 proteções nutricionais para mulheres nos primeiros meses de tratamento com canetas GLP-1. Para o resultado ficar mesmo quando a caneta parar.",
  alternates: {
    canonical: "https://michellysilveira.com.br/sos-canetas",
  },
  openGraph: {
    title: "Manual S.O.S. Canetas",
    description: "O que falta para sua caneta funcionar de verdade.",
    url: "https://michellysilveira.com.br/sos-canetas",
    images: ["/images/sos-canetas/og-image.jpg"],
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="bg-creme">
      <Hero
        variant={VARIANT}
        headline="Existe uma forma de emagrecer mais com as canetas — sem aumentar a dose, sem mudar sua rotina."
        subhead="O protocolo que a maioria das mulheres que usam GLP-1 ainda não conhecem (e que faz toda a diferença no resultado final)."
      />
      <DoisCaminhos variant={VARIANT} />
      <OQueAcontece variant={VARIANT} />
      <OManual variant={VARIANT} />
      <QuemEMichelly variant={VARIANT} />
      <Prova variant={VARIANT} />
      <Oferta variant={VARIANT} />
    </main>
  );
}
