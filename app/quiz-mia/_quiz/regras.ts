// Regras do quiz: alertas, fase, metas, títulos e preços. Textos tirados do doc de copy (aba 3, rev 416).
import type { Alerta, Respostas, Status } from "./tipos";

export const RESPOSTAS_INICIAIS: Respostas = {
  agua: 1500,
  idade: 42,
  altura: 165,
  peso: 82,
  meta: 68,
  nome: "",
  email: "",
  aceite: true,
  plano: 2,
};

// ---------- fase ----------
// Nome que aparece no cartão "Sua fase" (28) e na lista do carregamento (26); a trilha tem 4 etapas.
export const FASE_NOME = ["Antes da primeira dose", "Emagrecimento", "Platô", "Recomposição", "Saída da caneta", "Depois da caneta"];
export const FASE_TRILHA = [0, 0, 1, 2, 3, 3]; // etapa acesa na trilha Emagrecimento · Platô · Recomposição · Saída da caneta
export const TELA_03 = ["03a", "03b", "03c", "03d", "03e", "03f"]; // versão da tela 03 por resposta da 01

// ---------- alertas ----------
const nivel = (n: number): Status => (n >= 2 ? "grave" : n === 1 ? "atencao" : "ok");
const juntaVoce = (partes: string[]) => {
  // "você já acorda cansada" + "você pula refeição…" → "você já acorda cansada e pula refeição…"
  const p = partes.slice(0, 2).map((x, i) => (i > 0 && partes[0].startsWith("você ") ? x.replace(/^você /, "") : x));
  return p.join(" e ") + ".";
};

const ENERGIA = ["", "você já acorda cansada", "você apaga às três da tarde", "você chega no fim do dia sem força", "você se arrasta o dia inteiro"];
const ENERGIA_NIVEL = [0, 2, 1, 2, 2];

export function calculaAlertas(r: Respostas): Alerta[] {
  // Músculo indo embora: teste do braço (07b) + movimento (18)
  let m = -1;
  const mm: string[] = [];
  if (r.braco !== undefined) {
    m = [0, 2, 1][r.braco];
    mm.push(["braço firme no teste", "braço molinho no teste", "você não soube dizer como está o braço"][r.braco]);
  }
  if (r.mov !== undefined) {
    m = Math.max(m, [0, 1, 2][r.mov]);
    mm.push(["movimento na rotina", "movimento só em alguns dias", "nenhum movimento na semana"][r.mov]);
  }
  // ordem do texto: o motivo mais grave primeiro; "braço firme e movimento na rotina" quando os dois estão bem
  const musculo: Alerta = {
    nome: "Músculo indo embora",
    status: m < 0 ? "?" : nivel(m),
    apareceu: !mm.length ? "" : r.braco === 0 && r.mov !== undefined ? ["braço firme", mm[1]].join(" e ") + "." : mm.join(" e ") + ".",
    seNada:
      m >= 2
        ? "com menos músculo, o corpo queima menos, e o peso tem grande chance de voltar quando a caneta sair."
        : "o músculo vai embora aos poucos, e o peso tem grande chance de voltar quando a caneta sair.",
  };

  // Fome Oculta: energia (08), sinais (09), fome (10), pula refeição (13). Nunca fica "sob controle".
  // Motivos na ordem das perguntas; os graves vão na frente. Ex.: "você já acorda cansada e pula refeição quase todo dia."
  let f = -1;
  const motivos: [string, number][] = [];
  if (r.energia !== undefined) {
    f = Math.max(f, ENERGIA_NIVEL[r.energia]);
    if (r.energia > 0) motivos.push([ENERGIA[r.energia], ENERGIA_NIVEL[r.energia]]);
  }
  if (r.fome !== undefined) f = Math.max(f, r.fome === 3 ? 1 : 0);
  if (r.pula !== undefined) {
    f = Math.max(f, [2, 1, 0][r.pula]);
    if (r.pula < 2) motivos.push([["você pula refeição quase todo dia", "você pula refeição às vezes"][r.pula], [2, 1][r.pula]]);
  }
  if (r.sinais !== undefined) {
    f = Math.max(f, 0);
    const sn = r.sinais;
    if (sn.includes(2)) motivos.push(["o cabelo está caindo", 2]);
    if (sn.includes(3)) motivos.push(["a unha quebra à toa", 2]);
    if (sn.includes(4)) motivos.push(["falta força para levantar do sofá", 2]);
    if (sn.includes(1)) motivos.push(["o intestino fica preso por dias", 1]);
    for (const [, n] of motivos) f = Math.max(f, n);
  }
  let fomeTexto = "";
  let fomeSeNada = "a falta aparece com o tempo de caneta, e o peso tem grande chance de voltar quando ela sair.";
  if (f >= 0) {
    if (f < 1) f = 1; // piso: a Fome Oculta fica no mínimo em Atenção
    if (motivos.length) {
      const ord = [...motivos].sort((x, y) => y[1] - x[1]).map((x) => x[0]);
      fomeTexto = juntaVoce(ord);
      if (f === 1) fomeSeNada = "a falta de nutriente aumenta com o tempo de caneta.";
    } else {
      fomeTexto =
        r.fome === 0 || r.fome === undefined
          ? "a fome sumiu, e sem um plano não dá para saber se os nutrientes estão chegando."
          : "a caneta segura a fome, e sem um plano não dá para saber se os nutrientes estão chegando.";
    }
    if (f >= 2) fomeSeNada = "o cansaço piora, o cabelo e a unha sentem, e o corpo chega fraco no dia de parar, com grande chance de o peso voltar.";
  }
  const fome: Alerta = { nome: "Fome Oculta", status: f < 0 ? "?" : nivel(f), apareceu: fomeTexto, seNada: fomeSeNada };

  // Alimentos Falsamente Leves: AFLs marcados (12) + proteína de ontem (11)
  let a = -1;
  const am: string[] = [];
  if (r.prot !== undefined) {
    a = Math.max(a, [2, 1, 0, 0][r.prot]);
    if (r.prot === 0) am.push("nenhuma refeição com proteína ontem");
    if (r.prot === 1) am.push("proteína em poucas refeições");
  }
  if (r.afl !== undefined) {
    const n = r.afl.filter((x) => x !== 4).length;
    a = Math.max(a, n >= 2 ? 2 : n);
    if (n) am.unshift(`${n} ${n > 1 ? "AFLs" : "AFL"} no seu dia a dia`);
  }
  const afl: Alerta = {
    nome: "Alimentos Falsamente Leves",
    status: a < 0 ? "?" : nivel(a),
    apareceu: a === 0 ? "o seu prato já tem comida de verdade." : am.join(" e ") + ".",
    seNada:
      a >= 2
        ? "quando a caneta sair e a fome voltar, o prato ainda vai estar cheio de comida que não alimenta, e o peso tende a voltar."
        : "o pouco que você come não alimenta o músculo, e o peso tende a voltar.",
  };
  return [musculo, fome, afl];
}

export const ROTULO: Record<Status, string> = { grave: "Grave", atencao: "Atenção", ok: "Sob controle", "?": "" };

/** contagem que vai no título: graves; sem nenhum grave, os em atenção */
export function contagem(al: Alerta[]) {
  const g = al.filter((x) => x.status === "grave").length;
  const at = al.filter((x) => x.status === "atencao").length;
  return { graves: g, atencao: at };
}

export function tituloParcial(al: Alerta[]) {
  const { graves, atencao } = contagem(al);
  if (graves === 3) return "Já são 3 alertas graves.";
  if (graves > 0) return `${graves} ${graves > 1 ? "alertas graves" : "alerta grave"} até agora.`;
  return atencao > 1 ? `Já são ${atencao} alertas em atenção.` : "1 alerta em atenção até agora.";
}
export function fechoParcial(al: Alerta[]) {
  const { graves } = contagem(al);
  if (graves === 3) return "Nenhum dos três se resolve subindo a dose. Como resolver cada um, no seu caso, é o que o seu plano mostra.";
  if (graves > 0) return "Um alerta grave já dá espaço para o peso voltar. Como resolver, no seu caso, é o que o seu plano mostra.";
  return "Um alerta em atenção vira grave sem aviso. Como resolver cada um, no seu caso, é o que o seu plano mostra.";
}
/** "3 alertas graves" / "1 alerta grave" / "2 alertas em atenção" (título do resultado e botão) */
export function resumoAlertas(al: Alerta[]) {
  const { graves, atencao } = contagem(al);
  if (graves > 0) return { n: graves, txt: `${graves} ${graves > 1 ? "alertas graves" : "alerta grave"}` };
  return { n: atencao, txt: `${atencao} ${atencao > 1 ? "alertas" : "alerta"} em atenção` };
}

// ---------- metas (resultado) ----------
const FATOR_PROTEINA = [1.4, 1.4, 1.4, 1.8, 2.0, 1.8]; // g por kg, pela fase
export function metas(r: Respostas) {
  const prot = Math.round((r.peso * FATOR_PROTEINA[r.fase ?? 1]) / 5) * 5;
  const agua = ((r.peso * 35) / 1000).toFixed(1).replace(".", ",");
  return { prot, porRefeicao: Math.round(prot / 4), agua };
}

// ---------- oferta ----------
export const PRECO_CHEIO = 129;
export const PLANOS = [
  { nome: "4 semanas", mes: 99, meses: 1, dias: 28, off: 23 },
  { nome: "8 semanas", mes: 59, meses: 2, dias: 56, off: 54 },
  { nome: "12 semanas", mes: 49, meses: 3, dias: 84, off: 62 },
];
export const brl = (v: number) => v.toFixed(2).replace(".", ",");
export function precoDia(plano: number, promo: boolean) {
  const p = PLANOS[plano];
  return brl(((promo ? p.mes : PRECO_CHEIO) * p.meses) / p.dias);
}
export const GASTO = ["até R$ 500", "de R$ 500 a R$ 1.000", "de R$ 1.000 a R$ 2.000", "mais de R$ 2.000"];

/** cupom da raspadinha: primeiro nome em maiúsculas, sem acento, + 62 */
export const cupom = (nome: string) =>
  ((nome || "MIA").normalize("NFD").replace(/[̀-ͯ]/g, "").toUpperCase().replace(/[^A-Z]/g, "") || "MIA") + "62";
