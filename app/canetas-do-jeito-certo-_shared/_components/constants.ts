// Constantes que valem para TODAS as variantes da Canetas do Jeito Certo.
// O que muda entre elas — o stack da oferta e, com ele, o preço-âncora
// riscado — mora no `stack.ts` de cada variante e chega aos componentes
// compartilhados por prop. Se um número de uma variante vazasse para cá, o
// teste A/B passaria a comparar duas coisas ao mesmo tempo.

// Checkout do ingresso de R$ 27 (Greenn).
export const CHECKOUT_URL =
  "https://payfast.greenn.com.br/xc5vbr8/offer/b4jPgX?ch_id=142461";

export const OFFER_ANCHOR = "#ingresso";

export const PRECO = "R$ 27";

export const DURACAO = "2 horas";
