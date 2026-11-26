"use client";
// Motor do /quiz-mia: ordem das telas, respostas, avanço automático, voltar, cronômetro da oferta e checkout.
// Cada tela é um componente convertido do Stitch (../_telas/T<cod>.tsx) que recebe `q`.
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { ComponentType } from "react";
import type { Quiz as QuizApi, Respostas, TelaProps } from "./tipos";
import { RESPOSTAS_INICIAIS, TELA_03, calculaAlertas } from "./regras";
import { TELAS } from "./telas";
import { CHECKOUT, PROMO_MINUTOS } from "./config";
import { enviaQuiz, novoSid } from "./coleta";

export const ORDEM = [
  "01", "02", "03", "04", "05", "06", "07a", "07b", "08", "09", "10", "11", "12", "13", "14",
  "15", "16", "17", "18", "19", "20", "21", "22a", "22b", "23", "24", "25", "26", "27", "28", "29", "30",
];
const CHAVE = "quiz-mia:v1";
const CHAVE_PROMO = "quiz-mia:promo-fim";
const SEM_VOLTAR = new Set(["01", "26", "28", "29", "30"]);

const ler = <T,>(k: string, area: "session" | "local"): T | null => {
  try {
    const s = (area === "session" ? sessionStorage : localStorage).getItem(k);
    return s ? (JSON.parse(s) as T) : null;
  } catch {
    return null;
  }
};
const gravar = (k: string, v: unknown, area: "session" | "local") => {
  try {
    (area === "session" ? sessionStorage : localStorage).setItem(k, JSON.stringify(v));
  } catch {
    /* modo anônimo: segue sem guardar */
  }
};
const evento = (dados: Record<string, unknown>) => {
  const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
  (w.dataLayer = w.dataLayer || []).push(dados);
};

export function componenteDa(cod: string, r: Respostas): ComponentType<TelaProps> {
  if (cod === "03") return TELAS[TELA_03[r.fase ?? 1]];
  if (cod === "29") return TELAS[r.raspou ? "29c" : "29a"];
  if (cod === "30") return TELAS["30a"];
  return TELAS[cod];
}

type Estado = { r: Respostas; tela: string; hist: string[]; sid?: string };

export function Quiz({ previa }: { previa?: { tela: string; r: Partial<Respostas>; promoAtiva?: boolean; extra?: string } }) {
  const [st, setSt] = useState<Estado>(() => ({
    r: { ...RESPOSTAS_INICIAIS, ...(previa ? { nome: "Ana", email: "ana@email.com" } : {}), ...(previa?.r || {}) },
    tela: previa?.tela || "01",
    hist: [],
  }));
  const [pronto, setPronto] = useState(!!previa);
  const trava = useRef(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // retoma de onde parou (mesma aba)
  useEffect(() => {
    if (previa) return;
    const salvo = ler<Estado>(CHAVE, "session");
    if (salvo && salvo.tela && ORDEM.includes(salvo.tela)) {
      // telas de passagem não são retomadas no meio
      const tela = salvo.tela === "26" ? "25" : salvo.tela === "07a" ? "07a" : salvo.tela;
      setSt({ ...salvo, r: { ...RESPOSTAS_INICIAIS, ...salvo.r }, tela, sid: salvo.sid || novoSid() });
    } else {
      setSt((s) => ({ ...s, sid: novoSid() }));
    }
    setPronto(true);
  }, [previa]);
  useEffect(() => {
    if (!previa && pronto) gravar(CHAVE, st, "session");
  }, [st, previa, pronto]);

  // cada troca de tela: topo da página, fundo da página igual ao da tela, evento
  useEffect(() => {
    if (!pronto) return;
    window.scrollTo({ top: 0, behavior: "instant" });
    trava.current = false;
    const b = document.querySelector<HTMLElement>("[data-body]");
    const fundo = b ? getComputedStyle(b).backgroundColor : "";
    if (fundo && fundo !== "rgba(0, 0, 0, 0)") {
      document.documentElement.style.backgroundColor = fundo;
      document.body.style.backgroundColor = fundo;
    }
    if (!previa) evento({ event: "quiz_tela", quiz_tela: st.tela });
  }, [st.tela, pronto, previa]);
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  const irPara = useCallback((tela: string, voltando = false) => {
    if (timer.current) clearTimeout(timer.current);
    setSt((s) => ({ ...s, tela, hist: voltando ? s.hist.slice(0, -1) : [...s.hist, s.tela] }));
  }, []);

  const proxima = useCallback(() => {
    if (previa) return;
    const i = ORDEM.indexOf(st.tela);
    if (i >= 0 && i < ORDEM.length - 1) irPara(ORDEM[i + 1]);
  }, [st.tela, irPara, previa]);

  const voltar = useCallback(() => {
    if (previa || SEM_VOLTAR.has(st.tela) || !st.hist.length) return;
    // o carregamento (26) é só passagem: voltar da 27 leva direto para a 25
    const hist = [...st.hist];
    let ant = hist.pop()!;
    while (ant === "26" && hist.length) ant = hist.pop()!;
    if (timer.current) clearTimeout(timer.current);
    setSt((s) => ({ ...s, tela: ant, hist }));
  }, [st, previa]);

  const set = useCallback((patch: Partial<Respostas>) => setSt((s) => ({ ...s, r: { ...s.r, ...patch } })), []);

  const escolhe = useCallback<QuizApi["escolhe"]>(
    (k, v, espera = 380) => {
      if (trava.current) return;
      set({ [k]: v } as Partial<Respostas>);
      if (previa) return;
      trava.current = true;
      if (typeof navigator !== "undefined" && "vibrate" in navigator) navigator.vibrate?.(8);
      timer.current = setTimeout(proxima, espera);
    },
    [set, proxima, previa],
  );

  const alterna = useCallback<QuizApi["alterna"]>((k, v, nenhum) => {
    setSt((s) => {
      const atual = new Set((s.r[k] as number[] | undefined) || []);
      if (v === nenhum) {
        const so = atual.has(v) && atual.size === 1;
        return { ...s, r: { ...s.r, [k]: so ? [] : [v] } };
      }
      if (nenhum !== undefined) atual.delete(nenhum);
      if (atual.has(v)) atual.delete(v);
      else atual.add(v);
      return { ...s, r: { ...s.r, [k]: [...atual].sort((a, b) => a - b) } };
    });
  }, []);

  // ----- cronômetro da promoção (começa na primeira vez que ela vê a oferta) -----
  const [agora, setAgora] = useState(() => Date.now());
  const [fimPromo, setFimPromo] = useState<number | null>(null);
  useEffect(() => {
    if (previa || st.tela !== "30") return;
    let fim = ler<number>(CHAVE_PROMO, "local");
    if (!fim) {
      fim = Date.now() + PROMO_MINUTOS * 60_000;
      gravar(CHAVE_PROMO, fim, "local");
    }
    setFimPromo(fim);
    const id = setInterval(() => setAgora(Date.now()), 500);
    return () => clearInterval(id);
  }, [st.tela, previa]);
  const promo = useMemo(() => {
    if (previa) return { ativa: previa.promoAtiva !== false, relogio: previa.promoAtiva === false ? "00:00" : "14:59" };
    const resta = fimPromo ? Math.max(0, fimPromo - agora) : PROMO_MINUTOS * 60_000;
    const mm = Math.floor(resta / 60_000), ss = Math.floor((resta % 60_000) / 1000);
    return { ativa: resta > 0, relogio: `${String(mm).padStart(2, "0")}:${String(ss).padStart(2, "0")}` };
  }, [previa, fimPromo, agora]);

  // ----- coleta: cada tela (alcance por tela no painel), saída da aba e checkout (nunca na prévia) -----
  const atual = useRef({ st, promo: promo.ativa });
  atual.current = { st, promo: promo.ativa };
  const envia = useCallback((evento: "marco" | "saida" | "checkout") => {
    const { st: e, promo: p } = atual.current;
    if (previa || !e.sid) return;
    enviaQuiz(evento, { sid: e.sid, tela: e.tela, passo: ORDEM.indexOf(e.tela) + 1, r: e.r, promo: e.tela === "30" ? p : undefined });
  }, [previa]);
  useEffect(() => {
    if (pronto && st.sid) envia("marco");
  }, [st.tela, st.sid, pronto, envia]);
  useEffect(() => {
    if (previa) return;
    const oculta = () => { if (document.visibilityState === "hidden") envia("saida"); };
    const fecha = () => envia("saida");
    document.addEventListener("visibilitychange", oculta);
    window.addEventListener("pagehide", fecha);
    return () => { document.removeEventListener("visibilitychange", oculta); window.removeEventListener("pagehide", fecha); };
  }, [envia, previa]);

  const comprar = useCallback(() => {
    const alvo = CHECKOUT[promo.ativa ? "promo" : "cheio"][st.r.plano];
    evento({ event: "quiz_checkout", quiz_plano: st.r.plano, quiz_promo: promo.ativa });
    envia("checkout");
    if (!alvo) {
      console.warn("[quiz-mia] link de checkout ainda não configurado para este plano", st.r.plano);
      return;
    }
    const u = new URL(alvo);
    const aqui = new URLSearchParams(window.location.search);
    aqui.forEach((v, k) => { if (k.startsWith("utm_") || k === "src" || k === "sck") u.searchParams.set(k, v); });
    // a Greenn guarda essas chaves na venda: o painel liga a compra a esta sessão do quiz (atribuição exata)
    u.searchParams.set("variante", "quiz-mia");
    if (st.sid) u.searchParams.set("quiz", st.sid);
    window.location.href = u.toString();
  }, [promo.ativa, st.r, st.sid, envia]);

  const alertas = useMemo(() => calculaAlertas(st.r), [st.r]);
  const q: QuizApi = {
    r: st.r, set, escolhe, alterna, proxima, voltar,
    podeVoltar: !previa && !SEM_VOLTAR.has(st.tela) && st.hist.length > 0,
    alertas, promo, comprar, previa: !!previa, previaExtra: previa?.extra, tela: st.tela, sid: st.sid || "",
  };

  if (!pronto) return null;
  const T = componenteDa(st.tela, st.r);
  return (
    <div key={st.tela} className="quiz-entra">
      <T q={q} />
    </div>
  );
}
