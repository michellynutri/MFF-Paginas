"use client";
// Prévia de uma tela parada, no estado em que ela foi desenhada no Stitch: /quiz-mia?ver=<cod>.
// Serve para conferir pixel a pixel com o Stitch (scripts/quiz-mia/compara.py).
import { Quiz } from "./Quiz";
import { PREVIAS } from "./previas";

export function Previa({ cod }: { cod: string }) {
  const p = PREVIAS[cod];
  if (!p) return <p style={{ padding: 20 }}>tela {cod} não existe</p>;
  return <Quiz previa={p} />;
}
