export type FaseId = 1 | 2 | 3;

export type Fase = {
  id: FaseId;
  nome: string;
  subtitulo: string;
  descricao: string;
  proteina: { min: number; max: number };
  calorias: { min: number; max: number };
  carboidratos: { min: number; max: number; kcalMin: number; kcalMax: number };
  gorduras: { max: number; kcal: number };
};

export const FASES: Record<FaseId, Fase> = {
  1: {
    id: 1,
    nome: "Fase 1",
    subtitulo: "Emagrecimento",
    descricao:
      "Você está perdendo peso de forma ativa. A meta agora é proteger massa magra enquanto a caneta age.",
    proteina: { min: 1.2, max: 1.5 },
    calorias: { min: 1200, max: 1500 },
    carboidratos: { min: 70, max: 80, kcalMin: 280, kcalMax: 320 },
    gorduras: { max: 50, kcal: 450 },
  },
  2: {
    id: 2,
    nome: "Fase 2",
    subtitulo: "Recomposição corporal · Platô",
    descricao:
      "O peso estagnou ou você quer ganhar firmeza. A proteína sobe e o carboidrato baixa para favorecer recomposição.",
    proteina: { min: 1.6, max: 2.0 },
    calorias: { min: 1500, max: 1800 },
    carboidratos: { min: 50, max: 50, kcalMin: 200, kcalMax: 200 },
    gorduras: { max: 50, kcal: 450 },
  },
  3: {
    id: 3,
    nome: "Fase 3",
    subtitulo: "Desmame · Espaçamento ou redução",
    descricao:
      "Você está reduzindo ou espaçando a medicação. A proteína sobe ao máximo para sustentar o resultado quando a caneta sair.",
    proteina: { min: 1.8, max: 2.2 },
    calorias: { min: 1500, max: 1800 },
    carboidratos: { min: 70, max: 80, kcalMin: 280, kcalMax: 320 },
    gorduras: { max: 50, kcal: 450 },
  },
};

export const HIDRATACAO_ML_POR_KG = { min: 35, max: 40 };
