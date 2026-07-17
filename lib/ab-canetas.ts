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
