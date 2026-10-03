import { STIX_Two_Text } from "next/font/google";

// Serifa do hero da VSL: só os dois arquivos que a página usa (500 normal e
// itálico, ~60 KB), com preload. A instância do layout é preload: false porque
// o preload dela iria em TODAS as rotas, com todos os pesos. Esta sobrescreve
// --font-serif dentro do <main> da página — e por isso só pode ser usada em
// páginas em que a serifa aparece exclusivamente em font-medium (500); outro
// peso sairia sintetizado pelo navegador. O next/font emite o <link rel=preload>
// só nas rotas que importam este módulo, e só em rotas estáticas (nas
// dinâmicas o Next 16 descarta os hints — por isso a /mmf-vsl é pré-renderizada
// em /mmf-vsl/[h] e o middleware reescreve pra lá).
export const stixHero = STIX_Two_Text({
  subsets: ["latin"],
  weight: ["500"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});
