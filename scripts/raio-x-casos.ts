// Confere os casos de validação do Raio-X Metabólico contra as regras e, com
// --doc <arquivo.md>, gera o documento da Michelly (sem o gabarito).
//
//   npx tsx scripts/raio-x-casos.ts
//   npx tsx scripts/raio-x-casos.ts --doc ~/Clientes/.../CASOS-RAIO-X.md

import { writeFileSync } from "node:fs";
import { CASOS } from "../app/raio-x-metabolico/_components/casos";
import { calcular, diagnosticar, type Respostas } from "../app/raio-x-metabolico/_components/diagnostico";
import { CONDICOES, FASES, INCOMODOS } from "../app/raio-x-metabolico/_components/fases";

const SITUACAO: Record<string, string> = {
  vou_comecar: "Ainda não começou a caneta",
  subindo: "Usando, dose ainda subindo",
  estavel: "Usando, dose estável",
  medico_reduzindo: "Médico reduzindo ou espaçando a dose",
  pausa_propria: "Pulando ou espaçando doses por conta própria",
  parei: "Parou a caneta",
};
const TEMPO_DOSE: Record<string, string> = {
  menos4s: "menos de 4 semanas",
  "4a8s": "4 a 8 semanas",
  mais8s: "mais de 8 semanas",
  nao_sei: "não sabe",
};
const TEMPO_USO: Record<string, string> = {
  menos1m: "menos de 1 mês",
  "1a3m": "1 a 3 meses",
  "3a6m": "3 a 6 meses",
  "6a12m": "6 meses a 1 ano",
  mais12m: "mais de 1 ano",
};
const FIM: Record<string, string> = {
  perto: "sim, está nos últimos meses",
  longe: "não, ainda tem bastante tratamento",
  nao_sei: "não sabe / não combinou",
};
const TEMPO_PARADA: Record<string, string> = { menos4s: "menos de 4 semanas", "1a3m": "1 a 3 meses", mais3m: "mais de 3 meses" };
const BALANCA: Record<string, string> = { descendo: "descendo bem", devagar: "descendo devagar", parada: "parada", subindo: "subindo" };
const MUDANCA: Record<string, string> = {
  creatina: "começou creatina",
  intestino: "intestino preso",
  menstruacao: "pesou perto da menstruação",
  dose_pulada: "pulou ou atrasou dose",
};
const TREINO: Record<string, string> = { nao: "não faz", "1a2": "1–2x/semana", "3mais": "3x ou mais/semana" };

const f1 = (n: number) => n.toLocaleString("pt-BR", { maximumFractionDigits: 1 });

function ficha(r: Respostas): string[] {
  const n = calcular(r);
  const l: string[] = [`- **Situação:** ${SITUACAO[r.situacao!]}`];
  if (r.tempoUso) l.push(`- **Usa a caneta há:** ${TEMPO_USO[r.tempoUso]}`);
  if (r.fimTratamento) l.push(`- **Perto do fim do tratamento combinado com o médico:** ${FIM[r.fimTratamento]}`);
  if (r.tempoDose) l.push(`- **Na dose atual há:** ${TEMPO_DOSE[r.tempoDose]}`);
  if (r.tempoParada) l.push(`- **Parou há:** ${TEMPO_PARADA[r.tempoParada]} (${r.comoParou === "medico" ? "com o médico" : "por conta própria"})`);

  const pesos = [
    `altura ${n.alturaCm} cm`,
    n.inicial && `antes da caneta ${f1(n.inicial)} kg`,
    n.minimo && `menor peso ${f1(n.minimo)} kg`,
    n.quatroSemanas && `há 4 semanas ${f1(n.quatroSemanas)} kg`,
    `hoje ${f1(n.hoje!)} kg`,
  ].filter(Boolean);
  l.push(`- **Números:** ${pesos.join(" · ")}`);
  l.push(`- **Meta:** ${n.meta ? `${f1(n.meta)} kg` : "não tem"}`);

  const calc = [
    n.imc && `IMC ${f1(n.imc)}`,
    n.perdaPct !== null && `perdeu ${f1(n.perdaKg!)} kg (${f1(n.perdaPct)}%)`,
    n.ritmoPct4s !== null && `últimas 4 semanas ${n.ritmoKg4s! >= 0 ? "−" : "+"}${f1(Math.abs(n.ritmoKg4s!))} kg (${f1(Math.abs(n.ritmoPct4s))}%)`,
    n.faltaMetaKg !== null && (n.faltaMetaKg > 0 ? `faltam ${f1(n.faltaMetaKg)} kg` : "na meta"),
  ].filter(Boolean);
  l.push(`- **Calculado:** ${calc.join(" · ")}`);

  if (r.balanca) l.push(`- **Balança (percepção dela):** ${BALANCA[r.balanca]}`);
  if (r.mudancas.length) l.push(`- **Nas últimas 4 semanas:** ${r.mudancas.map((m) => MUDANCA[m]).join(", ")}`);
  l.push(`- **Musculação:** ${TREINO[r.treino!]}`);
  if (r.incomodos.length) l.push(`- **Incômodos:** ${r.incomodos.map((i) => INCOMODOS[i].rotulo.toLowerCase()).join(", ")}`);
  if (r.condicoes.length) l.push(`- **Condições:** ${r.condicoes.map((c) => CONDICOES[c].rotulo.toLowerCase()).join(", ")}`);
  return l;
}

let falhas = 0;
for (const c of CASOS) {
  const d = diagnosticar(c.respostas);
  const ok = d.id === c.esperado && d.certeza === c.certeza;
  if (!ok) falhas++;
  console.log(
    `${ok ? "ok  " : "ERRO"} ${c.id} ${c.testa.padEnd(62)} → ${d.id}${d.certeza === "provavel" ? " (provável)" : ""}` +
      (ok ? "" : `  [esperado ${c.esperado}/${c.certeza}]`) +
      (d.sinais.length ? `  sinais: ${d.sinais.map((s) => s.titulo).join("; ")}` : ""),
  );
}
console.log(`\n${CASOS.length - falhas}/${CASOS.length} casos batem com as regras.`);

const iDoc = process.argv.indexOf("--doc");
if (iDoc > -1) {
  const destino = process.argv[iDoc + 1];
  const fases = ["fase1", "fase2", "fase3", "fase4", "pausa", "pos"] as const;
  const md = [
    "# Raio-X Metabólico · validação dos casos",
    "",
    `Michelly, são ${CASOS.length} alunas fictícias. Para cada uma, marque **em que fase você colocaria** e, se quiser, por quê.`,
    "Não há resposta certa: o sistema vai seguir o seu julgamento. Os números em \"Calculado\" são contas feitas a partir dos dados dela.",
    "",
    "**Fases possíveis:**",
    ...fases.map((id) => `- **${FASES[id].tag} · ${FASES[id].nome}** — ${FASES[id].resumo}`),
    "",
    "Se achar que falta uma pergunta para decidir algum caso, anote também: é assim que o formulário melhora.",
    "",
    ...CASOS.flatMap((c) => [
      `## Caso ${c.id}`,
      "",
      ...ficha(c.respostas),
      "",
      "**Fase que você daria:** ______________________",
      "",
      "**Comentário:**",
      "",
      "---",
      "",
    ]),
  ].join("\n");
  writeFileSync(destino, md);
  console.log(`Documento da Michelly: ${destino}`);
}

process.exit(falhas ? 1 : 0);
