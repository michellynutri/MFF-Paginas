import { VALOR_TOTAL } from "./stack";

// Checkout do ingresso de R$ 27 (Greenn).
export const CHECKOUT_URL =
  "https://payfast.greenn.com.br/xc5vbr8/offer/b4jPgX?ch_id=142461";

export const OFFER_ANCHOR = "#ingresso";

export const PRECO = "R$ 27";

// Valor cheio exibido riscado ao lado do PRECO como ancoragem. Vem da soma do
// stack em `stack.ts` de propósito: o número que o hero anuncia é o mesmo que
// a seção da oferta destrincha item a item.
export const PRECO_DE = VALOR_TOTAL;

export const DURACAO = "2 horas";
