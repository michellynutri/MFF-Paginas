// Depoimentos REAIS de alunas da MIA, tirados do grupo das alunas (prints no Drive "02 Depoimentos > MIA";
// cópias em 03_EXPANSAO/criativos-infinitos/mia-ugc-01/depoimentos-mia/). Só o primeiro nome, sem telefone.
// Texto fiel à mensagem; só corrigimos digitação ("kilos", "mtoo", "a 43 dias").

export type Depoimento = { nome: string; texto: string; foto?: string; legenda?: string; posicao?: string };

/** frases curtas, para a tela 26 (trocam enquanto o diagnóstico é montado) */
export const FRASES: Depoimento[] = [
  { nome: "Andrea", texto: "Comecei em 31 de outubro com 109 kg. Hoje me pesei e estou com 104,2 kg. Chorei muito." },
  { nome: "Daiana", texto: "Quase 6 quilos a menos nesses 43 dias. Tô muito orgulhosa de mim." },
  { nome: "Meliza", texto: "Depois de anos vestindo 42/44, hoje vesti lindamente uma calça 40." },
];

/** com o print, para a oferta (tela 30) */
export const COM_FOTO: Depoimento[] = [
  {
    nome: "Andrea",
    texto:
      "Minha evolução até hoje. Destravou meu metabolismo. São 2 anos fazendo dieta sem perder 1 g. Agora ninguém me segura.",
    foto: "/images/quiz-mia/depoimentos/andrea.webp",
    legenda: "A tela de evolução do app da Andrea: de 109 para 105,2 kg",
    posicao: "center bottom", // mostra o peso e o gráfico
  },
  {
    nome: "Daiana",
    texto: "Fiz um comparativo: a primeira foto há 43 dias, a segunda ontem. Quase 6 quilos a menos nesses 43 dias.",
    foto: "/images/quiz-mia/depoimentos/daiana.webp",
    legenda: "Antes e depois de 43 dias, enviado pela Daiana",
  },
  {
    nome: "Meliza",
    texto: "Ainda estou em choque! Depois de anos vestindo 42/44, hoje vesti lindamente uma calça 40.",
    foto: "/images/quiz-mia/depoimentos/meliza.webp",
    legenda: "A etiqueta da calça nova da Meliza",
  },
];
