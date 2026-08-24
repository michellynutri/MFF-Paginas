import type { Sessao } from "../../canetas-do-jeito-certo-_shared/_components/sessao";

// Stack da variante C. Mesmos quatro itens e mesma âncora de R$ 358 da
// variante B — a copy v4 muda a arquitetura da página, não a oferta. Manter os
// números iguais aos da B é de propósito: assim, quando as duas forem
// comparadas, a diferença que aparecer é de estrutura, não de preço.

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
    nome: "A Sessão ao vivo — Canetas do Jeito Certo",
    texto: "Duas horas ao vivo comigo, da primeira aplicação ao desmame.",
    valor: 197,
    nucleo: true,
  },
  {
    nome: "O Mapa das 4 Fases",
    texto:
      "As quatro fases do tratamento e o que muda em cada uma. Você marca em qual está hoje.",
    valor: 47,
  },
  {
    nome: "O Protocolo de Blindagem Metabólica",
    texto:
      "As três frentes de proteção do corpo durante a caneta, com a conduta de cada uma.",
    valor: 67,
  },
  {
    nome: "A Gravação por 7 dias",
    texto:
      "Não pode ao vivo? A gravação fica com você por uma semana.",
    valor: 47,
  },
];

export const brl = (valor: number) => `R$ ${valor}`;

/** Soma do stack — a âncora da página. Hoje, R$ 358. */
export const VALOR_TOTAL = brl(
  ITENS_OFERTA.reduce((soma, item) => soma + item.valor, 0),
);

/** O valor cheio exibido riscado ao lado do preço, na página inteira. */
export const PRECO_DE = VALOR_TOTAL;

/** O recap depende da data da sessão, que muda toda semana. */
export const recapOferta = (sessao: Sessao, duracao: string) => [
  `Sessão ao vivo de ${duracao} com a Michelly — ${sessao.diaLongoTitulo}, 20h`,
  "O Mapa das 4 Fases",
  "O Protocolo de Blindagem Metabólica",
  "A Gravação por 7 dias",
];
