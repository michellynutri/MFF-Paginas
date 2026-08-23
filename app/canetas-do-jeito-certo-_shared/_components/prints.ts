// Prints de conversa com pacientes, os mesmos da /sos-canetas. Apontam pra
// pasta de lá em vez de duplicar os arquivos.
//
// As três têm proporções diferentes (0.91, 0.59, 0.57), então cada uma carrega
// a sua dimensão real e é renderizada com altura automática. A /sos-canetas
// encaixa as três num box 9:16 com object-cover, o que corta a primeira pela
// lateral e engole parte do texto — como são prints, recorte custa leitura.

export type Print = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export const PRINT_PROVA: Print[] = [
  {
    src: "/images/sos-canetas/before-after-1.jpg",
    width: 750,
    height: 821,
    alt: "Print de conversa no WhatsApp: paciente conta que perdeu 5,650 kg desde que começou, com foto da balança.",
  },
  {
    src: "/images/sos-canetas/before-after-2.jpg",
    width: 750,
    height: 1270,
    alt: "Print de conversa no WhatsApp: paciente conta que perdeu 7 kg em um mês e que o angiologista notou a melhora das pernas, com fotos da balança antes e depois.",
  },
];

export const PRINT_OFERTA: Print = {
  src: "/images/sos-canetas/before-after-3.jpg",
  width: 1019,
  height: 1779,
  alt: "Print de conversa no WhatsApp: paciente conta que está sem nenhum efeito colateral seguindo a alimentação e os suplementos do protocolo.",
};
