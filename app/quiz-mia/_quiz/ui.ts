// Pequenos ajudantes usados pelas telas.
import type { CSSProperties } from "react";
import type { Quiz, Status } from "./tipos";

/** junta classes, ignorando falsos */
export const cx = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(" ");

/** cores dos três pontos de "alertas" no topo (mesmas do Stitch) */
export const COR_STATUS: Record<Status, string> = {
  grave: "#A1312A",
  atencao: "#D9A441",
  ok: "#2F6B45",
  "?": "#DDE3DA",
};

const ORDEM_PONTOS = ["01", "02", "03", "04", "05", "06", "07a", "07b", "08", "09", "10", "11", "12", "13"];
/**
 * Cor de cada um dos três pontos (músculo, fome oculta, AFLs), como no Stitch: o do músculo acende assim que
 * ela responde o teste do braço (07b); o da fome oculta depois da tela 09; o dos AFLs depois da tela 12.
 */
export function pontos(q: Quiz): [CSSProperties, CSSProperties, CSSProperties] {
  const { r, alertas } = q;
  const i = ORDEM_PONTOS.indexOf(q.tela);
  const depois = (cod: string) => i < 0 || i > ORDEM_PONTOS.indexOf(cod);
  const visivel = [r.braco !== undefined, depois("09"), depois("12")];
  return alertas.map((a, i) => ({ backgroundColor: COR_STATUS[visivel[i] ? a.status : "?"] })) as [
    CSSProperties,
    CSSProperties,
    CSSProperties,
  ];
}

/** primeiro nome com inicial maiúscula ("ana maria" → "Ana") */
export const primeiroNome = (nome: string) => {
  const n = (nome || "").trim().split(/\s+/)[0] || "";
  return n ? n[0].toLocaleUpperCase("pt-BR") + n.slice(1) : "";
};
