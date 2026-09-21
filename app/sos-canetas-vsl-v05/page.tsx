import type { Metadata } from "next";
import { HeroVsl } from "./_components/HeroVsl";
import { BonusRelampago } from "./_components/BonusRelampago";
import { DoisCaminhos } from "../sos-canetas-vsl-_shared/_components/DoisCaminhos";
import { OQueAcontece } from "../sos-canetas-vsl-_shared/_components/OQueAcontece";
import { OManual } from "../sos-canetas-vsl-_shared/_components/OManual";
import { QuemEMichelly } from "../sos-canetas-vsl-_shared/_components/QuemEMichelly";
import { Prova } from "../sos-canetas-vsl-_shared/_components/Prova";
import {
  OfertaVsl,
  type AncoragemVsl,
  type PrecoVsl,
} from "../sos-canetas-vsl-_shared/_components/OfertaVsl";
import { CHECKOUT_URL_VSL_197 } from "../sos-canetas-_shared/_components/constants";

// v05 (21/09/2026): cópia fiel da v03 (o controle) com três mudanças —
// preço R$ 197 (12x R$ 20,25), checkout da oferta SsCtlg e VSL nova no Vturb.
// Fora do sorteio da /sos-canetas-vsl: recebe tráfego só por link direto.
const VARIANT = "vsl-v05";
const PRECO: PrecoVsl = { valor: "197", parcelas: "12x de R$ 20,25" };
// Escada de valor da v05: os dois guias grandes (Calculadora e Suplementação)
// valem o preço da oferta; o "valor real" mantém a proporção da v03 (~80% de
// desconto: 497 → 97 lá, 997 → 197 aqui).
const ANCORAGEM: AncoragemVsl = {
  calculadora: "R$ 197",
  substituicoes: "R$ 97",
  lista: "R$ 49",
  valorReal: "R$ 997",
};
const VALOR_BONUS_RELAMPAGO = "R$ 197";

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
      <HeroVsl variant={VARIANT} checkoutUrl={CHECKOUT_URL_VSL_197} />
      {/* Tudo abaixo do vídeo só aparece após o vídeo atingir 9:14 (554s).
          O player revela via displayHiddenElements (ver HeroVsl). */}
      <div className="vsl-oculto">
        <DoisCaminhos variant={VARIANT} checkoutUrl={CHECKOUT_URL_VSL_197} />
        <OQueAcontece variant={VARIANT} checkoutUrl={CHECKOUT_URL_VSL_197} />
        <OManual variant={VARIANT} checkoutUrl={CHECKOUT_URL_VSL_197} />
        <QuemEMichelly variant={VARIANT} checkoutUrl={CHECKOUT_URL_VSL_197} />
        <Prova variant={VARIANT} checkoutUrl={CHECKOUT_URL_VSL_197} />
        <OfertaVsl
          variant={VARIANT}
          checkoutUrl={CHECKOUT_URL_VSL_197}
          preco={PRECO}
          ancoragem={ANCORAGEM}
          bonusExtra={<BonusRelampago valor={VALOR_BONUS_RELAMPAGO} />}
        />
      </div>
    </main>
  );
}
