const itens = [
  {
    titulo: "Fase 1 · Emagrecimento",
    texto:
      "Você está perdendo peso de forma ativa. Proteína entre 1,2 e 1,5 g por quilo, calorias entre 1.200 e 1.500 e carboidrato em torno de 70 a 80 g por dia.",
  },
  {
    titulo: "Fase 2 · Recomposição / Platô",
    texto:
      "O peso estagnou ou você está buscando firmeza. Proteína sobe para 1,6 a 2,0 g por quilo, calorias entre 1.500 e 1.800 e carboidrato cai para uma média de 50 g por dia.",
  },
  {
    titulo: "Fase 3 · Desmame · Espaçamento",
    texto:
      "Você está reduzindo ou espaçando a medicação. Proteína sobe ao topo (1,8 a 2,2 g por quilo) para sustentar o resultado quando a caneta sair, com calorias e carboidratos voltando à faixa intermediária.",
  },
];

export function ComoFunciona() {
  return (
    <section className="bg-creme py-14 md:py-24 px-6 md:px-20">
      <div className="max-w-[1080px] mx-auto">
        <div className="max-w-[760px] mb-10 md:mb-14">
          <p className="font-sans text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.16em] text-sos-dourado-esc mb-5">
            As três fases do tratamento
          </p>
          <h2 className="font-serif text-[28px] md:text-[44px] leading-[1.15] md:leading-[1.08] font-medium text-texto">
            Cada fase pede{" "}
            <em className="italic">uma meta nutricional diferente</em>.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-7 mb-12 md:mb-16">
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

        {/* Dicas e observações */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-7">
          <div className="bg-sos-creme-soft rounded-2xl border border-sos-borda-dourada/40 p-6 md:p-7">
            <p className="font-sans text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.16em] text-sos-dourado-esc mb-3">
              Hidratação
            </p>
            <h3 className="font-serif text-[20px] md:text-[22px] font-medium text-texto leading-tight mb-3">
              35 a 40 ml de água por kg, em todas as fases.
            </h3>
            <p className="font-sans text-[14px] md:text-[15px] leading-[1.7] text-marrom">
              Distribua ao longo do dia. A hidratação ajuda no funcionamento
              intestinal — algo especialmente importante durante o uso de
              GLP-1.
            </p>
          </div>

          <div className="bg-sos-creme-soft rounded-2xl border border-sos-borda-dourada/40 p-6 md:p-7">
            <p className="font-sans text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.16em] text-sos-dourado-esc mb-3">
              Quando atualizar o peso
            </p>
            <h3 className="font-serif text-[20px] md:text-[22px] font-medium text-texto leading-tight mb-3">
              A cada 7 dias ou 15 dias.
            </h3>
            <p className="font-sans text-[14px] md:text-[15px] leading-[1.7] text-marrom">
              No começo do tratamento, com perdas mais rápidas, reajuste a
              cada 7 dias. Quando a perda ficar mais gradual, a cada 15 dias é
              suficiente para manter suas metas afinadas.
            </p>
          </div>
        </div>

        <p className="font-sans text-[12px] md:text-[13px] text-marrom/70 mt-10 md:mt-14 max-w-[760px] leading-relaxed">
          Esta calculadora é uma ferramenta de orientação geral. Os valores
          de proteína, calorias, carboidratos e gorduras são referências e não
          substituem o acompanhamento individualizado com sua nutricionista,
          que pode ajustar as metas conforme seus exames, composição corporal
          e objetivos pessoais.
        </p>
      </div>
    </section>
  );
}
