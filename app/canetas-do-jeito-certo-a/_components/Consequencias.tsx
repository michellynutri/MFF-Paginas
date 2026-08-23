const itens = [
  {
    titulo: "Você vira refém da medicação.",
    texto:
      "O medo de parar cresce, a data vai sendo empurrada para frente, e a ferramenta que era temporária se torna permanente.",
  },
  {
    titulo: "O corpo perde o motor que sustenta o peso.",
    texto:
      "A massa magra que foi embora durante o tratamento é justamente a que manteria o gasto de energia depois dele.",
  },
  {
    titulo: "Cada recomeço fica mais difícil que o anterior.",
    texto:
      "O ciclo de perder e recuperar cobra caro do metabolismo e acaba com a sua própria confiança.",
  },
  {
    titulo: "A conta financeira se repete.",
    texto:
      "Meses de medicação investidos, resultado desfeito, e a decisão de começar tudo de novo.",
  },
  {
    titulo: "A fase da redução chega e você improvisa.",
    texto:
      "O momento mais delicado do tratamento inteiro resolvido no susto, sem nenhum protocolo pronto.",
  },
];

export function Consequencias() {
  return (
    <section className="bg-cjc-noite-esc py-16 md:py-24 px-6 md:px-20">
      <div className="max-w-[900px] mx-auto">
        <div className="mb-12 md:mb-14">
          <h2 className="font-cjc-display text-[29px] md:text-[44px] leading-[1.12] md:leading-[1.06] font-semibold text-cjc-texto max-w-[620px]">
            O que acontece quando a saída{" "}
            <em className="italic">não é planejada</em>
          </h2>
        </div>

        <ol className="space-y-0">
          {itens.map((item, i) => (
            <li
              key={item.titulo}
              className="grid grid-cols-[auto_1fr] gap-x-5 md:gap-x-8 py-6 md:py-7 border-t border-cjc-linha-suave last:border-b"
            >
              <span
                className="font-cjc-display text-[15px] md:text-[17px] text-cjc-argila/70 tabular-nums pt-1"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-sans font-semibold text-[16px] md:text-[19px] text-cjc-texto leading-[1.4] mb-2">
                  {item.titulo}
                </h3>
                <p className="font-sans text-[15px] md:text-[16px] leading-[1.65] text-cjc-texto-suave max-w-[620px]">
                  {item.texto}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
