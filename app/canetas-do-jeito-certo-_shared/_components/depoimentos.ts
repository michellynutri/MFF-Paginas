// Relatos reais de pacientes e alunas da Michelly, os mesmos que rodam nas
// páginas da /sos-canetas (o conjunto lá é idêntico nos dois arquivos, muda só
// a ordem).
//
// Os seis foram divididos em dois pontos da página para não empilhar duas
// fileiras de cards iguais no mesmo bloco. A separação não é aleatória: o
// primeiro grupo prova o RESULTADO (é o que sustenta o bloco de prova, junto
// dos vídeos) e o segundo prova o PROCESSO — responde ao "será que eu dou
// conta?" logo depois de a pessoa ver o preço.
//
// TODO(launch): o rótulo "no Manual" cita o produto S.O.S. Canetas. Decidir
// com a Michelly se fica assim ou vira uma referência neutra.

export type Depoimento = {
  quote: string;
  nome: string;
  detalhe: string;
};

/** Bloco de prova, ao lado dos vídeos. */
export const DEPOIMENTOS_PROVA: Depoimento[] = [
  {
    quote:
      "Eu tinha medo de parar a caneta e engordar tudo de volta. Agora não tenho mais.",
    nome: "Beatriz L.",
    detalhe: "12 semanas no Manual",
  },
  {
    quote: "Meu médico reduziu a dose antes do previsto.",
    nome: "Adriana P.",
    detalhe: "8 semanas no Manual",
  },
  {
    quote:
      "As pessoas perguntam o que eu fiz. Emagreci sem ficar com aquela cara de quem perdeu peso rápido demais.",
    nome: "Juliana T.",
    detalhe: "10 semanas no Manual",
  },
];

/** Depois da oferta, antes do fechamento. */
export const DEPOIMENTOS_OFERTA: Depoimento[] = [
  {
    quote:
      "Parei de ficar ansiosa sobre o que comer. Sabia exatamente o que fazer todos os dias.",
    nome: "Renata S.",
    detalhe: "4 semanas no Manual",
  },
  {
    quote: "O intestino destrancou depois da segunda semana.",
    nome: "Carla M.",
    detalhe: "6 semanas no Manual",
  },
  {
    quote: "Fiz o tratamento certo desde o início. Foi a melhor decisão.",
    nome: "Mariana F.",
    detalhe: "6 semanas no Manual",
  },
];
