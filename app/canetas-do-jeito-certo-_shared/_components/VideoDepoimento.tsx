"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  src: string;
  poster: string;
  alt: string;
};

/**
 * Capa clicável no lugar do <video>. O atributo `poster` é baixado com
 * prioridade alta assim que o HTML é lido, mesmo com preload="none" e mesmo
 * com o vídeo lá embaixo na página — eram 285 KB roubando banda do hero. Aqui
 * a capa é uma <Image> normal: otimizada, e só carrega quando chega perto da
 * tela. O <video> só existe depois do clique.
 */
export function VideoDepoimento({ src, poster, alt }: Props) {
  const [tocando, setTocando] = useState(false);

  if (tocando) {
    return (
      <video
        controls
        autoPlay
        playsInline
        className="w-full h-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setTocando(true)}
      aria-label={`Assistir ao depoimento: ${alt}`}
      className="group relative block w-full h-full cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cjc-menta"
    >
      <Image
        src={poster}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, 440px"
        className="object-cover"
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center bg-cjc-noite-esc/25 transition-colors group-hover:bg-cjc-noite-esc/10"
      >
        <span className="flex items-center justify-center w-[62px] h-[62px] rounded-full bg-cjc-noite-esc/70 backdrop-blur-sm ring-1 ring-white/20 transition-transform group-hover:scale-105">
          <svg
            width="22"
            height="24"
            viewBox="0 0 22 24"
            fill="currentColor"
            className="text-cjc-texto ml-1"
          >
            <path d="M0 1.7a1 1 0 0 1 1.5-.87l19 10.3a1 1 0 0 1 0 1.74l-19 10.3A1 1 0 0 1 0 22.3V1.7Z" />
          </svg>
        </span>
      </span>
    </button>
  );
}
