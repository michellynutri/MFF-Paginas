import type { Metadata } from "next";
import { FaixaSaiDoAr } from "../mia-vsl/_components/FaixaSaiDoAr";
import { PlayerMia } from "../mia-vsl/_components/PlayerMia";

// Link da bio (29/10/2026): cópia da /mia-vsl — mesma faixa "sai do ar hoje"
// e mesmo player da Vturb. Quem chega sem UTM ganha instagram/bio/mia no
// middleware; o checkout recebe ?variante=mia-bio.
const VARIANTE = "mia-bio";

export const metadata: Metadata = {
  title: "Assista ao vídeo | Michelly Silveira",
  description:
    "Assista ao vídeo da nutricionista Michelly Silveira antes que saia do ar.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "https://www.metodometabolicofeminino.com.br/bio",
  },
  openGraph: {
    title: "Assista ao vídeo | Michelly Silveira",
    description: "Este vídeo sai do ar hoje.",
    url: "https://www.metodometabolicofeminino.com.br/bio",
    images: ["/images/sos-canetas/og-image.jpg"],
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="min-h-[100svh] bg-[#F9F9F9] text-texto">
      <FaixaSaiDoAr />
      <PlayerMia variante={VARIANTE} />
    </main>
  );
}
