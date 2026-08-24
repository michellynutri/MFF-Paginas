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

export function randomSosVariant(): SosVariant {
  return SOS_VARIANTS[Math.floor(Math.random() * SOS_VARIANTS.length)];
}

// --- Teste 50/50 dentro da variante "vsl" ----------------------------------
// /sos-canetas-vsl não renderiza mais página nenhuma: é só um sorteador que
// divide o tráfego entre as versões listadas abaixo (v03 = página original).
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
// o sorteador vira redirecionador — não há mais teste rodando aqui, e todo o
// tráfego da campanha da VSL vai pra /sos-canetas-vsl-v03. Quem tiver v01 no
// cookie é re-sorteado na visita seguinte e cai na v03.
// As páginas da v01, da v02 e da v04 continuam de pé em /sos-canetas-vsl-v01,
// /sos-canetas-vsl-v02 e /sos-canetas-vsl-v04, só não recebem mais tráfego do
// sorteio. Pra voltar a testar, é só devolver uma delas à lista abaixo e ao
// matcher do middleware.

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

export const CJC_VARIANTS = ["d"] as const;
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
