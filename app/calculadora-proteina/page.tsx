import type { Metadata } from "next";
import { Hero } from "./_components/Hero";
import { Calculadora } from "./_components/Calculadora";
import { ComoFunciona } from "./_components/ComoFunciona";

export const metadata: Metadata = {
  title:
    "Calculadora de Proteína — Quanto consumir por dia | Michelly Silveira",
  description:
    "Descubra em segundos quanta proteína você precisa por dia. Cálculo baseado em 1,5 g por quilo de peso, ideal para mulheres em tratamento com GLP-1.",
  robots: "index, follow",
  alternates: {
    canonical: "https://michellysilveira.com.br/calculadora-proteina",
  },
  openGraph: {
    title: "Calculadora de Proteína — Michelly Silveira",
    description:
      "Quanta proteína você precisa por dia? Insira o seu peso e descubra a sua meta diária — para proteger massa magra, cabelo e metabolismo durante o tratamento.",
    url: "https://michellysilveira.com.br/calculadora-proteina",
    type: "website",
  },
};

export default function CalculadoraProteinaPage() {
  return (
    <main className="bg-creme">
      <Hero />
      <Calculadora />
      <ComoFunciona />
    </main>
  );
}
