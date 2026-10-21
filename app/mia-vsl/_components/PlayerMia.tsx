import Script from "next/script";
import { preconnect } from "react-dom";
import { VturbCheckoutUtm } from "@/components/vturb-checkout-utm";
import { VARIANTE, VTURB_ACCOUNT_ID, VTURB_VIDEO_MIA } from "./constants";

// Custom element do Vturb (<vturb-smartplayer>), sem tipo no JSX.
const VturbPlayer = "vturb-smartplayer" as unknown as React.ElementType;

// Só o player, centralizado, como na página da Thaize: largura total no
// celular; no desktop o 9:16 fica com a altura que cabe abaixo da faixa.
// O botão de compra é o da Vturb (dentro do vídeo); o VturbCheckoutUtm pega o
// clique dele e manda pro checkout na mesma aba com UTMs + ?variante=mia-vsl.
export function PlayerMia() {
  const temVideo = VTURB_VIDEO_MIA !== "";
  if (temVideo) {
    preconnect("https://scripts.converteai.net");
    preconnect("https://cdn.converteai.net");
  }

  return (
    <section className="px-0 md:px-5 pt-4 pb-10 md:pt-6 md:pb-14">
      <div className="mia-player mx-auto bg-black md:rounded-xl md:overflow-hidden">
        {temVideo ? (
          <VturbPlayer id={`vid-${VTURB_VIDEO_MIA}`} style={{ display: "block", width: "100%", height: "100%" }}>
            <div
              className="vturb-player-placeholder"
              style={{ position: "absolute", inset: 0, zIndex: 0, backgroundColor: "black" }}
            />
          </VturbPlayer>
        ) : (
          <div className="w-full h-full flex items-center justify-center p-6 text-center font-sans text-[14px] text-white/70">
            Vídeo do Vturb entra aqui (VTURB_VIDEO_MIA em constants.ts)
          </div>
        )}
      </div>
      {/* 9:16 com largura total; no desktop limita pela altura da tela
          (100svh menos faixa e respiros), como o palco das VSLs do MMF. */}
      <style>{`
        .mia-player{position:relative;width:100%;aspect-ratio:9/16;max-width:calc((100svh - 140px) * 0.5625)}
        @media (max-width:767px){.mia-player{max-width:none}}
      `}</style>
      {temVideo && (
        <Script
          id={`vturb-vid-${VTURB_VIDEO_MIA}`}
          src={`https://scripts.converteai.net/${VTURB_ACCOUNT_ID}/players/${VTURB_VIDEO_MIA}/v4/player.js`}
          strategy="afterInteractive"
        />
      )}
      {temVideo && <VturbCheckoutUtm variante={VARIANTE} />}
    </section>
  );
}
