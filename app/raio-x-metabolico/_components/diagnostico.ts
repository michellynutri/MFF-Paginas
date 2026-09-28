// Regras do Raio-X Metabólico: respostas → fase. Puro, sem tela, pra ser fácil
// de revisar com a Michelly e de testar (scripts/raio-x-casos.ts).
//
// As fases são as 4 que a VSL do MMF vende (app/mmf-vsl/_components/Secoes.tsx),
// mais o pós-caneta que a FAQ da VSL promete e a "pausa não planejada" (doses
// puladas ou espaçadas sem o médico). Nos cardápios em PDF dela a numeração é
// outra:
//   VSL Fase 1 Aceleração Inicial  → cardápio Fase 1 Emagrecimento
//   VSL Fase 2 Ponto de Virada     → o platô, que dispara a recomposição
//   VSL Fase 3 Recomposição        → cardápio Fase 2 Recomposição corporal
//   VSL Fase 4 Alta da Caneta      → cardápio Fase 3 Desmame
// Por isso o resultado cita os cardápios pelo NOME, nunca pelo número.
//
// A fase não sai da percepção da aluna: sai dos números (ritmo das últimas 4
// semanas, % perdido, IMC, distância da meta). Quando falta número ou algo
// mascara a balança, o resultado vira "provável" e diz o que falta.

export type ResultadoId = "fase1" | "fase2" | "fase3" | "fase4" | "pausa" | "pos";

export type Situacao =
  | "vou_comecar"
  | "subindo"
  | "estavel"
  | "medico_reduzindo"
  | "pausa_propria"
  | "parei";
export type TempoUso = "menos1m" | "1a3m" | "3a6m" | "6a12m" | "mais12m";
export type FimTratamento = "perto" | "longe" | "nao_sei";
export type TempoDose = "menos4s" | "4a8s" | "mais8s" | "nao_sei";
export type TempoParada = "menos4s" | "1a3m" | "mais3m";
export type ComoParou = "medico" | "propria";
export type Balanca = "descendo" | "devagar" | "parada" | "subindo";
export type Mudanca = "creatina" | "intestino" | "menstruacao" | "dose_pulada";
export type Treino = "nao" | "1a2" | "3mais";
export type Incomodo =
  | "enjoo"
  | "intestino"
  | "cansaco"
  | "fraqueza"
  | "cabelo"
  | "flacidez"
  | "fome";
export type Condicao = "tireoide" | "menopausa" | "insulina" | "bariatrica";

export type Respostas = {
  situacao?: Situacao;
  /** Há quanto tempo usa a caneta (só pra quem está usando com a dose subindo ou estável). */
  tempoUso?: TempoUso;
  /** Se está nos últimos meses do tratamento combinado com o médico. */
  fimTratamento?: FimTratamento;
  tempoDose?: TempoDose;
  tempoParada?: TempoParada;
  comoParou?: ComoParou;
  // Números como a aluna digitou ("72,5"). Vazio = não informou / não sabe.
  altura: string;
  pesoInicial: string;
  pesoMinimo: string;
  pesoHoje: string;
  peso4s: string;
  meta: string;
  /** Só aparece quando ela não sabe o peso de 4 semanas atrás. */
  balanca?: Balanca;
  mudancas: Mudanca[];
  treino?: Treino;
  incomodos: Incomodo[];
  condicoes: Condicao[];
};

export const RESPOSTAS_VAZIAS: Respostas = {
  altura: "",
  pesoInicial: "",
  pesoMinimo: "",
  pesoHoje: "",
  peso4s: "",
  meta: "",
  mudancas: [],
  incomodos: [],
  condicoes: [],
};

// ─── Limites (PROVISÓRIOS até a validação com a Michelly) ───────────────────
// Além destes números, duas regras de tempo de uso (ver `base`):
//   - menos de 3 meses de caneta = emagrecimento ativo (Fase 1), qualquer que
//     seja a balança;
//   - platô depois de 12 meses de uso = estabilização natural (Fase 3).
export const LIMIARES = {
  /** Perdeu menos que isso (% do peso) nas últimas 4 semanas = balança parada. */
  platoPct4s: 1,
  /** Gatilho do método: faltando 5 kg, recomposição. */
  metaPertoKg: 5,
  /** IMC em que o foco já é músculo, qualquer que seja a meta dela. */
  imcRecomposicao: 25,
  /** Platô depois de perder tanto assim = estabilização natural da caneta (estudos: 15–20%). */
  perdaFimPct: 15,
  /** Sinal "chegando perto da Recomposição". */
  metaAproximandoKg: 8,
  imcAproximando: 27,
  /** Mais que isso em 4 semanas (~1,5%/semana) = rápido demais, risco pro músculo. */
  ritmoRapidoPct4s: 6,
  /** Recuperou mais que isso (% do menor peso) depois de parar = reganho. */
  reganhoPct: 3,
  imcMinimoMeta: 18.5,
};

// ─── Perguntas ──────────────────────────────────────────────────────────────

export type PerguntaId =
  | "situacao"
  | "tempoUso"
  | "fimTratamento"
  | "tempoDose"
  | "tempoParada"
  | "comoParou"
  | "numeros"
  | "balanca"
  | "meta"
  | "mudancas"
  | "treino"
  | "incomodos"
  | "condicoes";

/**
 * Quais telas aparecem depende das respostas. Enquanto a resposta que decide
 * ainda não veio, a tela condicional conta — o total da barra só encolhe.
 */
export function perguntasPara(r: Respostas): PerguntaId[] {
  const s = r.situacao;
  const lista: PerguntaId[] = ["situacao"];

  if (s === undefined || s === "subindo" || s === "estavel") lista.push("tempoUso");
  // Com menos de 3 meses a fase já está decidida: o resto do bloco de platô não aparece.
  const estavelAvancada = s === undefined || (s === "estavel" && !emagrecimentoAtivo(r));
  if (estavelAvancada) lista.push("tempoDose", "fimTratamento");
  if (s === "parei") lista.push("tempoParada", "comoParou");

  lista.push("numeros");

  if (estavelAvancada) {
    const numerosFeitos = r.pesoHoje !== "";
    const n = calcular(r);
    if (!numerosFeitos || n.ritmoPct4s === null) lista.push("balanca");
    lista.push("meta");
    // Só pergunta o que pode mascarar a balança quando há sinal de platô.
    const jaDecidido = fimDoCaminho(n) !== null || r.tempoDose === "menos4s" || r.fimTratamento === "perto";
    if (!numerosFeitos || (!jaDecidido && balancaParou(r, n) !== false)) lista.push("mudancas");
  } else {
    lista.push("meta");
  }

  lista.push("treino", "incomodos", "condicoes");
  return lista;
}

/** Campos da tela de números, conforme a situação. */
export type CampoNumero = "altura" | "pesoInicial" | "pesoMinimo" | "pesoHoje" | "peso4s";

export function camposNumeros(s?: Situacao): CampoNumero[] {
  switch (s) {
    case "vou_comecar":
      return ["altura", "pesoHoje"];
    case "parei":
      return ["altura", "pesoInicial", "pesoMinimo", "pesoHoje"];
    case "subindo":
    case "estavel":
      return ["altura", "pesoInicial", "pesoHoje", "peso4s"];
    default:
      return ["altura", "pesoInicial", "pesoHoje"];
  }
}

export const CAMPOS_OBRIGATORIOS: CampoNumero[] = ["altura", "pesoHoje"];

// ─── Números ────────────────────────────────────────────────────────────────

/** Peso digitado → número válido (30–250 kg) ou null. */
export function pesoEmKg(peso: string): number | null {
  const n = Number(peso.replace(",", ".").trim());
  return peso.trim() !== "" && Number.isFinite(n) && n >= 30 && n <= 250 ? n : null;
}

/** Altura em cm; aceita "1,65" (metros) ou "165". */
export function alturaEmCm(altura: string): number | null {
  const n = Number(altura.replace(",", ".").trim());
  if (altura.trim() === "" || !Number.isFinite(n)) return null;
  const cm = n < 3 ? n * 100 : n;
  return cm >= 130 && cm <= 210 ? Math.round(cm) : null;
}

export type Numeros = {
  alturaCm: number | null;
  hoje: number | null;
  inicial: number | null;
  minimo: number | null;
  quatroSemanas: number | null;
  meta: number | null;
  imc: number | null;
  /** Quanto perdeu desde antes da caneta (kg e % do peso inicial). */
  perdaKg: number | null;
  perdaPct: number | null;
  /** Quanto perdeu nas últimas 4 semanas (negativo = ganhou). */
  ritmoKg4s: number | null;
  ritmoPct4s: number | null;
  faltaMetaKg: number | null;
  /** IMC que a meta dela dá com a altura. */
  imcMeta: number | null;
  /** Quanto recuperou desde o menor peso (só pra quem parou). */
  reganhoKg: number | null;
  reganhoPct: number | null;
};

export function calcular(r: Respostas): Numeros {
  const alturaCm = alturaEmCm(r.altura);
  const hoje = pesoEmKg(r.pesoHoje);
  const inicial = pesoEmKg(r.pesoInicial);
  const minimo = pesoEmKg(r.pesoMinimo);
  const quatroSemanas = pesoEmKg(r.peso4s);
  const meta = pesoEmKg(r.meta);
  const m2 = alturaCm ? (alturaCm / 100) ** 2 : null;

  return {
    alturaCm,
    hoje,
    inicial,
    minimo,
    quatroSemanas,
    meta,
    imc: hoje && m2 ? hoje / m2 : null,
    perdaKg: hoje && inicial ? inicial - hoje : null,
    perdaPct: hoje && inicial ? ((inicial - hoje) / inicial) * 100 : null,
    ritmoKg4s: hoje && quatroSemanas ? quatroSemanas - hoje : null,
    ritmoPct4s: hoje && quatroSemanas ? ((quatroSemanas - hoje) / quatroSemanas) * 100 : null,
    faltaMetaKg: hoje && meta ? hoje - meta : null,
    imcMeta: meta && m2 ? meta / m2 : null,
    reganhoKg: hoje && minimo ? hoje - minimo : null,
    reganhoPct: hoje && minimo ? ((hoje - minimo) / minimo) * 100 : null,
  };
}

/** Menos de 3 meses de caneta: emagrecimento ativo. */
function emagrecimentoAtivo(r: Respostas): boolean {
  return r.tempoUso === "menos1m" || r.tempoUso === "1a3m";
}

/** true/false pelos números (ou pela percepção, se não há peso de 4 semanas); null = não dá pra saber. */
function balancaParou(r: Respostas, n: Numeros): boolean | null {
  if (n.ritmoPct4s !== null) return n.ritmoPct4s < LIMIARES.platoPct4s;
  if (r.balanca) return r.balanca === "parada" || r.balanca === "subindo";
  return null;
}

// ─── Diagnóstico ────────────────────────────────────────────────────────────

export type Sinal = { titulo: string; texto: string };

export type Diagnostico = {
  id: ResultadoId;
  /** "provavel" quando falta número ou algo pode estar mascarando a balança. */
  certeza: "alta" | "provavel";
  /** Por que ela caiu nessa fase, a partir das respostas. */
  motivo: string;
  /** O que falta para ter certeza (só quando provável). */
  pendencias: string[];
  /** Sinais secundários: o que observar além da fase. */
  sinais: Sinal[];
  numeros: Numeros;
};

type Base = Omit<Diagnostico, "sinais" | "numeros">;

const kg = (n: number) => `${n.toLocaleString("pt-BR", { maximumFractionDigits: 1 })} kg`;
const pct = (n: number) => `${n.toLocaleString("pt-BR", { maximumFractionDigits: 0 })}%`;
const imcTxt = (n: number) => n.toLocaleString("pt-BR", { maximumFractionDigits: 1 });

const MASCARAS: Record<Mudanca, string> = {
  creatina:
    "Você começou a creatina há pouco: ela retém água nas primeiras semanas e esconde a perda de gordura na balança.",
  intestino: "Intestino preso segura peso na balança que não é gordura.",
  menstruacao:
    "Você se pesou perto da menstruação: a retenção desse período muda o número. Compare sempre no mesmo momento do ciclo.",
  dose_pulada: "Doses puladas ou atrasadas mudam a resposta da caneta nessas semanas.",
};

/** Motivo de já estar na Recomposição, ou null. */
function fimDoCaminho(n: Numeros): string | null {
  if (n.faltaMetaKg !== null && n.faltaMetaKg <= LIMIARES.metaPertoKg) {
    return n.faltaMetaKg <= 0
      ? "Você já chegou na sua meta. O foco agora é firmar o corpo e preparar a saída da caneta."
      : `Faltam ${kg(n.faltaMetaKg)} para a sua meta. Com menos de 5 kg, o foco muda de perder peso para ganhar músculo.`;
  }
  if (n.imc !== null && n.imc <= LIMIARES.imcRecomposicao) {
    return `Seu IMC já está em ${imcTxt(n.imc)}. Mesmo que a sua meta seja mais baixa, daqui em diante o que muda o seu corpo é músculo, não perder mais peso.`;
  }
  return null;
}

function base(r: Respostas, n: Numeros): Base {
  const alta = (id: ResultadoId, motivo: string): Base => ({ id, certeza: "alta", motivo, pendencias: [] });

  switch (r.situacao) {
    case "vou_comecar":
      return alta(
        "fase1",
        "Você ainda não começou a caneta. É o melhor momento: você entra na Fase 1 já sabendo o que fazer desde a primeira aplicação.",
      );

    case "medico_reduzindo":
      return alta(
        "fase4",
        "Seu médico já está reduzindo ou espaçando a dose. É o começo da saída da caneta, e é aqui que o resultado se decide.",
      );

    case "pausa_propria":
      return alta(
        "pausa",
        "Você está espaçando ou pulando doses sem um plano com o seu médico. O corpo sente essa oscilação, e a conduta precisa proteger o que você já conquistou.",
      );

    case "parei":
      if (r.tempoParada === "menos4s") {
        return alta(
          "fase4",
          "Você parou há menos de 4 semanas. O remédio ainda está saindo do corpo e a fome volta aos poucos: a conduta ainda é a da saída da caneta.",
        );
      }
      return alta(
        "pos",
        "Você já parou a caneta há mais de um mês. A conduta agora é sustentar o resultado com o corpo trabalhando sozinho.",
      );

    case "subindo": {
      if (emagrecimentoAtivo(r)) {
        return alta(
          "fase1",
          "Você usa a caneta há menos de 3 meses e a dose ainda está subindo: é a fase de emagrecimento ativo. Balança lenta agora é adaptação, não platô.",
        );
      }
      const fim = fimDoCaminho(n);
      if (fim) return alta("fase3", fim);
      return alta(
        "fase1",
        "Sua dose ainda está sendo aumentada: é a fase de adaptação. Balança lenta agora é normal e não é platô.",
      );
    }
  }

  // estável na dose
  if (emagrecimentoAtivo(r)) {
    const desacelerou = balancaParou(r, n) === true;
    return alta(
      "fase1",
      desacelerou
        ? "Você usa a caneta há menos de 3 meses: ainda é a fase de emagrecimento ativo. A balança desacelerou, mas tão cedo isso costuma ser adaptação do corpo, não platô. Se ela seguir parada depois do 3º mês, refaça o Raio-X."
        : "Você usa a caneta há menos de 3 meses: é a fase de emagrecimento ativo. A prioridade é emagrecer protegendo o músculo.",
    );
  }

  const fim = fimDoCaminho(n);
  if (fim) return alta("fase3", fim);

  if (r.fimTratamento === "perto") {
    return alta(
      "fase3",
      "Você está nos últimos meses do tratamento combinado com o seu médico. É hora de firmar o corpo e preparar a saída: quando ele começar a reduzir a dose, você entra na Fase 4.",
    );
  }

  const pendencias: string[] = [];

  if (r.tempoDose === "menos4s") {
    return alta(
      "fase1",
      "Você está há menos de 4 semanas nessa dose: o corpo ainda está respondendo a ela. Ainda não dá para falar em platô.",
    );
  }
  if (r.tempoDose === "nao_sei") {
    pendencias.push(
      "Confirme com a sua receita há quanto tempo está na dose atual. Se a dose subiu há menos de 4 semanas, a balança lenta ainda não é platô.",
    );
  }

  const parou = balancaParou(r, n);
  if (n.ritmoPct4s === null) {
    pendencias.push(
      "Sem o peso de 4 semanas atrás, usamos a sua percepção da balança. Anote o seu peso hoje e refaça o Raio-X daqui a 4 semanas.",
    );
  }

  if (!parou) {
    return {
      id: "fase1",
      certeza: pendencias.length ? "provavel" : "alta",
      motivo:
        n.ritmoKg4s !== null
          ? `Você perdeu ${kg(n.ritmoKg4s)} nas últimas 4 semanas: o corpo está respondendo. A prioridade é seguir emagrecendo e proteger o músculo.`
          : "A balança está descendo e o peso ainda tem caminho. A prioridade é seguir emagrecendo e proteger o músculo.",
      pendencias,
    };
  }

  for (const m of r.mudancas) pendencias.push(MASCARAS[m]);

  const quantoParou =
    n.ritmoKg4s !== null
      ? n.ritmoKg4s <= 0
        ? `Nas últimas 4 semanas o peso não desceu (${n.ritmoKg4s < 0 ? `subiu ${kg(-n.ritmoKg4s)}` : "ficou igual"}), com a dose estável.`
        : `Nas últimas 4 semanas você perdeu só ${kg(n.ritmoKg4s)}, menos de 1% do seu peso, com a dose estável.`
      : "Pela sua percepção, a balança parou nas últimas semanas com a dose estável.";

  if (r.tempoUso === "mais12m") {
    return {
      id: "fase3",
      certeza: pendencias.length ? "provavel" : "alta",
      motivo: `${quantoParou} Depois de mais de 1 ano de caneta, é aí que o corpo costuma estabilizar. Não é um platô para destravar: é hora de firmar o corpo.`,
      pendencias,
    };
  }

  if (n.perdaPct !== null && n.perdaPct >= LIMIARES.perdaFimPct) {
    return {
      id: "fase3",
      certeza: pendencias.length ? "provavel" : "alta",
      motivo: `${quantoParou} Mas você já perdeu ${pct(n.perdaPct)} do peso inicial, que é onde a caneta costuma estabilizar. Não é um platô para destravar: é hora de firmar o corpo.`,
      pendencias,
    };
  }
  if (n.perdaPct === null) {
    pendencias.push(
      "Sem o peso de antes da caneta, não sabemos se você já perdeu o suficiente para este ser o fim natural da perda. Se já perdeu mais de 15%, a sua fase é a Recomposição.",
    );
  }

  return {
    id: "fase2",
    certeza: pendencias.length ? "provavel" : "alta",
    motivo: `${quantoParou} É o platô, e ele tem conduta certa.`,
    pendencias,
  };
}

function sinaisSecundarios(r: Respostas, n: Numeros, id: ResultadoId): Sinal[] {
  const sinais: Sinal[] = [];
  const emagrecendo = id === "fase1" || id === "fase2";

  if (
    emagrecendo &&
    ((n.faltaMetaKg !== null && n.faltaMetaKg <= LIMIARES.metaAproximandoKg) ||
      (n.imc !== null && n.imc <= LIMIARES.imcAproximando))
  ) {
    sinais.push({
      titulo: "Você está chegando perto da Recomposição",
      texto:
        "Já comece a musculação com carga e deixe a proteína no topo da faixa. Assim, a virada para a Fase 3 acontece sem perder músculo.",
    });
  }

  if (id === "fase1" && n.ritmoPct4s !== null && n.ritmoPct4s > LIMIARES.ritmoRapidoPct4s) {
    sinais.push({
      titulo: "Você está perdendo muito rápido",
      texto: `Foram ${kg(n.ritmoKg4s!)} em 4 semanas. Nesse ritmo o risco de perder músculo junto é maior: proteína no topo da faixa todos os dias e musculação sem falta.`,
    });
  }

  if (emagrecendo && (r.incomodos.includes("fraqueza") || r.incomodos.includes("flacidez"))) {
    sinais.push({
      titulo: "Sinais de perda de músculo",
      texto:
        "Fraqueza e flacidez indicam que o músculo pode estar indo junto. Antecipe duas condutas da Recomposição: musculação com carga e proteína no topo da faixa.",
    });
  }

  if (r.treino === "nao") {
    sinais.push(
      id === "fase1"
        ? {
            titulo: "Comece a musculação",
            texto:
              "Mesmo 2 vezes por semana já fazem diferença. É o treino de força que avisa o corpo que o músculo precisa ficar.",
          }
        : {
            titulo: "Sem musculação, esta fase não funciona",
            texto:
              "Nesta fase, o treino de força é o que transforma o resultado em corpo firme e sustenta o peso depois. Se ainda não treina, comece esta semana.",
          },
    );
  }

  if ((id === "pos" || id === "fase4") && r.situacao === "parei" && n.reganhoPct !== null && n.reganhoPct >= LIMIARES.reganhoPct) {
    sinais.push({
      titulo: `Você já recuperou ${kg(n.reganhoKg!)}`,
      texto:
        "Desde o seu menor peso. Aja agora, não depois: proteína e musculação no centro, como no Ponto de Virada. Se o peso continuar subindo, converse com o seu médico.",
    });
  }

  if (r.situacao === "parei" && r.comoParou === "propria" && n.faltaMetaKg !== null && n.faltaMetaKg > LIMIARES.metaPertoKg) {
    sinais.push({
      titulo: "Você parou antes da meta",
      texto: `Ainda faltavam ${kg(n.faltaMetaKg)}. Dá para seguir perdendo com as condutas, mais devagar. Se pensa em voltar à caneta, é conversa com o seu médico.`,
    });
  }

  if (
    r.situacao === "estavel" &&
    r.tempoUso === "mais12m" &&
    r.fimTratamento !== "perto" &&
    (id === "fase1" || id === "fase2")
  ) {
    sinais.push({
      titulo: "Você usa a caneta há mais de 1 ano",
      texto:
        "Pergunte ao seu médico qual é o plano para os próximos meses. Saber quando a saída começa muda a sua fase: nos últimos meses, o foco passa a ser a Recomposição.",
    });
  }

  if (n.imcMeta !== null && n.imcMeta < LIMIARES.imcMinimoMeta) {
    sinais.push({
      titulo: "A sua meta pode estar baixa demais",
      texto: `Com a sua altura, ${kg(n.meta!)} dá IMC ${imcTxt(n.imcMeta)}, abaixo do saudável (18,5). Vale rever a meta com a sua nutricionista ou o seu médico.`,
    });
  }

  return sinais;
}

export function diagnosticar(r: Respostas): Diagnostico {
  const numeros = calcular(r);
  const b = base(r, numeros);
  return { ...b, sinais: sinaisSecundarios(r, numeros, b.id), numeros };
}
