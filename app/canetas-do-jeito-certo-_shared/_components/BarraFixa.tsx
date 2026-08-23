"use client";

import { useEffect, useState } from "react";
import { Cta } from "./Cta";
import { PRECO } from "./constants";

/**
 * Barra de conversão fixa no rodapé, só no mobile. Aparece depois que a pessoa
 * passa do hero — antes disso o CTA do próprio hero já está na tela.
 *
 * O valor riscado vem por prop porque cada variante do teste A/B tem o seu
 * stack, e com ele uma âncora diferente.
 */
export function BarraFixa({ precoDe }: { precoDe: string }) {
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
      // inert, e não aria-hidden: a barra escondida continua com um <a>
      // focável dentro, e aria-hidden sobre elemento focável é violação
      // de acessibilidade (axe: aria-hidden-focus). inert tira os dois.
      inert={!visivel}
    >
      <div className="flex items-center gap-3">
        <div className="min-w-0 flex-1">
          <div className="font-sans text-[14px] font-semibold text-cjc-texto">
            Ingresso <span className="sr-only">de</span>
            <span className="font-normal line-through text-cjc-texto-fraco">
              {precoDe}
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
