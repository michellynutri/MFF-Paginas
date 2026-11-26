// Envio do estado do quiz para o banco (via n8n). Corpo JSON como text/plain: não dispara preflight de CORS e
// funciona com sendBeacon quando a aba some. Nome e e-mail só vão depois do aceite (tela 27).
import type { Respostas } from "./tipos";
import { COLETA_URL, VERSAO_QUIZ } from "./config";

const CHAVE_ORIGEM = "quiz-mia:origem";
const PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "utm_id", "src", "sck", "fbclid"];

const cookie = (n: string) => document.cookie.match(new RegExp("(?:^|; )" + n + "=([^;]*)"))?.[1];

/** origem da visita (primeiro toque na aba): UTMs, cookies da Meta, página de entrada */
function origem(): Record<string, string> {
  try {
    const salvo = sessionStorage.getItem(CHAVE_ORIGEM);
    if (salvo) return { ...JSON.parse(salvo), fbp: cookie("_fbp") || "", fbc: cookie("_fbc") || "" };
  } catch { /* segue */ }
  const q = new URLSearchParams(window.location.search);
  const o: Record<string, string> = { landing: window.location.pathname + window.location.search, referrer: document.referrer };
  PARAMS.forEach((k) => { const v = q.get(k); if (v) o[k] = v; });
  try { sessionStorage.setItem(CHAVE_ORIGEM, JSON.stringify(o)); } catch { /* modo anônimo */ }
  return { ...o, fbp: cookie("_fbp") || "", fbc: cookie("_fbc") || "" };
}

const teste = () => {
  const h = window.location.hostname;
  return h === "localhost" || h === "127.0.0.1" || h.endsWith(".vercel.app") || new URLSearchParams(window.location.search).has("teste");
};

export function enviaQuiz(
  evento: "marco" | "saida" | "checkout",
  d: { sid: string; tela: string; passo: number; r: Respostas; promo?: boolean },
) {
  if (!COLETA_URL || !d.sid) return;
  const { nome, email, aceite, ...respostas } = d.r;
  const comLead = aceite && !!email;
  const corpo = JSON.stringify({
    id: d.sid, evento, tela: d.tela, passo: d.passo, versao: VERSAO_QUIZ, teste: teste(),
    respostas, aceite: comLead, ...(comLead ? { nome, email: email.trim() } : {}),
    plano: d.r.plano, promo: d.promo, origem: origem(),
  });
  try {
    if (evento === "saida" && navigator.sendBeacon) {
      navigator.sendBeacon(COLETA_URL, new Blob([corpo], { type: "text/plain;charset=UTF-8" }));
      return;
    }
    fetch(COLETA_URL, { method: "POST", body: corpo, keepalive: true, headers: { "Content-Type": "text/plain;charset=UTF-8" } }).catch(() => {});
  } catch { /* coleta nunca trava o quiz */ }
}

export const novoSid = () =>
  typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) => (+c ^ (Math.random() * 16) >> (+c / 4)).toString(16));
