import type { Metadata } from "next";
import { HeroVsl } from "./_components/HeroVsl";
import { DoisCaminhos } from "../sos-canetas-vsl-_shared/_components/DoisCaminhos";
import { OQueAcontece } from "../sos-canetas-vsl-_shared/_components/OQueAcontece";
import { OManual } from "../sos-canetas-vsl-_shared/_components/OManual";
import { QuemEMichelly } from "../sos-canetas-vsl-_shared/_components/QuemEMichelly";
import { Prova } from "../sos-canetas-vsl-_shared/_components/Prova";
import { OfertaVsl } from "../sos-canetas-vsl-_shared/_components/OfertaVsl";
import { CHECKOUT_URL_VSL } from "../sos-canetas-_shared/_components/constants";

// Página do link da bio (16/09/2026): cópia da /sos-canetas-vsl-v03 (a VSL
// original) SEM o delay — CTA, oferta e todas as seções aparecem desde o
// primeiro segundo, sem esperar o vídeo chegar aos 10:08. Fica fora do
// sorteio da /sos-canetas-vsl: só recebe quem clica direto nela.
// O checkout recebe ?variante=bio (o Cta lê a variante do pathname).
const VARIANT = "bio";

export const metadata: Metadata = {
  title:
    "Manual S.O.S. Canetas — Assista: como emagrecer mais com a caneta sem aumentar a dose | Michelly Silveira",
  description:
    "Vídeo com a Dra. Michelly Fanelli: o protocolo de nutrição para os primeiros meses de tratamento com canetas GLP-1. Para o resultado ficar mesmo quando a caneta parar.",
  alternates: {
    canonical: "https://michellysilveira.com.br/sos-canetas-bio",
  },
  openGraph: {
    title: "Manual S.O.S. Canetas — Vídeo de vendas",
    description:
      "Existe uma forma de emagrecer mais com a caneta, sem aumentar a dose. Assista e entenda como.",
    url: "https://michellysilveira.com.br/sos-canetas-bio",
    images: ["/images/sos-canetas/og-image.jpg"],
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="bg-creme">
      <HeroVsl variant={VARIANT} />
      {/* Sem delay: tudo abaixo do vídeo já aparece no carregamento. */}
      <DoisCaminhos variant={VARIANT} />
      <OQueAcontece variant={VARIANT} />
      <OManual variant={VARIANT} />
      <QuemEMichelly variant={VARIANT} />
      <Prova variant={VARIANT} />
      <OfertaVsl variant={VARIANT} checkoutUrl={CHECKOUT_URL_VSL} />
    </main>
  );
}
