import { STIX_Two_Text } from "next/font/google";

// Serifa do hero da VSL: só os dois arquivos que a página usa (500 normal e
// itálico, ~36 KB). A instância do layout tem todos os pesos; esta sobrescreve
// --font-serif dentro do <main> da página — e por isso só pode ser usada em
// páginas em que a serifa aparece exclusivamente em font-medium (500); outro
// peso sairia sintetizado pelo navegador.
//
// preload: false DE PROPÓSITO (03/10/2026). Com <link rel=preload as=font> o
// Chrome trata a fonte como bloqueadora do primeiro commit: quando ela chega
// dentro do período de bloqueio do font-display (~100 ms), o paint holding
// não é liberado e a tela fica em branco até o timeout (~1,45 s desde a
// navegação) — medido no ar com Lighthouse 13.5: primeiro paint em 1,4–1,6 s
// com preload, 0,4–0,7 s sem (ou com as fontes bloqueadas). Sem preload a
// fonte é descoberta no CSS inline do <head>, começa a baixar na primeira
// layout (~100 ms depois) e o texto pinta na fonte reserva até ela chegar.
export const stixHero = STIX_Two_Text({
  subsets: ["latin"],
  weight: ["500"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
  preload: false,
});
