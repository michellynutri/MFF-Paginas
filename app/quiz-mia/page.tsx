import type { Metadata } from "next";
import "./_quiz/base.css";
import "./_telas/telas.css";
import { Raiz } from "./_quiz/Raiz";

// Quiz de vendas da MIA (25/11/2026): 30 telas desenhadas no Google Stitch e convertidas uma a uma
// (scripts/quiz-mia/LEIA-ME.md). Estática; o estado fica no navegador.
export const metadata: Metadata = {
  title: "Diagnóstico da sua fase na caneta | MIA",
  description: "Descubra em 3 minutos o que o seu corpo precisa na fase da caneta em que você está.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://www.metodometabolicofeminino.com.br/quiz-mia" },
};

export default function Page() {
  return (
    <>
      {/* fontes das telas do Stitch (Geist, EB Garamond, Geist Mono, JetBrains Mono e os ícones Material Symbols) */}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Geist+Mono:wght@100..900&family=Geist:wght@100..900&family=JetBrains+Mono:wght@400;500&display=swap" precedence="default" />
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=arrow_back,arrow_back_ios_new,assignment,biotech,check,chevron_left,female,groups,info,lock,schedule,school,verified_user" precedence="default" />
      <Raiz />
    </>
  );
}
