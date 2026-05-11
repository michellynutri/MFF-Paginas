"use client";

import { useEffect, useMemo, useState } from "react";
import {
  FASES,
  HIDRATACAO_ML_POR_KG,
  type FaseId,
} from "./fases";

const STORAGE_KEY = "calc-glp1:v1";

type SavedState = {
  peso: string;
  fase: FaseId;
};

function formatNumber(value: number, decimals = 0) {
  return value.toLocaleString("pt-BR", {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  });
}

function formatRange(min: number, max: number, decimals = 0) {
  if (min === max) return formatNumber(min, decimals);
  return `${formatNumber(min, decimals)} – ${formatNumber(max, decimals)}`;
}

export function Calculadora() {
  const [peso, setPeso] = useState<string>("");
  const [fase, setFase] = useState<FaseId>(1);
  const [proteinaPorKg, setProteinaPorKg] = useState<number>(
    FASES[1].proteina.min,
  );
  const [submitted, setSubmitted] = useState(false);

  // Carrega estado salvo
  useEffect(() => {
    if (typeof window === "undefined") return;
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    try {
      const saved = JSON.parse(raw) as SavedState;
      if (saved.peso) setPeso(saved.peso);
      if (saved.fase && [1, 2, 3].includes(saved.fase)) {
        setFase(saved.fase);
        setProteinaPorKg(
          (FASES[saved.fase].proteina.min + FASES[saved.fase].proteina.max) /
            2,
        );
      }
      if (saved.peso) setSubmitted(true);
    } catch {
      /* ignore */
    }
  }, []);

  // Quando muda de fase, reposiciona o slider para o meio da faixa nova
  useEffect(() => {
    const f = FASES[fase];
    setProteinaPorKg((f.proteina.min + f.proteina.max) / 2);
  }, [fase]);

  const pesoNumero = Number(peso.replace(",", "."));
  const pesoValido = pesoNumero >= 30 && pesoNumero <= 250;

  const faseAtual = FASES[fase];

  const proteinaTotal = useMemo(
    () => (pesoValido ? pesoNumero * proteinaPorKg : 0),
    [pesoNumero, pesoValido, proteinaPorKg],
  );

  const hidratacaoMin = pesoValido ? pesoNumero * HIDRATACAO_ML_POR_KG.min : 0;
  const hidratacaoMax = pesoValido ? pesoNumero * HIDRATACAO_ML_POR_KG.max : 0;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!pesoValido) return;
    setSubmitted(true);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ peso, fase } satisfies SavedState),
      );
    }
  }

  function handleRefazer() {
    setSubmitted(false);
  }

  function handleFaseChange(novaFase: FaseId) {
    setFase(novaFase);
    if (submitted && typeof window !== "undefined") {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ peso, fase: novaFase } satisfies SavedState),
      );
    }
  }

  return (
    <section id="calculadora" className="bg-creme py-12 md:py-20 px-6 md:px-20">
      <div className="max-w-[1080px] mx-auto">
        <div className="bg-sos-creme-soft rounded-3xl shadow-card border border-sos-borda-dourada/40 p-6 md:p-12">
          {!submitted || !pesoValido ? (
            <FormularioEntrada
              peso={peso}
              setPeso={setPeso}
              fase={fase}
              setFase={handleFaseChange}
              onSubmit={handleSubmit}
              pesoValido={pesoValido}
            />
          ) : (
            <ResultadoCompleto
              peso={pesoNumero}
              fase={faseAtual}
              proteinaPorKg={proteinaPorKg}
              setProteinaPorKg={setProteinaPorKg}
              proteinaTotal={proteinaTotal}
              hidratacaoMin={hidratacaoMin}
              hidratacaoMax={hidratacaoMax}
              onChangeFase={handleFaseChange}
              onRefazer={handleRefazer}
            />
          )}
        </div>
      </div>
    </section>
  );
}

/* ------------------------ FORMULÁRIO ------------------------ */

type FormProps = {
  peso: string;
  setPeso: (v: string) => void;
  fase: FaseId;
  setFase: (f: FaseId) => void;
  onSubmit: (e: React.FormEvent) => void;
  pesoValido: boolean;
};

function FormularioEntrada({
  peso,
  setPeso,
  fase,
  setFase,
  onSubmit,
  pesoValido,
}: FormProps) {
  return (
    <form onSubmit={onSubmit} className="animate-fade-up">
      {/* Step 1: Fase */}
      <div className="mb-10">
        <p className="font-sans text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.16em] text-sos-dourado-esc mb-4">
          1. Em qual fase você está hoje?
        </p>
        <div className="grid md:grid-cols-3 gap-3 md:gap-4">
          {([1, 2, 3] as const).map((id) => {
            const f = FASES[id];
            const ativo = fase === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => setFase(id)}
                aria-pressed={ativo}
                className={`text-left rounded-2xl border p-5 md:p-6 transition-all duration-200 ${
                  ativo
                    ? "border-sos-dourado-esc bg-creme shadow-[0_8px_24px_rgba(156,126,69,0.18)]"
                    : "border-sos-borda-dourada/60 bg-creme/60 hover:border-sos-dourado-esc/60 hover:bg-creme"
                }`}
              >
                <div
                  className={`font-sans text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.16em] mb-2 ${
                    ativo ? "text-sos-dourado-esc" : "text-marrom"
                  }`}
                >
                  {f.nome}
                </div>
                <div className="font-serif text-[19px] md:text-[22px] font-medium text-texto leading-tight mb-2">
                  {f.subtitulo}
                </div>
                <div className="font-sans text-[13px] text-marrom leading-[1.55]">
                  {f.descricao}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 2: Peso */}
      <div>
        <label
          htmlFor="peso"
          className="block font-sans text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.16em] text-sos-dourado-esc mb-4"
        >
          2. Qual o seu peso atual?
        </label>

        <div className="flex items-stretch gap-3 mb-6 max-w-[480px]">
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
          VER MINHAS METAS DIÁRIAS
        </button>

        <p className="font-sans text-[12px] md:text-[13px] text-marrom/70 mt-5 leading-relaxed max-w-[640px]">
          Esta ferramenta gera metas de referência baseadas no seu peso e na
          fase atual do tratamento. Não substitui o acompanhamento
          individualizado com sua nutricionista.
        </p>
      </div>
    </form>
  );
}

/* ------------------------ RESULTADO ------------------------ */

type ResultadoProps = {
  peso: number;
  fase: (typeof FASES)[FaseId];
  proteinaPorKg: number;
  setProteinaPorKg: (v: number) => void;
  proteinaTotal: number;
  hidratacaoMin: number;
  hidratacaoMax: number;
  onChangeFase: (f: FaseId) => void;
  onRefazer: () => void;
};

function ResultadoCompleto({
  peso,
  fase,
  proteinaPorKg,
  setProteinaPorKg,
  proteinaTotal,
  hidratacaoMin,
  hidratacaoMax,
  onChangeFase,
  onRefazer,
}: ResultadoProps) {
  return (
    <div className="animate-fade-up">
      {/* Cabeçalho do resultado */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 md:mb-10 pb-8 border-b border-sos-borda-dourada">
        <div>
          <p className="font-sans text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.16em] text-sos-dourado-esc mb-3">
            Suas metas diárias · {formatNumber(peso, peso % 1 === 0 ? 0 : 1)}{" "}
            kg
          </p>
          <h2 className="font-serif text-[28px] md:text-[40px] leading-[1.1] font-medium text-texto">
            {fase.nome} ·{" "}
            <em className="italic text-sos-dourado-esc">{fase.subtitulo}</em>
          </h2>
        </div>

        {/* Seletor de fase compacto */}
        <div className="flex flex-wrap gap-2 shrink-0">
          {([1, 2, 3] as const).map((id) => {
            const ativo = fase.id === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => onChangeFase(id)}
                aria-pressed={ativo}
                className={`font-sans font-semibold rounded-full px-4 md:px-5 py-2 text-[13px] md:text-[14px] transition-all duration-200 ${
                  ativo
                    ? "bg-sos-dourado-esc text-creme shadow-[0_4px_14px_rgba(156,126,69,0.28)]"
                    : "bg-creme text-marrom border border-sos-borda-dourada hover:border-sos-dourado-esc hover:text-texto"
                }`}
              >
                Fase {id}
              </button>
            );
          })}
        </div>
      </div>

      {/* Calorias - destaque */}
      <div className="bg-creme rounded-2xl border border-sos-borda-dourada/60 p-6 md:p-8 mb-6">
        <p className="font-sans text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.16em] text-sos-dourado-esc mb-3">
          Calorias totais
        </p>
        <div className="flex items-baseline gap-2 mb-1">
          <span className="font-serif text-[56px] md:text-[88px] leading-none font-medium text-sos-dourado-esc">
            {formatRange(fase.calorias.min, fase.calorias.max)}
          </span>
          <span className="font-serif text-[22px] md:text-[28px] font-medium text-texto">
            kcal
          </span>
        </div>
        <p className="font-sans text-[13px] md:text-[14px] text-marrom">
          Mantenha-se dentro dessa faixa ao longo do dia.
        </p>
      </div>

      {/* Macros grid */}
      <div className="grid md:grid-cols-2 gap-4 md:gap-5 mb-6">
        {/* Proteína com slider */}
        <div className="bg-creme rounded-2xl border border-sos-borda-dourada/60 p-6 md:p-7">
          <div className="flex items-baseline justify-between mb-2">
            <p className="font-sans text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.16em] text-sos-dourado-esc">
              Proteína
            </p>
            <p className="font-sans text-[12px] text-marrom">
              {formatNumber(proteinaPorKg, 2).replace(".", ",")} g/kg
            </p>
          </div>
          <div className="flex items-baseline gap-2 mb-4">
            <span className="font-serif text-[48px] md:text-[60px] leading-none font-medium text-texto">
              {formatNumber(proteinaTotal, 0)}
            </span>
            <span className="font-serif text-[20px] md:text-[22px] font-medium text-marrom">
              g por dia
            </span>
          </div>

          {/* Slider */}
          <div>
            <input
              type="range"
              min={fase.proteina.min}
              max={fase.proteina.max}
              step={0.05}
              value={proteinaPorKg}
              onChange={(e) => setProteinaPorKg(Number(e.target.value))}
              className="w-full accent-sos-dourado-esc cursor-pointer"
              aria-label="Ajustar gramas de proteína por kg dentro da faixa da fase"
            />
            <div className="flex items-center justify-between mt-1 font-sans text-[11px] text-marrom/70">
              <span>{fase.proteina.min.toString().replace(".", ",")} g/kg</span>
              <span>{fase.proteina.max.toString().replace(".", ",")} g/kg</span>
            </div>
          </div>
        </div>

        {/* Hidratação */}
        <div className="bg-creme rounded-2xl border border-sos-borda-dourada/60 p-6 md:p-7">
          <p className="font-sans text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.16em] text-sos-dourado-esc mb-2">
            Hidratação
          </p>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="font-serif text-[48px] md:text-[60px] leading-none font-medium text-texto">
              {formatNumber(hidratacaoMin / 1000, 1).replace(".", ",")}–
              {formatNumber(hidratacaoMax / 1000, 1).replace(".", ",")}
            </span>
            <span className="font-serif text-[20px] md:text-[22px] font-medium text-marrom">
              L
            </span>
          </div>
          <p className="font-sans text-[13px] text-marrom">
            Cerca de {formatNumber(hidratacaoMin, 0)}–
            {formatNumber(hidratacaoMax, 0)} ml ao longo do dia (35 a 40 ml por
            kg).
          </p>
        </div>

        {/* Carboidratos */}
        <div className="bg-creme rounded-2xl border border-sos-borda-dourada/60 p-6 md:p-7">
          <p className="font-sans text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.16em] text-sos-dourado-esc mb-2">
            Carboidratos
          </p>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="font-serif text-[48px] md:text-[60px] leading-none font-medium text-texto">
              {fase.carboidratos.min === fase.carboidratos.max
                ? `~${fase.carboidratos.min}`
                : `${fase.carboidratos.min}–${fase.carboidratos.max}`}
            </span>
            <span className="font-serif text-[20px] md:text-[22px] font-medium text-marrom">
              g por dia
            </span>
          </div>
          <p className="font-sans text-[13px] text-marrom">
            Equivale a{" "}
            {fase.carboidratos.kcalMin === fase.carboidratos.kcalMax
              ? `~${fase.carboidratos.kcalMin}`
              : `${fase.carboidratos.kcalMin}–${fase.carboidratos.kcalMax}`}{" "}
            kcal. Bom referencial para o My Fitness Pal.
          </p>
        </div>

        {/* Gorduras */}
        <div className="bg-creme rounded-2xl border border-sos-borda-dourada/60 p-6 md:p-7">
          <p className="font-sans text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.16em] text-sos-dourado-esc mb-2">
            Gorduras
          </p>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="font-serif text-[48px] md:text-[60px] leading-none font-medium text-texto">
              até {fase.gorduras.max}
            </span>
            <span className="font-serif text-[20px] md:text-[22px] font-medium text-marrom">
              g por dia
            </span>
          </div>
          <p className="font-sans text-[13px] text-marrom">
            Não passar muito de {fase.gorduras.max} g (≈{" "}
            {fase.gorduras.kcal} kcal).
          </p>
        </div>
      </div>

      {/* Observação carboidratos e gorduras */}
      <div className="bg-creme/60 border-l-[3px] border-sos-dourado rounded-r-xl px-5 py-4 mb-8">
        <p className="font-sans text-[13px] md:text-[14px] text-marrom leading-[1.65]">
          <span className="font-semibold text-texto">Importante:</span>{" "}
          carboidratos e gorduras podem oscilar conforme o seu peso e o quanto
          de proteína você está consumindo dentro do total de calorias. Use os
          valores acima como referência para fechar o dia no My Fitness Pal.
        </p>
      </div>

      {/* Quando atualizar */}
      <div className="border-t border-sos-borda-dourada pt-6 mt-2 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div>
          <p className="font-sans text-[13px] md:text-[14px] text-marrom leading-relaxed max-w-[640px]">
            <span className="font-semibold text-texto">
              Atualize seu peso a cada 7 dias
            </span>{" "}
            no início do tratamento (perdas mais rápidas) e{" "}
            <span className="font-semibold text-texto">a cada 15 dias</span>{" "}
            quando a perda já estiver mais gradual.
          </p>
        </div>
        <button
          type="button"
          onClick={onRefazer}
          className="inline-flex items-center justify-center rounded-full font-sans font-semibold tracking-wide bg-creme text-texto border border-sos-borda-dourada px-6 py-3 text-[14px] hover:border-sos-dourado-esc hover:text-sos-dourado-esc transition-all duration-200 whitespace-nowrap shrink-0"
        >
          Refazer cálculo
        </button>
      </div>
    </div>
  );
}
