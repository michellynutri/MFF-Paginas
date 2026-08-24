import { RodapeInstitucional } from "@/components/rodape-institucional";

type Props = {
  /** "noite" (variantes A e B) ou "branco" (variantes C e D). */
  tema?: "noite" | "branco";
  /**
   * Como o produto é chamado no aviso legal. As variantes A/B/C vendem uma
   * "sessão ao vivo"; a D vende um "workshop". A palavra tem que bater com a
   * que a página usou o tempo todo — um aviso que fala de "sessão" numa página
   * de workshop é a primeira coisa que um questionamento de reembolso pega.
   */
  tipo?: "sessao" | "workshop";
};

const AVISOS = {
  sessao:
    "Esta sessão tem caráter educativo e nutricional. O uso de medicamentos GLP-1 é uma decisão médica, e o conteúdo apresentado não substitui o acompanhamento do seu médico ou da sua nutricionista.",
  workshop:
    "Este workshop tem caráter educativo e nutricional. O uso de medicamentos GLP-1 é uma decisão médica, e o conteúdo não substitui o acompanhamento do seu médico ou nutricionista. Resultados variam de pessoa para pessoa.",
} as const;

export function Rodape({ tema = "noite", tipo = "sessao" }: Props) {
  const claro = tema === "branco";

  return (
    <RodapeInstitucional tema={tema}>
      <p
        className={`font-sans text-[13px] leading-[1.7] ${
          claro ? "text-cjc-dia-texto-suave" : "text-cjc-texto-suave"
        }`}
      >
        Canetas do Jeito Certo
      </p>
      <p
        className={`font-sans text-[12px] leading-[1.7] max-w-[640px] mx-auto mt-4 ${
          claro ? "text-cjc-dia-texto-fraco" : "text-cjc-texto-fraco"
        }`}
      >
        {AVISOS[tipo]}
      </p>
    </RodapeInstitucional>
  );
}
