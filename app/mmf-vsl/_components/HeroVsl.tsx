import Script from "next/script";
import { VturbCheckoutUtm } from "@/components/vturb-checkout-utm";
import { Leaf } from "../../sos-canetas-_shared/_components/Leaf";
import { Cta, CtaNota } from "./Cta";
import {
  PITCH_SECONDS,
  PITCH_SECONDS_AB_PADRAO,
  PRECO,
  VTURB_ACCOUNT_ID,
  VTURB_VIDEO_ID,
} from "./constants";

// Custom element do Vturb (<vturb-smartplayer>), sem tipo no JSX.
const VturbPlayer = "vturb-smartplayer" as unknown as React.ElementType;

export type HeadlineId = "h1" | "h2" | "h3";

export type Aspecto = "9:16" | "3:4";
// Um vídeo fixo, ou um teste A/B da Vturb (ela sorteia o vídeo; a proporção e
// o segundo do pitch de cada um vêm em `variantes`).
export type VideoVsl =
  | { id: string; aspecto: Aspecto }
  | {
      abTest: string;
      variantes: Record<string, { readonly nome: string; readonly aspecto: Aspecto; readonly pitch: number }>;
    };

// Palco do player por proporção: aspect-ratio e quanto a altura pode crescer
// a partir da largura disponível (100vw menos o padding lateral de 2.5rem).
const ASPECTOS: Record<Aspecto, { ratio: string; altura: string }> = {
  "9:16": { ratio: "9/16", altura: "1.7778" },
  "3:4": { ratio: "3/4", altura: "1.3333" },
};

// As três variações de headline da copy (teste A/B por ?h=2 / ?h=3).
// h1 é a recomendada pra começar e é o padrão.
export const HEADLINES: Record<
  HeadlineId,
  { sobrancelha: string; headline: React.ReactNode; sub: string }
> = {
  h1: {
    sobrancelha:
      "Nutricionista, 14 anos de clínica e mais de 3.000 mulheres acompanhadas",
    headline: (
      <>
        Nutricionista descobre <em className="italic">a janela que se abre no seu cérebro</em>{" "}
        quando você começa a caneta e o que fazer dentro dela para não
        recuperar o peso quando parar.
      </>
    ),
    sub: "Não é sobre largar a caneta. É sobre o que ninguém te explicou pra fazer enquanto ela ainda está agindo.",
  },
  h2: {
    sobrancelha:
      "Baseado no maior estudo de acompanhamento de quem parou a medicação",
    headline: (
      <>
        Um estudo acompanhou mulheres que pararam a caneta: em um ano,{" "}
        <em className="italic">70% do peso tinha voltado</em>. Descubra o que as
        que não reganharam fizeram diferente.
      </>
    ),
    sub: "Não foi dose maior e nem dieta restritiva. Foi uma coisa só, num período específico do tratamento.",
  },
  h3: {
    sobrancelha: "Para quem está usando a caneta agora",
    headline: (
      <>
        Como chegar no seu último dia de caneta com{" "}
        <em className="italic">o corpo firme, o rosto bonito</em> e sem medo de
        voltar à estaca zero.
      </>
    ),
    sub: "A nutricionista que acompanhou mais de 3.000 mulheres mostra o que fazer em cada fase do tratamento, começando pela fase em que você está hoje.",
  },
};

export function HeroVsl({
  headlineId,
  variante,
  pitchSeconds = PITCH_SECONDS,
  video = { id: VTURB_VIDEO_ID, aspecto: "9:16" },
}: {
  headlineId: HeadlineId;
  variante: string;
  /** segundo do vídeo em que o resto da página aparece; 0 = sem delay (/mmf-bio) */
  pitchSeconds?: number;
  /** vídeo do Vturb desta página; padrão = VSL 9:16 da /mmf-vsl */
  video?: VideoVsl;
}) {
  const h = HEADLINES[headlineId];
  const ab = "abTest" in video ? video : null;
  const fixo = "abTest" in video ? null : video;
  const temVideo = ab ? true : fixo!.id !== "";
  const palco = fixo ? ASPECTOS[fixo.aspecto] : null;
  // Só esconde o resto da página quando o segundo do pitch estiver definido.
  const segurarAtePitch = temVideo && pitchSeconds > 0;

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

      {/* PRIMEIRA DOBRA — sobrancelha, headline, sub e vídeo cabem em 100svh
          no celular, igual às VSLs do SOS. */}
      <div className="max-w-[1180px] mx-auto relative min-h-[100svh] flex flex-col px-5 md:px-20 py-4 md:py-8">
        <div className="shrink-0 flex justify-center mb-3 md:mb-5">
          <div className="inline-flex items-center justify-center rounded-full border border-sos-dourado/40 bg-gradient-to-b from-sos-creme-soft to-[#F3E9D6] py-1.5 px-4 md:py-2.5 md:px-7 shadow-[0_4px_16px_rgba(184,151,90,0.18)]">
            <span className="font-sans font-semibold text-[9.5px] md:text-[12px] uppercase tracking-[0.12em] md:tracking-[0.16em] text-sos-dourado-esc text-center">
              {h.sobrancelha}
            </span>
          </div>
        </div>

        <div className="shrink-0 max-w-[900px] w-full mx-auto text-center animate-fade-up">
          <h1 className="font-serif text-[clamp(21px,5.5vw,27px)] md:text-[44px] leading-[1.14] md:leading-[1.08] font-medium text-texto mb-2.5 md:mb-4">
            {h.headline}
          </h1>
          <p className="font-sans text-[clamp(13px,3.5vw,15.5px)] md:text-[19px] leading-[1.42] md:leading-[1.5] text-marrom max-w-[680px] mx-auto">
            {h.sub}
          </p>
          <p className="font-sans font-semibold text-[12px] md:text-[14px] uppercase tracking-[0.1em] text-sos-terracota mt-3 md:mt-5">
            Assista ao vídeo abaixo antes que saia do ar
          </p>
        </div>

        <div className="vsl-stage mt-2 md:mt-4">
          <div className="vsl-player rounded-2xl overflow-hidden shadow-[0_16px_50px_rgba(42,36,24,0.22)] border border-sos-borda-dourada bg-verde-esc">
            {ab ? (
              /* Teste A/B: o player.js do ab-test troca este id por
                 vid-<vídeo sorteado> e o script mmf-vsl-ab abaixo dimensiona
                 o palco pela proporção do sorteado. Sem placeholder, como no
                 embed da Vturb. */
              <VturbPlayer
                id={`ab-${ab.abTest}`}
                style={{ display: "block", width: "100%", height: "100%" }}
              />
            ) : fixo && temVideo ? (
              <VturbPlayer
                id={`vid-${fixo.id}`}
                style={{ display: "block", width: "100%", height: "100%" }}
              >
                <div
                  className="vturb-player-placeholder"
                  style={{ position: "absolute", inset: 0, zIndex: 0, backgroundColor: "black" }}
                />
              </VturbPlayer>
            ) : (
              <div className="w-full h-full flex items-center justify-center p-6 text-center font-sans text-[14px] text-creme/70">
                Vídeo do Vturb entra aqui
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CTA logo abaixo do vídeo — fora da primeira dobra e, como o resto
          da página, só aparece no minuto do pitch. A Vturb revela o .vsl-oculto
          trocando o display dele (vira block), então a centralização fica num
          div de dentro, que ela não toca. */}
      <div className="vsl-oculto relative">
        <div className="max-w-[860px] mx-auto flex flex-col items-center text-center px-5 md:px-20 pt-2 pb-10 md:pb-14">
          <Cta variante={variante} dataCta={`mmf-hero-${variante}`}>
            QUERO MEU ACESSO AGORA
          </Cta>
          <CtaNota>{PRECO.parcelas} · acesso imediato · 7 dias de garantia</CtaNota>
        </div>
      </div>

      {/* Palco do player: vídeo vertical (9:16 ou 3:4) dimensionado pela
          altura que sobra da dobra. Com vídeo configurado, .vsl-oculto esconde tudo
          abaixo até o pitch; sem vídeo, fica tudo visível pra revisão. */}
      <style>{`
        ${segurarAtePitch ? ".vsl-oculto{display:none!important}" : ""}
        .vsl-stage{position:relative;flex:1 1 0;min-height:0}
        ${
          palco
            ? `.vsl-player{position:absolute;inset:0;margin:auto;width:auto;height:min(100%,calc((100vw - 2.5rem) * ${palco.altura}));aspect-ratio:${palco.ratio}}`
            : /* A/B: chute 3:4 (maioria) até o script medir o sorteado. */
              `.vsl-player{position:absolute;inset:0;margin:auto;width:auto;height:min(100%,calc((100vw - 2.5rem) * 1.3333));aspect-ratio:3/4}`
        }
      `}</style>

      {fixo && temVideo && (
        <Script
          id={`vturb-vid-${fixo.id}`}
          src={`https://scripts.converteai.net/${VTURB_ACCOUNT_ID}/players/${fixo.id}/v4/player.js`}
          strategy="afterInteractive"
        />
      )}
      {ab && (
        /* Carrega o player.js do ab-test com onload (o ab-test escolhe o
           vídeo e renomeia o elemento de forma síncrona ao rodar). Depois:
           1) dimensiona o palco pela proporção do vídeo sorteado (da lista,
              ou da config que o ab-test deixa em el._setup/el.config);
           2) revela os .vsl-oculto no pitch daquele vídeo. */
        <Script id="mmf-vsl-ab" strategy="afterInteractive">
          {`
            (function () {
              var ID = ${JSON.stringify(ab.abTest)};
              var VARIANTES = ${JSON.stringify(
                Object.fromEntries(
                  Object.entries(ab.variantes).map(([id, v]) => [
                    id,
                    { r: v.aspecto === "3:4" ? 1.3333 : 1.7778, p: v.pitch },
                  ]),
                ),
              )};
              var PITCH_PADRAO = ${pitchSeconds > 0 ? PITCH_SECONDS_AB_PADRAO : 0};
              var el = document.getElementById("ab-" + ID);
              if (!el) return;
              var box = el.closest(".vsl-player");
              var stage = el.closest(".vsl-stage");
              function sorteado() { return VARIANTES[el.id.replace("vid-", "")]; }
              function proporcao() {
                var v = sorteado();
                if (v) return v.r;
                var c = el.config || el._setup;
                var ar = c && c.video && c.video.aspectRatio;
                return ar || 1.3333;
              }
              function ajustar() {
                if (!box || !stage) return;
                var r = proporcao();
                var w = Math.min(stage.clientWidth, stage.clientHeight / r);
                if (!(w > 0)) return;
                box.style.width = w + "px";
                box.style.height = w * r + "px";
                box.style.aspectRatio = "auto";
                el.style.maxWidth = "none";
              }
              function iniciar() {
                ajustar();
                window.addEventListener("resize", ajustar);
                if (!PITCH_PADRAO) return;
                el.addEventListener("player:ready", function () {
                  var v = sorteado();
                  el.displayHiddenElements(v ? v.p : PITCH_PADRAO, [".vsl-oculto"], { persist: true });
                });
              }
              var s = document.createElement("script");
              s.src = "https://scripts.converteai.net/${VTURB_ACCOUNT_ID}/ab-test/" + ID + "/player.js";
              s.async = true;
              s.onload = iniciar;
              document.head.appendChild(s);
            })();
          `}
        </Script>
      )}
      {temVideo && <VturbCheckoutUtm variante={variante} />}
      {!ab && segurarAtePitch && (
        <>
          {/* Revela os .vsl-oculto no minuto do preço. persist mantém
              revelado pra quem já assistiu. */}
          <Script id="mmf-vsl-delay" strategy="afterInteractive">
            {`
              (function () {
                var player = document.querySelector("vturb-smartplayer");
                if (!player) return;
                player.addEventListener("player:ready", function () {
                  player.displayHiddenElements(${pitchSeconds}, [".vsl-oculto"], { persist: true });
                });
              })();
            `}
          </Script>
        </>
      )}
    </section>
  );
}
