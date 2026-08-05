import Script from "next/script";
import { Cta } from "../../sos-canetas-_shared/_components/Cta";
import { Leaf } from "../../sos-canetas-_shared/_components/Leaf";

type HeroVslProps = {
  variant: string;
};

export function HeroVsl({ variant }: HeroVslProps) {
  return (
    <section className="bg-creme relative overflow-hidden">
      <Leaf
        className="top-[40px] left-[-70px] w-[240px] h-[240px] md:w-[300px] md:h-[300px]"
        opacity={0.1}
        rotation={-15}
      />
      <Leaf
        className="top-[220px] right-[-70px] w-[220px] h-[220px] md:w-[280px] md:h-[280px]"
        opacity={0.1}
        rotation={160}
      />

      {/* PRIMEIRA DOBRA — pill, headline, subheadline e vídeo cabem inteiros
          em 100svh (svh = altura com a barra do navegador visível), pra
          ninguém precisar rolar até o player no mobile. O vídeo é
          dimensionado pela altura que sobra: ver .vsl-player no <style>. */}
      <div className="max-w-[1180px] mx-auto relative min-h-[100svh] flex flex-col px-5 md:px-20 py-4 md:py-8">
        {/* Header pill */}
        <div className="shrink-0 flex justify-center mb-3 md:mb-6">
          <div className="inline-flex items-center justify-center gap-2 md:gap-3 rounded-full border border-sos-dourado/40 bg-gradient-to-b from-sos-creme-soft to-[#F3E9D6] py-1.5 px-4 md:py-2.5 md:px-7 shadow-[0_4px_16px_rgba(184,151,90,0.18)]">
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-sos-dourado shrink-0"
              aria-hidden="true"
            >
              <path d="M12 2l2.2 5.6L20 9l-4.6 3.4L17 18l-5-3.2L7 18l1.6-5.6L4 9l5.8-1.4z" />
            </svg>
            <span className="font-sans font-semibold text-[9.5px] md:text-[12px] uppercase tracking-[0.12em] md:tracking-[0.16em] text-sos-dourado-esc text-center">
              Para os primeiros meses de Ozempic, Mounjaro ou canetas similares
            </span>
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-sos-dourado shrink-0"
              aria-hidden="true"
            >
              <path d="M12 2l2.2 5.6L20 9l-4.6 3.4L17 18l-5-3.2L7 18l1.6-5.6L4 9l5.8-1.4z" />
            </svg>
          </div>
        </div>

        {/* Conteúdo centrado — layout VSL */}
        <div className="shrink-0 max-w-[860px] w-full mx-auto text-center animate-fade-up">
          <h1 className="font-serif text-[clamp(23px,5.9vw,28px)] md:text-[48px] leading-[1.12] md:leading-[1.06] font-medium text-texto mb-2.5 md:mb-5">
            Existe uma forma de emagrecer mais com a caneta,{" "}
            <em className="italic">sem aumentar a dose</em>.
            <br className="hidden md:block" /> Assista esse vídeo para entender
            como.
          </h1>

          <p className="font-sans text-[clamp(13px,3.5vw,15.5px)] md:text-[19px] leading-[1.42] md:leading-[1.5] text-marrom max-w-[680px] mx-auto">
            O protocolo que a maioria das mulheres que usam GLP-1 ainda não
            conhece — e que faz toda a diferença no resultado final. Em poucos
            minutos, a Dra. Michelly Fanelli explica tudo.
          </p>
        </div>

        {/* PLAYER VSL — Vturb (Converteai). Vídeo vertical 9:16, dimensionado
            pela altura que sobra da dobra (a largura deriva do 9:16). */}
        <div className="vsl-stage mt-3 md:mt-5">
          <div className="vsl-player rounded-2xl overflow-hidden shadow-[0_16px_50px_rgba(42,36,24,0.22)] border border-sos-borda-dourada bg-verde-esc">
            {/* @ts-expect-error — custom element do Vturb */}
            <vturb-smartplayer
              id="vid-6a4ff72c245f4ba270b2409b"
              style={{ display: "block", width: "100%", height: "100%" }}
            >
              {/* Segura o fundo preto até o script fazer o upgrade do
                  elemento e remover o placeholder. */}
              <div
                className="vturb-player-placeholder"
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 0,
                  backgroundColor: "black",
                }}
              />
            </vturb-smartplayer>
          </div>
        </div>
      </div>

      {/* CTA + garantia — fica fora da primeira dobra e só aparece quando o
          vídeo atinge 10:08 (608s). */}
      <div className="vsl-oculto max-w-[860px] mx-auto text-center px-5 md:px-20 pb-10 md:pb-14">
        <Cta dataCta={`sos-hero-${variant}`}>
          QUERO QUE O MEU RESULTADO FIQUE PRA SEMPRE
        </Cta>

        <div className="flex items-center justify-center gap-2 font-sans text-[13px] text-marrom mt-6">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="text-sos-dourado-esc"
            aria-hidden="true"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" />
            <path d="M7 11V7a5 5 0 0110 0v4" strokeLinecap="round" />
          </svg>
          <span>Acesso imediato · Garantia de 7 dias</span>
        </div>
      </div>

      {/* .vsl-oculto: esconde CTA do hero e todas as seções seguintes até o
          player revelar via displayHiddenElements.
          .vsl-stage: absorve toda a altura que sobra da dobra.
          .vsl-player: posicionado em absoluto pra que height:% resolva contra
          o palco; a altura manda e o 9:16 deriva a largura. O min() impede que
          o vídeo estoure a largura da tela quando a altura é generosa
          (celular deitado, telas baixas e largas). */}
      <style>{`
        .vsl-oculto{display:none!important}
        .vsl-stage{position:relative;flex:1 1 0;min-height:0}
        .vsl-player{position:absolute;inset:0;margin:auto;width:auto;height:min(100%,calc((100vw - 2.5rem) * 1.7778));aspect-ratio:9/16}
      `}</style>

      {/* Define o custom element <vturb-smartplayer> e faz upgrade do
          elemento já presente no DOM. */}
      <Script
        id="vturb-vid-6a4ff72c245f4ba270b2409b"
        src="https://scripts.converteai.net/9209a5ac-0a42-43b5-9c1f-7d310e9d3d33/players/6a4ff72c245f4ba270b2409b/v4/player.js"
        strategy="afterInteractive"
      />

      {/* Delay de 10:08 (608s): revela os elementos .vsl-oculto quando o vídeo
          atinge esse ponto. persist mantém revelado para quem já assistiu. */}
      <Script id="vsl-delay-608" strategy="afterInteractive">
        {`
          (function () {
            var delaySeconds = 608; // 10:08 = 10*60 + 8
            var player = document.querySelector("vturb-smartplayer");
            if (!player) return;
            player.addEventListener("player:ready", function () {
              player.displayHiddenElements(delaySeconds, [".vsl-oculto"], {
                persist: true,
              });
            });
          })();
        `}
      </Script>
    </section>
  );
}
