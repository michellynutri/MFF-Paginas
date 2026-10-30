import Script from "next/script";
import { preconnect } from "react-dom";
import { VturbCheckoutUtm } from "@/components/vturb-checkout-utm";
import { VARIANTE, VTURB_ACCOUNT_ID, VTURB_VIDEO_MIA } from "./constants";

// Custom element do Vturb (<vturb-smartplayer>), sem tipo no JSX.
const VturbPlayer = "vturb-smartplayer" as unknown as React.ElementType;

// Só o player, centralizado, como na página da Thaize: largura total no
// celular; no desktop o 9:16 fica com a altura que cabe abaixo da faixa.
// O botão de compra é o da Vturb (dentro do vídeo); o VturbCheckoutUtm pega o
// clique dele e manda pro checkout na mesma aba com UTMs + ?variante=mia-vsl
// (a /bio passa a própria variante).
export function PlayerMia({ variante = VARIANTE }: { variante?: string } = {}) {
  const temVideo = VTURB_VIDEO_MIA !== "";
  if (temVideo) {
    preconnect("https://scripts.converteai.net");
    preconnect("https://cdn.converteai.net");
  }

  return (
    <section className="px-0 md:px-5 pt-0 pb-10 md:pb-14">
      {/* Embed da Vturb como ela manda (e como está na página da Thaize):
          largura total até 400 px, e o placeholder com padding 177,78% dá o
          9:16 — a altura é da própria Vturb. Fixar a altura do palco por fora
          (como o HeroVsl da /mmf-vsl) deixava barras pretas em volta do vídeo,
          porque o player limita a largura a 400 px e se dimensiona sozinho.
          O vídeo fica colado na faixa e a LARGURA é limitada para que o 9:16
          inteiro caiba na tela (100svh menos a faixa: 46 px no celular, 54 px
          no desktop): o botão da Vturb fica no rodapé do vídeo e, com o vídeo
          na largura toda do celular (693 px de altura), ficava abaixo da dobra
          no pitch (visto no ar 30/10). */}
      <div className="mia-player mx-auto w-full max-w-[calc((100svh-46px)*9/16)] md:max-w-[min(400px,calc((100svh-54px)*9/16))]">
        {temVideo ? (
          <VturbPlayer
            id={`vid-${VTURB_VIDEO_MIA}`}
            style={{ display: "block", margin: "0 auto", width: "100%", maxWidth: "400px" }}
          >
            <div
              className="vturb-player-placeholder"
              style={{ position: "relative", width: "100%", padding: "177.77777777777777% 0 0", zIndex: 0, backgroundColor: "black" }}
            />
          </VturbPlayer>
        ) : (
          <div className="w-full aspect-[9/16] bg-black flex items-center justify-center p-6 text-center font-sans text-[14px] text-white/70">
            Vídeo do Vturb entra aqui (VTURB_VIDEO_MIA em constants.ts)
          </div>
        )}
      </div>
      {temVideo && (
        <Script
          id={`vturb-vid-${VTURB_VIDEO_MIA}`}
          src={`https://scripts.converteai.net/${VTURB_ACCOUNT_ID}/players/${VTURB_VIDEO_MIA}/v4/player.js`}
          strategy="afterInteractive"
        />
      )}
      {temVideo && <VturbCheckoutUtm variante={variante} />}
    </section>
  );
}
