"use client";

import { useEffect, useRef, useState } from "react";
import { Cta } from "./Cta";
import { PRECO } from "./constants";

// Barra de compra fixa no rodapé, só no celular. No celular o vídeo 9:16
// ocupa a dobra inteira: quando o pitch libera a página, o botão abaixo do
// vídeo fica fora da tela e nada muda no que a pessoa vê. A barra sobe no
// mesmo segundo (é um .vsl-oculto, a Vturb revela junto com o resto) e some
// enquanto outro botão da página estiver na tela.
export function BarraPitch({ variante }: { variante: string }) {
  const barra = useRef<HTMLDivElement>(null);
  const [outroCtaNaTela, setOutroCtaNaTela] = useState(false);

  useEffect(() => {
    const visiveis = new Set<Element>();
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) visiveis.add(e.target);
        else visiveis.delete(e.target);
      }
      setOutroCtaNaTela(visiveis.size > 0);
    });
    document.querySelectorAll("[data-cta]").forEach((el) => {
      if (!barra.current?.contains(el)) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    /* A Vturb troca o display do .vsl-oculto (vira block): o fixed (e o md:hidden)
       ficam no div de dentro, com a animação de entrada; o de dentro dele desce
       quando outro botão está na tela (transform separado da animação). */
    <div className="vsl-oculto">
      {/* espaço no fim da página pra barra não cobrir o rodapé */}
      <div className="h-[100px] md:hidden" aria-hidden />
      <div className="barra-pitch fixed inset-x-0 bottom-0 z-50 pointer-events-none md:hidden">
        <div
          ref={barra}
          aria-hidden={outroCtaNaTela}
          className={`bg-creme/95 backdrop-blur border-t border-sos-borda-dourada shadow-[0_-8px_24px_rgba(42,36,24,0.16)] px-4 pt-2.5 pb-[max(10px,env(safe-area-inset-bottom))] transition-transform duration-300 ease-out ${
            outroCtaNaTela ? "translate-y-[110%]" : "pointer-events-auto"
          }`}
        >
          <Cta variante={variante} dataCta={`mmf-barra-${variante}`} className="w-full">
            QUERO MEU ACESSO AGORA
          </Cta>
          <p className="font-sans text-[11.5px] text-marrom text-center mt-1.5">
            {PRECO.parcelas} · 7 dias de garantia
          </p>
        </div>
      </div>
      <style>{`
        @keyframes barra-pitch-sobe{from{transform:translateY(100%)}to{transform:translateY(0)}}
        .barra-pitch{animation:barra-pitch-sobe .45s cubic-bezier(.2,.8,.2,1) both}
      `}</style>
    </div>
  );
}
