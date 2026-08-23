// A sessão acontece toda quinta-feira às 20h no horário de Brasília, e a
// página precisa se atualizar sozinha: assim que uma edição passa, data e
// cronômetro já apontam pra semana seguinte.
//
// São Paulo está fixo em UTC-3 desde 2019 (sem horário de verão), então dá pra
// calcular o instante direto em UTC — 20h de Brasília = 23h UTC. Isso importa
// porque o servidor roda em UTC e o navegador no fuso de quem acessa: fazendo a
// conta em UTC, os dois chegam exatamente no mesmo milissegundo.

const DIA_SEMANA_UTC = 4; // quinta-feira
const HORA_UTC = 23; // 20h em Brasília

// Quintas em que não vai ter sessão. Enquanto o alvo cair numa delas, data e
// cronômetro pulam pra semana seguinte. Formato "AAAA-MM-DD" no dia de
// Brasília — que aqui é o mesmo dia em UTC, já que 20h daqui é 23h lá.
const PULADAS = ["2026-08-20"];

const diaUTC = (d: Date) => d.toISOString().slice(0, 10);

const fmtLongo = new Intl.DateTimeFormat("pt-BR", {
  timeZone: "America/Sao_Paulo",
  weekday: "long",
  day: "numeric",
  month: "long",
});

const fmtDia = new Intl.DateTimeFormat("pt-BR", {
  timeZone: "America/Sao_Paulo",
  day: "numeric",
  month: "long",
});

const fmtNumerico = new Intl.DateTimeFormat("pt-BR", {
  timeZone: "America/Sao_Paulo",
  day: "2-digit",
  month: "2-digit",
});

export type Sessao = {
  /** Instante da próxima sessão, em ISO — base do cronômetro. */
  alvoISO: string;
  /** "quinta-feira, 14 de agosto" — para uso no meio de uma frase. */
  diaLongo: string;
  /** "Quinta-feira, 14 de agosto" — para uso isolado, como rótulo. */
  diaLongoTitulo: string;
  /** "14 de agosto" */
  dia: string;
  /** "14/08" */
  diaNumerico: string;
};

/** Próxima quinta-feira às 20h (Brasília) estritamente depois de `agora`. */
export function proximaQuinta(agora: Date = new Date()): Date {
  const alvo = new Date(
    Date.UTC(
      agora.getUTCFullYear(),
      agora.getUTCMonth(),
      agora.getUTCDate(),
      HORA_UTC,
      0,
      0,
      0,
    ),
  );
  alvo.setUTCDate(
    alvo.getUTCDate() + ((DIA_SEMANA_UTC - alvo.getUTCDay() + 7) % 7),
  );
  // Quinta depois das 20h: a edição desta semana já rolou, joga pra próxima.
  if (alvo.getTime() <= agora.getTime()) {
    alvo.setUTCDate(alvo.getUTCDate() + 7);
  }
  while (PULADAS.includes(diaUTC(alvo))) {
    alvo.setUTCDate(alvo.getUTCDate() + 7);
  }
  return alvo;
}

/**
 * ["07", "05", "10", "18"] — dias, horas, minutos e segundos até o alvo.
 * Fica aqui, e não dentro do <Cronometro>, porque o servidor também precisa
 * dela: é o que permite mandar o cronômetro já preenchido no HTML.
 */
export function partesRestantes(
  alvo: Date | string,
  agora: Date = new Date(),
): string[] {
  const alvoMs = (typeof alvo === "string" ? new Date(alvo) : alvo).getTime();
  const s = Math.floor(Math.max(0, alvoMs - agora.getTime()) / 1000);
  return [
    String(Math.floor(s / 86400)).padStart(2, "0"),
    String(Math.floor((s % 86400) / 3600)).padStart(2, "0"),
    String(Math.floor((s % 3600) / 60)).padStart(2, "0"),
    String(s % 60).padStart(2, "0"),
  ];
}

export function proximaSessao(agora: Date = new Date()): Sessao {
  const alvo = proximaQuinta(agora);
  const diaLongo = fmtLongo.format(alvo);
  return {
    alvoISO: alvo.toISOString(),
    diaLongo,
    // A classe `capitalize` do Tailwind não serve aqui: ela subiria também o
    // "De Agosto". Só a primeira letra da frase muda.
    diaLongoTitulo: diaLongo.charAt(0).toUpperCase() + diaLongo.slice(1),
    dia: fmtDia.format(alvo),
    diaNumerico: fmtNumerico.format(alvo),
  };
}
