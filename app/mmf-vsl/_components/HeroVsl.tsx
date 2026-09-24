import Script from "next/script";
import { Leaf } from "../../sos-canetas-_shared/_components/Leaf";
import { Cta, CtaNota } from "./Cta";
import { PITCH_SECONDS, PRECO, VTURB_ACCOUNT_ID, VTURB_VIDEO_ID } from "./constants";

// Custom element do Vturb (<vturb-smartplayer>), sem tipo no JSX.
const VturbPlayer = "vturb-smartplayer" as unknown as React.ElementType;

export type HeadlineId = "h1" | "h2" | "h3";

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
}: {
  headlineId: HeadlineId;
  variante: string;
}) {
  const h = HEADLINES[headlineId];
  const temVideo = VTURB_VIDEO_ID !== "";
  // Só esconde o resto da página quando o segundo do pitch estiver definido.
  const segurarAtePitch = temVideo && PITCH_SECONDS > 0;

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
            {temVideo ? (
              <VturbPlayer
                id={`vid-${VTURB_VIDEO_ID}`}
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
          da página, só aparece no minuto do pitch. */}
      <div className="vsl-oculto relative max-w-[860px] mx-auto flex flex-col items-center px-5 md:px-20 pt-2 pb-10 md:pb-14">
        <Cta variante={variante} dataCta={`mmf-hero-${variante}`}>
          QUERO MEU ACESSO AGORA
        </Cta>
        <CtaNota>{PRECO.parcelas} · acesso imediato · 7 dias de garantia</CtaNota>
      </div>

      {/* Palco do player: vídeo vertical 9:16 dimensionado pela altura que
          sobra da dobra. Com vídeo configurado, .vsl-oculto esconde tudo
          abaixo até o pitch; sem vídeo, fica tudo visível pra revisão. */}
      <style>{`
        ${segurarAtePitch ? ".vsl-oculto{display:none!important}" : ""}
        .vsl-stage{position:relative;flex:1 1 0;min-height:0}
        .vsl-player{position:absolute;inset:0;margin:auto;width:auto;height:min(100%,calc((100vw - 2.5rem) * 1.7778));aspect-ratio:9/16}
      `}</style>

      {temVideo && (
        <Script
          id={`vturb-vid-${VTURB_VIDEO_ID}`}
          src={`https://scripts.converteai.net/${VTURB_ACCOUNT_ID}/players/${VTURB_VIDEO_ID}/v4/player.js`}
          strategy="afterInteractive"
        />
      )}
      {segurarAtePitch && (
        <>
          {/* Revela os .vsl-oculto no minuto do preço. persist mantém
              revelado pra quem já assistiu. */}
          <Script id="mmf-vsl-delay" strategy="afterInteractive">
            {`
              (function () {
                var player = document.querySelector("vturb-smartplayer");
                if (!player) return;
                player.addEventListener("player:ready", function () {
                  player.displayHiddenElements(${PITCH_SECONDS}, [".vsl-oculto"], { persist: true });
                });
              })();
            `}
          </Script>
        </>
      )}
    </section>
  );
}
