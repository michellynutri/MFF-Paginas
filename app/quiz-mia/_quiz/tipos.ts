// Respostas do quiz. Índices = posição da opção na tela (0 = primeira), como no doc de copy (aba 3).
export type Respostas = {
  fase?: number; // 01 · momento da caneta (0 vai começar … 5 já parei)
  caneta?: number; // 02
  quer?: number; // 04
  parar?: number; // 05
  braco?: number; // 07b · 0 firme, 1 molinha, 2 não sei
  energia?: number; // 08
  sinais?: number[]; // 09 (6 = nada disso)
  fome?: number; // 10
  prot?: number; // 11 · 0 nenhuma … 3 três ou mais
  afl?: number[]; // 12 (4 = nenhum desses)
  pula?: number; // 13 · 0 quase todo dia, 1 às vezes, 2 nunca
  cozinha?: number; // 15
  gosta?: number[]; // 16
  restr?: number[]; // 17 (5 = como de tudo)
  mov?: number; // 18 · 0 consigo, 1 alguns dias, 2 nada
  agua: number; // 19 · ml por dia
  aguaNaoSei?: boolean;
  pizza?: number; // 20
  idade: number; // 22a
  altura: number; // 22a · cm
  peso: number; // 22b · kg
  meta: number; // 22b · kg
  gasto?: number; // 23
  decid?: number; // 24 · 1 a 5
  nome: string; // 25
  email: string; // 27
  aceite: boolean; // 27
  plano: number; // 30 · 0 = 4 semanas, 1 = 8, 2 = 12
  raspou?: boolean; // 29
};

export type Status = "grave" | "atencao" | "ok" | "?";
export type Alerta = { nome: string; status: Status; apareceu: string; seNada: string };

export type Quiz = {
  r: Respostas;
  /** grava respostas sem sair da tela */
  set: (patch: Partial<Respostas>) => void;
  /** resposta única: grava, mostra o estado marcado e avança sozinha (espera mais quando a tela mostra um aviso) */
  escolhe: <K extends keyof Respostas>(k: K, v: Respostas[K], espera?: number) => void;
  /** várias respostas: liga/desliga a opção; "nenhum" é a opção que desmarca as outras */
  alterna: (k: "sinais" | "afl" | "gosta" | "restr", v: number, nenhum?: number) => void;
  proxima: () => void;
  voltar: () => void;
  podeVoltar: boolean;
  /** alertas calculados com as respostas até aqui (músculo, fome oculta, AFLs) */
  alertas: Alerta[];
  /** promoção da oferta (cronômetro de 15 min a partir da primeira vez na oferta) */
  promo: { ativa: boolean; relogio: string };
  /** abre o checkout do plano marcado */
  comprar: () => void;
  /** id desta sessão do quiz (mesmo id da linha no banco) */
  sid: string;
  /** código da tela atual (ex.: "07b") */
  tela: string;
  /** true na prévia ?ver= (estado parado, como no Stitch) */
  previa: boolean;
  /** estado extra da prévia (ex.: raspadinha "intacta" | "metade") */
  previaExtra?: string;
};

export type TelaProps = { q: Quiz };
