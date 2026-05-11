"use client";

import { useEffect, useMemo, useState } from "react";

const PROTEIN_PER_KG = 1.5;
const MEAL_OPTIONS = [3, 4, 5, 6] as const;
const STORAGE_KEY = "calc-proteina:peso";

function formatGrams(value: number) {
  return value.toLocaleString("pt-BR", {
    maximumFractionDigits: 0,
  });
}

export function Calculadora() {
  const [peso, setPeso] = useState<string>("");
  const [refeicoes, setRefeicoes] = useState<number>(4);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const saved =
      typeof window !== "undefined"
        ? window.localStorage.getItem(STORAGE_KEY)
        : null;
    if (saved) {
      setPeso(saved);
      setSubmitted(true);
    }
  }, []);

  const pesoNumero = Number(peso.replace(",", "."));
  const pesoValido = pesoNumero >= 30 && pesoNumero <= 250;

  const totalDiario = useMemo(
    () => (pesoValido ? pesoNumero * PROTEIN_PER_KG : 0),
    [pesoNumero, pesoValido],
  );

  const porRefeicao = useMemo(
    () => (totalDiario > 0 ? totalDiario / refeicoes : 0),
    [totalDiario, refeicoes],
  );

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!pesoValido) return;
    setSubmitted(true);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, peso);
    }
  }

  function handleNovoCalculo() {
    setSubmitted(false);
  }

  return (
    <section
      id="calculadora"
      className="bg-creme py-12 md:py-20 px-6 md:px-20"
    >
      <div className="max-w-[920px] mx-auto">
        <div className="bg-sos-creme-soft rounded-3xl shadow-card border border-sos-borda-dourada/40 p-6 md:p-12">
          {!submitted || !pesoValido ? (
            <form onSubmit={handleSubmit} className="animate-fade-up">
              <label
                htmlFor="peso"
                className="block font-sans text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.16em] text-sos-dourado-esc mb-4"
              >
                Seu peso atual
              </label>

              <div className="flex items-stretch gap-3 mb-6">
                <div className="relative flex-1">
                  <input
                    id="peso"
                    type="number"
                    inputMode="decimal"
                    step="0.1"
                    min={30}
                    max={250}
                    placeholder="Ex.: 72,5"
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)}
                    className="w-full bg-creme border border-sos-borda-dourada rounded-2xl px-5 py-5 md:py-6 pr-16 font-serif text-[28px] md:text-[36px] text-texto placeholder:text-marrom/40 focus:outline-none focus:border-sos-dourado-esc focus:ring-2 focus:ring-sos-dourado/30 transition"
                    autoFocus
                  />
                  <span className="absolute right-5 top-1/2 -translate-y-1/2 font-sans text-[14px] md:text-[16px] text-marrom uppercase tracking-[0.14em]">
                    kg
                  </span>
                </div>
              </div>

              <button
                type="submit"
                disabled={!pesoValido}
                className="w-full md:w-auto inline-flex items-center justify-center rounded-full font-sans font-semibold tracking-wide transition-all duration-200 ease-out hover:translate-y-[-2px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sos-dourado-esc bg-sos-dourado-esc text-creme px-10 md:px-12 py-5 md:py-6 text-[16px] md:text-[17px] shadow-[0_8px_24px_rgba(156,126,69,0.28)] hover:shadow-[0_12px_32px_rgba(156,126,69,0.35)] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                CALCULAR MINHA PROTEÍNA
              </button>

              <p className="font-sans text-[12px] md:text-[13px] text-marrom/70 mt-5 leading-relaxed">
                Cálculo de referência (1,5 g de proteína por quilo). Para
                ajustes finos conforme seu objetivo e composição corporal,
                procure orientação individualizada com sua nutricionista.
              </p>
            </form>
          ) : (
            <div className="animate-fade-up">
              {/* Resultado principal */}
              <p className="font-sans text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.16em] text-sos-dourado-esc mb-4">
                Para {pesoNumero.toLocaleString("pt-BR")} kg, você precisa de
              </p>

              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-serif text-[72px] md:text-[112px] leading-none font-medium text-sos-dourado-esc">
                  {formatGrams(totalDiario)}
                </span>
                <span className="font-serif text-[28px] md:text-[40px] font-medium text-texto">
                  g
                </span>
              </div>

              <p className="font-sans text-[16px] md:text-[18px] text-marrom mb-10">
                de <em className="font-serif italic">proteína por dia</em> —
                distribuídas ao longo das suas refeições.
              </p>

              {/* Seletor de refeições */}
              <div className="border-t border-sos-borda-dourada pt-8 mb-6">
                <p className="font-sans text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.16em] text-sos-dourado-esc mb-4">
                  Quantas refeições você faz por dia?
                </p>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {MEAL_OPTIONS.map((n) => {
                    const ativo = refeicoes === n;
                    return (
                      <button
                        key={n}
                        type="button"
                        onClick={() => setRefeicoes(n)}
                        className={`font-sans font-semibold rounded-full px-5 md:px-6 py-2.5 md:py-3 text-[14px] md:text-[15px] transition-all duration-200 ${
                          ativo
                            ? "bg-sos-dourado-esc text-creme shadow-[0_4px_14px_rgba(156,126,69,0.28)]"
                            : "bg-creme text-marrom border border-sos-borda-dourada hover:border-sos-dourado-esc hover:text-texto"
                        }`}
                        aria-pressed={ativo}
                      >
                        {n} refeições
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Por refeição */}
              <div className="bg-creme rounded-2xl border border-sos-borda-dourada/60 p-5 md:p-7 mb-8">
                <p className="font-sans text-[13px] md:text-[14px] text-marrom mb-3">
                  Em cada refeição, mire em torno de:
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-[44px] md:text-[64px] leading-none font-medium text-texto">
                    {formatGrams(porRefeicao)}
                  </span>
                  <span className="font-serif text-[18px] md:text-[22px] font-medium text-marrom">
                    g de proteína
                  </span>
                </div>
                <p className="font-sans text-[12px] md:text-[13px] text-marrom/70 mt-3">
                  Cerca de {refeicoes} porções iguais por dia. Você pode
                  ajustar concentrando um pouco mais nas refeições principais
                  (almoço e jantar).
                </p>
              </div>

              {/* Equivalências */}
              <div className="border-t border-sos-borda-dourada pt-8 mb-2">
                <p className="font-sans text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.16em] text-sos-dourado-esc mb-5">
                  Equivalências aproximadas por refeição
                </p>
                <ul className="grid sm:grid-cols-2 gap-3 md:gap-4">
                  {[
                    {
                      label: "Frango grelhado",
                      valor: porRefeicao / 0.31,
                      unidade: "g",
                    },
                    {
                      label: "Ovo inteiro",
                      valor: porRefeicao / 6,
                      unidade: "unid.",
                    },
                    {
                      label: "Whey protein",
                      valor: porRefeicao / 22,
                      unidade: "scoop(s)",
                    },
                    {
                      label: "Iogurte natural integral",
                      valor: porRefeicao / 0.04,
                      unidade: "g",
                    },
                  ].map((item) => (
                    <li
                      key={item.label}
                      className="flex items-baseline justify-between gap-3 bg-creme rounded-xl border border-sos-borda-dourada/40 px-4 py-3"
                    >
                      <span className="font-sans text-[13px] md:text-[14px] text-marrom">
                        {item.label}
                      </span>
                      <span className="font-serif text-[20px] md:text-[22px] font-medium text-texto whitespace-nowrap">
                        {formatGrams(item.valor)}{" "}
                        <span className="font-sans text-[12px] md:text-[13px] font-normal text-marrom">
                          {item.unidade}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="font-sans text-[11px] md:text-[12px] text-marrom/60 mt-4 leading-relaxed">
                  Valores médios de referência. Pequenas variações entre marcas
                  e cortes são normais.
                </p>
              </div>

              {/* Recalcular */}
              <div className="border-t border-sos-borda-dourada pt-6 mt-8 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                <p className="font-sans text-[13px] text-marrom">
                  Mudou de peso esta semana? Atualize o cálculo.
                </p>
                <button
                  type="button"
                  onClick={handleNovoCalculo}
                  className="inline-flex items-center justify-center rounded-full font-sans font-semibold tracking-wide bg-creme text-texto border border-sos-borda-dourada px-6 py-3 text-[14px] hover:border-sos-dourado-esc hover:text-sos-dourado-esc transition-all duration-200"
                >
                  Refazer cálculo
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
