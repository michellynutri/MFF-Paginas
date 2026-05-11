import type { Metadata } from "next";
import { Hero } from "./_components/Hero";
import { Calculadora } from "./_components/Calculadora";
import { ComoFunciona } from "./_components/ComoFunciona";

export const metadata: Metadata = {
  title:
    "Calculadora Completa GLP-1 — Metas diárias por fase | Michelly Silveira",
  description:
    "Calculadora completa para mulheres em tratamento com Ozempic, Mounjaro e similares. Calorias, proteína, carboidratos, gorduras e hidratação ajustados às fases de emagrecimento, recomposição e desmame.",
  robots: "index, follow",
  alternates: {
    canonical: "https://michellysilveira.com.br/calculadora-glp1",
  },
  openGraph: {
    title: "Calculadora Completa GLP-1 — Michelly Silveira",
    description:
      "Suas metas diárias de calorias, proteína, carboidratos, gorduras e hidratação — ajustadas à fase do tratamento.",
    url: "https://michellysilveira.com.br/calculadora-glp1",
    type: "website",
  },
};

export default function CalculadoraGlp1Page() {
  return (
    <main className="bg-creme">
      <Hero />
      <Calculadora />
      <ComoFunciona />
    </main>
  );
}
