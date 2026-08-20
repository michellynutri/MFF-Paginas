"use client";

import { useEffect, useState } from "react";
import { partesRestantes, proximaQuinta } from "./sessao";

type Props = {
  /**
   * Contagem já calculada no servidor. Vem por prop (e não de um Date.now()
   * daqui) porque o primeiro render do cliente precisa bater byte a byte com
   * o HTML — senão o React reclama da hidratação.
   */
  inicial: readonly string[];
  /** "linha" = inline no hero · "bloco" = caixas grandes na oferta */
  formato?: "linha" | "bloco";
  className?: string;
};

const rotulos = ["dias", "horas", "min", "seg"];

export function Cronometro({
  inicial,
  formato = "linha",
  className = "",
}: Props) {
  // Os números já vêm prontos no HTML: este é o elemento de LCP do hero no
  // mobile, e esperar a hidratação pra pintá-lo custava segundos.
  const [valores, setValores] = useState<readonly string[]>(inicial);

  useEffect(() => {
    // Recalcula o alvo a cada tick: quando a sessão de quinta passa das 20h,
    // o cronômetro vira sozinho pra edição da semana seguinte.
    const tick = () => setValores(partesRestantes(proximaQuinta()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (formato === "linha") {
    return (
      <div
        className={`inline-flex items-center gap-2.5 ${className}`}
        aria-label="Tempo restante para a próxima sessão"
      >
        <span
          className="w-1.5 h-1.5 rounded-full bg-cjc-ambar animate-pulse"
          aria-hidden="true"
        />
        <span className="font-sans text-[12px] uppercase tracking-[0.14em] text-cjc-texto-fraco">
          Começa em
        </span>
        <span className="font-sans font-semibold text-[15px] text-cjc-ambar tabular-nums tracking-wide">
          {valores[0]}d {valores[1]}h {valores[2]}m {valores[3]}s
        </span>
      </div>
    );
  }

  return (
    <div
      className={`flex items-stretch justify-center gap-2 md:gap-3 ${className}`}
      aria-label="Tempo restante para a próxima sessão"
    >
      {valores.map((valor, i) => (
        <div
          key={rotulos[i]}
          className="flex-1 max-w-[86px] rounded-xl border border-cjc-ambar/25 bg-cjc-ambar/[0.07] py-3 md:py-4"
        >
          <div className="font-cjc-display text-[26px] md:text-[34px] leading-none font-semibold text-cjc-ambar tabular-nums">
            {valor}
          </div>
          <div className="font-sans text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-cjc-texto-fraco mt-1.5">
            {rotulos[i]}
          </div>
        </div>
      ))}
    </div>
  );
}
