// Checkout da oferta MMF na VSL (R$ 297 ou 12x R$ 30,54 — Greenn), link direto
// da oferta 4dJmPN como veio do Vinícius em 23/09/2026. É a mesma oferta
// "MMF - 297" da /alunos-metodo-mmf e do upsell da /obg-mmf: na Greenn as
// vendas se misturam — quem veio daqui chega com ?variante=mmf-vsl-hN.
export const CHECKOUT_URL_MMF_VSL = "https://payfast.greenn.com.br/g4vfzcf/offer/4dJmPN";

// VSL no Vturb (embed recebido em 23/09/2026).
export const VTURB_VIDEO_ID: string = "6ab468bdcf36dc09b7308e7d";
export const VTURB_ACCOUNT_ID = "9209a5ac-0a42-43b5-9c1f-7d310e9d3d33";
// Segundo do pitch: tudo abaixo da VSL abre quando a Michelly fala "297".
// O Vturb conta a posição do vídeo (currentTime), não o relógio, e a VSL roda
// em turbo 1.1x: o "297" está em 18:41 do arquivo (1120,96s) = 16:59 de relógio.
// Regra: segundos = tempo de relógio em 1.1x × 1.1. 0 = nada fica escondido.
export const PITCH_SECONDS: number = 1121;

export const PRECO = {
  // Valor da parcela como a Greenn cobra no checkout (juros do 12x).
  parcela: "R$ 30,54",
  parcelas: "12x de R$ 30,54",
  avista: "R$ 297",
};
