import Image from "next/image";
import { Leaf } from "../../sos-canetas-_shared/_components/Leaf";
import { RodapeInstitucional } from "@/components/rodape-institucional";
import { Cta, CtaNota } from "./Cta";
import { PRECO } from "./constants";

type SecaoProps = { variante: string };

function Rotulo({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-sans text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.16em] text-sos-dourado-esc mb-4">
      {children}
    </p>
  );
}

function Titulo({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-serif text-[28px] md:text-[42px] leading-[1.12] md:leading-[1.06] font-medium text-texto">
      {children}
    </h2>
  );
}

// 3.1 · Abertura da oferta
export function AberturaOferta() {
  return (
    <section className="bg-verde-esc text-creme py-16 md:py-24 px-6 md:px-20">
      <div className="max-w-[760px] mx-auto text-center">
        <h2 className="font-serif text-[30px] md:text-[46px] leading-[1.1] font-medium mb-6">
          Você já fez a parte cara.{" "}
          <em className="italic text-[#F2C230]">
            Falta a parte que faz o resultado ficar.
          </em>
        </h2>
        <p className="font-sans text-[16px] md:text-[19px] leading-[1.7] text-creme/85">
          Você já investe R$ 500, R$ 1.000, às vezes R$ 2.000 por mês nesse
          tratamento. O <strong className="text-creme">Método Metabólico Feminino</strong>{" "}
          é o que garante que esse dinheiro não vire reganho.
        </p>
      </div>
    </section>
  );
}

// 3.2 · A jornada — o que ela se torna em cada fase, não lista de aulas.
const fases = [
  {
    tag: "Começa aqui",
    titulo: "Raio-X Metabólico",
    texto:
      "Uma avaliação rápida que identifica em qual fase do tratamento você está hoje. Você não perde um minuto com conteúdo que não é seu — já entra sabendo o que fazer no seu caso.",
  },
  {
    tag: "Fase 1",
    titulo: "Aceleração Inicial",
    texto:
      "Você emagrece firme, protegendo o músculo, com energia e sem murchar. É a fase em que a maioria das mulheres perde massa magra sem perceber — e é onde você vai fazer diferente.",
  },
  {
    tag: "Fase 2",
    titulo: "Ponto de Virada",
    texto:
      "O dia em que a balança trava, você não entra em pânico e não corre para subir a dose. Você sabe exatamente o que mudar para o corpo voltar a responder.",
  },
  {
    tag: "Fase 3",
    titulo: "Recomposição",
    texto:
      "A fase de firmar o corpo e cuidar da pele e do rosto. Você chega no fim do tratamento bonita, não acabada.",
  },
  {
    tag: "Fase 4",
    titulo: "Alta da Caneta",
    texto:
      "O dia que você mais teme vira o mais planejado. Seu corpo chega preparado para se sustentar sozinho quando a caneta sair.",
  },
];

const pilares = [
  {
    titulo: "Mentalidade",
    texto:
      "Reprograma a sua relação com a comida enquanto a fome está desligada. É a única janela da sua vida em que isso é fácil.",
  },
  {
    titulo: "Nutrição",
    texto:
      "O que comer em cada fase, com a proteína no ponto certo para proteger o seu músculo. Inclui cardápios (plano flexível ou fechado), substituições, receitas e marmita express.",
  },
  {
    titulo: "Suplementação",
    texto:
      "O que tomar durante todo o tratamento, e o que muda em cada fase específica.",
  },
  {
    titulo: "Blindagem",
    texto:
      "Os protocolos para intestino travado, enjoo, falta de disposição e queda de cabelo. Inclui o protocolo 48h de Ouro: o que fazer nas 24 horas antes e nas 24 horas depois de cada aplicação para sentir muito menos efeito colateral.",
  },
];

export function Jornada({ variante }: SecaoProps) {
  return (
    <section className="bg-creme py-16 md:py-24 px-6 md:px-20 relative overflow-hidden">
      <Leaf className="top-[-40px] right-[-60px] w-[240px] h-[240px]" opacity={0.1} rotation={40} />
      <div className="max-w-[860px] mx-auto relative">
        <div className="text-center mb-10 md:mb-14">
          <Rotulo>O que você recebe</Rotulo>
          <Titulo>
            A jornada inteira do tratamento, <em className="italic">fase por fase</em>
          </Titulo>
        </div>

        <ol className="relative space-y-4 md:space-y-5">
          {fases.map((f, i) => (
            <li
              key={f.titulo}
              className={`rounded-2xl p-6 md:p-8 ${
                i === 0
                  ? "bg-sos-dourado/10 border-2 border-sos-dourado-esc"
                  : "bg-sos-creme-soft border border-sos-borda-dourada"
              }`}
            >
              <div className="font-sans text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.14em] text-sos-terracota mb-1.5">
                {f.tag}
              </div>
              <h3 className="font-serif text-[22px] md:text-[27px] font-medium text-texto leading-tight mb-2">
                {f.titulo}
              </h3>
              <p className="font-sans text-[15px] md:text-[17px] text-marrom leading-[1.65]">
                {f.texto}
              </p>
            </li>
          ))}
        </ol>

        <div className="text-center mt-14 md:mt-16 mb-8">
          <h3 className="font-serif text-[24px] md:text-[32px] font-medium text-texto leading-tight">
            E em todas as fases, <em className="italic">quatro pilares</em>{" "}
            caminham com você
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-5">
          {pilares.map((p) => (
            <div key={p.titulo} className="bg-branco rounded-2xl p-6 md:p-7 shadow-card border-t-4 border-sos-dourado">
              <h4 className="font-serif text-[21px] md:text-[23px] font-medium text-texto mb-2">
                {p.titulo}
              </h4>
              <p className="font-sans text-[15px] text-marrom leading-[1.65]">{p.texto}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center mt-12">
          <Cta variante={variante} dataCta={`mmf-jornada-${variante}`}>
            QUERO MEU ACESSO AGORA
          </Cta>
          <CtaNota>{PRECO.parcelas} · acesso imediato · 7 dias de garantia</CtaNota>
        </div>
      </div>
    </section>
  );
}

// 3.3 · Prova social #1 — prints reais de alunas do MMF, com a frase
// essencial destacada em cima (ela não vai ler o print inteiro).
const prints = [
  {
    src: "/images/depoimento-2.jpg",
    w: 750,
    h: 1270,
    destaque: "“Amanhã fará 1 mês que comecei essa caminhada com seu MMF e já se foram 7 kg!”",
  },
  {
    src: "/images/depoimento-3.jpg",
    w: 750,
    h: 821,
    destaque: "“Funciona e sem sofrimento! Comecei dia 14 e já foram 5,650 kg!”",
  },
  {
    src: "/images/depoimento-4.jpg",
    w: 1019,
    h: 1779,
    destaque: "“Estou me sentindo super bem. Sem nenhum efeito colateral.”",
  },
  {
    src: "/images/depoimento-1.jpg",
    w: 750,
    h: 1297,
    destaque: "“Não estou sentindo vontade de doces. Nem acredito!”",
  },
];

export function ProvaPrints() {
  return (
    <section className="bg-sos-creme-soft py-16 md:py-24 px-6 md:px-20">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <Rotulo>Resultados reais</Rotulo>
          <Titulo>
            O que muda quando <em className="italic">a condução é certa</em>
          </Titulo>
        </div>

        <div className="flex md:grid md:grid-cols-4 gap-4 md:gap-5 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0 -mx-6 md:mx-0 px-6 md:px-0 items-start">
          {prints.map((p) => (
            <figure key={p.src} className="shrink-0 w-[78%] md:w-auto snap-center">
              <figcaption className="font-serif italic text-[17px] md:text-[18px] leading-[1.35] text-texto mb-3">
                <mark className="bg-[#F2C230]/45 text-texto px-1 box-decoration-clone">
                  {p.destaque}
                </mark>
              </figcaption>
              <div className="relative rounded-2xl overflow-hidden shadow-card max-h-[420px]">
                <Image
                  src={p.src}
                  alt="Print de conversa com aluna do Método Metabólico Feminino"
                  width={p.w}
                  height={p.h}
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 78vw, 260px"
                />
              </div>
            </figure>
          ))}
        </div>

        <p className="font-sans text-[12px] md:text-[13px] italic text-marrom text-center max-w-[640px] mx-auto mt-8">
          Prints reais, compartilhados com autorização. Resultados individuais
          podem variar conforme adesão ao método.
        </p>
      </div>
    </section>
  );
}

// 3.4 · Autoridade
const metricas = [
  { number: "14", label: "anos de clínica" },
  { number: "3.000+", label: "mulheres acompanhadas" },
  { number: "14 kg", label: "que ela mesma já perdeu" },
];

export function Autoridade({ variante }: SecaoProps) {
  return (
    <section className="bg-creme py-16 md:py-24 px-6 md:px-20 relative overflow-hidden">
      <Leaf className="bottom-[-60px] left-[-40px] w-[260px] h-[260px]" opacity={0.1} rotation={140} />
      <div className="max-w-[1100px] mx-auto relative grid md:grid-cols-[40%_60%] gap-10 md:gap-16 items-start">
        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-card">
          <Image
            src="/images/sos-canetas/michelly-about.jpg"
            alt="Michelly Silveira, nutricionista"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </div>

        <div>
          <Rotulo>Quem estará te acompanhando</Rotulo>
          <div className="border-l-[3px] border-sos-dourado pl-4 mb-8">
            <div className="font-serif text-[28px] md:text-[36px] font-medium text-texto leading-tight">
              Michelly Silveira
            </div>
            <div className="font-sans text-[13px] md:text-[14px] text-marrom mt-1">
              Nutricionista · CRN-3 36739 · Especialista em Saúde da Mulher
            </div>
          </div>

          <div className="font-sans text-[16px] md:text-[17px] text-texto leading-[1.75] space-y-5 max-w-[580px]">
            <p>
              Michelly Silveira é nutricionista, especialista em saúde da mulher,
              com 14 anos de clínica e mais de 3.000 mulheres acompanhadas.
            </p>
            <p>
              <strong>Ela foi contra a caneta.</strong> Levou dois anos para
              admitir que estava errada — não sobre o remédio, mas sobre quem
              precisava ser conduzido. As pacientes continuaram usando com ou sem
              a permissão dela, e voltavam assustadas: intestino travado, cabelo
              caindo, o corpo emagrecendo e murchando junto.
            </p>
            <p>
              Foi estudando esses casos, um por um, que ela montou o Método
              Metabólico Feminino.
            </p>
            <p>
              E antes de ser nutricionista, ela foi a paciente. Já foi obesa, já
              esteve 14 quilos acima do que está hoje, já se olhou no espelho e
              não se reconheceu. <em className="font-serif italic text-[18px]">É de onde ela fala.</em>
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 md:gap-6 items-start mt-10 pt-8 border-t border-sos-borda-dourada">
            {metricas.map((m, i) => (
              <div key={m.label} className={i > 0 ? "pl-4 md:pl-6 border-l border-sos-borda-dourada" : ""}>
                <div className="font-serif text-[28px] md:text-[42px] text-sos-dourado-esc leading-none mb-2 font-medium">
                  {m.number}
                </div>
                <div className="font-sans text-[11px] md:text-[13px] text-marrom uppercase tracking-[0.08em] leading-[1.4]">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Cta variante={variante} dataCta={`mmf-autoridade-${variante}`}>
              QUERO COMEÇAR COM A MICHELLY
            </Cta>
          </div>
        </div>
      </div>
    </section>
  );
}

// 3.5 · Bônus — cada um tira uma pedra do caminho
const bonus = [
  {
    n: 1,
    titulo: "Guia Pós-Caneta",
    texto:
      "O manual de conduta para depois. Para você nunca mais se perguntar “e agora, vou depender disso pra sempre?”.",
    valor: "R$ 397",
  },
  {
    n: 2,
    titulo: "Kit Fale com Seu Médico",
    texto:
      "Para você chegar na consulta informada e no controle, e o seu médico virar seu aliado — não alguém que só tem a dose na mão.",
    valor: "R$ 297",
  },
  {
    n: 3,
    titulo: "Kit Praticidade",
    texto:
      "Calculadora automática de calorias e macronutrientes, guia de substituições de alimentos e lista de compras pronta. Você abre, vê o que comprar e o que comer, e fecha.",
    valor: "R$ 297",
  },
];

export function Bonus() {
  return (
    <section className="bg-sos-creme-soft py-16 md:py-24 px-6 md:px-20">
      <div className="max-w-[760px] mx-auto">
        <div className="text-center mb-10">
          <Rotulo>E você ainda leva</Rotulo>
          <Titulo>
            Três bônus, <em className="italic">cada um tira uma pedra do caminho</em>
          </Titulo>
        </div>
        <div className="space-y-4">
          {bonus.map((b) => (
            <div key={b.n} className="relative bg-creme rounded-2xl border border-sos-borda-dourada p-6 md:p-7">
              <span className="absolute -top-2.5 right-5 bg-sos-dourado text-creme text-[10px] font-sans font-semibold uppercase tracking-[0.1em] px-2 py-1 rounded">
                Grátis hoje
              </span>
              <div className="font-sans text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.14em] text-sos-terracota mb-1">
                Bônus {b.n}
              </div>
              <div className="flex items-baseline justify-between gap-4 mb-2">
                <h3 className="font-serif text-[22px] md:text-[26px] font-medium text-texto leading-tight">
                  {b.titulo}
                </h3>
                <s className="font-sans text-[14px] md:text-[15px] text-marrom whitespace-nowrap">{b.valor}</s>
              </div>
              <p className="font-sans text-[15px] md:text-[16px] text-marrom leading-[1.65]">{b.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 3.6 · Prova social #2 — vídeos de alunas.
const videos = [
  { src: "/images/sos-canetas/before-after-4.mp4", poster: "/images/sos-canetas/before-after-4-poster.jpg", ratio: "aspect-[9/16]" },
  { src: "/images/sos-canetas/before-after-5.mp4", poster: "/images/sos-canetas/before-after-5-poster.jpg", ratio: "aspect-[16/9]" },
];

export function ProvaVideos({ variante }: SecaoProps) {
  return (
    <section className="bg-creme py-16 md:py-24 px-6 md:px-20">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <Rotulo>Quem terminou o tratamento</Rotulo>
          <Titulo>
            O que eu mais escuto de <em className="italic">quem terminou o tratamento</em>
          </Titulo>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,320px)_1fr] gap-5 md:gap-6 items-center justify-center">
          {videos.map((v) => (
            <div key={v.src} className={`rounded-2xl overflow-hidden shadow-card ${v.ratio === "aspect-[9/16]" ? "max-w-[320px] mx-auto w-full" : ""}`}>
              <div className={`relative ${v.ratio}`}>
                <video controls preload="metadata" playsInline poster={v.poster} className="w-full h-full object-cover">
                  <source src={v.src} type="video/mp4" />
                </video>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center mt-12">
          <Cta variante={variante} dataCta={`mmf-prova2-${variante}`}>
            QUERO MEU ACESSO AGORA
          </Cta>
          <CtaNota>{PRECO.parcelas} · acesso imediato · 7 dias de garantia</CtaNota>
        </div>
      </div>
    </section>
  );
}

// 3.7 · Ancoragem + preço + botão. Preço sempre acima do botão; parcelado em
// destaque, à vista menor.
const ancoragem = [
  { item: "Raio-X Metabólico", valor: "R$ 800" },
  { item: "Método MMF completo — as 4 fases, com nutrição e suplementação", valor: "R$ 2.497" },
  { item: "Protocolos de Blindagem, com as 48h de Ouro", valor: "R$ 797" },
  { item: "Pilar de Mentalidade", valor: "R$ 797" },
  { item: "Bônus · Guia Pós-Caneta", valor: "R$ 397" },
  { item: "Bônus · Kit Fale com Seu Médico", valor: "R$ 297" },
  { item: "Bônus · Kit Praticidade", valor: "R$ 297" },
];
const TOTAL = "R$ 5.882";

export function Oferta({ variante }: SecaoProps) {
  return (
    <section id="oferta" className="bg-sos-creme-soft py-16 md:py-24 px-6 md:px-20 scroll-mt-6">
      <div className="max-w-[680px] mx-auto">
        <div className="text-center mb-8">
          <Rotulo>Tudo que você terá acesso</Rotulo>
          <p className="font-sans text-[16px] md:text-[18px] text-marrom leading-[1.7]">
            Acompanhar você o tratamento inteiro no consultório passaria de{" "}
            <strong className="text-texto">R$ 9.000 no ano</strong>.
          </p>
          <p className="font-serif text-[22px] md:text-[28px] text-texto font-medium mt-4">
            Somente agora, você está levando:
          </p>
        </div>

        <div className="bg-creme rounded-2xl border border-sos-borda-dourada overflow-hidden">
          <ul>
            {ancoragem.map((a) => (
              <li
                key={a.item}
                className="flex items-start justify-between gap-4 px-5 md:px-7 py-4 border-b border-sos-borda-dourada font-sans text-[14px] md:text-[16px]"
              >
                <span className="flex gap-2.5 text-texto">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="text-sos-verde-medio shrink-0 mt-[3px]" aria-hidden="true">
                    <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {a.item}
                </span>
                <span className="text-marrom whitespace-nowrap">{a.valor}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between px-5 md:px-7 py-4 font-sans font-semibold text-[15px] md:text-[17px] text-texto bg-sos-dourado/10">
            <span>Total</span>
            <span>{TOTAL}</span>
          </div>
        </div>

        <div className="text-center mt-10">
          <div className="font-sans text-[16px] text-marrom">
            De <s>{TOTAL}</s>
          </div>
          <div className="font-sans text-[16px] md:text-[17px] text-texto mt-2">
            Hoje, para você que assistiu até aqui:
          </div>
          <div className="font-serif font-medium text-sos-terracota leading-none mt-3">
            <span className="text-[26px] md:text-[32px] mr-2">12x de</span>
            <span className="text-[68px] md:text-[96px]">R$ 30</span>
          </div>
          <div className="font-sans text-[15px] md:text-[16px] text-marrom mt-2">
            ou {PRECO.avista} à vista
          </div>
          <p className="font-sans text-[15px] md:text-[16px] text-texto leading-[1.7] max-w-[520px] mx-auto mt-6 mb-8">
            É menos do que você gasta em um único mês de caneta. E a caneta é
            todo mês. <strong>Isto aqui é uma vez só.</strong>
          </p>
          <Cta variante={variante} dataCta={`mmf-oferta-${variante}`} className="w-full md:w-auto">
            QUERO MEU ACESSO AGORA
          </Cta>
          <CtaNota>Acesso imediato · 1 ano de acesso · 7 dias de garantia</CtaNota>
        </div>
      </div>
    </section>
  );
}

// 3.8 · Garantia dupla + 3.9 · Acesso
export function Garantia() {
  return (
    <>
      <section className="bg-sos-verde-medio text-creme py-16 md:py-24 px-6 md:px-20">
        <div className="max-w-[680px] mx-auto">
          <div className="text-center mb-10">
            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="mx-auto mb-5 text-[#F2C230]" aria-hidden="true">
              <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" strokeLinejoin="round" />
              <path d="M8.5 12l2.5 2.5L16 9.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h2 className="font-serif text-[30px] md:text-[44px] leading-[1.1] font-medium">
              O risco é todo meu, <em className="italic">em dobro</em>
            </h2>
          </div>
          <div className="space-y-5 font-sans text-[16px] md:text-[17px] leading-[1.75] text-creme/90">
            <p>
              <strong className="text-creme">Primeiro: 7 dias de garantia total.</strong>{" "}
              Você entra, vê tudo por dentro, e se não for para você — por
              qualquer motivo, não precisa ser problema técnico — pede o
              reembolso e recebe o seu dinheiro de volta.
            </p>
            <p>
              <strong className="text-creme">Segundo: garantia vitalícia de aplicação.</strong>{" "}
              Se você seguir o método e não tiver resultado, pode pedir seu
              dinheiro de volta. Não importa quanto tempo passe.
            </p>
            <p className="font-serif italic text-[22px] md:text-[26px] text-creme text-center pt-4">
              Testar não te custa nada.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-creme py-16 md:py-20 px-6 md:px-20">
        <div className="max-w-[680px] mx-auto text-center">
          <Rotulo>Seu acesso</Rotulo>
          <Titulo>
            <em className="italic">1 ano inteiro</em>, no seu ritmo
          </Titulo>
          <div className="font-sans text-[16px] md:text-[17px] text-marrom leading-[1.75] space-y-4 mt-6">
            <p>
              Tempo mais que suficiente para percorrer todas as fases no seu
              ritmo, voltar quantas vezes quiser em cada aula e atravessar o
              tratamento inteiro com o material na mão.
            </p>
            <p>
              Tudo fica numa área de membros, organizada por fase. Você entra
              pelo celular ou pelo computador, e em dois minutos depois do
              pagamento já está lá dentro.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

// 3.10 · As duas opções
export function DoisCaminhos({ variante }: SecaoProps) {
  return (
    <section className="bg-sos-creme-soft py-16 md:py-24 px-6 md:px-20">
      <div className="max-w-[860px] mx-auto">
        <div className="text-center mb-10">
          <Titulo>Você tem dois caminhos.</Titulo>
        </div>
        <div className="grid md:grid-cols-2 gap-4 md:gap-5">
          <div className="rounded-2xl border border-marrom/20 bg-creme p-6 md:p-8">
            <div className="font-sans text-[12px] font-semibold uppercase tracking-[0.14em] text-marrom/70 mb-3">
              Caminho 1
            </div>
            <p className="font-sans text-[16px] md:text-[17px] text-marrom leading-[1.7]">
              Fechar essa página e deixar a sua janela passar — usar a caneta só
              para emagrecer e torcer para dar certo quando ela sair.
            </p>
          </div>
          <div className="rounded-2xl border-2 border-sos-dourado-esc bg-creme p-6 md:p-8">
            <div className="font-sans text-[12px] font-semibold uppercase tracking-[0.14em] text-sos-terracota mb-3">
              Caminho 2
            </div>
            <p className="font-sans text-[16px] md:text-[17px] text-texto leading-[1.7]">
              Pegar o mapa inteiro agora, enquanto a janela ainda está aberta, e
              sair dessa <strong>firme, livre da caneta, com o resultado sendo seu.</strong>
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center mt-12">
          <Cta variante={variante} dataCta={`mmf-caminhos-${variante}`}>
            QUERO COMEÇAR HOJE
          </Cta>
          <CtaNota>{PRECO.parcelas} · acesso imediato · 7 dias de garantia</CtaNota>
        </div>
      </div>
    </section>
  );
}

// 3.11 · FAQ
const faq = [
  {
    q: "Eu ainda não comecei a caneta. Serve pra mim?",
    a: "Serve, e é o melhor momento possível. O método começa no primeiro dia de tratamento — você vai entrar já sabendo o que fazer em cada fase.",
  },
  {
    q: "Eu já parei a caneta. Ainda dá tempo?",
    a: "Dá, mas a conduta é outra. O Raio-X Metabólico identifica isso e te direciona para o Guia Pós-Caneta e para a fase de recomposição.",
  },
  {
    q: "Funciona com qualquer caneta e qualquer dose?",
    a: "Sim. O método não mexe na sua medicação — isso é decisão do seu médico. Ele cuida do que acontece em volta: o que você come, o que suplementa e como protege o seu músculo.",
  },
  {
    q: "Preciso comprar suplemento caro?",
    a: "Não. A suplementação é indicada por fase, com opções, e você decide com o seu orçamento. Nada aqui depende de comprar marca específica.",
  },
  {
    q: "Tenho tireoide / menopausa / resistência à insulina / fiz bariátrica.",
    a: "Todos esses casos estão contemplados. O Raio-X ajusta o método ao seu caso antes de você começar.",
  },
  {
    q: "Quando eu começo?",
    a: "Agora. O acesso é liberado assim que o pagamento é aprovado.",
  },
  {
    q: "Quanto tempo eu tenho de acesso?",
    a: "Um ano inteiro, para ver e rever quantas vezes quiser.",
  },
  {
    q: "E se não for para mim?",
    a: "Sete dias para pedir o reembolso por qualquer motivo, mais a garantia vitalícia de aplicação.",
  },
];

export function Faq({ variante }: SecaoProps) {
  return (
    <>
      <section className="bg-creme py-16 md:py-24 px-6 md:px-20">
        <div className="max-w-[760px] mx-auto">
          <div className="text-center mb-10">
            <Rotulo>Dúvidas</Rotulo>
            <Titulo>
              As perguntas <em className="italic">que mais chegam</em>
            </Titulo>
          </div>
          <div className="space-y-3">
            {faq.map((f) => (
              <details key={f.q} className="group bg-sos-creme-soft rounded-xl border border-sos-borda-dourada">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-5 md:px-6 py-4 md:py-5 font-sans font-semibold text-[15px] md:text-[17px] text-texto">
                  {f.q}
                  <span className="text-sos-dourado-esc text-[22px] leading-none transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="px-5 md:px-6 pb-5 font-sans text-[15px] md:text-[16px] text-marrom leading-[1.7]">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
          <div className="flex flex-col items-center mt-12">
            <Cta variante={variante} dataCta={`mmf-faq-${variante}`}>
              QUERO MEU ACESSO AGORA
            </Cta>
            <CtaNota>{PRECO.parcelas} · acesso imediato · 1 ano de acesso</CtaNota>
          </div>
        </div>
      </section>

      <RodapeInstitucional tema="verde">
        <p className="font-sans text-[13px] leading-[1.7] text-creme/80">
          Método Metabólico Feminino — todos os direitos reservados.
        </p>
      </RodapeInstitucional>
    </>
  );
}
