"use client";

import { useEffect, useState } from "react";

// Bônus-relâmpago da v05: fica disponível por 5 minutos a partir do momento
// em que a oferta aparece na tela (a seção fica escondida até o vídeo chegar
// em 10:08). O início é guardado no localStorage pra recarregar a página não
// zerar o relógio. Ao zerar, o cartão fica marcado como encerrado.
const DURACAO_MS = 5 * 60 * 1000;
const STORAGE_KEY = "sos-vsl-v05-bonus-glp1-inicio";

const beneficios = [
  "Os suplementos essenciais que ninguém pode pular",
  "As opções estratégicas para potencializar resultados — de saúde ovariana a rendimento nos treinos",
  "Soluções específicas pra digestão pesada, TPM, sono ruim, cabelo e pele",
  "Marcas de confiança já testadas e aprovadas",
  "Como saber se você realmente precisa de determinado nutriente (e evitar gasto desnecessário)",
];

function lerInicio(): number | null {
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    return v ? Number(v) : null;
  } catch {
    return null;
  }
}

function gravarInicio(t: number) {
  try {
    window.localStorage.setItem(STORAGE_KEY, String(t));
  } catch {
    // navegador sem storage: o relógio vive só nesta visita
  }
}

function formatar(ms: number) {
  const s = Math.max(0, Math.ceil(ms / 1000));
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${String(m).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
}

export function BonusRelampago({ valor = "R$ 97" }: { valor?: string }) {
  // null = ainda não começou (oferta escondida); número = ms restantes
  const [restante, setRestante] = useState<number | null>(null);

  useEffect(() => {
    const el = document.getElementById("bonus-relampago");
    if (!el) return;
    let timer: number | undefined;

    const iniciar = () => {
      let inicio = lerInicio();
      if (!inicio) {
        inicio = Date.now();
        gravarInicio(inicio);
      }
      const tick = () => {
        const r = inicio! + DURACAO_MS - Date.now();
        setRestante(r > 0 ? r : 0);
        if (r <= 0 && timer) window.clearInterval(timer);
      };
      tick();
      timer = window.setInterval(tick, 250);
    };

    // Já começou numa visita anterior: retoma na hora.
    if (lerInicio()) {
      iniciar();
      return () => {
        if (timer) window.clearInterval(timer);
      };
    }

    // Senão, espera o cartão ficar visível (a seção sai do display:none
    // quando o player libera a oferta e a pessoa rola até aqui).
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          io.disconnect();
          iniciar();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (timer) window.clearInterval(timer);
    };
  }, []);

  const encerrado = restante === 0;
  const urgente = restante !== null && restante > 0 && restante <= 60_000;

  return (
    <div
      id="bonus-relampago"
      aria-live="polite"
      className={`relative rounded-2xl p-5 md:p-7 border-2 transition-opacity ${
        encerrado
          ? "border-sos-borda-dourada bg-sos-creme-soft opacity-60"
          : "border-sos-terracota bg-[#FDF3EE] shadow-[0_12px_40px_rgba(197,107,74,0.18)]"
      }`}
    >
      {/* Faixa do relógio */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <span
          className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-sans text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.14em] ${
            encerrado ? "bg-marrom/20 text-marrom" : "bg-sos-terracota text-creme"
          }`}
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" strokeLinejoin="round" />
          </svg>
          {encerrado ? "Bônus encerrado" : "Bônus-relâmpago · só pelos próximos 5 minutos"}
        </span>

        <span
          className={`font-serif tabular-nums text-[30px] md:text-[36px] leading-none ${
            encerrado ? "text-marrom" : urgente ? "text-sos-terracota" : "text-texto"
          }`}
          aria-label="tempo restante"
        >
          {restante === null ? "05:00" : formatar(restante)}
        </span>
      </div>

      <div className="grid grid-cols-[48px_1fr] md:grid-cols-[56px_1fr_auto] gap-4 md:gap-5 items-start">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-sos-terracota flex items-center justify-center text-creme">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            aria-hidden="true"
          >
            <rect x="7" y="3" width="10" height="18" rx="5" />
            <path d="M7 12h10" strokeLinecap="round" />
          </svg>
        </div>

        <div className="min-w-0">
          <div className="font-sans text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.14em] text-sos-terracota mb-1">
            Bônus — Suplementação GLP-1
          </div>
          <div className="font-serif text-[21px] md:text-[26px] font-medium text-texto leading-tight mb-3">
            Guia Completo de Suplementação em Análogos de GLP-1
          </div>
          <ul className="space-y-2">
            {beneficios.map((b) => (
              <li
                key={b}
                className="flex gap-2.5 font-sans text-[14px] md:text-[15px] text-texto leading-[1.5]"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  className="text-sos-terracota shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  <path d="M5 12l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <p className="font-sans text-[13px] text-marrom mt-4">
            {encerrado
              ? "O tempo deste bônus acabou. Os demais bônus continuam garantidos."
              : "Garanta o acesso antes do relógio zerar e o guia entra junto com o Manual, sem custo."}
          </p>
        </div>

        <div className="col-start-2 md:col-start-3 md:row-start-1 flex md:flex-col items-center md:items-end gap-2 md:gap-1 md:pt-1">
          <span className="font-sans text-[14px] md:text-[16px] font-medium line-through text-marrom whitespace-nowrap">
            {valor}
          </span>
          {!encerrado && (
            <span className="bg-sos-terracota text-creme text-[10px] font-sans font-semibold uppercase tracking-[0.1em] px-2 py-1 rounded">
              Grátis agora
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
