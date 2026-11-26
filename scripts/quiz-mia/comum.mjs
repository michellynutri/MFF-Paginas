// Ajudantes usados por extrai.mjs e css.mjs.
// nome de classe num seletor, com escapes (\[, \', \2c  para vírgula…)
export const CLASSE_CSS = /\.((?:\\[0-9a-fA-F]{1,6} ?|\\.|[\w-])+)/g;
export const desescapa = (n) => n.replace(/\\([0-9a-fA-F]{1,6}) ?/g, (_, h) => String.fromCodePoint(parseInt(h, 16))).replace(/\\(.)/g, "$1");
