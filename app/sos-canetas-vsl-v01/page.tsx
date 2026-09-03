import type { Metadata } from "next";
import { HeroVsl } from "./_components/HeroVsl";
import { DoisCaminhos } from "../sos-canetas-vsl-_shared/_components/DoisCaminhos";
import { OQueAcontece } from "../sos-canetas-vsl-_shared/_components/OQueAcontece";
import { OManual } from "../sos-canetas-vsl-_shared/_components/OManual";
import { QuemEMichelly } from "../sos-canetas-vsl-_shared/_components/QuemEMichelly";
import { Prova } from "../sos-canetas-vsl-_shared/_components/Prova";
import { OfertaVsl } from "../sos-canetas-vsl-_shared/_components/OfertaVsl";
import { CHECKOUT_URL_VSL } from "../sos-canetas-_shared/_components/constants";

// Voltou ao sorteio em 03/09/2026 (rodada 8) com copy e formato novos:
// "alerta/revelação" em formato editorial, sans bold alinhado à esquerda.
// Tinha recebido 100% do tráfego por algumas horas na rodada 6 (27/08/2026) e
// saído na rodada 7, no mesmo dia.
const VARIANT = "vsl-v01";

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
      {/* Tudo abaixo do vídeo só aparece após o vídeo atingir 10:08 (608s).
          O player revela via displayHiddenElements (ver HeroVsl). */}
      <div className="vsl-oculto">
        <DoisCaminhos variant={VARIANT} />
        <OQueAcontece variant={VARIANT} />
        <OManual variant={VARIANT} />
        <QuemEMichelly variant={VARIANT} />
        <Prova variant={VARIANT} />
        <OfertaVsl variant={VARIANT} checkoutUrl={CHECKOUT_URL_VSL} />
      </div>
    </main>
  );
}
