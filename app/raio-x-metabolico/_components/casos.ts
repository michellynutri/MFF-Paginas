import { RESPOSTAS_VAZIAS, type Respostas, type ResultadoId } from "./diagnostico";

// Casos de validação do Raio-X. A Michelly classifica cada um SEM ver o
// `esperado` (o documento dela é gerado por scripts/raio-x-casos.ts). Onde ela
// discordar, muda a regra em diagnostico.ts e o `esperado` aqui — nessa ordem.
//
// `esperado` = o que as regras provisórias dão hoje (proposta de 28/set).

export type Caso = {
  id: string;
  /** O que o caso testa (não vai para o documento da Michelly). */
  testa: string;
  respostas: Respostas;
  esperado: ResultadoId;
  certeza: "alta" | "provavel";
};

const r = (parcial: Partial<Respostas>): Respostas => ({ ...RESPOSTAS_VAZIAS, altura: "165", ...parcial });

export const CASOS: Caso[] = [
  {
    id: "01",
    testa: "Ainda não começou",
    respostas: r({ situacao: "vou_comecar", pesoHoje: "88", meta: "70", treino: "nao" }),
    esperado: "fase1",
    certeza: "alta",
  },
  {
    id: "02",
    testa: "Dose subindo, perdendo bem",
    respostas: r({ tempoUso: "1a3m", situacao: "subindo", pesoInicial: "95", pesoHoje: "92", peso4s: "94", meta: "72", treino: "1a2" }),
    esperado: "fase1",
    certeza: "alta",
  },
  {
    id: "03",
    testa: "Dose subindo com balança parada: adaptação, não platô",
    respostas: r({ tempoUso: "1a3m", situacao: "subindo", pesoInicial: "90", pesoHoje: "84", peso4s: "84", meta: "68", treino: "1a2" }),
    esperado: "fase1",
    certeza: "alta",
  },
  {
    id: "04",
    testa: "Dose estável, perdendo 3% em 4 semanas",
    respostas: r({ tempoUso: "3a6m", fimTratamento: "longe", situacao: "estavel", tempoDose: "mais8s", pesoInicial: "100", pesoHoje: "88", peso4s: "91", meta: "70", treino: "3mais" }),
    esperado: "fase1",
    certeza: "alta",
  },
  {
    id: "05",
    testa: "Platô clássico: perdeu 0,5 kg em 4 semanas, longe da meta",
    respostas: r({ tempoUso: "6a12m", fimTratamento: "longe", situacao: "estavel", tempoDose: "mais8s", pesoInicial: "100", pesoHoje: "92", peso4s: "92,5", meta: "70", treino: "1a2" }),
    esperado: "fase2",
    certeza: "alta",
  },
  {
    id: "06",
    testa: "Peso subiu nas últimas 4 semanas com dose estável",
    respostas: r({ tempoUso: "3a6m", fimTratamento: "longe", situacao: "estavel", tempoDose: "4a8s", pesoInicial: "98", pesoHoje: "90", peso4s: "89,5", meta: "72", treino: "1a2" }),
    esperado: "fase2",
    certeza: "alta",
  },
  {
    id: "07",
    testa: "Platô, mas começou creatina (retenção)",
    respostas: r({ tempoUso: "6a12m", fimTratamento: "longe", situacao: "estavel", tempoDose: "mais8s", pesoInicial: "95", pesoHoje: "87", peso4s: "87,3", meta: "70", mudancas: ["creatina"], treino: "3mais" }),
    esperado: "fase2",
    certeza: "provavel",
  },
  {
    id: "08",
    testa: "Sem peso de 4 semanas, diz que a balança parou",
    respostas: r({ tempoUso: "6a12m", fimTratamento: "longe", situacao: "estavel", tempoDose: "mais8s", pesoInicial: "90", pesoHoje: "83", balanca: "parada", meta: "68", treino: "1a2" }),
    esperado: "fase2",
    certeza: "provavel",
  },
  {
    id: "09",
    testa: "Sem peso de 4 semanas, diz que está descendo",
    respostas: r({ tempoUso: "6a12m", fimTratamento: "longe", situacao: "estavel", tempoDose: "mais8s", pesoInicial: "90", pesoHoje: "83", balanca: "descendo", meta: "68", treino: "1a2" }),
    esperado: "fase1",
    certeza: "provavel",
  },
  {
    id: "10",
    testa: "Balança parada, mas a dose mudou há menos de 4 semanas",
    respostas: r({ tempoUso: "3a6m", fimTratamento: "longe", situacao: "estavel", tempoDose: "menos4s", pesoInicial: "96", pesoHoje: "88", peso4s: "88,2", meta: "70", treino: "1a2" }),
    esperado: "fase1",
    certeza: "alta",
  },
  {
    id: "11",
    testa: "Platô, não sabe há quanto tempo está na dose",
    respostas: r({ tempoUso: "6a12m", fimTratamento: "longe", situacao: "estavel", tempoDose: "nao_sei", pesoInicial: "96", pesoHoje: "88", peso4s: "88,2", meta: "70", treino: "1a2" }),
    esperado: "fase2",
    certeza: "provavel",
  },
  {
    id: "12",
    testa: "Platô depois de perder 18%: estabilização natural",
    respostas: r({ tempoUso: "6a12m", fimTratamento: "longe", situacao: "estavel", tempoDose: "mais8s", pesoInicial: "100", pesoHoje: "82", peso4s: "82,4", meta: "70", treino: "1a2" }),
    esperado: "fase3",
    certeza: "alta",
  },
  {
    id: "13",
    testa: "Platô sem peso inicial: não dá pra saber se é o fim natural",
    respostas: r({ tempoUso: "6a12m", fimTratamento: "longe", situacao: "estavel", tempoDose: "mais8s", pesoHoje: "85", peso4s: "85,3", meta: "70", treino: "1a2" }),
    esperado: "fase2",
    certeza: "provavel",
  },
  {
    id: "14",
    testa: "Faltam 4 kg para a meta (gatilho do método)",
    respostas: r({ tempoUso: "6a12m", fimTratamento: "longe", situacao: "estavel", tempoDose: "mais8s", pesoInicial: "80", pesoHoje: "72", peso4s: "74", meta: "68", treino: "1a2" }),
    esperado: "fase3",
    certeza: "alta",
  },
  {
    id: "15",
    testa: "IMC 24 com meta ainda 8 kg abaixo",
    respostas: r({ tempoUso: "6a12m", fimTratamento: "longe", situacao: "estavel", tempoDose: "mais8s", pesoInicial: "75", pesoHoje: "66", peso4s: "67,5", meta: "58", treino: "1a2" }),
    esperado: "fase3",
    certeza: "alta",
  },
  {
    id: "16",
    testa: "Já chegou na meta e segue na caneta",
    respostas: r({ tempoUso: "6a12m", fimTratamento: "longe", situacao: "estavel", tempoDose: "mais8s", pesoInicial: "85", pesoHoje: "68", peso4s: "68,5", meta: "68", treino: "3mais" }),
    esperado: "fase3",
    certeza: "alta",
  },
  {
    id: "17",
    testa: "Perdendo bem, longe da meta, com fraqueza",
    respostas: r({ tempoUso: "3a6m", fimTratamento: "longe", situacao: "estavel", tempoDose: "mais8s", pesoInicial: "110", pesoHoje: "100", peso4s: "103", meta: "80", incomodos: ["fraqueza"], treino: "nao" }),
    esperado: "fase1",
    certeza: "alta",
  },
  {
    id: "18",
    testa: "Perdendo rápido demais: 7 kg em 4 semanas",
    respostas: r({ tempoUso: "3a6m", fimTratamento: "longe", situacao: "estavel", tempoDose: "mais8s", pesoInicial: "96", pesoHoje: "83", peso4s: "90", meta: "68", treino: "1a2" }),
    esperado: "fase1",
    certeza: "alta",
  },
  {
    id: "19",
    testa: "Perdendo bem, faltam 7 kg (chegando perto)",
    respostas: r({ tempoUso: "6a12m", fimTratamento: "longe", situacao: "estavel", tempoDose: "mais8s", pesoInicial: "90", pesoHoje: "79", peso4s: "81", meta: "72", treino: "1a2" }),
    esperado: "fase1",
    certeza: "alta",
  },
  {
    id: "20",
    testa: "Médico reduzindo a dose",
    respostas: r({ situacao: "medico_reduzindo", pesoInicial: "92", pesoHoje: "74", meta: "68", treino: "3mais" }),
    esperado: "fase4",
    certeza: "alta",
  },
  {
    id: "21",
    testa: "Espaçando doses por conta própria (custo)",
    respostas: r({ situacao: "pausa_propria", pesoInicial: "95", pesoHoje: "85", meta: "70", treino: "1a2" }),
    esperado: "pausa",
    certeza: "alta",
  },
  {
    id: "22",
    testa: "Parou há 2 semanas, com o médico",
    respostas: r({ situacao: "parei", tempoParada: "menos4s", comoParou: "medico", pesoInicial: "90", pesoMinimo: "69", pesoHoje: "70", meta: "68", treino: "3mais" }),
    esperado: "fase4",
    certeza: "alta",
  },
  {
    id: "23",
    testa: "Parou há 2 meses com o médico, estável",
    respostas: r({ situacao: "parei", tempoParada: "1a3m", comoParou: "medico", pesoInicial: "88", pesoMinimo: "67", pesoHoje: "68", meta: "67", treino: "3mais" }),
    esperado: "pos",
    certeza: "alta",
  },
  {
    id: "24",
    testa: "Parou há 5 meses por conta própria, reganhando, longe da meta",
    respostas: r({ situacao: "parei", tempoParada: "mais3m", comoParou: "propria", pesoInicial: "100", pesoMinimo: "84", pesoHoje: "90", meta: "70", incomodos: ["fome"], treino: "nao" }),
    esperado: "pos",
    certeza: "alta",
  },
  {
    id: "25",
    testa: "Dose ainda subindo, menos de 3 meses, mas já faltam 3 kg",
    respostas: r({ tempoUso: "1a3m", situacao: "subindo", pesoInicial: "72", pesoHoje: "66", peso4s: "68", meta: "63", treino: "1a2" }),
    esperado: "fase1",
    certeza: "alta",
  },
  {
    id: "26",
    testa: "Meta baixa demais (IMC 17,6)",
    respostas: r({ tempoUso: "3a6m", fimTratamento: "longe", situacao: "estavel", altura: "160", tempoDose: "mais8s", pesoInicial: "80", pesoHoje: "70", peso4s: "72", meta: "45", treino: "1a2" }),
    esperado: "fase1",
    certeza: "alta",
  },
  {
    id: "27",
    testa: "Platô sem musculação",
    respostas: r({ tempoUso: "6a12m", fimTratamento: "longe", situacao: "estavel", tempoDose: "mais8s", pesoInicial: "94", pesoHoje: "86", peso4s: "86,4", meta: "68", treino: "nao" }),
    esperado: "fase2",
    certeza: "alta",
  },
  {
    id: "28",
    testa: "Hipotireoidismo + menopausa, perdendo 0,8% em 4 semanas",
    respostas: r({ tempoUso: "6a12m", fimTratamento: "longe", situacao: "estavel", tempoDose: "mais8s", pesoInicial: "92", pesoHoje: "84", peso4s: "84,7", meta: "68", condicoes: ["tireoide", "menopausa"], treino: "1a2" }),
    esperado: "fase2",
    certeza: "alta",
  },
  {
    id: "29",
    testa: "2 meses de caneta com balança parada: ainda emagrecimento ativo",
    respostas: r({ situacao: "estavel", tempoUso: "1a3m", pesoInicial: "92", pesoHoje: "86", peso4s: "86,3", meta: "68", treino: "1a2" }),
    esperado: "fase1",
    certeza: "alta",
  },
  {
    id: "30",
    testa: "2 meses de caneta e já na meta",
    respostas: r({ situacao: "estavel", tempoUso: "1a3m", pesoInicial: "74", pesoHoje: "66", peso4s: "69", meta: "66", treino: "1a2" }),
    esperado: "fase1",
    certeza: "alta",
  },
  {
    id: "31",
    testa: "Últimos meses do tratamento, ainda perdendo, faltam 10 kg",
    respostas: r({ situacao: "estavel", tempoUso: "6a12m", fimTratamento: "perto", tempoDose: "mais8s", pesoInicial: "98", pesoHoje: "84", peso4s: "86", meta: "74", treino: "1a2" }),
    esperado: "fase3",
    certeza: "alta",
  },
  {
    id: "32",
    testa: "Platô depois de mais de 1 ano, perdeu 12%",
    respostas: r({ situacao: "estavel", tempoUso: "mais12m", fimTratamento: "nao_sei", tempoDose: "mais8s", pesoInicial: "100", pesoHoje: "88", peso4s: "88,3", meta: "72", treino: "1a2" }),
    esperado: "fase3",
    certeza: "alta",
  },
  {
    id: "33",
    testa: "Mais de 1 ano, ainda perdendo, sem data para terminar",
    respostas: r({ situacao: "estavel", tempoUso: "mais12m", fimTratamento: "nao_sei", tempoDose: "mais8s", pesoInicial: "120", pesoHoje: "98", peso4s: "101", meta: "75", treino: "1a2" }),
    esperado: "fase1",
    certeza: "alta",
  },
];
