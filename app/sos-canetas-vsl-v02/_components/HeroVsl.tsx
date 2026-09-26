import Script from "next/script";
import { VturbCheckoutUtm } from "@/components/vturb-checkout-utm";
import { Cta } from "../../sos-canetas-_shared/_components/Cta";
import { CHECKOUT_URL_VSL } from "../../sos-canetas-_shared/_components/constants";

type HeroVslProps = {
  variant: string;
  checkoutUrl?: string;
};

export function HeroVsl({ variant, checkoutUrl = CHECKOUT_URL_VSL }: HeroVslProps) {
  return (
    <section className="bg-white relative overflow-hidden">

      {/* PRIMEIRA DOBRA — headline, vídeo e subheadline cabem inteiros em
          100svh (svh = altura com a barra do navegador visível), pra ninguém
          precisar rolar até o player no mobile. O vídeo é dimensionado pela
          altura que sobra: ver .vsl-player no <style> abaixo. */}
      <div className="relative min-h-[100svh] flex flex-col max-w-[1180px] mx-auto px-5 md:px-20 py-4 md:py-8 animate-fade-up">
        {/* Rodada 9 (14/09/2026) — copy nova, só headline + "Assista agora"
            apontando pro player (sem subheadline). Layout limpo: fundo
            branco, sem folhas nem moldura no player. Sans bold e a frase de
            virada em terracota; o realce cai na "coisa simples", que é o gap
            da copy. */}
        <h1 className="shrink-0 font-sans font-bold text-texto text-center text-[clamp(21px,5.4vw,26px)] md:text-[40px] leading-[1.12] md:leading-[1.08] tracking-[-0.01em] max-w-[820px] mx-auto">
          Nos próximos 30 dias, a mesma caneta que você já toma pode queimar
          bem mais gordura,{" "}
          {/* Laranja mais vivo que o terracota do site (#C56B4A), pedido
              pra dar mais vibração ao realce no fundo branco. */}
          <span className="text-[#E8541F]">
            se você fizer uma coisa simples que quase ninguém te conta
            enquanto ela age.
          </span>
        </h1>

        <p className="shrink-0 font-sans font-bold text-texto text-center text-[clamp(16px,4.2vw,19px)] md:text-[24px] leading-[1.3] mt-3 md:mt-5">
          Assista agora{" "}
          <span role="img" aria-label="dedo apontando para baixo">
            👇
          </span>
        </p>

        {/* PLAYER VSL — Vturb (Converteai). Vídeo vertical 9:16. */}
        <div className="vsl-stage my-3 md:my-5">
          <div className="vsl-player rounded-2xl overflow-hidden bg-black">
            {/* @ts-expect-error — custom element do Vturb */}
            <vturb-smartplayer
              id="vid-6a737d98fa966b9f5cd0a63a"
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
        <Cta to="checkout" checkoutUrl={checkoutUrl} dataCta={`sos-hero-${variant}`}>
          QUERO QUE O MEU RESULTADO FIQUE PRA SEMPRE
        </Cta>

        <div className="flex items-center justify-center gap-2 font-sans text-[13px] text-texto/70 mt-6">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="text-sos-dourado"
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
        id="vturb-vid-6a737d98fa966b9f5cd0a63a"
        src="https://scripts.converteai.net/9209a5ac-0a42-43b5-9c1f-7d310e9d3d33/players/6a737d98fa966b9f5cd0a63a/v4/player.js"
        strategy="afterInteractive"
      />
      <VturbCheckoutUtm variante={"vsl-v02"} />

      {/* Delay de 10:08 (608s): revela os elementos .vsl-oculto quando o vídeo
          atinge esse ponto. persist mantém revelado para quem já assistiu. */}
      <Script id="vsl-delay-608" strategy="afterInteractive">
        {`
          (function () {
            var delaySeconds = 608; // 10:08 do vídeo = preço. Vturb conta a posição do vídeo, não o relógio (em 1.1x isso é 9:13 de relógio)
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
