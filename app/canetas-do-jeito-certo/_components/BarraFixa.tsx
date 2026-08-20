"use client";

import { useEffect, useState } from "react";
import { Cta } from "./Cta";
import { PRECO, PRECO_DE } from "./constants";

/**
 * Barra de conversão fixa no rodapé, só no mobile. Aparece depois que a pessoa
 * passa do hero — antes disso o CTA do próprio hero já está na tela.
 */
export function BarraFixa() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisivel(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed bottom-0 inset-x-0 z-50 border-t border-cjc-linha bg-cjc-noite-esc/95 backdrop-blur-sm px-4 py-3 transition-transform duration-300 ${
        visivel ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visivel}
    >
      <div className="flex items-center gap-3">
        <div className="min-w-0 flex-1">
          <div className="font-sans text-[14px] font-semibold text-cjc-texto">
            Ingresso <span className="sr-only">de</span>
            <span className="font-normal line-through text-cjc-texto-fraco">
              {PRECO_DE}
            </span>{" "}
            <span className="sr-only">por</span>
            <span className="text-cjc-menta">{PRECO}</span>
          </div>
        </div>
        <Cta
          dataCta="cjc-barra-fixa"
          className={`!px-5 !py-3.5 !text-[13px] shrink-0 ${
            visivel ? "" : "pointer-events-none"
          }`}
        >
          QUERO MINHA VAGA
        </Cta>
      </div>
    </div>
  );
}
