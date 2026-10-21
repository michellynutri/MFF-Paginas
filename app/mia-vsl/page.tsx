import type { Metadata } from "next";
import { FaixaSaiDoAr } from "./_components/FaixaSaiDoAr";
import { PlayerMia } from "./_components/PlayerMia";

// Página de vendas do MIA (21/10/2026), no modelo da página da Thaize Tavares:
// faixa "ESTE VÍDEO SAI DO AR HOJE, dd/mm" + VSL. Sem headline, sem seções,
// sem botão na página — o botão é o da Vturb, dentro do vídeo. Estática.

export const metadata: Metadata = {
  title: "Assista ao vídeo | Michelly Silveira",
  description:
    "Assista ao vídeo da nutricionista Michelly Silveira antes que saia do ar.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "https://www.metodometabolicofeminino.com.br/mia-vsl",
  },
  openGraph: {
    title: "Assista ao vídeo | Michelly Silveira",
    description: "Este vídeo sai do ar hoje.",
    url: "https://www.metodometabolicofeminino.com.br/mia-vsl",
    images: ["/images/sos-canetas/og-image.jpg"],
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="min-h-[100svh] bg-[#F9F9F9] text-texto">
      <FaixaSaiDoAr />
      <PlayerMia />
    </main>
  );
}
