import Image from "next/image";
import { Cta } from "./Cta";
import { Leaf } from "./Leaf";

// TODO: substituir pelas fotos/vídeos reais antes do launch (com termo de uso)
// Cada item já é uma composição antes+depois em um único arquivo.
const imagensAntesDepois = [
  "/images/sos-canetas/before-after-1.jpg",
  "/images/sos-canetas/before-after-2.jpg",
  "/images/sos-canetas/before-after-3.jpg",
];

const videosAntesDepois = [
  "/images/sos-canetas/before-after-4.mp4",
  "/images/sos-canetas/before-after-5.mp4",
];

// TODO: substituir por depoimentos reais antes do launch
const testimonials = [
  {
    quote: "O intestino destrancou depois da segunda semana.",
    name: "Carla M.",
    detail: "6 semanas no Manual",
  },
  {
    quote:
      "Parei de ficar ansiosa sobre o que comer. Sabia exatamente o que fazer todos os dias.",
    name: "Renata S.",
    detail: "4 semanas no Manual",
  },
  {
    quote: "Meu médico reduziu a dose antes do previsto.",
    name: "Adriana P.",
    detail: "8 semanas no Manual",
  },
  {
    quote:
      "As pessoas perguntam o que eu fiz. Emagreci sem ficar com aquela cara de quem perdeu peso rápido demais.",
    name: "Juliana T.",
    detail: "10 semanas no Manual",
  },
  {
    quote:
      "Eu tinha medo de parar a caneta e engordar tudo de volta. Agora não tenho mais.",
    name: "Beatriz L.",
    detail: "12 semanas no Manual",
  },
  {
    quote: "Fiz o tratamento certo desde o início. Foi a melhor decisão.",
    name: "Mariana F.",
    detail: "6 semanas no Manual",
  },
];

export function Prova() {
  return (
    <section className="bg-sos-creme-soft py-16 md:py-24 px-6 md:px-20">
      <div className="max-w-[1180px] mx-auto">
        {/* 6.1 Antes/Depois */}
        <div className="text-center mb-10 md:mb-14">
          <p className="font-sans text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.16em] text-sos-dourado-esc mb-4">
            Resultados reais
          </p>
          <h2 className="font-serif text-[30px] md:text-[48px] leading-[1.1] md:leading-[1.05] font-medium text-texto mb-5">
            Esses resultados <em className="italic">a caneta vai te dar</em>
          </h2>
          <p className="font-sans text-[16px] md:text-[18px] text-marrom max-w-[540px] mx-auto leading-[1.6]">
            Transformações reais de mulheres em tratamento com GLP-1 que
            seguiram o protocolo do Manual.
          </p>
        </div>

        {/* Linha 1 — 3 imagens 9:16. Mobile: carrossel. Desktop: grid 3 cols. */}
        <div className="md:max-w-[900px] md:mx-auto">
          <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0 -mx-6 md:mx-0 px-6 md:px-0">
            {imagensAntesDepois.map((src, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden shadow-card shrink-0 w-[80%] md:w-auto snap-center"
              >
                <div className="relative aspect-[9/16]">
                  <Image
                    src={src}
                    alt={`Antes e depois — paciente ${i + 1}`}
                    fill
                    className={`object-cover ${i === 0 ? "object-left" : ""}`}
                    sizes="(max-width: 768px) 80vw, 280px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Linha 2 — 2 vídeos 16:9. Mobile: stack. Desktop: grid 2 cols. */}
        <div className="md:max-w-[1000px] mx-auto mt-12 md:mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {videosAntesDepois.map((src, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden shadow-card"
              >
                <div className="relative aspect-[16/9]">
                  <video
                    controls
                    preload="metadata"
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={src} type="video/mp4" />
                  </video>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="font-sans text-[12px] md:text-[13px] italic text-marrom text-center max-w-[640px] mx-auto mt-8 md:mt-10">
          Todas as fotos foram tiradas com celular, sem edição. Resultados
          individuais podem variar conforme adesão ao protocolo.
        </p>

        {/* 6.2 Divisor */}
        <div className="flex items-center justify-center my-16 md:my-20">
          <div className="flex-1 max-w-[120px] h-px bg-sos-dourado/40" />
          <div className="relative w-8 h-8 mx-4">
            <Leaf className="!static w-8 h-8" opacity={0.4} />
          </div>
          <div className="flex-1 max-w-[120px] h-px bg-sos-dourado/40" />
        </div>

        {/* 6.3 Depoimentos */}
        <div className="text-center mb-10 md:mb-14">
          <h3 className="font-serif text-[26px] md:text-[32px] leading-[1.15] font-medium text-texto mb-3">
            O que as mulheres que fizeram o tratamento certo{" "}
            <em className="italic">relatam</em>
          </h3>
          <p className="font-sans text-[16px] md:text-[18px] text-marrom max-w-[540px] mx-auto">
            Com o Manual, o resultado vai além da balança.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-creme rounded-2xl p-7 md:p-8 relative"
            >
              <div
                className="font-serif text-[64px] text-sos-dourado/60 leading-none absolute top-3 left-5 select-none"
                aria-hidden="true"
              >
                &ldquo;
              </div>
              <p className="font-serif italic text-[18px] md:text-[19px] text-texto font-medium mb-6 relative z-10 mt-6 leading-[1.4]">
                {t.quote}
              </p>
              <div className="font-sans text-[14px] font-semibold text-texto">
                {t.name}
              </div>
              <div className="font-sans text-[13px] text-marrom">
                {t.detail}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12 md:mt-16">
          <Cta dataCta="sos-bloco-6">QUERO ESSES RESULTADOS TAMBÉM</Cta>
        </div>
      </div>
    </section>
  );
}
