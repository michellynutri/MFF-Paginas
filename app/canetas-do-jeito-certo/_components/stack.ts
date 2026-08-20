import type { Sessao } from "./sessao";

// Stack da oferta. Cada item traz o que entrega e quanto vale sozinho, e a
// soma dos valores é a âncora exibida na página inteira — `PRECO_DE` sai
// daqui, não de um número escrito à mão. Assim a conta sempre fecha na tela:
// mexer num valor ou tirar um item reajusta o "de R$ X por R$ 27" do hero, da
// barra fixa e do fechamento junto.
//
// O item 1 vale exatos R$ 97, o preço que o ingresso sempre teve. É o que
// explica a âncora ter subido: a sessão continua valendo o que valia, o que
// mudou é que agora ela vai acompanhada de material.

export type ItemOferta = {
  nome: string;
  texto: string;
  /** Em reais, sem centavos. */
  valor: number;
  /** A sessão em si: o valor aparece cheio, sem o rótulo de incluso. */
  nucleo?: boolean;
};

export const ITENS_OFERTA: ItemOferta[] = [
  {
    nome: "A sessão ao vivo — Canetas do Jeito Certo",
    texto:
      "Duas horas ao vivo com a Michelly. O plano completo do tratamento: da primeira aplicação ao desmame, incluindo o que fazer nas semanas em que a dose começa a cair e a fome volta com força. Não é palestra motivacional — é conduta clínica, na ordem em que você vai precisar dela.",
    valor: 97,
    nucleo: true,
  },
  {
    nome: "O Mapa das 4 Fases",
    texto:
      "As quatro fases do tratamento — emagrecimento ativo, platô, recomposição e desmame — com o que muda na alimentação e na rotina em cada uma. Você marca em qual está hoje e já enxerga o que vem a seguir.",
    valor: 17,
  },
  {
    nome: "Protocolo de Blindagem Metabólica",
    texto:
      "As três frentes em que o corpo perde saúde durante a caneta — músculo e saciedade, intestino, micronutrientes — com a conduta específica de cada uma. É o material que impede o seu metabolismo de entrar em marcha lenta enquanto o peso cai.",
    valor: 27,
  },
  {
    nome: "Checklist: os sinais de que você está perdendo músculo",
    texto:
      "Os sinais de perda de massa magra que aparecem antes de qualquer balança acusar. Com a lista de exames e perguntas para levar ao seu médico e à sua nutricionista na próxima consulta — você chega com pauta, não com dúvida.",
    valor: 12,
  },
  {
    nome: "Replay liberado por 7 dias",
    texto:
      "Se a quinta-feira virar do avesso, você não perde nada. A gravação fica com você por uma semana, para assistir no seu tempo e voltar na parte que interessa.",
    valor: 10,
  },
];

export const brl = (valor: number) => `R$ ${valor}`;

/** Soma do stack — a âncora da página. Hoje, R$ 163. */
export const VALOR_TOTAL = brl(
  ITENS_OFERTA.reduce((soma, item) => soma + item.valor, 0),
);

/** O recap depende da data da sessão, que muda toda semana. */
export const recapOferta = (sessao: Sessao, duracao: string) => [
  `Sessão ao vivo de ${duracao} com a Michelly — ${sessao.diaLongoTitulo}, 20h`,
  "Mapa das 4 fases do tratamento",
  "Protocolo de Blindagem Metabólica",
  "Checklist dos sinais de perda de massa magra",
  "Replay liberado por 7 dias",
];
