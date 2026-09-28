import type { Metadata } from "next";
import { Leaf } from "../sos-canetas-_shared/_components/Leaf";
import { RodapeInstitucional } from "@/components/rodape-institucional";
import { RaioX } from "./_components/RaioX";

// ─── Raio-X Metabólico (MMF) ────────────────────────────────────────────────
// Diagnóstico simples da fase do tratamento para as alunas do Método Metabólico
// Feminino — é o "Raio-X Metabólico" que a /mmf-vsl promete. A aluna responde
// sobre o tratamento, os números (altura, peso antes, hoje e de 4 semanas atrás,
// meta) e a rotina, e recebe a fase (com a certeza do resultado), o que ela
// significa, as condutas, os ajustes pro caso dela e os conteúdos para assistir.
//
// Tudo roda no navegador: não capta nome/e-mail e não envia nada. As respostas
// ficam só no localStorage dela (quem volta cai direto no resultado).
//
// - Regras (respostas → fase): _components/diagnostico.ts
// - Texto de cada fase:        _components/fases.ts
// - Aulas e links (PREENCHER):  _components/conteudos.ts
// - Casos de validação:        _components/casos.ts (npx tsx scripts/raio-x-casos.ts)
export const metadata: Metadata = {
  title: "Raio-X Metabólico · Método Metabólico Feminino | Michelly Silveira",
  description:
    "Descubra em que fase do tratamento com a caneta você está e o que fazer agora.",
  robots: "noindex, nofollow",
};

export default function RaioXMetabolicoPage() {
  return (
    <main className="bg-creme relative overflow-hidden min-h-screen">
      <Leaf
        className="top-[-30px] right-[-60px] w-[240px] h-[240px] md:w-[300px] md:h-[300px]"
        opacity={0.12}
      />
      <Leaf
        className="top-[520px] left-[-70px] w-[200px] h-[200px]"
        opacity={0.07}
        rotation={-25}
      />

      <div className="relative max-w-[820px] mx-auto px-4 sm:px-6 pt-6 md:pt-12 pb-16 md:pb-24">
        <header className="mb-8 md:mb-12">
          <div className="inline-flex items-center gap-3 bg-sos-creme-soft rounded-full py-2.5 px-5 shadow-card mb-8 md:mb-10">
            <span className="w-7 h-7 rounded-full bg-sos-dourado-esc flex items-center justify-center shrink-0">
              <span className="font-serif italic text-creme text-[15px] leading-none">M</span>
            </span>
            <span className="font-sans font-medium text-[12px] md:text-[13px] text-texto">
              Método Metabólico Feminino
            </span>
          </div>
          <p className="font-sans text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.18em] text-sos-dourado-esc mb-4">
            Raio-X Metabólico
          </p>
          <h1 className="font-serif text-[34px] md:text-[54px] leading-[1.06] font-medium text-texto mb-5">
            Descubra a sua fase e <em className="italic">o que fazer agora</em>
          </h1>
          <p className="font-sans text-[17px] md:text-[19px] leading-[1.6] text-marrom max-w-[640px]">
            Cada fase do tratamento com a caneta pede uma conduta diferente. Responda com o que
            está acontecendo hoje, não com o que você gostaria que estivesse.
          </p>
        </header>

        <RaioX />
      </div>

      <RodapeInstitucional tema="creme" />
    </main>
  );
}
