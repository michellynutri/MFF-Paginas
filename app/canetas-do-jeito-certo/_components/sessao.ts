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
  return alvo;
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
