"use client";

import { useRef, useState } from "react";

type Props = {
  src: string;
  poster: string;
  /** classes do quadro (proporção etc.) */
  className?: string;
};

// Vídeo de prova (depoimento) que não custa nada enquanto está escondido.
// O atributo poster do <video> é baixado na abertura da página mesmo dentro
// de display:none (eram 100 KB disputando banda com o hero), e sem poster o
// Chrome pinta o <video> de preto. Aqui a capa é background-image do quadro
// (só baixa quando a seção aparece), o <video> fica transparente e sem
// receber toques até o primeiro play, e um ícone de play faz o convite. O
// toque no quadro dá play; a partir daí o vídeo aparece com os controles
// nativos. preload="none": o MP4 só desce no play.
export function VideoProva({ src, poster, className = "" }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [tocando, setTocando] = useState(false);

  return (
    <div
      className={`relative bg-cover bg-center ${tocando ? "" : "cursor-pointer"} ${className}`}
      style={{ backgroundImage: `url(${poster})` }}
      onClick={() => {
        if (!tocando) ref.current?.play().catch(() => {});
      }}
    >
      {/* eslint-disable-next-line jsx-a11y/media-has-caption -- depoimento em vídeo */}
      <video
        ref={ref}
        controls
        preload="none"
        playsInline
        onPlay={() => setTocando(true)}
        className={`w-full h-full object-cover ${tocando ? "" : "opacity-0 pointer-events-none"}`}
      >
        <source src={src} type="video/mp4" />
      </video>
      {!tocando && (
        <span aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="w-16 h-16 rounded-full bg-black/55 flex items-center justify-center shadow-[0_6px_20px_rgba(0,0,0,0.35)]">
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white translate-x-[2px]">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </span>
      )}
    </div>
  );
}
