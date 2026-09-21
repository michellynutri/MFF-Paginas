export const CHECKOUT_URL = "https://payfast.greenn.com.br/kjs6gkt/offer/XPZ4EA?ch_id=138907&b_id_1=ftn2rw4&b_offer_1=4c2wIh&b_id_2=ywth2yt&b_offer_2=ZwEgOB&b_id_3=c6uu39u&b_offer_3=Cpm4Jo";
// Checkout exclusivo da variante -h (Pagtrust).
export const CHECKOUT_URL_H = "https://checkout.pagtrust.com.br/ck5868f88e?funnel=fn116a30bf";
// Checkout da página VSL (oferta R$ 97 ou 12x R$ 9,97 — Greenn).
// Desde 17/09/2026 aponta direto pro checkout final, sem passar pelo
// /redirect/299928 da Greenn: aquele link virou uma página "Loading..." que
// resolve o destino por JavaScript (um salto a mais pra perder gente no
// celular). O destino é o registro fixo do link 299928 na Greenn
// (apipay.greenn.com.br/api/link/299928). Se a oferta/order bumps mudarem na
// Greenn, atualizar aqui — a página não segue mais o redirect sozinha.
export const CHECKOUT_URL_VSL =
  "https://payfast.greenn.com.br/e3ebqum/offer/onyiLO?ch_id=138907&b_id_1=qzfx7a5&b_offer_1=HtIovc&b_id_2=h76t5zq&b_offer_2=voS1Tu";
// Checkout da VSL v05 (teste de preço: R$ 197 ou 12x R$ 20,25 — Greenn).
// Link direto da oferta SsCtlg, como veio do Vinícius em 21/09/2026, sem
// order bumps na URL. Se a oferta mudar na Greenn, atualizar aqui.
export const CHECKOUT_URL_VSL_197 = "https://payfast.greenn.com.br/e3ebqum/offer/SsCtlg";
// Redirect antigo da VSL, guardado só pra referência.
export const CHECKOUT_REDIRECT_VSL = "https://payfast.greenn.com.br/redirect/299928";
// Checkout das variantes -a e -f (Greenn).
export const CHECKOUT_URL_AF = "https://payfast.greenn.com.br/redirect/286034";
export const OFFER_ANCHOR = "#oferta";
