import Script from "next/script";
import { Cta } from "../../sos-canetas-_shared/_components/Cta";
import { Leaf } from "../../sos-canetas-_shared/_components/Leaf";

type HeroVslProps = {
  variant: string;
};

export function HeroVsl({ variant }: HeroVslProps) {
  return (
    <section className="bg-creme relative overflow-hidden py-6 md:py-10 px-6 md:px-20">
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

      <div className="max-w-[1180px] mx-auto relative">
        {/* Header pill */}
        <div className="flex justify-center mb-10 md:mb-14">
          <div className="inline-flex items-center justify-center gap-2.5 md:gap-3 rounded-full border border-sos-dourado/40 bg-gradient-to-b from-sos-creme-soft to-[#F3E9D6] py-2.5 px-5 md:px-7 shadow-[0_4px_16px_rgba(184,151,90,0.18)]">
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
            <span className="font-sans font-semibold text-[11px] md:text-[12px] uppercase tracking-[0.16em] text-sos-dourado-esc text-center">
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
        <div className="max-w-[860px] mx-auto text-center animate-fade-up">
          <h1 className="font-serif text-[34px] md:text-[60px] leading-[1.08] md:leading-[1.05] font-medium text-texto mb-6 md:mb-7">
            Existe uma forma de emagrecer mais com a caneta,{" "}
            <em className="italic">sem aumentar a dose</em>.
            <br className="hidden md:block" /> Assista esse vídeo para entender
            como.
          </h1>

          <p className="font-sans text-[17px] md:text-[21px] leading-[1.6] text-marrom mb-9 md:mb-10 max-w-[680px] mx-auto">
            O protocolo que a maioria das mulheres que usam GLP-1 ainda não
            conhece — e que faz toda a diferença no resultado final. Em poucos
            minutos, a Dra. Michelly Fanelli explica tudo.
          </p>
        </div>

        {/* PLAYER VSL — Vturb (Converteai). Vídeo vertical 9:16, por isso o
            container é limitado a 400px em vez do 860px das outras seções. */}
        <div className="max-w-[400px] mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-[0_16px_50px_rgba(42,36,24,0.22)] border border-sos-borda-dourada bg-verde-esc">
            {/* @ts-expect-error — custom element do Vturb */}
            <vturb-smartplayer
              id="vid-6a4ff72c245f4ba270b2409b"
              style={{ display: "block", margin: "0 auto", width: "100%" }}
            >
              {/* Reserva a altura do vídeo (177.78% = 9:16) até o script
                  fazer o upgrade do elemento e remover o placeholder. */}
              <div
                className="vturb-player-placeholder"
                style={{
                  position: "relative",
                  width: "100%",
                  padding: "177.77777777777777% 0 0",
                  zIndex: 0,
                  backgroundColor: "black",
                }}
              />
            </vturb-smartplayer>
          </div>
        </div>

        {/* CTA + garantia — oculto até o vídeo atingir 10:08 (608s) */}
        <div className="vsl-oculto max-w-[860px] mx-auto text-center mt-9 md:mt-10">
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
      </div>

      {/* Esconde tudo que fica abaixo do vídeo (CTA do hero + todas as seções
          seguintes) até o player revelar via displayHiddenElements. */}
      <style>{`.vsl-oculto{display:none!important}`}</style>

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
