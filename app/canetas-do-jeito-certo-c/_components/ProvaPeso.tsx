import { ListaDepoimentos } from "../../canetas-do-jeito-certo-_shared/_components/ListaDepoimentos";
import { DEPOIMENTOS_PROVA } from "../../canetas-do-jeito-certo-_shared/_components/depoimentos";
import { VideoDepoimento } from "../../canetas-do-jeito-certo-_shared/_components/VideoDepoimento";

// Seção 7 — prova de maior peso, logo depois da autoridade.
//
// IMPORTANTE: a copy v4 traz aqui dois depoimentos de exemplo ("Fernanda, 3
// meses de caneta" e "Patrícia, pós-caneta"), marcados nela mesma como
// placeholder. Eles NÃO entraram: depoimento inventado publicado é prova
// social falsa, e o risco não é só de imagem. O bloco usa os relatos reais que
// já rodam nas outras variantes.
//
// TODO(michelly): a copy pede aqui prova de peso — relatos com número, nome e
// fase (começo, platô, desmame), variados. Assim que houver material real,
// trocar; é o degrau mais fraco da página hoje.

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

export function ProvaPeso() {
  return (
    <section className="bg-cjc-dia py-16 md:py-24 px-6 md:px-20">
      <div className="max-w-[1080px] mx-auto">
        <h2 className="font-cjc-display text-[29px] md:text-[44px] leading-[1.12] md:leading-[1.06] font-semibold text-cjc-dia-texto mb-12 md:mb-14 text-center">
          Não acredita em mim.{" "}
          <em className="italic text-cjc-dia-menta">Acredita nelas.</em>
        </h2>

        <ul className="grid gap-5 md:grid-cols-2 md:gap-7 max-w-[880px] mx-auto mb-12">
          {videos.map((v) => (
            <li
              key={v.src}
              className="rounded-2xl overflow-hidden border border-cjc-dia-linha-suave bg-cjc-dia-superficie"
            >
              <div className="relative aspect-video">
                <VideoDepoimento src={v.src} poster={v.poster} alt={v.alt} />
              </div>
            </li>
          ))}
        </ul>

        <ListaDepoimentos itens={DEPOIMENTOS_PROVA} tema="dia" />
      </div>
    </section>
  );
}
