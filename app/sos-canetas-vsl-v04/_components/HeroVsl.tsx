import Script from "next/script";
import { Cta } from "../../sos-canetas-_shared/_components/Cta";

type HeroVslProps = {
  variant: string;
};

// A primeira dobra da v04 é lida como MATÉRIA, não como landing: fundo
// branco, coluna única alinhada à esquerda, tipografia de portal (Helvetica /
// Arial), tarja vermelha de editoria, assinatura entre fios e legenda no
// vídeo. A paleta creme/dourado da marca volta a partir do segundo bloco —
// é o contraste entre os dois que faz o topo parecer reportagem.
const FONTE_NOTICIA = {
  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
};

export function HeroVsl({ variant }: HeroVslProps) {
  return (
    <section className="bg-white relative">
      {/* PRIMEIRA DOBRA — barra, manchete, vídeo e legenda cabem inteiros em
          100svh (svh = altura com a barra do navegador visível), pra ninguém
          precisar rolar até o player no mobile. O vídeo é dimensionado pela
          altura que sobra: ver .vsl-player no <style> abaixo. */}
      <div
        className="min-h-[100svh] flex flex-col"
        style={FONTE_NOTICIA}
      >
        {/* Barra do topo — nome de editoria, no formato de capa de portal.
            É um assunto, não um veículo: nada aqui imita um jornal
            existente. */}
        <div className="shrink-0 border-b-[3px] border-[#CC0000] bg-white">
          <div className="max-w-[760px] mx-auto px-5 h-[38px] md:h-[46px] flex items-center justify-between">
            <span className="font-bold text-[11.5px] md:text-[14px] uppercase tracking-[0.16em] text-[#111111]">
              Emagrecimento GLP-1
            </span>
            <span className="text-[9.5px] md:text-[11px] uppercase tracking-[0.12em] text-[#8A8A8A]">
              Saúde da mulher
            </span>
          </div>
        </div>

        <article className="flex-1 min-h-0 flex flex-col w-full max-w-[760px] mx-auto px-5 pt-3 pb-4 md:pt-6 md:pb-6 animate-fade-up">
          {/* Chapéu / sobrancelha — tarja de editoria + a credencial que
              ancora quem está falando, exatamente onde um portal põe o
              chapéu da matéria. */}
          <div className="shrink-0 flex items-baseline gap-2 md:gap-2.5">
            <span className="shrink-0 self-center bg-[#CC0000] text-white font-bold text-[9.5px] md:text-[11px] uppercase tracking-[0.09em] leading-none px-2 py-[5px] md:px-2.5 md:py-[6px]">
              Saúde
            </span>
            <span className="text-[10.5px] md:text-[13px] leading-[1.3] text-[#4B4B4B]">
              Dra. Michelly Silveira, com 13 anos de atuação clínica e +3.000
              pacientes, revela:
            </span>
          </div>

          {/* Manchete — sans pesada, alinhada à esquerda, entrelinha curta e
              tracking negativo: a métrica de título de portal. */}
          <h1 className="shrink-0 font-bold text-[#111111] text-left text-[clamp(23px,5.9vw,29px)] md:text-[40px] leading-[1.1] md:leading-[1.05] tracking-[-0.017em] mt-2 md:mt-3.5">
            Existe um erro silencioso que quase toda mulher comete usando a
            caneta emagrecedora (e não é a dose, nem a marca)
          </h1>

          {/* Linha fina */}
          <p className="shrink-0 text-left text-[#4B4B4B] text-[clamp(13.5px,3.5vw,15.5px)] md:text-[18px] leading-[1.4] mt-2 md:mt-3.5">
            Descubra o que fazer enquanto ela age para não engordar tudo de
            novo no dia em que parar.
          </p>

          {/* Assinatura entre fios */}
          <div className="shrink-0 flex flex-wrap items-center gap-x-2 gap-y-0.5 border-y border-[#E3E3E3] py-1.5 md:py-2.5 mt-2.5 md:mt-4 text-[10px] md:text-[12px]">
            <span className="font-bold text-[#111111]">
              Por Dra. Michelly Silveira
            </span>
            <span className="text-[#D0D0D0]" aria-hidden="true">
              ·
            </span>
            <span className="text-[#8A8A8A]">
              Nutricionista Clínica · CRN-3 36739
            </span>
          </div>

          {/* PLAYER VSL — Vturb (Converteai). Vídeo vertical 9:16. Cantos
              retos e fio cinza: embed de matéria, não card de landing. */}
          <div className="vsl-stage mt-3 md:mt-5">
            <div className="vsl-player overflow-hidden border border-[#E3E3E3] bg-black">
              {/* @ts-expect-error — custom element do Vturb */}
              <vturb-smartplayer
                id="vid-6a761da89d8a0e4004614290"
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

          {/* Legenda do vídeo */}
          <p className="shrink-0 text-left text-[9.5px] md:text-[11.5px] leading-[1.35] text-[#8A8A8A] border-l-2 border-[#E3E3E3] pl-2 mt-2 md:mt-3">
            Vídeo: a Dra. Michelly Silveira explica o que fazer enquanto a
            caneta age para o peso não voltar depois.
          </p>
        </article>
      </div>

      {/* CTA + garantia — fica fora da primeira dobra e só aparece quando o
          vídeo atinge 10:08 (608s). */}
      <div
        className="vsl-oculto w-full max-w-[760px] mx-auto text-center px-5 pt-6 pb-10 md:pt-8 md:pb-14"
        style={FONTE_NOTICIA}
      >
        <Cta dataCta={`sos-hero-${variant}`}>
          QUERO QUE O MEU RESULTADO FIQUE PRA SEMPRE
        </Cta>

        <div className="flex items-center justify-center gap-2 text-[12px] text-[#8A8A8A] mt-6">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="text-[#8A8A8A]"
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
        .vsl-player{position:absolute;inset:0;margin:auto;width:auto;height:min(100%,calc((min(100vw, 760px) - 2.5rem) * 1.7778));aspect-ratio:9/16}
      `}</style>

      {/* Define o custom element <vturb-smartplayer> e faz upgrade do
          elemento já presente no DOM. */}
      <Script
        id="vturb-vid-6a761da89d8a0e4004614290"
        src="https://scripts.converteai.net/9209a5ac-0a42-43b5-9c1f-7d310e9d3d33/players/6a761da89d8a0e4004614290/v4/player.js"
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
