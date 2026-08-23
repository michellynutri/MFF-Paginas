import { Fraunces } from "next/font/google";

// Carregada aqui, e não no layout raiz, pra que o preload da Fraunces fique
// restrito a esta rota — as outras páginas do funil não pagam por ela.
export const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});
