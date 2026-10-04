// Checkout da oferta MMF na VSL (R$ 297 ou 12x R$ 30,54 — Greenn), link direto
// da oferta 4dJmPN como veio do Vinícius em 23/09/2026. É a mesma oferta
// "MMF - 297" da /alunos-metodo-mmf e do upsell da /obg-mmf: na Greenn as
// vendas se misturam — quem veio daqui chega com ?variante=mmf-vsl-hN.
export const CHECKOUT_URL_MMF_VSL = "https://payfast.greenn.com.br/g4vfzcf/offer/4dJmPN";

// VSL no Vturb (embed recebido em 23/09/2026).
export const VTURB_VIDEO_ID: string = "6ab468bdcf36dc09b7308e7d";
export const VTURB_ACCOUNT_ID = "9209a5ac-0a42-43b5-9c1f-7d310e9d3d33";
// VSL da /mmf-bio (embed recebido em 02/10/2026): outro corte, em 3:4
// (o placeholder do embed tem padding 133,33%), sem delay.
export const VTURB_VIDEO_BIO = { id: "6abadce08a2b95e5b4ad932f", aspecto: "3:4" } as const;
// Segundo do pitch: tudo abaixo da VSL abre quando a Michelly manda clicar
// ("Então, é só clicar no botão e ir para a página de pagamento segura"),
// 1 s antes do "clicar" pra o botão já estar lá. Antes (23/09–02/10) abria
// no "297", 40 s mais cedo; o Vinícius pediu o botão em 02/10/2026.
// O Vturb conta a posição do vídeo (currentTime), não o relógio, e a VSL 9:16
// roda em turbo 1.1x: o "clicar" está em 1161,1 s do arquivo (17:35 de relógio).
// Regra: segundos = tempo de relógio em 1.1x × 1.1. 0 = nada fica escondido.
export const PITCH_SECONDS: number = 1160;

// Teste A/B da Vturb na /mmf-vsl (embed recebido em 02/10/2026). DESLIGADO
// em 04/10/2026 a pedido do Vinícius: a página voltou ao vídeo 9:16 fixo
// (VTURB_VIDEO_ID). Fica aqui pra religar (ver app/mmf-vsl/[h]/page.tsx).
// Como funciona: a Vturb
// sorteia um dos vídeos abaixo por peso e guarda a escolha 7 dias no
// localStorage. Cada vídeo é outro arquivo (lead diferente, mesmo corpo),
// então o segundo do pitch muda — medido com whisper em 02/10: pitch = 1 s
// antes do "clicar" de "é só clicar no botão e ir para a página de pagamento
// segura", que em todos cai 90,3 s antes do fim (o "297" vem 40 s antes).
// O 9:16 é o MESMO arquivo da VSL antiga (6ab46080…, turbo 1.1x); os 3:4
// rodam em 1x. Vídeo fora da lista: proporção vem da config do player e o
// pitch usa PITCH_SECONDS_AB_PADRAO.
export const VTURB_AB_MMF_VSL = {
  abTest: "6abb8108139de0738368c6dc",
  variantes: {
    "6ac0285d965fbdd35490c96a": { nome: "Lead-01 (cópia, 9:16)", aspecto: "9:16", pitch: 1160 },
    "6abae7cc5f99ef73c24b871f": { nome: "Lead-02 3:4", aspecto: "3:4", pitch: 1130 },
    "6abafe8c947a62978aef2677": { nome: "Lead-03 3:4", aspecto: "3:4", pitch: 1119 },
    "6abb10f2f94ad8ef574942fa": { nome: "Lead-04 3:4", aspecto: "3:4", pitch: 1114 },
    "6abb08e577ab3553dc5700b8": { nome: "Lead-05 3:4", aspecto: "3:4", pitch: 1117 },
    "6abb17c3f94ad8ef57494864": { nome: "Lead-06 3:4", aspecto: "3:4", pitch: 1117 },
  },
} as const;
// Menor pitch conhecido: vídeo desconhecido abre cedo, nunca tarde.
export const PITCH_SECONDS_AB_PADRAO = 1114;

export const PRECO = {
  // Valor da parcela como a Greenn cobra no checkout (juros do 12x).
  parcela: "R$ 30,54",
  parcelas: "12x de R$ 30,54",
  avista: "R$ 297",
};
