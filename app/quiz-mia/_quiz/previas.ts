import type { Respostas } from "./tipos";

// Estado de cada prancheta do Stitch (scripts/quiz-mia/stitch/<cod>.html) → tela + respostas que a reproduzem.
// As respostas seguem o caminho de exemplo do Stitch (a "Ana", 3 alertas graves), acumuladas até a tela.
export type Previa = { tela: string; r: Partial<Respostas>; promoAtiva?: boolean; extra?: string };

const ANA = {
  fase: 1, // 01
  caneta: 0, // 02
  quer: 0, // 04
  parar: 0, // 05
  braco: 1, // 07b
  energia: 1, // 08
  sinais: [1, 2], // 09
  fome: 0, // 10
  prot: 2, // 11
  afl: [0, 1], // 12
  pula: 0, // 13
  cozinha: 0, // 15
  gosta: [0, 1, 5], // 16
  restr: [0], // 17
  mov: 2, // 18
  pizza: 1, // 20
  gasto: 1, // 23
  decid: 5, // 24
} satisfies Partial<Respostas>;
type K = keyof typeof ANA;
const CHAVES = Object.keys(ANA) as K[];
/** respostas da Ana antes da pergunta `k` (sem ela); com `inclui`, até ela */
const antes = (k: K | null, inclui = false): Partial<Respostas> => {
  const out: Partial<Respostas> = {};
  for (const c of CHAVES) {
    if (c === k && !inclui) break;
    (out as Record<string, unknown>)[c] = ANA[c];
    if (c === k) break;
  }
  return out;
};
const tudo = antes(null);

export const PREVIAS: Record<string, Previa> = {
  "01": { tela: "01", r: {} },
  "01b": { tela: "01", r: { fase: 1 } },
  "02": { tela: "02", r: antes("caneta") },
  "03a": { tela: "03a", r: { ...antes("caneta", true), fase: 0 } },
  "03b": { tela: "03b", r: { ...antes("caneta", true), fase: 1 } },
  "03c": { tela: "03c", r: { ...antes("caneta", true), fase: 2 } },
  "03d": { tela: "03d", r: { ...antes("caneta", true), fase: 3 } },
  "03e": { tela: "03e", r: { ...antes("caneta", true), fase: 4 } },
  "03f": { tela: "03f", r: { ...antes("caneta", true), fase: 5 } },
  "04": { tela: "04", r: antes("quer") },
  "05": { tela: "05", r: antes("parar", true) }, // prancheta com "Quase todo dia" marcada e o aviso
  "06": { tela: "06", r: antes("braco") },
  "07a": { tela: "07a", r: antes("braco") }, // contagem parada em 3
  "07b": { tela: "07b", r: antes("braco", true) }, // "Molinha" marcada e o aviso
  "08": { tela: "08", r: antes("energia") },
  "09": { tela: "09", r: antes("sinais", true) }, // 2 marcados
  "10": { tela: "10", r: antes("fome") },
  "11": { tela: "11", r: antes("prot") },
  "12": { tela: "12", r: antes("afl", true) }, // 2 marcados e o aviso
  "13": { tela: "13", r: antes("pula", true) }, // "Quase todo dia" e o aviso
  "14": { tela: "14", r: antes("cozinha") }, // 3 graves
  // 14b: 1 grave (músculo), fome em atenção (pula às vezes), AFLs sob controle
  "14b": { tela: "14", r: { ...antes("braco"), braco: 1, energia: 0, sinais: [6], fome: 1, prot: 3, afl: [4], pula: 1 } },
  // 14c: nenhum grave; músculo sob controle, fome e AFLs em atenção
  "14c": { tela: "14", r: { ...antes("braco"), braco: 0, energia: 0, sinais: [6], fome: 0, prot: 2, afl: [0], pula: 2 } },
  "15": { tela: "15", r: antes("cozinha") },
  "16": { tela: "16", r: antes("gosta", true) }, // 3 marcados
  "17": { tela: "17", r: antes("restr", true) }, // 1 marcado
  "18": { tela: "18", r: antes("mov", true) }, // "Hoje não faço nada" e o aviso
  "19": { tela: "19", r: antes("pizza") },
  "20": { tela: "20", r: antes("pizza", true) },
  "21": { tela: "21", r: antes("gasto") },
  "22a": { tela: "22a", r: antes("gasto") },
  "22b": { tela: "22b", r: antes("gasto") },
  "23": { tela: "23", r: antes("gasto") },
  "24": { tela: "24", r: antes("decid", true) },
  "25": { tela: "25", r: tudo },
  "26": { tela: "26", r: tudo }, // 72%
  "27": { tela: "27", r: tudo },
  "28": { tela: "28", r: tudo },
  // 28b: fase Recomposição; músculo sob controle; fome e AFLs em atenção
  "28b": {
    tela: "28",
    r: { ...tudo, fase: 3, braco: 0, mov: 0, energia: 0, sinais: [6], fome: 0, pula: 2, prot: 1, afl: [0] },
  },
  "29a": { tela: "29", r: tudo, extra: "intacta" },
  "29b": { tela: "29", r: tudo, extra: "metade" },
  "29c": { tela: "29", r: { ...tudo, raspou: true } },
  "30a": { tela: "30", r: tudo },
  "30b": { tela: "30", r: tudo, promoAtiva: false },
};
