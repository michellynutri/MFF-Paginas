import type { Incomodo, ResultadoId } from "./diagnostico";

// ─── PREENCHER: conteúdos da área de membros ────────────────────────────────
// O resultado do Raio-X manda a aluna assistir aos conteúdos da fase dela.
// Enquanto os links não estão aqui, a página mostra só os títulos (sem botão).
//
// - AREA_DE_MEMBROS_URL: link da área de membros do MMF. Vazio = sem botão geral.
// - Em cada item, `url` é opcional: com ela, o título vira link para a aula.
// - Os títulos abaixo são provisórios, montados a partir do que a VSL promete.
//   Troque pelos nomes reais dos módulos e aulas.

export const AREA_DE_MEMBROS_URL = "";

export type Conteudo = { titulo: string; descricao?: string; url?: string };

export const CONTEUDOS_DA_FASE: Record<ResultadoId, Conteudo[]> = {
  fase1: [
    { titulo: "Módulo Fase 1 · Aceleração Inicial", descricao: "Comece por aqui, na ordem." },
    { titulo: "Cardápio Emagrecimento", descricao: "Plano flexível ou fechado, com o ciclo de carboidrato." },
    { titulo: "Suplementação da Fase 1" },
    { titulo: "Blindagem · protocolo 48h de Ouro", descricao: "Para cada aplicação." },
  ],
  fase2: [
    { titulo: "Módulo Fase 2 · Ponto de Virada", descricao: "Comece por aqui, na ordem." },
    { titulo: "Cardápio Recomposição Corporal", descricao: "Com e sem treino de força." },
    { titulo: "Suplementação da Fase 2", descricao: "Creatina e HMB." },
    { titulo: "Pilar de Mentalidade", descricao: "Para atravessar o platô sem pânico." },
  ],
  fase3: [
    { titulo: "Módulo Fase 3 · Recomposição", descricao: "Comece por aqui, na ordem." },
    { titulo: "Cardápio Recomposição Corporal", descricao: "Com e sem treino de força." },
    { titulo: "Suplementação da Fase 3", descricao: "Músculo, pele, cabelo e unhas." },
  ],
  fase4: [
    { titulo: "Módulo Fase 4 · Alta da Caneta", descricao: "Comece por aqui, na ordem." },
    { titulo: "Protocolo S.O.S. Intestino", descricao: "3 dias, na primeira semana de redução da dose." },
    { titulo: "Cardápio Desmame", descricao: "Com a ordem do prato e os alimentos que ajudam o seu GLP-1." },
    { titulo: "Bônus · Kit Fale com Seu Médico", descricao: "Para planejar a redução junto com ele." },
  ],
  pausa: [
    { titulo: "Bônus · Kit Fale com Seu Médico", descricao: "Para transformar a pausa em um plano." },
    { titulo: "Módulo Fase 4 · Alta da Caneta" },
    { titulo: "Cardápio Desmame" },
    { titulo: "Protocolo S.O.S. Intestino", descricao: "Se o intestino travar ou inchar." },
  ],
  pos: [
    { titulo: "Bônus · Guia Pós-Caneta", descricao: "Comece por aqui." },
    { titulo: "Módulo Fase 3 · Recomposição" },
    { titulo: "Cardápio Recomposição Corporal" },
    { titulo: "Pilar de Mentalidade", descricao: "Para lidar com a fome que voltou." },
  ],
};

/** Conteúdo extra por incômodo marcado (aparece junto da "atenção extra"). */
export const CONTEUDO_DO_INCOMODO: Record<Incomodo, Conteudo> = {
  enjoo: { titulo: "Blindagem · protocolo 48h de Ouro" },
  intestino: { titulo: "Protocolo S.O.S. Intestino" },
  cansaco: { titulo: "Blindagem · falta de disposição" },
  fraqueza: { titulo: "Módulo Fase 3 · Recomposição" },
  cabelo: { titulo: "Blindagem · queda de cabelo" },
  flacidez: { titulo: "Módulo Fase 3 · Recomposição" },
  fome: { titulo: "Pilar de Mentalidade" },
};
