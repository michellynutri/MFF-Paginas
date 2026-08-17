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
// As páginas da v02 e da v04 continuam de pé em /sos-canetas-vsl-v02 e
// /sos-canetas-vsl-v04, só não recebem mais tráfego do sorteio.

export const SOS_VSL_VERSIONS = ["v01", "v03"] as const;
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
