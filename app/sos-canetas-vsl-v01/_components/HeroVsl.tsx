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
        className="top-[20px] left-[-70px] w-[240px] h-[240px] md:w-[300px] md:h-[300px]"
        opacity={0.1}
        rotation={-15}
      />
      <Leaf
        className="top-[200px] right-[-70px] w-[220px] h-[220px] md:w-[280px] md:h-[280px]"
        opacity={0.1}
        rotation={160}
      />

      {/* PRIMEIRA DOBRA — headline, vídeo e subheadline cabem inteiros em
          100svh (svh = altura com a barra do navegador visível), pra ninguém
          precisar rolar até o player no mobile. O vídeo é dimensionado pela
          altura que sobra: ver .vsl-player no <style> abaixo. */}
      <div className="relative min-h-[100svh] flex flex-col max-w-[1180px] mx-auto px-5 md:px-20 py-4 md:py-8 animate-fade-up">
        {/* Rodada 4 (03/09/2026) — copy A (alerta/revelação) em FORMATO
            EDITORIAL: sans bold, alinhado à esquerda, sem realce de cor, como
            nas referências de veículo (Dr. Oz e CBS). O sans bold com leading
            1.08 é também o formato mais compacto dos três — é o que faz esta
            headline, a mais longa das três, não engolir o player. */}
        <h1 className="shrink-0 font-sans font-bold text-texto text-left text-[clamp(21px,5.4vw,26px)] md:text-[40px] leading-[1.08] md:leading-[1.05] tracking-[-0.01em] max-w-[820px] mx-auto">
          Começou a usar a caneta emagrecedora? Existe uma coisa acontecendo no
          seu corpo, além do peso na balança, que ninguém te contou e é ela que
          decide se daqui a alguns meses você fica firme ou engorda tudo de
          novo.
        </h1>

        <p className="shrink-0 font-sans text-marrom text-left text-[clamp(14px,3.7vw,16.5px)] md:text-[20px] leading-[1.4] max-w-[820px] mx-auto mt-2.5 md:mt-5">
          Descubra neste vídeo o que fazer agora, enquanto a caneta age, para
          não engordar tudo de novo no dia em que ela sair.
        </p>


        {/* PLAYER VSL — Vturb (Converteai). Vídeo vertical 9:16. */}
        <div className="vsl-stage my-3 md:my-5">
          <div className="vsl-player rounded-2xl overflow-hidden shadow-[0_16px_50px_rgba(42,36,24,0.22)] border border-sos-borda-dourada bg-verde-esc">
            {/* @ts-expect-error — custom element do Vturb */}
            <vturb-smartplayer
              id="vid-6a737d786e30825808e1095e"
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
        id="vturb-vid-6a737d786e30825808e1095e"
        src="https://scripts.converteai.net/9209a5ac-0a42-43b5-9c1f-7d310e9d3d33/players/6a737d786e30825808e1095e/v4/player.js"
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
