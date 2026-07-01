import type { Metadata } from "next";
import { HeroVsl } from "./_components/HeroVsl";
import { DoisCaminhos } from "./_components/DoisCaminhos";
import { OQueAcontece } from "./_components/OQueAcontece";
import { OManual } from "./_components/OManual";
import { QuemEMichelly } from "./_components/QuemEMichelly";
import { Prova } from "./_components/Prova";
import { OfertaVsl } from "./_components/OfertaVsl";
import { CHECKOUT_URL_VSL } from "../sos-canetas-_shared/_components/constants";

const VARIANT = "vsl";

export const metadata: Metadata = {
  title:
    "Manual S.O.S. Canetas — Assista: como emagrecer mais com a caneta sem aumentar a dose | Michelly Silveira",
  description:
    "Vídeo com a Dra. Michelly Fanelli: o protocolo de nutrição para os primeiros meses de tratamento com canetas GLP-1. Para o resultado ficar mesmo quando a caneta parar.",
  alternates: {
    canonical: "https://michellysilveira.com.br/sos-canetas-vsl",
  },
  openGraph: {
    title: "Manual S.O.S. Canetas — Vídeo de vendas",
    description:
      "Existe uma forma de emagrecer mais com a caneta, sem aumentar a dose. Assista e entenda como.",
    url: "https://michellysilveira.com.br/sos-canetas-vsl",
    images: ["/images/sos-canetas/og-image.jpg"],
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="bg-creme">
      <HeroVsl variant={VARIANT} />
      <DoisCaminhos variant={VARIANT} />
      <OQueAcontece variant={VARIANT} />
      <OManual variant={VARIANT} />
      <QuemEMichelly variant={VARIANT} />
      <Prova variant={VARIANT} />
      <OfertaVsl variant={VARIANT} checkoutUrl={CHECKOUT_URL_VSL} />
    </main>
  );
}
