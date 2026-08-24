import type { Sessao } from "../../canetas-do-jeito-certo-_shared/_components/sessao";

// Stack da variante D (copy v5, eixo prático).
//
// A âncora continua em R$ 358, igual às variantes B e C — o que muda é O QUE
// entra na vaga. As A/B/C vendem o "Mapa das 4 Fases" e o "Protocolo de
// Blindagem Metabólica"; aqui os dois saem e entram os dois materiais que o
// workshop realmente produz: a régua de cálculo e o guia do prato. Isso não é
// detalhe de copy — é o que a pessoa recebe depois de pagar, e prometer
// material que não existe é o tipo de coisa que volta como reembolso.
//
// Manter a soma em R$ 358 é de propósito: quando a D for comparada com a C, a
// diferença que aparecer é de arquitetura e de promessa, não de preço.

export type ItemOferta = {
  nome: string;
  texto: string;
  /** Em reais, sem centavos. */
  valor: number;
  /** O workshop em si: o valor aparece cheio, sem o rótulo de incluso. */
  nucleo?: boolean;
};

export const ITENS_OFERTA: ItemOferta[] = [
  {
    nome: "O Workshop ao vivo — Canetas do Jeito Certo",
    texto:
      "Duas horas, mão na massa, montando a sua alimentação do zero.",
    valor: 197,
    nucleo: true,
  },
  {
    nome: "A Régua de Cálculo",
    texto:
      "O guia pra calcular as suas quantidades pelo seu peso, pra consultar sempre que precisar.",
    valor: 47,
  },
  {
    nome: "O Guia do Prato + Lista de Alimentos Campeões",
    texto:
      "O método do prato e a lista do que priorizar quando o apetite é pouco, pra montar qualquer refeição.",
    valor: 67,
  },
  {
    nome: "A Gravação por 7 dias",
    texto: "Não pode ao vivo? A gravação fica com você por uma semana.",
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

/** O recap depende da data do workshop, que muda toda semana. */
export const recapOferta = (sessao: Sessao, duracao: string) => [
  `Workshop ao vivo de ${duracao} com a Michelly — ${sessao.diaLongoTitulo}, 20h`,
  "A Régua de Cálculo",
  "O Guia do Prato + Lista de Alimentos Campeões",
  "A Gravação por 7 dias",
];
