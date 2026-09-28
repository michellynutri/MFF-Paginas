"use client";

import { useEffect, useRef, useState } from "react";
import {
  alturaEmCm,
  CAMPOS_OBRIGATORIOS,
  camposNumeros,
  diagnosticar,
  perguntasPara,
  pesoEmKg,
  RESPOSTAS_VAZIAS,
  type Balanca,
  type CampoNumero,
  type ComoParou,
  type Condicao,
  type FimTratamento,
  type Incomodo,
  type Mudanca,
  type Numeros,
  type PerguntaId,
  type Respostas,
  type Situacao,
  type TempoDose,
  type TempoParada,
  type TempoUso,
  type Treino,
} from "./diagnostico";
import { AGUA_ML_POR_KG, CONDICOES, FASES, INCOMODOS } from "./fases";
import {
  AREA_DE_MEMBROS_URL,
  CONTEUDO_DO_INCOMODO,
  CONTEUDOS_DA_FASE,
  type Conteudo,
} from "./conteudos";

const STORAGE_KEY = "raio-x-mmf:v2";

type Tela = { tipo: "intro" } | { tipo: "pergunta"; indice: number } | { tipo: "resultado" };

type Opcao<T extends string> = { valor: T; rotulo: string; ajuda?: string };

const OPCOES: {
  situacao: Opcao<Situacao>[];
  tempoUso: Opcao<TempoUso>[];
  fimTratamento: Opcao<FimTratamento>[];
  tempoDose: Opcao<TempoDose>[];
  tempoParada: Opcao<TempoParada>[];
  comoParou: Opcao<ComoParou>[];
  balanca: Opcao<Balanca>[];
  treino: Opcao<Treino>[];
} = {
  situacao: [
    { valor: "vou_comecar", rotulo: "Ainda não comecei", ajuda: "Vou começar a caneta em breve" },
    { valor: "subindo", rotulo: "Estou usando e a dose ainda está subindo", ajuda: "O médico ainda está aumentando a dose" },
    { valor: "estavel", rotulo: "Estou usando e a dose está estável", ajuda: "Na mesma dose há algum tempo" },
    { valor: "medico_reduzindo", rotulo: "Meu médico está reduzindo ou espaçando a dose", ajuda: "Estamos planejando a saída" },
    {
      valor: "pausa_propria",
      rotulo: "Estou pulando ou espaçando doses por conta própria",
      ajuda: "Por custo, falta do remédio, efeito colateral…",
    },
    { valor: "parei", rotulo: "Já parei a caneta" },
  ],
  tempoUso: [
    { valor: "menos1m", rotulo: "Menos de 1 mês" },
    { valor: "1a3m", rotulo: "De 1 a 3 meses" },
    { valor: "3a6m", rotulo: "De 3 a 6 meses" },
    { valor: "6a12m", rotulo: "De 6 meses a 1 ano" },
    { valor: "mais12m", rotulo: "Mais de 1 ano" },
  ],
  fimTratamento: [
    { valor: "perto", rotulo: "Sim, estou nos últimos meses", ajuda: "O fim do tratamento está a 3 meses ou menos" },
    { valor: "longe", rotulo: "Não, ainda tenho bastante tratamento pela frente" },
    { valor: "nao_sei", rotulo: "Não sei ou ainda não combinamos" },
  ],
  tempoDose: [
    { valor: "menos4s", rotulo: "Menos de 4 semanas" },
    { valor: "4a8s", rotulo: "De 4 a 8 semanas" },
    { valor: "mais8s", rotulo: "Mais de 8 semanas" },
    { valor: "nao_sei", rotulo: "Não sei" },
  ],
  tempoParada: [
    { valor: "menos4s", rotulo: "Menos de 4 semanas" },
    { valor: "1a3m", rotulo: "De 1 a 3 meses" },
    { valor: "mais3m", rotulo: "Mais de 3 meses" },
  ],
  comoParou: [
    { valor: "medico", rotulo: "Com o meu médico", ajuda: "Ele deu alta ou reduzimos até parar" },
    { valor: "propria", rotulo: "Por conta própria", ajuda: "Custo, falta do remédio, efeito colateral…" },
  ],
  balanca: [
    { valor: "descendo", rotulo: "Descendo bem" },
    { valor: "devagar", rotulo: "Descendo, mas bem devagar" },
    { valor: "parada", rotulo: "Parada" },
    { valor: "subindo", rotulo: "Subindo" },
  ],
  treino: [
    { valor: "nao", rotulo: "Não faço" },
    { valor: "1a2", rotulo: "1 ou 2 vezes por semana" },
    { valor: "3mais", rotulo: "3 vezes ou mais por semana" },
  ],
};

const MUDANCAS: Record<Mudanca, string> = {
  creatina: "Comecei a tomar creatina",
  intestino: "Meu intestino está preso",
  menstruacao: "Me pesei perto da menstruação",
  dose_pulada: "Pulei ou atrasei alguma dose",
};

const TITULOS: Record<PerguntaId, { titulo: string; ajuda?: string }> = {
  situacao: { titulo: "Como está o seu tratamento com a caneta hoje?" },
  tempoUso: {
    titulo: "Há quanto tempo você usa a caneta?",
    ajuda: "Conte desde a primeira aplicação.",
  },
  fimTratamento: {
    titulo: "Você está perto do fim do tratamento combinado com o seu médico?",
  },
  tempoDose: {
    titulo: "Há quanto tempo você está nessa mesma dose?",
    ajuda: "Conte desde a última vez que a dose mudou.",
  },
  tempoParada: { titulo: "Há quanto tempo você parou?" },
  comoParou: { titulo: "Como foi a parada?" },
  numeros: {
    titulo: "Agora, os seus números",
    ajuda: "São eles que mostram a fase, mais do que a impressão da balança. Se não souber algum, deixe em branco.",
  },
  balanca: { titulo: "Como a balança se comportou nas últimas 4 semanas?" },
  meta: { titulo: "Qual é a sua meta de peso?" },
  mudancas: {
    titulo: "Alguma destas aconteceu nas últimas 4 semanas?",
    ajuda: "Elas mexem no número da balança sem ser gordura. Marque as que valem.",
  },
  treino: { titulo: "Você faz musculação ou treino de força?" },
  incomodos: {
    titulo: "Algum destes incomoda você hoje?",
    ajuda: "Marque quantos quiser.",
  },
  condicoes: {
    titulo: "Alguma destas faz parte da sua saúde?",
    ajuda: "O Raio-X ajusta as condutas ao seu caso.",
  },
};

const CAMPOS: Record<CampoNumero, { rotulo: string; sufixo: string; placeholder: string; ajuda?: string }> = {
  altura: { rotulo: "Altura", sufixo: "cm", placeholder: "Ex.: 165" },
  pesoInicial: { rotulo: "Peso antes de começar a caneta", sufixo: "kg", placeholder: "Ex.: 92" },
  pesoMinimo: { rotulo: "Menor peso a que você chegou", sufixo: "kg", placeholder: "Ex.: 74" },
  pesoHoje: { rotulo: "Peso hoje", sufixo: "kg", placeholder: "Ex.: 78,5" },
  peso4s: {
    rotulo: "Peso de 4 semanas atrás",
    sufixo: "kg",
    placeholder: "Ex.: 79,2",
    ajuda: "Veja no app da balança, em fotos ou anotações.",
  },
};

function lerSalvo(): { respostas: Respostas; concluido: boolean } | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const salvo = JSON.parse(raw) as { respostas: Respostas; concluido: boolean };
    if (!salvo?.respostas?.situacao) return null;
    return { respostas: { ...RESPOSTAS_VAZIAS, ...salvo.respostas }, concluido: !!salvo.concluido };
  } catch {
    return null;
  }
}

function salvar(respostas: Respostas, concluido: boolean) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ respostas, concluido }));
  } catch {
    /* navegação privada: segue sem salvar */
  }
}

export function RaioX() {
  const [tela, setTela] = useState<Tela>({ tipo: "intro" });
  const [respostas, setRespostas] = useState<Respostas>(RESPOSTAS_VAZIAS);
  const topo = useRef<HTMLDivElement>(null);

  // Quem já fez volta direto para o resultado.
  useEffect(() => {
    const salvo = lerSalvo();
    if (salvo?.concluido) {
      setRespostas(salvo.respostas);
      setTela({ tipo: "resultado" });
    }
  }, []);

  const perguntas = perguntasPara(respostas);

  function irPara(nova: Tela) {
    setTela(nova);
    // Só rola quando o topo do quiz saiu da tela (celular, resultado longo).
    requestAnimationFrame(() => {
      const el = topo.current;
      if (el && el.getBoundingClientRect().top < 0) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }

  function responder(parcial: Partial<Respostas>, indice: number) {
    const novas = { ...respostas, ...parcial };
    setRespostas(novas);
    const lista = perguntasPara(novas);
    if (indice + 1 < lista.length) {
      salvar(novas, false);
      irPara({ tipo: "pergunta", indice: indice + 1 });
    } else {
      salvar(novas, true);
      irPara({ tipo: "resultado" });
    }
  }

  function refazer() {
    setRespostas(RESPOSTAS_VAZIAS);
    salvar(RESPOSTAS_VAZIAS, false);
    irPara({ tipo: "pergunta", indice: 0 });
  }

  return (
    <div ref={topo} className="scroll-mt-6">
      {tela.tipo === "intro" && <Intro onComecar={() => irPara({ tipo: "pergunta", indice: 0 })} />}

      {tela.tipo === "pergunta" && (
        <Pergunta
          id={perguntas[tela.indice]}
          indice={tela.indice}
          total={perguntas.length}
          respostas={respostas}
          onResponder={(parcial) => responder(parcial, tela.indice)}
          onVoltar={() =>
            irPara(tela.indice === 0 ? { tipo: "intro" } : { tipo: "pergunta", indice: tela.indice - 1 })
          }
        />
      )}

      {tela.tipo === "resultado" && <Resultado respostas={respostas} onRefazer={refazer} />}
    </div>
  );
}

/* ------------------------------ INTRO ------------------------------ */

function Intro({ onComecar }: { onComecar: () => void }) {
  return (
    <div className="bg-sos-creme-soft rounded-3xl shadow-card border border-sos-borda-dourada p-6 md:p-12 animate-fade-up">
      <p className="font-sans text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.16em] text-sos-dourado-esc mb-4">
        Comece por aqui
      </p>
      <h2 className="font-serif text-[26px] md:text-[36px] leading-[1.12] font-medium text-texto mb-4">
        Em que fase do tratamento <em className="italic">você está hoje?</em>
      </h2>
      <p className="font-sans text-[16px] md:text-[18px] leading-[1.65] text-marrom mb-6 max-w-[620px]">
        Você responde sobre o seu tratamento, os seus números e a sua rotina. No fim, recebe a sua
        fase, o que ela significa, as melhores condutas para agora e quais conteúdos do método
        assistir primeiro.
      </p>
      <ul className="font-sans text-[15px] text-marrom space-y-2 mb-8">
        <li className="flex gap-2">
          <Ponto /> Leva de 3 a 4 minutos
        </li>
        <li className="flex gap-2">
          <Ponto /> Tenha à mão o seu peso de hoje e, se tiver, o de 4 semanas atrás
        </li>
        <li className="flex gap-2">
          <Ponto /> Refaça sempre que mudar de momento no tratamento
        </li>
      </ul>
      <BotaoPrincipal onClick={onComecar}>Fazer meu Raio-X</BotaoPrincipal>
    </div>
  );
}

/* ----------------------------- PERGUNTA ----------------------------- */

type PerguntaProps = {
  id: PerguntaId;
  indice: number;
  total: number;
  respostas: Respostas;
  onResponder: (parcial: Partial<Respostas>) => void;
  onVoltar: () => void;
};

function Pergunta({ id, indice, total, respostas: r, onResponder, onVoltar }: PerguntaProps) {
  const { titulo, ajuda } = TITULOS[id];

  return (
    <div className="bg-sos-creme-soft rounded-3xl shadow-card border border-sos-borda-dourada p-6 md:p-12">
      <div className="flex items-center justify-between gap-4 mb-3">
        <button
          type="button"
          onClick={onVoltar}
          className="font-sans text-[14px] text-marrom hover:text-texto underline-offset-4 hover:underline"
        >
          ← Voltar
        </button>
        <span className="font-sans text-[13px] text-marrom">
          {indice + 1} de {total}
        </span>
      </div>
      <div
        className="h-1.5 rounded-full bg-sos-borda-dourada mb-8 overflow-hidden"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={indice + 1}
      >
        <div
          className="h-full bg-sos-dourado-esc rounded-full transition-all duration-300"
          style={{ width: `${((indice + 1) / total) * 100}%` }}
        />
      </div>

      <div key={id} className="animate-fade-up">
        <h2 className="font-serif text-[24px] md:text-[32px] leading-[1.15] font-medium text-texto mb-2">
          {titulo}
        </h2>
        {ajuda && <p className="font-sans text-[15px] text-marrom mb-6">{ajuda}</p>}
        <div className={ajuda ? "" : "mt-6"}>
          {id === "situacao" && (
            <Escolha
              opcoes={OPCOES.situacao}
              atual={r.situacao}
              onEscolher={(v) => {
                // Trocar a situação muda quais números fazem sentido: limpa os específicos.
                const limpa = v !== r.situacao ? { pesoMinimo: "", peso4s: "", balanca: undefined, mudancas: [] } : {};
                onResponder({ situacao: v, ...limpa });
              }}
            />
          )}
          {id === "tempoUso" && (
            <Escolha opcoes={OPCOES.tempoUso} atual={r.tempoUso} onEscolher={(v) => onResponder({ tempoUso: v })} />
          )}
          {id === "fimTratamento" && (
            <Escolha
              opcoes={OPCOES.fimTratamento}
              atual={r.fimTratamento}
              onEscolher={(v) => onResponder({ fimTratamento: v })}
            />
          )}
          {id === "tempoDose" && (
            <Escolha opcoes={OPCOES.tempoDose} atual={r.tempoDose} onEscolher={(v) => onResponder({ tempoDose: v })} />
          )}
          {id === "tempoParada" && (
            <Escolha opcoes={OPCOES.tempoParada} atual={r.tempoParada} onEscolher={(v) => onResponder({ tempoParada: v })} />
          )}
          {id === "comoParou" && (
            <Escolha opcoes={OPCOES.comoParou} atual={r.comoParou} onEscolher={(v) => onResponder({ comoParou: v })} />
          )}
          {id === "numeros" && <NumerosForm respostas={r} onContinuar={onResponder} />}
          {id === "balanca" && (
            <Escolha opcoes={OPCOES.balanca} atual={r.balanca} onEscolher={(v) => onResponder({ balanca: v })} />
          )}
          {id === "meta" && <MetaForm inicial={r.meta} onContinuar={(meta) => onResponder({ meta })} />}
          {id === "mudancas" && (
            <Multipla
              rotulos={MUDANCAS}
              inicial={r.mudancas}
              nenhuma="Nenhuma, continuar"
              onContinuar={(mudancas) => onResponder({ mudancas })}
            />
          )}
          {id === "treino" && (
            <Escolha opcoes={OPCOES.treino} atual={r.treino} onEscolher={(v) => onResponder({ treino: v })} />
          )}
          {id === "incomodos" && (
            <Multipla
              rotulos={Object.fromEntries(Object.entries(INCOMODOS).map(([k, v]) => [k, v.rotulo])) as Record<Incomodo, string>}
              inicial={r.incomodos}
              nenhuma="Nenhum, continuar"
              onContinuar={(incomodos) => onResponder({ incomodos })}
            />
          )}
          {id === "condicoes" && (
            <Multipla
              rotulos={Object.fromEntries(Object.entries(CONDICOES).map(([k, v]) => [k, v.rotulo])) as Record<Condicao, string>}
              inicial={r.condicoes}
              nenhuma="Nenhuma, ver meu resultado"
              continuar="Ver meu resultado"
              onContinuar={(condicoes) => onResponder({ condicoes })}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function Escolha<T extends string>({
  opcoes,
  atual,
  onEscolher,
}: {
  opcoes: Opcao<T>[];
  atual?: T;
  onEscolher: (v: T) => void;
}) {
  return (
    <div className="grid gap-3" role="radiogroup">
      {opcoes.map((o) => {
        const marcada = atual === o.valor;
        return (
          <button
            key={o.valor}
            type="button"
            role="radio"
            aria-checked={marcada}
            onClick={() => onEscolher(o.valor)}
            className={`text-left rounded-2xl border-2 px-5 py-4 transition-all duration-150 hover:border-sos-dourado hover:bg-branco focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sos-dourado-esc ${
              marcada ? "border-sos-dourado-esc bg-branco" : "border-sos-borda-dourada bg-creme"
            }`}
          >
            <span className="block font-sans text-[16px] md:text-[17px] font-medium text-texto">{o.rotulo}</span>
            {o.ajuda && <span className="block font-sans text-[14px] text-marrom mt-0.5">{o.ajuda}</span>}
          </button>
        );
      })}
    </div>
  );
}

function Multipla<T extends string>({
  rotulos,
  inicial,
  nenhuma,
  continuar = "Continuar",
  onContinuar,
}: {
  rotulos: Record<T, string>;
  inicial: T[];
  nenhuma: string;
  continuar?: string;
  onContinuar: (v: T[]) => void;
}) {
  const [marcados, setMarcados] = useState<T[]>(inicial);
  const chaves = Object.keys(rotulos) as T[];

  function alternar(i: T) {
    setMarcados((m) => (m.includes(i) ? m.filter((x) => x !== i) : [...m, i]));
  }

  return (
    <>
      <div className="grid sm:grid-cols-2 gap-3 mb-8">
        {chaves.map((i) => {
          const marcado = marcados.includes(i);
          return (
            <button
              key={i}
              type="button"
              role="checkbox"
              aria-checked={marcado}
              onClick={() => alternar(i)}
              className={`flex items-center gap-3 text-left rounded-2xl border-2 px-4 py-3.5 transition-all duration-150 hover:border-sos-dourado focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sos-dourado-esc ${
                marcado ? "border-sos-dourado-esc bg-branco" : "border-sos-borda-dourada bg-creme"
              }`}
            >
              <span
                aria-hidden="true"
                className={`w-5 h-5 shrink-0 rounded-md border-2 flex items-center justify-center text-[12px] leading-none ${
                  marcado ? "bg-sos-dourado-esc border-sos-dourado-esc text-creme" : "border-sos-dourado"
                }`}
              >
                {marcado ? "✓" : ""}
              </span>
              <span className="font-sans text-[15px] md:text-[16px] text-texto">{rotulos[i]}</span>
            </button>
          );
        })}
      </div>
      <BotaoPrincipal onClick={() => onContinuar(marcados)}>{marcados.length ? continuar : nenhuma}</BotaoPrincipal>
    </>
  );
}

function valido(campo: CampoNumero, v: string) {
  return campo === "altura" ? alturaEmCm(v) !== null : pesoEmKg(v) !== null;
}

function NumerosForm({
  respostas,
  onContinuar,
}: {
  respostas: Respostas;
  onContinuar: (parcial: Partial<Respostas>) => void;
}) {
  const campos = camposNumeros(respostas.situacao);
  const [valores, setValores] = useState<Record<CampoNumero, string>>(() => ({
    altura: respostas.altura,
    pesoInicial: respostas.pesoInicial,
    pesoMinimo: respostas.pesoMinimo,
    pesoHoje: respostas.pesoHoje,
    peso4s: respostas.peso4s,
  }));
  const [tentou, setTentou] = useState(false);

  const erros = campos.filter((c) => {
    const v = valores[c].trim();
    if (v === "") return CAMPOS_OBRIGATORIOS.includes(c);
    return !valido(c, v);
  });

  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        setTentou(true);
        if (erros.length) return;
        onContinuar(Object.fromEntries(campos.map((c) => [c, valores[c].trim()])));
      }}
    >
      <div className="grid gap-5 mb-8">
        {campos.map((c) => {
          const cfg = CAMPOS[c];
          const obrigatorio = CAMPOS_OBRIGATORIOS.includes(c);
          const erro = tentou && erros.includes(c);
          return (
            <div key={c}>
              <label htmlFor={c} className="block font-sans text-[15px] md:text-[16px] font-medium text-texto mb-1.5">
                {cfg.rotulo}
                {!obrigatorio && <span className="font-normal text-marrom"> · opcional</span>}
              </label>
              {cfg.ajuda && <p className="font-sans text-[13px] text-marrom mb-2">{cfg.ajuda}</p>}
              <div className="flex items-center gap-3 max-w-[260px]">
                <input
                  id={c}
                  inputMode="decimal"
                  autoComplete="off"
                  placeholder={cfg.placeholder}
                  value={valores[c]}
                  aria-invalid={erro}
                  onChange={(e) => setValores((v) => ({ ...v, [c]: e.target.value.replace(/[^\d,.]/g, "") }))}
                  className={`w-full rounded-2xl border-2 bg-branco px-5 py-3.5 font-sans text-[18px] text-texto focus:outline-none focus:border-sos-dourado-esc ${
                    erro ? "border-sos-terracota" : "border-sos-borda-dourada"
                  }`}
                />
                <span className="font-sans text-[16px] text-marrom w-6">{cfg.sufixo}</span>
              </div>
              {erro && (
                <p className="font-sans text-[13px] text-sos-terracota mt-1.5">
                  {valores[c].trim() === ""
                    ? "Precisamos deste número."
                    : c === "altura"
                      ? "Digite a altura em centímetros (ex.: 165)."
                      : "Digite um peso entre 30 e 250 kg."}
                </p>
              )}
            </div>
          );
        })}
      </div>
      <BotaoPrincipal type="submit">Continuar</BotaoPrincipal>
    </form>
  );
}

function MetaForm({ inicial, onContinuar }: { inicial: string; onContinuar: (v: string) => void }) {
  const [meta, setMeta] = useState(inicial);
  const digitou = meta.trim() !== "";
  const ok = pesoEmKg(meta) !== null;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ok) onContinuar(meta.trim());
      }}
    >
      <label htmlFor="meta" className="sr-only">
        Meta de peso em quilos
      </label>
      <div className="flex items-center gap-3 max-w-[260px] mb-2">
        <input
          id="meta"
          inputMode="decimal"
          autoComplete="off"
          placeholder="Ex.: 68"
          value={meta}
          onChange={(e) => setMeta(e.target.value.replace(/[^\d,.]/g, ""))}
          className="w-full rounded-2xl border-2 border-sos-borda-dourada bg-branco px-5 py-3.5 font-sans text-[18px] text-texto focus:outline-none focus:border-sos-dourado-esc"
        />
        <span className="font-sans text-[16px] text-marrom w-6">kg</span>
      </div>
      <p className={`font-sans text-[13px] mb-8 ${digitou && !ok ? "text-sos-terracota" : "text-transparent"}`}>
        Digite um peso entre 30 e 250 kg.
      </p>
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <BotaoPrincipal type="submit" disabled={!ok}>
          Continuar
        </BotaoPrincipal>
        <button
          type="button"
          onClick={() => onContinuar("")}
          className="font-sans text-[15px] text-marrom underline underline-offset-4 hover:text-texto"
        >
          Não tenho uma meta definida
        </button>
      </div>
    </form>
  );
}

/* ----------------------------- RESULTADO ----------------------------- */

function Resultado({ respostas, onRefazer }: { respostas: Respostas; onRefazer: () => void }) {
  const diag = diagnosticar(respostas);
  const fase = FASES[diag.id];
  const n = diag.numeros;

  // Conteúdos da fase + os de cada incômodo, sem repetir título.
  const conteudos: Conteudo[] = [...CONTEUDOS_DA_FASE[diag.id]];
  for (const i of respostas.incomodos) {
    const c = CONTEUDO_DO_INCOMODO[i];
    if (!conteudos.some((x) => x.titulo === c.titulo)) conteudos.push(c);
  }

  return (
    <div className="space-y-6 md:space-y-8 animate-fade-up">
      {/* Cabeçalho da fase */}
      <div className="bg-verde-esc text-creme rounded-3xl p-6 md:p-12 shadow-card">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <p className="font-sans text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.16em] text-creme/70">
            {diag.certeza === "alta" ? "Sua fase" : "Sua fase provável"} · {fase.tag}
          </p>
        </div>
        <h2 className="font-serif text-[34px] md:text-[54px] leading-[1.04] font-medium mb-3">{fase.nome}</h2>
        <p className="font-serif italic text-[19px] md:text-[23px] leading-[1.35] text-creme/90 mb-6 max-w-[640px]">
          {fase.resumo}
        </p>
        <p className="font-sans text-[15px] md:text-[17px] leading-[1.65] text-creme/85 max-w-[680px]">{diag.motivo}</p>

        {diag.pendencias.length > 0 && (
          <div className="mt-6 bg-creme/10 rounded-2xl px-5 py-4">
            <p className="font-sans text-[14px] md:text-[15px] font-semibold text-creme mb-2">
              Por que &ldquo;provável&rdquo;
            </p>
            <ul className="space-y-2">
              {diag.pendencias.map((p) => (
                <li key={p} className="flex gap-2 font-sans text-[14px] md:text-[15px] leading-[1.55] text-creme/90">
                  <span aria-hidden="true" className="mt-2 w-1.5 h-1.5 rounded-full bg-creme/60 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <SeusNumeros n={n} proteina={fase.proteinaPorKg} />

      {diag.sinais.length > 0 && (
        <Bloco rotulo="Fique de olho" titulo="O que mais o seu Raio-X mostrou">
          <div className="space-y-4">
            {diag.sinais.map((s) => (
              <div key={s.titulo} className="rounded-2xl bg-branco border-l-4 border-sos-terracota px-5 py-4">
                <h4 className="font-sans text-[16px] font-semibold text-texto mb-1">{s.titulo}</h4>
                <p className="font-sans text-[15px] leading-[1.6] text-marrom">{s.texto}</p>
              </div>
            ))}
          </div>
        </Bloco>
      )}

      <Bloco rotulo="Entenda a sua fase" titulo="O que está acontecendo agora">
        <div className="space-y-4">
          {fase.oQueE.map((p) => (
            <p key={p} className="font-sans text-[16px] md:text-[17px] leading-[1.7] text-marrom">
              {p}
            </p>
          ))}
        </div>
      </Bloco>

      <Bloco rotulo="O que fazer" titulo="As melhores condutas para esta fase">
        <ol className="space-y-5">
          {fase.condutas.map((c, i) => (
            <li key={c.titulo} className="flex gap-4">
              <span className="w-8 h-8 shrink-0 rounded-full bg-sos-dourado/20 text-sos-dourado-esc font-serif text-[17px] flex items-center justify-center">
                {i + 1}
              </span>
              <div>
                <h4 className="font-sans text-[16px] md:text-[17px] font-semibold text-texto mb-1">{c.titulo}</h4>
                <p className="font-sans text-[15px] md:text-[16px] leading-[1.65] text-marrom">{c.texto}</p>
              </div>
            </li>
          ))}
        </ol>
      </Bloco>

      <Bloco rotulo="Cuidado" titulo="O que evitar nesta fase">
        <ul className="space-y-3">
          {fase.evitar.map((e) => (
            <li key={e} className="flex gap-3 font-sans text-[15px] md:text-[16px] leading-[1.6] text-marrom">
              <span aria-hidden="true" className="text-sos-terracota font-semibold shrink-0">
                ×
              </span>
              {e}
            </li>
          ))}
        </ul>
      </Bloco>

      {(respostas.condicoes.length > 0 || respostas.incomodos.length > 0) && (
        <Bloco rotulo="Para você" titulo="Ajustes para o seu caso">
          <div className="grid sm:grid-cols-2 gap-4">
            {respostas.condicoes.map((c) => (
              <Cartao key={c} titulo={CONDICOES[c].titulo} texto={CONDICOES[c].texto} />
            ))}
            {respostas.incomodos.map((i) => (
              <Cartao key={i} titulo={INCOMODOS[i].titulo} texto={INCOMODOS[i].texto} />
            ))}
          </div>
        </Bloco>
      )}

      {/* Conteúdos */}
      <div className="bg-branco rounded-3xl p-6 md:p-10 shadow-card border-t-4 border-sos-dourado">
        <p className="font-sans text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.16em] text-sos-dourado-esc mb-3">
          Próximo passo
        </p>
        <h3 className="font-serif text-[24px] md:text-[32px] leading-[1.15] font-medium text-texto mb-2">
          Assista agora aos conteúdos da sua fase
        </h3>
        <p className="font-sans text-[15px] md:text-[16px] text-marrom mb-6">
          Nesta ordem. Você não precisa ver o método inteiro de uma vez: comece pelo que é seu hoje.
        </p>
        <ol className="space-y-3 mb-8">
          {conteudos.map((c, i) => (
            <li key={c.titulo} className="flex gap-4 items-start rounded-2xl bg-sos-creme-soft px-5 py-4">
              <span className="font-serif text-[18px] text-sos-dourado-esc leading-[1.4]">{i + 1}.</span>
              <div>
                {c.url ? (
                  <a
                    href={c.url}
                    className="font-sans text-[16px] font-semibold text-texto underline decoration-sos-dourado underline-offset-4 hover:text-sos-dourado-esc"
                  >
                    {c.titulo}
                  </a>
                ) : (
                  <span className="font-sans text-[16px] font-semibold text-texto">{c.titulo}</span>
                )}
                {c.descricao && <p className="font-sans text-[14px] text-marrom mt-0.5">{c.descricao}</p>}
              </div>
            </li>
          ))}
        </ol>
        {AREA_DE_MEMBROS_URL && (
          <a
            href={AREA_DE_MEMBROS_URL}
            className="inline-flex items-center justify-center text-center rounded-full bg-[#F2C230] text-texto font-sans font-bold tracking-wide px-8 md:px-12 py-5 text-[16px] md:text-[17px] shadow-[0_10px_28px_rgba(214,165,20,0.38)] transition-all duration-200 hover:translate-y-[-2px] hover:bg-[#F5CB45]"
          >
            IR PARA A ÁREA DE MEMBROS
          </a>
        )}
      </div>

      <Bloco rotulo="Depois" titulo="Quando você muda de fase">
        <p className="font-sans text-[16px] md:text-[17px] leading-[1.7] text-marrom">{fase.proxima}</p>
        <p className="font-sans text-[15px] leading-[1.6] text-marrom mt-3">
          Refaça o Raio-X a cada 4 semanas ou sempre que algo mudar: a balança travar, a meta ficar
          perto ou o seu médico mexer na dose.
        </p>
      </Bloco>

      <div className="flex flex-col items-center gap-4 pt-2">
        <button
          type="button"
          onClick={onRefazer}
          className="rounded-full border-2 border-sos-dourado-esc text-sos-dourado-esc font-sans font-semibold px-8 py-3.5 text-[15px] hover:bg-sos-dourado-esc hover:text-creme transition-colors"
        >
          Refazer o Raio-X
        </button>
        <p className="font-sans text-[13px] leading-[1.6] text-marrom text-center max-w-[620px]">
          Este Raio-X orienta a sua alimentação e não substitui o acompanhamento individual. Dose,
          redução e suspensão da caneta são sempre decisão do seu médico.
        </p>
      </div>
    </div>
  );
}

function SeusNumeros({ n, proteina }: { n: Numeros; proteina: { min: number; max: number } }) {
  const itens: { rotulo: string; valor: string; detalhe: string }[] = [];

  if (n.hoje) {
    itens.push({
      rotulo: "Meta de proteína",
      valor: `${inteiro(n.hoje * proteina.min)} a ${inteiro(n.hoje * proteina.max)} g`,
      detalhe: `por dia · ${decimal(proteina.min)} a ${decimal(proteina.max)} g por kg`,
    });
    itens.push({
      rotulo: "Meta de água",
      valor: `${decimal((n.hoje * AGUA_ML_POR_KG.min) / 1000)} a ${decimal((n.hoje * AGUA_ML_POR_KG.max) / 1000)} L`,
      detalhe: `por dia · ${AGUA_ML_POR_KG.min} a ${AGUA_ML_POR_KG.max} ml por kg`,
    });
  }
  if (n.perdaKg !== null && n.perdaPct !== null) {
    itens.push({
      rotulo: n.perdaKg >= 0 ? "Você já perdeu" : "Desde antes da caneta",
      valor: n.perdaKg >= 0 ? `${decimal(n.perdaKg)} kg` : `+${decimal(-n.perdaKg)} kg`,
      detalhe: n.perdaKg >= 0 ? `${inteiro(n.perdaPct)}% do peso inicial` : "acima do peso inicial",
    });
  }
  if (n.ritmoKg4s !== null) {
    itens.push({
      rotulo: "Últimas 4 semanas",
      valor: n.ritmoKg4s >= 0 ? `−${decimal(n.ritmoKg4s)} kg` : `+${decimal(-n.ritmoKg4s)} kg`,
      detalhe: `${decimal(Math.abs(n.ritmoPct4s!))}% do peso`,
    });
  }
  if (n.faltaMetaKg !== null) {
    itens.push({
      rotulo: "Para a sua meta",
      valor: n.faltaMetaKg > 0 ? `${decimal(n.faltaMetaKg)} kg` : "Chegou",
      detalhe: n.faltaMetaKg > 0 ? `faltam, até ${decimal(n.meta!)} kg` : `meta de ${decimal(n.meta!)} kg`,
    });
  }
  if (n.imc !== null) {
    itens.push({ rotulo: "IMC", valor: decimal(n.imc), detalhe: "peso ÷ altura²" });
  }
  if (n.reganhoKg !== null && n.reganhoKg > 0) {
    itens.push({
      rotulo: "Desde o menor peso",
      valor: `+${decimal(n.reganhoKg)} kg`,
      detalhe: `menor peso: ${decimal(n.minimo!)} kg`,
    });
  }

  if (!itens.length) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
      {itens.map((i) => (
        <div key={i.rotulo} className="bg-branco rounded-2xl p-4 md:p-5 shadow-card border border-sos-borda-dourada">
          <p className="font-sans text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.1em] text-sos-dourado-esc mb-2">
            {i.rotulo}
          </p>
          <p className="font-serif text-[24px] md:text-[30px] leading-none text-texto mb-1.5">{i.valor}</p>
          <p className="font-sans text-[12px] md:text-[13px] text-marrom">{i.detalhe}</p>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------ PEÇAS ------------------------------ */

function Bloco({ rotulo, titulo, children }: { rotulo: string; titulo: string; children: React.ReactNode }) {
  return (
    <section className="bg-sos-creme-soft rounded-3xl p-6 md:p-10 border border-sos-borda-dourada">
      <p className="font-sans text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.16em] text-sos-dourado-esc mb-3">
        {rotulo}
      </p>
      <h3 className="font-serif text-[23px] md:text-[30px] leading-[1.15] font-medium text-texto mb-5">{titulo}</h3>
      {children}
    </section>
  );
}

function Cartao({ titulo, texto }: { titulo: string; texto: string }) {
  return (
    <div className="rounded-2xl bg-creme border border-sos-borda-dourada p-5">
      <h4 className="font-sans text-[16px] font-semibold text-texto mb-1.5">{titulo}</h4>
      <p className="font-sans text-[15px] leading-[1.6] text-marrom">{texto}</p>
    </div>
  );
}

function BotaoPrincipal({
  children,
  onClick,
  type = "button",
  disabled,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="inline-flex items-center justify-center rounded-full bg-verde-esc text-creme font-sans font-semibold tracking-wide px-8 md:px-10 py-4 md:py-[18px] text-[16px] md:text-[17px] shadow-card transition-all duration-200 hover:translate-y-[-1px] hover:bg-[#3E5244] disabled:opacity-40 disabled:hover:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-verde-esc"
    >
      {children}
    </button>
  );
}

function Ponto() {
  return <span aria-hidden="true" className="mt-2 w-1.5 h-1.5 rounded-full bg-sos-dourado shrink-0" />;
}

const inteiro = (n: number) => Math.round(n).toLocaleString("pt-BR");
const decimal = (n: number) => n.toLocaleString("pt-BR", { maximumFractionDigits: 1 });
