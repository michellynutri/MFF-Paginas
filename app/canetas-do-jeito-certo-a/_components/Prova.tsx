import Image from "next/image";
import { ListaDepoimentos } from "../../canetas-do-jeito-certo-_shared/_components/ListaDepoimentos";
import { DEPOIMENTOS_PROVA } from "../../canetas-do-jeito-certo-_shared/_components/depoimentos";
import { PRINT_PROVA } from "../../canetas-do-jeito-certo-_shared/_components/prints";
import { VideoDepoimento } from "../../canetas-do-jeito-certo-_shared/_components/VideoDepoimento";

// Vídeos de depoimento, os mesmos da /sos-canetas. Apontam pra pasta de lá em
// vez de duplicar 19 MB de mp4 no repo.
const videos = [
  {
    src: "/images/sos-canetas/before-after-4.mp4",
    poster: "/images/sos-canetas/before-after-4-poster.jpg",
    alt: "antes e depois de uma paciente da Michelly",
  },
  {
    src: "/images/sos-canetas/before-after-5.mp4",
    poster: "/images/sos-canetas/before-after-5-poster.jpg",
    alt: "relato de uma paciente sobre o tratamento",
  },
];

export function Prova() {
  return (
    <section className="bg-cjc-noite py-16 md:py-24 px-6 md:px-20">
      <div className="max-w-[1180px] mx-auto">
        <div className="text-center mb-12 md:mb-14">
          <h2 className="font-cjc-display text-[27px] md:text-[40px] leading-[1.14] md:leading-[1.08] font-semibold text-cjc-texto max-w-[680px] mx-auto">
            O que relatam as mulheres que fizeram o tratamento{" "}
            <em className="italic text-cjc-menta">do jeito certo</em>
          </h2>
        </div>

        <ul className="grid gap-4 md:grid-cols-2 md:gap-6 max-w-[900px] mx-auto mb-12 md:mb-16">
          {videos.map((v) => (
            <li
              key={v.src}
              className="rounded-2xl overflow-hidden border border-cjc-linha-suave bg-cjc-superficie"
            >
              <div className="relative aspect-video">
                <VideoDepoimento src={v.src} poster={v.poster} alt={v.alt} />
              </div>
            </li>
          ))}
        </ul>

        <ul className="grid gap-4 md:grid-cols-2 md:gap-6 max-w-[900px] mx-auto mb-12 md:mb-16 items-start">
          {PRINT_PROVA.map((p) => (
            <li
              key={p.src}
              className="rounded-2xl overflow-hidden border border-cjc-linha-suave bg-cjc-superficie"
            >
              <Image
                src={p.src}
                alt={p.alt}
                width={p.width}
                height={p.height}
                className="w-full h-auto"
                sizes="(max-width: 768px) 100vw, 440px"
              />
            </li>
          ))}
        </ul>

        <ListaDepoimentos itens={DEPOIMENTOS_PROVA} />

        <p className="font-sans text-[12px] md:text-[13px] italic text-cjc-texto-fraco text-center max-w-[680px] mx-auto mt-8 md:mt-10 leading-[1.6]">
          Relatos de pacientes e alunas da Michelly. Cada corpo responde de um
          jeito, e os resultados variam conforme o acompanhamento individual.
        </p>
      </div>
    </section>
  );
}
