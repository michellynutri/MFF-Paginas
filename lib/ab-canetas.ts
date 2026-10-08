// Config compartilhada do teste A/B/C da /sos-canetas.
// Usada pelo middleware (que grava o cookie de "memória" ao abrir uma variante)
// e pela rota /canetas (bio + ManyChat, que lê o cookie pra devolver a pessoa
// à última variante que ela viu). Manter num só lugar evita que o nome do
// cookie/variantes saia de sincronia entre os dois arquivos.

export const SOS_VARIANTS = ["a", "f", "vsl"] as const;
export type SosVariant = (typeof SOS_VARIANTS)[number];

export const SOS_COOKIE = "sos_canetas_variante";
export const SOS_COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 dias

export function isSosVariant(
  value: string | undefined | null,
): value is SosVariant {
  return !!value && (SOS_VARIANTS as readonly string[]).includes(value);
}

// Desde 23/09/2026 a A e a F estão fora de todo sorteio: /sos-canetas e
// /canetas mandam todo mundo pra VSL v03. A lista acima só serve pro
// middleware continuar carimbando quem abrir uma dessas rotas direto.

// --- Teste 50/50 dentro da variante "vsl" ----------------------------------
// /sos-canetas-vsl não renderiza mais página nenhuma: é só um sorteador que
// divide o tráfego entre as versões listadas abaixo (v03 = página original,
// hoje a única no sorteio).
// O middleware carimba qual saiu no cookie abaixo, e o sorteador respeita
// esse cookie nas visitas seguintes — assim ninguém troca de VSL no meio do
// teste (e o /canetas, que promete devolver "a MESMA página", cumpre a
// promessa até a versão).
//
// Tirar/pôr versão aqui é o que liga e desliga cada uma: quem tiver no cookie
// uma versão que saiu da lista cai de novo no sorteio na visita seguinte.
// Mexeu aqui, mexa também no matcher do middleware.
// Rodada 2 (07/08/2026): v02 saiu por ter performado pior; entrou a v04.
// Rodada 3 (17/08/2026): v04 saiu do sorteio; ficaram v01 e v03 em 50/50.
// Rodada 4 (24/08/2026): a v01 sai; fica só a v03. Com uma versão só na lista,
// o sorteador virou redirecionador e todo o tráfego foi pra v03.
// Rodada 5 (25/08/2026): a v01 volta ao sorteio contra a v03, em 50/50, agora
// com hero reescrito — headline nova ("sem subir nem um miligrama da dose"),
// sub que apresenta as 7 proteções e comando de play colado no player. O que
// está sendo testado é a dobra: o resto da página é o mesmo nas duas.
// Rodada 6 (27/08/2026): a v03 sai do sorteio; fica só a v01. Com uma versão
// só na lista, o sorteador virou redirecionador e todo o tráfego vai pra v01 —
// não é mais um A/B, é uma troca de página, e o resultado da v01 se compara
// contra o histórico da v03, não contra ela no mesmo tráfego.
// Rodada 7 (27/08/2026): a v01 sai do roteamento no mesmo dia; a v03 volta e
// fica sozinha na lista, recebendo 100% do tráfego. De novo não é A/B: é
// voltar pra página que rodava antes.
// Rodada 8 (03/09/2026): teste de quatro células, um quarto do tráfego pra
// cada (o sorteio é uniforme sobre o array). Três copies novas, cada uma num
// formato de dobra diferente, contra a página que já rodava:
//   v01 = alerta/revelação em editorial alinhado à esquerda (sans bold)
//   v02 = o músculo invisível em fundo escuro com realce em cor
//   v04 = o dia de parar na serif da marca com realce em cor
//   v03 = controle — a página original, sem uma vírgula mudada, e a única
//         com histórico longo. Fica no sorteio pra que as três novas sejam
//         medidas contra ela no mesmo tráfego e no mesmo período, e não
//         contra o histórico dela.
// O resto da página é idêntico nas quatro, então o que está em teste é só a
// dobra.
// Rodada 9 (10/09/2026): a v01 sai do sorteio. Ficam v02, v03 (controle) e
// v04, um terço do tráfego pra cada. A página da v01 continua de pé na rota
// dela, só não recebe mais tráfego; quem tiver v01 no cookie cai de novo no
// sorteio na visita seguinte.
// Rodada 10 (16/09/2026): a v02 sai do sorteio. Ficam v03 (controle) e v04,
// metade do tráfego pra cada. A página da v02 continua de pé na rota dela, só
// não recebe tráfego; quem tiver v02 no cookie cai de novo no sorteio na
// visita seguinte. A v03 ganhou uma cópia sem delay em /sos-canetas-bio
// (link da bio), fora do sorteio.
// Rodada 11 (17/09/2026): a v04 sai do sorteio. Fica só a v03 — todo o
// tráfego da /sos-canetas-vsl vai pra ela. A página da v04 continua de pé na
// rota dela, só não recebe tráfego; quem tiver v04 no cookie cai na v03 na
// visita seguinte.

export const SOS_VSL_VERSIONS = ["v03"] as const;
export type SosVslVersion = (typeof SOS_VSL_VERSIONS)[number];

export const SOS_VSL_COOKIE = "sos_canetas_vsl_versao";

export function isSosVslVersion(
  value: string | undefined | null,
): value is SosVslVersion {
  return !!value && (SOS_VSL_VERSIONS as readonly string[]).includes(value);
}

export function randomSosVslVersion(): SosVslVersion {
  return SOS_VSL_VERSIONS[Math.floor(Math.random() * SOS_VSL_VERSIONS.length)];
}

// --- Teste 50/50 da /canetas-do-jeito-certo --------------------------------
// Mesma mecânica do teste da VSL, uma página diferente: a rota
// /canetas-do-jeito-certo não renderiza mais nada, é só o sorteador que divide
// o tráfego entre as variantes abaixo. A página que morava lá virou a "a",
// sem uma vírgula mudada — é o controle do teste.
//
// O middleware carimba a variante sorteada no cookie abaixo, e o sorteador
// respeita esse cookie nas visitas seguintes: ninguém troca de página no meio
// do teste (a pessoa que voltar pelo link da bio ou por um retargeting vê a
// mesma coisa que viu antes, e o número da conversão não se contamina).
//
// Tirar/pôr variante aqui é o que liga e desliga cada uma: quem tiver no
// cookie uma variante que saiu da lista cai de novo no sorteio na visita
// seguinte. Mexeu aqui, mexa também no matcher do middleware.
//
// Rodada 1 (23/08/2026): "a" (página original) contra "b" (copy v2 — entrada
// por desejo, mecanismo em bloco único, âncora de R$ 358 e FAQ).
// Rodada 2 (23/08/2026): entra a "c" (copy v4 — sequência de venda longa em
// 17 seções, fundo branco). O tráfego passa a se dividir em três, o que dá
// um terço do volume para cada e estica o tempo até o resultado ter sinal.
// Rodada 3 (24/08/2026): a, b e c saem do sorteio — nenhuma das três converteu
// o suficiente pra justificar continuar dividindo volume com elas. Entra a "d"
// (copy v5, eixo prático: promete um entregável em vez de um diagnóstico, e o
// currículo do workshop é o centro da página) recebendo 100% do tráfego.
// Não é um A/B: é uma troca de página. Enquanto esta lista tiver um item só,
// o sorteador vira redirecionador e o resultado da "d" não tem controle
// concorrente — a comparação possível é contra o histórico das outras três.
// Para voltar a testar duas, basta pôr a concorrente de volta na lista (a "c"
// é a comparação natural: mesma paleta, eixo oposto). As páginas da a, b e c
// continuam de pé nas rotas delas, só não recebem mais tráfego do sorteio, e
// quem tiver uma delas no cookie cai de novo no sorteio na visita seguinte.
// Rodada 4 (26/08/2026): a "a" (página original, o controle) volta ao sorteio
// contra a "d", em 50/50. A "d" rodou dois dias sem concorrente, então o que
// se compara agora é ela contra o controle no mesmo tráfego, e não contra o
// histórico. A "b" e a "c" seguem de pé nas rotas delas, fora do sorteio.

export const CJC_VARIANTS = ["a", "d"] as const;
export type CjcVariant = (typeof CJC_VARIANTS)[number];

export const CJC_COOKIE = "cjc_variante";

export function isCjcVariant(
  value: string | undefined | null,
): value is CjcVariant {
  return !!value && (CJC_VARIANTS as readonly string[]).includes(value);
}

export function randomCjcVariant(): CjcVariant {
  return CJC_VARIANTS[Math.floor(Math.random() * CJC_VARIANTS.length)];
}

// --- Teste A/B/C de headline da /mmf-vsl -----------------------------------
// Mesma mecânica da VSL do SOS, só que a página é uma rota só: o que muda é
// a dobra, escolhida por ?h=1|2|3. O middleware faz as duas coisas:
//  - /mmf-vsl sem ?h= (o link divulgado): devolve a headline que a pessoa já
//    viu (cookie abaixo) ou sorteia uma entre MMF_VSL_HEADLINES e redireciona
//    pra /mmf-vsl?h=N&variante=mmf-vsl-hN, mantendo as UTMs.
//  - /mmf-vsl?h=N sem a variante certa (link direto de anúncio): completa a
//    variante na URL, que é de onde pixel/GA/UTMify leem a variação.
// E carimba a headline vista, pra ninguém trocar de dobra no meio do teste.
// Um ?h= explícito é sempre respeitado, esteja ou não no sorteio.
// Tirar/pôr headline aqui é o que liga e desliga cada uma no sorteio.
// Rodada 1 (28/09/2026): h1, h2 e h3, um terço do tráfego pra cada.
// 08/10/2026: só a h3, a pedido do Vinícius. Ela também é a única válida,
// então ?h=1|2 e cookies antigos de h1/h2 caem na h3 (mantendo as UTMs).
// Pra religar outra headline, pôr de volta nas duas listas.

export const MMF_VSL_HEADLINES = ["3"] as const;
export type MmfVslHeadline = (typeof MMF_VSL_HEADLINES)[number];

/** Todas as que a página sabe renderizar (sorteio ou link direto). */
export const MMF_VSL_HEADLINES_VALIDAS = ["3"] as const;

export const MMF_VSL_COOKIE = "mmf_vsl_headline";

export function isMmfVslHeadlineValida(
  value: string | undefined | null,
): value is (typeof MMF_VSL_HEADLINES_VALIDAS)[number] {
  return !!value && (MMF_VSL_HEADLINES_VALIDAS as readonly string[]).includes(value);
}

export function isMmfVslHeadlineNoSorteio(
  value: string | undefined | null,
): value is MmfVslHeadline {
  return !!value && (MMF_VSL_HEADLINES as readonly string[]).includes(value);
}

export function randomMmfVslHeadline(): MmfVslHeadline {
  return MMF_VSL_HEADLINES[Math.floor(Math.random() * MMF_VSL_HEADLINES.length)];
}
