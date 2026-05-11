const itens = [
  {
    titulo: "Por que 1,5 g por quilo?",
    texto:
      "Durante o uso de GLP-1, a ingestão cai e o corpo, junto da gordura, perde também massa magra. Uma meta na faixa de 1,5 g por quilo ajuda a preservar músculo, sustenta o metabolismo e protege cabelo e pele.",
  },
  {
    titulo: "Por que dividir entre as refeições?",
    texto:
      "O corpo absorve melhor a proteína em doses bem distribuídas ao longo do dia, em vez de concentrar tudo em uma refeição. Mirar uma quantidade parecida em cada uma facilita atingir a meta.",
  },
  {
    titulo: "Por que atualizar toda semana?",
    texto:
      "Conforme o peso muda, a sua meta de proteína também muda. Refazer o cálculo semanalmente garante que você não fique aquém da sua necessidade real durante o tratamento.",
  },
];

export function ComoFunciona() {
  return (
    <section className="bg-creme py-14 md:py-24 px-6 md:px-20">
      <div className="max-w-[1080px] mx-auto">
        <div className="max-w-[720px] mb-10 md:mb-14">
          <p className="font-sans text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.16em] text-sos-dourado-esc mb-5">
            Como o cálculo funciona
          </p>
          <h2 className="font-serif text-[28px] md:text-[44px] leading-[1.15] md:leading-[1.08] font-medium text-texto">
            Um cálculo simples,{" "}
            <em className="italic">com uma razão clínica</em> por trás.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-7">
          {itens.map((item, i) => (
            <div
              key={item.titulo}
              className="bg-sos-creme-soft rounded-2xl border border-sos-borda-dourada/40 p-6 md:p-7 shadow-card"
            >
              <div className="font-serif text-[40px] md:text-[48px] text-sos-dourado-esc leading-none mb-4 font-medium">
                0{i + 1}
              </div>
              <h3 className="font-serif text-[20px] md:text-[22px] font-medium text-texto leading-tight mb-3">
                {item.titulo}
              </h3>
              <p className="font-sans text-[14px] md:text-[15px] leading-[1.7] text-marrom">
                {item.texto}
              </p>
            </div>
          ))}
        </div>

        <p className="font-sans text-[12px] md:text-[13px] text-marrom/70 mt-10 md:mt-14 max-w-[720px] leading-relaxed">
          Esta calculadora é uma ferramenta de orientação geral, baseada na
          referência de 1,5 g de proteína por quilo de peso corporal. Ela não
          substitui o acompanhamento individualizado com sua nutricionista,
          que pode ajustar a meta conforme objetivos, exames e composição
          corporal.
        </p>
      </div>
    </section>
  );
}
