import Image from "next/image";
import { PRINT_PROVA } from "../../canetas-do-jeito-certo-_shared/_components/prints";
import { VideoDepoimento } from "../../canetas-do-jeito-certo-_shared/_components/VideoDepoimento";

// Seção 3 — o método e o mar azul, juntos, com a prova forte logo em seguida
// (a copy v5 marca a prova exatamente aqui, e cedo é de propósito: é o ponto
// em que a promessa fica grande demais pra sustentar sozinha).
//
// O mecanismo desta variante chama "Plano da Blindagem", e não "Blindagem
// Metabólica" como na C. A diferença não é cosmética: lá o objeto é o corpo
// (blindar o metabolismo), aqui o objeto é o PRATO (o plano que você monta).
// A copy v5 inteira é sobre o entregável, e o nome do mecanismo acompanha.
//
// TODO(michelly): a copy pede aqui a prova mais forte que existir — um
// antes/depois real com legenda específica de resultado sustentado (nome,
// tempo, o que manteve). Entram por enquanto os prints e vídeos que já rodam
// nas outras variantes. Trocar assim que houver material próprio do workshop.

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

export function PlanoBlindagem() {
  return (
    <section className="bg-cjc-dia py-16 md:py-24 px-6 md:px-20">
      <div className="max-w-[900px] mx-auto">
        <h2 className="font-cjc-display text-[29px] md:text-[44px] leading-[1.12] md:leading-[1.06] font-semibold text-cjc-dia-texto mb-8">
          O jeito certo de montar o prato de quem usa caneta é diferente.{" "}
          <em className="italic text-cjc-dia-menta">
            E quase ninguém ensina.
          </em>
        </h2>

        <div className="font-sans text-[16px] md:text-[18px] leading-[1.75] text-cjc-dia-texto-suave space-y-5 max-w-[720px]">
          <p className="text-cjc-dia-texto font-medium">
            Quando você come pouco, cada garfada precisa valer o dobro.
          </p>
          <p>
            O prato de quem usa caneta não pode ser o mesmo prato genérico de
            uma dieta normal. Ele tem que ser montado pra aproveitar ao máximo o
            pouco que você consegue comer,{" "}
            <strong className="font-semibold text-cjc-dia-texto">
              protegendo o seu músculo em primeiro lugar
            </strong>
            .
          </p>
        </div>

        <div className="mt-10 md:mt-12 rounded-2xl border-2 border-cjc-dia-menta/30 bg-cjc-dia-superficie p-7 md:p-10">
          <p className="font-cjc-display text-[24px] md:text-[34px] leading-[1.2] font-semibold text-cjc-dia-texto">
            Isso tem um método. Eu chamo de{" "}
            <em className="italic text-cjc-dia-menta">Plano da Blindagem</em> —
            e é ele que eu vou te ensinar a montar, do zero, ao vivo.
          </p>
        </div>

        <div className="font-sans text-[16px] md:text-[18px] leading-[1.75] text-cjc-dia-texto-suave space-y-5 mt-10 md:mt-12 max-w-[720px]">
          <p>E vou ser honesta com você: existe muita nutricionista boa por aí.</p>
          <p>
            Mas montar dieta pensada pra quem usa as canetas — pro apetite que
            some, pro corpo da mulher, fase por fase — quase ninguém sabe como
            fazer.{" "}
            <strong className="font-semibold text-cjc-dia-texto">
              É isso que você vai aprender aqui.
            </strong>
          </p>
        </div>

        {/* A prova entra aqui, e não numa seção própria mais pra frente: a
            copy v5 marca este ponto como o lugar dela, logo depois da promessa
            de método. Vídeos e prints juntos porque são registros diferentes —
            um mostra a pessoa, o outro mostra o número. */}
        <ul className="mt-12 md:mt-14 grid gap-5 md:grid-cols-2 md:gap-7">
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

        <div className="mt-5 md:mt-7 grid gap-5 md:grid-cols-2 md:gap-7 items-start">
          {PRINT_PROVA.map((p) => (
            <figure
              key={p.src}
              className="rounded-2xl overflow-hidden border border-cjc-dia-linha-suave bg-cjc-dia-superficie"
            >
              <Image
                src={p.src}
                alt={p.alt}
                width={p.width}
                height={p.height}
                className="w-full h-auto"
                sizes="(max-width: 768px) 100vw, 420px"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
