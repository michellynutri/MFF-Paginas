import type { Sessao } from "../../canetas-do-jeito-certo-_shared/_components/sessao";

// Stack da oferta da variante B. Mesma mecânica do stack da A — cada item traz
// o que entrega e quanto vale sozinho, e a soma é a âncora exibida na página
// inteira — mas com outros números: são quatro itens somando R$ 358, contra
// cinco somando R$ 163 na A.
//
// É de propósito que a âncora saia daqui e não de um número escrito à mão:
// mexer num valor ou tirar um item reajusta junto o "de R$ X por R$ 27" do
// hero, da barra fixa, da oferta e do fechamento. A conta sempre fecha na tela.
//
// Diferença de leitura em relação à A: lá o item-núcleo vale R$ 97, o preço
// que o ingresso sempre teve, e a âncora se explica por acumulação. Aqui a
// âncora é maior e se apoia na comparação com o custo mensal da caneta, que a
// seção `AConta` faz logo abaixo do stack.

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
    texto:
      "Duas horas ao vivo com a Michelly. O plano completo, da primeira aplicação ao desmame — incluindo o que fazer nas semanas em que a dose começa a cair e a fome volta com força.",
    valor: 197,
    nucleo: true,
  },
  {
    nome: "O Mapa das 4 Fases",
    texto:
      "As quatro fases do tratamento com o que muda na alimentação e na rotina em cada uma. Você marca em qual está hoje e já enxerga o que vem a seguir.",
    valor: 47,
  },
  {
    nome: "O Protocolo de Blindagem Metabólica",
    texto:
      "As três frentes em que o corpo perde saúde durante a caneta, com a conduta específica de cada uma. É o que impede o seu metabolismo de entrar em marcha lenta enquanto o peso cai.",
    valor: 67,
  },
  {
    nome: "Gravação liberada por 7 dias",
    texto:
      "Se a quinta virar do avesso, você não perde nada. A gravação fica com você por uma semana, pra assistir no seu tempo.",
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
  "O Mapa das 4 Fases do tratamento",
  "O Protocolo de Blindagem Metabólica",
  "Gravação liberada por 7 dias",
];
